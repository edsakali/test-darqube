import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #242525;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  .modified-pagination .rc-pagination-jump-prev,
  .modified-pagination .rc-pagination-jump-next,
  .modified-pagination .rc-pagination-item {
    display: none;
  }
  .modified-pagination .rc-pagination-total-text {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
  }
  .modified-pagination .rc-pagination-next > button::after,
  .modified-pagination .rc-pagination-prev > button::after {
    display: none;
  }
  .modified-pagination .rc-pagination-next > button,
  .modified-pagination .rc-pagination-prev > button {
    color: white;
  }
  .modified-pagination .rc-pagination-options {
    margin: 0;
  }
`;
