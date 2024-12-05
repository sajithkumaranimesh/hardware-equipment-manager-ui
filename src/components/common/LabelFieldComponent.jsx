function LabelFieldComponent({htmlFor, text}) {
    return(
        <label className={"form-label"} htmlFor={htmlFor}>{text}</label>
    );
}

export default LabelFieldComponent;