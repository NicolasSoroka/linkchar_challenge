'use client'

import Sidebar from '@/components/Sidebar'
import { axiosGetStories } from './api/axios';
import { useEffect, useState } from 'react';
import Story from '@/components/ui/StoryComponent/Story';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/features/store';
import { fillStoryList } from './redux/slices/storiesSlice';

const Home = () => {
  const [stories, setStories] = useState({results: []})

  const storyList = useSelector((state: RootState) => state.stories.storyList);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    
    const getUsersStories = async ()  => {
      const stories = await axiosGetStories();
      dispatch(fillStoryList(stories));
      setStories((stories))
      //this must die
    }
    getUsersStories();
  }, [])
  
  return (
    <div className='flex justify-between'>
      <Sidebar results={stories.results}/>

    { stories?.results && (
      <Story stories={stories.results }/>
    )}
    </div>
  )
}

export default Home
