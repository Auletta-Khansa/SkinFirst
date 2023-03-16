import React from "react";
import {FaUserCircle} from "react-icons/fa"
//import { Link } from 'react-router-dom'

const ProfilePage = () => {
    return (
      <>
        <section class="min-h-screen px-30 pt-20 bg-gray-50 px-40">
            <div className="bg-primary-0 w-1/4 min-h-[75vh] py-4 my-10">
                <div className="w-[100px] flex justify-center ">
                    <FaUserCircle/>
                </div>
                <div className="flex justify-center">
                    <p>Hi, User!</p>
                </div>
                <div className="flex justify-center ">
                    <button className=" bg-primary-3 py-2 px-4 rounded-xl"><span className=" text-primary-0">Medical History</span></button>
                </div>
            </div>
        </section>
      </>
    )
  }
  
  export default ProfilePage