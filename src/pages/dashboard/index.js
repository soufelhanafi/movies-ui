import React from "react";
import { connect } from "react-redux";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    debugger;
  }

  world = () => {
    this.props.dispatch({ type: "world" });
  };

  joker = () => {
    this.props.dispatch({ type: "Joker" });
  };
  render() {
    const { hello, value } = this.props;
    return (
      <div>
        <button onClick={this.world}>world</button>
        <button onClick={this.joker}>joker</button>
        <h1>
          {hello} {value ? value : "What?"}
        </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Dashboard);
