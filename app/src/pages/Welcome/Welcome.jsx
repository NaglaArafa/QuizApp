import LinkTag from '../../components/LinkTag'
import {Container, Row} from '../../styled/grid'
import styled from "styled-components";

import {TitleH3} from '../../styled/components/Title'

const MenuItemLink = styled.div`
    padding: 20px; 
    text-align: center;  
`


function Welcome (){
    return (
        <Container>
            <TitleH3>Welcome to Quiz app</TitleH3>
            <Row>
                <MenuItemLink>
                    <LinkTag text="Start Quiz" linkTo="./questions"></LinkTag>
                </MenuItemLink>
            </Row>
        </Container>
    )
}

export default Welcome