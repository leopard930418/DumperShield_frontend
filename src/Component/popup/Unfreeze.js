import React, { Component } from 'react';
import styled from 'styled-components';
import Gs from '../Theme/globalStyles';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import LeftMBX from '../Component/leftBar'
import GetwayStatus from '../Component/popup/gatewayStatus'
import Collapse from '@kunukn/react-collapse';

import TknIco01 from '../Assets/images/icon-jntrb.png'
import TknIco02 from '../Assets/images/icon-jntre.png'
import BTNIco01 from '../Assets/images/arrowBTN.png'
import SmrtLogo from '../Assets/images/smrtLogo.png'


class Unfreeze extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 1,
        }
    }

    render() {

        return (
            <>
                <MainContainer>
                    <LeftMBX />
                    <RightContainer>
                        <DSTitle01 className="wow fadeInUp" data-wow-delay="0.1s">
                            Unfreeze
                            <div className="linkBX01"> <a href="javascript:void(0);">How it works?</a> | <a href="javascript:void(0);" onClick={() => { this.setState({ popup01: true }) }}>Status</a></div>
                        </DSTitle01>

                         <RouterMBX className="wow fadeInRight" data-wow-delay="0.1s">

                            <RouterSBX>
                                <RouMBX01>
                                    <RouInputBX>
                                        <span>$</span>
                                        <input type="text" placeholder="Send" />
                                    </RouInputBX>

                                    <RouIconBX>
                                        <button> <img src={TknIco01} alt="" /> </button>
                                        JNTR/b
                                    </RouIconBX>


                                </RouMBX01>
                                <RouMBX02>
                                    <button className="RouBTN01"></button>
                                </RouMBX02>
                                <RouMBX01>
                                    <RouInputBX className='v2'>
                                        <span>$</span>
                                        <input type="text" placeholder="Receive" />
                                    </RouInputBX>
                                    <RouIconBX>
                                        <button> <img src={TknIco02} alt="" /> </button>
                                        JNTR/e
                                    </RouIconBX>
                                </RouMBX01>
                                <FormBTNBX>
                                    <button>LIST REQUEST</button>
                                </FormBTNBX>
                            </RouterSBX>

                            <SmrtLogoBX>
                                <img src={SmrtLogo} alt="" />
                            </SmrtLogoBX>








                        </RouterMBX> 
                        <DSTitle02 className="wow fadeInUp" data-wow-delay="0.1s">Ledger <i className="fas fa-sort-up"></i></DSTitle02>
                        <DSTabLinkBX className="wow fadeInUp" data-wow-delay="0.1s">
                            <button className='active'>All</button>
                            <button>Completed</button> <button>Pending</button>
                        </DSTabLinkBX>

                        <LedgerDetailBX>
                            <LedgerDetSbox className="wow fadeInRight" data-wow-delay="0.1s">

                                <span className="arrowSaprator"><i className="fas fa-chevron-right"></i></span>

                                <LedgerDetSbox02>
                                    <LedgerTitle02>Sent</LedgerTitle02>
                                    <LedgerTitleAmount>50 JNTR/b <i>($10,000)</i>
                                        <span>February 2, 2019, 9:21am PST</span>
                                    </LedgerTitleAmount>
                                    <LedgerColBOX>
                                        <LedgerTitleTransactionState>Transaction Submitted
                                            <span>X0456c19d5A61AeA886E6D657EsEF8849565</span>
                                            <i className="fas fa-check-circle"></i>
                                            <button>View transaction</button>
                                        </LedgerTitleTransactionState>
                                    </LedgerColBOX>
                                </LedgerDetSbox02>

                            </LedgerDetSbox>
                            <LedgerDetSbox className="wow fadeInRight" data-wow-delay="0.3s">
                                <LedgerDetSbox02>
                                    <LedgerTitle02>Received <span>(100%)</span></LedgerTitle02>
                                    <LedgerTitleAmount>25 JNTR/e <i> ($5,000)</i>
                                        <span>February 2, 2019, 9:21am PST</span>
                                    </LedgerTitleAmount>
                                    <LedgerColBOX>
                                        <LedgerTitleTransactionState>Transaction Submitted
                                            <span>X0456c19d5A61AeA886E6D657EsEF8849565</span>
                                            <i className="fas fa-check-circle"></i>
                                            <div className="breDwnMBX">
                                                <button>View transaction</button>
                                                <button className={"breDwnBTN " + (this.state.index === 1 ? "active" : "")} onClick={() => this.onToggle(1)}>Fees breakdown <i className="fas fa-sort-down"></i></button>
                                            </div>
                                        </LedgerTitleTransactionState>

                                        <Collapse className={"collapse " + (this.state.index === 1 ? "active" : "")}
                                            isOpen={this.state.index === 1}
                                            onChange={({ state }) => { this.setState({ item1: state }); }}
                                            onInit={({ state }) => { this.setState({ item1: state }); }}>

                                            <FeeBreMBX>
                                                <div className="FBbx01">Network gas:<span data-tip='Help Text' className="helpIco"><i className="fas fa-question-circle"></i></span></div>
                                                <div className="FBbx02">0.00910955 Ether ($3.43)</div>
                                                <div className="FBbx03"><a href="#">View transaction</a></div>
                                            </FeeBreMBX>
                                            <FeeBreMBX>
                                                <div className="FBbx01">3rd part validators fees:<span data-tip='Help Text' className="helpIco"><i className="fas fa-question-circle"></i></span></div>
                                                <div className="FBbx02">0.01978784 Ether ($7.46)</div>
                                                <div className="FBbx03"><a href="#">View transaction</a></div>
                                            </FeeBreMBX>
                                            <FeeBreMBX>
                                                <div className="FBbx01">Transfer tokens:<span data-tip='Help Text' className="helpIco"><i className="fas fa-question-circle"></i></span></div>
                                                <div className="FBbx02">0.01978784 Ether ($7.46)</div>
                                                <div className="FBbx03"><a href="#">View transaction</a></div>
                                            </FeeBreMBX>
                                            <FeeBreMBX>
                                                <div className="FBbx01">SmartSwap fee:<span data-tip='Help Text' className="helpIco"><i className="fas fa-question-circle"></i></span></div>
                                                <div className="FBbx02">SmartSwap fee:</div>
                                                <div className="FBbx03"><a href="#">View transaction</a></div>
                                            </FeeBreMBX>
                                            <FeeBreMBX>
                                                <div className="FBbx01">SMART Rebate:<span data-tip='Help Text' className="helpIco"><i className="fas fa-question-circle"></i></span></div>
                                                <div className="FBbx02">0.1819 SMART ($0.1819) </div>
                                                <div className="FBbx03"><a href="#">View transaction</a></div>
                                            </FeeBreMBX>
                                        </Collapse>


                                    </LedgerColBOX>

                                    <LedgerTitleAmount className="mt10">25 JNTR/e <i> ($5,000)</i>
                                        <span>February 2, 2019, 9:21am PST</span>
                                    </LedgerTitleAmount>
                                    <LedgerColBOX>
                                        <LedgerTitleTransactionState>Transaction Submitted
                                            <span>X0456c19d5A61AeA886E6D657EsEF8849565</span>
                                            <i className="fas fa-check-circle"></i>
                                            <div className="breDwnMBX">
                                                <button>View transaction</button>
                                                <button className={"breDwnBTN " + (this.state.index === 2 ? "active" : "")} onClick={() => this.onToggle(2)}>Fees breakdown <i className="fas fa-sort-down"></i></button>
                                            </div>
                                        </LedgerTitleTransactionState>

                                        <Collapse className={"collapse " + (this.state.index === 2 ? "active" : "")}
                                            isOpen={this.state.index === 2}
                                            onChange={({ state }) => { this.setState({ item2: state }); }}
                                            onInit={({ state }) => { this.setState({ item2: state }); }}>

                                            <FeeBreMBX>
                                                <div className="FBbx01">Network gas:<span data-tip='Help Text' className="helpIco"><i className="fas fa-question-circle"></i></span></div>
                                                <div className="FBbx02">0.00910955 Ether ($3.43)</div>
                                                <div className="FBbx03"><a href="#">View transaction</a></div>
                                            </FeeBreMBX>
                                            <FeeBreMBX>
                                                <div className="FBbx01">3rd part validators fees:<span data-tip='Help Text' className="helpIco"><i className="fas fa-question-circle"></i></span></div>
                                                <div className="FBbx02">0.01978784 Ether ($7.46)</div>
                                                <div className="FBbx03"><a href="#">View transaction</a></div>
                                            </FeeBreMBX>
                                            <FeeBreMBX>
                                                <div className="FBbx01">Transfer tokens:<span data-tip='Help Text' className="helpIco"><i className="fas fa-question-circle"></i></span></div>
                                                <div className="FBbx02">0.01978784 Ether ($7.46)</div>
                                                <div className="FBbx03"><a href="#">View transaction</a></div>
                                            </FeeBreMBX>
                                            <FeeBreMBX>
                                                <div className="FBbx01">SmartSwap fee:<span data-tip='Help Text' className="helpIco"><i className="fas fa-question-circle"></i></span></div>
                                                <div className="FBbx02">SmartSwap fee:</div>
                                                <div className="FBbx03"><a href="#">View transaction</a></div>
                                            </FeeBreMBX>
                                            <FeeBreMBX>
                                                <div className="FBbx01">SMART Rebate:<span data-tip='Help Text' className="helpIco"><i className="fas fa-question-circle"></i></span></div>
                                                <div className="FBbx02">0.1819 SMART ($0.1819) </div>
                                                <div className="FBbx03"><a href="#">View transaction</a></div>
                                            </FeeBreMBX>
                                        </Collapse>


                                    </LedgerColBOX>





                                </LedgerDetSbox02>
                            </LedgerDetSbox>
                        </LedgerDetailBX>

                    </RightContainer>
                </MainContainer>

                <GetwayStatus isOpen={this.state.popup01} dismiss={() => { this.setState({ popup01: false }) }} />
                <ReactTooltip effect="solid" className="myTip" />
            </>
        );
    }
    onToggle = index =>
        this.setState(state => ({ index: state.index === index ? null : index }));
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
const RouterMBX = styled(FlexDiv)`
    margin:78px auto; max-width:740px; 
`
const RouterSBX = styled(FlexDiv)`
    background-color:#16191e; border-radius:10px; padding:48px; flex-direction:row; 
`

