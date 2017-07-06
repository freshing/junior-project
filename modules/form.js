import React from 'react';
import ReactDOM from 'react-dom';



var GnomeForm = class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: '',
      strenght: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeStrenght = this.handleChangeStrenght.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }
  handleChangeName(event){
    this.setState({name: event.target.value});
  }
  handleChangeAge(event){
    this.setState({age: event.target.value});
  }
  handleChangeStrenght(event){
    this.setState({strenght: event.target.value});
  }
  sendForm(event){
    event.preventDefault();
    console.log(this.props.id);
    fetch('http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes/' + this.props.id, {
  	   method: 'PATCH',
       body: JSON.stringify( { name: this.state.name, age: this.state.age, strenght: this.state.strenght } )
     }).then(function(response) {
  	     response.json().then(function(data){
         console.log(data);
         })
      }).catch(function(err) {
        alert('Something went wrong. Try again')
  	    console.log(err);
      });
  }
  render(){
    return (
      <div className="form">
      <form onSubmit={this.sendForm} className="form-content">
      <div>
         <label>
           Name:
           <input type="text" value={this.state.name} onChange={this.handleChangeName} />
         </label>
         </div>
         <div>
         <label>
           Age:
           <input type="text" value={this.state.age} onChange={this.handleChangeAge} />
         </label>
         </div>
         <div>
         <label>
           Strenght:
           <input type="text" value={this.state.strenght} onChange={this.handleChangeStrenght} />
         </label>
         </div>
         <input type="submit" value="Submit" />
       </form>
       </div>
    )
  }
}


module.exports = GnomeForm;
