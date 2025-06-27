import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import { CodeEditor, Explore, Problems, RequireAuth, Unauthorized } from './Pages'
import Register from './Pages/Register'
import Login from './Pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import { initializeState } from './features/user/userSlice'


function App() {
  const {isInitialized} = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeState());
  },[])

  if(!isInitialized) {
    return <strong>Loading...</strong>
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Explore/>}></Route>
        <Route path='/accounts/register' element={<Register/>}></Route>
        <Route path='/accounts/login' element={<Login/>}></Route>
        <Route path='/unauthorized' element={<Unauthorized/>}></Route>
        <Route element={<RequireAuth allowedRole={[2001]}/>}>
          <Route path='/problemset' element={<Problems/>}></Route>
          <Route path='/problems/:Id/:Title' element={<CodeEditor/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
