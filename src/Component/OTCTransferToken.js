import { Component } from "react";
import styled from 'styled-components';
import Collapse from '@kunukn/react-collapse';
import { currencyAddresses, ZERO_ADDRESS } from "../constants";
import notificationConfig from '../config/notificationConfig'
import { getBalanceOfTokens, otcTransferToken } from "../Service/otc_function";
import { getAccountaddress, metamask_connection } from "../Service/metamask_function";
import Loader from "react-loader-spinner";
import Web3 from "web3";
import { Link } from 'react-router-dom';    

class OTCTransferTokens extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 2,
            dropDown: false,
            popup01: false,
            popup02: false,
            searchBX: false,
            tokensSymbolToTransfer: "DEGEN",
            tokenTaxProtected: false,
            transferAsSale: true,
            receiverWalletAddress: "",
            transferTokensAmount: "",
            paymentType: "BNB",
            paymentAmount: "",
            confirmatory: ZERO_ADDRESS,
            transferLoading: false,
            balances: {}
        }
    }

    async componentDidMount() {
        let address = await getAccountaddress()
        if (address !== null && address !== "" && address !== undefined) {
            let balances = await getBalanceOfTokens({
                token: currencyAddresses[this.state.tokensSymbolToTransfer],
                user: address
            })
            this.setState({ balances })
        }
    }

    onToggle02 = dropDown =>
        this.setState(state => ({ dropDown: state.dropDown === dropDown ? null : dropDown }));

    floatOnly(event) {
        if (event.shiftKey === true) event.preventDefault();

        var code = event.keyCode;

        if (
            (code >= 48 && code <= 57) ||
            (code >= 96 && code <= 105) ||
            code === 8 ||
            code === 9 ||
            code === 37 ||
            code === 39 ||
            code === 46 ||
            code === 190 ||
            code === 110
        ) {
            // allowed characters
        } else event.preventDefault();

        if (
            event.target.value.indexOf(".") !== -1 &&
            (code === 190 || code === 110)
        )
            event.preventDefault();
    }

    async intOnly(event) {
        if (event.shiftKey === true)
            event.preventDefault();

        var code = event.keyCode;

        if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105) || code === 8 || code === 9 || code === 37 || code === 39 || code === 46) {
            // allowed characters
        } else
            event.preventDefault();
    }

    _onChangeRadio(e) {
        const name = e.target.name;
        this.setState({
            [name]: (e.target.value) === "true" ? true : false,
        }, () => {
            if (name === "changeFee") {
                this.setIsValidLicenseAddress()
            }
        });
        if (e.target.value === "No") {
            this.setState({
                primaryColor: "#fcf302",
                secondaryColor: "#14b745",
                swapButtonColor: "#91dc27",
            });
        }
    }

    async handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    async handleTransferToken(network) {

        let newNetworkId = localStorage.getItem("chainId")

        if (
            network === "Ethereum" &&
            (newNetworkId === "0x61" || newNetworkId === "0x38")
        ) {
            notificationConfig.warning("Change metamask network to Ethereum!");
            return;
        } else if (
            network === "BSC" &&
            (newNetworkId === "0x2A" || newNetworkId === "0x1")
        ) {
            notificationConfig.warning("Change metamask network to Binance!");
            return;
        }

        const {
            transferTokensAmount,
            receiverWalletAddress,
            transferAsSale,
            tokenTaxProtected,
            paymentType,
            paymentAmount,
            confirmatory,
            balances
        } = this.state;

        if (transferTokensAmount === "" || transferTokensAmount === "0" || transferTokensAmount <= 0) {
            notificationConfig.info("Please Enter Valid Token Amount");
            return 0;
        }
        if (receiverWalletAddress === "0x" || receiverWalletAddress === "") {
            notificationConfig.info("Please Enter Valid Receiver Wallet Address");
            return 0;
        }

        if (tokenTaxProtected) {
            if (confirmatory === "0x" || confirmatory === "" || confirmatory === ZERO_ADDRESS) {
                notificationConfig.info("Please Enter Valid Confirmatory Address");
                return 0;
            }

            if (Number(transferTokensAmount) > ((Number(balances.total) - Number(balances.available)) / 10 ** 18)) {
                notificationConfig.info("Insufficient Balance For Restricted Transfer");
                return 0;
            }
        } else {
            // if (Number(transferTokensAmount) > (Number(balances.available) / 10 ** 18)) {
            //     console.log('============');
            //     console.log(Number(transferTokensAmount));
            //     console.log(balances.available);
            //     console.log((Number(balances.available) / 10 ** 18));
            //     notificationConfig.info("Insufficient Balance For Transfer");
            //     return 0;
            // }
        }

        if (transferAsSale) {
            if (paymentAmount === "" || paymentAmount === "0" || paymentAmount <= 0) {
                notificationConfig.info("Please Enter Valid Payment Amount");
                return 0;
            }
        }

        this.setState({ transferLoading: true })

        let otcTransferTokenData = {};

        console.log(Web3.utils.toWei(transferTokensAmount))
        otcTransferTokenData["buyer"] = ZERO_ADDRESS;
        otcTransferTokenData["tokenSell"] = "0xD337Efbb55DdcBFdc1d7F4A2C32eB58a8851DC93";
        otcTransferTokenData["sellAmount"] = Web3.utils.toWei(transferTokensAmount);
        otcTransferTokenData["wantToken"] = currencyAddresses["BNB"];
        otcTransferTokenData["router"] = ZERO_ADDRESS;
        otcTransferTokenData["value"] = Web3.utils.toWei(transferTokensAmount);
        otcTransferTokenData["confirmatory"] = this.state.confirmatory;
        otcTransferTokenData["token"] = currencyAddresses[this.state.tokensSymbolToTransfer];
        otcTransferTokenData["to"] = receiverWalletAddress;

        otcTransferTokenData["transferType"] = "nonRestrictedTransfer"

        if (transferAsSale) {
            otcTransferTokenData["transferType"] = "transferAsSale"
        } else if (tokenTaxProtected) {
            otcTransferTokenData["transferType"] = "tokenTaxProtected"
        }


        await otcTransferToken(otcTransferTokenData,
            (hash) => {
                this.setState({
                    // swapLoading: true,
                    // txIdSent: hash,
                    // txLinkSend: data[networkId].explorer + '/tx/' + hash,
                });
            },
            async (receipt) => {
                console.log("receipt")
                console.log(receipt)
                this.setState({ transferLoading: false })
                notificationConfig.success('Tokens Tranfer Successfully!');
            },
            async (error) => {
                this.setState({ transferLoading: false })
                if (error.code === 4001) {
                    notificationConfig.error("Transaction rejected!")
                }
            }
        );

    }

    render() {

        return (
            <>
                <PlacOrdMBX>
                    <DSTitle01>
                        <span>Transfer Tokens <span data-tip='Tokens transferred through the Dumper Shield remain behind the Dumper Shield for the receiver, regardless of method utilized.' className="helpIco"><i className="fas fa-question-circle"></i></span> </span></DSTitle01>

                </PlacOrdMBX>
                <FormMBX01>
                    <FormSbxLabel>Tokens symbol to transfer</FormSbxLabel>
                    <FormSbxContent >
                        <DDMenu onClick={() => this.onToggle02(1)}>
                            {this.state.tokensSymbolToTransfer}
                            <div className="DDContainer">
                                <Collapse className={"collapse " + (this.state.dropDown === 1 ? "active" : "")}
                                    isOpen={this.state.dropDown === 1}
                                    onChange={({ state }) => { this.setState({ item1: state }); }}
                                    onInit={({ state }) => { this.setState({ item1: state }); }}>


                                    <div className="DDSubContainer">
                                        <button onClick={() => this.setState({ tokensSymbolToTransfer: "DEGEN" })}>Degen</button>
                                        <button>BNB</button>
                                        <button>ETH</button>
                                        <button>FTM</button>
                                    </div>
                                </Collapse>
                            </div>
                        </DDMenu>
                    </FormSbxContent>
                </FormMBX01>

                <FormMBX01>
                    <FormSbxLabel>Type of tokens to transfer <span data-tip='Help Text here' className="helpIco"><i className="fas fa-question-circle"></i></span></FormSbxLabel>
                    <FormSbxContent >
                        <DDMenu className="noBorder">
                            <div className="md-radio md-radio-inline">
                                <input type="radio" defaultChecked id="radio145" name="tokenTaxProtected" value="false" onChange={(e) => this._onChangeRadio(e)} /><label htmlFor="radio145">
                                    Non tax protected tokens<span data-tip='Non tax protected tokens are immediately available for you to access to and use to transfer, sell, freeze, or any other option allowed under the Dumper Shield' className="helpIco"><i className="fas fa-question-circle"></i></span>
                                </label>
                            </div>
                            <div className="md-radio md-radio-inline">
                                <input type="radio" id="radio146" name="tokenTaxProtected" value="true" onChange={(e) => this._onChangeRadio(e)} /><label htmlFor="radio146">
                                    Tax protected tokens<span data-tip='Tax protected token require another person to help access your token and an accountant should be consulted' className="helpIco"><i className="fas fa-question-circle"></i></span>
                                </label>
                            </div>
                        </DDMenu>
                    </FormSbxContent>
                </FormMBX01>
                <FormMBX01>
                    <FormSbxLabel>Tokens amount to transfer</FormSbxLabel>
                    <FormSbxContent >
                        <DDMenu className="formBox">
                            <input type="text" name="transferTokensAmount" onChange={this.handleInputChange.bind(this)} value={this.state.transferTokensAmount} onKeyDown={this.floatOnly.bind(this)} autoComplete="off" />
                        </DDMenu>
                    </FormSbxContent>
                </FormMBX01>

                <FormMBX01>
                    <FormSbxLabel>Receiver wallet address <span data-tip='Wallet address where you want the tokens to transfer to' className="helpIco"><i className="fas fa-question-circle"></i></span></FormSbxLabel>
                    <FormSbxContent >
                        <DDMenu className="formBox">
                            <input type="text" name="receiverWalletAddress" onChange={this.handleInputChange.bind(this)} autoComplete="off" />
                        </DDMenu>
                    </FormSbxContent>
                </FormMBX01>


                <FormMBX01>
                    <FormSbxLabel>Type of transfer</FormSbxLabel>
                    <FormSbxContent >
                        <DDMenu className="noBorder">
                            <div className="md-radio md-radio-inline">
                                <input type="radio" id="radio147" defaultChecked name="transferAsSale" value="true" onChange={(e) => this._onChangeRadio(e)} /><label htmlFor="radio147">
                                    Transfer as a sale
                                </label>
                            </div>
                            <div className="md-radio md-radio-inline">
                                <input type="radio" id="radio148" name="transferAsSale" value="false" onChange={(e) => this._onChangeRadio(e)} /><label htmlFor="radio148">
                                    Transfer for free
                                </label>
                            </div>
                        </DDMenu>
                    </FormSbxContent>
                </FormMBX01>
                {this.state.transferAsSale ?
                    (<>
                        <FormMBX01>
                            <FormSbxLabel>Payment type<span data-tip='Currently support payment methods' className="helpIco"><i className="fas fa-question-circle"></i></span></FormSbxLabel>
                            <FormSbxContent >
                                <DDMenu onClick={() => this.onToggle02(2)}>
                                    {this.state.paymentType}
                                    <div className="DDContainer">
                                        <Collapse className={"collapse " + (this.state.dropDown === 2 ? "active" : "")}
                                            isOpen={this.state.dropDown === 2}
                                            onChange={({ state }) => { this.setState({ item2: state }); }}
                                            onInit={({ state }) => { this.setState({ item2: state }); }}>
                                            <div className="DDSubContainer">
                                                <button>{this.state.paymentType}</button>
                                                {/* <button>ETH</button>
                                                <button>FTM</button> */}
                                                <button style={{ color: "#00f02b" }}><i className="fas fa-plus" ></i>Add new token as a payment type</button>
                                            </div>
                                        </Collapse>
                                    </div>

                                </DDMenu>
                            </FormSbxContent>
                        </FormMBX01>
                        <FormMBX01>
                            <FormSbxLabel>Payment amount<span data-tip='Converted to USD at market average price' className="helpIco"><i className="fas fa-question-circle"></i></span></FormSbxLabel>
                            <FormSbxContent >
                                <DDMenu className="formBox">
                                    <input type="text" name="paymentAmount" onChange={this.handleInputChange.bind(this)} value={this.state.paymentAmount} onKeyDown={this.floatOnly.bind(this)} autoComplete="off" />
                                </DDMenu>
                            </FormSbxContent>
                        </FormMBX01>
                    </>)
                    :
                    null
                }
                {this.state.tokenTaxProtected ?
                    (<FormMBX01>
                        <FormSbxLabel>To transfer restricted tokens under tax protection, please provide confirmatory wallet address<span data-tip='Currently support payment methods' className="helpIco"><i className="fas fa-question-circle"></i></span></FormSbxLabel>
                        <FormSbxContent >
                            <DDMenu className="formBox">
                                <input type="text" name="confirmatory" onChange={this.handleInputChange.bind(this)} autoComplete="off" />
                            </DDMenu>
                        </FormSbxContent>
                    </FormMBX01>)
                    : null}
                <FormMBX01>
                    <FormSbxLabel> </FormSbxLabel>
                    <FormSbxContent >
                        {localStorage.getItem("account") !== null ?
                            <button className="PlaOrBTN01" onClick={() => this.handleTransferToken("BSC")}>
                                {this.state.transferLoading ?
                                    <Loader type="ThreeDots" color="#fff" height={15} width={80} />
                                    :
                                    this.state.tokenTaxProtected ? "TRANSFER TAX PROTECTED TOKENS" : "TRANSFER NON TAX PROTECTED TOKENS"
                                }
                            </button>
                            :
                            (
                                <button className="PlaOrBTN01" onClick={() => metamask_connection(
                                    localStorage.getItem("account"),
                                    "ahrefClick"
                                )}>
                                    CONNECT WALLET
                                </button>
                            )}
                    </FormSbxContent>
                </FormMBX01>
            </>
        )
    }
}

