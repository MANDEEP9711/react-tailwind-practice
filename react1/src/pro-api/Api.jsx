import React from 'react'
import { useEffect } from 'react'
const Api = ({setUserData}) => {
  useEffect(() => {
    getUserData();
  }, [])
  const getUserData=async ()=>{
    const url="http://localhost:3000/users";
    let response=await fetch(url);
    response=await response.json();
    setUserData(response);
  }
  return (
    <>
    <h1></h1>
    </>
  )
}

export default Api