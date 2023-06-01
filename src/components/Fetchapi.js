import React, { useEffect, useState } from 'react'

const Fetchapi = () => {
    const [data, setData] = useState([])
    const getData = async() => {
        try{
            const url = "https://fakestoreapi.com/products/"
            const response  = await fetch(url)
            const response_json = await response.json()
            console.log(response_json)
            setData(response_json)
        }catch(Error){
            console.log(Error)
        }

    }
    useEffect(()=>{
        getData()
    },[])
      
  return (
    <div>
        <h1>Fetch Api</h1>
        {data&& data.map((value,index) => {
            return(
                <div style={{background:"pink",gap:"5px", width:"400px", height:"400px"}} key={index}>
                    <p>Title : {value.title}</p>
                    <p>Description : {value.description.slice(0,30)+".."}</p>
                    <img style={{height:"200px", width:"200px"}} src={value.image?value.image:""} alt="_blank" />
                    <p>{value.price}</p>
                    <p>Rating : {value.rating.rate}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Fetchapi