import React from 'react'
import { useState,useEffect } from 'react'
import Loading from './Loading';
import axios from 'axios';
import WeatherDetails from './WeatherDetails';
import Capital from './Capital';
import Error from './Error';

const CountryDetails = () => {

    const [data,setData] = useState([])
    const [show,setShow] = useState(false)
    const [details,setDetails] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [value,setValue] = useState(localStorage.getItem("country"))
    console.log(data)

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Make a first request
          const result1 = await axios.get(`https://restcountries.com/v3.1/name/${value}`);
          setData(result1.data[0]);
          setLoading(false)
        } catch (e) {
         setError(true)
        
        }
      };
      fetchData();
    }, []);

const fetchDetails = async ()=>{
  const result2 = await axios.get(`http://api.weatherstack.com/current?access_key=9f1f6742e511df217473ba1b04870ca0&query=${data.capital}`);
  setDetails(result2.data);
 
}
    const handleCapital = ()=>{
      setShow(true)
    }

return <>
            <div className='country-wrapper'>
            {error && <Error></Error>}  
                  {
                    loading ? <Loading></Loading>:
                    (show ? 
                        <WeatherDetails 
                            details={details}>    
                        </WeatherDetails>
                          : <Capital 
                                    data={data} handleCapital={handleCapital}
                                    fetchDetails={fetchDetails}>
                            </Capital>)
            }
            </div>
</>
}
export default CountryDetails