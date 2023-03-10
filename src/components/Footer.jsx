import React from 'react'
import ImgLogo from './assets/img/logo2.png'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='bg-[#D4D2C5] px-40'>
            <div className='flex justify-between pt-10 text-[#011A16] text-[20px]'>
                <div className='flex items-center'>
                    <Link to='/home' className='min-w-3/4 w-3/4 '><img src={ImgLogo} alt="img-logo" /></Link>
                </div>
                <div>
                    <div>
                        <h1 className='border-b-2 border-black font-bold'>Menu</h1>
                        <ul className='text-[#011A16] font-medium'>
                            <li><Link to='/home' className='hover:text-[#011a1671]'>Home</Link></li>
                            <li><Link to='/skin-trivia' className='hover:text-[#011a1671]'>Skin Trivia</Link></li>
                            <li><Link to='/diagnostic' className='hover:text-[#011a1671]'>Diagnostic</Link></li>
                            <li><Link to='/home' className='hover:text-[#011a1671]'>Profile</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/4 text-[#011A16]'>
                    <h1 className='border-b-2 border-black w-1/3 font-bold'>About Us</h1>
                    <p> SkinFirst offers a range of educational resources and tools to help users better understand their skin health condition. Our platform provides information on common skin conditions, treatment options, and prevention strategies.</p>
                </div>
            </div>
            <div className='mt-10 border-t-2 border-black text-[#011A16]'>
                <h1 className='text-center p-4 font-bold text-[20px]'>©SkinFirst 2023</h1>
            </div>
        </div>
    </>
  )
}

export default Footer