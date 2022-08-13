import React, { useState, useEffect, useCallback} from 'react'
import { client } from '../client'

const GetPost = () => {
    const [PostContent, setPostContent] = useState([])
    const [IsPostContentLoading, setIsPostContentLoading] = useState([])

const CleanUpPostContent = useCallback((rawData) => {
    
    const CleanPostContent = rawData.map((post) => {
        console.log(post.fields.picture.fields.file.url)
        const {sys, fields} = post
        const {id} = sys
        const postTitle = fields.title
        const postDescription = fields.description
        const postBackground = fields.picture.fields.file.url
        const updatedPost = {id, postTitle, postDescription, postBackground }
        return updatedPost
    })
    setPostContent(CleanPostContent)
})

const GetPostContent = useCallback(async () => {
    setIsPostContentLoading(true)
    try {
        const response = await client.getEntries({ content_type: 'blogPost'})
        const responseData = response.items
        console.log(response.items)
        if (responseData) {
            CleanUpPostContent(responseData)
        } else {
                setPostContent([])
        }
        setIsPostContentLoading(false)       
        } catch (error) {
        console.log(error)
        setIsPostContentLoading(false)
        }
}, [CleanUpPostContent] )
useEffect(() => {
    GetPostContent()
}, [])

  return (
    <div>{PostContent.map((post , index) => {
        console.log(post)
    return(
        <div key={index}>
       <p> {post.postTitle}  </p>  
       
        </div>
    )
    })}</div>
  )
}

export default GetPost;