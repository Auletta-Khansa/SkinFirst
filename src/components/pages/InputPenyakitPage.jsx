import React from "react";
const InputPenyakit = () => {
  return (
    <>
      {/*Fun Facts */}
      <section className="min-h-screen  px-40 pt-32 pb-20 bg-[#FFFFFFF]">
        
        <div className="pt-10 flex justify-between gap-8">
          

          <div className="bg-[#013B31] w-2/3 px-4 pb-6 text-[20px]  shadow-xl rounded-xl">
            <div className="px-4 py-4">
                <h1 className="text-primary-3 py-2 text-lg font-bold md:text-2xl leading-tight tracking-tight ">
                Disease Name
                </h1>
                <input className=" w-full px-4 py-2 bg-primary-1 rounded-lg border "/>
            </div>

            <div className="px-4 py-4">
                <h1 className="text-primary-3 py-2 text-lg font-bold md:text-2xl leading-tight tracking-tight ">
                    Description
                </h1>
                <input className=" w-full px-4 py-8 bg-primary-1 rounded-lg border "/>
            </div>
            
            
            <div className="px-4 py-4">
                <h1 className="text-primary-3 py-2 text-lg font-bold md:text-2xl leading-tight tracking-tight ">
                Treatment Recomendation
                </h1>
                <input className=" w-full px-4 py-16 bg-primary-1 rounded-lg border "/>
            </div>
            <div class="flex w-full justify-end pt-4 px-4">
              <button
                type="submit"
                class="w-1/4 h-1/6 text-primary-0  bg-primary-3 hover:bg-primary-1 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
                fdprocessedid="gkbxyo"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InputPenyakit;
