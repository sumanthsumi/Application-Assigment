import React from 'react'
import Login from './components/Login'
import './src/App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CountryDetails from './components/countryDetails'
import Error from './components/Error'

const App = () => {

    return <>
       <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Login 
           
                 ></Login>}></Route>
                <Route  path='/countryDetails' element={<CountryDetails></CountryDetails>}></Route>
                <Route exact path="*" element={<Error></Error>}></Route>
            </Routes>
       </BrowserRouter>
    </>
}

export default App