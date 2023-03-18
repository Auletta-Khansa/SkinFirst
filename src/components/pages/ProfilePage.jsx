import React from "react";
import {FaUserCircle} from "react-icons/fa"
//import { Link } from 'react-router-dom'

const ProfilePage = () => {
    return (
      <>
        <section class="min-h-screen px-30 pt-20 bg-gray-50 px-40">
        <div class="flex flex-col md:flex-row">
            <div class="bg-primary-0 md:w-1/4 pt-3 my-7 rounded-lg">
                <div class="flex justify-center text-primary-1 text-[200px] py-6">
                    <FaUserCircle/>
                </div>
                <div class="flex justify-center text-primary-1 font-bold text-lg">
                    <p>Hi, User!</p>
                </div>
                <div class="flex justify-center">
                    <button class="bg-primary-1 py-2 px-4 rounded mt-40 w-[230px]">
                    <span class="text-primary-0 font-bold">Medical History</span>
                    </button>
                </div>
            </div>

            <div class="md:w-3/4 px-4 pt-5">
            <form class="bg-primary-0 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 ">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-primary-3 md:text-2xl mb-4">
                        Account Profile
                    </h1>
                    <div class="mb-4">
                    <label class="block text-primary-1 font-bold mb-2" for="email">
                        Email
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-primary-1 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                    />
                    </div>
                    <div class="mb-4">
                    <label class="block text-primary-1 font-bold mb-2" for="username">
                        Username
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-primary-1 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                    />
                    </div>
                    <div class="mb-4">
                    <label class="block text-primary-1 font-bold mb-2" for="password">
                        Password
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-primary-1 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="********"
                    />
                    </div>
                    <div class="mb-6">
                    <label class="block text-primary-1 font-bold mb-2" for="bio">
                        Bio
                    </label>
                    <textarea
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-primary-1 leading-tight focus:outline-none focus:shadow-outline"
                        id="bio"
                        rows="3"
                        placeholder="Tell us about yourself"
                    ></textarea>
                    </div>
                    <div class="flex items-center justify-between">
                        <button
                            class="ml-auto bg-primary-1 text-primary-0 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
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
  export default ProfilePage