import axios from 'axios';
import React, { useEffect, useState } from 'react'
import star from "../assets/Frame 566 (1).png"
import Addmodal from '../Addmodal/Addmoda';
import { Avatar, Button, TextField } from '@mui/material';
import EditModal from '../EditModal/EditModal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Crud() {
   
  let adres ="https://699455b3fade7a9ec0f51239.mockapi.io/Dars"

    let [User,setUser] = useState([])
    async function getUser() {
        try {
            let {data} = await axios.get(adres)
            setUser(data)
            
        } catch (error) {
            console.error(error);
            
        }
    }

        useEffect(()=>
    {
        getUser()
    },[])

    let [open ,Setopen] = useState(false)
    let [name ,Setname] = useState("")
    let [img ,Setimg] = useState("")
    let [price ,SetPrice] = useState("")
     let [serach,setSearch] = useState("")

     let [openEdit ,SetopenEdit] = useState(false)
    let [nameEdit,SetnameEdit] = useState("")
    let [imgEdit,SetimgEdit] = useState("")
    let [priceEdit,SetpriceEdit] = useState("")
      const [openInfo, setOpenInfo] = useState(false);

      let [idx,setIdx]= useState(null)
        const [user, setUsers] = useState({});

         let handleClick = (user)=>
    {
          SetopenEdit(true)
          SetimgEdit(user.avatar)
          SetnameEdit(user.name)
          SetpriceEdit(user.price)
          setIdx(user.id)
    }


     async function deleteUser (id) {
    try {
      await axios.delete(`${adres}/${id}`);
      getUser();
    } catch (error) {
      console.error(error);
    }
}



  let  addUser = async () => {
    let user = {
      avata:img,
      name:name,
      price:price
    }; 
    try {
      await axios.post(adres, user);
      getUser()

    } catch (error) {
      console.error(error);
    }
  };
  

  async function Serachname(text) {
    try {
      if (text == "") {
        getUser()
      }
      else {

        let { data } = await axios.get(`${adres}?name=${text}`)
        setUser(data)
      }
    } catch (error) {
      console.error(error);

    }
  }

  let EditUser = async()=>
{
    let User = {
        avatar:imgEdit,
        name:nameEdit,
        price:priceEdit,

    };
       try {
      await axios.put(`${adres}/${idx}`, User);
      getUser();
      SetopenEdit(false);

    } catch (error) {
      console.error(error);
    }
}
  function handleInfo(user) {
    setOpenInfo(true);
    setUsers(user);
  }

  return (
<>

<div className='lg:mt-20 lg:w-full w-[90%] mt-15 flex items-center gap-3'>

<div className=' w-5 h-10 bg-[#DB4444] rounded-sm'>

</div>
<h1 className='text-[16px] font-semibold text-[#DB4444]'>Our Products</h1>
</div>
<div className='flex lg:w-full w-[90%] items-center justify-between mt-7 '>
<h1 className='text-[36px] font-semibold'>Explore Our Products</h1>
 <TextField value={serach} onChange={(user)=>{setSearch(user.target.value); Serachname(user.target.value) }} id="outlined-basic" label="serach" variant="outlined" />
<button onClick={()=>Setopen(true)} className='w-23 p-1 text-white bg-green-600'>Add</button>
</div>

<Addmodal
open={open}
Setopen={Setopen}
img={img}
Setimg={Setimg}
name={name}
Setname={Setname}
price={price}
SetPrice={SetPrice}
AddUser={addUser}
/>

<EditModal
open={openEdit}
Setopen={SetopenEdit}
img={imgEdit}
Setimg={SetimgEdit}
name={nameEdit}
Setname={SetnameEdit}
price={priceEdit}
SetPrice={SetpriceEdit}
AddUser={EditUser}
/>


{User.map((user)=>(
  <div key={user.id} className='w-68 h-88'>
<div className=' w-68 h-63 bg-[#F5F5F5] flex items-center justify-center'>
<img src={user.avatar} alt="" />
</div>
 <h1 className='text-[16px] font-medium mt-2'>{user.name}</h1>
    <div className='flex mt-1 items-center gap-3'>
<h1 className='text-[16px] font-medium text-[#DB4444]'>${user.price}</h1>
    </div>
<img className='mt-2' src={star} alt="" />
<div className='mt-2 flex items-center gap-7'>
<button className='w-23 p-1 text-white bg-red-600' onClick={()=> deleteUser(user.id)}>Delete</button>
<button onClick={()=> handleClick(user)} className='w-23 p-1 text-white bg-blue-600'>Edit</button>
<button onClick={()=> handleInfo(user)} className='w-23 p-1 text-white bg-blue-600'>Info</button>
</div>
  </div>
))}


 <Dialog
        open={openInfo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">
          {"Info"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
       <div className='w-100 flex items-center justify-between'>
       <Avatar
            alt="Remy Sharp"
            sx={{ width: 200, height: 200 }}
            src={user.avatar}
          />
          <div>
            <h1 className='text-[22px]'>{user.name}</h1>
            <h1 className='text-[22px] mt-3'>{user.price}</h1>
            <h1 className='text-[22px] mt-3'>{user.stauts ? "Active" :"Inactive"}</h1>
          </div>
       </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         <Button onClick={()=> setOpenInfo(false)} autoFocus>
              Disagree
            </Button>
      
        </DialogActions>
      </Dialog>
</>
  )
}
