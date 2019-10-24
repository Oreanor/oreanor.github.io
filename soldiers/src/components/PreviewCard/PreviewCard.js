import React, { Component } from "react";

import "./PreviewCard.less";

class PreviewCard extends Component {

	render() {
		const { data, onClick, currentSet } = this.props;
		return (
			<div
				className={
					"preview_card" +
					(currentSet === null ? "" : " preview_card__smaller")
				}
				onClick={onClick}
			>
				<div className="preview_card__name">{data.name +" ("+data.manufacturer+", "+data.scale+")"}</div>
				<div className="preview_card__image-cont">
					<img
						src={"../images/" + data.folder + "/" + data.img}
						className="preview_card__image"
					/>
				</div>
				{/*<div className="preview_card__scale">
					{"Масштаб: " + (data.scale || "-")}
				</div>
				<div className="preview_card__manufacturer">
					{"Производитель: " + (data.manufacturer || "-")}
				</div>
				<div className="preview_card__year">
					{"Год выпуска: " + (data.year || "-")}
				</div>*/}
			</div>
		);
	}
}

export default PreviewCard;