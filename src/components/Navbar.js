import React from 'react'
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        // <div className="col-md-12 bg-dark py-2">
        <nav className="navbar bg-dark navbar-dark py-3">
            <Link to={"/"} className="navbar-brand m-auto">
                React Redux Contacts Book
            </Link>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enabel {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
            </div>
        </nav>
        // </div>
    )
}

export default Navbar
