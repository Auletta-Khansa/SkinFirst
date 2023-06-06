import React, { useState, useContext } from "react";
import {FaUserCircle} from "react-icons/fa"
import { Link } from 'react-router-dom'
import env from "react-dotenv";
import axios from "axios";
import { toast } from "react-hot-toast";

import { UserContext } from "../../context/userContext";

const ProfilePage = () => {
    const {user} = useContext(UserContext)

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    let API = env.REACT_APP_SKINFIRST_API

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(API+`users/${user.user.id}`, {
                username,
                email,
                oldPassword,
                newPassword,
            });
            if(response.data.error){
                toast.error(response.data.error);
            }
            else{
                toast.success(response.data.message);
            }
        } 
        catch (error) {
            // toast.error(AxiosError.response.data.error);
            // toast.error(AxiosError.response.data.error);
            toast.error("Wrong old password confirmation")
        }
    };

    
    


    if(user){
        return (
            <>
              <section class="min-h-screen pt-20 bg-gray-50 2xl:px-40 xl:px-40 lg:px-40 px-10">
                  <div class="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col justify-between gap-16 2xl:items-start xl:items-start lg:items-start md:items-start items-center">
                      <div className="py-8 2xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[300px] sm:w-[300px] w-full">
                          <div class="bg-primary-0 py-10 rounded-lg px-8 flex-col justify-between flex gap-20">
                              <div>
                                  <div class="flex justify-center text-primary-1 text-[200px] py-6">
                                      <FaUserCircle/>
                                  </div>
                                  <div class="flex justify-center text-primary-1 font-bold text-lg">
                                      <p>Hi, {user.user.username}!</p>
                                  </div>
                              </div>
                              <div class="">
                                  <Link to="/history" class="bg-primary-1 text-primary-0 font-bold py-2 justify-center flex px-10 rounded duration-300 hover:bg-[#a4a399] ">Medical History</Link>
                              </div>
                          </div>
                      </div>
      
                      <div class="sm:w-2/3 w-full py-8">
                          <form onSubmit={handleSubmit} class="bg-primary-0 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 h-full">
                              <h1 class="text-xl font-bold leading-tight tracking-tight text-primary-3 md:text-2xl mb-4">
                                  Account Profile
                              </h1>
                              <div class="mb-4">
                                  <label class="block text-primary-1 font-bold mb-2" for="email">
                                      Email
                                  </label>
                                  <input
                                      class="shadow appearance-none border rounded w-full py-2 px-3 bg-primary-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                      id="email"
                                      type="email"
                                      placeholder="Email"
                                      value={user.user.email}
                                      disabled
                                      onChange={(e) => setEmail(e.target.value)}
                                  />
                              </div>
                              <div class="mb-4">
                                  <label class="block text-primary-1 font-bold mb-2" for="username">
                                      Username
                                  </label>
                                  <input
                                      class=" select-none shadow appearance-none border rounded w-full py-2 px-3 bg-primary-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                      id="username"
                                      type="text"
                                      placeholder="Username"
                                      value={user.user.username}
                                      disabled
                                      onChange={(e) => setUsername(e.target.value)}
                                  />
                              </div>
                              <div class="mb-4">
                                  <label class="block text-primary-1 font-bold mb-2" for="password">
                                      New Password
                                  </label>
                                  <input
                                      class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                      id="new-password"
                                      type="password"
                                      placeholder="If you want to change your password"
                                      onChange={(e) => setNewPassword(e.target.value)}
                                  />
                              </div>
                              <div class="mb-6">
                                  <label class="block text-primary-1 font-bold mb-2" for="bio">
                                      Old Password
                                  </label>
                                  <input
                                      class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                      id="old-password"
                                      type="password"
                                      placeholder="Verify with your old password"
                                      required
                                      onChange={(e) => setOldPassword(e.target.value)}
                                  ></input>
                              </div>
                              <div class="flex items-center justify-between">
                                  <button
                                      class="ml-auto bg-primary-1 text-primary-0 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300 hover:bg-[#a4a399] "
                                      type="submit"
                                  >
                                      Update Profile
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </section>
            </>
          )
    }
    else{
        return(
            <>
            <div  className="min-h-screen">
                <div className="flex justify-center items-center pt-40">
                    <h1 className="text-black text-center select-none font-merriweather font-bold">Please login to access profile page</h1>
                </div>
            </div>
            </>
        )
    }
}
  export default ProfilePage