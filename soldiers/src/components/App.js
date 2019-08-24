import React, { Component } from "react";
import PreviewCard from "./PreviewCard/PreviewCard";
import SetDetails from "./SetDetails/SetDetails";
import './App.less';
import '../styles/common.less';

class App extends Component {

	constructor(){
		super();
		this.state = {
			data:[],
			currentSet: null,
			searchString: ""
		}
	}

	componentDidMount(){
		fetch("data/data.json").then(response => response.json()).then(data => {this.setState({data})})
	}

	onSelectSet = (num) => {
		this.setState({currentSet:num});
	}

	searchSet = (e) => {
		console.warn (e.target.value);
		this.setState({searchString: e.target.value})
	}


	render() {
		const { data, currentSet, searchString } = this.state;
		const cards = data.filter(item=>item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1).map((item, i) => <PreviewCard currentSet={currentSet} key={i} data={item} onClick={() => this.onSelectSet(i)}/>)
		return (
			<div className="app_main">				
				<div className="outer_cont app_main__left"><div className="inner_cont filters_cont">
					My Soldiers Collection
					<input type="text" onChange={this.searchSet}/>
				</div></div>
				<div className={"outer_cont app_main__right"+(currentSet !== null ? "_narrow" : "")}><div className="inner_cont">{cards}</div></div>
				{currentSet !== null && <div className={"outer_cont app_main__details"}><div className="inner_cont"><SetDetails data={data[currentSet]}/><div className="bClose" onClick={() => this.onSelectSet(null)}>X</div></div></div>}
			</div>
		);
	}
}

export default App;