const FlexDiv = styled.div`
display: flex; align-items: center; justify-content:center; flex-wrap:wrap; width:100%;
`;

const DSTitle01 = styled(FlexDiv)`
 justify-content:space-between; font:700 36px/40px 'Kanit', arial; color:#00f02b;  
 .DSrPart{ display: flex; align-items:center; justify-content:center; font-size:16px; color:#fff; font-weight:700; }
`

const FormMBX01 = styled(FlexDiv)`
    justify-content:flex-start; flex-direction:row; margin-bottom:20px;

`
const FormSbxLabel = styled(FlexDiv)`
    width:30%; justify-content:flex-start; font-size:16px; font-weight:700; 
`

const FormSbxContent = styled(FlexDiv)`
 width:70%; justify-content:flex-start;

 .md-radio label{ font-size:16px; color:#fff; font-weight:400;}
 .md-radio label:after{ background-color:#00f02b;}

 .md-radio label:before, .md-radio input[type="radio"]:checked + label:before { border: 2px solid #5a5e67;  left: -2px; top: -2px; width: 24px; height: 24px;}


 .PlaOrBTN01{ min-width:344px; font-size:16px; font-weight:700; height:60px; background-color:#00f02b; color:#5d6168; border-radius:10px;
    :hover{ background-color:#0dd732;}
} 
`

