import React, { useState } from 'react';



const Login = () => {

  const [login, setLogin] = useState(false)
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value
    const password = event.target.password.value

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email === '' || password === ''){
      alert('Please fill in all fields')
      return
    }
    if(email != '' && !regexEmail.test(email)){
      alter('Please enter a valid email')
      return 
    }

    if(email !== 'eldivi@gmail.com' && password !== '123'){
      alert('Invalid credentials')
      return
    }
    setLogin(true)
    console.log(login)
  }

 
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-red-700 ">
          Sign in
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-red-700 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {' '}
          Don't have an account?{' '}
          <a href="#" className="font-medium text-red-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
