//Created by bash script
import styles from './Exhibit.module.css';

const Exhibit = (props) => {
    const classes = `${styles.Exhibit} ${props.className? props.className : ''}`;
    return <div className={classes}>
        {props.children}
    </div>;
    }
    export default Exhibit;

