import React, { Component } from 'react';

class ItemsForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			price: ""
		};
	}

	render() {

		return(
			<form className="ItemsForm" onSubmit={this.handleSubmit.bind(this)}>
				<p>
					<label>Name: </label>
					<input value={this.state.name} onChange={this.handleNameChange.bind(this)} />
				</p>
				<p>
					<label className="price">Price: </label>
					<input type="number" value={this.state.price} onChange={this.handlePriceChange.bind(this)} />
				</p>
				<p className="FormButton">
					<button type="submit" className="Add">Add</button>
				</p>
			</form>

		);
	}

	handleNameChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	handlePriceChange(event) {
		console.log(typeof event.target.value);
		this.setState({
			price: Number(event.target.value)
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit({
			name: this.state.name,
			price: Number(this.state.price)
		});
		this.setState({
			name: "",
			price: ""
		});
	}

}

export default ItemsForm;