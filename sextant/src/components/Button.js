//Created by bash script
import styles from './Button.module.css';

const Button = (props) => {
    const buttonTitle = props.children ? props.children : "Click Me!";
    return (
        <button className={styles.Button}>
            {buttonTitle}
        </button>
    );
    }
    export default Button;

