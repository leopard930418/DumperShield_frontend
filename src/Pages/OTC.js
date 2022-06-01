import React, { Component } from 'react';
import styled from 'styled-components';
import Gs from '../Theme/globalStyles';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import LeftMBX from '../Component/leftBar'
import BuyReqPopup from '../Component/popup/buyreqpopup'
import ClaimToken from '../Component/popup/claimToken'
import Collapse from '@kunukn/react-collapse';
import OTCTransferTokens from '../Component/OTCTransferToken';
import { currencyNames } from '../constants';
import { addressApprove } from "../Service/otc_function";

class OTC extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 3,
            dropDown: false,
            popupOTCClaim: false,
            popupMyofferClaim: false,
            searchBX: false,
            otcOrders: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8443/api/v1/otcRoute/getOTCMarketPlaceOrders")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    otcOrders: result.result
                });
            },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        return (
            <>
                <MainContainer>
                    <LeftMBX />
                    <RightContainer>
                        <DSTitle01 className="wow fadeInUp" data-wow-delay="0.1s">
                            OTC
                             <div className="DSrPart">Tax protection <span data-tip='Tokens received for free (which means you didnt but them with other assets you own), may be considered by many jurisdictions as a gift that is subject to income tax. Therefore, the tax protection automatically places those gift tokens under your sub account to avoid an immediate tax event.
                             Tax protected token require another person to help access your tokens and an accountant should be consulted.*
                             * It is your responsibility to check with a local tax expert and the tax code that applies on you by your jurisdiction.
                             ' className="helpIco"><i className="fas fa-question-circle"></i></span>
                                <div className="apollo-element apollo-element-active apollo-field-switcher">
                                    <div className="apollo-fieldset">
                                        <label> <input type="checkbox" defaultChecked name="shortcode[active]" value="1" data-depend-id="active" data-atts="active" />
                                            <em data-on="on" data-off="off"></em><span></span>
                                        </label>
                                    </div>
                                </div>
                            </div> 
                        </DSTitle01>
                        <TabNav className="wow fadeInUp" data-wow-delay="0.1s">
                            <a href="javascript:void(0)"
                                className={"tab-Link " + (this.state.index === 1 ? "active" : "")} onClick={() => this.onToggle(1)}> <span>My offres <i className="fas fa-question-circle"></i></span> </a>
                            <a href="javascript:void(0)" className={"tab-Link " + (this.state.index === 2 ? "active" : "")} onClick={() => this.onToggle(2)}><span>OTC Marketplace</span></a>
                            <a href="javascript:void(0)" className={"tab-Link " + (this.state.index === 3 ? "active" : "")} onClick={() => this.onToggle(3)}>Transfer tokens</a>
                        </TabNav>
                        <Collapse className={"collapse wow fadeInUp " + (this.state.index === 1 ? "active" : "")}
                            isOpen={this.state.index === 1} data-wow-delay="0.1s"
                            onChange={({ state }) => { this.setState({ item1: state }); }}
                            onInit={({ state }) => { this.setState({ item1: state }); }}>
                                <br />
                                <br />
                                Tax Protection Requests
                            <OpfyTableBX>
                                <table width="100%" border="0" cellSpacing="0" cellPadding="20" /*onClick={() => this.onToggle(1)}*/>
                                    <tbody>
                                        <tr>
                                            <th align="left" valign="middle" scope="col">Token name <a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" valign="middle" scope="col">Token Amount<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" className="bor01" valign="middle" scope="col">Face Value<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" valign="middle" scope="col">Asking for Your Approval<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th scope="col">Approve</th>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>JNTR</td>
                                            <td>291</td>
                                            <td className="bor01">$17</td>
                                            <td className='bor02'>0xe36234dbc2380c96b82D76c80D55309F40e48CbF</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                    <button className="btn03" onClick={() => { this.setState({ popupMyofferClaim: false }) }}>APPROVE</button>
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>SMART</td>
                                            <td>552</td>
                                            <td className="bor01">$5</td>
                                            <td className="bor02">0xe36234dbc2380c96b82D76c80D55309F40e48CbF</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                    <button className="btn03" onClick={() => { this.setState({ popupMyofferClaim: false }) }}>APPROVE</button>
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>PDO</td>
                                            <td>314</td>
                                            <td className="bor01">$2</td>
                                            <td className="bor02">0xe36234dbc2380c96b82D76c80D55309F40e48CbF</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                    <button className="btn03" onClick={() => { this.setState({ popupMyofferClaim: false }) }}>APPROVE</button>
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>FREEZ</td>
                                            <td>32</td>
                                            <td className="bor01">$7</td>
                                            <td className="bor02">0xe36234dbc2380c96b82D76c80D55309F40e48CbF</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                    <button className="btn03" onClick={() => { this.setState({ popupMyofferClaim: false }) }}>APPROVE</button>
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>DEGEN</td>
                                            <td>51</td>
                                            <td className="bor01">$6</td>
                                            <td className="bor02">0xe36234dbc2380c96b82D76c80D55309F40e48CbF</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                    <button className="btn03" onClick={() => { addressApprove('0xe36234dbc2380c96b82D76c80D55309F40e48CbF', 51) }}>APPROVE</button>
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><a href="javascript:void(0);" onClick={() => this.onToggle(2)}> Explore more opportunities on the marketplace</a></p>
                            </OpfyTableBX>

                            Offers by me
                            <OpfyTableBX>
                                <table width="100%" border="0" cellSpacing="0" cellPadding="20" /*onClick={() => this.onToggle(1)}*/>
                                    <tbody>
                                        <tr>
                                            <th align="left" valign="middle" scope="col">Token name <a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" valign="middle" scope="col">Token Amount<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" className="bor01" valign="middle" scope="col">Face Value<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" valign="middle" scope="col">Asking Token<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" valign="middle" scope="col">Token Amount<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" valign="middle" scope="col">Asking Price<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" valign="middle" scope="col">Competitive Value<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th scope="col">Cancel Offers</th>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>JNTR</td>
                                            <td>291</td>
                                            <td className="bor01">$17</td>
                                            <td>ETH</td>
                                            <td>2</td>
                                            <td>$16</td>
                                            <td>-$1 (-0.94%)</td>
                                            <td scope="col">
                                                <div className="OpfyBTNbar">
                                                 
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>SMART</td>
                                            <td>552</td>
                                            <td className="bor01">$5</td>
                                            <td>ETH</td>
                                            <td>5</td>
                                            <td>$7</td>
                                            <td>+$2 (+40%)</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                 
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>PDO</td>
                                            <td>314</td>
                                            <td className="bor01">$2</td>
                                            <td>ETH</td>
                                            <td>10</td>
                                            <td>$2</td>
                                            <td>-$1 (-0.94%)</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                 
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>FREEZ</td>
                                            <td>32</td>
                                            <td className="bor01">$7</td>
                                            <td>ETH</td>
                                            <td>52</td>
                                            <td>$7</td>
                                            <td>+$2 (+40%)</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                 
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>DEGEN</td>
                                            <td>51</td>
                                            <td className="bor01">$6</td>
                                            <td>ETH</td>
                                            <td>42</td>
                                            <td>$6</td>
                                            <td>-$1 (-0.94%)</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                   
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><a href="javascript:void(0);" onClick={() => this.onToggle(2)}> Explore more opportunities on the marketplace</a></p>
                            </OpfyTableBX>

                            Offers to me
                            <OpfyTableBX>
                                <table width="100%" border="0" cellSpacing="0" cellPadding="20" /*onClick={() => this.onToggle(1)}*/>
                                    <tbody>
                                        <tr>
                                            <th align="left" valign="middle" scope="col">Token name <a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" valign="middle" scope="col">Token Amount<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" className="bor01" valign="middle" scope="col">Face Value<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" valign="middle" scope="col">Asking Token<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" valign="middle" scope="col">Token Amount<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" valign="middle" scope="col">Asking Price<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th align="left" valign="middle" scope="col">Competitive Value<a href="#" className="sortLink"><i className="fas fa-sort"></i></a></th>
                                            <th scope="col">Claim Opportunity</th>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>JNTR</td>
                                            <td>291</td>
                                            <td className="bor01">$17</td>
                                            <td>ETH</td>
                                            <td>2</td>
                                            <td>$16</td>
                                            <td>-$1 (-0.94%)</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                    <button className="btn01" onClick={() => { this.setState({ popupMyofferClaim: true }) }}>CLAIM</button>
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>SMART</td>
                                            <td>552</td>
                                            <td className="bor01">$5</td>
                                            <td>ETH</td>
                                            <td>5</td>
                                            <td>$7</td>
                                            <td>+$2 (+40%)</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                    <button className="btn01" onClick={() => { this.setState({ popupMyofferClaim: true }) }}>CLAIM</button>
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>PDO</td>
                                            <td>314</td>
                                            <td className="bor01">$2</td>
                                            <td>ETH</td>
                                            <td>10</td>
                                            <td>$2</td>
                                            <td>-$1 (-0.94%)</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                    <button className="btn01" onClick={() => { this.setState({ popupMyofferClaim: true }) }}>CLAIM</button>
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>FREEZ</td>
                                            <td>32</td>
                                            <td className="bor01">$7</td>
                                            <td>ETH</td>
                                            <td>52</td>
                                            <td>$7</td>
                                            <td>+$2 (+40%)</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                    <button className="btn01" onClick={() => { this.setState({ popupMyofferClaim: true }) }}>CLAIM</button>
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>DEGEN</td>
                                            <td>51</td>
                                            <td className="bor01">$6</td>
                                            <td>ETH</td>
                                            <td>42</td>
                                            <td>$6</td>
                                            <td>-$1 (-0.94%)</td>
                                            <td>
                                                <div className="OpfyBTNbar">
                                                    <button className="btn01" onClick={() => { this.setState({ popupMyofferClaim: true }) }}>CLAIM</button>
                                                    <button className="btn02"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><a href="javascript:void(0);" onClick={() => this.onToggle(2)}> Explore more opportunities on the marketplace</a></p>
                            </OpfyTableBX>
                        </Collapse>
                        <Collapse className={"collapse " + (this.state.index === 2 ? "active" : "")}
                            isOpen={this.state.index === 2}
                            onChange={({ state }) => { this.setState({ item2: state }); }}
                            onInit={({ state }) => { this.setState({ item2: state }); }}>
                            <OpfyTableBX>
                                <table width="100%" border="0" cellSpacing="0" cellPadding="20">
                                    <tbody>
                                        <tr>
                                            <th align="left" valign="middle" scope="col">Token Symbol
                                                <a href="#" className="sortLink"><i className="fas fa-sort"></i></a>

                                                <a href="#" className={"searchLink " + (this.state.searchBX === 1 ? "active" : "")} onClick={() => this.onToggle03(1)}><i className="fas fa-search"></i></a>


                                                <Collapse className={"collapse " + (this.state.searchBX === 1 ? "active" : "")}
                                                    isOpen={this.state.searchBX === 1} data-wow-delay="0.1s"
                                                    onChange={({ state }) => { this.setState({ item1: state }); }}
                                                    onInit={({ state }) => { this.setState({ item1: state }); }}>

                                                    <div className="searchBAR">
                                                        <input type="text" placeholder="Search" />
                                                        <a href="#" onClick={() => this.onToggle03(1)} className={"sortLink " + (this.state.searchBX === 1 ? "active" : "")} ><i className="fas fa-times"></i></a>
                                                    </div>

                                                </Collapse>


                                            </th>
                                            <th align="left" valign="middle" scope="col">Amount of <br /> Tokens
                                                <a href="#" className="sortLink"><i className="fas fa-sort"></i></a>
                                                <a href="#" className="searchLink"  ><i className="fas fa-search"></i></a>


                                            </th>
                                            <th align="left" className="bor01" valign="middle" scope="col">Face Value
                                                <a href="#" className="sortLink"><i className="fas fa-sort"></i></a>
                                                <a href="#" className="searchLink"><i className="fas fa-search"></i></a>
                                            </th>
                                            <th align="left" valign="middle" scope="col">Asking Token
                                                <a href="#" className="sortLink"><i className="fas fa-sort"></i></a>
                                                <a href="#" className="searchLink"><i className="fas fa-search"></i></a>
                                            </th>
                                            <th align="left" valign="middle" scope="col">Amount of<br />Tokens
                                                <a href="#" className="sortLink"><i className="fas fa-sort"></i></a>
                                                <a href="#" className="searchLink"><i className="fas fa-search"></i></a>
                                            </th>
                                            <th align="left" valign="middle" scope="col">Asking Price
                                                <a href="#" className="sortLink"><i className="fas fa-sort"></i></a>
                                                <a href="#" className="searchLink"><i className="fas fa-search"></i></a>
                                            </th>
                                            <th align="left" valign="middle" scope="col">Competitive<br />Value
                                                <a href="#" className="sortLink"><i className="fas fa-sort"></i></a>
                                                <a href="#" className="searchLink"><i className="fas fa-search"></i></a>
                                            </th>
                                            <th scope="col">Claim Opportunity</th>
                                        </tr>
                                        {
                                            this.state.otcOrders.length > 0 ?
                                                this.state.otcOrders.map((ele, key) => {
                                                    return (
                                                        <tr align="left" valign="middle">
                                                            <td>{currencyNames[ele.tokenSell]}</td>
                                                            <td>{Number(ele.sellAmount) / 10 ** 18}</td>
                                                            <td className="bor01">$17</td>
                                                            <td>{currencyNames[ele.wantToken]}</td>
                                                            <td>{Number(ele.value) / 10 ** 18}</td>
                                                            <td>$17</td>
                                                            <td>2%</td>
                                                            <td>
                                                                <div className="OpfyBTNbar v2">
                                                                    <button className="btn01" onClick={() => { this.setState({ popupMyofferClaim: true }) }}>CLAIM</button>

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                                : null
                                        }
                                         <tr align="left" valign="middle">
                                            <td>JNTR</td>
                                            <td>291</td>
                                            <td className="bor01">$17</td>
                                            <td>ETH</td>
                                            <td>2</td>
                                            <td>$17</td>
                                            <td>2%</td>
                                            <td>
                                                <div className="OpfyBTNbar v2">
                                                    <button className="btn01" onClick={() => { this.setState({ popupMyofferClaim: true }) }}>CLAIM</button>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>SMART</td>
                                            <td>552</td>
                                            <td className="bor01">$5</td>
                                            <td>ETH</td>
                                            <td>5</td>
                                            <td>$5</td>
                                            <td>5%</td>
                                            <td>
                                                <div className="OpfyBTNbar v2">
                                                    <button className="btn01" onClick={() => { this.setState({ popupMyofferClaim: true }) }}>CLAIM</button>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>PDO</td>
                                            <td>314</td>
                                            <td className="bor01">$2</td>
                                            <td>ETH</td>
                                            <td>10</td>
                                            <td>$2</td>
                                            <td>4%</td>
                                            <td>
                                                <div className="OpfyBTNbar v2">
                                                    <button className="btn01" onClick={() => { this.setState({ popupMyofferClaim: true }) }}>CLAIM</button>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>FREEZ</td>
                                            <td>32</td>
                                            <td className="bor01">$7</td>
                                            <td>ETH</td>
                                            <td>52</td>
                                            <td>$7</td>
                                            <td>0%</td>
                                            <td>
                                                <div className="OpfyBTNbar v2">
                                                    <button className="btn01" onClick={() => { this.setState({ popupMyofferClaim: true }) }}>CLAIM</button>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr align="left" valign="middle">
                                            <td>DEGEN</td>
                                            <td>51</td>
                                            <td className="bor01">$6</td>
                                            <td>ETH</td>
                                            <td>42</td>
                                            <td>$6</td>
                                            <td>10%</td>
                                            <td>
                                                <div className="OpfyBTNbar v2">
                                                    <button className="btn01" onClick={() => { this.setState({ popupMyofferClaim: true }) }}>CLAIM</button>

                                                </div>
                                            </td>
                                        </tr> 
                                    </tbody>
                                </table>
                                <a href="javascript:void(0);" onClick={() => { this.setState({ popupOTCClaim: true }) }}>List your buy request </a>
                            </OpfyTableBX>

                        </Collapse>
                        <Collapse className={"collapse " + (this.state.index === 3 ? "active" : "")}
                            isOpen={this.state.index === 3}
                            onChange={({ state }) => { this.setState({ item3: state }); }}
                            onInit={({ state }) => { this.setState({ item3: state }); }}>

                            <OTCTransferTokens></OTCTransferTokens>




                        </Collapse>
                    </RightContainer>
                </MainContainer>
                <BuyReqPopup isOpen={this.state.popupOTCClaim} dismiss={() => { this.setState({ popupOTCClaim: false }) }} />
                <ClaimToken isOpen={this.state.popupMyofferClaim} dismiss={() => { this.setState({ popupMyofferClaim: false }) }} />

                <ReactTooltip effect="solid" className="myTip" />
            </>
        );
    }

    onToggle = index =>
        this.setState(state => ({ index: state.index === index ? null : index }));


    onToggle03 = searchBX =>
        this.setState(state => ({ searchBX: state.searchBX === searchBX ? null : searchBX }));

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

const DSTitle01 = styled(FlexDiv)`
 justify-content:space-between; font:700 36px/40px 'Kanit', arial; color:#00f02b;  
 .DSrPart{ display: flex; align-items:center; justify-content:center; font-size:16px; color:#fff; font-weight:700; }
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

    .hoverClass :hover span{
        display:none
    }
    .hoverClass :hover : before  {
        content: "Coming Soon"
      }
`
const OpfyTableBX = styled(FlexDiv)` 
    margin:50px 0; font-size:14px; color:#fff; 
    p{ color:#00f02b; font-size:12px; margin-top:15px; text-align:left; width:100%;}
    .searchBAR{ position:absolute; left:0; top:0; right:0; bottom:0; background-color:#000; display:flex; flex-direction:row; padding:4px; align-items:center;justify-content:space-between; display:none; 
        
        input{ width:calc(100% - 30px); height:34px; padding:5px; background-color:transparent; border:0px; color:#fff; font-size: 14px; font-weight:400; border:1px solid #545861; border-radius:5px;} }

        .collapse.active .searchBAR { display:flex;}




    a{ color:#00f02b; font-size:12px; margin-top:15px; text-align:left; width:100%; :hover{ text-decoration:underline;}} 
    .sortLink{ position:absolute; right:12px; margin-top:0; width:auto; color:#9a9a9a; top: 18px; font-size:18px; :hover{color:#fff;}}
    .searchLink{ position:absolute; right:31px; margin-top:0; width:auto; color:#9a9a9a; top: 18px; font-size:18px; :hover{color:#fff;}}
    .OpfyBTNbar{ display: flex; align-items:center; justify-content:flex-start; width:210px; 
        &.v2{width:180px; justify-content: center;}

        .btn01{width:155px; font-weight:700; height:40px; border:2px solid #00f02b; border-radius:5px; color:#00f02b; :hover{ color:#000; background-color:#00f02b;} }
        .btn03{width:155px; font-weight:700; height:40px; border:2px solid #4B4BFF; border-radius:5px; color:#4B4BFF; :hover{ color:#000; background-color:#4B4BFF;} }
        .btn02{ color:#858686; padding:10px; margin-left:6px; :hover{ color:#c32b2d; }}
    }
    table tr td{ border:1px solid #545861;    padding:10px 18px;
        &:nth-last-child(01){ border-right:0px; width:212px;}
        &:nth-child(01){ border-left:0px; color:#4b4bff; a{color:#4b4bff; :hover{text-decoration:underline}} } 
        &.bor01{border-right:5px solid #545861; }
        &.bor02{color: #4B4BFF; }

        
    }
    table tr:hover td{background-color:#151A1C;}
    table tr th{ border:2px solid #545861; color:#9a9a9a; position:relative; padding: 12px; height:60px;
        &:nth-last-child(01){ border-right:0px;}
        &:nth-child(01){ border-left:0px;}
        &.bor01{border-right:5px solid #545861; }
        
    } 
`

export default OTC;