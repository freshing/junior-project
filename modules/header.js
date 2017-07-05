import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('header');

class Header extends React.Component {
  render(){
    return (
      <div className="container-fluid header">
        <div className="row header--elements">
          <div className="col-sm-2"><img src="assets/logo.png" /></div>
          <div className="col-sm-1"></div>
          <div className="col-sm-1"><input type="button" value="Gnomes" onClick={this.getGnomes} /></div>
          <div className="col-sm-4">Trolls</div>
          <div className="col-sm-2"><a href="form.html" className="btn btn-danger btn-md">Create Monster</a></div>
          <div className="col-sm-2"><a href="#" >
            <div>
              <img src="assets/avatar.png" />
              Robert Łabuś<br></br> Game Master
          </div>
          </a>
        </div>
      </div>
      </div>
    )
  }
  getGnomes(){
    fetch('http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes', {
  	   method: 'GET'
     }).then(function(response) {
  	     response.json().then(function(data){
           console.log(data);
         })
      }).catch(function(err) {
  	     console.log(err);
      });
  }
}

ReactDOM.render(
  React.createElement(Header),
  container
);
