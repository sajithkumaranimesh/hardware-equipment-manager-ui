// eslint-disable-next-line react/prop-types
function LabelFieldComponent({htmlFor, text}) {
    return(
        <label htmlFor={htmlFor}>{text}</label>
    );
}

export default LabelFieldComponent;