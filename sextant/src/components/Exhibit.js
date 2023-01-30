//Created by bash script
import styles from './Exhibit.module.css';

const Exhibit = (props) => {
    return <div className={styles.Exhibit}>
        {props.title && <h2>{props.title}</h2>}
        <div className={styles.Content}>
            {props.children}
        </div>
    </div>;
    }
    export default Exhibit;

