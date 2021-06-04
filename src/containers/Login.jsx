import { useState } from "react";
import {useHistory} from "react-router-dom";
import "../styles/login.css";

import axios from "axios";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errror, setError]= useState("");
  const [user, setUser] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/userLogin", {
        email,
        password,
      });
      setUser(true);
      window.localStorage.setItem("userloged", JSON.stringify(response.data));
      setPassword("");
      setEmail("");
      history.push(`/dash/${response.data._id}`)
      console.log(response.data)
    } catch (e) {
      console.log(e)
    }
  };


  return (
    <div className="container">
      <div className="flex max-w-sm md:max-w-lg w-full h-70 justify-center bg-white shadow-md rounded-lg overflow-hidden mx-auto flex flex-col p-9 ">
        <h3 className="text-2xl font-bold mb-4">Login</h3>

        <div className="relative h-10 input-component mb-5">
          <input
            id="email"
            type="text"
            name="email"
            className="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label
            htmlFor="email"
            className="absolute left-2 transition-all bg-white px-1"
          >
            E-mail
          </label>
        </div>
        <div className="relative h-10 input-component">
          <input
            id="password"
            type="password"
            name="password"
            className="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label
            htmlFor="password"
            className="absolute left-2 transition-all bg-white px-1"
          >
            Password
          </label>
        </div>
        <button
          className="w-1/2 bg-blue-500 mx-auto my-1 rounded-sm font-semibold p-2 mt-5 text-white hover:bg-purple-700"
          onClick={handleSubmit}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
