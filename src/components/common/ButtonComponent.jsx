
// eslint-disable-next-line react/prop-types
function ButtonComponent({text, ...props}) {
    return (
        <button {...props}>{text}</button>
    );
}

export default ButtonComponent;