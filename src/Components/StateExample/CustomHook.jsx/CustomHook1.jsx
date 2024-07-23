import React from 'react'
import useFetch from './useFetch'
const CustomHook1 = () => {
    const data=useFetch("https://fakestoreapi.com/products");
  return (
    <>
        {data &&
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.category}</h1>
          </div>
        ))}
    </>
  )
}

export default CustomHook1