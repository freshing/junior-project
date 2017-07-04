import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');

class MainPage extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row">

        </div>
      </div>
    )
  }
}

ReactDOM.render(
  React.createElement(MainPage),
  container
);
