import {InputContainer, StyledInput, StyledLabel} from './InputForm.styles'
function InputForm (props)  {
    return(
        <InputContainer>
            <StyledLabel htmlFor={props.htmlFor}>{props.textValue}</StyledLabel>
            <StyledInput {...props} />
        </InputContainer>
    )
}

export default InputForm