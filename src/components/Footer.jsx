import React from 'react'
import ImgLogo from './assets/img/logo2.png'

const Footer = () => {
  return (
    <>
        <div className='bg-[#D4D2C5] px-40'>
            <div className='flex justify-between pt-10 text-[#011A16] text-[20px]'>
                <div className='flex items-center'>
                    <a href='#home' className='min-w-3/4 w-3/4 '><img src={ImgLogo} alt="img-logo" /></a>
                </div>
                <div>
                    <div>
                        <h1 className='border-b-2 border-black font-bold'>Menu</h1>
                        <ul className='text-[#011A16] font-medium'>
                            <li><a href='#home' className='hover:text-[#011a1671]'>Home</a></li>
                            <li><a href='#home' className='hover:text-[#011a1671]'>Skin Trivia</a></li>
                            <li><a href='#home' className='hover:text-[#011a1671]'>Diagnostic</a></li>
                            <li><a href='#home' className='hover:text-[#011a1671]'>Profile</a></li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/4 text-[#011A16]'>
                    <h1 className='border-b-2 border-black w-1/3 font-bold'>About Us</h1>
                    <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quas voluptatibus, id pariatur eos delectus molestiae?</div>
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