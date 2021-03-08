import React, { useState, useEffect } from 'react'
// import gatsby components
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
// burger menu
import { elastic as BurgerMenu } from 'react-burger-menu'
// import material-ui components
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import MenuIcon from '@material-ui/icons/Menu'
// import IconButton from '@material-ui/core/IconButton'
// import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import InstagramIcon from '@material-ui/icons/Instagram'
// import css
import './navbar.css'

const NavBar = ({ data, headersData }) => {
    const [state, setState] = useState({ mobileView: false, drawerOpen: false, isHidden: true })
    const [isNavBarScrolled, setIsNavBarScrolled] = useState(false)
    // const { mobileView, drawerOpen } = state
    const { mobileView, isHidden } = state

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900 ?
                setState((prevState) => ({ ...prevState, mobileView: true }))
                : 
                setState((prevState) => ({ ...prevState, mobileView: false }))
        }
        setResponsiveness()
        setState((prevState) => ({...prevState, isHidden: false }))
        window.addEventListener("resize", () => setResponsiveness())
        document.addEventListener("scroll", () => document.scrollingElement.scrollTop > 64 ? setIsNavBarScrolled(true) : setIsNavBarScrolled(false))
    }, []) // made to only run once

    const getMenuButtons = () => {
        return headersData.map(({ label, href },index) => {
            return (
                <Link style={{textDecoration: 'none',}} key={index} to={href}>
                    <Button >
                        {label}
                    </Button>
                </Link>
            )
        })
    }

    /**
     * display navbar for mobile devices
     */
    const displayMobile = () => {
        // const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }))
        // const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }))
        const getDrawerChoices = () => {
            return headersData.map(({ label, href },index) => {
                return (
                        <MenuItem component={Link} to={href} key={index}>
                            {label}
                        </MenuItem>
                )
            }) 
        }
        return (
            // <Toolbar>
            //     <IconButton
            //         {...{
            //             edge: "start",
            //             color: "inherit",
            //             "aria-label": "menu",
            //             "aria-haspopup": "true",
            //             onClick: handleDrawerOpen,
            //         }}
            //     >
            //         <MenuIcon />
            //     </IconButton>
            //     <Drawer
            //         {...{
            //             anchor: "left",
            //             open: drawerOpen,
            //             onClose: handleDrawerClose,
            //         }}
            //     >
            //         <div>{getDrawerChoices()}</div>
            //     </Drawer>
            // </Toolbar>
            <div id="outer-container">
                <BurgerMenu disableAutoFocus pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right >
                    <main id="page-wrap">
                        {getDrawerChoices()}
                        {/* <MenuItem> */}
                        <IconButton href="https://www.instagram.com/florafauna.hb/" style={{color: '#b8b7ad'}} aria-label={`Follow us on Instagram`} >
                            <InstagramIcon />
                        </IconButton>
                        {/* </MenuItem> */}
                        {/* <GatsbyImage
                            image={data.pngLogo.childImageSharp.gatsbyImageData}
                            style={{borderRadius: '100%'}} 
                            alt="Logo Mobile"
                        /> */}
                        <div style={{width: '50%'}}>
                            <Link to="/">
                                <StaticImage 
                                    src="../images/pngLogo.png" 
                                    alt="Flora-y-Fauna_logoMobile" 
                                    layout="constrained"
                                    placeholder="blurred"
                                />
                            </Link>
                        </div>
                        <h4>{data.site.siteMetadata.description}</h4>
                    </main>
                </BurgerMenu>
            </div>
        );
    }


    const displayDesktop = () => {
        return (
            <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{width: '20%'}}>
                    <Link to="/">
                        <StaticImage src="../images/logoName.png" alt="Flora-y-Fauna_logo" placeholder="blurred" />
                    </Link>
                </div>
                <div>
                    {getMenuButtons()}
                    <Button>
                        <IconButton href="https://www.instagram.com/florafauna.hb/" style={{color: 'rgba(0, 0, 0, 0.87)'}} aria-label={`Follow us on Instagram`} >
                            <InstagramIcon />
                        </IconButton>
                    </Button>
                </div>
            </Toolbar>
        );
    }

    return(
        <header>
            <AppBar hidden={isHidden} style={{backgroundColor: isNavBarScrolled ? 'rgba(242,242,242,1)' : 'rgba(242,242,242,0.75)', }} >
                { mobileView ? displayMobile() : displayDesktop() }
            </AppBar>
        </header>
    )
}

export default NavBar