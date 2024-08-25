'use client'
import React, { createContext, useState } from 'react'
export const CreatePostContext = createContext({})
const CreatePostProvider = ({ children }) => {
  const [post, setPost] = useState({})
  const [withFriends, setWithFriends] = useState([])



  const postObject = {
    post, setPost,
    withFriends, setWithFriends,
  }
  return (
    <CreatePostContext.Provider value={postObject}>
      {children}
    </CreatePostContext.Provider>
  )
}

export default CreatePostProvider