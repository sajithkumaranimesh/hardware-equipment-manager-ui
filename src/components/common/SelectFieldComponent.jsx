import styles from './SelectFieldComponent.module.css'


function SelectFieldComponent({id, options}) {
    return (
        <select className={styles.selectField} id={id}>
            <option>Select the option</option>
            {options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    );
}

export default SelectFieldComponent;