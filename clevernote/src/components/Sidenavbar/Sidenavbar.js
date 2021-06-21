import React from 'react';
import './Sidenavbar.css';

const Sidenavbar = () => {
    return (
        <div className="sidenavbar">
            <div className="sidenavbar-top">
                <div className="sidenavbar-top__profile">
                    <div className="profile-icon">
                        M
                    </div>
                    <div className="profile-title">
                        Matt Mores
                        <i className="fas fa-user-circle"></i>
                    </div>
                </div>
                <div className="sidenavbar-top__search">
                    <div className="search-block">
                        {/* <FontAwesomeIcon icon={faSearch} /> */}
                        <i className="fas fa-search"></i>
                        <input className="input" placeholder="Search" />
                    </div>
                </div>
                <div className="sidenavbar-top__create-note">
                    <div className="create-note-btn">
                        <i className="far fa-plus-square"></i>
                        <div className="title">
                            New Note
                        </div>
                    </div>
                </div>
                <div className="sidenavbar-top__menu-item">
                    <ul>
                        <li className="menu-li-1">
                            <i className="far fa-star"></i>
                            Thing 1
                        </li>
                        <li className="menu-li-2">
                            <i className="far fa-star"></i>
                            Thing 2
                        </li>
                        <li className="menu-li-3">
                            <i className="far fa-star"></i>
                            Thing 3
                        </li>
                        <li className="menu-li-4">
                            <i className="far fa-star"></i>
                            Thing 4
                        </li>
                    </ul>
                </div>
                <div className="sidenavbar-bottom">
                    <div className="sidenavbar-bottom__need-help">
                        <i className="fas fa-shoe-prints"></i>
                        Matt Mores Production LLC
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidenavbar;
