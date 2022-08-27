import React, { useState, useEffect, } from 'react'
import { client } from '../client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const GetPost = () => {
    const [PostContent, setPostContent] = useState([])
    

const CleanUpPostContent = (rawData) => {
    
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
    
}



useEffect(() => {
    const GetPostContent = async () => {
        try {
            const response = await client.getEntries({ 'metadata.tags.sys.id[in]': 'continent,city'})
            const responseData = response.items
            console.log(response.items)
            if (responseData) {
                CleanUpPostContent(responseData)
            } else {
                    setPostContent([])
            }     
            } catch (error) {
            console.log(error)
            
            }
        }
    GetPostContent()
}, [])

  return (
    <div>{PostContent.map((post , index) => {
        console.log(post)
    return(
        <div className="postcontent" key={index}>
        
       <h1> {post.postTitle}  </h1>
        <p> {documentToReactComponents(post.postDescription)} </p>
       <img src={post.postBackground} alt="travel" height= "350px" width="500px" />

       </div>
       
       
       
       
    )
    })}</div>
  )
}

export default GetPost;