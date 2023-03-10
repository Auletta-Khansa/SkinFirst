import React from "react";
const Diagnostic = () => {
  return (
    <>
      {/*Fun Facts */}
      <section className="min-h-screen  px-40 pt-40 pb-10 bg-[#F0EFE1]">
        <h1 className="text-center text-[50px] font-medium">
          Skin Diseases Diagnosis
        </h1>
        <div className="pt-10 flex justify-between gap-10">
          <div className="flex h-full bg-[#00695B] w-1/2 px-4 pb-6 text-[20px] shadow-xl rounded-xl">
            <h1 className="text-start text-white p-4">Upload Image</h1>
            

            <div></div>
          </div>
          <div className="bg-[#00695B] w-1/2 px-4 pb-6 text-[20px]  shadow-xl rounded-xl">
            <h1 className="text-white p-4">Hasil Diagnosis</h1>
            
           <div className="px-4">
           <div className=" px-4  bg-white rounded-lg border ">
              <span className="text-teal-900">Jenis Penyakit:</span>
            </div>
            </div> 
            <div className="px-4 py-6">
           <div className=" px-4 py-16 bg-white rounded-lg border ">
              <span className="text-teal-900"></span>
            </div>
            </div> 
            <div className="px-4 ">
           <div className=" px-4 py-16 bg-white rounded-lg border ">
              <span className="text-teal-900"></span>
            </div>
            </div> 
          </div>
        </div>
      </section>
    </>
  );
};

export default Diagnostic;
