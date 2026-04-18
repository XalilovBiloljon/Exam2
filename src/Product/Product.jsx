import React from 'react'
import geympad from "../assets/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1 (1).png"
import star from "../assets/Frame 566 (1).png"
import keybord from "../assets/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1 (1).png"
import manitor from "../assets/gammaxx-l240-argb-1-500x500 1 (1).png"
import stol from "../assets/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png"
let card = [
    {
        id:"1",
        img:geympad,
        name:"The north coat",
        price:260,
        skidka:360
    },
    {
        id:"2",
        img:keybord,
        name:"Gucci duffle bag",
        price:960,
        skidka:1160
    },
    {
        id:"3",
        img:manitor,
        name:"RGB liquid CPU Cooler",
        price:160,
        skidka:170
    },
    {
        id:"4",
        img:stol,
        name:"Small BookSelf",
        price:360,
        skidka:0
    },
]
export default function Product() {
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
