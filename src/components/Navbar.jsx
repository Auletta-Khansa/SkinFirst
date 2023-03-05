import React from 'react'
import ImgLogo from './assets/img/logo2.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='bg-[#D4D2C5] py-8 fixed w-screen z-50'>
          <div className='px-40'>
            <div className='flex justify-between font-bold'>
                <div>
                  <Link to='/home' className='text-[28px]'><img src={ImgLogo} alt="img-logo" className='w-1/2' /></Link>
                </div>
                <div className='flex justify-end gap-20 text-[20px]'>
                  <ul className='flex justify-center gap-10 py-2 text-[#011A16]'>
                    <li><Link to='/home' className='hover:text-[#011a1671]'>Home</Link></li>
                    <li><Link to='/skin-trivia' className='hover:text-[#011a1671]'>Skin Trivia</Link></li>
                    <li><Link to='#home' className='hover:text-[#011a1671]'>Diagnostic</Link></li>
                    <li><Link to='#home' className='hover:text-[#011a1671]'>Profile</Link></li>
                  </ul>
                  <div>
                    <button className='bg-[#F0EFE1] hover:bg-[#c6c4a9] shadow-lg duration-200 px-10 py-2 rounded-xl'><span className='text-[#00695B]'>Login</span></button>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar