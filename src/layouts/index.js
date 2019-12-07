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
    const { routes, children, isLogged } = this.props;
    const changeLayout = () => {
      if (isLogged) {
        // eslint-disable-next-line react/no-children-prop
        return <PrivateView routes={routes} children={children} />;
      }
      // eslint-disable-next-line react/no-children-prop
      return <PublicView routes={routes} children={children} />;
    };
    return changeLayout();

    // eslint-disable-next-line react/no-children-prop
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(MainView);
