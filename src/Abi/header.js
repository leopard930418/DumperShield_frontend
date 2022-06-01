import React, { Component } from 'react';
import styled from 'styled-components';
import Collapse from '@kunukn/react-collapse';
import Logo from './../Assets/images/dumperShield-Logo.png'
import CloseImg from './../Assets/images/close-icon02.png'
import { Link } from 'react-router-dom';
import AstICO01 from './../Assets/images/assIcon-01.png'
import AstICO02 from './../Assets/images/assIcon-02.png'
import AstICO03 from './../Assets/images/assIcon-03.png'
import AstICO04 from './../Assets/images/assIcon-04.png'
import { getAccountaddress, metamask_connection } from '../Service/metamask_function';
import { getBalanceOfTokens } from '../Service/otc_function';
import { currencyAddresses } from '../constants';
import notificationConfig from '../config/notificationConfig'



class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      index: 1,
      active: false,
      walletAddress: null,
      shortWltAddress: null,
      balances: {}
    }
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  componentDidMount() {
    this.setModifiedAddress();
    if (localStorage.getItem("account")) {
      const add = localStorage.getItem("account");
      const acc = add.substr(0, 6) + "..." + add.substr(add.length - 4);
      this.setState({
        shortWltAddress: acc,
        walletAddress: add
      });
    }
  }

  async connectWallet() {
    await metamask_connection(
      localStorage.getItem("account"),
      "ahrefClick"
    )
    await this.setModifiedAddress()

  }

  async setModifiedAddress() {
    if (localStorage.getItem("account")) {
      const add = localStorage.getItem("account");
      const acc = add.substr(0, 6) + "..." + add.substr(add.length - 4);
      this.setState({
        shortWltAddress: acc,
        walletAddress: add
      });

      let balances = await getBalanceOfTokens({
        token: currencyAddresses["DEGEN"],
        user: add
      })
      this.setState({
        balances
      });
      setInterval(async () => {
        let balances = await getBalanceOfTokens({
          token: currencyAddresses["DEGEN"],
          user: add
        })
        this.setState({
          balances
        });
      }, 10000)

    }
  };

  render() {
    return (
      <>


        <Mainheadbox className="wow fadeInDown" data-wow-delay="0.1s">
          <LogoBX> <Link> <img src={Logo} /> </Link> </LogoBX>
          {this.state.shortWltAddress !== null ? (
            <HeadRightBX>
              {this.state.shortWltAddress} 
              <MainLogBTN  onClick={this.toggleClass} onMouseEnter={this.toggleClass}>
              <Dot01></Dot01>
              <Dot01></Dot01>
              <Dot01></Dot01>
              </MainLogBTN> 
            </HeadRightBX>
          ) : (
            <HeadRightBX>
              <button onClick={() =>
                this.connectWallet()
              } style={{ color: "white" }}>Connect wallet</button>
            </HeadRightBX>
          )}
        </Mainheadbox>

        <SideBar className={this.state.active ? 'menuOpen' : null}>
          <CloseBTN onClick={this.toggleClass}> <img src={CloseImg} /> </CloseBTN>
          <WalletTxt>{this.state.walletAddress}</WalletTxt>


          <TabLinkbx>
            <button className={(this.state.index === 1 ? "active" : "")} onClick={() => this.onToggle(1)}>ASSETS</button>
             <button className={(this.state.index === 2 ? "active" : "")} onClick={() => this.onToggle(2)}>ACTIVITY</button> 
          </TabLinkbx>
          <Collapse className={"collapse noAni " + (this.state.index === 1 ? "active" : "")}
            isOpen={this.state.index === 1}
            onChange={({ state }) => { this.setState({ item1: state }); }}
            onInit={({ state }) => { this.setState({ item1: state }); }}>


            <TabContainer>
              <TabCBX01>
                <button>
                  <i className="ImgBX"> <img src={AstICO02} /> </i>
                  <div className="BTNText">
                    DEGEN
                    <span>Total: {Number(this.state.balances.total) / 10 ** 18}</span>
                    <span>Available: {Number(this.state.balances.available) / 10 ** 18}</span>
                  </div>
                  <i className="fas fa-chevron-right"></i>
                </button>
                 <button>
                  <i className="ImgBX"> <img src={AstICO02} /> </i>
                  <div className="BTNText">
                    DEGEN <span>1,000,000</span>
                  </div>
                  <i className="fas fa-chevron-right"></i>
                </button>
                <button>
                  <i className="ImgBX"> <img src={AstICO03} /> </i>
                  <div className="BTNText">
                    FREEZ <span>42,859,6593</span>
                  </div>
                  <i className="fas fa-chevron-right"></i>
                </button>
                <button>
                  <i className="ImgBX"> <img src={AstICO04} /> </i>
                  <div className="BTNText">
                    JNTR <span>10,859,000,8596</span>
                  </div>
                  <i className="fas fa-chevron-right"></i>
                </button> 
              </TabCBX01>
            </TabContainer>
          </Collapse>
          <Collapse className={"collapse noAni " + (this.state.index === 2 ? "active" : "")}
            isOpen={this.state.index === 2}
            onChange={({ state }) => { this.setState({ item2: state }); }}
            onInit={({ state }) => { this.setState({ item2: state }); }}>
            <TabContainer>
              <TabCBX01>
                <button>
                  <div className="BTNText">
                    Send <span>Aug 18 to 0x66....909c</span>
                  </div>
                  <div className="BTNText v2">  <span>1000 SMART</span>  </div>
                </button>
                <button>
                  <div className="BTNText">
                    Receive <span>Aug 17 from 0x66....909c</span>
                  </div>
                  <div className="BTNText v2">  <span>253 DEGEN</span>  </div>
                </button>
                <button>
                  <div className="BTNText">
                    Sell <span>Aug 17 to Gateway</span>
                  </div>
                  <div className="BTNText v2">  <span>1000 FREEZ</span>  </div>
                </button>
                <button>
                  <div className="BTNText">
                    Buy <span>Aug 17 from 0x66....909c</span>
                  </div>
                  <div className="BTNText v2">  <span>500 DEGEN</span>  </div>
                </button>
              </TabCBX01>
            </TabContainer>
          </Collapse>

          <div className="closerBX" onClick={this.toggleClass}></div>

        </SideBar>





      </>
    );
  }

  onToggle = index =>
    this.setState(state => ({ index: state.index === index ? null : index }));
}

