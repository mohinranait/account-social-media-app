'use client'
import React, { createContext, useState } from 'react'
export const CreatePostContext = createContext({})
const CreatePostProvider = ({ children }) => {
  const [post, setPost] = useState({})

  const postObject = {
    post, setPost,
  }
  return (
    <CreatePostContext.Provider value={postObject}>
      {children}
    </CreatePostContext.Provider>
  )
}

export default CreatePostProvider