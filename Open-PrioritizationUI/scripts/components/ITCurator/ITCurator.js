import React, { Component } from 'react';
import './ITCurator.less';
import Table from '../ui/Table/Table';
import constants from '../constants.js';
const table1 = 0;
const table2 = 1;
const table3 = 2;

class ITCurator extends Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		const flowColumn = this.props.flow ? 11 : 6;
		this.state = {
			initLoad: false,
			currGroup: null,
			firstTableLoaded: false,
			secondTableLoaded: false,
			thirdTableLoaded: false,
			currentState: -1,
			currDept: constants.allOptions[0],
			currDirection: constants.allOptions[1],
			currProject: constants.allOptions[2],
			options_depts: [],
			options_dirs: [],
			options_projects: [],
			PGLists: [],
			savedStates: [],
			currentState: -1,
			selected: [[], [], []],
			tableFrom: null,
			data: [[], [], []],
			leftTableVisibility: true,
			rightTableVisibility: true,
			centerTableVisibility: true,
			columns: [
				[
					{
						columnRef: 13
					},
					{
						columnRef: 0
					},
					{
						columnRef: 1
					},
					{
						columnRef: flowColumn
					},
					{
						columnRef: 7
					}
				],
				[
					{
						columnRef: 8
					},
					{
						columnRef: 0
					},
					{
						columnRef: 1
					},
					{
						columnRef: 9
					},
					{
						columnRef: 10
					},
					{
						columnRef: flowColumn
					}
				],
				[
					{
						columnRef: 0
					},
					{
						columnRef: 1
					},
					{
						columnRef: 2
					},
					{
						columnRef: flowColumn
					},
					{
						columnRef: 7
					}
				]
			]
		};
	}

	componentDidMount() {
		this._isMounted = true;
		this.checkForLoading();
		if (!this.props.flow) {
			let { columns } = this.state;
			let projectColumnn = {
				columnRef: 12
			};
			columns[table1].splice(3, 0, projectColumnn);
			columns[table2].splice(5, 0, projectColumnn);
			columns[table3].splice(3, 0, projectColumnn);
			this.setState(columns);
		}
	}
	componentWillUnmount() {
		this._isMounted = false;
	}

	componentDidUpdate(prevProps, prevState) {
		const {
			departments,
			directions,
			projects
		} = this.props;
		const {
			firstTableLoaded,
			secondTableLoaded,
			thirdTableLoaded
		} = this.state;

		if (!this.state.initLoad) this.checkForLoading();

		if (
			firstTableLoaded &&
			secondTableLoaded &&
			thirdTableLoaded &&
			(!prevState.firstTableLoaded ||
				!prevState.secondTableLoaded ||
				!prevState.thirdTableLoaded)
		) {
			this.saveState();
		}
	}

	checkForLoading = () => {
		const {
			departments,
			directions,
			projects
		} = this.props;

		if (
			!this.state.initLoad &&
			departments &&
			projects &&
			directions
		) {
			this.getSelectOptions();
			//this.loadPriorityGroup();
		}
	};

	loadPriorityGroup = () => {
		console.warn('loadPriorityGroup');
		//this.setState({ initLoad: true });

		const {
			currDept,
			currDirection,
			currProject
		} = this.state;
		let data = this.state.data.slice();
		const { RestClient, flow } = this.props;

		let filter_query = '';

		if (this.primaryFiltersSelected('dept')) {
			filter_query +=
				currDept !== constants.allOptions[0]
					? " AND [Logrocon.Prioritylist.Department] = '" +
					  currDept +
					  "'"
					: '';
		}
		if (this.primaryFiltersSelected('dir-project')) {
			filter_query +=
				currDirection !== constants.allOptions[1]
					? " AND [Logrocon.Prioritylist.Direction] = '" +
					  currDirection +
					  "'"
					: '';
			filter_query +=
				currProject !== constants.allOptions[2]
					? " AND [Logrocon.Project.Target2] = '" +
					  currProject +
					  "'"
					: '';
		}

		const query = {
			query:
				"SELECT [System.Id] FROM workitems WHERE [System.WorkItemType] = 'Prioritization group'" +
				filter_query
		};
		console.warn(query.query);

		RestClient.queryByWiql(query, constants.teamProject)
			.then(response => {
				const pgIds = response.workItems
					? response.workItems.map(item => item.id)
					: [];
				return pgIds;
			})
			.then(pgIds => {
				if (pgIds.length > 0) {
					RestClient.getWorkItems(pgIds).then(groups => {
						if (groups) {
							let lists = [];
							let maxList = 0;
							groups.forEach(groupitem => {
								let list = groupitem.fields[
									'Logrocon.Prioritylist'
								]
									? groupitem.fields[
											'Logrocon.Prioritylist'
									  ].split(',')
									: [];
								if (maxList < list.length) {
									maxList = list.length;
								}
								lists.push({ list, Id: groupitem.id });
							});
							let totalList = [];
							let priorityList = [];
							for (let j = 0; j < maxList; j++) {
								//длина самого длинного массива
								for (let i = 0; i < lists.length; i++) {
									//перебор массивов
									if (lists[i].list[j]) {
										totalList.push(lists[i].list[j]);
										priorityList.push(j + 1);
									}
								}
							}

							if (totalList.length > 0) {
								RestClient.getWorkItems(totalList).then(
									features => {
										const features2 = features.map(
											(item, index) =>
												Object.assign(
													{
														Id: item.id,
														GroupPriority:
															priorityList[index]
													},
													item.fields
												)
										);
										data[table1] = features2;
										this._isMounted &&
											this.setState(
												{
													data,
													firstTableLoaded: true,
													currGroup: groups,
													PGLists: lists
												},
												() => {
													this.loadTable(table2);
													this.loadTable(table3);
												}
											);
									}
								);
							} else {
								data[table1] = [];
								this._isMounted &&
									this.setState(
										{
											data,
											firstTableLoaded: true,
											currGroup: groups,
											PGLists: lists
										},
										() => {
											this.loadTable(table2);
											this.loadTable(table3);
										}
									);
							}
						}
					});
				} else {
					data[table1] = [];
					this._isMounted &&
						this.setState({ data, currGroup: null }, () => {
							this.loadTable(table2);
							this.loadTable(table3);
						});
				}
			});
	};

	primaryFiltersSelected = filter => {
		const {
			currDept,
			currDirection,
			currProject
		} = this.state;
		const { RestClient, flow } = this.props;
		let isSelected;
		switch (filter) {
			case 'dept':
				isSelected =
					flow && currDept !== constants.allOptions[0];
				break;
			case 'dir-project':
				isSelected =
					!flow &&
					currDirection !== constants.allOptions[1] &&
					currProject !== constants.allOptions[2];
				break;
			default:
				isSelected =
					(flow && currDept !== constants.allOptions[0]) ||
					(!flow &&
						currDirection !== constants.allOptions[1] &&
						currProject !== constants.allOptions[2]);
				break;
		}
		return isSelected;
	};

	loadTable = tableId => {
		console.warn('loadTable #' + tableId);
		const {
			data,
			currDept,
			currDirection,
			currProject
		} = this.state;
		const { RestClient, flow } = this.props;

		let filter_query = '';

		const sourcePrefix =
			tableId === table3 ? '[Source].' : '';

		if (this.primaryFiltersSelected('dept')) {
			filter_query +=
				currDept !== constants.allOptions[0]
					? ' AND ' +
					  sourcePrefix +
					  "[Logrocon.CustomerDept] = '" +
					  currDept +
					  "'"
					: '';
		}
		if (this.primaryFiltersSelected('dir-project')) {
			filter_query +=
				currDirection !== constants.allOptions[1]
					? ' AND ' +
					  sourcePrefix +
					  "[Logrocon.Direction] = '" +
					  currDirection +
					  "'"
					: '';
			filter_query +=
				currProject !== constants.allOptions[2]
					? ' AND ' +
					  sourcePrefix +
					  "[Logrocon.Project.Target2] = '" +
					  currProject +
					  "'"
					: '';
		}
		const query =
			tableId === table2
				? {
						query:
							"SELECT [System.Id] FROM workitems WHERE [System.WorkItemType] = 'Feature' AND ([System.State] = 'Active' OR [System.State] = 'Hold') AND [Logrocon.ITContact] = @me" +
							filter_query
				  }
				: {
						query:
							"SELECT [System.Id] FROM workitemLinks WHERE [Source].[System.WorkItemType] = 'Feature' AND [Source].[System.State] = 'New' AND [Source].[Logrocon.CustomerContact] = @me" +
							filter_query +
							" AND [System.Links.LinkType] = 'Microsoft.VSTS.Common.Affects-Reverse' AND [Target].[System.WorkItemType] = 'Demand'"
				  };
		console.warn(query.query);

		RestClient.queryByWiql(query, constants.teamProject)
			.then(response => {
				let featureIds = [];

				if (tableId === table2) {
					featureIds = response.workItems
						? response.workItems.map(item =>
								item.id.toString()
						  )
						: [];
				} else {
					response.workItemRelations.forEach(
						item =>
							item.source &&
							featureIds.push(item.source.id.toString())
					);
				}

				return featureIds;
			})
			.then(featureIds => {
				if (featureIds.length > 0) {
					const pgIds = this.state.data[table1].map(
						item => item.Id
					);
					featureIds = featureIds.filter(
						featureItem =>
							!pgIds.includes(parseInt(featureItem))
					);

					this.loadFeaturePage(tableId, featureIds);
				} else {
					let data = this.state.data.slice();
					data[tableId] = [];
					this._isMounted &&
						this.setState({
							data
						});
				}
			});
	};

	loadFeaturePage = (tableId, featureIds) => {
		console.warn('loadFeaturePage ' + tableId);

		const { RestClient } = this.props;
		const featuresToLoad =
			featureIds.length > 100
				? featureIds.slice(0, 100)
				: featureIds.slice();

		console.warn('featuresToLoad.length');
		console.warn(featuresToLoad.length);

		RestClient.getWorkItems(featuresToLoad).then(
			features => {
				const features2 = features.map(item =>
					Object.assign({ Id: item.id }, item.fields)
				);
				let data = this.state.data.slice();
				data[tableId] = [...data[tableId], ...features2];
				this._isMounted &&
					this.setState(
						{
							data
						},
						() => {
							if (featureIds.length > 100) {
								console.warn(
									'another page loading ' + tableId
								);

								this.loadFeaturePage(
									tableId,
									featureIds.slice(100)
								);
							} else {
								console.warn('enough with ' + tableId);

								this._isMounted &&
									this.setState({
										[tableId === table3
											? 'thirdTableLoaded'
											: 'secondTableLoaded']: true
									});
							}
						}
					);
			}
		);
	};

	selectItem = (tableId, num) => {
		let selected = this.state.selected.slice();
		let selectedNum = selected[tableId].slice();

		const match = selectedNum.findIndex(
			item => item === num
		);
		if (match !== -1) {
			selectedNum.splice(match, 1);
		} else {
			selectedNum.push(num);
		}
		selectedNum.sort();

		selected[tableId] = selectedNum;
		this.setState({ selected });
	};

	onDragStart = (tableId, num) => {
		let selected = this.state.selected.slice();
		let selectedNum = selected[tableId].slice();

		const match = selectedNum.findIndex(
			item => item === num
		);
		if (match === -1) {
			selectedNum.push(num);
		}
		selectedNum.sort();
		selected[tableId] = selectedNum;
		this.setState({ selected, tableFrom: tableId });
	};

	onDrop = (tableId, rowNumber) => {
		const selected = this.state.selected.slice();
		let selectedFrom = this.state.selected[
			this.state.tableFrom
		].slice();
		const data = this.state.data.slice();
		let dataFrom = data[this.state.tableFrom].slice();
		let dataTo = data[tableId].slice();
		const elementsToMove = selectedFrom.map(
			item => dataFrom[item]
		);
		dataFrom = dataFrom.filter(
			el => !elementsToMove.includes(el)
		);
		const rowTo =
			this.state.tableFrom !== tableId
				? rowNumber + 1
				: rowNumber;

		selectedFrom = [];
		let selectedTo = [];

		if (this.state.tableFrom === tableId) {
			dataFrom.splice(rowTo, 0, ...elementsToMove);
			dataFrom.forEach((item, index) => {
				if (elementsToMove.includes(item)) {
					selectedFrom.push(index);
				}
			});
			data[this.state.tableFrom] = dataFrom;
			selected[this.state.tableFrom] = selectedFrom;
		} else {
			dataTo.splice(rowTo, 0, ...elementsToMove);
			dataTo.forEach((item, index) => {
				if (elementsToMove.includes(item)) {
					selectedTo.push(index);
				}
			});
			data[this.state.tableFrom] = dataFrom;
			data[tableId] = dataTo;
			selected[this.state.tableFrom] = selectedFrom;
			selected[tableId] = selectedTo;
		}

		this.setState(
			{
				data,
				selected
			},
			() => this.saveState()
		);
	};
	onDragEnd = (tableId, rowNumber) => {
		this.setState({
			tableFrom: null
		});
	};

	swapItems = () => {
		const selected = this.state.selected.slice();
		let selected1 = selected[table1].slice();
		let selected2 = selected[table2].slice();
		const data = this.state.data.slice();
		let data1 = data[table1].slice();
		let data2 = data[table2].slice();

		let elementsToMove;
		let dataFrom;
		let dataTo;
		let selectedFrom = [];
		let selectedTo = [];

		if (selected1.length > 0) {
			dataFrom = data1;
			dataTo = data2;
			selectedFrom = selected1;
		} else if (selected2.length > 0) {
			dataFrom = data2;
			dataTo = data1;
			selectedFrom = selected2;
		}

		if (dataFrom) {
			elementsToMove = selectedFrom.map(
				item => dataFrom[item]
			);

			dataFrom = dataFrom.filter(
				el => !elementsToMove.includes(el)
			);
			dataTo = dataTo.concat(elementsToMove);
			dataTo.forEach((item, index) => {
				if (elementsToMove.includes(item)) {
					selectedTo.push(index);
				}
			});

			if (selected1.length > 0) {
				data1 = dataFrom;
				data2 = dataTo;
				selected2 = selectedTo;
				selected1 = [];
			} else {
				data2 = dataFrom;
				data1 = dataTo;
				selected1 = selectedTo;
				selected2 = [];
			}

			data[table1] = data1;
			data[table2] = data2;
			selected[table1] = selected1;
			selected[table2] = selected2;

			this.setState(
				{
					data,
					selected
				},
				() => this.saveState()
			);
		}
	};

	moveItems = dir => {
		let selected = this.state.selected.slice();
		let selected2 = selected[table2].slice();
		let data = this.state.data.slice();
		let data2 = data[table2].slice();

		let elementsToMove = selected2.map(item => data2[item]);

		data2 = data2.filter(
			el => !elementsToMove.includes(el)
		);

		let rowTo =
			dir === 'up' ? selected2[0] - 1 : selected2[0] + 1;
		if (rowTo < 0) rowTo = 0;

		selected2 = [];

		data2.splice(rowTo, 0, ...elementsToMove);
		data2.forEach((item, index) => {
			if (elementsToMove.includes(item)) {
				selected2.push(index);
			}
		});

		selected[table2] = selected2;
		data[table2] = data2;

		this.setState(
			{
				data,
				selected
			},
			() => this.saveState()
		);
	};

	saveState = () => {
		let savedStates = this.state.savedStates.slice();
		if (this.state.currentState < savedStates.length - 1) {
			savedStates = savedStates.slice(
				0,
				this.state.currentState + 1
			);
		}
		savedStates.push({
			data1: this.state.data[table1],
			data2: this.state.data[table2]
		});
		this.setState({
			savedStates,
			currentState: this.state.currentState + 1
		});
	};

	saveData = () => {
		//перевод статуса в Active

		const {
			currentState,
			savedStates,
			data,
			currDept,
			currProject,
			PGLists
		} = this.state;
		const { RestClient, flow } = this.props;

		savedStates.splice(0, savedStates.length - 1);

		this.setState({
			savedStates,
			currentState: 0
		});

		/*if (this.primaryFiltersSelected()) {
		}*/
		let fieldObj = {
			op: 'add',
			path: '/fields/System.State',
			value: 'Active'
		};
		let activeIds = data[table2].map(item =>
			item.Id.toString()
		);
		for (let i = 0; i < PGLists.length; i++) {}
		PGLists.forEach((item, index) => {
			let newList = item.list.filter(
				listItem => !activeIds.includes(listItem)
			);
			if (newList.length != item.list.length) {
				let fieldObj = {
					op: 'add',
					path: '/fields/Logrocon.Prioritylist',
					value: newList.join(',')
				};

				RestClient.updateWorkItem([fieldObj], item.Id);
			}
		});

		data[table2].length &&
			data[table2].forEach((item, index) => {
				setTimeout(() => {
					if (item['System.State'] !== 'Active')
						RestClient.updateWorkItem([fieldObj], item.Id);
				}, index * 100);
			});
	};

	sortData = (tableId, index, dest) => {
		let data = this.state.data.slice();
		let dataNum = data[tableId].slice();
		let columns = this.state.columns.slice();
		let columnsNum = columns[tableId].slice();
		let selected = this.state.selected.slice();

		dataNum.sort(
			this.sortBy(
				constants.featureColumns[
					columnsNum[index].columnRef
				].property,
				dest
			)
		);

		data[tableId] = dataNum;
		selected[tableId] = [];

		this.setState({ data, selected });
	};

	sortBy = (field, destination) => {
		return function(a, b) {
			if (a[field] < b[field]) {
				return destination === -1 ? 1 : -1;
			}
			if (a[field] > b[field]) {
				return destination === -1 ? -1 : 1;
			}
			return 0;
		};
	};
	resetToSaveState = () => {
		const currentState = 0;
		let data = this.state.data.slice();
		data[table1] = this.state.savedStates[
			currentState
		].data1.slice();
		data[table2] = this.state.savedStates[
			currentState
		].data2.slice();
		this.setState({
			currentState,
			data,
			selected: [[], []]
		});
	};

	hideLeftCont = () => {
		let { leftTableVisibility } = this.state;
		this.setState({
			leftTableVisibility: !leftTableVisibility
		});
	};
	hideRightCont = () => {
		let { rightTableVisibility } = this.state;
		this.setState({
			rightTableVisibility: !rightTableVisibility
		});
	};

	hideCenterCont = () => {
		let { centerTableVisibility } = this.state;
		this.setState({
			centerTableVisibility: !centerTableVisibility
		});
	};

	updateColumns = (tableId, columnsSettings) => {
		let columns = this.state.columns.slice();
		let cutRefs = columns[tableId].filter(
			col => col.columnRef === undefined
		);

		columnsSettings.forEach((col, index) => {
			if (col) {
				cutRefs.push({ columnRef: index });
			}
		});
		columns[tableId] = cutRefs;
		this.setState({ columns });
	};

	onSelect = (e, param) => {
		this.setState(
			{
				[param]: e.target.value,
				selected: [[], []],
				savedStates: [],
				firstTableLoaded: false,
				secondTableLoaded: false,
				thirdTableLoaded: false,
				currentState: -1
			},
			() => {
				if (param === 'currProject') {
					this.getSelectOptions();
				} else {
					this.loadPriorityGroup();
				}
			}
		);
	};

	getSelectOptions = () => {
		const {
			departments,
			directions,
			projects
		} = this.props;
		const { currProject } = this.state;

		let options_depts = departments
			? departments.map(item => (
					<option key={item.id} value={item.name}>
						{item.name}
					</option>
			  ))
			: [];

		options_depts.unshift(
			<option key={-1} value={constants.allOptions[0]}>
				{constants.allOptions[0]}
			</option>
		);

		let options_projects = projects
			? projects.map(item => (
					<option key={item.id} value={item.name}>
						{item.name}
					</option>
			  ))
			: [];
		options_projects.unshift(
			<option key={-1} value={constants.allOptions[2]}>
				{constants.allOptions[2]}
			</option>
		);

		let options_dirs = [];
		let directionsFiltered;

		if (currProject) {
			const currProj = projects.find(item => {
				return item.name === currProject;
			});

			if (currProj) {
				directionsFiltered = directions
					? directions.filter(
							item =>
								item.id_project === currProj.id &&
								item.isActivity
					  )
					: [];
				options_dirs = directionsFiltered.map(item => (
					<option key={item.id} value={item.name}>
						{item.name}
					</option>
				));
			}
		}
		options_dirs.unshift(
			<option key={-1} value={constants.allOptions[1]}>
				{constants.allOptions[1]}
			</option>
		);
		/*const currDirection = directionsFiltered.length
			? directionsFiltered[0].name
			: '';*/

		this.setState(
			{
				//currDirection,
				options_depts,
				options_dirs,
				options_projects,
				initLoad: true
			},
			() => this.loadPriorityGroup()
		);
	};

	reloadData = () => {
		this.setState(
			{
				selected: [[], []],
				data: [[], [], []],
				savedStates: [],
				firstTableLoaded: false,
				secondTableLoaded: false,
				thirdTableLoaded: false,
				currentState: -1
			},
			() => {
				this.loadPriorityGroup();
			}
		);
	};

	render() {
		const {
			selected,
			data,
			savedStates,
			currentState,
			leftTableVisibility,
			rightTableVisibility,
			centerTableVisibility,
			columns,
			currGroup,
			currDept,
			currDirection,
			currProject,
			options_depts,
			options_dirs,
			options_projects
		} = this.state;
		const { flow, title, RestClient } = this.props;

		let swapSymbol;

		if (
			selected[table1].length === 0 &&
			selected[table2].length === 0
		) {
			swapSymbol = <img src="images/both.png" alt="" />;
		} else if (selected[table1].length === 0) {
			swapSymbol = <img src="images/left.png" alt="" />;
		} else {
			swapSymbol = <img src="images/right.png" alt="" />;
		}

		return (
			<div className="it-curator-cont">
				<div className="navigation-block">
					<div className="button-block">
						<button
							title="Откат к загруженному списку"
							className={
								'button__square' +
								(savedStates.length <= 1 ||
								currentState === 0
									? ' button__square_disabled'
									: '')
							}
							//onClick={this.stateBack}>
							onClick={this.resetToSaveState}>
							<img src="images/round1.png" alt="" />
						</button>
						<button
							title="Перезагрузить"
							className="button__square"
							//onClick={this.stateForward}>
							onClick={this.reloadData}>
							<img src="images/round2.png" alt="" />
						</button>
						<button
							title="Сохранить"
							className={
								'button__square' +
								(savedStates.length <= 1
									? ' button__square_disabled'
									: '')
							}
							onClick={this.saveData}>
							<img src="images/save.png" alt="" />
						</button>
					</div>
					{flow ? (
						<div className="select-block">
							<select
								className="select_common"
								value={currDept}
								onChange={e =>
									this.onSelect(e, 'currDept')
								}>
								{options_depts}
							</select>
						</div>
					) : (
						<div className="select-block">
							<select
								className="select_common"
								value={currProject}
								onChange={e =>
									this.onSelect(e, 'currProject')
								}>
								{options_projects}
							</select>
							<select
								className="select_common"
								value={currDirection}
								onChange={e =>
									this.onSelect(e, 'currDirection')
								}>
								{options_dirs}
							</select>
						</div>
					)}
				</div>
				<div className="group-cont">
					<div
						className="left-table-cont"
						style={{
							width: leftTableVisibility
								? !centerTableVisibility &&
								  !rightTableVisibility
									? '90%'
									: '25%'
								: 'auto'
						}}>
						<Table
							width="100%"
							caption="Feature без приоритетов"
							defaultColumns={constants.featureColumns}
							columns={columns[table3]}
							data={data[table3]}
							sortData={this.sortData}
							preserveDefaultData={true}
							id={table3}
							hideButton={true}
							hideCallback={this.hideLeftCont}
							updateColumns={this.updateColumns}
							reportTitle={title}
						/>
					</div>
					<div
						className="right-table-cont"
						style={{
							width: leftTableVisibility
								? !centerTableVisibility &&
								  !rightTableVisibility
									? '10%'
									: '73%'
								: '98%'
						}}>
						<div
							className="right1"
							style={{
								width: rightTableVisibility
									? centerTableVisibility
										? '45%'
										: '2%'
									: centerTableVisibility
									? '98%'
									: leftTableVisibility
									? '13%'
									: '2%'
							}}>
							<Table
								width="100%"
								caption="Сводные планы"
								defaultColumns={constants.featureColumns}
								columns={columns[table1]}
								data={data[table1]}
								selected={selected[table1]}
								rowClick={this.selectItem}
								id={table1}
								onDragStart={this.onDragStart}
								onDragEnd={this.onDragEnd}
								onDrop={this.onDrop}
								sortData={this.sortData}
								hideButton={true}
								hideCallback={this.hideCenterCont}
								updateColumns={this.updateColumns}
								reportTitle={title}
							/>
						</div>
						<div className="button-cont">
							<button
								title={
									selected[table1].length !== 0
										? 'Внести в список'
										: 'Убрать из списка'
								}
								className={
									'button__square' +
									(selected[table1].length === 0 &&
									selected[table2].length === 0
										? ' button__square_disabled'
										: '')
								}
								onClick={this.swapItems}>
								{swapSymbol}
							</button>
						</div>
						<div
							className="right2"
							style={{
								width: rightTableVisibility
									? centerTableVisibility
										? '45%'
										: '98%'
									: centerTableVisibility
									? '2%'
									: leftTableVisibility
									? '13%'
									: '2%'
							}}>
							<Table
								width="100%"
								caption="Активные Feature"
								defaultColumns={constants.featureColumns}
								columns={columns[table2]}
								data={data[table2]}
								selected={selected[table2]}
								rowClick={this.selectItem}
								id={table2}
								onDragStart={this.onDragStart}
								onDragEnd={this.onDragEnd}
								onDrop={this.onDrop}
								preserveDefaultData={true}
								sortData={this.sortData}
								updateColumns={this.updateColumns}
								hideButton={true}
								hideCallback={this.hideRightCont}
								reportTitle={title}
								customEmptyMessage="Перетащите элементы сюда..."
							/>
						</div>
						<div className="button-cont">
							<button
								title="Переместить наверх"
								className={
									'button__square' +
									(selected[table2].length === 0
										? ' button__square_disabled'
										: '')
								}
								onClick={() => this.moveItems('up')}>
								<img src="images/up.png" alt="" />
							</button>
							<button
								title="Переместить вниз"
								className={
									'button__square' +
									(selected[table2].length === 0
										? ' button__square_disabled'
										: '')
								}
								onClick={() => this.moveItems('down')}>
								<img src="images/down.png" alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ITCurator;
