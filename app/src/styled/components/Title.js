import styled from "styled-components";

export const TitleH3 = styled.h3`
    padding: 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color:  ${ ({theme}) => theme.colors.primaryDark}; ;
    margin-bottom: 10px;
    border-bottom: 3px solid ${ ({theme}) => theme.colors.primary};
`