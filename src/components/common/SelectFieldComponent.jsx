import styles from './SelectFieldComponent.module.css'

// eslint-disable-next-line react/prop-types
function SelectFieldComponent({id, options}) {
    return (
        <select className={styles.selectField} id={id}>
            {/* eslint-disable-next-line react/prop-types */}
            <option>Select the option</option>
            {/* eslint-disable-next-line react/prop-types */}
            {options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    );
}

export default SelectFieldComponent;