import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
               <br /><br />
        <h1>TO DO LIST</h1>
        <input type="text" placeholder="Add a tasks to do in a list" id="text" onKeyUp={this.props.addListItem} autoFocus></input>
        {/* { <ul>
          {this.props.listValues.map((values) =>
            <li key={values.key}>
              <input type="checkbox" onChange={this.props.completeItem} value={values.value}
                defaultChecked={false} />{values.value}
              <button onClick={this.props.deleteItem.bind(this, values)}>X</button>
            </li>)}
        </ul> } */}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addListItem : (e) => dispatch({type:'ADD'}),
    deleteItem : () => dispatch({type:"DELETE"})
  }
}

const mapStateToProps = (state) => {
  return{
    counter : state.counter
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App) ;
