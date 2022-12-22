import React from 'react'
import {  Paper } from "@mui/material";
import { useState } from 'react';


const Contact = () => {
    const paperStyle={marginTop: 100, paddingTop: 20, height:'60vh', width:380, margin:'30px auto', textAlign:'center'}
    const [uvalue, setUvalues]= useState({
        uname: "",
        uemail: "",
        unum: "",
    })
    const handleChange=(e)=>{
        setUvalues({
            ...uvalue, [e.target.name]: e.target.value
        })
    }
    
  return (
    <>

<Paper style={paperStyle}>
    <div>
    <h1>Contact form</h1>
       </div >
       <div className='row g-3'>
       <div className='mb-3 col'>
       <input type="text" name="uname"  placeholder='Enter your name' onChange={(e)=>handleChange(e)}></input>
       </div >
       <div className='mb-3 col'>
       <input type="text" name="uemail"  placeholder='Enter your Email' onChange={(e)=>handleChange(e)}></input>
       </div>
       <div className='mb-3 col'>
       <input type="text" name="unum"  placeholder='Enter your contact number' onChange={(e)=>handleChange(e)}></input>
       </div>
       <div>
       <button type="submit" >Submit</button>
       </div>
       </div>

    
    </Paper>
    </>
  )
}

export default Contact