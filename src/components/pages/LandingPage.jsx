import React from 'react'
import { Link } from 'react-router-dom'

import ImageDiagnostic from "../assets/img/image-landing-page.png"

const LandingPage = () => {
  return (
    <>
    {/*SkinFirst */}
    <div className='min-h-screen px-40 '>
        <div className='flex'>
            <div className='pt-52 relative z-10'>
                <h1 className='text-[120px] font-medium'>SkinFirst</h1>
                <h2 className='text-[37px] w-3/4 font-medium pb-4'>Nourish your skin, aware your skin health with SkinFirst.</h2>
                <a href='#features' className='bg-[#F0EFE1] hover:bg-[#c6c4a9] text-[#00695B] font-medium duration-200 hover:text-[#679a94] px-20 py-4 text-[28px] rounded-full'>Get started</a>
            </div>
            {/* <div className='pt-40 flex items-center'>
                <img src={ImgLogo} alt="img-logo" className=' select-none'/>
            </div> */}
            <div className='right-0 top-36 absolute z-0'>
                <div className='bottom-0 right-0 h-0 w-0 border-solid border-t-[60vh] border-t-transparent border-b-[30vh] border-b-[#013B31] border-l-[50vw] border-l-solid border-l-transparent border-r-[300px] border-r-[#013B31]'></div>
            </div>
        </div>
    </div>

    {/*Features */}
    <div id="features" className='min-h-screen bg-[#F0EFE1] px-40 z-10 relative'>
      <div className='px-40 pt-20 flex justify-center'>
        <h1 className='text-[50px] font-bold'>Features</h1>
      </div>
      <div className='flex justify-between gap-x-20 pt-20  '>
        <div className='bg-[#013B31] px-10 py-4 text-white rounded-xl shadow-xl w-[50%] pb-20'>
          <h1 className='text-center text-[24px] font-medium pb-8'>Fast Diagnostic</h1>
          <p className='text-center'>While fast results are important, accuracy is also crucial in making an accurate diagnosis and explore the tradeoffs between speed and accuracy and highlight.</p>
        </div>
        <div className='bg-[#013B31] px-10 py-4 text-white rounded-xl shadow-xl w-[50%] pb-20'>
          <h1 className='text-center text-[24px] font-medium pb-8'>Skin Trivia</h1>
          <p className='text-center'>Various interesting and fun facts related to skin, skin care tips, skin conditions, and more</p>
        </div>
        <div className='bg-[#013B31] px-10 py-4 text-white rounded-xl shadow-xl w-[50%] pb-20'>
          <h1 className='text-center text-[24px] font-medium pb-8'>Overview Result</h1>
          <p className='text-center'>Based on the user's diagnostic results, the tool could provide personalized tips and recommendations for skin care and treatment.</p>
        </div>
      </div>
    </div>

    {/* */}
    <section className='min-h-screen px-40 pt-20'>
      <div className='flex justify-between gap-10'>
        <div className='flex-col justify-between items'>
          <div className=' border-b-2 border-primary-3 py-8 flex items-center'>
            <div className='rounded-full bg-primary-0 py-4 px-4 shadow-xl w-[80px] h-[80px]'>
              <span className='text-white text-[28px] p-4'>1</span>
            </div>
            <div className='flex-col px-4'>
              <h1 className='text-[28px] font-medium'>Create account</h1>
              <p><Link to="/signup" className='font-medium text-[#207783]'>Sign up</Link> first to get interact and personalize the experience.</p>
            </div>
          </div>
          <div className=' border-b-2 border-primary-3 py-8 flex items-center'>
            <div className='rounded-full bg-primary-0 py-4 px-4 shadow-xl w-[80px] h-[80px]'>
              <span className='text-white text-[28px] p-4'>2</span>
            </div>
            <div className='flex-col px-4'>
              <h1 className='text-[28px] font-medium'>Diagnostic</h1>
              <p>Upload a photo of your skin condition and identify it</p>
            </div>
          </div>
          <div className=' border-b-2 border-primary-3 py-8 flex items-center'>
            <div className='rounded-full bg-primary-0 py-4 px-4 shadow-xl w-[80px] h-[80px]'>
              <span className='text-white text-[28px] p-4'>3</span>
            </div>
            <div className='flex-col px-4'>
              <h1 className='text-[28px] font-medium'>Overview result</h1>
              <p>Summary of diagnostic result and provide treatment recommendation </p>
            </div>
          </div>
        </div>
        <div className='flex items-center'>
          <img src={ImageDiagnostic} alt='skin-diagnostic'/>
        </div>
      </div>
    </section>
    </>
  )
}

export default LandingPage