const FlexDiv = styled.div`
display: flex; align-items: center; justify-content:center; flex-wrap:wrap; width:100%;
`;

const Mainheadbox = styled.div`
  display:flex; position:fixed; left:0; right:0; top:0; align-items:center; justify-content:space-between; min-height:79px; background-color:${props => props.theme.headbg01}; z-index:1000; border-bottom:1px solid #1e2127; padding:0 30px; 
`;

const LogoBX = styled.div`
a{ display:inline-block;}
img{ max-width:100%; height:auto;} 
`
const HeadRightBX = styled.div`
display: flex; align-items: center; justify-content:flex-end;
`
const SideBar = styled(FlexDiv)`
  width:355px; position:fixed; top:0; right:-100%; bottom:0; background-color:#16191e; border-left:1px solid #000;  z-index:10000;
  align-content: baseline;  overflow-y: auto; transition:0.6s ease-in-out; visibility:hidden; 

  .closerBX{ position:fixed; display:none; left:0; top:0; bottom:0; width:calc(100% - 355px);  }

  &.menuOpen{ right:0; visibility:visible; .closerBX{display:block;}}


`
const WalletTxt = styled(FlexDiv)`
  justify-content: flex-start; font-size:14px; font-weight:400; padding:30px 25px; color:white; margin-bottom: 30px;
`
const CloseBTN = styled.button`
  width:20px; height:20px; position:absolute; right:14px; top:27px; padding:0; margin:0;  transition:0.4s linear; 
  :hover{ transform:rotate(180deg); } 
`
const TabLinkbx = styled(FlexDiv)` 
    button{ font-size:14px; font-weight:700; color:#fff; line-height:40px; border-bottom:2px solid #000000; width:50%; 
       &:hover, &.active{ color:#00f02b; border-bottom:2px solid #00f02b;}
    } 
`
const TabContainer = styled(FlexDiv)`

`
const TabCBX01 = styled(FlexDiv)`
 justify-content:flex-start;

    button{ width:100%; min-height:86px; display: flex; align-items:center; justify-content:flex-start; padding:10px 29px; border-bottom:1px solid #000000; 

      :hover{ background-color:#1d2229;}
      
      i.ImgBX{ width:46px; height:46px; border-radius:50%; overflow:hidden; display: flex; align-items:center;justify-content:center; background-color:#fff; margin-right:14px; }
      
      .BTNText{ padding:2px 0 0 0; display: flex; align-items:flex-start;justify-content:flex-start; color:#fff; flex-direction:column;
        font-size:18px; font-weight:700; span{ font-size:12px; font-weight:400; color:#9a9a9a;}

        &.v2{ margin-left:auto; span{color:#fff; padding-top:21px; } }



       }
       
       .fas{ font-size:20px; color:#fff; margin-left:auto;}


    }


`

const MainLogBTN = styled.button`
 width:32px; height:38px; display: flex; align-items:center; justify-content:center; flex-direction: column;

 margin:0 0 0 6px;

 span:nth-child(01){ width:8px; height:8px; margin:2px 0;}
 span:nth-child(02){ width:6px; height:6px; margin:2px 0;}
 span:nth-child(03){ width:4px; height:4px; margin:2px 0;}


`



const Dot01 = styled.span`
  width:8px; height:8px; display: inline-block; border-radius: 6px; background-color:#00f02b; position: relative; padding:0; margin:0 0 0 40px;
  animation: pulse 2s infinite; border:none; outline: none; 
@-webkit-keyframes pulse {
  0% {  -webkit-box-shadow: 0 0 0 0 rgba(0, 240, 43, 0.4); }
  70% {  -webkit-box-shadow: 0 0 0 10px rgba(0, 240, 43, 0); }
  100% { -webkit-box-shadow: 0 0 0 0 rgba(0, 240, 43, 0); }
}
@keyframes pulse {
  0% {  -moz-box-shadow: 0 0 0 0 rgba(0, 240, 43, 0.4); box-shadow: 0 0 0 0 rgba(0, 240, 43, 0.4); }
  70% { -moz-box-shadow: 0 0 0 10px rgba(0, 240, 43, 0);  box-shadow: 0 0 0 10px rgba(0, 240, 43, 0); }
  100% { -moz-box-shadow: 0 0 0 0 rgba(0, 240, 43, 0); box-shadow: 0 0 0 0 rgba(0, 240, 43, 0); }
} 
`

export default Header;