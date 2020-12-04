import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa' 

export const NavbarContainer = styled(motion.nav) ` 
    display: flex ;
    flex-direction: row ;
    justify-content: space-between ;
    align-items: center ;
    color: #fff ;
    height: 80px ; 
    
`

export const NavbarLogo = styled(motion.a) ` 
    color: #fff ;
    font-family: 'PT Sans', sans-serif ; 
    font-weight: bold ; 
    text-transform: uppercase ; 
    cursor: pointer ; 
    padding: 0 1rem ; 

`

export const NavbarItems = styled(motion.ul) ` 
    opacity: ${({open}) => (open ? 1 : 0  )} ;
    display: flex ;
    flex-direction: column ;
    align-items: center ; 
    justify-content: center ; 
    list-style: none ;
    position: fixed ;
    width: 100vw ;
    height: 111vh ; 
    background: #bedcfa ; 
    z-index: 9 ; 
    margin-top: 80vh ; 
    transition: all 1s ease ; 
    clip-path: ${({open}) => (open ? 'circle(75%)' : 'circle(3% at 93% 13.8%)')};
`

export const Bars = styled(FaBars) ` 
    font-size: 1.5rem ;
    position: absolute ; 
    cursor: pointer ; 
    color: #da9ff9 ;
    top: 1.6rem  ; 
    right: 1.45rem ; 
    z-index: 9999 ;
`

export const Item = styled(motion.a) ` 
    color: #da9ff9 ; 
    z-index: 999 ; 
    padding: 1rem 40%  ; 
    font-weight: bold ; 
    font-size: 2rem ;
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ; 
    cursor: pointer ;
    margin: .2rem 0 ; 
    transition: all 0.3s ease ; 

    &:hover {
        background: #98acf8;
        color: #b088f9 ; 
        border-radius: 5px ;

    }
`

export const Close = styled(FaTimes) ` 
    font-size: 1.5rem ;
    position: absolute ; 
    cursor: pointer ; 
    color: #da9ff9 ;
    top: 1.6rem  ; 
    right: 1.45rem ; 
    z-index: 9999 ; 
`