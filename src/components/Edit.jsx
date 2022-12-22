import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [user, setUsers] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    contact: "",
    address: ""
  });
  // console.log(users, "value");
  // const onChangeHandler=(event)=>{
  //     event.preventDefault();
  //     setFirstName(event.target.value);

  // }
  useEffect(() => {
    async function getUser() {
      try {
        const user = await axios.get(`http://localhost:3003/users/${id}`)
        setUsers(user.data);
            console.log(user.data);

      } catch (error) {
        console.log("Somthing Wrong");
      }
    }
    getUser();
  }, [id]);
  function handleChange(e) {
    setUsers({ ...user, [e.target.name]: e.target.value });
  }
  // async function handleSubmit(e) {
  //   // alert("An essay was submitted: ", users);
  //   e.preventDefault();
  //   try {
  //     await axios.put(`http://localhost:3003/users/${id}`, user);
  //     history("/add_user");
  //   } catch (error) {
  //     console.log("Somthing wrong");
  //   }
  // }
  // if(status){
  //   return<AddUser/>
  // }
  return (
    < >
      <h1>Edit form</h1>
      <div textAlign= "center">
      <TextField
          variant="standard"
          name="id"
          id="id"
          value={user.id}
          label="id"
          onChange={e=> handleChange(e)}
        />
        <br></br>
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
      <br></br>
      <div>
        <Button type="button" variant="contained" color="primary" onClick={e => handleSubmit(e)}>
          Create User
        </Button>
        <Button variant="contained" color="primary" href="/userlist">
          View list
        </Button>
      </div>
    </>
  );
};

export default Edit;
