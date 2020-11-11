import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonStyle = styled.button`
    border:0;
    cursor: ${props=> props.disabled? "normal" :  "pointer"};
    background-color:${props => props.disabled ? "#eee" :  ({theme})=> theme.colors.primaryDark};
    color:${ props => props.disabled ? "#c4c4c4" :  ({theme})=> theme.colors.primary};   
    margin: 5px 15px;
    padding: 5px 15px;
    
    
`

const Button = ({ onClick, children, ...otherProps }) => {
    return (
        <ButtonStyle onClick={onClick} {...otherProps}>{children}</ButtonStyle>
    );
}


export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}