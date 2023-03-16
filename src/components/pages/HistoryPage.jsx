import React from "react";
const History = () => {
  return (
    <>
      {/*Fun Facts */}
      <section className="min-h-screen  px-40 pt-32 pb-20 bg-[#FFFFFFF]">
        <div className="pt-10 flex justify-between gap-2">
          <div className=" bg-[#013B31] w-1/3 px-8 pb-6 text-[20px] shadow-xl rounded-xl">
            <h1 className="text-primary-3 text-xl font-bold  py-4 md:text-2xl leading-tight tracking-tight text-center">
              Medical Histories
            </h1>
          
            <button
                type="submit"
                className=" w-full h-1/6 text-primary-0  bg-[#3BB8AA] hover:bg-primary-1 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
                fdprocessedid="gkbxyo"
              >
                Save History
              </button>
            

            <div className=" pt-8">
            <button
                type="submit"
                className=" w-full h-1/6 text-primary-0  bg-[#3BB8AA] hover:bg-primary-1 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
                fdprocessedid="gkbxyo"
              >
                Save History
              </button>
            </div>

            <div className=" pt-8 ">
            <button
                type="submit"
                className=" w-full h-1/6 text-primary-0  bg-[#3BB8AA] hover:bg-primary-1 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
                fdprocessedid="gkbxyo"
              >
                Save History
              </button>
            </div>
            
        </div>

          <div className="bg-[#013B31] w-1/2 px-4 pb-6 text-[20px]  shadow-xl rounded-xl">
           

            <div className="px-4 pt-8">
              <div className=" px-4 py-2 bg-primary-1 rounded-lg border ">
                <span className="text-teal-900 item-center justify-center">
                Diagnostic Results : 
                </span>
              </div>
            </div>
            <div className="px-4 py-6">
              <div className=" px-4 py-16 bg-primary-1 rounded-lg border ">
                <span className="text-teal-900">
                    Description
                </span>
              </div>
            </div>
            <div className="px-4 ">
              <div className=" px-4 py-16 bg-primary-1 rounded-lg border ">
                <span className="text-teal-900 text-start">
                    Treatment Recommendation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
