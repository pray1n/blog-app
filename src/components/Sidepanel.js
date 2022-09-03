import React, { useState, useEffect, } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { client } from '../client';

//https://worktotravel.de/about/
function Sidepanel(post) {
    const [SideContent, setSideContent] = useState([]);

    useEffect(() => {
        
    }, [])

    return (
        <div id="sidepanel">
            <h2>About Me</h2>
            <p>Thanks for checking out my website! I hope my content sparks your inner explorer and makes you a smarter traveler!</p>
            <img src="https://i0.wp.com/worktotravel.de/wp-content/uploads/DSC_0540-e1485716433565.jpg" />
            <h2>New</h2>
            <ul >
                <li>random post1</li>
                <li>random post2</li>
                <li>random post3</li>
                <li>random post4</li>
            </ul>
            <TextField id="standard-basic" label="Email here" />
            <Button variant="contained" color="primary">subscribe</Button>
        </div>
    )
}
export default Sidepanel;