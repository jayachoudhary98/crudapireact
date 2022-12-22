import React  from 'react'
import { Button } from '@mui/material';

import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import Diversity1SharpIcon from '@mui/icons-material/Diversity1Sharp';
import { useState } from 'react';
import { padding } from '@mui/system';
const Header = () => {
    const [values, setValues]= useState();
    
  return (
<>

<div >
<AppBar sx={{background: "#063970" }} >
    <Toolbar  >
    <Typography sx={{marginRight: "10px"}} fontSize="20px" fontWeight="800">UsersShop</Typography>
 <Diversity1SharpIcon/>
     <Tabs textColor="inherit" value={values} onChange={(e, values)=> setValues(values)} indicatorColor="secondary">
     <Tab href='/'  label="Home"></Tab>
     <Tab href='/about' label="About"></Tab>
     <Tab  href='/contact' label="Contact"></Tab>
     <Tab href='/service' label="Service"></Tab>
     </Tabs>
     <Button sx={{marginLeft: "auto"}} href="/user_details" variant="contained" color="primary">User Details</Button>
    <Button sx={{marginLeft: "10px"}} href="/add_user" variant="contained" color="primary">Add User</Button>
    <Button color="inherit" href="/login">Login</Button>

    </Toolbar>
</AppBar>

</div>
</>  
)
}

export default Header