import React, { Component } from "react";
import PreviewCard from "./PreviewCard/PreviewCard";
import SetDetails from "./SetDetails/SetDetails";
import Filter from "./Filter/Filter";
import './App.less';
import '../styles/common.less';

const filterOptionsNames = ["Добавить сортировку...","по типу","по материалу","по производителю","по масштабу"];
const filterNames = ["","Тип","Материал","Производитель","Масштаб"];
const filterProperties = ["","type","material","manufacturer","scale"];
class App extends Component {

	constructor(){
		super();
		this.state = {
			data:[],
			currentSet: null,
			searchString: "",
			types: [false, true],
			filters: [],
			filterValues: [],
		}
	}

	componentDidMount(){
		fetch("data/data.json").then(response => response.json()).then(data => {
			let filterValues = [[]];

			for(let i=1;i<filterOptionsNames.length;i++){
				filterValues.push([]);
				for(let k=0;k<data.length;k++){
					const newVal = data[k][filterProperties[i]];
					!filterValues[i].includes(newVal) && filterValues[i].push(newVal);
				}
			}
			this.setState({data, filterValues});
		})
	}



	onSelectSet = (num) => {
		this.setState({currentSet:num});
	}

	searchSet = (e) => {
		console.warn (e.target.value);
		this.setState({searchString: e.target.value})
	}

	onCheckType = (e, num) => {
		let types = this.state.types.slice();
		types[num] = !types[num];
		this.setState({types});
	} 
	onAddFilter = (e) => {
		let filters = this.state.filters.slice();
		const val = e.target.value;
		!filters.includes(val) && filters.push(parseInt(val));
		this.setState({filters})
	}

	onRemoveFilter = (index) => {
		let filters = this.state.filters.slice();
		filters.splice(index,1);
		this.setState({filters})
	}


	render() {
		const { data, currentSet, searchString, types, filters, filterValues } = this.state;
		const filterOptions = filterOptionsNames.map((item,i) => {
				console.warn(i);
				console.warn(filters);
				console.warn(filters.includes(i));
				return <option key={i} value={i} disabled={i===0 || filters.includes(i)}>{item}</option>})
		const cards = data.filter(item=>item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1).map((item, i) => <PreviewCard currentSet={currentSet} key={i} data={item} onClick={() => this.onSelectSet(i)}/>)
		
		const filtersAdded = filters.map((num,i) => <Filter key={i} name={filterOptionsNames[num]} values={filterValues[num]} onRemove={()=>this.onRemoveFilter(i)}/>)

		return (
			<div className="app_main">				
				<div className="outer_cont app_main__left">
					<div className="inner_cont filters_cont">
						<div className="filters_cont__title">My Soldiers Collection</div>
						<input type="text" placeholder="Поиск по названию" className="filters_cont__search" onChange={this.searchSet}/>
						<select
							className="select_common"
							value={0}
							onChange={this.onAddFilter}>
							{filterOptions}
						</select>
						<div>{filtersAdded}</div>
					</div>
				</div>
				
				<div className={"outer_cont app_main__right"+(currentSet !== null ? "_narrow" : "")}><div className="inner_cont">{cards}</div></div>
				{currentSet !== null && <div className={"outer_cont app_main__details"}><div className="inner_cont"><SetDetails data={data[currentSet]}/><div className="bClose" onClick={() => this.onSelectSet(null)}>X</div></div></div>}
			</div>
		);
	}
}

export default App;