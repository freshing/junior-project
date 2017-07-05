import React from 'react';
import ReactDOM from 'react-dom';



var GnomeForm = class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      valueName: '',
      valueAge: '',
      valueStrenght: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeStrenght = this.handleChangeStrenght.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }
  render(){
    return (
      <form onSubmit={this.sendForm} className="form">
         <label>
           Name:
           <input type="text" value={this.state.valueName} onChange={this.handleChangeName} />
         </label>
         <label>
           Age:
           <input type="text" value={this.state.valueAge} onChange={this.handleChangeAge} />
         </label>
         <label>
           Strenght:
           <input type="text" value={this.state.valueStrenght} onChange={this.handleChangeStrenght} />
         </label>
         <input type="submit" value="Submit" />
       </form>
    )
  }
  handleChangeName(event){
    this.setState({valueName: event.target.valueName});
  }
  handleChangeAge(event){
    this.setState({valueAge: event.target.valueAge});
  }
  handleChangeStrenght(event){
    this.setState({valueStrenght: event.target.valueStrenght});
  }
  sendForm(event){
    event.preventDefault();
    console.log(this.props.id);
    fetch('http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes/' + this.props.id, {
  	   method: 'PATCH'
     }).then(function(response) {
  	     response.json().then(function(data){
           console.log(data);
         })
      }).catch(function(err) {
  	     console.log(err);
      });
  }
}


module.exports = GnomeForm;
