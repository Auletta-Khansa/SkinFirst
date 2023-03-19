import React from "react";
const Diagnostic = () => {
  return (
    <>
      {/*Fun Facts */}
      <section className="min-h-screen  px-40 pt-32 pb-20 bg-[#FFFFFFF]">
        <h1 className="text-center text-[50px] font-poppins font-bold">
          Skin Diseases Diagnosis
        </h1>
        <div className="pt-10 flex justify-between gap-8">
          <div className=" bg-[#013B31] w-1/3 h-full px-8 pb-6 text-[20px] shadow-xl rounded-xl">
            <h1 className="text-primary-3 text-xl font-bold  py-4 md:text-2xl leading-tight tracking-tight ">
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
                Diagnose
              </button>
            </div>
          </div>

          <div className="bg-[#013B31] w-2/3 px-4 pb-6 text-[20px]  shadow-xl rounded-xl">
            <h1 className="text-primary-3 text-xl font-bold px-4 py-4 md:text-2xl leading-tight tracking-tight ">
              Diagnostic Results
            </h1>

            <div className="px-4">
              <div className=" px-4  bg-primary-1 rounded-lg border ">
                <span className="text-teal-900 item-center justify-center">
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
                class="w-1/4 h-1/6 text-primary-0  bg-primary-3 hover:bg-primary-1 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
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
