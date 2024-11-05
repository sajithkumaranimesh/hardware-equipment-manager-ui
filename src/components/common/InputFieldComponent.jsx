// eslint-disable-next-line react/prop-types
function InputFieldComponent({type, id, placeholder}) {
    return(
        <input type={type} id={id} placeholder={placeholder} />
    );
}

export default InputFieldComponent;