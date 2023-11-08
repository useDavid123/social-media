import React,{ useEffect, useState } from 'react'
import { client } from '../client'
import { searchedQuery } from '../utils/data'
import { useDebounced } from '../utils/fetchUser'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'


const Search = ({searchTerm}) => {
  const [pins , setPins] = useState(null)
  const [loading , setLoading] = useState(false)
 console.log(searchTerm)
  const debouncedvalue = useDebounced(searchTerm , 400)
 
  const searchPin = () => {
    if(searchTerm.length > 0){
      setLoading(true)
      let query = searchedQuery(searchTerm)

      client
      .fetch(query)
      .then((data)=>{
        console.log(data)
        setPins(data)
        setLoading(false)
      })
    }

    else{
      setPins([])
    }
   
  }

   
  useEffect(()=>{
   
    console.log(`value is ${debouncedvalue}`)
   searchPin()
   

  },[debouncedvalue])

   if(loading){
    return  <Spinner message='loading pins'/>
   }

   if(!pins?.length){
    return  <h2 className="text-center font-bold text-2xl mt-8 mb-4">
    No Related Pins
  </h2>
   }
  return (
    <>
        {!!pins?.length ? (
        <MasonryLayout feeds={pins} />
      ) : null}
      </>
  )
}

export default Search