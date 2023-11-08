import React,{useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {client} from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import {feedQuery, searchedQuery} from '../utils/data'

const Feed = () => {

  const [loader , setLoader] = useState(true)   
  const [feeds , setFeeds] = useState([]) 

  const {categoryId}= useParams()
  
 
useEffect(()=>{

setLoader(true)
if(categoryId){
  const query = searchedQuery(categoryId)
   client.fetch(query).then((data)=>{
    setFeeds(data)
   
   })
}
else{
client.fetch(feedQuery).then((data)=>{
  setFeeds(data)
  // console.log(data)
  
})
}
setLoader(false)
},[categoryId])
const ideaName = categoryId || 'new'

console.log(feeds)

if(loader) return <Spinner message={`We are giving you ${ideaName} feeds`}/>

  return (  
      <>
      
      {
        !!feeds.length ? (
          <div>
          {feeds && (
            <MasonryLayout feeds={feeds} />
          )}
        </div>
        ) : (
          <h2 className="text-center font-bold text-2xl mt-8 mb-4">
          No Feeds of this Category
        </h2>
        )
      }
      
      </>
  )
}

export default Feed