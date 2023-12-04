import React from "react";
import Navbar from "./Navbar"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <Navbar></Navbar>
            <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/Suraj">Guru</Link> */}
            </li>
        </>

    )
}
export default Header;