import React from 'react'
import {Avatar, Button, Paper, TextField} from '@mui/material'
import{Grid} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const paperStyle={marginTop: 100, paddingTop: 50, height:'60vh', width:280, margin:'20px auto', textAlign:'center'}
    const avatarStyle={backgroundcolor: '#1bbd7e'}
    const showToastMsg=()=>{
    toast.success(' Login Successfully', {
        position: toast.POSITION.TOP_CENTER
    });

    }
  return (

<>
<div>
<Grid >
  <Paper elevation={20} style={paperStyle}>
    <Grid >
        <Grid align='center'>
        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>

        </Grid>
    <TextField id="standard-basic" label="User Name" variant="standard" sx={{mt: 1}} />
    <TextField id="standard-basic" label="Password" variant="standard" sx={{mt: 1}} />
    <Button variant="contained"  sx={{mt: 4, mr: 15}} onClick={showToastMsg}>Login</Button>
    <ToastContainer/>
    </Grid>
  </Paper>
</Grid>
        
</div>
</>
   
  )
}
