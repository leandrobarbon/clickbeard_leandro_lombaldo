import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html{
      font-size: 62.5%;
      background: #251D3A;
      scroll-behavior: smooth;
      font-family: 'Roboto', sans-serif;
      margin: 0 auto;
   }

   a {
      text-decoration: none;
   }

   li{
      list-style: none;
   } 

   button {
      cursor: pointer;
   }
`;