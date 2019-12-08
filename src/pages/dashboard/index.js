import React from 'react';
import { connect } from 'react-redux';
import Authorize from '../../components/authorize/index';

class Dashboard extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  world = () => {
    this.props.dispatch({ type: 'world' });
  };

  joker = () => {
    this.props.dispatch({ type: 'Joker' });
  };

  render() {
    const { hello, value } = this.props.dashboard;
    return (
      <Authorize authorized={true} to={'/login'}>
        <button onClick={this.world}>world</button>
        <button onClick={this.joker}>joker</button>
        <h1>
          {hello} {value || 'What?'}
        </h1>
      </Authorize>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Dashboard);
