import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('gnomes');

class Gnomes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfGnomes : this.getGnomes()
    };
  }
  render(){
    return (
      <div className="container-fluid gnome">
        <div className="row">
          <h1> Gnomes</h1>
          <div className="list-group">
            {this.createGnomeList()}
          </div>
        </div>
      </div>
    )
  }
  createGnomeList() {
    if (this.state.arrayOfGnomes){
      return (this.state.arrayOfGnomes.map(gnome => (
        <a href="#" className="list-group-item" key={gnome.id}>
        <container>
        <div>
        <ul className="gnome">
        <li className="gnome--name">{gnome.name}</li>
        <li className="gnome--age"> Age: {gnome.age}</li>
        </ul>
        </div>
        <div className="gnome--strenght">
         {gnome.strenght}/100 <b className="gnome-list">Strenght</b>
        </div>
        </container>
        </a>)))
      }
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
}

ReactDOM.render(
  React.createElement(Gnomes),
  container
);
