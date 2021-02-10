import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import youtubeLogo from '../../images/youtube-logo.png';
import kasparasImg from '../../images/kd.jfif';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './header.scss';


const Header = () => {
  const [searchbarState, setSearchBarState] = useState(false);
  const [sidebarState, setSidebarState] = useState(false);
  const [input, setInput] = useState('');

  // functions
  // toggle search bar state
  const showSearchbar = () => {
    setSearchBarState((prevState) => {
      return !prevState;
    });
  };



  const sidebarStateHandler = () => {
    setSidebarState(prevState => {
      return !sidebarState
    })
  }

  return (
    <div className="header">
      <div className={`header__left ${!searchbarState  && `hide`}`}>
        <MenuIcon className="bars" onClick={sidebarStateHandler}/>
        <img src={youtubeLogo} alt="youtube" className="youtube__image" />
      </div>

      <div
        className={`header__center ${!searchbarState && `show`}`}
      >
        <ArrowBackIcon
          className={`arrow__icon ${!searchbarState && `show`}`}
          onClick={() => showSearchbar()}
        />
        <input
          type="text"
          className="textField"
          placeholder="Search"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          maxlength="20"
        />
        <SearchIcon className="header__searchBtn" />
      </div>

      <div className={`header__right ${!searchbarState && `hide`}`}>
        <SearchIcon
          className="searchBtn__mobile"
          onClick={() => showSearchbar()}
        />
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar alt="Cindy Baker" src={kasparasImg} />
      </div>
    </div>
  );
};

export default Header;
