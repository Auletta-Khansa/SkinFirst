import React from "react";
const Diagnostic = () => {
  return (
    <>
      <section className="min-h-screen 2xl:px-40 xl:px-40 lg:px-40 px-10 pt-32 pb-20 bg-[#FFFFFFF]">
        <h1 className="text-center 2xl:text-[50px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[30px] font-poppins font-bold">
          Skin Diseases Diagnosis
        </h1>
        <div className="pt-10 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-center 2xl:items-start xl:items-start lg:items-start md:items-start gap-8">
          <div className=" bg-[#013B31] 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-2/3 w-full h-full px-8 pb-6 text-[20px] shadow-xl rounded-xl">
            <h1 className="text-primary-3 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base font-bold py-4 leading-tight tracking-tight ">
              Upload Image
            </h1>
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center px-6">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
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
          </div>

          <div id="diagnoseResult"></div>
          <div className="bg-[#013B31] 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 w-full px-4 pb-6 text-[20px] shadow-xl rounded-xl 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-20">
            <h1 className="text-primary-3 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base font-bold px-4 py-4 leading-tight tracking-tight ">
              Diagnostic Results
            </h1>

            <div className="px-4">
              <div className=" px-4  bg-primary-1 rounded-lg border ">
                <span className="text-teal-900 item-center 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm justify-center">
                  Type of Disease:
                </span>
              </div>
            </div>
            <div className="px-4 py-6">
              <div className=" px-4 py-1 min-h-[200px] bg-primary-1 rounded-lg border ">
                <span className="text-teal-900"></span>
              </div>
            </div>
            <div className="px-4 ">
              <div className=" px-4 py-1 min-h-[200px] bg-primary-1 rounded-lg border ">
                <span className="text-teal-900"></span>
              </div>
            </div>
            <div class="flex w-full justify-end pt-4 px-4">
              <button
                type="submit"
                class=" h-1/6 text-primary-0  bg-primary-3 hover:bg-primary-1 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
                fdprocessedid="gkbxyo"
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
