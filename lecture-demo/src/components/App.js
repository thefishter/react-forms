import React, {Component} from 'react';
import SauceContainer from './SauceContainer'


export default class extends Component {
	constructor() {
		super();
		
	}

	handlePayment (info) {
		console.log("what we're sending", info)
	}

	render() {
		let adj = 'Silly';
		let sauces = ['Franks', 'Sriracha', 'Tobasco']
		return(
			<div>
				<h1>A Somewhat {adj} Site</h1> 
				<SauceContainer saucesToList={sauces} whenSubmitted={this.handlePayment} />
			</div>
		)
	}

}