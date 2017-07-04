import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('page');

var arrayOfGnomes = [
  {
    name: 'gnom 1',
    id: 1
  },
  {
    name: 'gnom 2',
    id: 2
  }
]

class MainPage extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <h1> Gnomes</h1>
          <div className="list-group">
            {createList(arrayOfGnomes)}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  React.createElement(MainPage),
  container
);

function createGnome(name){
  return(
      <a href="#" className="list-group-item">{name}</a>)
}

function createList(data){
    for (var i=0; i<data.length;i++)
    {
      createGnome(data[i].name);
    }
}


function getGnomes(){
  fetch('http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes', {
     method: 'GET'
   }).then(function(response) {
       response.json().then(function(data){
         return (<a href="#" className="list-group-item">gnom 1</a>)
       })
    }).catch(function(err) {
       console.log(err);
    })
}
