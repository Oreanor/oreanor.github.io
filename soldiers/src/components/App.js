import React, { Component } from "react";
import PreviewCard from "./PreviewCard/PreviewCard";
import SetDetails from "./SetDetails/SetDetails";
import Filter from "./Filter/Filter";
import "./App.less";
import "../styles/common.less";
import cookies from "./cookies";
import { filterOptionsNames, filterNames, filterProperties } from "./consts";

class App extends Component {
	constructor() {
		super();
		let filters = cookies.get("filters")
			? cookies
					.get("filters")
					.split("_")
					.map(item => parseInt(item))
			: [];
		this.state = {
			data: [],
			currentSet: null,
			searchString: cookies.get("searchString") || "",
			types: [false, true],
			filters: filters,
			filterValues: [],
			filterValuesChecks: []
		};
	}
	myRef = [];

	componentDidMount() {
		fetch("data/data.json")
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
				data.sort(this.sortBy());

				data.forEach((item, i) => {
					this.myRef[i] = React.createRef();
				});

				this.setState({ data, filterValues, filterValuesChecks });
			});
	}

	sortBy = () => {
		const { filters } = this.state;
		return function(a, b) {
			for (let i = 0; i < filters.length; i++) {
				const prop = filterProperties[filters[i]];
				if (a[prop] < b[prop]) {
					return -1;
				}
				if (a[prop] > b[prop]) {
					return 1;
				}
			}
			if (a["name"] < b["name"]) {
				return -1;
			}
			if (a["name"] > b["name"]) {
				return 1;
			}
			return 0;
		};
	};

	resortData = () => {
		let data = this.state.data.slice();
		data.sort(this.sortBy());
		this.setState({ data });
	};

	onSelectSet = num => {
		if (this.state.currentSet === null) {
			this.setState({ currentSet: num }, () => this.scrollToRef(num));
		} else {
			this.setState({ currentSet: num });
		}
	};

	scrollToRef = num => {
		if (num !== null)
			this.myRef[num].current.scrollIntoView({
				//behavior: "smooth",
				block: "start"
			});
	};

	searchSet = e => {
		this.setState({ searchString: e.target.value });
		cookies.set("searchString", e.target.value);
	};

	onCheckType = (e, num) => {
		let types = this.state.types.slice();
		types[num] = !types[num];
		this.setState({ types });
	};
	onAddFilter = e => {
		let filters = this.state.filters.slice();
		const val = e.target.value;
		if (!filters.includes(val)) {
			filters.push(parseInt(val));
			cookies.set("filters", filters.join("_"));
			this.setState({ filters, currentSet: null }, () =>
				this.resortData()
			);
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
		this.setState({ filterValuesChecks, filters, currentSet: null }, () =>
			this.resortData()
		);
	};

	onCheckFilterValue = (id, id2) => {
		let filterValuesChecks = this.state.filterValuesChecks.slice();
		let filterToCheck = filterValuesChecks[id].slice();
		filterToCheck[id2] = !filterToCheck[id2];
		filterValuesChecks[id] = filterToCheck;
		this.setState({ filterValuesChecks, currentSet: null });
	};

	onCheckAll = (id, allCheck) => {
		let filterValuesChecks = this.state.filterValuesChecks.slice();
		let filterToCheck = filterValuesChecks[id].slice();
		filterToCheck = filterToCheck.map(check => allCheck);
		filterValuesChecks[id] = filterToCheck;
		this.setState({ filterValuesChecks, currentSet: null });
	};

	render() {
		const {
			data,
			currentSet,
			searchString,
			types,
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

		//const cards = data.filter(item=>item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1).map((item, i) => <PreviewCard currentSet={currentSet} key={i} data={item} onClick={() => this.onSelectSet(i)}/>)

		let cards = [];
		let vals = filters.map(item => "");

		for (let i = 0; i < data.length; i++) {
			let toShow = true;
			for (let k = 0; k < filters.length; k++) {
				var ind = filterValues[filters[k]].indexOf(
					data[i][filterProperties[filters[k]]]
				);
				if (ind === -1 || !filterValuesChecks[filters[k]][ind]) {
					toShow = false;
					break;
				}
				let val = data[i][filterProperties[filters[k]]];
				if (val !== vals[k]) {
					cards.push(
						<div
							key={i + "_" + k}
							className={"subheader subheader__" + k}
						>
							{filterNames[filters[k]] + ": " + val}
						</div>
					);
					vals[k] = val;
				}
			}

			if (
				toShow &&
				(data[i].name
					.toLowerCase()
					.indexOf(searchString.toLowerCase()) !== -1 ||
					data[i].manufacturer
						.toLowerCase()
						.indexOf(searchString.toLowerCase()) !== -1)
			) {
				cards.push(
					<span key={i} ref={this.myRef[i]}>
						<PreviewCard
							currentSet={currentSet}
							data={data[i]}
							onClick={() => this.onSelectSet(i)}
						/>
					</span>
				);
			}
		}

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
							<SetDetails
								key={currentSet}
								data={data[currentSet]}
							/>
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
