import React from 'react'
import Masonry from 'react-masonry-css'
import SingleFeed from './SingleFeed'


const MasonryLayout = ({feeds}) => {

   console.log(feeds)
    const breakpointObj = {
        default:4,
        3000:6,
        2000:5,
        1200:3,
        1000:2,
        500:1
    }


   return  (
        <Masonry  className="flex animate-slide-fwd"  breakpointCols={breakpointObj}>
         {
           feeds?.map((feed)=> <SingleFeed key={feed._id} feed={feed} />)
         }
        </Masonry>
    )
   

  
}

export default MasonryLayout