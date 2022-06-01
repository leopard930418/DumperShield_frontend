import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../modal';
import Collapse from '@kunukn/react-collapse';
// icon images
import ExchnICO from '../../Assets/images/exhanICON.png'  
import ExchnICO02 from '../../Assets/images/exhanICON02.png'  


class BuyReqPopup extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            dropDown: false,
            index: 1, 
        }
    }

    render() { 
    return ( 
            <Modal isOpen={this.props.isOpen} dismiss={this.props.dismiss}>  
                <BuyRPopupContainer> 
                <TabLinkbx> 
                    <button className={(this.state.index === 1 ? "active" : "")} onClick={() => this.onToggle(1)}>List buy request</button>
                    <button className={(this.state.index === 2 ? "active" : "")} onClick={() => this.onToggle(2)}>List sell request</button>
               </TabLinkbx>
               <Collapse className={"collapse noAni " + (this.state.index === 1 ? "active" : "")}
                            isOpen={this.state.index === 1}
                            onChange={({ state }) => { this.setState({ item1: state }); }}
                            onInit={({ state }) => { this.setState({ item1: state }); }}>
                         
                         <FormMBX01> 
                         <FormSbxLabel>Token symbol to buy</FormSbxLabel>
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

                    <FormMBX01>
                                <FormSbxLabel>Amount of tokens</FormSbxLabel>
                                <FormSbxContent >
                                    <DDMenu className="formBox">
                                        <input type="text" />
                                    </DDMenu>
                                    <span className="infotxt">[$750]</span>
                                </FormSbxContent>
                    </FormMBX01>
                    <Spacer>   <a className="exchangLink" href="#"></a>
                    </Spacer>

                    <FormMBX01>
                                <FormSbxLabel>Token symbol to buy</FormSbxLabel>
                                <FormSbxContent >
                                    <DDMenu onClick={() => this.onToggle02(2)}>
                                         BNB
                                        <div className="DDContainer"> 
                                            <Collapse className={"collapse " + (this.state.dropDown === 2 ? "active" : "")}
                                                isOpen={this.state.dropDown === 2}
                                                onChange={({ state }) => { this.setState({ item2: state }); }}
                                                onInit={({ state }) => { this.setState({ item2: state }); }}> 
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

                    <FormMBX01>
                                <FormSbxLabel>Amount of tokens</FormSbxLabel>
                                <FormSbxContent >
                                    <DDMenu className="formBox">
                                        <input type="text" />
                                    </DDMenu>
                                    <span className="infotxt">[$750]</span>
                                </FormSbxContent>
                    </FormMBX01>

                    <FormBTNBX>
                        <button>LIST BUY REQUEST</button>
                    </FormBTNBX> 



                    </Collapse>
                    <Collapse className={"collapse noAni " + (this.state.index === 2 ? "active" : "")}
                            isOpen={this.state.index === 2}
                            onChange={({ state }) => { this.setState({ item2: state }); }}
                            onInit={({ state }) => { this.setState({ item2: state }); }}>
                         
                         <FormMBX01> 
                         <FormSbxLabel>Token symbol to sell</FormSbxLabel>
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

                    <FormMBX01>
                                <FormSbxLabel>Amount of tokens</FormSbxLabel>
                                <FormSbxContent >
                                    <DDMenu className="formBox">
                                        <input type="text" />
                                    </DDMenu>
                                    <span className="infotxt">[$750]</span>
                                </FormSbxContent>
                    </FormMBX01>
                    <Spacer>   <a className="exchangLink red" href="#"></a>
                    </Spacer>

                    <FormMBX01>
                                <FormSbxLabel>Token symbol to buy</FormSbxLabel>
                                <FormSbxContent >
                                    <DDMenu onClick={() => this.onToggle02(2)}>
                                         BNB
                                        <div className="DDContainer"> 
                                            <Collapse className={"collapse " + (this.state.dropDown === 2 ? "active" : "")}
                                                isOpen={this.state.dropDown === 2}
                                                onChange={({ state }) => { this.setState({ item2: state }); }}
                                                onInit={({ state }) => { this.setState({ item2: state }); }}> 
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

                    <FormMBX01>
                                <FormSbxLabel>Amount of tokens</FormSbxLabel>
                                <FormSbxContent >
                                    <DDMenu className="formBox">
                                        <input type="text" />
                                    </DDMenu>
                                    <span className="infotxt">[$750]</span>
                                </FormSbxContent>
                    </FormMBX01>

                    <FormBTNBX>
                        <button className="red">LIST SELL REQUEST</button>
                    </FormBTNBX> 



                    </Collapse>

                   
                </BuyRPopupContainer>
 

            </Modal>
        
    );
    }

    onToggle = index =>
    this.setState(state => ({ index: state.index === index ? null : index }));

    onToggle02 = dropDown =>
    this.setState(state => ({ dropDown: state.dropDown === dropDown ? null : dropDown })); 
}

