import React from 'react'
import {user} from '../User'
import {Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Paper,}   from '@mui/material'
function UserDetails() {
  return (
    <TableContainer component={Paper}>
<Table>
<TableHead>
            <TableRow>
            <TableCell>ID</TableCell>

                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Age</TableCell>

            </TableRow>
        </TableHead>
    <TableBody>
    {user.map((item, index) => (
   <TableRow key={item.id}>
    <TableCell >{item.id}</TableCell>
    <TableCell>{item.firstname}</TableCell>
    <TableCell>{item.lastname}</TableCell>
    <TableCell>{item.email}</TableCell>
    <TableCell>{item.age}</TableCell>

   </TableRow>
   ))}
    </TableBody>
</Table>
</TableContainer>

        

  )
}

export default UserDetails