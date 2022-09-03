import React, { useState, useEffect, } from 'react';
import { client } from '../client';

//https://worktotravel.de/about/
function Sidepanel() {
    const [SideContent, setSideContent] = useState([]);

    useEffect(() => {
        
    }, [])

    return (
        <div id="sidepanel">
            <h2>About us</h2>
            <p>If you want to start measuring performance in your app, pass a function</p>
            <img src="https://i0.wp.com/worktotravel.de/wp-content/uploads/DSC_0540-e1485716433565.jpg" />
        </div>
    )
}
export default Sidepanel;