import React from 'react'
import CompA from './CompA';
const name="virat kohli";
const profession="cricketer";
const ParentComp = () => {
  return (
    <CompA name={name} profession={profession}/>
  )
}

export default ParentComp