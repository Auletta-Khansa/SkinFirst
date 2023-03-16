import React from "react";
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
      <>
        <section class="min-h-screen px-30 pt-44 bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-0">404</h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
                <p class="mb-10 text-lg font-semibold text-gray-500 ">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
                <Link to='/home'><a href="#home" class="inline-flex text-primary-1 bg-primary-0 hover:bg-primary-0 focus:ring-4 focus:outline-none focus:ring-primary-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Back to Homepage</a></Link>
                </div>   
            </div>
        </section>
      </>
    )
  }
  
  export default NotFound