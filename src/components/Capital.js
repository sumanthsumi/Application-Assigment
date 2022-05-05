import React from 'react'

const Capital = ({data,handleCapital,fetchDetails}) => {

    React.useEffect(()=>{
       fetchDetails()
    },[])

    return <>
            <div className='capital-wrapper'>

                <div className='title'>{data?.name.common}</div>
                <div>country's capital : <span>{data?.capital}</span></div>
                <div>population : <span>{data?.population}</span></div>
                <div>latlng : <span>{data?.latlng[0]} , {data?.latlng[1]}</span></div>
                <div>
                    <img src={data?.flags?.png} alt='flag'></img>
                </div>
                <div>
                    <a href={data?.flags?.png} target='_blank' rel="noreferrer">{data?.flags?.png}</a>
                </div>
                <div>
                    <button onClick={handleCapital} className='btn capital'>capital weather</button> 
                </div>
            </div>
    </>
}

export default Capital