const RouMBX01 = styled(FlexDiv)` 
    width:calc(50% - 40px);  
`
const RouMBX02 = styled(FlexDiv)` 
    width:80px;  

    .RouBTN01{ display:block; width:78px; height:69px; background:url(${BTNIco01}) 50% 50% no-repeat;  margin:14px 0 0 0; position:relative;
    :after, :before { content: ""; width: 1px; height: 100px; display: block; background-color: #393d46; border-width: 1px; border-style: solid; border-color: transparent; left: 50%; transform: translateX(-50%); position: absolute;bottom: -92px; }
    :before{bottom:66px;  height: 136px;}
    :hover{opacity:0.8;}
} 
`
const SmrtLogoBX = styled(FlexDiv)`
    justify-content:flex-start; padding:14px 0 10px 0;
`

const RouInputBX = styled(FlexDiv)`
    position:relative;  
    input{ width:100%; height:50px; background:#16191e; border:2px solid #5a5e67; border-radius:10px; padding-left:60px; font-size:16px; color:#fff; font-weight:700; 
        ::-webkit-input-placeholder { color: #fff;} :-ms-input-placeholder { color: #fff; } ::placeholder { color: #fff;}
    }
    span{ position:absolute; left:0; top:0; width:50px; height:50px; border-radius:10px 0 0 10px; background:#5a5e67; display:flex; align-items:center; justify-content:center; font-size:16px; font-weight:700;} 
    &.v2{ 
        span{color:#8e9195;}
        input{ background-color:#272b31; color:#8e9195; 
            :-webkit-input-placeholder { color: #8e9195;} :-ms-input-placeholder { color: #8e9195; } ::placeholder { color: #8e9195;}
        }
    } 
`
const RouIconBX = styled(FlexDiv)`
    margin:46px 0; flex-direction:column; font-size:21px; font-weight:700; color:#fff;

    button{ padding:0; width:143px; height:143px; border-radius:50%; margin:0; background-color:#fff; display:flex; align-items:center; justify-content:center; border:3px solid #16191E;  margin-bottom:10px;
        img{ margin-left:10px;}
    :hover{ border:3px solid #00f02b;}
    } 
`
const FormBTNBX = styled(FlexDiv)`
    margin-top:20px;
button{ width:100%;  font-size:24px; font-weight:700; height:70px; background-color:#00f02b; color:#5d6168; border-radius:10px;
    :hover{ background-color:#0dd732; color:#313740;} } 
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
    position:relative; 

    .fas.fa-sort-up{ color:#00f02b; margin-left: 14px;  margin-top: 10px;}
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

const PlacOrdMBX = styled(FlexDiv)`
    padding:50px 0;  color:#fff; border-top:1px solid #1e2127;

