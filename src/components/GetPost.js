import React, { useState, useEffect} from 'react'
import { client } from '../client'

const GetPost = () => {
    const [isGetPostLoading, setIsGetPostLoading] = useState(false)
    const [PostContent, setPostContent] = useState([])

const getPostContent = async () => {
    try {
        const response = await client.getEntries({ content_type: 'blogPost'})
        const responseData = response.items
        console.log(response)
    } catch(error) {
        console.log(error)
    }
}
useEffect(() => {
    getPostContent()
}, [getPostContent])

  return (
    <div>getPost</div>
  )
}

export default GetPost;