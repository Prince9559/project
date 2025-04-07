import './Sign.css';

function Sign() {
    return(
        
        
        <div className='col'>

        <h2 className="fading-text"><i>😎 Sign up 🌹</i></h2>
        <input type='text' placeholder='Name..' className='col1'></input>
      
        <input type='text' placeholder='Email..' className='col1'></input>

        <input type='text'placeholder='Mobile_No..'className='col1'></input>
        
        <input type='text' placeholder='Password..' className='col1'></input>

        <input type='text' placeholder='Confirm password..' className="col1"></input>

  
       <br></br>
        <button className='col2'>Submit</button>

        </div>
    )
};

export default Sign;