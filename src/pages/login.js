import React from 'react'
import '../index.css'
function Login() {
  return (
    <div>
        <div className="flex flex-wrap justify-center mt-20">
          
      <br />
      <br />
      <div className="p-10 bg-slate-500">
        <h2 className="text-center text-3xl leading-9 
          font-extrabold text-gray-800"
        >
          Sign In to your account
        </h2>
        <br />
        <br />
        <form >
          <div className="flex justify-center">
            <div className="lg:w-full md:w-2/3 w-full">
              <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="text"
              >
                Username
              </label>
              <input 
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full  
                  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 md:"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <div className="lg:w-full md:w-2/3 w-full">
              <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="password"
              >
                Password
              </label>
              <input 
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                required
              />
            </div>
          </div>
          {/** submit button */}
          <div className="mt-4 flex justify-center">
            <button 
              type="submit"
              className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4  border border-transparent text-sm leading-5 font-medium 
                rounded-md text-white bg-teal-500 hover:bg-teal-400 focus:outline-none focus:border-teal-400 
                focus:shadow-outline-teal active:bg-teal-400 active:outline-none transition duration-150 ease-in-out"
            >
              Sign In
            </button>
          </div>
          <p className="text-center text-l leading-9 
          font-extrabold text-gray-800">
            not yet registered?  
              <a href="#" className="font-medium text-Teal-600 hover:underline"> Register</a>
        </p>
        </form>
        
      </div>
    </div>
    </div>
  )
}

export default Login