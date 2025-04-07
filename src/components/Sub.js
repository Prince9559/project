import './Sub.css';
import React, { useState } from 'react';

function Sub() {

    const [number, setNumber] = useState('');
    const [number1, setNumber1] = useState('');
    const [result, setResult] = useState('');
    const[operator,setOperator]=useState('');



    const handleAdd = (e) => {
        e.preventDefault();

        const num1 = Number(number);
        const num2 = Number(number1);

        let x = 0;
        if (operator=='add') 
        {
            x=num1+num2;
        }

        else if (operator=='sub') 
        {
            x=num1-num2;
        }
        setResult(x);
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


                <button className='col4'>Calculate</button>

                
            <div className='radio'>
                
            <label style={{marginLeft:"-50px"}}>

            <input type='radio'name='c' value='add' onChange={(e)=> setOperator(e.target.value)}></input>Add 

            </label>

             <label style={{marginLeft:"10px"}}>

            <input type='radio' name='c' value='sub' onChange={(e)=>setOperator(e.target.value)}></input>Sub
            
            </label>
            </div>


            </form>
        </div>

    )
};
export default Sub;