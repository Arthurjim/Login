import {useState} from 'react'
import initialState from '../initialState'
const useInitialState =()=>{
  const [state,setState] = useState(initialState)
  const addUser = payload =>{
    setState({
      ...state,
      user:{...state.user,payload}
    })
  }
  const listNotes = payload =>{
    setState({
      ...state,
      notes:[...state.notes,payload]
    })
  }

  return {
    listNotes,
    addUser,
    state
  }
}


export default useInitialState;