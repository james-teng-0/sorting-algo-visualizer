import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Visualizer } from './components/Visualizer';


export const App = () => {
    var unique_num = [];
    while (unique_num.length < 50){
        var r = Math.floor(Math.random() * 100) + 1;
        if(unique_num.indexOf(r) === -1) unique_num.push(r);    
    }

    const [arr, setArr] = useState(unique_num);

    console.log(arr)
    return (
        <>
            <Dashboard arr={arr} setArr={setArr} />
            <Visualizer arr={arr} setArr={setArr} />
        </>
    )
}