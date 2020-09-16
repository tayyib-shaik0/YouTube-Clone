import React, { useState } from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
              <MenuIcon className="header__logoicon"/>
                <Link to={`/`}>
                    <img className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt="" />  
                </Link>
            </div>
            <div className="header__input">
                <input 
                onChange={(e) => setInputSearch(e.target.value)}
                 value={inputSearch} placeholder="  Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                     <SearchIcon className="header__inputButton"/>
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />            
                <AppsIcon className="header__icon" /> 
                <NotificationsIcon className="header__icon" />
                <Avatar
                    alt="Tayyib Shaik"
                    src="https://scontent.fhyd6-1.fna.fbcdn.net/v/t1.0-9/85232245_2658464387600877_199489316659920896_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=7tdL95PHygoAX8GXKUO&_nc_ht=scontent.fhyd6-1.fna&oh=ec273399bd8ce41e89d570b7d1c62df1&oe=5F623129"
                    />
            </div>           
        </div>
    )
}

export default Header
