import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'; 
import BodyBG from '../Assets/images/bodyBG.jpg' 

var Gs = {}
 
Gs.GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
    
    background-color: ${(props) => props.theme.bodybg01}; 
    background-image:url(${BodyBG});
    background-position: center top;
    background-repeat: no-repeat; 
    color: ${(props) => props.theme.color01}; 
  }
  .orangeColor{color:#febb00 !important; }
  .myTip{ max-width:360px; font:500 12px/17px 'IBM Plex Mono', arial !important; color:#000 !important; background-color:#fff !important;}
  .myTip.place-top:after{ border-top-color:#fff !important; }
  .helpIco{ position:relative; right:-5px; top:-5px; font-size:12px !important; font-weight:400; }

  .MainBox{ min-height:100vh;  background-position: 50% 120px; background-repeat: no-repeat;}

  .MainBox.noBG{background-image:none;}

  input{ outline:none;}
  img{ max-width:100%; height:auto;}
  button{
    background:transparent; outline:none; border:0;
  }
 
  .track-vertical{ width:19px !important; height:100%; display:block; background-color:#1f2127; position:absolute; right:0px;}
  .thumb-vertical{ width:9px !important; margin:3px 5px; background-color:#6a6d74; }

  .redColor{color:#c32b2d!important;} 


.collapse { width:0px; transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);}
.collapse.noAni{ transition:none}
.collapse.active{ width:100%;}

.sb-BorRight{ border-right:1px solid #393d46; } 

.collapse-css-transition { transition: height 280ms cubic-bezier(0.4, 0, 0.2, 1); }

.md-checkbox{position:relative;margin:10px 0; width:100%;}
.md-checkbox label{cursor:pointer;font-size:12px;margin-left:29px;display:inline-block; font-size:16px;font-weight:700;margin-left:0;margin-right:30px;}
.md-checkbox label:before,.md-checkbox label:after{content:"";position:absolute;left:0;top:0;}
.md-checkbox label:before{width:20px;height:20px;background:#fff;border:2px solid rgba(0, 0, 0, 0.54);border-radius:2px;cursor:pointer;transition:background .3s;}
.md-checkbox input[type="checkbox"]{outline:0;margin-right:10px;position:absolute;}
.md-checkbox input[type="checkbox"]:checked + label:before{background:#337ab7;border:none;}
.md-checkbox input[type="checkbox"]:checked + label:after{transform:rotate(-45deg);top:5px;left:4px;width:12px;height:6px;border:2px solid #fff;border-top-style:none;border-right-style:none;}
.md-checkbox:not(:last-child){padding-right:10px;}
.md-checkbox input{background:none!important;border:none!important;-webkit-appearance:none;-moz-appearance:none;appearance:none;}
.md-checkbox label{font-size:16px;font-weight:700;margin-left:0;margin-right:30px;}
.md-checkbox label:before,.md-checkbox input[type="checkbox"]:checked + label:before{border:2px solid rgba(255, 255, 255, 0.10);background:rgba(255, 255, 255, 0.05);left:auto;right:0;}
.md-checkbox input[type="checkbox"]:checked + label:after{transform:rotate(-45deg);top:1px;left:auto;width:18px;height:9px;border:3px solid #faba37;border-top-style:none;border-right-style:none;right:-4px;}
.md-checkbox input[type="checkbox"]:checked + label{color:#fff;}
input{border-radius:4px;}
.md-checkbox:nth-child(01) { margin-top:20px;} 
.disaBled{ opacity:0.7; pointer-events:none; color:#4B4E56 !important; border-color:#4B4E56 !important;} 
.md-checkbox.inline{ width:auto; margin:0px; }
.md-checkbox.leftS label{ margin-right:0px; margin-left:30px; }
.md-checkbox.leftS label:before,.md-checkbox.leftS input[type="checkbox"]:checked + label:before{ left:0px; right:auto;}
.md-checkbox.leftS input[type="checkbox"]:checked + label:after{right:auto; left:5px;}
 
.__react_component_tooltip{ z-index:10000 !important;}




`; 


Gs.MainBox = styled.div`
margin:79px 0 0 0;
`;

Gs.Container = styled.div`
margin:0 auto; width: 100%; max-width:1362px;
`;

export default Gs; 