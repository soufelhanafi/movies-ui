import React from 'react';

class PublicView extends React.Component {
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default PublicView;
