import React, { useState, useEffect, useCallback} from 'react'
import { client } from '../client'

const GetPost = () => {
    const [PostContent, setPostContent] = useState([])
    const [IsPostContentLoading, setIsPostContentLoading] = useState([])

const CleanUpPostContent = useCallback((rawData) => {
    const CleanPostContent = rawData.map((post) => {
        const {sys, fields} = post
        const {id} = sys
        const postTitle = fields.postTitle
        const postDescription = fields.description
        const postBackground = fields.image.fields.file.url
        const updatedPost = {id }
        return updatedPost
    })
    setPostContent(CleanPostContent)
})

const GetPostContent = useCallback(async () => {
    setIsPostContentLoading(true)
    try {
        const response = await client.getEntries({ content_type: 'blogPost'})
        const responseData = response.items
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
}, [GetPostContent])

  return (
    <div>getPost</div>
  )
}

export default GetPost;