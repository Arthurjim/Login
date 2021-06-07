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

  return {
    addUser,
    state
  }
}


export default useInitialState;