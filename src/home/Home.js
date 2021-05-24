import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from '../login/Login';
import TaskList from '../tasks/TaskList'

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <h1 data-testid="app-title">BEL Block Economy of Life</h1>
      {
        isAuthenticated
        ? <div data-testid='home-contents'><TaskList/></div>
        : <Login />
      }
    </>
  )
}

export default Home;