import React, { Component } from "react";

import './Filter.less';

class Filter extends Component {

	constructor(){
		super();
	}

	datacomponentDidMount(){
		
	}

	render() {
		const { name, values, onRemove } = this.props;

		const valuesList = values.map((item,i)=> <div key={i}>
						<input type="checkbox" id={"type"+i} name={"type"+i}/>
						<label htmlFor={"type"+i}> {item}</label>
					</div>);
		return (
			<div className= "filter_card">
			 	<div className="filter_card__name">{name}</div>
			 	{valuesList}
			 	<div className="filter_card__bClose" onClick={onRemove}>X</div>
			</div>
		);
	}
}

export default Filter;