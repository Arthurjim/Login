import axios from "axios";
import React, { useEffect, useContext } from "react";
import {useParams} from 'react-router-dom'
import AppContext from "../context/ContextHook";
import '../styles/dash.css'
const Dashboard = () => {
  const {state,listNotes} = useContext(AppContext);
  const {user,notes} = state
  const getNotes = async ()=>{
    
    try{
    const notes = await axios(`http://localhost:4000/notes/${user.payload._id}`)
    listNotes(notes.data)
    
    }catch(error){
      console.error(error)
    }
  }
  useEffect(()=>{
    getNotes()
    
  },[])
  
  return (
    <div className="container-dashboard">
      <h2 className="text-center text-2xl font-bold  ">YOUR NOTES</h2>
      <div className="conteiner flex flex-wrap  justify-center">
        <div className="flex-row w-72 h-52 border-2 border-gray-700 text-center m-1 rounded-2xl overflow-hidden">
          <div className="text-xl font-bold h-1/3 text-gray-300 bg-gray-800 p-4 ">
            <p className=" h-5/6  overflow-hidden">  ir a mi casa por mi perro  que nosdmaam</p>
          </div>
          <div className="h-2/3 bg-gray-100 ">
            <p className="text-sm h-2/3 overflow-y-auto ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              
                 
            </p>
            <p className="h-1/3 text-sm">Hora de creación: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
