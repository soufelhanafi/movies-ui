/* eslint-disable class-methods-use-this */
import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import { Link } from 'react-router-dom';

import './styles.scss';

const { Sider } = Layout;

class WebMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { routes } = this.props;
    const { collapsed } = this.state;
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.toggle}
        className='mainSlider'
      >
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['0']}>
          <div className='logo' />
          {routes.map((item, index) => (
            <Menu.Item key={index}>
              <Link to={item.path}>
                <i className={`${item.icon} icons`} />
                {collapsed ? '' : item.title}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    );
  }
}

export default WebMenu;
