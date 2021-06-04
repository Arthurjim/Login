import React, { useState } from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'
const Register = () => {
  const history = useHistory()
  const initialState = { username: "", email: "", password: "", password2: "" };
  const [user, setUser] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const createUser = async (e) =>{
      e.preventDefault()
     try{
      await axios.post('http://localhost:4000/createUser',
      user
    
    )
    history.push('/')
     }catch(e){
        console.log(e)
     }
  }
  return (
    <form className="container" onSubmit={createUser}>
      <div className="flex max-w-sm md:max-w-lg w-full h-70 justify-center bg-white shadow-md rounded-lg overflow-hidden mx-auto flex flex-col p-9 ">
        <h3 className="text-2xl font-bold mb-4">Register</h3>

        <div className="relative h-10 input-component mb-5">
          <input
            id="username"
            type="text"
            name="username"
            className="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
            onChange={handleChange}
          />
          <label
            htmlFor="username"
            className="absolute left-2 transition-all bg-white px-1"
          >
            User Name
          </label>
        </div>
        <div className="relative h-10 input-component mb-5">
          <input
            id="email"
            type="text"
            name="email"
            className="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
            onChange={handleChange}
          />
          <label
            htmlFor="email"
            className="absolute left-2 transition-all bg-white px-1"
          >
            E-mail
          </label>
        </div>

        <div className="relative h-10 input-component mb-5">
          <input
            id="password"
            type="password"
            name="password"
            className="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
            onChange={handleChange}
          />
          <label
            htmlFor="password"
            className="absolute left-2 transition-all bg-white px-1"
          >
            Password
          </label>
        </div>
        <div className="relative h-10 input-component mb-5">
          <input
            id="password2"
            type="password"
            name="password2"
            className="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
            onChange={handleChange}
          />
          <label
            htmlFor="password2"
            className="absolute left-2 transition-all bg-white px-1"
          >
            Repite Password
          </label>
        </div>
        <button 
        className="w-1/2 bg-blue-500 mx-auto my-1 rounded-sm font-semibold p-2 mt-5 text-white  hover:bg-purple-700"
        
        >
          Sign in
        </button>
        <p className="m-auto mt-2t text-gray-600">Dont have account? Register</p>
      </div>
    </form>
  );
};

export default Register;
