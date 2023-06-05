import React, {useContext, useState} from "react";
import axios from "axios";
import env from "react-dotenv";
import { UserContext } from "../../context/userContext";
import { toast } from "react-hot-toast";

const Diagnostic = () => {
  const [image, setImage] = useState(null);
  const [treatments, setTreatments] = useState([]);
  const [description, setDescription] = useState("");
  const [prediction, setPrediction] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {user} = useContext(UserContext)

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  
  let API = env.REACT_APP_SKINFIRST_API

  const handleUpload = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', image);

    axios.post('http://127.0.0.1:5000/predict', formData)
      .then(response => {
        const data = response.data;
        setPrediction(data.prediction);
        console.log("prediction: ", prediction)
      })
      .catch(error => {
        console.error('Error:', error);
      });
    getDiseaseByName()
    setIsLoading(false);
  };


  const getDiseaseByName = async() =>{
    const response = await axios.get(API+`disease/${prediction}`)
    const dataDisease = response.data
    setTreatments(dataDisease[0].treatments)
    setDescription(dataDisease[0].description)
    // console.log(disease)
  }

  const saveDiagnose = async(e, resultName) => {
    // e.preventDefault();
    setIsLoading(true);
    
    if(user){
      try {
        const response = await axios.post(API+`history/${user.user.id}/diagnose`, {
          result: resultName
        })
    
        console.log("Hasil saveDiagnose:", response.data)
        toast.success(response.data.message)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    else{
      toast.error("Please login to save your diagnose")
    }
    
    setIsLoading(false)

  }
  

  return (
    <> 
        {isLoading ? (<div className="fixed min-h-screen w-full z-40 bg-slate-100 bg-opacity-50 flex items-center justify-center"><h1 className="text-center text-2xl animate-pulse select-none">Diagnose...</h1></div>):null}
      <section className="min-h-screen 2xl:px-40 xl:px-40 lg:px-40 px-10 pt-32 pb-20 bg-[#FFFFFFF]">
        <h1 className="text-center 2xl:text-[50px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[30px] font-poppins font-bold">
          Skin Diseases Diagnosis
        </h1>
        <div className="pt-10 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-center 2xl:items-start xl:items-start lg:items-start md:items-start gap-8">
          <div className=" bg-[#013B31] 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-2/3 w-full h-full px-8 pb-6 text-[20px] shadow-xl rounded-xl">
            <form  onSubmit={handleUpload}>
              <h1 className="text-primary-3 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base font-bold py-4 leading-tight tracking-tight ">
                Upload Image
              </h1>
              <div class="relative h-64 border-2 border-dashed flex items-center justify-center w-full rounded-lg">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <input id="dropzone-file" type="file" class="hidden" onChange={handleImageChange}/>
                  {image ? (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            className="object-cover w-fit h-fit absolute inset-0 rounded-lg p-1"
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
              <div class="flex w-full justify-center pt-4">
                <button
                  type="submit"
                  class="w-full text-primary-0 bg-primary-1 hover:bg-primary-3 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm  py-2.5 text-center"
                  fdprocessedid="gkbxyo"
                >
                  <a href="#diagnoseResult">Diagnose</a>
                </button>
              </div>
            </form>
          </div>

          <div id="diagnoseResult"></div>
          <div className="bg-[#013B31] 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 w-full px-4 pb-6 text-[20px] shadow-xl rounded-xl 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-20">
            <h1 className="text-primary-3 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base font-bold px-4 py-4 leading-tight tracking-tight ">
              Diagnostic Results
            </h1>

            <div className="px-4">
              <div className=" px-4  bg-primary-1 rounded-lg border ">
                <span className="text-teal-900 item-center 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm justify-center">
                  Type of Disease: {prediction}
                </span>
              </div>
            </div>
            <div className="px-4 py-6">
              <div className=" px-4 py-1 min-h-[200px] bg-primary-1 rounded-lg border ">
                <span className="text-teal-900">Deskripsi</span>
                <div>{description}</div>
              </div>
            </div>
            <div className="px-4 ">
              <div className=" px-4 py-1 min-h-[200px] bg-primary-1 rounded-lg border ">
                <span className="text-teal-900">Treatments Recommendation</span>
                <div>
                  <div className="justify-start flex gap-1">- <span>{treatments[0]}</span></div>
                  <div className="justify-start flex gap-1">- <span>{treatments[1]}</span></div>
                  <div className="justify-start flex gap-1">- <span>{treatments[2]}</span></div>
                  <div className="justify-start flex gap-1">- <span>{treatments[3]}</span></div>
                </div>
              </div>
            </div>
            <div class="flex w-full justify-end pt-4 px-4">
              <button
                type="submit"
                class=" h-1/6 text-primary-0  bg-primary-3 hover:bg-primary-1 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
                fdprocessedid="gkbxyo"
                onClick={(e) => saveDiagnose(e, prediction)}
              >
                Save History
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Diagnostic;
