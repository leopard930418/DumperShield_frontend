import React, { Component } from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

import MenuIconRefresh from './../Assets/images/lb-Icon01.png' 
import MenuIconGateway from './../Assets/images/lb-Icon02.png' 
import MenuIconRouter from './../Assets/images/lb-Icon03.png' 
import MenuIconGovernance from './../Assets/images/lb-Icon04.png' 
import MenuIconUnfreeze from './../Assets/images/assIcon-03.png' 



class LeftMBX extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  
  render() {
    return (
      <>
        <LeftBX className="wow fadeInLeft" data-wow-delay="0.1s"> 

          <LBBTNBar>
            <NavLink exact to='/' activeClassName="active" ><img src={MenuIconRefresh} alt=''/> </NavLink>
            <NavLink activeClassName="active" to='/Gateway' > <img src={MenuIconGateway} alt=''/> </NavLink>
            <NavLink activeClassName="active" to='/Router'><img src={MenuIconRouter} alt=''/> </NavLink>
            <NavLink activeClassName="active" to='/Unfreeze'><img src={MenuIconUnfreeze} alt=''/> </NavLink>  
            <NavLink activeClassName="active" to='/Governance'><img src={MenuIconGovernance} alt=''/> </NavLink>  
          </LBBTNBar>
          
        </LeftBX>
      </>
    );
  } 
}


const FlexDiv = styled.div`
display: flex; align-items: center; justify-content:center; flex-wrap:wrap;
`;

const LeftBX = styled(FlexDiv)` 
    width:82px; background-color:#010602; border-right:1px solid #1e2127; min-height:90vh; align-items:flex-start;  
`
const LBBTNBar = styled(FlexDiv)`
  flex-direction:column; width:100%;

  button, a{ display:flex; align-items:center; justify-content:center; height:60px; border-bottom:1px solid #1e2127; width:100%; 
      &:hover, &.active{ background-color:#00f02b;} 
  }

`







export default LeftMBX;