import React, { Component } from 'react';
import styled from 'styled-components';
import Gs from '../Theme/globalStyles';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import LeftMBX from '../Component/leftBar'
import DumperShieldStatus from '../Component/popup/dumperShieldStatus'
import Collapse from '@kunukn/react-collapse';


class Governance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            dropDown: false,
            popup01: false
        }
    }

    render() {

        return (
            <>
                <MainContainer>
                    <LeftMBX />
                    <RightContainer>
                        <DSTitle01 className="wow fadeInUp" data-wow-delay="0.1s">   Governance </DSTitle01>
                        <DSTitle02 className="wow fadeInUp" data-wow-delay="0.1s">Dumper Shield protection period<span data-tip='Comming Soon' className="helpIco"><i className="fas fa-question-circle"></i></span>


                            <div className="linkBX01"> <a href="javascript:void(0);">About protection period</a> | <a href="javascript:void(0);" onClick={() => { this.setState({ popup01: true }) }}>Status</a></div>

                        </DSTitle02>
                        <FormMBX01 className="wow fadeInRight" data-wow-delay="0.1s">
                            <FormSbxLabel>Token symbol</FormSbxLabel>
                            <FormSbxContent >
                                <DDMenu onClick={() => this.onToggle02(1)}>
                                    BNB Token
                                    <div className="DDContainer">
                                        <Collapse className={"collapse " + (this.state.dropDown === 1 ? "active" : "")}
                                            isOpen={this.state.dropDown === 1}
                                            onChange={({ state }) => { this.setState({ item1: state }); }}
                                            onInit={({ state }) => { this.setState({ item1: state }); }}>
                                            <div className="DDSubContainer">
                                                <button>BNB</button>
                                                <button>ETH</button>
                                                <button>FTM</button>
                                            </div>
                                        </Collapse>
                                    </div>
                                </DDMenu>
                            </FormSbxContent>
                        </FormMBX01>
                        <FormMBX01 className="wow fadeInRight" data-wow-delay="0.2s">
                            <FormSbxLabel>Add more days for protection</FormSbxLabel>
                            <FormSbxContent >
                                <DDMenu style={{width:"45%"}} className="formBox">
                                    <span className="badge01">DAYS</span>
                                    <input type="text" />
                                </DDMenu>
                                <DDMenu style={{width:"45%"}} className="formBox">
                                    <span className="badge01">DAYS</span>
                                    <input type="text" />
                                </DDMenu>
                            </FormSbxContent>
                        </FormMBX01>
                        <FormMBX01 className="wow fadeInRight" data-wow-delay="0.3s">
                            <FormSbxLabel> </FormSbxLabel>
                            <FormSbxContent >
                                <button className="PlaOrBTN01">CREATE A PROPOSAL</button>
                            </FormSbxContent>
                        </FormMBX01>
                        <PlacOrdMBX>

                            <DSTitle01 className="wow fadeInRight" data-wow-delay="0.1s">Active Proposal </DSTitle01>

                            <OpfyTableBX className="wow fadeInRight" data-wow-delay="0.2s">
                                <table width="100%" border="0" cellSpacing="0" cellPadding="20">
                                    <tbody>
                                        <tr>
                                            <th width="65%" align="left" valign="middle" scope="col">Proposal</th>
                                            <th align="left" valign="middle" scope="col">Time to Vote</th>
                                            <th align="left" valign="middle" scope="col">&nbsp;</th>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>
                                                <div className='tableTitle01'>SMART dumper shield protaction period add 100 days
                                                    <span>End December 31 2023 12:00 am UTC</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="tableTimer">
                                                    <span>1</span>
                                                    <span>1</span>:
                                                    <span>2</span>
                                                    <span>4</span>:
                                                    <span>5</span>
                                                    <span>6</span>:
                                                    <span>3</span>
                                                    <span>4</span>
                                                </div>


                                            </td>
                                            <td>
                                                <div className="tableBTN">
                                                    <Link to="" className="tbBTN01">Nay</Link>
                                                    <Link to="" className="tbBTN02">Yea</Link>
                                                </div>

                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>
                                                <div className='tableTitle01'>DEGEN dumper shield protaction period add 100 days
                                                    <span>End December 31 2023 12:00 am UTC</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="tableTimer">
                                                    <span>1</span>
                                                    <span>1</span>:
                                                    <span>2</span>
                                                    <span>4</span>:
                                                    <span>5</span>
                                                    <span>6</span>:
                                                    <span>3</span>
                                                    <span>4</span>
                                                </div>


                                            </td>
                                            <td>
                                                <div className="tableBTN">
                                                    <Link to="" className="tbBTN01">Nay</Link>
                                                    <Link to="" className="tbBTN02">Yea</Link>
                                                </div>

                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>
                                                <div className='tableTitle01'>PDO dumper shield protaction period add 100 days
                                                    <span>End December 31 2023 12:00 am UTC</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="tableTimer">
                                                    <span>1</span>
                                                    <span>1</span>:
                                                    <span>2</span>
                                                    <span>4</span>:
                                                    <span>5</span>
                                                    <span>6</span>:
                                                    <span>3</span>
                                                    <span>4</span>
                                                </div>


                                            </td>
                                            <td>
                                                <div className="tableBTN">
                                                    <Link to="" className="tbBTN01">Nay</Link>
                                                    <Link to="" className="tbBTN02">Yea</Link>
                                                </div>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </OpfyTableBX>
                        </PlacOrdMBX>


                        <PlacOrdMBX className="wow fadeInRight" data-wow-delay="0.2s">
                            <DSTitle01 className="v2">Completed Votes</DSTitle01>
                            <FormMBX01>
                                <FormSbxLabel>Remove JNTR Transferring Rules.</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 0, Status: Approved, Participants said: Yea: 100% Nay:0% </FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>Add new rule.. </FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 0x546c04414d1e102A175ab2C41B522F0f924ec229, 90,0,0,0, withdwarFund(uint256,address), Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>Upgrade Liquidity contract.</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 2, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel> Withdraw from Side Reserve.</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 90000000000000000000, 0xc326DF3Bec90f94887d2756E03B51a222F2b0de4, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>setfundWalletRatio (9% Real Estate wallet ratio in contribution value).</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 0, Status: Approved, Participants said: Yea: 100% Nay:0% </FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>Max daily investment.</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 1000, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel> Daily Appreciation Limit. </FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 1000, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel> setfundWalletRatio (9% Real Estate wallet ratio in contribution value).</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 1, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>Side reserve allocation. </FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 10, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel> Upgrade Whitelist contract.</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 5, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>Open / close BuyBack.</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: true, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>Upgrade Whitelist contract.</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 6, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>Upgrade Whitelist contract.</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 7, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>Upgrade Liquidity contract.</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 3, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>Add new rule.. </FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 0x546c04414d1e102A175ab2C41B522F0f924ec229, 90,0,0,0, setRdemptionDayRelay(uint256), Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>set Redemption Day Delay.</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 7, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>Side reserve allocation.</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 99, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>Daily Appreciation Limit.</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 1, Status: Approved, Participants said: Yea: 100% Nay:0</FormSbxContent>
                            </FormMBX01>
                            <FormMBX01>
                                <FormSbxLabel>Daily Appreciation Limit.</FormSbxLabel>
                                <FormSbxContent className="darkTxt">Arguments: 101, Status: Approved, Participants said: Yea: 100% Nay:0%</FormSbxContent>
                            </FormMBX01>
                        </PlacOrdMBX>
                    </RightContainer>
                </MainContainer>

                <DumperShieldStatus isOpen={this.state.popup01} dismiss={() => { this.setState({ popup01: false }) }} />
                <ReactTooltip effect="solid" className="myTip" />
            </>
        );
    }
    onToggle = index =>
        this.setState(state => ({ index: state.index === index ? null : index }));
    onToggle02 = dropDown =>
        this.setState(state => ({ dropDown: state.dropDown === dropDown ? null : dropDown }));
}



