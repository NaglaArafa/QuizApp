import styled from 'styled-components'

// todo : complete the Styled here

const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
`

const Row = styled.div` 
  padding: 0 10px;
  display: ${(props) => props.display ? props.display : "block" };
  align-content: ${(props) => props.alignContent ? props.alignContent : "" };
  text-align: ${(props) => props.textAlign}
`

const Col = styled.div` 
  padding: 0 10px;
  flex:${({flex}) => flex ? flex :  " 1 " }
`


export { Container, Row, Col };