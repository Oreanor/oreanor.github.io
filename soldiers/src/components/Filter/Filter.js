import React, { Component } from "react";

import "./Filter.less";

class Filter extends Component {
	state = {
		allCheck: true
	};

	toggleCheckAll = () => {
		const allCheck = !this.state.allCheck;
		this.props.onCheckAll(this.props.id, allCheck);
		this.setState({
			allCheck
		});
	};

	render() {
		const { id, name, values, checks, onRemove, onCheck } = this.props;

		const valuesList = values
			? values.map((item, i) => (
					<div key={i}>
						<input
							type="checkbox"
							id={"type" + i}
							name={"type" + i}
							checked={checks[i]}
							onChange={() => onCheck(id, i)}
						/>
						<label htmlFor={"type" + i}> {item}</label>
					</div>
			  ))
			: [];
		return (
			<div className="filter_card">
				<div className="filter_card__name">
					<input
						type="checkbox"
						id={"allCheck"}
						name={"allCheck"}
						checked={this.state.allCheck}
						onChange={this.toggleCheckAll}
					/>
					<label htmlFor="allCheck" className="filter_card__name-label">
						{name}
					</label>
				</div>
				<div className="filter_card__list">{valuesList}</div>
				<div className="filter_card__bClose" onClick={onRemove}>
					X
				</div>
			</div>
		);
	}
}

export default Filter;
