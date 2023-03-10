import React from "react";

const LoginPage = () => {
    return (
      <>
        <section class="min-h-[50vh] px-30 pt-20 bg-gray-50">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#home" class="flex items-center mb-6 text-3xl font-bold text-primary-0 ">
                {/* <img class="w-8 h-8 mr-2" src={ImgLogo} alt="img-logo"> </img> */}
                Login    
                </a>
                <div class="w-full bg-primary-0 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-primary-3 md:text-2xl ">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-primary-1">Username</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="">
                                </input>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-primary-1">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                                </input>
                            </div>
                            <div class="flex items-center justify-between">
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
                            </div>
                            <button type="submit" class="w-full text-primary-0 bg-primary-1 hover:bg-primary-3 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                            <p class="text-sm font-medium text-primary-1 ">
                                Dont have an account yet? <a href="#home" class="font-medium text-primary-4 underline">Sign up</a>
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