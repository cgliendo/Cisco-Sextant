//Created by bash script
import styles from './Card.module.css';

const Card = (props) => {
    const classes = `${styles.Card} ${props.className? props.className : ''}`;
    return (
    <div className={classes}>
        <h2>
            {props.title}
        </h2>
        <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
        </p>
    </div>
    ) 
    }
    export default Card;

