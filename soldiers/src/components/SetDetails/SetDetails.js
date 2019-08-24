import React, { Component } from "react";

import './SetDetails.less';

class SetDetails extends Component {

	constructor(){
		super();
	}

	componentDidMount(){
		
	}

	render() {
		const { data } = this.props;
		return (
			 <div className= {"details_card"}>
				<div className="details_card__name">{data.name}</div>
				<img src={"../images/"+data.folder+"/"+data.img} className="details_card__image"/>
				<div className="details_card__manufacturer">{"Производитель: " + (data.manufacturer || "-")}</div>
				<div className="details_card__type">{"Тип: " + (data.type || "-")}</div>
				<div className="details_card__material">{"Материал: " + (data.material || "-")}</div>
				<div className="details_card__year">{"Год выпуска: " + (data.year || "-")}</div>
				<div className="details_card__scale">{"Масштаб: " + (data.scale || "-")}</div>
				<div className="details_card__desc">{"Описание: " + (data.desc || "-")}</div>
			</div>
		);
	}
}

export default SetDetails;