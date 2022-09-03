import React, { useState, useEffect, } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { client } from '../client';

//https://worktotravel.de/about/
function Sidepanel() {
    const [SideContent, setSideContent] = useState([]);

    useEffect(() => {
        
    }, [])

    return (
        <div id="sidepanel">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
                sanctus est Lorem ipsum dolor sit amet.</p>
            <img src="https://i0.wp.com/worktotravel.de/wp-content/uploads/DSC_0540-e1485716433565.jpg" />
            <h2>New</h2>
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>consetetur sadipscing elitr</li>
                <li>sed diam voluptua</li>
                <li>At vero eos et accusam</li>
            </ul>
            <TextField id="standard-basic" label="Email here" />
            <Button variant="contained" color="primary">subscribe</Button>
        </div>
    )
}
export default Sidepanel;