import React from 'react';
import { Layout, Row, Col } from 'antd';
import ProfilMenu from './profilMenu/index';
import './styles.scss';

class TopBar extends React.Component {
  render() {
    return (
      <Layout.Header className='topBar'>
        <Row>
          <Col xs={20} sm={22}></Col>
          <Col xs={4} sm={2} className='profil-menu'>
            <ProfilMenu />
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}

export default TopBar;
