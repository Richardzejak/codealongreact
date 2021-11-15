import { createGlobalStyle } from "styled-components";
import { fadeIn } from "./animations/fadeIn";

export const GlobalStyles = createGlobalStyle`
    -ms-hyphenate-limit-chars, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1{
        animation: ${fadeIn} 1000ms ease-in
    }
`