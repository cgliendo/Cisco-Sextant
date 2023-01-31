import { useEffect, useState } from "react";


var client;
var W3CWebSocket;
let init = 0;
let intervalPtr;

const Latency = (props) => {
    // let delta = 0;
    // const [delta, setDelta] = useState(0);
    let delta = 0;
    const [latency, setLatency] = useState('0ms');

    useEffect(() => {        
        // clientConnect.connect();    
        
        if(init===0){
            init++;
            W3CWebSocket = require('websocket').w3cwebsocket;
            client = new W3CWebSocket('ws://localhost:55455/', null);
        }
    
        client.onerror = function() {
            console.log('Connection Error');
        };
    
        client.onopen = function() {
            console.log('WebSocket Client Connected');
        };
    
        client.onmessage = function(e) {
            delta = Date.now() - e.data;
        };

        intervalPtr = setInterval(() => {
            setLatency(`${delta}ms`);         
            console.log(delta,'ms');
        }, 1000);  
        return () => { //done
            clearInterval(intervalPtr);
      }
    }, [latency]);

    return <span>{latency}</span>;
    }
    export default Latency;

