// import React from 'react';
// import axios from 'axios';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';


// export default class Create extends Component {

//  onSubmit(e) {
//     e.preventDefault();
//     var obj = {
//       c_name: this.state.cryptocurrency_code,
//       c_code: this.state.cryptocurrency_code
//     };
//     axios.post('http://localhost:4000/add', obj).then(res => console.log(res.data));
    
//     this.setState({
//       cryptocurrency_name: '',
//       cryptocurrency_code: ''
//     })
//   }

// function App() {
//   return (
//  <div className="justify-content-center col-auto  row  text-center" style={{marginTop: 10}}>
//                 <h3 className="display-4 col-md-12">Add New Business</h3>
//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>Cryptocurrency Name </label>
//                         <input type="text" value={this.state.cryptocurrency_name} className="form-control"/>
//                     </div>
//                     <div className="form-group">
//                         <label>Cryptocurrency Code</label>
//                         <input type="text" value={this.state.cryptocurrency_code} className="form-control"/>
//                     </div>
//                     <div className="form-group">
//                         <input type="submit" value="Register Cryptocurrency" className="btn btn-primary"/>
//                     </div>
//                 </form>
//             </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

  constructor(props) {
super(props);
       this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      cryptocurrency_name: '',
      cryptocurrency_code: ''
     }
  }

  onChangeName(e) {
    this.setState({
      cryptocurrency_name: e.target.value
    });
  }
  onChangeCode(e) {
    this.setState({
      cryptocurrency_code: e.target.value
    })  
  }


  onSubmit(e) {
    e.preventDefault();
    const obj = {
      cryptocurrency_name: this.state.cryptocurrency_name,
      cryptocurrency_code: this.state.cryptocurrency_code
    };
    // axios.post('http://localhost:4000/business/add', obj)
  //      .then(res => console.log(res.data));
    
console.log (obj);

    this.setState({
       cryptocurrency_name: '',
       cryptocurrency_code: ''
    })
  }
 
  render() {
    return (
 <div className="justify-content-center col-auto  row  text-center" style={{marginTop: 10}}>
                <h3 className="display-4 col-md-12">Crypyolists</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Cryptocurrency Name </label>
                        <input type="text" value={this.state.cryptocurrency_name} onChange={this.onChangeName} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Cryptocurrency Code</label>
                        <input type="text" value={this.state.cryptocurrency_code} onChange={this.onChangeCode} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Cryptocurrency" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
    )
  }
}