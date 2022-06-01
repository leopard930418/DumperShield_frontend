import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
// import ETHIcon from '../Assets/images/etherLOGO.png' 

const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

const Footer = () => {
    return (
        <FooterBody> 
            <a href="javascript:void(0)" onClick={scrollToTop} ><i className="fas fa-caret-square-up"></i> Go to Top</a> 
         </FooterBody>
    )
}

   
const FooterBody = styled.div`
    display:flex; align-items: center; background-color:#000000; justify-content:flex-end; height:100px; margin:0; border-top:1px solid #1e2127;  width:100%; padding:0 30px; 

    a{ color:#00f02b; font-size:14px; font-weight:400; :hover{ text-decoration:underline;}}
`


export default Footer