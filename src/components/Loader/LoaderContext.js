import React, {
  createContext,
  useState
} from 'react'


export const LoaderContext = createContext();


export default function LoaderContextProvider({ children }) {

  const [isMounted, setIsMounted] = useState(false);


  return (
    <LoaderContext.Provider value={{
      setIsMounted,
      isMounted
    }}>
      {children}
    </LoaderContext.Provider>
  )
}
