import styles from './TextareaFieldComponent.module.css'

function TextareaFieldComponent({id, placeholder}) {
    return(
        <textarea className={styles.textareaField} id={id} placeholder={placeholder}></textarea>
    );
}

export default TextareaFieldComponent;