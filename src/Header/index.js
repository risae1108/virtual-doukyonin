import React, {Component} from 'react';
import './style.css';
import Logo from '../../src/img/logo.png';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import axios from 'axios'


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "あ",
      userStatus: 0
    }
  }

  async get_json() {
    const api = axios.create();
    try {
      var response = await api.get('http://18.191.152.221:5000/test_origin/27bda048-4eba-5327-8d92-97d6028a1643');
      console.log(response.data.data.name)
      this.setState({
        userName: response.data.data.name,
        userStatus: response.data.data.status
      });
      this.forceUpdate()
    } catch (error) {
      return;
    }
  };

  componentDidMount(){
    this.get_json()
  }

  render() {
    return (
      <div className="root">
        <AppBar position="static" color="#fff">
          <Toolbar>
            <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="title">
              <img src={Logo} height="70"/>
            </Typography>
            <Button color="inherit">
              <p>{this.state.userName}</p></Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header
