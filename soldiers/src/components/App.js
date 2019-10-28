import React, { Component } from "react";
import PreviewCard from "./PreviewCard/PreviewCard";
import SetDetails from "./SetDetails/SetDetails";
import Filter from "./Filter/Filter";
import "./App.less";
import "../styles/common.less";
import cookies from "./cookies";
import {
	dataURL,
	filterOptionsNames,
	filterNames,
	filterProperties
} from "./consts";
import { sortBy } from "./utils";

class App extends Component {
	constructor() {
		super();
		const filters = cookies.get("filters")
			? cookies
					.get("filters")
					.split("_")
					.map(item => parseInt(item))
			: [];
		this.state = {
			data: [],
			currentSet: null,
			searchString: cookies.get("searchString") || "",
			filters: filters,
			filterValues: [],
			filterValuesChecks: []
		};
	}
	myRef = [];

	componentDidMount() {
		const that = this;
		window.onpopstate = function(event) {
			that.selectSetFromHash();
		};
		fetch(dataURL)
			.then(response => response.json())
			.then(data => {
				let filterValues = [[]];
				let filterValuesChecks = [[]];

				for (let i = 1; i < filterOptionsNames.length; i++) {
					filterValues.push([]);
					filterValuesChecks.push([]);
					for (let k = 0; k < data.length; k++) {
						const newVal = data[k][filterProperties[i]];
						if (!filterValues[i].includes(newVal)) {
							filterValues[i].push(newVal);
							filterValuesChecks[i].push(true);
						}
					}

					filterValues[i].sort();
				}
				data.sort(sortBy(this.state.filters));

				data.forEach((item, i) => {
					this.myRef[i] = React.createRef();
				});

				this.setState(
					{ data, filterValues, filterValuesChecks },
					this.selectSetFromHash
				);
			});
	}

	selectSetFromHash = () => {
		const id = window.location.hash.split("#")[1];
		if (id && id.length) {
			this.onSelectSet(id);
		} else {
			this.onSelectSet(null);
		}
	};

	resortData = () => {
		let data = this.state.data.slice();
		data.sort(sortBy(this.state.filters));
		this.setState({ data });
	};

	onSelectSet = id => {
		if (this.state.currentSet === null) {
			this.setState({ currentSet: id }, () => this.scrollToRef(id));
		} else {
			this.setState({ currentSet: id });
		}
		if (id !== null) {
			window.location.hash = id;
		} else {
			window.location.hash = "";
		}
	};

	scrollToRef = id => {
		if (id !== null && this.myRef[id] && this.myRef[id].current !== null) {
			this.myRef[id].current.scrollIntoView({
				//behavior: "smooth",
				block: "start"
			});
		}
	};

	searchSet = e => {
		this.setState({ searchString: e.target.value });
		cookies.set("searchString", e.target.value);
	};

	onAddFilter = e => {
		let filters = this.state.filters.slice();
		const val = e.target.value;
		if (!filters.includes(val)) {
			filters.push(parseInt(val));
			cookies.set("filters", filters.join("_"));
			this.setState({ filters }, () => this.resortData());
		}
	};

	onRemoveFilter = index => {
		let filters = this.state.filters.slice();

		let filterValuesChecks = this.state.filterValuesChecks.slice();
		let filterToReset = filterValuesChecks[filters[index]].slice();
		filterToReset = filterToReset.map(item => true);
		filterValuesChecks[filters[index]] = filterToReset;

		filters.splice(index, 1);
		cookies.set("filters", filters.join("_"));
		this.setState({ filterValuesChecks, filters }, () => this.resortData());
	};

	onCheckFilterValue = (id, id2) => {
		let filterValuesChecks = this.state.filterValuesChecks.slice();
		let filterToCheck = filterValuesChecks[id].slice();
		filterToCheck[id2] = !filterToCheck[id2];
		filterValuesChecks[id] = filterToCheck;
		this.setState({ filterValuesChecks });
	};

	onCheckAll = (id, allCheck) => {
		let filterValuesChecks = this.state.filterValuesChecks.slice();
		let filterToCheck = filterValuesChecks[id].slice();
		filterToCheck = filterToCheck.map(check => allCheck);
		filterValuesChecks[id] = filterToCheck;
		this.setState({ filterValuesChecks });
	};

	isFound = obj => {
		const { searchString } = this.state;
		return (
			obj.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ||
			obj.manufacturer
				.toLowerCase()
				.indexOf(searchString.toLowerCase()) !== -1
		);
	};

