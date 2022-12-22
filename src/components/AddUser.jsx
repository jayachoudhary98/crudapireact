import React from "react";
import { Button, Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { textAlign } from "@mui/system";

function AddUser() {
  const paperStyle={marginTop: 100, paddingTop: 20, height:'60vh', width:280, margin:'20px auto', textAlign:'center'}
  const headingstyle={marginTop: 80, textAlign: 'center'}
 
  const [user, setUsers] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    contact: "",
    address: ""
  });
  const[status, setStatus]= useState();
  // console.log(users, "value");
  // const onChangeHandler=(event)=>{
  //     event.preventDefault();
  //     setFirstName(event.target.value);

  // }
  // const{firstName, lastName, age, email,contact,address}=user;
  function handleChange (e)  {
   setUsers({ ...user, [e.target.name]: e.target.value })
  };
  async function handleSubmit (e) {
    // alert("An essay was submitted: ", users);
    e.preventDefault();
    try{
      await axios.post(`http://localhost:3003/users`, user)
      setStatus(true);
    }
    catch(error){
      console.log("Somthing wrong");
    }
  };
  if(status){
    return<AddUser/>
  }
  return (
    < >

      <h1 style={headingstyle}>Enter User Details</h1>
      <Paper style={paperStyle}>
      <div textAlign= "center" >
        <TextField
          variant="standard"
          name="firstName"
          id="firstName"
          value={user.firstName}
          label="First Name"
          onChange={e=> handleChange(e)}
        />
        <br></br>
        <TextField
          variant="standard"
          name="lastName"
          id="lastName"
          value={user.lastName}
          label="Last Name"
          onChange={e=> handleChange(e)}
        />
        <br></br>
        <TextField
          variant="standard"
          name="age"
          id="age"
          value={user.age}
          label="Age"
          onChange={e=> handleChange(e)}
        />
        <br></br>
        <TextField
          variant="standard"
          name="email"
          id="email"
          value={user.email}
          label="Email"
          onChange={e=> handleChange(e)}
        />
        <br></br>
        <TextField
          variant="standard"
          name="contact"
          id="contact"
          value={user.contact}
          label="contact"
          onChange={e=> handleChange(e)}
        />
        <br></br>
        <TextField
          variant="standard"
          name="address"
          id="address"
          value={user.address}
          label="Address"
          onChange={e=> handleChange(e)}
        />
        <br></br>
      </div>
      <div>
      <br></br>
        <Button type="button" className="m-2" variant="contained" color="primary" onClick={e => handleSubmit(e)}>
          Create User
        </Button>
        <Button variant="contained" color="primary" href="/userlist">
          View list
        </Button>
      </div>
      </Paper>
     
      
    </>
  );
}

export default AddUser;
