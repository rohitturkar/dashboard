import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dashboard, Person, Menu as MenuIcon } from "@mui/icons-material";
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, useTheme, useMediaQuery } from "@mui/material";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="bg-[#2C7865] h-full text-white">
      <div className="px-6 py-2 h-[50px]">
        <p className="text-sm font-bold text-left">Ecommify</p>
      </div>
      <List>
        <ListItem button component={NavLink} to="/dashboard" className='text-sm font-medium'>
          <ListItemIcon>
            <Dashboard style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to="/account" className='text-sm font-medium'>
          <ListItemIcon>
            <Person style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="My Account" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {isMobile ? (
        <>
          <div className='fixed z-50 bg-gray-50 text-blue-400 shadow-b-lg flex justify-center items-center w-2/12 h-[50px]'>
        
                <MenuIcon  onClick={handleDrawerToggle}/>
              
          </div>
              
          
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </>
      ) : (
        <div className="fixed overflow-hidden top-0 bg-[#2C7865] w-2/12 h-screen text-white">
          {drawer}
        </div>
      )}
    </div>
  );
};

export default Nav;
