import React, { Component } from "react";
import PreviewCard from "./PreviewCard/PreviewCard";
import './App.less';
import '../styles/common.less';

class App extends Component {

	constructor(){
		super();
		this.state = {
			data:[],
			currentSet: null,
		}
	}

	componentDidMount(){
		fetch("data/data.json").then(response => response.json()).then(data => {this.setState({data})})
	}

	onSelectSet = (num) => {
		this.setState({currentSet:num})
	}

	render() {
		const { data, currentSet } = this.state;
		const cards = data.map((item, i) => <PreviewCard key={i} data={item} onClick={() => this.onSelectSet(i)}/>)
		return (
			<div className="app_main">
				
				<div className="app_main__left">Options</div>
				<div className={"app_main__right"+(currentSet !== null ? "_narrow" : "")}><div className="inner_cont">{cards}</div></div>
				<div className={"app_main__details"+(currentSet !== null ? "_visible" : "")}><div className="inner_cont">Details {cards}<div className="bClose" onClick={() => this.onSelectSet(null)}>X</div></div></div>
				<div className="app_main__top"><h1>My Soldiers Collection</h1></div>
				
			</div>
		);
	}
}

export default App;