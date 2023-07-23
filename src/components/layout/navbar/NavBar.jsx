import "./NavBar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#b1b1b1bd" }}>
          <Link to="/">
            <img className="logoBrand" src="https://res.cloudinary.com/dwiiarrki/image/upload/v1690130278/logo_drjkzi.png" alt="logo-brand" />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Impresiones 3D
          </Typography>
          <Link to="/category/lamparas">
            <Button color="inherit">Lámparas</Button>
          </Link>
          <Link to="/category/tags">
            <Button color="inherit">Tags</Button>
          </Link>
          <Link to="/category/macetas">
            <Button color="inherit">Macetas</Button>
          </Link>
          <Link to="/category/llaveros">
            <Button color="inherit">Llaveros</Button>
          </Link>
          <CartWidget />
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default NavBar;
