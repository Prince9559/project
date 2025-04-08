import './Select.css';
import React,{useState} from 'react';

function Select(){
const [number,setNumber]=useState('');
const [number1,setNumber1]=useState('');
const [result,setResult]=useState('');
const [operator,setOperator]=useState('');


const handleAdd =(e)=>{
    e.preventDefault();

    const num1=Number(number);
    const num2=Number(number1);

    let x=0;
    if(operator=='add')
    {
      x=num1+num2;
    }
    else if(operator=='sub')
    {
        x=num1-num2;
    }
    else if(operator=='mul')
    {
        x=num1*num2;
    }
    else if(operator=='div')
    {
        x=num1/num2;
    }
    
    setResult(x);
}

    return(
        <div className='col'>
            <h2>Calculator</h2>
            <form onSubmit={handleAdd}>
                <input className='col1' type='number'value={number}onChange={(e)=>setNumber(e.target.value)}></input>
                <br></br>
                <input className='col2' type='number'value={number1}onChange={(e)=>setNumber1(e.target.value)}></input>
                <br></br>
                <input className='col3' value={result}></input>
                <br></br>
                <br></br>
                <div>
                  <select className='sel' value={operator}onChange={(e)=>setOperator(e.target.value)}>
                    <option value=''>--Select Operation--</option>
                    <option value='add'>Addition</option>
                    <option value='sub'>Subtraction</option>
                    <option value='mul'>Multiple</option>
                    <option value='div'>Division</option>

                  </select>

                </div>
                <button className='col4'>Calculate</button>
            </form>
        </div>
    )
};
export default Select;
