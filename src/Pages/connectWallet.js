import React, { Component } from 'react';
import styled from 'styled-components';
import Gs from '../Theme/globalStyles';
import ReactTooltip from 'react-tooltip';
import { Link, Redirect } from 'react-router-dom';  
import Logo from './../Assets/images/dumperShield-Logo.png'
import FLogo01 from './../Assets/images/atom-logo.png'
import FLogo02 from './../Assets/images/pdo-logo.png'
import { metamask_connection } from '../Service/metamask_function';
import notificationConfig from '../config/notificationConfig'


class ConnectWallet extends Component {

    constructor(props) {
        super(props);
        this.connectWallet = this.connectWallet.bind(this);
        this.state = {
            index: 1,
            dropDown: false, 
            popup01 :  false,
            redirect: false
        }
    } 

    componentDidMount() {
        this.props.changeHead(true)
    }

    componentWillUnmount(){
        this.props.changeHead(false)
    }

    async connectWallet() {
        await metamask_connection(
          localStorage.getItem("account"),
          "ahrefClick"
        )
    
        if(localStorage.getItem("chainId") == '0x61'){
            this.setState({redirect:true})
        }else{
            notificationConfig.error("Please Select BSC MainNet")
        }

    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/otc' />
        }
      }

    render() {

        return (
            <>  
            {this.renderRedirect()}
                <MainContainer> 

                    <LogoBX> <Link> <img src={Logo} /> </Link> </LogoBX>

                    <FormBTNBX>
                        <button onClick={()=>this.connectWallet()}>Connect Your Wallet</button>
                        <p className='hoverClass'><span>Add your project to the Dumper Shield for free </span></p>
                    </FormBTNBX>

                    <FooterMBX>
                        <Link to="" ><img src={FLogo01}  alt="" /></Link>
                            <span className="Liner"></span>
                        <Link to="" ><img src={FLogo02} alt="" /> </Link> 
                    </FooterMBX>

                </MainContainer> 
                
                <ReactTooltip effect="solid" className="myTip" />
            </>
        );
    }  
}



// Common Style Div 


const FlexDiv = styled.div`
display: flex; align-items: center; justify-content:center; flex-wrap:wrap; width:100%;
`;

const MainContainer = styled(FlexDiv)`
 width: 100%; min-height:calc(100vh - 80px); position: relative;
` 

const LogoBX = styled.div`
    position: absolute;  left: 30px;  top: -48px; 
a{ display:inline-block;}
img{ max-width:100%; height:auto;} 
`
const FormBTNBX = styled(FlexDiv)`
    max-width:664px; margin:0 auto 50px auto; 
    p{ font-size:16px; font-weight:700; color:white;}
button{ width:100%;  font-size:30px; font-weight:700; height:70px; background-color:#383b42; color:#00f02b; border-radius:10px;
    :hover{ background-color:#282b32; } }

    .hoverClass :hover span{
        display:none
    }
    .hoverClass :hover : before  {
        content: "Coming Soon"
      }
`

const FooterMBX = styled(FlexDiv)`
position: absolute;  left: 30px;  width:auto; bottom:30px;

    .Liner{ width:1px; height:27px; display: inline-block; background-color:#1e2127; margin:0 15px;}

    a:hover{ filter:brightness(1.4);}

`

export default ConnectWallet;