import React from "react";
import "../header/Navbar.css"
import { NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={`/Home`}>Practice</NavLink> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                 <NavLink className="nav-link" to={`/Guru`}>Guru</NavLink> 
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={`/Suraj`}>Suraj</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={`/Vishal`}>Vishal</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"to={`/Pravin`}>Pravin</NavLink>
                            </li>
                        </ul>
                        <NavLink className="nav-link" to={'/signin'}>LOGOUT</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;