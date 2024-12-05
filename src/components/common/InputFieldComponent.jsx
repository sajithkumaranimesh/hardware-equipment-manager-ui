


function InputFieldComponent({type, id, placeholder, ...props}) {
    return(
        <input className={"form-control"} type={type} id={id} placeholder={placeholder} {...props} />
    );
}

export default InputFieldComponent;