import React from 'react';
import avatar from '../assets/avatar.png';
import logo from '../assets/logo.png';
import '../styles/header.css';

module.exports = class Header extends React.Component {
  render(){
    return (
      <div className="container-fluid header">
        <div className="row header-elements">
          <div className="col-sm-2"><img src={logo} /></div>
          <div className="col-sm-1"></div>
          <div className="col-sm-1"><a href="#" className="header-elements">Gnomes</a></div>
          <div className="col-sm-4"><a href="#" className="header-elements">Trolls</a></div>
          <div className="col-sm-2"><a href="#" className="btn btn-danger btn-md">Create Monster</a></div>
          <div className="col-sm-2"><a href="#" className="header-profile" >
            <div className="header-profile">
              <div className="header-profile-avatar">
                <img src={avatar} />
              </div>
              <div className="header-profile-name">
                <b>Robert Łabuś</b><br/> Game Master
              </div>
            </div>
          </a>
        </div>
      </div>
      </div>
    )
  }
}
