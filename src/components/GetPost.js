import React, { useState, useEffect, } from 'react';
import { client } from '../client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const GetPost = ({search, content}) => {
    const [PostContent, setPostContent] = useState([]);
    //console.log(content);

    const CleanUpPostContent = (rawData) => {
        const CleanPostContent = rawData.map((post) => {
            const {fields, sys} = post
            const {id} = sys
            const postTitle = fields.title
            const postContentText = fields.content
            const postBackground = 'https:' + fields.media[0].fields.file.url
            const postDate = new Date(fields.date).toLocaleDateString();
            const postTag = fields.tag
            const updatedPost = {id, postTitle, postContentText, postBackground, postDate, postTag}
            return updatedPost;
        })
        setPostContent(CleanPostContent);    
    }

    useEffect(() => {
        const GetPostContent = async () => {
            try {
                if(content === 'countries') {
                    const response = await client.getEntries({ 'metadata.tags.sys.id[in]': 'countries',});
                    const responseData = response.items;
                    if (responseData ) {
                        CleanUpPostContent(responseData);
                    } else {
                        setPostContent([]);
                    }   
                } else if(content === 'cities') {
                    const response = await client.getEntries({ 'metadata.tags.sys.id[in]': 'cities',});
                    const responseData = response.items;
                    if (responseData ) {
                        CleanUpPostContent(responseData);
                    } else {
                        setPostContent([]);
                    }   
                } else {
                    const response1 = await client.getEntries({ 'metadata.tags.sys.id[in]': 'countries',});
                    const response2 = await client.getEntries({ 'metadata.tags.sys.id[in]': 'cities',});
                    const responseData1 = response1.items;
                    const responseData2 = response2.items;
                    if (responseData1 && responseData2) {
                        const responseData = [...responseData1,...responseData2];
                        CleanUpPostContent(responseData);
                    } else {
                        setPostContent([]);
                    }     
                }
            } catch (error) {
                console.log(error);
            }
        }
        GetPostContent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="main">{PostContent.map((post , index) => {
            console.log(post)
            return (
                <div className="postContent" key={index}>
                    <h1> {post.postTitle}  </h1>
                    <p className='postDate'> posted on  {post.postDate} </p>
                    <img alt="travelpicture" src={post.postBackground}  height= "350px" width="500px" />
                    <p className='postContent'> {documentToReactComponents(post.postContentText)} </p>
                    <hr></hr>
                </div>
            )
        })}
        </div>
  )
}

export default GetPost;