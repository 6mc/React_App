import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

  constructor(props) {
super(props);
       this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

          axios.get('http://localhost:4000/index')
        .then(res => console.log(res.data) );


//    this.values =coins

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
    var obj = {
      cryptocurrency_name: this.state.cryptocurrency_name,
      cryptocurrency_code: this.state.cryptocurrency_code
    };
     axios.post('http://localhost:4000/add', obj)
        .then(res => console.log(res));


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

            <table class="table">
  <thead> 
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Test</td>
      <td>Test</td>
      </tr>
    <tr>
      <td>Bitcoin</td>
      <td>1000+</td>
      </tr>
    <tr>
      <td>Litecoin</td>
      <td>100+</td>
      </tr>
  </tbody>
</table>
            </div>
    )
  }
}