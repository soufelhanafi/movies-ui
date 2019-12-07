import React from 'react';
import { Redirect } from 'react-router-dom';

class Authorize extends React.Component {
  render() {
    const { authorized, children, to } = this.props;
    if (!authorized) {
      return <Redirect to={to} />;
    }
    return <div>{children}</div>;
  }
}

export default Authorize;
