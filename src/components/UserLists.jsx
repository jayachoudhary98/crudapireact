import React from 'react'
import {Table, TableBody, IconButton,Tooltip,TableContainer, TableHead, TableRow, TableCell, Paper,}   from '@mui/material'
import axios from "axios";
import {Link} from 'react-router-dom'
import {VisibilityIcon} from '@mui/icons-material/Visibility';
import {EditIcon} from '@mui/icons-material'
import {DeleteIcon} from '@mui/icons-material'
import { useState } from 'react';
import { useEffect } from 'react';

const UserLists = () => {
    const [user, setUsers] = useState([]);
    useEffect(()=>{
        async function getAllUser(){
            try{
                const user=await axios.get("http://localhost:3003/users");
               setUsers(user.data)
            
        }
        catch(error){
            console.log("Somthind wrong");
        }
        }
        getAllUser();
    },[]
)
 const handleDelete = async id=>{
    await axios.delete(`http://localhost:3003/users/${id}`)
    var newUser= user.filter((item)=>{
        return item.id !==id;
    })
    setUsers(newUser);
 }
  return (
    <div>
        <h1>userlist</h1>
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
                <TableCell>Action</TableCell>
</TableRow>
        </TableHead>
         <TableBody>
    {user.map((userss, i) =>{

    return(
   <TableRow key={i}>
    <TableCell >{i+1}</TableCell>
    <TableCell>{userss.firstName}</TableCell>
    <TableCell>{userss.lastName}</TableCell>
    <TableCell>{userss.email}</TableCell>
    <TableCell>{userss.age}</TableCell>
    <TableCell>{userss.contact}</TableCell>
    <TableCell>{userss.address}</TableCell>

    <TableCell align="center">
           <Tooltip title="View">
            <IconButton><Link to={`/view/${userss.id}`}>View</Link></IconButton>
           </Tooltip>
           <Tooltip title="Edit">
            <IconButton><Link to={`/edit/${userss.id}`}>Edit</Link></IconButton>
           </Tooltip>
           <Tooltip title="Delete">
            <IconButton onClick={()=> handleDelete(userss.id)} >Delete</IconButton>
           </Tooltip>
          </TableCell>
   </TableRow>
   )})
    }
    </TableBody>
</Table>
</TableContainer>
</div>
  )
}

export default UserLists