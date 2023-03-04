import React, { useContext } from 'react';

// styles
import classes from './Home.module.css';

// store
import AuthContext from '../../store/auth-context';

// components
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const Home = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={ctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
