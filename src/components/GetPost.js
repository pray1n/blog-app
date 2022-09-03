import React, { useState, useEffect, } from 'react'
import { client } from '../client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const GetPost = () => {
    const [PostContent, setPostContent] = useState([])
    

const CleanUpPostContent = (rawData) => {
    
    const CleanPostContent = rawData.map((post) => {
        
        const {fields, sys} = post
        const {id} = sys
        const postTitle = fields.title
        const postContentText = fields.content
        const postBackground = 'https:' + fields.media[0].fields.file.url
        const postDate = fields.date
        const postTag = fields.tag
        const updatedPost = {id, postTitle, postContentText, postBackground, postDate, postTag}
       
        return updatedPost
        
        
        
    })
    
    setPostContent(CleanPostContent)
    
}



useEffect(() => {
    const GetPostContent = async () => {
        try {
            const response = await client.getEntries({ 'metadata.tags.sys.id[in]': 'barcelona',})
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
        <p className='postDate'> posted on  {post.postDate} </p>
        <img src={post.postBackground} alt="travel" height= "350px" width="500px" />
        <p className='postContent'> {documentToReactComponents(post.postContentText)} </p>
        
       
       
       <hr></hr>
    </div>
       
       
       
       
       
    )
    })}</div>
  )
}

export default GetPost;