const DDMenu = styled(FlexDiv)`
    justify-content:flex-start; position:relative; height:56px; border-radius:10px;  border:2px solid #5a5e67;  
    font-size: 16px; font-weight:400; padding:0 15px;
    i{max-width:80px; margin-right:10px;}
    :after{ content: ""; border-width:7px; border-style:solid; border-color:#fff transparent transparent transparent; position:absolute;   right: 16px;  top: 25px; }

    &.formBox{
        input{ width:100%; height:52px; padding:6px 0; background-color:transparent; border:0px; color:#fff; font-size: 16px; font-weight:400;}
        :after{ display:none;}
    }
    &.noBorder{
        :after{ display:none;}
        border:0px;
    }


    .DDContainer{ width:100%; z-index:10;   position:absolute; left:0; top:calc(100% + 6px);}
    .DDSubContainer{ width:100%;  color:white; border-radius:10px; background-color:rgba(41,42,48,0.95); padding:10px; 
        margin:0 0 8px 0;
    
        button{ width:100%; color:#fff; border-radius:8px; text-align:left;display:block; padding:10px 14px; border:none; outline:none; 
            :hover{  background-color:rgba(255,255,255,0.05); }
        }
    
    
    }
`

const PlacOrdMBX = styled(FlexDiv)`
    padding:50px 0;  color:#fff; border-top:1px solid #1e2127; 
`

export default OTCTransferTokens;