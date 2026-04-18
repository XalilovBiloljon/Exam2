import React from 'react'
import logo from "../assets/Group 1116606595 (2).png"
import icon from "../assets/Wishlist.png"
import icon2 from "../assets/Cart1 with buy.png"
import icon3 from "../assets/user (3).png"
import { TextField } from '@mui/material'
export default function Header() {
  return (
 <>
 <nav className='lg:max-w-330 mt-2  w-[90%] m-auto flex items-center justify-between'>
  <h1 className='lg:hidden block texxt-[24px] font-bold '>Exclusive</h1>
<div className='lg:flex items-center hidden gap-30 '>
<img src={logo} alt="" />
<div className='flex items-center gap-5'>
<h1 className='text-[16px] font-normal '>Home</h1>
<h1 className='text-[16px] font-normal '>Contact</h1>
<h1 className='text-[16px] font-normal '>About</h1>
<h1 className='text-[16px] font-normal '>Sign Up</h1>
</div>
</div>
<div className='flex items-center gap-5'>
<TextField  sx={{width:'300px'  }} id="outlined-basic" label="What are you looking for?" variant="outlined" />
<img className='lg:block hidden' src={icon} alt="" />
<img src={icon2} alt="" />
<img src={icon3} alt="" />
</div>
 </nav>
 </>
  )
}
