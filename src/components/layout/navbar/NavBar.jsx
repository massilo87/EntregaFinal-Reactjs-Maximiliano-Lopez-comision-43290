import './NavBar.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from '../../common/cartWidget/CartWidget';
import logoBrand from './logo.png'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: '#b1b1b1bd' }}>
          <img className="logoBrand" src={ logoBrand } alt="logo-brand" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Impresiones 3D
          </Typography>
          <Button color="inherit">Lámparas</Button>
          <Button color="inherit">Tags</Button>
          <Button color="inherit">Macetas</Button>
          <Button color="inherit">Llaveros</Button>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  )
};

export default NavBar;