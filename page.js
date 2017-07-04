import 'react';
import 'react-dom';

var destination = document.querySelector("#container");

class Header extends React.Component {
  render() {
    return  ( <div>
        <div classname="col-sm-1"></div>
        <div classname="col-sm-1"><img src="assets/logo.png" /></div>
        <div classname="col-sm-2"></div>
        <div classname="col-sm-1">Gnoms</div>
        <div classname="col-sm-2">Trolls</div>
        <div classname="col-sm-2"><input type="button" text="Create monster"/></div>
        <div classname="col-sm-1"><img src="assets/avatar.png" /></div>
        <div classname="col-sm-1"></div>
      </div>
    );
  }
}
var header = ReactDOM.render(
  <div>
    <div classname="col-sm-1"></div>
    <div classname="col-sm-1"><img src="assets/logo.png" /></div>
    <div classname="col-sm-2"></div>
    <div classname="col-sm-1">Gnoms</div>
    <div classname="col-sm-2">Trolls</div>
    <div classname="col-sm-2"><input type="button" text="Create monster"/></div>
    <div classname="col-sm-1"><img src="assets/avatar.png" /></div>
    <div classname="col-sm-1"></div>
  </div>,
  destination
);

//module.exports =  header;
