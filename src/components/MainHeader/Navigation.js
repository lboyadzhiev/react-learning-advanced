import React, { useContext } from 'react';

// styles
import classes from './Navigation.module.css';

// store
import AuthContext from '../../store/auth-context';

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
