import React, { Component } from 'react';
import styled from 'styled-components';
import Gs from '../Theme/globalStyles';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import LeftMBX from '../Component/leftBar'
import GetwayStatus from '../Component/popup/gatewayStatus'
import Collapse from '@kunukn/react-collapse';


class Gateway extends Component {

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
                        <DSTitle01 className="wow fadeInUp" data-wow-delay="0.1s">
                            Gateway
                            <div className="linkBX01"> <a href="javascript:void(0);">How it works?</a> | <a href="javascript:void(0);" onClick={() => { this.setState({ popup01: true }) }}>Status</a></div>
                        </DSTitle01>
                        <DSTitle02 className="wow fadeInUp" data-wow-delay="0.1s">Sell tokens via Gateway<span data-tip='Comming Soon' className="helpIco"><i className="fas fa-question-circle"></i></span>
                        </DSTitle02>
                        <FormMBX01 className="wow fadeInUp" data-wow-delay="0.1s">
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
                        <FormMBX01 className="wow fadeInUp" data-wow-delay="0.1s">
                            <FormSbxLabel>Token amount</FormSbxLabel>
                            <FormSbxContent >
                                <DDMenu className="formBox">
                                    <input type="text" />
                                </DDMenu>
                            </FormSbxContent>
                        </FormMBX01>
                        <FormMBX01 className="wow fadeInUp" data-wow-delay="0.1s">
                            <FormSbxLabel> </FormSbxLabel>
                            <FormSbxContent >
                                <button className="PlaOrBTN01">ADD TO THE GATEWAY</button>
                            </FormSbxContent>
                        </FormMBX01>
                        <PlacOrdMBX className="wow fadeInRight" data-wow-delay="0.1s">

                            <DSTitle02>Ledger</DSTitle02>
                            <DSTabLinkBX>
                                <button className='active'>Pending</button>
                                <button>History</button>
                            </DSTabLinkBX>

                            <OpfyTableBX>
                                <table width="100%" border="0" cellSpacing="0" cellPadding="20">
                                    <tbody>
                                        <tr>
                                            <th align="left" valign="middle" scope="col">Token Symbol</th>
                                            <th align="left" valign="middle" scope="col">Pending Amount</th>
                                            <th align="left" valign="middle" scope="col">Face Value</th>
                                            <th align="left" valign="middle" scope="col">Proof</th>
                                            <th align="center" valign="middle" scope="col">Cancel Pending</th>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>SMART</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td className="color02">0xe39...075D</td>
                                            <td align="center" valign="middle"><button className='deleteBTN'><i className="far fa-times-circle"></i></button></td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>PDO</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td className="color02">0xe39...075D</td>
                                            <td align="center" valign="middle"><button className='deleteBTN'><i className="far fa-times-circle"></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </OpfyTableBX>


                        </PlacOrdMBX>

                    </RightContainer>
                </MainContainer>

                <GetwayStatus isOpen={this.state.popup01} dismiss={() => { this.setState({ popup01: false }) }} />
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
const DSTabLinkBX = styled(FlexDiv)`
    justify-content:flex-start; 

    button{ font-size:16px; font-weight:700; color:#fff; margin-right:35px; padding: 0;
        :hover, &.active{ color:#00f02b;}
    }
`


const DSTitle01 = styled(FlexDiv)`
 justify-content:space-between; font:700 36px/40px 'Kanit', arial; color:#00f02b;  
 .DSrPart{ display: flex; align-items:center; justify-content:center; font-size:16px; color:#fff; font-weight:700; }

 .linkBX01{ display: flex; align-items:center; justify-content:center; font-size:16px; color:#5a5e67; font-weight:300;

        a{ color:#00f02b; margin:0 8px; font-family:'IBM Plex Mono', Arial,sans-serif; font-weight:700; :hover{text-decoration:underline;}}

}



`
const DSTitle02 = styled(FlexDiv)`
    justify-content:flex-start;   font:700 21px/40px 'IBM Plex Mono', arial; color:#ffffff; margin:22px 0; 
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
        &:nth-child(01){ border-left:0px; color:#4b4bff;  a{color:#4b4bff; :hover{text-decoration:underline}}} 
        &.bor01{border-right:5px solid #545861; }
        &.color02{ color:#3131ff;}
    }
    table tr th{ border:2px solid #545861; color:#9a9a9a; position:relative;
        &:nth-last-child(01){ border-right:0px;}
        &:nth-child(01){ border-left:0px;}
        &.bor01{border-right:5px solid #545861; }
    } 
    table tr:hover td{background-color:#151A1C;}
`
const PlacOrdMBX = styled(FlexDiv)`
    padding:50px 0;  color:#fff; border-top:1px solid #1e2127;

`
export default Gateway;