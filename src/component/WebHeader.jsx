import React, { useState } from 'react'
import styles from "./WebHeader.module.css"
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { navBarAction } from '../store/navBarSlice';

export default function WebHeader() {
    const [navColor, setNavColor] = useState(false);
    const navbar=useSelector(store=> store.navbar)
    const dispatch=useDispatch();

    const navbarBackground = () => {
        if (window.scrollY >= 30) {
            setNavColor(true);
        }
        else {
            setNavColor(false);
        }
    }

    window.addEventListener('scroll', navbarBackground);
    return (
        <>
            <div className={`${navColor ? styles.navScroll : styles.webContainer}`}>
                <div className="container">
                    <header className="d-flex justify-content-center py-3">
                        <ul className="nav nav-pills">
                            <li className="nav-item"><Link to="/" className={`nav-link ${navbar === "Home" && "active"}`} aria-current="page" onClick={()=> dispatch(navBarAction.changeNav("Home"))}>Home</Link></li>

                            <li className="nav-item"><Link to="/course" className={`nav-link ${navbar === "Course" && "active"}`} onClick={()=> dispatch(navBarAction.changeNav("Course"))}>All Courses</Link></li>

                            <li className="nav-item"><Link to="/addcourse" className={`nav-link ${navbar === "AddCourse" && "active"}`} onClick={()=>dispatch(navBarAction.changeNav("AddCourse"))}>Add Course</Link></li>
                        </ul>
                    </header>
                </div>
            </div>
        </>
    )
}
