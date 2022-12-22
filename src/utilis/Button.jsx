import React from 'react'
import {Button} from '@mui/material'
const Button = (props) => {
    const {variant, className, onClick, children, style, size, href}=props;

  return (
    <>
    <Button variant={variant} className={className} onClick={onClick} style={style} size={size} href={href} >
        {children}
    </Button>
    <div title='Jaya choudhary'>

    </div>
    </>
  )
}

export default Button