import React, { useState } from 'react'

import { FaRegWindowClose } from "react-icons/fa"
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
//import env from 'react-dotenv';

const InputSkinTrivia = () => {
    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [description, setDescription] = useState([""])
    const navigate = useNavigate();

    const handleDescriptionChange = (index, e) => {
        const updatedDescriptions = [...description];
        updatedDescriptions[index] = e.target.value;
        setDescription(updatedDescriptions);
      };

    const addDescription = () => {
        setDescription([...description, ""]);
    };

    const removeDescription = (index) => {
        const updatedDescriptions = [...description];
        updatedDescriptions.splice(index, 1);
        setDescription(updatedDescriptions);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const inputTrivia = async(e) => {
        e.preventDefault();
        let API = process.env.REACT_APP_SKINFIRST_API
        if (image && name && description) {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("name", name);
            description.forEach((description) => {
                formData.append("description[]", description);
              });
            try {
                const response = await axios.post(API+"skinTrivia", formData);
                if(response.data.error){
                    console.log(response.data)
                    toast.error(response.data.error)
                }
                else{
                    toast.success(response.data.message)
                    navigate("/skin-trivia");
                }
            } catch (error) {
                console.log(error)
            }
          }
        else {
            toast.error("Please fill the required fields!")
        }
        
    }

  return (
    <>
        <div className='min-h-screen 2xl:px-40 xl:px-40 lg:px-40 px-10 py-40 font-merriweather'>
            <h1 className='2xl xl:text-[36px] lg:text-[36px] md:text-[36px] text-[30px] font-bold text-center pb-10 font-poppins'>List a New Skin Trivia Information</h1>
            <div className='flex justify-center'>
                <form onSubmit={inputTrivia} className='bg-primary-0 p-8 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-2/3 w-full shadow-2xl rounded-xl'>
                    {/* IMAGE */}
                    <div className='flex-col flex text-white pb-8'>
                        <h2 className='text-medium 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] text-[18px]'>Image</h2>
                        <div class="relative w-64 h-64 border-2 border-dashed border-gray-300 bg-white rounded-lg">
                            <input type="file" id="file-input" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleImageChange}/>
                            <label for="file-input" class="z-absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center items-center text-gray-500 text-lg">
                            {image ? (
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="Preview"
                                    className="object-cover w-[500px] h-full absolute inset-0 rounded-lg p-4"
                                />
                                ) : (
                                <div className=' h-full items-center gap-1 flex justify-center'>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 px-10">
                                        <span class="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                </div>
                                )}
                            </label>
                        </div>
                    </div>

                    {/* NAME */}
                    <div className='flex-col flex text-white pb-8'>
                        <label className='text-medium 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] text-[18px]' >Name</label>
                        <input type="text" className='bg-white text-black rounded px-4 py-2 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[11px]' onChange={(e)=>setName(e.target.value)}/>
                    </div>

                    {/* DESCRIPTION */}
                    <div className='flex-col flex text-white pb-2'>
                        <label className='text-medium 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] text-[18px]' >Description</label>
                        {description.map((input, index) => (
                            <div key={index} className="flex-col items-center mt-2 justify-start ">
                                <label htmlFor={`description-${index}`} className="pr-6 w-[60%] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[11px]">
                                    Description {index + 1}:
                                </label>
                                <div className='flex items-center justify-start '>
                                    <input
                                        id={`description-${index}`}
                                        type="text"
                                        value={input}
                                        onChange={(event) => handleDescriptionChange(index, event)}
                                        className="border border-gray-300 w-full rounded px-4 py-2 mr-4 text-black 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[11px]"
                                    />
                                    {description.length > 1 && (
                                        <button
                                        type="button"
                                        onClick={() => removeDescription(index)}
                                        className="bg-red-500 text-white rounded px-0.5 text-[30px]"
                                        >
                                        <FaRegWindowClose/>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        <button type="button" onClick={addDescription} className="bg-primary-2 hover:bg-primary-3 hover:text-primary-2 duration-200 active:bg-primary-2 active:text-white text-white rounded px-4 py-2 mt-4">
                            + Add more description
                        </button>
                    </div>

                    {/* SUBMIT */}
                    <div className='flex justify-end gap-4 font-medium mt-20'>
                        <Link to="/skin-trivia" className='bg-[#ef4d4d] rounded-lg 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-6 py-2 shadow-xl hover:bg-[#cf2b2b] duration-200 text-white'>Cancel</Link>
                        <button className='bg-[#F0EFE1] rounded-lg 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-6 py-2 shadow-xl hover:bg-[#c8c7bb] duration-200' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default InputSkinTrivia