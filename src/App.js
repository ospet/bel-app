import React, {useEffect} from 'react';
import {Layout} from 'antd';
import './App.less';
import {Auth0Provider} from '@auth0/auth0-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './home/Home';
import BelMenu from './menu/BelMenu';
import Account from './account/Account';

function App() {
  useEffect(() => {
    const reloadOnNewVersion = async () => {
      if (window.location.hostname !== 'localhost' ) {
        try {
          let res = await fetch(`/version.json`)
          console.log(res.data);
          if ( localStorage.appVersion !== res.data.version ) {
            console.log(`reloading with version ${res.data.version}`); // TODO remove this line
            localStorage.appVersion = res.data.version;
            window.location.reload();
          }
        } catch (e) {
          console.log(e); // TODO remove this line
        }
      }
    }
    reloadOnNewVersion();
  }, [])

  return (
    <Router>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENTID}
        redirectUri={window.location.origin}
      >
        <div className="App" data-testid="app-root">
          <Layout style={{ minHeight: '100vh' }}>
            <BelMenu />
            <Layout.Content>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/account" component={Account} />
                <Route path="/tasks" component={Home} />
              </Switch>
            </Layout.Content>
          </Layout>
        </div>
      </Auth0Provider>
    </Router>
  );
}

export default App;
