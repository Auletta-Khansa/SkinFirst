import React from 'react'

const InputSkinTrivia = () => {
  return (
    <>
        <div className='min-h-screen px-40 py-40 '>
            <h1 className='text-[36px] font-bold text-center pb-10'>List a New Skin Trivia Information</h1>
            <div className='flex justify-center'>
                <div className='bg-[#00695B] p-8 w-1/2 shadow-2xl rounded-xl'>
                    <div className='flex-col flex text-white pb-8'>
                        <label className='text-medium text-[28px]' >Image</label>
                        <img src='contoh' alt='img-uploaded' className='bg-white text-black p-4 h-[300px]'/>
                        <input type="file" className='bg-white text-black p-4' />
                    </div>
                    <div className='flex-col flex text-white pb-8'>
                        <label className='text-medium text-[28px]' >Name</label>
                        <input type="text" className='bg-white text-black px-4 py-2' />
                    </div>
                    <div className='flex-col flex text-white pb-8'>
                        <label className='text-medium text-[28px]' >Description</label>
                        <input type="text" className='bg-white text-black px-4 py-2' />
                    </div>
                    <div className='flex justify-end gap-4 font-medium '>
                        <button className='bg-[#ef4d4d]  rounded-lg px-10 py-2 shadow-xl hover:bg-[#cf2b2b] duration-200 text-white'>Reset</button>
                        <button className='bg-[#F0EFE1]  rounded-lg px-10 py-2 shadow-xl hover:bg-[#c8c7bb] duration-200'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default InputSkinTrivia