import React from 'react'
import baner from "../assets/Frame 560 (1).png"
import baner2 from "../assets/Frame 560 (2).png"
import strelka from "../assets/Frame 726.png"
import Card from '../Crad/Card'
import Catigor from '../Catigor/Catigor'
import Product from '../Product/Product'
import baner3 from '../assets/Frame 600.png'
import baner4 from '../assets/Frame 600 (1).png'
import Crud from '../Crud/Crud'

import image1 from '../assets/Frame 684 (1).png'
import image6 from '../assets/Frame 684 (2).png'
import image2 from '../assets/Frame 685.png'
import image3 from '../assets/Frame 686.png'
import image4 from '../assets/Frame 687.png'

import pro from '../assets/Frame 701 (1).png'


export default function Content() {
  return (
    <>
    <main className='lg:max-w-310 w-[90%] m-auto lg:mt-10 mt-7'>
<div className='lg:flex lg:flex-row lg:items-start lg:justify-between gap-y-15 flex flex-col  '>
<div className='lg:flex lg:flex-col lg:gap-y-9 gap-4 flex flex-row flex-wrap lg:flex-nowrap items-start'>
<button className='text-[16px] font-normal  lg:h-0 lg:bg-white w-42 h-11 bg-[#F5F5F5] rounded-sm'>Woman’s Fashion</button>
<button className='text-[16px] font-normal  lg:h-0 lg:bg-white w-35.5 h-11 bg-[#F5F5F5] rounded-sm'>Men’s Fashion</button>
<button className='text-[16px] font-normal  lg:h-0 lg:bg-white w-25 h-11 bg-[#F5F5F5] rounded-sm'>Electronics</button>
<button className='text-[16px] font-normal  lg:h-0 lg:bg-white w-34.75 h-11 bg-[#F5F5F5] rounded-sm'>Home & Lifestyle</button>
<button className='text-[16px] font-normal  lg:h-0 lg:bg-white w-22 h-11 bg-[#F5F5F5] rounded-sm'>Medicine</button>
<button className='text-[16px] font-normal  lg:h-0 lg:bg-white w-36 h-11 bg-[#F5F5F5] rounded-sm'>Sports & Outdoor</button>
<button className='text-[16px] font-normal  lg:h-0 lg:bg-white w-30 h-11 bg-[#F5F5F5] rounded-sm'>Baby’s & Toys</button>
<button className='text-[16px] font-normal  lg:h-0 lg:bg-white w-34.5 h-11 bg-[#F5F5F5] rounded-sm'>Groceries & Pets</button>
<button className='text-[16px] font-normal  lg:h-0 lg:bg-white w-34 h-11 bg-[#F5F5F5] rounded-sm'>Health & Beauty</button>

</div>
<img className='lg:block hidden' src={baner} alt="" />
<img className='lg:hidden block' src={baner2} alt="" />
</div>

<div className='lg:mt-20 mt-15 flex items-center gap-3'>

<div className=' w-5 h-10 bg-[#DB4444] rounded-sm'>

</div>
<h1 className='text-[16px] font-semibold text-[#DB4444]'>Today’s</h1>
</div>

<div className='flex mt-10 items-center justify-between flex-wrap'>
<div className='lg:flex lg:flex-row flex flex-col gap-y-7 lg:items-center gap-38 '>
<h1 className='text-[36px] font-semibold '>Flash Sales</h1>
<div className='flex items-center gap-5'>
<div>
    <h1 className='text-[12px] font-medium '>Days</h1>
    <h1 className='text-[32px] font-bold'>03</h1>
</div>
<h1 className='text-[35px] text-[#DB4444]'>:</h1>
<div>
    <h1 className='text-[12px] font-medium '>Hours</h1>
    <h1 className='text-[32px] font-bold'>23</h1>
</div>
<h1 className='text-[35px] text-[#DB4444]'>:</h1>
<div>
    <h1 className='text-[12px] font-medium '>Minutes</h1>
    <h1 className='text-[32px] font-bold'>19</h1>
</div>
<h1 className='text-[35px] text-[#DB4444]'>:</h1>
<div>
    <h1 className='text-[12px] font-medium '>Seconds</h1>
    <h1 className='text-[32px] font-bold'>56</h1>
</div>
</div>
</div>
<img className='lg:block hidden' src={strelka} alt="" />
</div>

<div className='mt-10 flex items-center lg:justify-between gap-10 overflow-auto'>
<Card/>
</div>
<button className='w-59 h-14 bg-[#DB4444] rounded-sm text-[16px] font-medium text-white block m-auto mt-15'>View All Products</button>

<div className='lg:mt-20 mt-15 flex items-center gap-3'>

<div className=' w-5 h-10 bg-[#DB4444] rounded-sm'>

</div>
<h1 className='text-[16px] font-semibold text-[#DB4444]'>Categories</h1>
</div>
<div className='flex items-center justify-between mt-7 '>
<h1 className='text-[36px] font-semibold'>Browse By Category</h1>

<img className='lg:block hidden' src={strelka} alt="" />
</div>

<div className='mt-10 flex items-center lg:justify-between gap-10 overflow-auto'>
<Catigor/>
</div>

<div className='lg:mt-20 mt-15 flex items-center gap-3'>

<div className=' w-5 h-10 bg-[#DB4444] rounded-sm'>

</div>
<h1 className='text-[16px] font-semibold text-[#DB4444]'>This Month</h1>
</div>
<div className='flex items-center justify-between mt-7 '>
<h1 className='text-[36px] font-semibold'>Best Selling Products</h1>

<button className='lg:block hidden w-40 h-14 bg-[#DB4444] rounded-sm text-[16px] font-medium text-white'>View All</button>
</div>

<div className='mt-10 flex items-center lg:justify-between gap-10 overflow-auto'>
<Product/>
</div>

<img className='lg:block hidden m-auto mt-15' src={baner3} alt="" />
<img className='lg:hidden block m-auto mt-15' src={baner4} alt="" />





<div className='mt-10 flex items-center gap-10  lg:flex-wrap  gap-y-10' >
<Crud/>
</div>
<button className='w-59 h-14 bg-[#DB4444] rounded-sm text-[16px] font-medium text-white block m-auto mt-15'>View All Products</button>

<div className='lg:mt-20 mt-15 flex items-center gap-3'>

<div className=' w-5 h-10 bg-[#DB4444] rounded-sm'>

</div>
<h1 className='text-[16px] font-semibold text-[#DB4444]'>Featured</h1>
</div>
<div className='flex items-center justify-between mt-7 '>
<h1 className='text-[36px] font-semibold'>New Arrival</h1>
</div>

<div className='lg:flex hidden items-center gap-5 mt-10'>
<img src={image1} alt="" />
<div className='flex flex-col items-center gap-y-5'>
<img src={image2} alt="" />
<div className='flex items-center gap-5'>
<img src={image3} alt="" />
<img src={image4} alt="" />
</div>
</div>
</div>

<div className='flex lg:hidden flex-col gap-y-10 mt-10'>
<img src={image6} alt="" />
<img src={image6} alt="" />
<img src={image6} alt="" />
<img src={image6} alt="" />
</div>

<div className='lg:flex lg:flex-row flex flex-col gap-y-10 items-center justify-center gap-30 mt-25 '>
<img src={pro} alt="" />
<img src={pro} alt="" />
<img src={pro} alt="" />
</div>

    </main>
    </>
  )
}
