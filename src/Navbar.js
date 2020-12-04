import React, { useState } from 'react'
import { animate } from './animate'
import { Bars, Close, Item, NavbarContainer, NavbarItems, NavbarLogo } from './NavbarStyle'

const Navbar = () => {

    const [open, setopen] = useState(false)


    const openHandler = () => {
        setopen(!open)
    }


    return (
        <NavbarContainer> 
            {open ? <Close onClick={openHandler} /> : <Bars onClick={openHandler} />}           
            <NavbarItems open={open} > 
                <Item
                    variants={animate}
                    initial="hidden"
                    animate="visible"
                >
                    Home
                </Item>
                <Item>
                    Contact
                </Item>
                <Item>
                    Services
                </Item>
                <Item>
                    About
                </Item>
            </NavbarItems>
        </NavbarContainer>
    )
}

export default Navbar
