import React from 'react';
import { Layout } from 'antd';
import { Redirect } from 'react-router-dom';

import Menu from '../../components/menu/index';
import TopBar from '../../components/topBar/index';

import 'antd/es/layout/style/css';
import './styles.scss';

const { Content } = Layout;

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      isReload: true
    };
  }

  render() {
    const { children, routes } = this.props;
    return (
      <Layout className='ant-layout'>
        <Menu routes={routes} />
        <Layout>
          <TopBar />
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
