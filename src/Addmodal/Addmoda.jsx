import React from 'react'
import { Button, FormControl,  TextField } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Addmodal(props) {
    let {open,Setopen,img,Setimg,name,Setname, price , SetPrice , AddUser} = props
  return (
   <>
    <Dialog
           open={open}
           
           aria-labelledby="alert-dialog-title"
           aria-describedby="alert-dialog-description"
           role="alertdialog"
         >
           <DialogTitle  id="alert-dialog-title">
             {"Add Modal"}
           </DialogTitle>
           <DialogContent>
             <DialogContentText  id="alert-dialog-description">
               <div className=' lg:w-115 h-90 flex flex-col mt-2 gap-y-5'>
   
           <TextField value={img} onChange={(e)=>Setimg(e.target.value)} id="outlined-basic" label="Img" variant="outlined" />
           <TextField value={name} onChange={(e)=>Setname(e.target.value)} id="outlined-basic" label="Full Name" variant="outlined" />
           <TextField value={price} onChange={(e)=>SetPrice(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />

               </div>
             </DialogContentText>
           </DialogContent>
           <DialogActions>
               <div className='flex items-start gap-2'>
   
             <Button  sx={{border:'1px solid #2196F3', color:"white", fontSize:"14px", fontWeight:"500", width:"85px", height:"42px", backgroundColor:"#2196F3"}} onClick={AddUser} autoFocus>
               Save
             </Button>
             <Button sx={{border:'1px solid #2196F3', color:"#2196F3", fontSize:"14px", fontWeight:"500", width:"104px", height:"42px"}} onClick={()=> Setopen(false)}>Cancel</Button>
               </div>
           </DialogActions>
         </Dialog>
   </>
  )
}
