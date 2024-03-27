import * as React from "react";

import Avatar from "@mui/material/Avatar";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
 
  useTheme,
  useMediaQuery,
} from "@mui/material";
export default function Header() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={ `fixed top-0 right-0 z-50 bg-gray-100 w-10/12 shadow-lg`}>
      <div className=" flex w-full justify-end items-center py-2 px-4  z-999 h-[50px] ">
        <div>
          <Avatar
            alt="Remy Sharp"
            src="https://rohitturkar.netlify.app/hero.png"
            onClick={handleMenu}
            className="cursor-pointer"
            size={20}
          />

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
