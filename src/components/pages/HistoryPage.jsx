import React, { useContext, useEffect, useState } from "react";
import env from "react-dotenv";
import axios from "axios";
import { toast } from "react-hot-toast";

import {FaFileMedical} from "react-icons/fa"
import { UserContext } from "../../context/userContext";

const History = () => {
  const [diagnoses, setDiagnoses] = useState([])
  const [disease, setDisease] = useState([])
  const [treatments, setTreatments] = useState([])
  const {user} = useContext(UserContext)

  let API = env.REACT_APP_SKINFIRST_API

  const getHistories = async (e) => {
    try {
        const data = await axios.get(API+`history/${user.user.id}`);
        setDiagnoses(data.data.data.diagnoses)
        console.log("Hasil get history", diagnoses)
    } 
    catch (error) {
        console.log(error)
        toast.error("Error")
    }
  };

  const getSingleDiagnose = async(diseaseName) => {
    try {
      console.log(diseaseName)
      const response = await axios.get(API+`disease/${diseaseName}`);
      setDisease(response.data[0])
      console.log("Single get disease", disease)
      setTreatments(disease.treatments)
      console.log("Treatments :", treatments)
    } catch (error) {
      console.log(error)
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear().toString().slice(-2); 
  
    const formattedDate = `${day}/${month}/${year}`;
  
    return formattedDate;
  }

  useEffect(() => {
    getHistories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if(!user){
    return(
      <>
        <div  className="min-h-screen">
            <div className="flex justify-center items-center pt-40">
                <h1 className="text-black text-center select-none font-merriweather font-bold">Please login to access history page</h1>
            </div>
        </div>
      </>
      )
  }
  else{
    return (
      <>
        <section className="min-h-screen 2xl:px-40 xl:px-40 lg:px-40 px-10 pt-20 pb-20">
          <div className="py-8 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col items-center 2xl:items-start xl:items-start lg:items-start md:items-start justify-between gap-16">
            <div className=" bg-[#013B31] h-fit 2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[500px] sm:w-[500px] w-full px-6 pb-10 text-[20px] shadow-xl rounded-xl">
              <h1 className="text-primary-3 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base font-bold py-4 leading-tight tracking-tight text-center">
                Medical Histories
              </h1>
              <div class="flex flex-col gap-6 w-full min-h-[300px] justify-start pt-4 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm">
                {diagnoses ? (<>
                  {diagnoses.map((diagnoseData, index) =>{
                    return(
                    <div key={index} className=" bg-primary-2 w-full items-center text-white rounded-md ">
                      <button onClick={()=>getSingleDiagnose(diagnoseData.result)} type="button" fdprocessedid="gkbxyo" className="duration-300 grid grid-cols-6 gap-2 items-center w-full h-full px-2 py-4 rounded-md hover:bg-primary-1 focus:bg-primary-1 active:bg-primary-3 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold hover:text-primary-2 focus:text-primary-2">
                        <span className="col-span-3">{diagnoseData.result}</span>
                        <span className="col-span-2">{formatDate(diagnoseData.date)}</span>
                        <span className="col-span-1"><FaFileMedical/></span>
                      </button>
                    </div>
                    )
                  })}
                </>):(<div>You don't have diagnoses history</div>)}
              </div>
          </div>
  
          <div className="bg-[#013B31] w-full px-4 pb-6 text-[20px] shadow-xl rounded-xl">
              <div className="px-4 py-4">
                  <h1 className="text-primary-3 py-2 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base font-bold leading-tight tracking-tight ">
                    Disease Name
                  </h1>
                  <div className="px-4 py-1 bg-primary-1 rounded-lg border min-h-[50px]">
                  {disease ? (<span className="text-teal-900 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm">{disease.name}</span>):(<>No data found</>)}
                </div>
              </div>
  
              <div className=" px-4 py-4">
                  <h1 className="text-primary-3 py-2 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base font-bold leading-tight tracking-tight ">
                      Description
                  </h1>
                  <div className=" px-4 py-1 min-h-[200px] bg-primary-1 rounded-lg border ">
                  {disease ? (<span className="text-teal-900 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm">{disease.description}</span>):(<>No data found</>)}
                </div>
              </div>
              
              
              <div className="px-4 py-4">
                  <h1 className="text-primary-3 py-2 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base font-bold leading-tight tracking-tight ">
                  Treatment Recomendation
                  </h1>
                  <div className=" px-4 py-1 min-h-[200px] bg-primary-1 rounded-lg border ">
                   
                  {disease ? (<>
                    {treatments ? (<>
                    {treatments.map((treatment, index) => {
                      return (
                        <div key={index} className="justify-start flex gap-1">
                          - <span className="text-teal-900 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm">{treatment}</span>
                        </div>
                      );
                    })}
                  </>
                  ):(<span className="text-teal-900 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm">Loading...</span>)}
                  </>):(<>No data found</>)}
                  </div>
              </div>
              </div>  
            </div>
        </section>
      </>
    );
  }
};

export default History;
