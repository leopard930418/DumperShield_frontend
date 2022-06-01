import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../modal';
import Collapse from '@kunukn/react-collapse';
import InputRange from "react-input-range";
import  css from 'react-input-range/lib/css/index.css'
// icon images
// import CoinIco01 from '../../Assets/images/coinicon-uniswap.png'  



class ClaimToken extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            dropDown: false,
            value: 150,
        }
    }

    render() { 
    return ( 
            <Modal isOpen={this.props.isOpen} dismiss={this.props.dismiss}>  
                <BuyRPopupContainer> 
                    <BrPtitle01 className="MRFix01"> </BrPtitle01>

                    <FormMBX01>
                                <FormSbxLabel>Token</FormSbxLabel>
                                <FormSbxContent >
                                    <DDMenu onClick={() => this.onToggle02(1)}>
                                    291 JNTR {'<>'} 2 ETH
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
                                <FormSbxLabel>How much do you want to claim?</FormSbxLabel>
                                <FormSbxContent >

                                <DragMBX> 
                                    <div className="dragorInput">
                                    <InputRange
                                        maxValue={300}
                                        minValue={0}
                                        value={this.state.value}
                                        formatLabel={value => `${value}JNTR`}
                                        onChange={value => this.setState({ value })} />
                                    </div>
                                </DragMBX>
                                </FormSbxContent>
                    </FormMBX01> 
                    <FormBTNBX>
                        <button>CLAIM</button>
                    </FormBTNBX>
                    <FormHint>
                    * OTC fee 0.1% <br />
                    ** fess and gas 100% reimbursed with PDO token
                    </FormHint>
                </BuyRPopupContainer>
 

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
    max-width:872px; margin:0 auto; 
`
const BrPtitle01 = styled(FlexDiv)`
 font-size:36px; font-weight:700; color:#fff;   margin-bottom:60px; 
  &.MRFix01{ margin-top:120px;} 
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


    .DDContainer{ width:100%; z-index:10;   position:absolute; left:0; top:calc(100% + 6px);   z-index:1000;}
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

const DragMBX = styled(FlexDiv)`
 position:relative;

.dragorInput {
  position: relative;
  width: 100%;
  height: 80px;
  padding-top:12px;
}

.dragorInput .input-range__slider {
  -webkit-appearance: none;
  appearance: none;
  background: #91dc27;
  cursor: pointer;
  display: block;
  margin-left: -0.9rem;
    margin-top:-1.4rem;
  color: #fff !important;
  font-weight: 700;
  outline: none;
  position: absolute;
  top: 50%;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  width:74px;
  height:52px;
  font-weight: 400; border:0px;
  transform: translateY(-22px); border-radius:10px; 
}

.dragorInput .input-range__slider:focus {
  box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2);
}
.dragorInput .input-range__slider-container {
  transition: left 0.3s ease-out;
  z-index: 100;
}
.dragorInput .input-range__label {
  color: #aaaaaa;
  font-size: 16px;
  transform: translateZ(0);
  white-space: nowrap;
}
.dragorInput .input-range__label--min,
.input-range__label--max {
  bottom: -1.4rem;
  position: absolute;
}
.dragorInput .input-range__label--min {
    left:35px;
    top: 16px;
    z-index: 2;
}
.dragorInput .input-range__label--max {
    right:49px;
    top: 16px;
}
.dragorInput .input-range__label--value {
  position: absolute;
  top: -27px;
  z-index: 2;
  color: #fff;
  left: 21px;
  pointer-events: none;
}
.dragorInput .input-range__label-container {
    left: -50%;
    position: relative;
    color: #ffff;
    font: 700 18px/20px "IBM Plex Mono",arial;
    pointer-events: none;
}
.dragorInput .input-range__label--max .input-range__label-container {
  left: 50%;
}
.dragorInput .input-range__track {
  background: #393e48;
  cursor: pointer;
  display: block;
  height: 40px;
  position: relative;
  transition: left 0.3s ease-out, width 0.3s ease-out;
}
.dragorInput .input-range__track--background {
  left: 0;
  margin-top: -0.15rem;
  position: absolute;
  right: 0;
  top: 50%;
}
.dragorInput .input-range__track--active {
  background: #7f838d;
}
.dragorInput .input-range {
  height: 1rem;
  position: relative;
  width: 100%;
}
.dragorInput .input-range__label--value .input-range__label-container {
  color: #fff;
  font-weight: 700;
  font-size:18px; position: relative;
}

.input-range__track{ border-radius:40px; }
  .dragorInput   .input-range__label--value{ 
    &:after{ content: '1 ETH';
    border: none;  width: 100%; left: -33px; right: 0; bottom: -34px; color: #fff; font-size: 12px; text-align: center; font-weight: 400; position: absolute;}}
` 

const FormHint = styled(FlexDiv)`
 margin: 20px auto 0 auto; justify-content: flex-start; font-size:11px; color: #8e9195; line-height:20px;

`







export default ClaimToken;