	getCards = () => {
		const {
			data,
			currentSet,
			filters,
			filterValues,
			filterValuesChecks,
			searchString
		} = this.state;

		let cards = [];
		let key = 0;
		let key2 = 0;

		const that = this;

		if (filters.length) {
			cards = getCardsWithHeaders(0, []);
			if (cards.length === 0) {
				cards.push(
					<div
						key={"hedaer" + key}
						className={"subheader subheader__2"}
					>
						Ничего не найдено
					</div>
				);
			}
		} else {
			for (let j = 0; j < data.length; j++) {
				if (this.isFound(data[j])) {
					cards.push(
						<span key={"card" + key2} ref={that.myRef[data[j].id]}>
							<PreviewCard
								currentSet={currentSet}
								data={data[j]}
								onClick={() => that.onSelectSet(data[j].id)}
							/>
						</span>
					);
					key2++;
				}
			}
		}

		function getCardsWithHeaders(level, ft) {
			let cards = [];
			for (let i = 0; i < filterValues[filters[level]].length; i++) {
				if (filterValuesChecks[filters[level]][i]) {
					const cardHeader = (
						<div
							key={"header" + key}
							className={"subheader subheader__" + level}
						>
							{filterNames[filters[level]] +
								": " +
								filterValues[filters[level]][i]}
						</div>
					);
					key++;

					let ft2 = ft.slice();
					ft2.push({
						name: filterProperties[filters[level]],
						value: filterValues[filters[level]][i]
					});
					if (level < filters.length - 1) {
						let deeperCards = getCardsWithHeaders(level + 1, ft2);
						if (deeperCards.length) {
							cards.push(cardHeader);
							cards = cards.concat(deeperCards);
						}
					} else {
						let hasOne = false;
						let cardRenders = [];
						for (let j = 0; j < data.length; j++) {
							if (that.isFound(data[j])) {
								let toShow = true;

								for (let k = 0; k < ft2.length; k++) {
									if (data[j][ft2[k].name] !== ft2[k].value) {
										toShow = false;
									}
								}
								if (toShow) {
									cardRenders.push(
										<span
											key={"card" + key}
											ref={that.myRef[data[j].id]}
										>
											<PreviewCard
												currentSet={currentSet}
												data={data[j]}
												onClick={() =>
													that.onSelectSet(data[j].id)
												}
											/>
										</span>
									);
									key++;
									hasOne = true;
								}
							}
						}
						if (hasOne) {
							cards.push(cardHeader);
							cards = cards.concat(cardRenders);
						}
					}
				}
			}
			return cards;
		}
		return cards;
	};

	render() {
		const {
			data,
			currentSet,
			searchString,
			filters,
			filterValues,
			filterValuesChecks
		} = this.state;

		const filterOptions = filterOptionsNames.map((item, i) => {
			return (
				<option
					key={i}
					value={i}
					disabled={i === 0 || filters.includes(i)}
				>
					{item}
				</option>
			);
		});
		const filtersAdded = filters.map((num, i) => (
			<Filter
				key={i}
				id={num}
				name={filterOptionsNames[num]}
				values={filterValues[num]}
				checks={filterValuesChecks[num]}
				onCheck={this.onCheckFilterValue}
				onRemove={() => this.onRemoveFilter(i)}
				onCheckAll={this.onCheckAll}
			/>
		));

		const cards = filterValues.length ? this.getCards() : null;

		const elementToShow =
			currentSet !== null && data.length
				? data.find(item => item.id === parseInt(currentSet))
				: {};

		return (
			<div className="app_main">
				<div className="outer_cont app_main__left">
					<div className="inner_cont filters_cont">
						<div className="filters_cont__title">
							Коллекция солдатиков
						</div>
						<input
							type="text"
							placeholder="Название/производитель"
							className="filters_cont__search"
							onChange={this.searchSet}
							value={searchString}
						/>
						<select
							className="select_common"
							value={0}
							onChange={this.onAddFilter}
						>
							{filterOptions}
						</select>
						<div>{filtersAdded}</div>
					</div>
				</div>

				<div
					className={
						"app_main__right" +
						(currentSet !== null ? "_narrow" : "")
					}
				>
					<div className="inner_cont">{cards}</div>
				</div>
				{currentSet !== null && (
					<div className={"outer_cont app_main__details"}>
						<div className="inner_cont">
							<SetDetails key={currentSet} data={elementToShow} />
							<div
								className="bClose"
								onClick={() => this.onSelectSet(null)}
							>
								X
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default App;
