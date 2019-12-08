/* eslint-disable object-curly-newline */
import React from 'react';
import { Menu, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import userActions from '../../../redux/user/actions';

import './styles.scss';

class ProfilMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  logout = () => {
    this.props.dispatch({
      type: userActions.USER_LOGOUT
    });
  };

  showMenu = () => {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  };

  render() {
    const { showMenu } = this.state;
    const menu = (
      <Menu className='profil-menu-popover' onClick={this.showMenu}>
        <Menu.Item>Hi username</Menu.Item>
        <Divider />
        <Menu.Item>
          <Link to='/profil'>Profil</Link>
        </Menu.Item>
        <Divider />
        <Menu.Item>
          <Link to={'/update/password'}>Update Passowrd Passowrd</Link>
        </Menu.Item>
        <Divider />
        <Menu.Item onClick={this.logout}>Log out</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <span onClick={this.showMenu}>Profil</span>
        {showMenu ? menu : null}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(ProfilMenu);
