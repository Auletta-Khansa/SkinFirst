import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import env from 'react-dotenv'
import axios from 'axios'
import { UserContext } from '../../context/userContext'

// import AtopicDermatitis from '../assets/img/atopic-dermatitis-neck.jpg'
import ImageSkinTrivia from '../assets/img/skin-trivia.png'

const SkinTrivia = () => {
    const [showTrivia, setShowTrivia] = useState(false)
    const [trivias, setTrivias] = useState([])
    const [currentTrivia, setCurrentTrivia] = useState([])
    const [loading, setLoading] = useState(true)
    let API = env.REACT_APP_SKINFIRST_API

    const {user} = useContext(UserContext);

    const getTrivias = async() =>{
        const response = await axios.get(API+"trivias")
        const dataTrivias = response.data
        setTrivias(dataTrivias)
        setLoading(false)
        console.log("Numpang role:", user.user.role)
    }    

    useEffect(() => {
      getTrivias()
      // eslint-disable-next-line
    }, [])
    

    const handleTrivia = (number) => {
        setShowTrivia(true)
        console.log(number)
        setCurrentTrivia(trivias[number-1])
    }

    const renderImage = (imageBase64, index) => {
        return <img src={`data:${imageBase64.contentType};base64,${imageBase64.data}`} alt={`Skin-Trivia-${index}`} className='w-[400px] h-fit'/>;
      };

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
                <button onClick={()=>handleTrivia(1)} className='bg-primary-0 2xl:text-[18px] xl:text-[18px] w-[335px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Atopic Dermatitis</button>
                <button onClick={()=>handleTrivia(2)} className='bg-primary-0 2xl:text-[18px] xl:text-[18px] w-[335px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Actinic Keratosis</button>
                <button onClick={()=>handleTrivia(3)} className='bg-primary-0 2xl:text-[18px] xl:text-[18px] w-[335px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Benign Keratosis</button>
            </div>
            <div className='text-white flex justify-center 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-20 gap-3'>
                <button onClick={()=>handleTrivia(4)} className='bg-primary-0 2xl:text-[18px] xl:text-[18px] w-[335px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Dermatofibroma</button>
                <button onClick={()=>handleTrivia(5)} className='bg-primary-0 2xl:text-[18px] xl:text-[18px] w-[335px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Melanocytic Nevus</button>
                <button onClick={()=>handleTrivia(6)} className='bg-primary-0 2xl:text-[18px] xl:text-[18px] w-[335px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Melanoma</button>
            </div>
            <div className='text-white flex justify-center 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-20 gap-3'>
                <button onClick={()=>handleTrivia(7)} className='bg-primary-0 2xl:text-[18px] xl:text-[18px] w-[335px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Squamous Cell Carcinoma</button>
                <button onClick={()=>handleTrivia(8)} className='bg-primary-0 2xl:text-[18px] xl:text-[18px] w-[335px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Tinea Ringworm Candidiasis</button>
                <button onClick={()=>handleTrivia(9)} className='bg-primary-0 2xl:text-[18px] xl:text-[18px] w-[335px] lg:text-[18px] md:text-[18px] text-[10px] 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 py-2 rounded-full hover:bg-primary-3 hover:text-primary-0 duration-300 focus:bg-primary-3 focus:text-primary-0 active:bg-primary-1'>Vascular Lesion</button>
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
            { user ? (<>
                {user.user.role === "ADMIN" ? <Link to='/skin-trivia/input-informations' className='text-[20px] font-bold text-primary-2 hover:text-primary-0 hover:underline'>Input trivia information here</Link> : null}
                {user.user.role === "ADMIN" ? <Link to='/users'  className='text-[20px] text-primary-2 font-bold hover:text-primary-0 hover:underline'>Lihat database</Link> : null}</>):(null)}
        </div>
        <div className='py-10'>
            <div className='bg-primary-0 p-8 text-white shadow-2xl min-h-[500px]'>
                {loading ? ( // Kondisi jika masih loading
                    <p>Loading...</p>
                ) : showTrivia ? ( // Kondisi jika trivia ditampilkan
                <>
                    {currentTrivia ? ( // Kondisi jika trivia memiliki isinya
                    <>
                        <h1 className='text-[30px] font-medium pb-8'>{currentTrivia.name}</h1>
                        <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col gap-10'>
                        <div className='border-white border-2 border-solid 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full h-fit'>
                            {renderImage(currentTrivia.image)}
                        </div>
                        <div className='flex-col gap-4 flex'>
                            {currentTrivia.description.map((description) => {
                            return (
                                <div className='flex gap-1' key={description}>
                                <p>- {description}</p>
                                </div>
                            );
                            })}
                        </div>
                        </div>
                    </>
                    ) : ( // Kondisi jika trivia tidak memiliki isinya
                    <p>No trivia available.</p>
                    )}
                </>
                ) : <p>Loading...</p>}
            </div>
        </div>
    </section>
    </>
  )
}

export default SkinTrivia