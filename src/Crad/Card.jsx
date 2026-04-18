import React from 'react'
import geympad from "../assets/geympad.png"
import star from "../assets/Frame 566 (1).png"
import keybord from "../assets/keybord.png"
import manitor from "../assets/manitor.png"
import stol from "../assets/stol.png"
let card = [
    {
        id:"1",
        img:geympad,
        name:"HAVIT HV-G92 Gamepad",
        price:120,
        skidka:160
    },
    {
        id:"2",
        img:keybord,
        name:"AK-900 Wired Keyboard",
        price:960,
        skidka:1160
    },
    {
        id:"3",
        img:manitor,
        name:"IPS LCD Gaming Monitor",
        price:370,
        skidka:400
    },
    {
        id:"4",
        img:stol,
        name:"S-Series Comfort Chair ",
        price:375,
        skidka:400
    },
]
export default function Card() {
  return (
   <>
   {card.map((user)=>
(
    <div key={user.id} className='w-68 h-88 '>
    <div className=' w-68 h-63 bg-[#F5F5F5] flex items-center justify-center'>
<img src={user.img} alt="" />
    </div>
    <h1 className='text-[16px] font-medium mt-2'>{user.name}</h1>
    <div className='flex mt-1 items-center gap-3'>
<h1 className='text-[16px] font-medium text-[#DB4444]'>${user.price}</h1>
<h1 className='text-[16px] font-medium line-through text-gray-500'>${user.skidka}</h1>
    </div>
<img className='mt-2' src={star} alt="" />
    </div>
))}
   </>
  )
}
