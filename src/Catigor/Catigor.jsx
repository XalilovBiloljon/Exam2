import React from 'react'
import phone from "../assets/Category-CellPhone.png"
let catigor = [
    {
        id:"1",
        img:phone,
        name:"Phones"
    },
    {
        id:"3",
        img:phone,
        name:"Phones"
    },
    {
        id:"2",
        img:phone,
        name:"Phones"
    },
    {
        id:"4",
        img:phone,
        name:"Phones"
    },
    {
        id:"5",
        img:phone,
        name:"Phones"
    },
    {
        id:"6",
        img:phone,
        name:"Phones"
    }
]

export default function Catigor() {
  return (
    <>
    {catigor.map((user)=>(
        <div key={user.id} className='w-42.5 h-36.25 border border-[#0000004D] rounded-sm hover:bg-[#DB4444] hover:border-[#DB4444] lg:flex lg:items-center lg:justify-center hover:text-white'>
<div className='lg:w-12.5 w-44 m-auto lg:m-0  mt-10 lg:ml-0 ml-13 h-20'>

<img className='' src={user.img} alt="" />
<h1 className='text-[16px] font-normal hover:text-white'>{user.name}</h1>
</div>
        </div>
    ))}
    </>
  )
}
