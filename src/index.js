import React from 'react';
import ReactDOM from 'react-dom';
import Header from './modules/header';
import Gnomes from './modules/gnomes';
import './styles/style.css';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Gnomes />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
