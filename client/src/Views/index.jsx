import React from 'react'
import Nav from './Navbar'
import MainDash from "./Dashboard"

import {
 
  useTheme,
  useMediaQuery,
} from "@mui/material";




const MainComp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className='grid grid-cols-12 '>
    <div className='col-span-2 '>
      <Nav/>
    </div>
    <div className={`${isMobile?' col-span-12 ':' col-span-10 '}`}>
     <MainDash/>
    </div>
  </div>
  
  )
}

export default MainComp