import React from "react";
import './Navbar.css';

function Navbar({ activeTab, setActiveTab }) {
    const handleItemClick = (item) => {
        setActiveTab(item.toLowerCase());
    };

    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    Anonmyous
                </div>
                <ul className="nav-links">
                    <li className="nav-item">
                        <button 
                            className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
                            onClick={() => handleItemClick('home')}
                        >
                            Home
                        </button>
                    </li>
                    <li className="nav-item">
                        <button 
                            className={`nav-button ${activeTab === 'feed' ? 'active' : ''}`}
                            onClick={() => handleItemClick('feed')}
                        >
                            Feed
                        </button>
                    </li>
                    <li className="nav-item">
                        <button 
                            className={`nav-button ${activeTab === 'search' ? 'active' : ''}`}
                            onClick={() => handleItemClick('search')}
                        >
                            Search
                        </button>
                    </li>
                    <li className="nav-item">
                        <button 
                            className={`nav-button ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => handleItemClick('profile')}
                        >
                            Profile
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;