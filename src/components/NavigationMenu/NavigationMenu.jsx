import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import classes from './NavigationMenu.module.css';

const NavigationMenu = () => (
  <div className={classes.NavMenu}>
    <div className={classes.mobileMenuIcon}>
      <MdMenu />
    </div>
    <ul className={classes.ul}>
      <div className={classes.closeNavIcon}>
        <MdClose />
      </div>
      <li className={classes.li}>
        <NavLink className={classes.a} to="/" exact>
          Home
        </NavLink>
      </li>
      <li className={classes.li}>
        <NavLink className={classes.a} to="/about">
          About
        </NavLink>
      </li>
      <li className={classes.li}>
        <NavLink className={classes.a} to="/projects">
          Projects
        </NavLink>
      </li>
      <li className={classes.li}>
        <NavLink className={classes.a} to="/contacts">
          Contacts
        </NavLink>
      </li>
    </ul>
  </div>
);

export default NavigationMenu;
