import { StyleButton } from "./Button.style";

function Button({children, href, ...rest}) {

    return (
        <StyleButton href=''{...rest}>{children}</StyleButton>
    );
};

export default Button;