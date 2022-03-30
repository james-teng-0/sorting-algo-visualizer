import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Visualizer } from './components/Visualizer';

export const App = () => {
    const colours = ["#EFBDEB", "#0275d8", "#5cb85c", "#5bc0de", "#f0ad4e", "#E2BF8D", "#d9534f", "#E14E72", "#B68CB8"]
    let unique_array = [];  
    let initial_array = [];  
    let i = 0;
    while (unique_array.length < 50){
        let r = Math.floor(Math.random() * 100) + 1;
        if (unique_array.indexOf(r) === -1) {
            unique_array.push(r);
            initial_array.push([r, colours[i % 9], i]); // create 2d array of unique numbers in first index, and colour in second index
        }
        i++;
    }

    const [arr, setArr] = useState(initial_array);

    console.log(arr)
    return (
        <>
            <Dashboard arr={arr} setArr={setArr} initialState={initial_array}/>
            <Visualizer arr={arr} setArr={setArr} />
        </>
    )
}