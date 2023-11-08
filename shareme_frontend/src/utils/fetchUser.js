import React,{useState , useEffect} from "react"

export const fetchUser = () =>{
    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()
    return userInfo
}

 export const useDebounced = (searchterm , delay) =>{

const [debouncedValue , setDebouncedValue] = useState('')

    useEffect(()=>{
   const timeoutId = setTimeout(()=>{
     setDebouncedValue(searchterm)
   } , delay)
   return ()=> clearTimeout(timeoutId)
    } , [searchterm])

   return debouncedValue

  }