`
const LedgerTitle01 = styled(FlexDiv)`
    width:100%; justify-content:space-between; font-family:'Kanit', Helvetica,sans-serif; font-size:30px; color:#00f02b; font-weight:700; margin-top:50px;
    & button { color:#fff; font-weight:700;
        & .fas{ margin-left:20px;} 
    }
`

const LedgerDetailBX = styled(FlexDiv)`
    justify-content: flex-start; align-items:flex-start;
`
const LedgerDetSbox = styled(FlexDiv)`
    width:50%; padding:0 50px 0 0; justify-content: flex-start; position: relative;
    
    .arrowSaprator{ position: absolute; right:-10px; color:#fff; font-size:30px; top:30px;  }
    &:nth-last-child(01){ padding:0 0 0 50px;} 
`
const LedgerGridViewBX = styled.div`

`
const LedgerListViewBX = styled.div` 
         padding-top:20px; 
`


const LedgerDetSbox02 = styled(FlexDiv)`
  width:100%; flex-wrap:wrap;  justify-content: flex-start; padding: 30px 0; 
      
`
const LedgerTitle02 = styled(LedgerTitle01)`
    margin:0 0 35px 0;  justify-content:flex-start; position: relative;
    & span{ font-weight:400; font-family:'IBM Plex Mono', arial; color:#9a9a9a; font-size:18px; margin-left:10px; background-color: #0B0C0F;} 

    &:after{ content:''; width:80%; height:1px; display:block; background-color:#545861;  right: 0px; position: absolute; z-index: -1;}


`
const LedgerTitleAmount = styled.div`
    margin:0 0 20px 0;  font-size:21px; line-height:26px; font-weight:700;  width:100%;
    & span{ font-weight:400; font-size:14px; display:block;} 
    & i{ display:inline; color:#9a9a9a; font-size:16px; font-weight:400; font-style:normal; }

    &.mt10{ margin-top:30px; }

`
const LedgerColBOX = styled.div` 
    padding:29px; background-color:#16191e; width:100%;
`
const LedgerTitleTransactionState = styled.div`
    padding:0 0 0 27px;   font-size:16px; line-height:26px; font-weight:400;  width:100%; position:relative; color:#00f02b;
    & span{ font-weight:400; font-size:16px; display:block;  color:#9a9a9a;}  
    & .fas{position:absolute; left:0px; top:6px; color:#00f02b; }
    .breDwnMBX{ display:flex; align-items:center; justify-content:space-between; margin:8px 0 22px 0; }
    & button{ color:#4848ff; font-size:12px; font-weight:400; padding:0;
        :hover{ text-decoration:underline;} 
     &.breDwnBTN{ color:#00f02b; margin-left:auto; .fas.fa-sort-down{ position:relative; left:auto; top:auto;} } 
     &.breDwnBTN.active{ .fas.fa-sort-down{transform:rotate(180deg)} }
        }
        &.Small{ padding:0; } 
`
const FeeBreMBX = styled(FlexDiv)`

    flex-direction: row; font-size:12px; font-weight:400; color:#9a9a9a; padding-left:26px; margin:12px 0 15px 0;

    .FBbx01{ width:29%; }
    .FBbx02{ width:38%; }
    .FBbx03{ width:33%; text-align:right;  a{ color:#4b4bff; :hover{ text-decoration:underline;}}}

    &:nth-last-child(01) { border-top:1px solid #22262b; padding-top: 16px; margin-top: 17px; margin-bottom: 0; }


`







const PendingTag = styled(FlexDiv)`
    color:#c32b2d; font-size:11px; justify-content:space-between; margin:10px 0 0 0;
    & .fas{position:relative; left:auto; top:auto; }
`

export default Unfreeze;