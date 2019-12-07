import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

class Login extends React.Component {
  render() {
    return (
      <Row type='flex' justify='center' align='middle'>
        <Col span={24} />
        <Col xs={22} sm={20} md={16} lg={12}>
          Hello
        </Col>
      </Row>
    );
  }
}

function mapStateToprops(state) {
  return state;
}
export default connect(mapStateToprops)(Login);
