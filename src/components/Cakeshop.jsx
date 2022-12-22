import React, { useState } from 'react'
import { Button } from '@mui/material';
export const Cakeshop = () => {
    const [totalCake, setTotalCake] = useState(10);
  return (
    <>
    <div>Cakeshop</div>
    <Button variant='contained' onClick={()=> setTotalCake(totalCake+1)} >Increment</Button>
    <Button variant='contained' onClick={()=> setTotalCake(totalCake-1)} >Decrement</Button>
    <p>total cakes{totalCake}</p>
    </>
  )
}
