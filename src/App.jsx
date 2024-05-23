/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.service";
import {login, logout} from "./store/authSlice"
import {Header, Footer} from "./components/index";
import { Outlet } from "react-router-dom"


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout());
      }
    })
    .finally(()=> setLoading(false))
}, [] )
  
  return !loading ? (
      <div className='min-h-screen bg-zinc-950 text-white flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet />Todo
        </main>
        <Footer />
      </div>test</div>
  ) : (<div>You are not logged in!!</div>)

 
  
}

export default App
