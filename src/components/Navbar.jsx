import React, {useState} from 'react'
import ImgLogo from './assets/img/logo2.png'
import { FaBars, FaUser, FaHome, FaDiagnoses, FaSwatchbook} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  
  return (
    <div>
      <div className='bg-[#D4D2C5] py-4 fixed w-screen z-50 font-poppins'>
          <div className='2xl:px-40 xl:px-40 lg:px-40 px-10'>
            <div className='flex justify-between items-center gap-10 font-bold'>
              <div>
                <Link to='/home' className='text-[28px]'><img src={ImgLogo} alt="img-logo" className='xl:w-1/3 lg:w- md:w-1/3 w-1/2' /></Link>
              </div>
              <div className='2xl:hidden xl:hidden lg:hidden md:hidden flex'>
                <FaBars onClick={toggle}/>
                {/* MOBILE SIDEBAR */}
                <div style={{width: isOpen ? "100vw" : "0px"}} className='bg-black z-40 w-[500px] h-screen fixed top-0 left-0 bg-opacity-50 ' onClick={toggle}></div>
                <div style={{width: isOpen ? "250px" : "0px"}} className=" bg-primary-3 z-50 border-l-2 border-black shadow-lg shadow-black text-white fixed h-[120vh] w-[300px] top-0 right-0 transition-all ">
                    <div className="flex justify-between items-start py-6 px-10">  
                      <ul className='flex flex-col justify-start gap-10  text-[#011A16]'>
                        <li className='flex items-center gap-1'><FaHome/><Link to='/home' className='hover:text-[#011a1671]'>Home</Link></li>
                        <li className='flex items-center gap-1'><FaSwatchbook/><Link to='/skin-trivia' className='hover:text-[#011a1671]'>Skin Trivia</Link></li>
                        <li className='flex items-center gap-1'><FaDiagnoses/><Link to='/diagnostic' className='hover:text-[#011a1671]'>Diagnostic</Link></li>
                        <li className='flex items-center gap-1'><FaUser/><Link to='/profile' className='hover:text-[#011a1671]'>Profile</Link></li>
                        <li><Link to='/login' className='bg-[#F0EFE1] hover:bg-[#c6c4a9] shadow-lg duration-200 px-10 py-2 rounded-xl'><span className='text-[#00695B]'>Login</span></Link></li>
                      </ul>
                      <div className=" text-black">
                        <FaBars onClick={toggle}/>
                      </div>  
                    </div>
                  </div>
                {/* /MOBILE SIDEBAR */}
              </div>
              <div className='2xl:flex xl:flex lg:flex md:flex justify-end gap-10 text-[15px] hidden'>
                <ul className='flex gap-6 px-2 py-2 text-[#011A16]'>
                  <li><Link to='/home' className='hover:text-[#011a1671]'>Home</Link></li>
                  <li><Link to='/skin-trivia' className='hover:text-[#011a1671]'>Skin Trivia</Link></li>
                  <li><Link to='/diagnostic' className='hover:text-[#011a1671]'>Diagnostic</Link></li>
                  <li><Link to='/profile' className='hover:text-[#011a1671]'>Profile</Link></li>
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