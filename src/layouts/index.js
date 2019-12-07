import React from 'react';
import { Redirect } from 'react-router-dom';
import PrivateView from './private/index';

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
    if (this.state.isReload) {
      this.setState({ isReload: false });
      return <Redirect to={'/dashboard'} />;
    }
    // eslint-disable-next-line react/no-children-prop
    return <PrivateView routes={routes} children={children} />;
  }
}

export default MainView;
