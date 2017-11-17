import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions';

class Items extends Component {

	render() {
		return(
			<div className="Items">
				<button className="DeleteButton" title={"Delete " + this.props.item.name}
					onClick={this.handleDelete.bind(this)}>
					<i className="fa fa-minus-circle" aria-hidden="true"></i>
				</button>
				<div className="itemName">{this.props.item.name}</div>
				<div className="itemPrice">{"$" + this.props.item.price}</div>
			</div>
		);
	}

	handleDelete(event) {
		this.props.removeItem(this.props.item.id);
	}
}

const mapActionsToProps = {
	removeItem
}

export default connect(null, mapActionsToProps)(Items);