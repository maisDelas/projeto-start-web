import {InputContainer, StyledInput} from './InputForm.styles'
function InputForm (props)  {
    return(
        <InputContainer>
            <label htmlFor={props.htmlFor}>{props.textValue}</label>
            <StyledInput {...props} />
        </InputContainer>
    )
}

export default InputForm