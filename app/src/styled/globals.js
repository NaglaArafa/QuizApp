import  {createGlobalStyle}  from 'styled-components';

import {fonts} from './_fonts'
import {reset} from './_reset'

export const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${reset}

    body {
        font-family: 'Roboto', sans-serif;  
    }
    
    a{
     text-decoration: none;
    }
`