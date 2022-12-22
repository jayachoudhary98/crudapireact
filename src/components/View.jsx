import React from 'react'
import {Table, TableBody, Button, IconButton,Tooltip,TableContainer, TableHead, TableRow, TableCell, Paper,}   from '@mui/material'
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

const View = () => {
    const {id}=useParams();
    const history = useNavigate();

    const [user, setUsers] = useState([]);
    useEffect(()=>{
        async function getUser(){
            try{
                const user=await axios.get(`http://localhost:3003/users/${id}`);
                // console.log(user.data)
                setUsers(user.data);
            }
            catch(error){
                console.log("somthing rong");
            }
        }
        getUser();
    },[id]);
     function handleClick(){
        history("/add_user")

     }

  return (
    <div>
        <h1>View Data</h1>
        <TableContainer component={Paper}>
<Table>
<TableHead>
            <TableRow>
            <TableCell>ID</TableCell>

                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Address</TableCell>
</TableRow>
        </TableHead>
         <TableBody>

   <TableRow>
   {/* <TableCell >1</TableCell>
    <TableCell>jaya</TableCell>
    <TableCell>Choudhary</TableCell> */}

    <TableCell >{user.id}</TableCell>
    <TableCell>{user.firstName}</TableCell>
    <TableCell>{user.lastName}</TableCell>
    <TableCell>{user.email}</TableCell>
    <TableCell>{user.age}</TableCell>
    <TableCell>{user.contact}</TableCell>
    <TableCell>{user.address}</TableCell>

    <TableCell align="center">
    <Button variant="contained" color="primary" onClick={handleClick}>
          Back to adduser
        </Button>
          </TableCell>
   </TableRow>
   
    
    </TableBody>
</Table>
</TableContainer>

    </div>
  )
}

export default View