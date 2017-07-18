import React from 'react';
import '../styles/form.css';

module.exports = class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      age: '',
      strenght: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeStrenght = this.handleChangeStrenght.bind(this);
    this.closeForm = this.closeForm.bind(this);
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
    fetch('http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes/' + this.props.id, {
  	   method: 'PATCH',
       body: JSON.stringify( { name: this.state.name, age: this.state.age, strenght: this.state.strenght } )
     }).then(function(response) {
  	     response.json().then(function(data){
         data.error ? alert('Something went wrong. Try again') : this.updateGnomes(data);
       }.bind(this))
      }.bind(this)).catch(function(err) {
        alert('Something went wrong. Try again')
  	    console.log(err);
      });
  }
  closeForm(){
    this.setState({
      name: '',
      age: '',
      strenght: ''
    });
    form.style.display = 'none';
  }
  updateGnomes(data){
    this.closeForm();
    this.props.parent.state.arrayOfGnomes[data.id] = data;
    this.props.parent.forceUpdate();
  }
  render(){
    return (
      <div className="form">
      <form onSubmit={this.sendForm} className="form-content">
      <span className="close" onClick={this.closeForm}>&times;</span>
      <div>
        <div className="form-title">
          Edit Gnome #{this.props.id}
        </div>
         <label>
           Name:
           <input type="text" value={this.state.name} onChange={this.handleChangeName}  className="form-control" />
         </label>
         </div>
         <div>
         <label>
           Age:
           <input type="text" value={this.state.age} onChange={this.handleChangeAge} className="form-control" />
         </label>
         </div>
         <div>
         <label>
           Strenght:
           <input type="text" value={this.state.strenght} onChange={this.handleChangeStrenght} className="form-control" />
         </label>
         </div>
         <input type="submit" className="btn btn-danger btn-md" value="Submit" />
       </form>
       </div>
    )
  }
}
