import React from 'react'
import { Link } from 'react-router-dom'
import AtopicDermatitis from '../assets/img/atopic-dermatitis-neck.jpg'

const SkinTrivia = () => {
  return (
    <>
    {/*Definition */}
    <section className='min-h-[50vh] px-40 pt-40'>
        <div className='flex justify-between'>
            <div className='w-1/2'>
                <h1 className='text-[50px] font-bold'>Skin Trivia</h1>
                <p className='text-[30px]'>Various interesting and fun facts related to skin, skin care tips, skin conditions, and more.</p>
            </div>
            <div className='items-center flex'>
                <h1 className='text-[50px]'>IMAGE</h1>
            </div>
        </div>
        <div className=''>
            <Link to='/skin-trivia/input-informatons' className='text-[28px] text-sky-500 hover:text-sky-700 hover:underline'>Input trivia information here</Link>
        </div>
    </section>

    {/*Fun Facts */}
    <section className='min-h-screen  px-40 pt-40'>
        <h1 className='text-center text-[50px] font-medium'>Skin Diseases</h1>
        <div className='pt-10 flex justify-between gap-10'>
            <div className='bg-[#013B31] w-1/3 p-4 text-[20px] text-white shadow-xl rounded-xl'>
                <img src={AtopicDermatitis} alt='atopic-dermatitis' className='border-white border-2 border-solid'/>
                <h1 className='text-center p-4'>Atopic Dermatitis "Card V1"</h1>
            </div>
            <div className='bg-[#013B31] w-1/3 p-4 text-[20px] text-white shadow-xl rounded-xl'>
                <img src={AtopicDermatitis} alt='atopic-dermatitis' className='border-black border-2 rounded-full'/>
                <h1 className='text-center p-4'>Atopic Dermatitis "Card V2"</h1>
            </div>
            <div className='bg-[#013B31] w-1/3 p-4 text-[20px] text-white shadow-xl rounded-xl'>
                <img src={AtopicDermatitis} alt='atopic-dermatitis' className='border-white border-2 rounded-2xl'/>
                <h1 className='text-center p-4'>Atopic Dermatitis "Card V3"</h1>
            </div>
        </div>
    </section>
    </>
  )
}

export default SkinTrivia