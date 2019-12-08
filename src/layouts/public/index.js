import React from 'react';

import './styles.scss';

class PublicView extends React.Component {
  render() {
    const { children } = this.props;
    return <div className='public-view'>{children}</div>;
  }
}

export default PublicView;
