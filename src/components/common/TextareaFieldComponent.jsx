import styles from './TextareaFieldComponent.module.css'

// eslint-disable-next-line react/prop-types
function TextareaFieldComponent({id, placeholder}) {
    return(
        <textarea className={styles.textareaField} id={id} placeholder={placeholder}></textarea>
    );
}

export default TextareaFieldComponent;