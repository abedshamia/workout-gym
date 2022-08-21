/** @jsx jsx */
import {  jsx } from '@emotion/core'
import GymLogo from "../../images/GymLogo.png";


const NavbarLogo = () => {
    return (
        <a href='#hero'>
        <img src={GymLogo}
        alt="" />
        </a>
    )
}


export default NavbarLogo;