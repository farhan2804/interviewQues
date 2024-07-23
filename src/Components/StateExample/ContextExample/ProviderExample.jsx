import React from 'react'
import { createContext } from 'react'

const CricketContext=createContext();
const ProviderExample = ({children}) => {
  return (
    <>
        <CricketContext.Provider value={{name:"Virat",work:"Win Matches for the country"}}>
          {children}
        </CricketContext.Provider>
    </>
  )
}

export default ProviderExample;
export {CricketContext};