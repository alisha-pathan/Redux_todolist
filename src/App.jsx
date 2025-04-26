import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getuser } from './reducer';
import Add from './Add';
import Edit from './Edit';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:1000/users")
      .then(res => res.json())
      .then(data =>
        dispatch(getuser(data))
      )
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/add' element={<Add></Add>}></Route>
          <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
