//Created by bash script
import styles from './Exhibit.module.css';

const Exhibit = (props) => {
    const classes = `${styles.Exhibit} ${props.className}`
    return <div className={classes}>
        {props.title && <h2>{props.title}</h2>}
        <div className={styles.Content}>
            {props.children}
        </div>
    </div>;
    }
    export default Exhibit;

