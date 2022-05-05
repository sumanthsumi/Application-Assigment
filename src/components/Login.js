import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    let navigate = useNavigate()
    const [selectedCountry,setSelectedCountry] = useState('')
    const [disabled,setDisabled] = useState(true)

    const handleSubmit = (e)=>{
        e.preventDefault()
        localStorage.setItem('country',selectedCountry)
        console.log(selectedCountry)
        navigate('/countryDetails')



    }
    const handleChange = (e)=>{
        let value = e.target.value;
        setDisabled(true)
       
       
        if(value){
            setDisabled(false)
            setSelectedCountry(value)
        }
        else{
            setDisabled(true)
        }


    }
    
    return <div className='login-container'>
              <form onSubmit={handleSubmit} className='form'>
                    <input type='text' onChange={handleChange} placeholder='country name' className='input'></input>
                    <button type='submit'  className='btn' disabled={disabled}>submit</button>
              </form>
            </div>
}

export default Login