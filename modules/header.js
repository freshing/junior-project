import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('header');

class Header extends React.Component {
  render(){
    return (
      <div className="container-fluid header">
        <div className="row header-elements">
          <div className="col-sm-2"><img src="assets/logo.png" /></div>
          <div className="col-sm-1"></div>
          <div className="col-sm-1"><a href="#" className="header-elements">Gnomes</a></div>
          <div className="col-sm-4"><a href="#" className="header-elements">Trolls</a></div>
          <div className="col-sm-2"><a href="#" className="btn btn-danger btn-md">Create Monster</a></div>
          <div className="col-sm-2"><a href="#" className="header-profile" >
            <div className="header-profile">
              <div className="header-profile-avatar">
                <img src="assets/avatar.png" />
              </div>
              <div className="header-profile-name">
                <b>Robert Łabuś</b><br></br> Game Master
              </div>
            </div>
          </a>
        </div>
      </div>
      </div>
    )
  }
}
ReactDOM.render(
  React.createElement(Header),
  container
);
