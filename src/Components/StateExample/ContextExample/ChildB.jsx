import React, { useContext } from 'react'
import { CricketContext } from './ProviderExample'
const ChildB = () => {
    const {name,work}=useContext(CricketContext);
  return (
    <>
        <h1>Component B,Name is {name}</h1>
    </>
  )
}

export default ChildB