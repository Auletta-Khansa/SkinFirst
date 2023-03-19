import React from "react";

import {FaAngleRight} from "react-icons/fa"

const History = () => {
  return (
    <>
      {/*Fun Facts */}
      <section className="min-h-screen  px-40 pt-20 pb-20">
        <div className="py-8 flex justify-between gap-16">
          <div className=" bg-[#013B31] h-fit w-1/3 px-6 pb-10 text-[20px] shadow-xl rounded-xl">
            <h1 className="text-primary-3 text-xl font-bold  py-4 md:text-2xl leading-tight tracking-tight text-center">
              Medical Histories
            </h1>
            <div class="flex flex-col gap-6 w-full justify-end pt-4 text-[16px]">
              <div className=" bg-primary-2 w-full items-center text-white rounded-md ">
                <button type="submit" fdprocessedid="gkbxyo" className="duration-300 flex justify-between gap-10 items-center w-full h-full px-2 py-4 rounded-md hover:bg-primary-1 focus:bg-primary-1 active:bg-primary-3 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold hover:text-primary-2 focus:text-primary-2">
                  <span>Scabies</span>
                  <span>17/01/23</span>
                  <FaAngleRight/>
                </button>
              </div>
              <div className=" bg-primary-2 w-full items-center text-white rounded-md">
                <button type="submit" fdprocessedid="gkbxyo" className="duration-300 flex justify-between gap-10 items-center w-full h-full px-2 py-4 rounded-md hover:bg-primary-1 focus:bg-primary-1 active:bg-primary-3 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold hover:text-primary-2 focus:text-primary-2">
                  <span>Atopic Dermatitis</span>
                  <span>24/02/23</span>
                  <FaAngleRight/>
                </button>
              </div>
              <div className=" bg-primary-2 w-full items-center text-white rounded-md">
                <button type="submit" fdprocessedid="gkbxyo" className="duration-300 flex justify-between gap-10 items-center w-full h-full px-2 py-4 rounded-md hover:bg-primary-1 focus:bg-primary-1 active:bg-primary-3 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold hover:text-primary-2 focus:text-primary-2">
                  <span>Atopic Dermatitis</span>
                  <span>29/04/23</span>
                  <FaAngleRight/>
                </button>
              </div>
            </div>
        </div>

        <div className="bg-[#013B31] w-2/3 px-4 pb-6 text-[20px] shadow-xl rounded-xl">
            <div className="px-4 py-4">
                <h1 className="text-primary-3 py-2 text-lg font-bold md:text-2xl leading-tight tracking-tight ">
                  Diagnostic Image
                </h1>
                <div className=" px-4 w-[300px] min-h-[300px] bg-primary-1 rounded-lg border ">
                <span className="text-teal-900 flex items-center justify-center">

                </span>
              </div>
            </div>
            <div className="px-4 py-4">
                <h1 className="text-primary-3 py-2 text-lg font-bold md:text-2xl leading-tight tracking-tight ">
                  Disease Name
                </h1>
                <div className="px-4 py-1 bg-primary-1 rounded-lg border ">
                <span className="text-teal-900">Atopic Dermatitis</span>
              </div>
            </div>

            <div className=" px-4 py-4">
                <h1 className="text-primary-3 py-2 text-lg font-bold md:text-2xl leading-tight tracking-tight ">
                    Description
                </h1>
                <div className=" px-4 py-1 min-h-[200px] bg-primary-1 rounded-lg border ">
                <span className="text-teal-900">tes</span>
              </div>
            </div>
            
            
            <div className="px-4 py-4">
                <h1 className="text-primary-3 py-2 text-lg font-bold md:text-2xl leading-tight tracking-tight ">
                Treatment Recomendation
                </h1>
                <div className=" px-4 py-1 min-h-[200px] bg-primary-1 rounded-lg border ">
                <span className="text-teal-900">tes</span>
              </div>
            </div>
            </div>  
          </div>
      </section>
    </>
  );
};

export default History;