// Common Style Div 


const FlexDiv = styled.div`
display: flex; align-items: center; justify-content:center; flex-wrap:wrap; width:100%;
`;

const MainContainer = styled(FlexDiv)`
 width: 100%; align-items:stretch; justify-content:flex-start; 
`
const RightContainer = styled(FlexDiv)`
  width:calc(100% - 82px); align-items: flex-start; justify-content:flex-start; padding:18px 56px; align-content:baseline;
`

const FormMBX01 = styled(FlexDiv)`
    justify-content:flex-start; flex-direction:row; margin-bottom:20px;

`
const FormSbxLabel = styled(FlexDiv)`
    width:30%; justify-content:flex-start; font-size:16px; font-weight:700; 
`

const FormSbxContent = styled(FlexDiv)`
 width:70%; justify-content:flex-start;

 &.darkTxt{ color:#9a9a9a; font-size:14px; font-weight:400; line-height:21px; margin-bottom:18px; }

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
    &.formBox{ position:relative;
        input{ width:100%; height:52px; padding:6px 0; background-color:transparent; border:0px; color:#fff; font-size: 16px; font-weight:400;}
        :after{ display:none;}
        .badge01{ background-color:#5a5e67; color:#fff; font-size:15px; font-weight:700; position: absolute; right: 0; top: 0; bottom: 0; min-width: 120px; text-align: center; display: flex; align-items: center; justify-content: center  }
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
const DSTabLinkBX = styled(FlexDiv)`
    justify-content:flex-start; 

    button{ font-size:16px; font-weight:700; color:#fff; margin-right:35px; padding: 0;
        :hover, &.active{ color:#00f02b;}
    }
`


const DSTitle01 = styled(FlexDiv)`
 justify-content:space-between; font:700 36px/40px 'Kanit', arial; color:#00f02b;  
 &.v2{ margin:10px 0 40px 0;}
 .DSrPart{ display: flex; align-items:center; justify-content:center; font-size:16px; color:#fff; font-weight:700; } 
 .linkBX01{ display: flex; align-items:center; justify-content:center; font-size:16px; color:#5a5e67; font-weight:300; 
        a{ color:#00f02b; margin:0 8px; font-family:'IBM Plex Mono', Arial,sans-serif; font-weight:700; :hover{text-decoration:underline;}}
}
`
const DSTitle02 = styled(FlexDiv)`
    justify-content:flex-start;   font:700 21px/40px 'IBM Plex Mono', arial; color:#ffffff; margin:22px 0; 

    .linkBX01{ display: flex; align-items:center; justify-content:center; font-size:16px; color:#5a5e67; font-weight:300;  margin-left:auto;
    a{ color:#00f02b; margin:0 8px; font-family:'IBM Plex Mono', Arial,sans-serif; font-weight:700; :hover{text-decoration:underline;} }

}
`
const TabNav = styled(FlexDiv)`
padding-top:50px; flex-direction:row; 
    .tab-Link{font-size:24px;font-weight:700;color:#fff;width:33.33%;text-align:center;border-bottom:3px solid #393d46;padding-bottom:30px; position:relative;
        i{ position:absolute; top: -3px;  margin-left: 3px;
            i{font-size:14px; color:#000; width:23px; height:23px; background-color:#00f02b; font-style:normal; display:flex; align-items:center;justify-content:center; border-radius:50%;}
        } 
    }
    .tab-Link.active{color:#00f02b;border-bottom-color:#00f02b;} 
`
const OpfyTableBX = styled(FlexDiv)` 
    margin:50px 0; font-size:14px; color:#fff; 
    p{ color:#00f02b; font-size:12px; margin-top:15px; text-align:left; width:100%;} 
    .sortLink{ position:absolute; right:12px; color:#9a9a9a; top: 18px; font-size:18px; :hover{color:#fff;}}
    .deleteBTN{ background: transparent; border:none; font-size:24px; color:#53575d; margin:0 auto; :hover{color:#c32b2d;}    }
    .OpfyBTNbar{ display: flex; align-items:center; justify-content:flex-start; width:210px;

        &.v2{width:180px; justify-content: center;}

        .btn01{width:155px; font-weight:700; height:40px; border:2px solid #00f02b; border-radius:5px; color:#00f02b; :hover{ color:#000; background-color:#00f02b;} }
        .btn02{ color:#858686; padding:10px; margin-left:6px; :hover{ color:#c32b2d; }}
    }
    table tr td{ border:1px solid #545861;    padding:20px;
        &:nth-last-child(01){ border-right:0px; width:212px;}
        &:nth-child(01){ border-left:0px;   a{color:#4b4bff; :hover{text-decoration:underline}}} 
        &.bor01{border-right:5px solid #545861; }
        &.color02{ color:#3131ff;}
    }
    table tr th{ border:2px solid #545861; color:#9a9a9a; position:relative;
        &:nth-last-child(01){ border-right:0px;}
        &:nth-child(01){ border-left:0px;}
        &.bor01{border-right:5px solid #545861; }
    } 
    table tr:hover td{background-color:#151A1C;}

    .tableTitle01{ width:100%; display:flex; align-items:flex-start; justify-content:flex-start; flex-direction:column; 
    font-size:16px; font-weight:700; color:#fff;  span{ color:#9a9a9a; font-size:12px; font-weight:400; padding:6px 0;}}

    .tableTimer{ width:100%; display:flex; align-items:center; justify-content:flex-start; 
    font-size:18px; font-weight:700; color:#fff;  
    span{ width:25px; height:33px; border:1px solid #5a5e67; border-radius:3px; display:inline-flex; align-items:center; justify-content:center; margin:0 3px}
    }

    .tableBTN{ width:235px; display:flex; align-items:center; justify-content:space-between;}
    .tbBTN01{width:109px; height:40px; background-color:#c32b2d; color:#fff; border-radius:5px; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:700; :hover{filter:brightness(1.2);}    }
    .tbBTN02{width:109px; height:40px; background-color:#00f02b; color:#5d6168; border-radius:5px; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:700; :hover{filter:brightness(1.2);}
    




`
const PlacOrdMBX = styled(FlexDiv)`
    padding:50px 0;  color:#fff; border-top:1px solid #1e2127;

`
export default Governance;