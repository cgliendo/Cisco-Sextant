// import styles from './IPdisplay.module.css';
import { useEffect, useState } from "react";

const IPdisplay = (props) => {
    const classes = `${props.className? props.className : ''}`;
    const [IPAddress,setIPAddress] = useState('1.1.1.1');

    useEffect(() => {
        const fetchAddress = (props.ipv6===true)? 'https://api64.ipify.org?format=json' : 'https://api.ipify.org?format=json';
        fetch(fetchAddress)
        .then((response) => response.json())
        // .then((data) => console.log(data));
        .then((data) => setIPAddress(data.ip));
    }, []);


    return (
        <span className={classes}>
            {IPAddress}
        </span>
        )
    }
    export default IPdisplay;

