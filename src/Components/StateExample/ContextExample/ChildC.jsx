import React, { useContext } from 'react'
import { CricketContext } from './ProviderExample';
const ChildC = () => {
  const {name,work}=useContext(CricketContext);
  return (
   <>
    <h1>Component C,Kaam is {work}</h1>
   </>
  )
}

export default ChildC;