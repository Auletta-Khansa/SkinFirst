import React from 'react'
import ImgLogo from './assets/img/logo2.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='bg-[#D4D2C5] py-4 fixed w-screen z-50'>
          <div className='px-40'>
            <div className='flex justify-between items-center gap-10 font-bold'>
              <div>
                <Link to='/home' className='text-[28px]'><img src={ImgLogo} alt="img-logo" className='w-1/3' /></Link>
              </div>
              <div className='flex justify-end gap-10 text-[15px]'>
                <ul className='flex gap-6 px-2 py-2 text-[#011A16]'>
                  <li><Link to='/home' className='hover:text-[#011a1671]'>Home</Link></li>
                  <li><Link to='/skin-trivia' className='hover:text-[#011a1671]'>Skin Trivia</Link></li>
                  <li><Link to='/diagnostic' className='hover:text-[#011a1671]'>Diagnostic</Link></li>
                  <li><Link to='#home' className='hover:text-[#011a1671]'>Profile</Link></li>
                  <li><Link to='/login' className='bg-[#F0EFE1] hover:bg-[#c6c4a9] shadow-lg duration-200 px-10 py-2 rounded-xl'><span className='text-[#00695B]'>Login</span></Link></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar