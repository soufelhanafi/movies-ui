/* eslint-disable react/no-children-prop */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateView from './private/index';
import PublicView from './public/index';

import 'antd/es/layout/style/css';
import './styles.css';

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
    const { isLogged } = this.props.user;
    const changeLayout = () => {
      if (isLogged) {
        return <PrivateView routes={routes} children={children} />;
      }
      return <PublicView routes={routes} children={children} />;
    };
    return changeLayout();
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(MainView);
