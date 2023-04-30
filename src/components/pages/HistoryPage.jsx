import React from "react";

import {FaFileMedical} from "react-icons/fa"

const History = () => {
  return (
    <>
      <section className="min-h-screen 2xl:px-40 xl:px-40 lg:px-40 px-10 pt-20 pb-20">
        <div className="py-8 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col items-center 2xl:items-start xl:items-start lg:items-start md:items-start justify-between gap-16">
          <div className=" bg-[#013B31] h-fit 2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[500px] sm:w-[500px] w-full px-6 pb-10 text-[20px] shadow-xl rounded-xl">
            <h1 className="text-primary-3 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base font-bold py-4 leading-tight tracking-tight text-center">
              Medical Histories
            </h1>
            <div class="flex flex-col gap-6 w-full justify-end pt-4 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm">
              <div className=" bg-primary-2 w-full items-center text-white rounded-md ">
                <button type="submit" fdprocessedid="gkbxyo" className="duration-300 grid grid-cols-6 gap-2 items-center w-full h-full px-2 py-4 rounded-md hover:bg-primary-1 focus:bg-primary-1 active:bg-primary-3 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold hover:text-primary-2 focus:text-primary-2">
                  <span className="col-span-3">Scabies</span>
                  <span className="col-span-2">17/01/23</span>
                  <span className="col-span-1"><FaFileMedical/></span>
                </button>
              </div>
              <div className=" bg-primary-2 w-full items-center text-white rounded-md">
                <button type="submit" fdprocessedid="gkbxyo" className="duration-300 grid grid-cols-6 gap-2 items-center w-full h-full px-2 py-4 rounded-md hover:bg-primary-1 focus:bg-primary-1 active:bg-primary-3 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold hover:text-primary-2 focus:text-primary-2">
                  <span className="col-span-3">Atopic Dermatitis</span>
                  <span className="col-span-2">24/02/23</span>
                  <span className="col-span-1"><FaFileMedical/></span>
                </button>
              </div>
              <div className=" bg-primary-2 w-full items-center text-white rounded-md">
                <button type="submit" fdprocessedid="gkbxyo" className="duration-300 grid grid-cols-6 gap-2 items-center w-full h-full px-2 py-4 rounded-md hover:bg-primary-1 focus:bg-primary-1 active:bg-primary-3 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold hover:text-primary-2 focus:text-primary-2">
                  <span className="col-span-3">Atopic Dermatitis</span>
                  <span className="col-span-2">29/04/23</span>
                  <span className="col-span-1"><FaFileMedical/></span>
                </button>
              </div>
            </div>
        </div>

        <div className="bg-[#013B31] w-full px-4 pb-6 text-[20px] shadow-xl rounded-xl">
            <div className="px-4 py-4">
                <h1 className="text-primary-3 py-2 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base font-bold leading-tight tracking-tight ">
                  Diagnostic Image
                </h1>
                <div className=" px-4 w-full max-w-[300px] h-full min-h-[300px] bg-primary-1 rounded-lg border ">
                <span className="text-teal-900 flex items-center justify-center">

                </span>
              </div>
            </div>
            <div className="px-4 py-4">
                <h1 className="text-primary-3 py-2 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base font-bold leading-tight tracking-tight ">
                  Disease Name
                </h1>
                <div className="px-4 py-1 bg-primary-1 rounded-lg border ">
                <span className="text-teal-900 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm">Atopic Dermatitis</span>
              </div>
            </div>

            <div className=" px-4 py-4">
                <h1 className="text-primary-3 py-2 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base font-bold leading-tight tracking-tight ">
                    Description
                </h1>
                <div className=" px-4 py-1 min-h-[200px] bg-primary-1 rounded-lg border ">
                <span className="text-teal-900 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm">tes</span>
              </div>
            </div>
            
            
            <div className="px-4 py-4">
                <h1 className="text-primary-3 py-2 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base font-bold leading-tight tracking-tight ">
                Treatment Recomendation
                </h1>
                <div className=" px-4 py-1 min-h-[200px] bg-primary-1 rounded-lg border ">
                <span className="text-teal-900 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm">tes</span>
              </div>
            </div>
            </div>  
          </div>
      </section>
    </>
  );
};

export default History;
