import React from 'react';
import {NavLink} from "react-router-dom";

const Layout =(props)=> {
 
        return (
            <div>
                <div className="navbar  shadow bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/service/'}>Service</NavLink></li>
                            <li><NavLink to={'/about/'}>About</NavLink></li>
                            <li><NavLink to={'/projects/'}>Project</NavLink></li>
                            <li><NavLink to={'/blog/'}>Blog</NavLink></li>
                            <li><NavLink to={'/contact/'}>Contact</NavLink></li>
                        </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/service/'}>Service</NavLink></li>
                            <li><NavLink to={'/about/'}>About</NavLink></li>
                            <li><NavLink to={'/projects/'}>Project</NavLink></li>
                            <li><NavLink to={'/blog/'}>Blog</NavLink></li>
                            <li><NavLink to={'/contact/'}>Contact</NavLink></li>
                        </ul>
                    </div>
                
                </div>

                <div>
                    {props.children}
                </div>


                <div>
                    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:place-self-center">
                            <aside className="items-center">
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    className="fill-current"
                                >
                                    {/* Your SVG path here */}
                                </svg>
                                <p>Copyright © 2023 - All right reserved</p>
                            </aside>
                            <nav className="grid grid-cols-3 gap-4 md:justify-self-end">
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        {/* Your SVG path here */}
                                    </svg>
                                </a>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        {/* Your SVG path here */}
                                    </svg>
                                </a>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                        {/* Your SVG path here */}
                                    </svg>
                                </a>
                            </nav>
                        </div>
                    </footer>
                </div>
            </div>
        );
    
}

export default Layout;