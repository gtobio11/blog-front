import {
    createGlobalStyle,
} from 'styled-components';
  
export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button {
        margin: 0;
        padding: 0;
        border: 0;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
    button {
        cursor: pointer;
        font: none;
        font-family: 'Noto Sans', sans-serif;
    }
    * {
        font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
    }
    @media screen and (max-width: 1680px) {
        html {
        font-size: 14px;
        }
    }
    @media screen and (max-width: 1620px) {
        html {
        font-size: 13.5px;
        }
    }
    @media screen and (max-width: 1560px) {
        html {
        font-size: 13px;
        }
    }
    @media screen and (max-width: 1440px) {
        html {
        font-size: 11.383px;
        }
    }
`;
  
export const globalColor = '#00be91';