import React, { Component } from 'react';
import './MenuBar.less';

class MenuBar extends Component {
	componentDidMount() {}
	getMenuOptions = () => {
		const { data, active, onClickItem } = this.props;

		const options = [];

		const len = data.length;
		for (let i = 0; i < len; i++) {
			options.push(
				<div
					key={i}
					onClick={() => onClickItem(i)}
					className={
						'menubar__option' +
						(parseInt(active) === i ? '_selected' : '')
					}>
					{data[i]}
				</div>
			);
		}

		return options;
	};

	render() {
		return (
			<div className="menubar">{this.getMenuOptions()}</div>
		);
	}
}

export default MenuBar;
