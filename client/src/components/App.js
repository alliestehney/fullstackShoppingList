import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from "./Items.js";
import ItemsForm from "./ItemsForm.js";
import { addItem } from '../actions';
import { removeItem } from '../actions';

class App extends Component {

  render() {

    const itemsList = this.props.items.map(item => (
      <Items key={item.id} item={item}/>
      ));

    var total= 0;

    this.props.items.map((item) => 
      total+=item.price
    );

    console.log(total);

    return (
      <div className="App">
        <h3>Shopping List</h3>

        <div className="listItems">
          {itemsList}
          <p className="Total">Total: ${ total.toFixed(2) }</p>
          <ItemsForm onSubmit={this.props.addItem}/>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
    return {
        items: state.items   
    }
}

const mapActionsToProps = {
  addItem,
  removeItem
}

export default connect(mapStateToProps, mapActionsToProps)(App);
