import './Number.css';
import React, { useState } from 'react';

function Number() {

    const [number, setNumber] = useState('');
    const [number1, setNumber1] = useState('');
    const [result, setResult] = useState('');


    const handleAdd = (e) => {
        e.preventDefault();
        const sum = (1 * number) + (1 * number1);
        setResult(sum);
    };

    return (
        <div className='col'>

            <form onSubmit={handleAdd}>
                <h2>Calculator</h2>

                <label>Value I : </label>
                <input className='col1' type='number' value={number} onChange={(e) => setNumber(e.target.value)}></input>

                <br></br>

                <label>Value II : </label>
                <input className='col2' type='number' value={number1} onChange={(e) => setNumber1(e.target.value)}></input>

                <br></br>
                <label> Result :</label>
                <input className='col3' value={result} readOnly></input>

                <br></br>
                <button className='col4'>Add</button>
            </form>
        </div>

    )
};
export default Number;