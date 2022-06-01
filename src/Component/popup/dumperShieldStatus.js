import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../modal';
import ReactTooltip from 'react-tooltip';
import Collapse from '@kunukn/react-collapse';
// icon images
// import CoinIco01 from '../../Assets/images/coinicon-uniswap.png'  


class DumperShieldStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDown: false,
        }
    }
    render() {
        return (
            <Modal isOpen={this.props.isOpen} dismiss={this.props.dismiss}>
                <BuyRPopupContainer>
                    <BrPtitle01>Dumper Shield Status</BrPtitle01>
                    <OpfyTableBX>
                        <table width="100%" border="0" cellSpacing="0" cellPadding="20">
                            <tbody>
                                <tr>
                                    <th width="33%" align="left" valign="middle" scope="col">Token Name</th>
                                    <th width="33%" align="left" valign="middle" scope="col">Dumper Shield Protection Left</th>
                                    <th width="33%" align="left" valign="middle" scope="col">Total Supply Protected<span data-tip='Comming Soon' className="helpIco"><i className="fas fa-question-circle"></i></span></th>
                                </tr>
                                <tr align="left" valign="middle">
                                    <td>SMART</td>
                                    <td>156 days</td>
                                    <td>458,458,100</td>
                                </tr>
                                <tr align="left" valign="middle">
                                    <td>PDO</td>
                                    <td>156 days</td>
                                    <td>1,000,000</td>
                                </tr>
                                <tr align="left" valign="middle">
                                    <td>FREEZ</td>
                                    <td>156 days</td>
                                    <td>500,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </OpfyTableBX>
                </BuyRPopupContainer>
                <ReactTooltip effect="solid" className="myTip" />
            </Modal>
        );
    }

    onToggle02 = dropDown =>
        this.setState(state => ({ dropDown: state.dropDown === dropDown ? null : dropDown }));
}

const FlexDiv = styled.div`
display: flex; align-items: center; justify-content:center; flex-wrap:wrap; width:100%;
`;
const BuyRPopupContainer = styled(FlexDiv)`
    max-width:1750px; margin:0 auto; 
`
const BrPtitle01 = styled(FlexDiv)`
 font-size:36px; font-weight:700; color:#fff;   margin-bottom:60px; margin-top:40px;
`
const FormMBX01 = styled(FlexDiv)`
    justify-content:flex-start; flex-direction:row; margin-bottom:20px;
`
const FormSbxLabel = styled(FlexDiv)`
    width:350px; justify-content:flex-start; font-size:18px; font-weight:300; 
`
const FormSbxContent = styled(FlexDiv)`
 width:calc(100% - 350px); justify-content:flex-start;

 .md-radio label{ font-size:16px; color:#fff; font-weight:400;}
 .md-radio label:after{ background-color:#00f02b;}

 .md-radio label:before, .md-radio input[type="radio"]:checked + label:before { border: 2px solid #5a5e67;  left: -2px; top: -2px; width: 24px; height: 24px;} 
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
const FormBTNBX = styled(FlexDiv)`
    margin-top:20px;
button{ width:100%;  font-size:24px; font-weight:700; height:70px; background-color:#00f02b; color:#5d6168; border-radius:10px;
    :hover{ background-color:#0dd732; color:#313740;} }
`
const Spacer = styled(FlexDiv)`
    height:1px; margin:12px 0 25px 0; background-color: #1e2127;
`
const OpfyTableBX = styled(FlexDiv)` 
    margin:0 0 50px 0; font-size:14px; color:#fff; 
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
        &:nth-child(01){ border-left:0px; color:#4b4bff;   a{color:#4b4bff; :hover{text-decoration:underline}} } 
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

export default DumperShieldStatus;

