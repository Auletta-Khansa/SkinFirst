import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import AtopicDermatitis from '../assets/img/atopic-dermatitis-neck.jpg'
import ImageSkinTrivia from '../assets/img/skin-trivia.png'

const SkinTrivia = () => {
    const [showTrivia, setShowTrivia] = useState({
        one:false,
        two:false,
        three:false,
        four:false,
        five:false,
        six:false,
        seven:false,
        eight:false,
        nine:false
    })

    const handleTrivia = (number) => {
        if(number===1) setShowTrivia({one:true,two:false,three:false,four:false,five:false,six:false,seven:false,eight:false,nine:false})
    }

    return (
    <>
    {/*Definition */}
    <section className='min-h-screen 2xl:px-40 xl:px-40 lg:px-40 px-10 pt-40 font-poppins'>
        <div className='flex-col justify-center'>
            <h1 className='text-center 2xl:text-[50px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[30px] font-bold pb-10'>Skin Trivia</h1>
            <div className='items-center flex justify-center'>
                <img src={ImageSkinTrivia} alt='skin-trivia'/>
            </div>
            <p className='text-center text-[24px] 2xl:px-40 xl:px-40 lg:px-40 px-10'>Various interesting and fun facts related to skin, skin care tips, skin conditions, and more.</p>
        </div>
        
    </section>

    {/*Fun Facts */}
    <section className='min-h-screen bg-primary-1 2xl:px-40 xl:px-40 lg:px-40 px-10 pt-40 font-merriweather'>
        <h1 className='text-center 2xl:text-[50px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[30px] font-medium font-poppins'>Skin Diseases</h1>
        <div className='pt-10 flex flex-col justify-center gap-4'>
            <div className='text-white flex justify-center 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-20 gap-3'>
                <button onClick={()=>handleTrivia(1)} className='bg-primary-0 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Atopic Dermatitis</button>
                <button className='bg-primary-0 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Atopic Dermatitis</button>
                <button className='bg-primary-0 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Atopic Dermatitis</button>
            </div>
            <div className='text-white flex justify-center 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-20 gap-3'>
                <button className='bg-primary-0 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Atopic Dermatitis</button>
                <button className='bg-primary-0 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Atopic Dermatitis</button>
                <button className='bg-primary-0 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Atopic Dermatitis</button>
            </div>
            <div className='text-white flex justify-center 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-20 gap-3'>
                <button className='bg-primary-0 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Atopic Dermatitis</button>
                <button className='bg-primary-0 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Atopic Dermatitis</button>
                <button className='bg-primary-0 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Atopic Dermatitis</button>
            </div>
            {/* <div className='bg-[#013B31] w-1/3 p-4 text-[20px] text-white shadow-xl rounded-xl'>
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
            </div> */}
        </div>
        <div className='flex flex-col items-center justify-center pt-8'>
            <Link to='/skin-trivia/input-informatons' className='text-[20px] text-sky-500 hover:text-sky-700 hover:underline'>Input trivia information here</Link>
            <Link to='/users'  className='text-[20px] text-sky-500 hover:text-sky-700 hover:underline'>Lihat database</Link>
        </div>
        <div className='py-10'>
            <div className='bg-primary-0 p-8 text-white shadow-2xl min-h-[500px]'>
                <div className=''>
                    {showTrivia.one ? (
                    <>
                        <h1 className='text-[30px] font-medium pb-8'>Atopic Dermatitis</h1>
                        <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col gap-10'>
                            <img src={AtopicDermatitis} alt='atopic-dermatitis' className='border-white border-2 border-solid 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full'/>
                            <div className='flex-col gap-4 flex'>
                                <div className='flex gap-1'>
                                    <div>-</div>
                                    <div>Nama lain : Eksim atopik atau eksim kering</div>
                                </div>
                                <div className='flex gap-1'>
                                    <div>-</div>
                                    <div>Peradangan kulit atau eksim yang ditandai dengan kulit kering, gatal secara terus-menerus, dan ruam merah di kulit.</div>
                                </div>
                                <div className='flex gap-1'>
                                    <div>-</div>
                                    <div>Umumnya terjadi di wajah, lengan, dan kaki.</div>
                                </div>
                                <div className='flex gap-1'>
                                    <div>-</div>
                                    <div>Gejala : gatal dan ruam kulit</div>
                                </div>
                            </div>
                        </div>
                    </>):(null)}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SkinTrivia