import React, { useState } from 'react'

import { FaRegWindowClose } from "react-icons/fa"
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { Buffer } from 'buffer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import env from 'react-dotenv';

const InputSkinTrivia = () => {
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState([""])
    const navigate = useNavigate();

    let projectID = process.env.REACT_APP_INFURA_PROJECT_ID;
    let secretKEY = process.env.REACT_APP_INFURA_SECRET_KEY;

    const auth = 'Basic ' + Buffer.from( projectID + ":" + secretKEY ).toString('base64');
    //const subdomain = 'https://skinfirst-api.infura-ipfs.io';

    const client = ipfsHttpClient({
        host:'ipfs.infura.io',
        port:5001,
        protocol:'https',
        headers:{
          authorization: auth
        }
    })

    const handleInputChange = (index, event) => {
        const values = [...description];
        values[index] = event.target.value;
        setDescription(values);
      };

    const handleAddInput = () => {
        const values = [...description];
        values.push("");
        setDescription(values);
    };

    const handleRemoveInput = (index) => {
        const values = [...description];
        values.splice(index, 1);
        setDescription(values);
      };

    const uploadToIPFS = async(e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (typeof file !== 'undefined') {
            try {
              const result = await client.add(file)
              console.log("path",result.path)
              setImage(`https://skinfirst-api.infura-ipfs.io/ipfs/${result.path}`)
              console.log(image)
            } catch (error){
              console.log("ipfs image upload error: ", error)
            }
          }

    }

    const inputTrivia = async(e) => {
        e.preventDefault();
        let API = process.env.REACT_APP_SKINFIRST_API
        try {
            await axios.post(API+"trivias", {
                image,
                name,
                description
            });
            navigate("/skin-trivia");
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <div className='min-h-screen px-40 py-40 font-merriweather'>
            <h1 className='text-[36px] font-bold text-center pb-10 font-poppins'>List a New Skin Trivia Information</h1>
            <div className='flex justify-center'>
                <form onSubmit={inputTrivia} className='bg-primary-0 p-8 w-1/2 shadow-2xl rounded-xl'>
                    {/* IMAGE */}
                    <div className='flex-col flex text-white pb-8'>
                        <h2 className='text-medium text-[24px]'>Image</h2>
                        <div class="relative w-64 h-64 border-2 border-dashed border-gray-300 bg-white rounded-lg">
                            <input type="file" id="file-input" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={uploadToIPFS}/>
                            <label for="file-input" class="z-absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center items-center text-gray-500 text-lg">
                            {image ? (
                                <img
                                    src={image}
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
                        <label className='text-medium text-[24px]' >Name</label>
                        <input type="text" className='bg-white text-black px-4 py-2' onChange={(e)=>setName(e.target.value)}/>
                    </div>

                    {/* DESCRIPTION */}
                    <div className='flex-col flex text-white pb-2'>
                        <label className='text-medium text-[24px]' >Description</label>
                        {description.map((input, index) => (
                            <div key={index} className="flex items-center mt-4 justify-start ">
                                <label htmlFor={`description-${index}`} className="pr-6 w-[60%]">
                                    Description {index + 1}:
                                </label>
                                <input
                                    id={`description-${index}`}
                                    type="text"
                                    value={input}
                                    onChange={(event) => handleInputChange(index, event)}
                                    className="border border-gray-300 w-full rounded px-4 py-2 mr-4 text-black"
                                />
                                {description.length > 1 && (
                                    <button
                                    onClick={() => handleRemoveInput(index)}
                                    className="bg-red-500 text-white rounded px-0.5 text-[30px]"
                                    >
                                    <FaRegWindowClose/>
                                    </button>
                                )}
                            </div>
                        ))}
                        <button onClick={handleAddInput} className="bg-primary-2 hover:bg-primary-3 hover:text-primary-2 duration-200 active:bg-primary-2 active:text-white text-white rounded px-4 py-2 mt-4">
                            + Add more description
                        </button>
                    </div>

                    {/* SUBMIT */}
                    <div className='flex justify-end gap-4 font-medium mt-20'>
                        <button className='bg-[#ef4d4d]  rounded-lg px-10 py-2 shadow-xl hover:bg-[#cf2b2b] duration-200 text-white'>Reset</button>
                        <button className='bg-[#F0EFE1]  rounded-lg px-10 py-2 shadow-xl hover:bg-[#c8c7bb] duration-200' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default InputSkinTrivia