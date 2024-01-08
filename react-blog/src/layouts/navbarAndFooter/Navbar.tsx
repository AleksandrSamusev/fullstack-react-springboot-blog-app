import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {isUserLoggedIn, logout} from "../../services/AuthService";

export const Navbar = () => {

    const isAuth = isUserLoggedIn();
    const navigator = useNavigate();

    function handleLogout() {
        logout();
        navigator('/home');
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3 border shadow-lg'>
            <div className='container-fluid'>
                <span className='navbar-brand'>My Blog App</span>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                        data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false'
                        aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/home'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/search'>Search Articles</NavLink>
                        </li>

                        {isAuth &&
                            <NavLink className='nav-link' to='/dashboard'>My Dashboard</NavLink>
                        }
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        {!isAuth ?
                            <>
                                <li className='nav-item m-1'>
                                    <NavLink type='button' className='btn btn-outline-light'
                                             to='/register'>Register</NavLink>
                                </li>
                                <li className='nav-item m-1'>
                                    <NavLink type='button' className='btn btn-outline-light' to='/login'>Login</NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li className='nav-item m-1'>
                                    <NavLink type='button' className='btn btn-outline-light' to='/home' onClick={handleLogout}>Logout</NavLink>
                                </li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
}