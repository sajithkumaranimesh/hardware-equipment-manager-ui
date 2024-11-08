import {Link, NavLink} from "react-router-dom";
import styles from './HeaderComponent.module.css'

function headerComponent() {
    return (
        <>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <NavLink className={({isActive}) => isActive? styles.active : styles.link} to={'person'} end>Person</NavLink>
                </li>
                <li className={styles.li}>
                    <NavLink className={({isActive}) => isActive? styles.active : styles.link} to={'equipment'} end>Equipment</NavLink>
                </li>
                <li className={styles.li}>
                    <NavLink className={({isActive}) => isActive? styles.active : styles.link} to={'category'} end>Category</NavLink>
                </li>
                <li className={styles.li}>
                    <NavLink className={({isActive}) => isActive? styles.active : styles.link} to={'notifications'} end>Notifications</NavLink>
                </li>

            </ul>
        </>
    );
}

export default headerComponent;