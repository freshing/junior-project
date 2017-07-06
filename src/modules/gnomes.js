import React from 'react';
import ReactDOM from 'react-dom';
import GnomeForm from './form.js';
import '../styles/style.css';

const container = document.getElementById('gnomes');

class Gnomes extends React.Component {
  constructor(props) {
    super(props);
    var gnomeForm;
    this.state = {
      arrayOfGnomes : this.getGnomes()
    };
  }
  render(){
    return (
      <div className="container-fluid gnome">
        <div className="row">
           Gnomes
          <div className="list-group">
            {this.createGnomeList()}
          </div>
        </div>
      </div>
    )
  }
  createGnomeList() {
    if (this.state.arrayOfGnomes){
      return (this.state.arrayOfGnomes.map((gnome, index) => this.createGnome(gnome, index)));
      }
  }
  createGnome(gnome, index){
  //  if (index<100)
  //  {
      return (
        (
          <a onClick={() => this.onClick(gnome.id)} className="list-group-item" key={gnome.id}>
            <div className="gnome-container">
              <div className="gnome-name">{gnome.name}</div>
                <div className="gnome-age"> Age: {gnome.age}</div>
                </div>
                <div className="progress gnome-progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70"
                    aria-valuemin="0" aria-valuemax="100" style={{width: gnome.strenght + '%'}}>
                  <span className="sr-only">70% Complete</span>
                  </div>
                </div>

                <div className="gnome-strenght">
                {gnome.strenght}/100 <b>Strenght</b>
            </div>
          </a>
        )
      )
  //  }
  }
  getGnomes(){
      fetch('http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes', {
         method: 'GET'
       }).then(function(response) {
           response.json().then(function(data){
             this.setState({arrayOfGnomes : data});
          }.bind(this))
        }.bind(this)).catch(function(err) {
           console.log(err);
        })

    }
    onClick(id) {
      this.gnomeForm ? form.style.display = 'block' : null;
      this.gnomeForm = ReactDOM.render(
        <GnomeForm id={id} parent={this}/>,
        document.getElementById('form')
      );
    }
}

ReactDOM.render(
  React.createElement(Gnomes),
  container
);

/*
<div className="progress gnome-progress">
  <div className="progress-bar-danger" role="progressbar" aria-valuenow={gnome.strenght}
    aria-valuemin="0" aria-valuemax="100" style={{width: gnome.strenght + '%'}}>
    {gnome.strenght + '%'}
  </div>
</div>
*/
