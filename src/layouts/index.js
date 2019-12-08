/* eslint-disable react/no-children-prop */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import PrivateView from './private/index';
import PublicView from './public/index';

import 'antd/es/layout/style/css';
import './styles.css';

const Layouts = { public: PublicView, private: PrivateView };
class MainView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      isReload: true
    };
  }

  isReload = () => {
    if (this.state.isReload) {
      this.setState({ isReload: false });
    }
  };

  render() {
    const { routes, children } = this.props;
    const { isLogged, isLoading } = this.props.user;
    // eslint-disable-next-line consistent-return
    const changeLayout = () => {
      if (isLoading) {
        return <Spin spinning={isLoading}></Spin>;
      }
      if (isLogged && !isLoading) {
        return <PrivateView routes={routes} children={children} />;
      }
      if (!isLogged && !isLoading) {
        return <PublicView routes={routes} children={children} />;
      }
    };
    return changeLayout();
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(MainView);
