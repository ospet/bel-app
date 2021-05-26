import {useState} from 'react';
import {Layout, Menu} from 'antd';
import {BankFilled, PoweroffOutlined, BookFilled, LoginOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import logo from '../images/bel-logo.svg';
import './BelMenu.less';

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

  const onMenuClick = item => {
    console.log(item);
    menuActions[item.key]();
  }

  const onLogoClick = () => history.push('/');

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className='bel-logo-container'><img className='bel-logo' src={logo} alt="BEL logo" onClick={onLogoClick}/></div>
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
