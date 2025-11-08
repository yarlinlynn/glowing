import { useState } from "react";

import Logo from '../../assets/images/logo.png';
import HeaderBtns from "./HeaderButtons";
import Sidebar from "./Sidebar";


function Header() {

    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const toggleSidebar = () => setIsSidebarActive(!isSidebarActive);
    const closeSidebar = () => setIsSidebarActive(false);


  return (
    <>
        

        <header className="header">

            <div className="alert">
                <div className="container">
                    <p className="alert-text">Free Shipping On All U.S. Orders $50+</p>
                </div>
            </div>

            <div className="header-top" data-header>
                <div className="container">

                    <button className="nav-open-btn" aria-label="open menu" data-nav-toggler onClick={toggleSidebar}>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </button>

                    <div className="input-wrapper">
                        <input type="search" name="search" placeholder="Search product" className="search-field"/>

                        <button className="search-submit" aria-label="search">
                            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                        </button>
                    </div>

                    <a href="#" className="logo">
                        {/* <Logo width="179" height="26" alt="Glowing"/> */}
                        <img src={Logo} width="179" height="26" alt="Glowing"/>
                    </a>

                    <HeaderBtns/>

                    <nav className="navbar">
                        <ul className="navbar-list">

                            <li>
                                <a href="#home" className="navbar-link has-after">Home</a>
                            </li>

                            <li>
                                <a href="#collection" className="navbar-link has-after">Collection</a>
                            </li>

                            <li>
                                <a href="#shop" className="navbar-link has-after">Shop</a>
                            </li>

                            <li>
                                <a href="#offer" className="navbar-link has-after">Offer</a>
                            </li>

                            <li>
                                <a href="#blog" className="navbar-link has-after">Blog</a>
                            </li>

                        </ul>
                    </nav>

                </div>
            </div>

        </header>

        <Sidebar isActive={isSidebarActive} closeSidebar={closeSidebar}/>

    </>
  )
}

export default Header
