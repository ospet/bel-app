import {useState} from 'react';
import {Layout, Menu} from 'antd';
import {BankFilled, PoweroffOutlined, BookFilled, LoginOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import logo from '../images/bel-logo.svg';

const {Sider} = Layout;

function BelMenu() {
  let [collapsed, setCollapsed] = useState(true);
  let history = useHistory();

  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

  let onCollapse = () => setCollapsed(!collapsed);

  const menuActions = {
    'menu-tasks': () => history.push(`/tasks`),
    'menu-account': () => history.push(`/account`),
    'menu-logout': () => logout({ returnTo: window.location.origin }),
    'menu-login': () => loginWithRedirect(),
  }

  let onMenuClick = item => {
    console.log(item);
    menuActions[item.key]();
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <img src={logo} style={{height: 32, margin: "5px 0"}} alt="BEL logo"/>
      <Menu onClick={onMenuClick}>
        {
          isAuthenticated
          ?
            <>
              <Menu.Item key="menu-tasks" icon={<BookFilled/>}>Mes tâches</Menu.Item>
              <Menu.Item key="menu-account" icon={<BankFilled/>}>Mon compte</Menu.Item>
              <Menu.Item key="menu-logout" icon={<PoweroffOutlined/>}>Déconnexion</Menu.Item>
            </>
          :
            <Menu.Item key="menu-login" icon={<LoginOutlined/>}>Connexion</Menu.Item>
        }

      </Menu>
    </Sider>
  );
}

export default BelMenu;