const FlexDiv = styled.div`
display: flex; align-items: center; justify-content:center; flex-wrap:wrap; width:100%;
`;

const BuyRPopupContainer = styled(FlexDiv)`
    max-width:872px; margin:0 auto; 
`
const BrPtitle01 = styled(FlexDiv)`
 font-size:36px; font-weight:700; color:#fff;   margin-bottom:60px;
`

const FormMBX01 = styled(FlexDiv)`
    justify-content:flex-start; flex-direction:row; margin-bottom:20px;

`
const FormSbxLabel = styled(FlexDiv)`
    width:350px; justify-content:flex-start; font-size:18px; font-weight:300; 
`

const FormSbxContent = styled(FlexDiv)`
 width:calc(100% - 350px); justify-content:flex-start; position:relative;

 .infotxt{ position:absolute; font-size:12px; color:#9a9a9a; right: 0;  bottom: -19px;}

 .md-radio label{ font-size:16px; color:#fff; font-weight:400;}
 .md-radio label:after{ background-color:#00f02b;}

 .md-radio label:before, .md-radio input[type="radio"]:checked + label:before { border: 2px solid #5a5e67;  left: -2px; top: -2px; width: 24px; height: 24px;} 
`

const DDMenu = styled(FlexDiv)`
    justify-content:flex-start; position:relative; height:64px; border-radius:10px;  border:2px solid #5a5e67;  
    font-size: 16px; font-weight:400; padding:0 15px;
    i{max-width:80px; margin-right:10px;}
    :after{ content: ""; border-width:7px; border-style:solid; border-color:#fff transparent transparent transparent; position:absolute;   right: 16px;  top: 25px; }

    &.formBox{
        input{ width:100%; height:64px; padding:6px 0; background-color:transparent; border:0px; color:#fff; font-size: 16px; font-weight:400;}
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
const FormBTNBX = styled(FlexDiv)`
    margin-top:40px;
button{ width:100%;  font-size:24px; font-weight:700; height:70px; background-color:#00f02b; color:#5d6168; border-radius:10px;
    :hover{ background-color:#0dd732; color:#313740;} }

    button.red{ background-color:#c32b2d;  color:#fff; :hover{ background-color:#ab1012; color:#fff;} }
`
const Spacer = styled(FlexDiv)`
    height:1px; margin:60px 0 60px 0; background-color: #1e2127; position:relative; 
    .exchangLink{ display:block; width:62px; height:46px; background-image: url(${ExchnICO}); background-repeat: no-repeat; background-position: center center; position:absolute; right:230px; top:-23px;  
    &:hover{ filter:grayscale(1);}
    &.red{ background-image: url(${ExchnICO02}); }
    
    } 
` 
const TabLinkbx = styled(FlexDiv)` 
    margin:10px 0 30px 0; 

    button{ font-size:21px; font-weight:700; color:#fff; padding:12px 8px; line-height:56px; border-bottom:3px solid #393d46; width:50%; 
       &:hover, &.active{ color:#00f02b; border-bottom:3px solid #00f02b; }
       &.active:nth-last-child(01){ color:#c32b2d; border-bottom:3px solid #c32b2d; }
    } 
`









export default BuyReqPopup;

