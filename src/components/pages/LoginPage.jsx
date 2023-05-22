import React, { useState } from "react";
import env from "react-dotenv";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        username: "",
        password: "",
    })
    
    const authLogin = async(e) =>{
        e.preventDefault();
        const {username, email, password} = data;
        let API = env.REACT_APP_SKINFIRST_API;
        try {
           const {data} = await axios.post(API+'login', {
            username,
            email,
            password
           });
           if(data.error){
            toast.error(data.error)
            console.log(data.error)
           }
           else{
            // setData({});
            toast.success(data.message)
            console.log(data.message)
            navigate('/home')
            
           } 
        } catch (error) {
            console.log(error);
        }
    }
    return (
      <>
        <section class="min-h-screen px-30 pt-20 bg-gray-50">
            <div class="flex flex-col items-center justify-center px-6 py-10 mx-auto">
                <a href="#home" class="flex items-center mb-6 text-3xl font-bold text-primary-0 ">
                {/* <img class="w-8 h-8 mr-2" src={ImgLogo} alt="img-logo"> </img> */}
                Login    
                </a>
                <div class="w-full bg-primary-0 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-primary-3 md:text-2xl ">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#" onSubmit={authLogin}>
                            <div>
                                <label for="username" class="block mb-2 text-sm font-medium text-primary-1">Username</label>
                                <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="admin123" required onChange={(e)=>setData({...data, username: e.target.value})}></input>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-primary-1">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required onChange={(e)=>setData({...data, password: e.target.value})}></input>
                            </div>
                            {/* <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="">
                                        </input>
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-primary-1">Remember me</label>
                                    </div>
                                </div>
                                <a href="#home" class="text-sm font-medium text-primary-1 hover:underline">Forgot password?</a>
                            </div> */}
                            <button type="submit" class="w-full text-primary-0 bg-primary-1 hover:bg-primary-3 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                            <p class="text-sm font-medium text-primary-1 ">
                                Don't have an account yet? <Link to='/signup'><a href="#home" class="font-medium text-primary-4 underline hover:text-primary-2">Sign up</a></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
  
  export default LoginPage