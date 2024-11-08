import styles from './InputFieldComponent.module.css';


// eslint-disable-next-line react/prop-types
function InputFieldComponent({type, id, placeholder, ...props}) {
    return(
        <input className={styles.inputField} type={type} id={id} placeholder={placeholder} {...props} />
    );
}

export default InputFieldComponent;