import React, { useState, useEffect, } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { client } from '../client';

//https://worktotravel.de/about/
function Sidepanel() {
    const [SideContent, setSideContent] = useState([]);

    useEffect(() => {
        getSideContent();
    }, [])

    const getSideContent = async () => {
        try {
            const response = await client.getEntries({ 'metadata.tags.sys.id[in]': 'countries',});
            const responseData = response.items;
            if (responseData) {
                CleanUpContent(responseData);
            } else {
                setSideContent([]);
            }     
        } catch (error) {
            console.log(error);
        }
    }

    const CleanUpContent = (rawData) => {    
        const CleanContent = rawData.map((post) => {
            const {fields, sys} = post;
            const {id} = sys;
            const postTitle = fields.title;
            const updatedPost = {id, postTitle};     
            return updatedPost;            
        })
        setSideContent(CleanContent);
    }

    return (
        <div id="sidepanel">
            <h2>About Me</h2>
            <p>Thanks for checking out my website! I hope my content sparks your inner explorer and makes you a smarter traveler!</p>
            <img src="https://i0.wp.com/worktotravel.de/wp-content/uploads/DSC_0540-e1485716433565.jpg" />
            <h2>New</h2>
            <ul>
                {SideContent.map((content, index) => {
                    return (
                        <li key={content.id}>{content.postTitle}</li>
                    );
                })}
            </ul>
            <TextField id="standard-basic" label="Email here" />
            <Button variant="contained" color="primary">subscribe</Button>
        </div>
    )
}
export default Sidepanel;