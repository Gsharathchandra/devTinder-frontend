import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants';
import { addFeed } from '../utils/feedSlice';
import axios from 'axios';

const Feed = () => {
const feed = useSelector((store) => store.feed);
console.log(feed);
const dispatch = useDispatch();

  const getFeed = async () =>{
    if (feed){
      return;
    }
    try {
      const res = await axios.get(BASE_URL+"/feed",{withCredentials:true});
      console.log(res);
      dispatch(addFeed(res?.data?.data));
    } catch (error) {
      console.error(error);
      
    }
  }
  useEffect(()=>{
    getFeed();
  },[])
  return (
    <div>Feed</div>
  )
}

export default Feed