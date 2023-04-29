import React from 'react'
import ImgLogo from './assets/img/logo2.png'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='bg-[#D4D2C5] 2xl:px-40 xl:px-40 lg:px-40 px-10 font-poppins'>
            <div className='2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex flex-col justify-between 2xl:gap-40 xl:gap-40 lg:gap-40 md:gap-40 gap-10 pt-10 text-[#011A16] text-[14px]'>
                <div className='flex items-center'>
                    <Link to='/home' className='2xl:w-full xl:w-full lg:w-full md:w-full w-1/2'><img src={ImgLogo} alt="img-logo" /></Link>
                </div>
                <div className='2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex flex-col justify-end 2xl:gap-40 xl:gap-40 lg:gap-40 md:gap-40 gap-10'>
                    <div className=''>
                        <h1 className='border-b-2 border-black font-bold w-fit pr-4'>Menu</h1>
                        <ul className='text-[#011A16] font-medium'>
                            <li><Link to='/home' className='hover:text-[#011a1671]'>Home</Link></li>
                            <li><Link to='/skin-trivia' className='hover:text-[#011a1671]'>Skin Trivia</Link></li>
                            <li><Link to='/diagnostic' className='hover:text-[#011a1671]'>Diagnostic</Link></li>
                            <li><Link to='/home' className='hover:text-[#011a1671]'>Profile</Link></li>
                        </ul>
                    </div>
                    <div className='text-[#011A16]'>
                        <h1 className='border-b-2 border-black w-fit pr-4 font-bold'>About Us</h1>
                        <p> SkinFirst offers a range of educational resources and tools to help users better understand their skin health condition. Our platform provides information on common skin conditions, treatment options, and prevention strategies.</p>
                    </div>
                </div>
                
            </div>
            <div className='mt-10 border-t-2 border-black text-[#011A16]'>
                <h1 className='text-center p-4 font-bold text-[12px]'>©SkinFirst 2023</h1>
            </div>
        </div>
    </>
  )
}

export default Footer