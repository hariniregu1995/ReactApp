// import React from 'react'

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" align="left" sx={{ flexGrow: 1 }}>
            ReactApp
          </Typography>
         <Link to={'/login'}><Button color="inherit" style={{color:"white"}}>Login</Button></Link> 
          <Link to={'/register'}><Button color="inherit" style={{color:"white"}}>SignUp</Button></Link>
          <Link to={'/'}><Button color="inherit" style={{color:"white"}}>Home</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar