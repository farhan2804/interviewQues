import React from 'react'
import CompC from './CompC'
const CompB = (prop) => {
  return (
   <>
    <h1>Hey I am component B</h1>
    <CompC name={prop.name} profession={prop.profession}/>
   </>
  )
}

export default CompB