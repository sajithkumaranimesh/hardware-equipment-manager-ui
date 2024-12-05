
function ButtonComponent({text, ...props}) {
    return (
        <button className={"btn btn-primary"} {...props}>{text}</button>
    );
}

export default ButtonComponent;