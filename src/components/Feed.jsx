import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants';

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
      dispatch(add)
    } catch (error) {
      
    }
  }
  return (
    <div>Feed</div>
  )
}

export default Feed