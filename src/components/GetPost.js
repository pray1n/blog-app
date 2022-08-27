import React, { useState, useEffect, useCallback} from 'react'
import { client } from '../client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const GetPost = () => {
    const [PostContent, setPostContent] = useState([])
    const [IsPostContentLoading, setIsPostContentLoading] = useState([])

const CleanUpPostContent = useCallback((rawData) => {
    
    const CleanPostContent = rawData.map((post) => {
        
        const {sys, fields} = post
        const {id} = sys
        const postTitle = fields.title
        const postDescription = fields.description
        const postBackground = 'https:' + fields.picture.fields.file.url
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
        
       <p> {post.postTitle[1]}  </p>
        <p> {documentToReactComponents(post.postDescription)} </p>
       <img src={post.postBackground} alt="travel picture"/>

       </div>
       
       
       
        
    )
    })}</div>
  )
}

export default GetPost;