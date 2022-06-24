import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   outline:0;
   box-sizing: border-box;
 }
 html, body, #root{
   min-height: 100%;
 }
 body{
   font-size: 14px;
   background: ${(props) => props.theme.colors.background};
   -webkit-font-smoothing: antialiased !important;
 }
 body, input, button{
   color: #222;
   font-size: 14px;
   font-family: 'Nunito Sans', sans-serif;
 }
 button{
   cursor: pointer;
 }
 a{
   display: contents;
   text-decoration: none;
 }
 #root{
     width: 100%;
     max-width: 1440px;
     margin: 0 auto;
 }
`;