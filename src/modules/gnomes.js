import React from 'react';
import ReactDOM from 'react-dom';
import GnomeForm from './form.js';
import '../styles/gnomes.css';
import loading from '../assets/loading.gif';
import gnomeImage from '../assets/g.png';

module.exports = class Gnomes extends React.Component {
  constructor() {
    super();
    var gnomeForm;
    this.state = {
      page: 1,
      arrayOfGnomes : this.getGnomes()
    };
    this.loadNextPage = this.loadNextPage.bind(this);
    this.loadPrevPage = this.loadPrevPage.bind(this);
  }
  render(){
    return (
      <div className="container-fluid gnome">
        <div id="form"></div>
        <div className="row">
           Gnomes
           <div>
          {this.state.arrayOfGnomes ? this.showGnomes() : <img className="gnome-loading" src={loading} />}
          </div>
        </div>
      </div>
    )
  }
  loadNextPage(){
    this.setState({page: this.state.page+1});
  }
  loadPrevPage(){
    this.setState({page: this.state.page-1});
  }
  createGnomeList() {
    if (this.state.arrayOfGnomes){
      return (this.state.arrayOfGnomes.map((gnome, index) => this.createGnome(gnome, index)));
      }
  }
  createGnome(gnome, index){
   if (index >= (this.state.page-1)*100 && index < this.state.page*100)
   {
      return (
        (
          <a onClick={() => this.onClick(gnome.id)} className="list-group-item" key={gnome.id}>
            <div className="gnome-container">
              <div className="gnome-image"><img src={gnomeImage} /></div>
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
   }
  }
  showGnomes(){
    return(
      <div className="list-group">
        {this.createGnomeList()}
        <div className="row">
          <div className="col-sm-1"><input type="button" className="btn btn-danger btn-md"
            disabled={(this.state.page==1) ? 'disabled' : null} value="previous"
            onClick={this.loadPrevPage} /></div>
          <div className="col-sm-10"></div>
          <div className="col-sm-1" float="right"><input type="button" className="btn btn-danger btn-md" value="next"
            onClick={this.loadNextPage} disabled={(this.state.page>=this.state.arrayOfGnomes.length/100) ? 'disabled' : null}/></div>
        </div>
      </div>
    )
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
