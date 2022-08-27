import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import useStyles from '@mui/material/useStyles'
import { Link } from 'react-router-dom'

function Header() {
    const classes = useStyles()

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <div className={classes.logo}>
                    <img
                        src="https://img.freepik.com/free-vector/creative-travel-logo-template_23-2148619516.jpg?w=826&t=st=1661601478~exp=1661602078~hmac=c76f0f2fc475a67c4405afe0fe51962a91742f9cf36850d6ed7beb37d04a11f7"
                        alt="logo"
                    />
                </div>
                <div className={classes.navLinks}>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/continents" className={classes.link}>
                        Continents
                    </Link>
                    <Link to="/cities" className={classes.link}>
                        Cities
                    </Link>
                    <Link to="/about" className={classes.link}>
                        About us
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
    /* <div className="headercontainer">
            <div className="headerflex">
                <p>Home</p>
                <p>Continents</p>
                <p>Cities</p>
            </div>
            <div className="newLogo">
                <img src="https://img.freepik.com/free-vector/creative-travel-logo-template_23-2148619516.jpg?w=826&t=st=1661601478~exp=1661602078~hmac=c76f0f2fc475a67c4405afe0fe51962a91742f9cf36850d6ed7beb37d04a11f7" />
            </div>
        </div> */
}

export default Header
