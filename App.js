import React, { useState } from 'react';
import './index.css';

const App = () => {
const [fullName,UpdatedName] = useState({
  fname:'',
  lname:'',
});


  const inputValue = (event) =>{
    // console.log(event.target.value);
    // UpdatedName(event.target.value);
    const value = event.target.value;
    const name = event.target.name;
  
    UpdatedName( (preValue) => {
      if(name === "fname"){
        return{
          fname: value,
          //lname:preValue.lname,
        }
          } else if (name === "lname"){
            return {
              fname: preValue.fname,
              lname: value ,
        }
      }

    })
  }
  const setInput = (event) =>{
    event.preventDefault();
  };

  return(
   <>
   <div>
     <form onSubmit={setInput} >
   <h1> hello {fullName.fname} {fullName.lname} </h1>
   <input placeholder="enter your name" 
   onChange={inputValue}
   value={fullName.fname}
   name= 'fname'
    ></input>
    <input placeholder="password" onChange={inputValue}
    value={fullName.lname}
    name="lname"
    />
   <button >submit</button>
   </form>
   </div>
   
   </>
  )
};

export default App;