import React from 'react';
import { Layout, Icon } from 'antd';

import Menu from '../components/menu/index';

import 'antd/es/layout/style/css';
import './styles.css';

const { Header, Content } = Layout;

class MainView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  render() {
    const { children, routes } = this.props;
    return (
      <Layout className='ant-layout'>
        <Menu routes={routes} />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}></Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainView;
