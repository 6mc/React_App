import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

  

state = {
    coins: []
  }



  componentDidMount() {


    axios.get("http://localhost:4000/index")
      .then(res => {
        var coins = res.data;
        this.setState({ coins });
      })
  
function update(state) {
  console.log("updating datas");
  axios.get("http://localhost:4000/index")
      .then(res => {
       // var coins = res.data;
        state.setState({ coins:res.data });
      }) 
}

setInterval(() => update(this), 300000)
  }

  constructor(props) {
super(props);
       this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

          axios.get('http://localhost:4000/index')
        .then(res => console.log(res.data) );


//    this.values =coins

    this.state = {
      coins:[],
      cryptocurrency_name: '',
      cryptocurrency_code: ''
     }
  }

  onChangeName(e) {
    this.setState({
      cryptocurrency_name: e.target.value
    });
  }



  remove(coin)
  {
    var todelete = {
       cryptocurrency_code: coin
    };

axios.post('http://localhost:4000/delete', todelete).then(res => 

    axios.get("http://localhost:4000/index").then(res => {
        var coins = res.data;
        this.setState({ coins });
      })
      );



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
     
axios.post('http://localhost:4000/add', obj).then(res => 

    axios.get("http://localhost:4000/index").then(res => {
        var coins = res.data;
        this.setState({ coins });
      })
      );


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

            <table class="table text-center row col-auto justify-content-center">
  
  <tbody>
    { this.state.coins.map(coin => 
    <tr>
      <td>{coin.cryptocurrency_name}</td>
      <td>{coin.cryptocurrency_code}</td>
      <td>{coin.price}€</td>
      <td><button type="button" onClick={() => this.remove(coin.cryptocurrency_code)} class="btn btn-outline-danger btn-sm">Delete</button></td>
      </tr>)}
  </tbody>
</table>
  
<script>
} 

</script>
            </div>
    )
  }
}