import { StyleButton } from "./Button.style";

function Button({children, ...rest}) {
    return (
        <StyleButton {...rest}>{children}</StyleButton>
    );
};

export default Button;