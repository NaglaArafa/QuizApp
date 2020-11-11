import styled  from 'styled-components'
import{ Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const LinkStyle = styled(Link)`
    border:0; 
    font-size: 18px;
    color:${({theme})=> theme.colors.primaryDark};
    
    &:hover{
      text-decoration: underline;
    }
`

function LinkTag(props){
    const {text, linkTo} = props

    return(
        <LinkStyle to={linkTo}>
            {text}
        </LinkStyle>
    )
}

export default LinkTag;

LinkTag.propTypes = {
  linkTo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}