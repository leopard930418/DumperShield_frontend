import React from 'react'
import styled from 'styled-components' 
import Gs from '../Theme/globalStyles'; 

import CloseIcon from '../Assets/images/close-icon.png'



export default function Modal(props) {
  return (
    <PopupMainBx style={{display:`${props.isOpen?'block':'none'}`}}>
     { !props.hideBTN && <SwapPopupClose onClick={props.dismiss}  /> }
          <Gs.Container>
              {props.children}
          </Gs.Container>
    </PopupMainBx>
  )
}


const PopupMainBx = styled.div`
    width: 100%;
    min-height: 100vh;
    position: fixed; z-index: 100; left:0; right: 0px; top:0; bottom:0;
    background-color:rgba(11, 12, 15, 0.95);
    overflow-y: auto;
    overflow-x:hidden; 
    z-index: 100000;

    ${Gs.Container} {
     padding-top:100px; max-width:1750px;
    }
  
`;

const SwapPopupClose = styled.a` 
    position: absolute;
    top: 40px;
    right: 50px;
    cursor: pointer; display: block;
    height: 27px; width: 27px;   transition: 0.5s ease all;
    background:  url(${CloseIcon}) 50% 50% no-repeat; 
    :hover{ transform: rotate(180deg);
   } 

`;