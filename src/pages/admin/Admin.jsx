import axios from 'axios'
import React, { useEffect } from 'react'
import MainCard from '../../component/mainCard/MainCard'


function Admin() {

  useEffect(() => {
    const url = "http://localhost:8080/users";
    axios.get(url).then(response=>{
      console.log(response.data)
    }).catch(error=> {
      console.log(error)
    })
  }, [])
  
  return (
    <div>
      <MainCard/>
    </div>
  )
}

export default Admin