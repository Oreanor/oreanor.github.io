import React, { Component } from "react";

import "./SetDetails.less";

class SetDetails extends Component {

	render() {
		const { data } = this.props;
		const figures = data.figures
			? data.figures.map((item, i) => (
					<div key={i} className="figure_item">
						<img
							className="figure_item__image"
							src={"../images/" + data.folder + "/" + item.img}
							alt=""
						/>
						<div className="figure_item__name">{item.name}</div>
					</div>
			  ))
			: [];
		return (
			<div className={"details_card"}>
				<div className="details_card__name">{data.name}</div>
				<img
					src={"../images/" + data.folder + "/" + data.img}
					className="details_card__image"
				/>
				<div className="details_card__manufacturer">
					{"Производитель: " + (data.manufacturer || "-")}
				</div>
				<div className="details_card__type">
					{"Тип: " + (data.type || "-")}
				</div>
				<div className="details_card__material">
					{"Материал: " + (data.material || "-")}
				</div>
				<div className="details_card__year">
					{"Год выпуска: " + (data.year || "-")}
				</div>
				<div className="details_card__scale">
					{"Масштаб: " + (data.scale || "-")}
				</div>
				<div className="details_card__desc">
					{"Описание: " + (data.desc || "-")}
				</div>

				<div className="figures_cont">{figures}</div>
			</div>
		);
	}
}

export default SetDetails;