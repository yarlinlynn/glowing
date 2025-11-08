import Logo from "../../assets/images/logo.png";

function Sidebar( { isActive, closeSidebar } ) {
    return (
        <>
            {/* MOBILE NAVBAR */}

            <div className="sidebar">
                <div className={`mobile-navbar ${isActive ? "active" : ""}`} data-navbar>

                <div className="wrapper">
                    <a href="#" className="logo">
                    <img src={Logo} width="179" height="26" alt="Glowing"/>
                    </a>

                    <button className="nav-close-btn" aria-label="close menu" data-nav-toggler onClick={closeSidebar}>
                        <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                    </button>
                </div>

                <ul className="navbar-list">

                    <li>
                        <a href="#home" className="navbar-link" data-nav-link onClick={closeSidebar}>Home</a>
                    </li>

                    <li>
                        <a href="#collection" className="navbar-link" data-nav-link onClick={closeSidebar}>Collection</a>
                    </li>

                    <li>
                        <a href="#shop" className="navbar-link" data-nav-link onClick={closeSidebar}>Shop</a>
                    </li>

                    <li>
                        <a href="#offer" className="navbar-link" data-nav-link onClick={closeSidebar}>Offer</a>
                    </li>

                    <li>
                        <a href="#blog" className="navbar-link" data-nav-link onClick={closeSidebar}>Blog</a>
                    </li>

                </ul>

                </div>

                <div className={`overlay ${isActive ? "active" : ""}`}onClick={closeSidebar}></div>
            </div>
        </>
    )
}

export default Sidebar