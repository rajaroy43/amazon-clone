import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {
  IconFlagIN
} from 'material-ui-flags';
function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
    <MenuIcon className="header__menu" />
    <div className="header__content">
      <div className="link">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
          <span className="in-header__logo">.in</span>
        </Link>
      </div>
    </div>
    <div className="header__search">
      <input type="text" name="" id="" className="header__searchInput" />
      <SearchIcon className="header__searchIcon" />
    </div>
    <div className="header__options">
      <div className="header__nav">
        <Link to="/selectlanguage" className="header__IconIndia">
          <span>
            <IconFlagIN fontSize="large" />
          </span>
          <span>
            <ArrowDropDownIcon fontSize="large" />
          </span>
        </Link>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__Link">
          <div className="header__login" onClick={login}>
            <span className="header__Link1">Hello, {user?(user.email.length>15
            ?user.email.slice(0,10):user.email):"sign in"}</span>
            <span className="header__Link2">
             Accounts & Lists <ArrowDropDownIcon />
            </span>
            <span className="sign__out">{user?"Sign out":""}</span>
          </div>
        </Link>
      </div>
      <div className="header__nav">
        <Link to="/orders" className="header__Link">
          <span className="header__Link1">Returns</span>
          <span className="header__Link2">& Orders</span>
        </Link>
      </div>
      <div className="header__nav">
        <Link to="/" className="header__Link">
          <span className="header__Link1">Try</span>
          <span className="header__Link2">
            Prime <ArrowDropDownIcon />
          </span>
        </Link>
      </div>
      <div className="header__nav">
        <Link to="/checkout" className="header__Link">
          <div className="header__basket">
            <span className="header__Link2 basket__count">
              {basket?.length}
            </span>
            <ShoppingBasketIcon />
            <span className="header__Link2">cart</span>
          </div>
        </Link>
      </div>
    </div>
  </nav>
  );
}

export default Header;
