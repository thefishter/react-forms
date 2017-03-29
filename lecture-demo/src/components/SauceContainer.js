import React, {Component} from 'react';
import SaucePic from './SaucePic';
import Payment from './Payment';

export default class extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedSauce : ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			selectedSauce : event.target.value
		})
	}



	render() {
		return (
			<div>
				{	this.state.selectedSauce ? <SaucePic sauce={this.state.selectedSauce} /> : <h3>Select a Sauce</h3>
				}
				<div>
					<label>
					Select a Hot Sauce:
					<select onChange={this.handleChange}>
						<option value="">None</option>
						{
							this.props.saucesToList.map((sauce, idx) => {
								return <option value={sauce} key={idx}>{sauce}</option>
							})
						}
					</select>
					</label>
				</div>
				{
					this.state.selectedSauce? <Payment whenSubmitted={this.props.whenSubmitted} /> : <div></div>
				}
			</div>

		)
	}


}