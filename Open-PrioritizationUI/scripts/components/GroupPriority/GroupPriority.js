import React, { Component } from 'react';
import './GroupPriority.less';
import Table from '../ui/Table/Table';
import MenuBar from '../ui/MenuBar/MenuBar';
import GroupPriorityHistory from '../GroupPriorityHistory/GroupPriorityHistory';
import constants from '../constants.js';

const table1 = 0;
const table2 = 1;

class GroupPriority extends Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			initLoad: false,
			currGroup: null,
			activeLog: 0,
			savedStates: [],
			firstTableLoaded: false,
			secondTableLoaded: false,
			currentState: -1,
			currDept: '',
			currDirection: '',
			currProject: '',
			options_depts: [],
			options_dirs: [],
			options_projects: [],
			selected: [[], []],
			tableFrom: null,
			data: [[], []],
			leftTableVisibility: true,
			rightTableVisibility: true,
			PGNotAvailable: false,
			columns: [
				[
					{
						columnRef: 0 //width: "25%" - можно задавать кастомную
					},
					{
						columnRef: 1
					},
					{
						columnRef: 2
					}
				],
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
						columnRef: 3
					},
					{
						columnRef: 4
					},
					{
						columnRef: 5
					}
				]
			]
		};
	}

	componentDidMount() {
		this._isMounted = true;
		this.checkForSettingDicts();

		const columns = localStorage.getItem('columns');
		console.warn('localStorage!!');
		console.warn(localStorage);
		console.warn(columns);
	}
	componentWillUnmount() {
		this._isMounted = false;
	}

	componentDidUpdate(prevProps, prevState) {
		const {
			initLoad,
			firstTableLoaded,
			secondTableLoaded
		} = this.state;
		const {
			departments,
			directions,
			projects
		} = this.props;

		if (!initLoad) this.checkForSettingDicts();

		if (
			firstTableLoaded &&
			secondTableLoaded &&
			(!prevState.firstTableLoaded ||
				!prevState.secondTableLoaded)
		) {
			this.saveState();
		}
	}

	checkForSettingDicts = () => {
		const {
			departments,
			directions,
			projects
		} = this.props;
		const {
			currDept,
			currDirection,
			currProject
		} = this.state;

		let obj = {};

		if (
			currDept === '' &&
			departments &&
			departments.length
		) {
			obj.currDept = departments[0].name;
		}
		if (
			currDirection === '' &&
			directions &&
			directions.length
		) {
			obj.currDirection = directions[0].name;
		}
		if (currProject === '' && projects && projects.length) {
			obj.currProject = projects[0].name;
		}
		if (Object.keys(obj).length !== 0) {
			this._isMounted &&
				this.setState(obj, () => {
					if (departments && directions && projects) {
						this.getSelectOptions();
					}
				});
		}
	};

	loadFeatures = () => {
		console.warn('this.loadFeatures()');
		const {
			currGroup,
			currDept,
			currDirection,
			currProject
		} = this.state;
		const { RestClient, flow } = this.props;

		let filter_query = '';

		if (flow && currDept !== '') {
			filter_query +=
				currDept !== ''
					? " AND [Source].[Logrocon.CustomerDept] = '" +
					  currDept +
					  "'"
					: '';
		}
		if (
			!flow &&
			currDirection !== '' &&
			currProject !== ''
		) {
			filter_query +=
				currDirection !== ''
					? " AND [Source].[Logrocon.Direction] = '" +
					  currDirection +
					  "'"
					: '';
			filter_query +=
				currProject !== ''
					? " AND [Source].[Logrocon.Project.Target2] = '" +
					  currProject +
					  "'"
					: '';
		}
		const query = {
			query:
				"SELECT [System.Id] FROM workitemLinks WHERE [Source].[System.WorkItemType] = 'Feature' AND [Source].[System.State] = 'New' AND [Source].[Logrocon.CustomerContact] = @me" +
				filter_query +
				" AND [System.Links.LinkType] = 'Microsoft.VSTS.Common.Affects-Reverse' AND [Target].[System.WorkItemType] = 'Demand'"
		};
		console.warn(query.query);

		RestClient.queryByWiql(query, constants.teamProject)
			.then(response => {
				let featureIds = [];
				response.workItemRelations.forEach(
					item =>
						item.source &&
						featureIds.push(item.source.id.toString())
				);
				return featureIds;
			})
			.then(featureIds => {
				if (featureIds.length > 0) {
					const pgIds = currGroup.fields[
						'Logrocon.Prioritylist'
					]
						? currGroup.fields[
								'Logrocon.Prioritylist'
						  ].split(',')
						: [];
					featureIds = featureIds.filter(
						featureItem => !pgIds.includes(featureItem)
					);

					this.loadFeaturesPage(featureIds);
				} else {
					let data = this.state.data.slice();
					data[table1] = [];
					this._isMounted &&
						this.setState({ data, firstTableLoaded: true });
				}
			});
	};

	loadFeaturesPage = featureIds => {
		const { RestClient } = this.props;
		const featuresToLoad =
			featureIds.length > 100
				? featureIds.slice(0, 100)
				: featureIds;

		RestClient.getWorkItems(featuresToLoad).then(
			features => {
				const features2 = features.map(item =>
					Object.assign({ Id: item.id }, item.fields)
				);

				let data = this.state.data.slice();
				data[table1] = [...data[table1], ...features2];
				this._isMounted &&
					this.setState(
						{
							data
						},
						() => {
							console.warn('another page loading');
							if (featureIds.length > 100) {
								this.loadFeaturesPage(
									featureIds.slice(100)
								);
							} else {
								this._isMounted &&
									this.setState({ firstTableLoaded: true });
							}
						}
					);
			}
		);
	};

	loadPriorityGroup = () => {
		this._isMounted && this.setState({ initLoad: true });
		const {
			currDept,
			currDirection,
			currProject
		} = this.state;
		const { RestClient, flow } = this.props;
		let filter_query = '';
		if (
			(flow && currDept) ||
			(!flow && currDirection && currProject)
		) {
			if (flow && currDept !== '') {
				filter_query +=
					" AND [Logrocon.Prioritylist.Department] = '" +
					currDept +
					"'";
			}
			if (
				!flow &&
				currDirection !== '' &&
				currProject !== ''
			) {
				filter_query +=
					currDirection !== '' &&
					currDirection !== 'Все направления'
						? " AND [Logrocon.Prioritylist.Direction] = '" +
						  currDirection +
						  "'"
						: '';
				filter_query +=
					currProject !== '' &&
					currProject !== 'Все проекты'
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
			let data = this.state.data.slice();

			RestClient.queryByWiql(query, constants.teamProject)
				.then(response => {
					const pgId = response.workItems
						? response.workItems.map(item => item.id)
						: [];
					console.warn('response');
					console.warn(response);
					return pgId;
				})
				.then(pgId => {
					if (pgId.length > 0) {
						RestClient.getWorkItems(pgId).then(group => {
							if (group) {
								const list = group[0].fields[
									'Logrocon.Prioritylist'
								]
									? group[0].fields[
											'Logrocon.Prioritylist'
									  ].split(',')
									: [];

								if (list.length > 0) {
									RestClient.getWorkItems(list).then(
										features => {
											const features2 = features.map(
												(item, index) =>
													Object.assign(
														{
															Id: item.id,
															GroupPriority: index + 1
														},
														item.fields
													)
											);
											data[table2] = features2;
											this._isMounted &&
												this.setState(
													{
														data,
														secondTableLoaded: true,
														currGroup: group[0],
														PGNotAvailable: false
													},
													() => {
														this.loadFeatures();
													}
												);
										}
									);
								} else {
									data[table2] = [];
									this._isMounted &&
										this.setState(
											{
												data,
												secondTableLoaded: true,
												currGroup: group[0],
												PGNotAvailable: false
											},
											() => {
												this.loadFeatures();
											}
										);
								}
							}
						});
					} else {
						data[table2] = [];
						this._isMounted &&
							this.setState(
								{
									data,
									currGroup: null,
									PGNotAvailable: true
								},
								() => {
									this.loadFeatures();
								}
							);
					}
				});
		}
	};

	setActiveLog = num => {
		this._isMounted &&
			this.setState({
				activeLog: num,
				leftTableVisibility: true,
				rightTableVisibility: true
			});
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
		console.warn('onDragStart!!!');
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
		console.warn('onDrop');
		console.warn(tableId);
		console.warn(rowNumber);
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
		console.warn('onDragEnd');
		console.warn(tableId);
		console.warn(rowNumber);
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
		this.recalculatePriority();
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
		this._isMounted &&
			this.setState({
				savedStates,
				currentState: this.state.currentState + 1
			});
		this.recalculatePriority();
	};

	/*stateForward = () => {
		let { currentState, savedStates } = this.state;
		let data = this.state.data.slice();
		if (currentState < savedStates.length - 1) {
			currentState++;
			data[table1] = savedStates[currentState].data1;
			data[table2] = savedStates[currentState].data2;

			this.setState({
				currentState,
				data,
				selected: [[], []]
			});
		}
	};
	stateBack = () => {
		let { currentState, savedStates } = this.state;
		let data = this.state.data.slice();
		if (currentState > 0) {
			currentState--;
			data[table1] = savedStates[currentState].data1;
			data[table2] = savedStates[currentState].data2;
			this.setState({
				currentState,
				data,
				selected: [[], []
				]
			}); 
		}
	};*/

	saveData = () => {
		let {
			currentState,
			savedStates,
			currGroup,
			currDept,
			currDirection,
			currProject
		} = this.state;
		const { RestClient, flow } = this.props;
		const ids = this.state.data[table2].map(
			item => item.Id
		);
		const idsString = ids.join(',');
		if (!currGroup) {
			/*let obj = {
				'Logrocon.Prioritylist': idsString
			};
			if (flow) {
				obj['Logrocon.Prioritylist.Department'] = currDept;
				obj['System.Title'] =
					'Группа приоритизации для ' + currDept;
			} else {
				obj[
					'Logrocon.Prioritylist.Direction'
				] = currDirection;
				obj['Logrocon.Project.Target2'] = currProject;
				obj['System.Title'] =
					'Группа приоритизации для проекта ' +
					currProject +
					' и направления ' +
					currDirection;
			}
			obj['System.State'] = 'Active';

			let data = [];
			for (var key in obj) {
				let val = obj[key];
				let fieldObj = {
					op: 'add',
					path: '/fields/' + key,
					value: val
				};
				data.push(fieldObj);
			}
			RestClient.createWorkItem(
				data,
				constants.teamProject,
				'Prioritization group'
			);*/
		} else {
			let fieldObj = {
				op: 'add',
				path: '/fields/Logrocon.Prioritylist',
				value: idsString
			};

			RestClient.updateWorkItem([fieldObj], currGroup.id);
		}
		savedStates.splice(0, savedStates.length - 1);
		currentState = 0;
		this._isMounted &&
			this.setState({
				savedStates,
				currentState
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

		localStorage.setItem('columns', 'testtest');

		console.warn(localStorage);
	};

	onSelect = (e, param) => {
		console.warn('e.target.value');
		console.warn(e.target.value);
		console.warn(e.target);
		this.setState(
			{
				[param]: e.target.value,
				selected: [[], []],
				savedStates: [],
				firstTableLoaded: false,
				secondTableLoaded: false,
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
		console.warn('getSelectOptions');
		const {
			departments,
			directions,
			projects
		} = this.props;
		const { currProject } = this.state;

		const options_depts = departments
			? departments.map(item => (
					<option key={item.id} value={item.name}>
						{item.name}
					</option>
			  ))
			: [];
		const options_projects = projects
			? projects.map(item => (
					<option key={item.id} value={item.name}>
						{item.name}
					</option>
			  ))
			: [];
		let options_dirs = [];
		let directionsFiltered;
		console.warn('directions');
		console.warn(directions);

		if (currProject) {
			const currProj = projects.find(item => {
				return item.name === currProject;
			});

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
		const currDirection = directionsFiltered.length
			? directionsFiltered[0].name
			: '';

		this.setState(
			{
				currDirection,
				options_depts,
				options_dirs,
				options_projects
			},
			() => this.loadPriorityGroup()
		);
	};

	reloadData = () => {
		this._isMounted &&
			this.setState(
				{
					selected: [[], []],
					data: [[], []],
					savedStates: [],
					firstTableLoaded: false,
					secondTableLoaded: false,
					currentState: -1
				},
				() => {
					this.loadPriorityGroup();
				}
			);
	};

	recalculatePriority = () => {
		let data = this.state.data.slice();
		let pgData = data[table2].slice();
		pgData.forEach(
			(item, index) => (item['GroupPriority'] = index + 1)
		);
		data[table2] = pgData;
		this.setState({ data });
	};

	onDragStart2 = e => {
		console.warn('onDragStart2');
		console.warn(e);
	};

	onDragEnd2 = e => {
		console.warn('onDragEnd2');
	};

	onDrop2 = e => {
		e.preventDefault();
		console.warn('onDrop2');
	};
	onDragOver2 = e => {
		console.warn('onDragOver2');
		e.stopPropagation();
		e.preventDefault();
		return false;
	};

	onDragEnter2 = e => {
		console.warn('onDragEnter2');
		e.stopPropagation();
		e.preventDefault();
		return false;
	};

	render() {
		const {
			selected,
			data,
			savedStates,
			currentState,
			activeLog,
			leftTableVisibility,
			rightTableVisibility,
			columns,
			currGroup,
			currDept,
			currDirection,
			currProject,
			options_depts,
			options_dirs,
			options_projects,
			PGNotAvailable
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
			<div className="group-priority-cont">
				<MenuBar
					data={constants.logOptions}
					active={activeLog}
					onClickItem={this.setActiveLog}
				/>
				<div>
					<div className="navigation-block">
						{activeLog === 0 ? (
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
									onClick={this.resetToSaveState}>
									<img src="images/round1.png" alt="" />
								</button>
								<button
									title="Перезагрузить"
									className="button__square"
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
						) : null}
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
					{activeLog === 0 ? (
						<div className="group-cont">
							<div
								className="left-table-cont"
								style={{
									width: leftTableVisibility
										? rightTableVisibility
											? '30%'
											: '90%'
										: 'auto'
								}}>
								<Table
									width="100%"
									caption="Новые Feature"
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
									hideCallback={this.hideLeftCont}
									updateColumns={this.updateColumns}
									reportTitle={title}
									customEmptyMessage="Нет доступных элементов для приоритизации"
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
								className="right-table-cont"
								style={{
									width: leftTableVisibility
										? rightTableVisibility
											? '60%'
											: 'auto'
										: '90%'
								}}>
								<Table
									width="100%"
									caption="Плановые приоритеты"
									defaultColumns={constants.featureColumns}
									columns={columns[table2]}
									data={data[table2]}
									selected={selected[table2]}
									rowClick={this.selectItem}
									id={table2}
									onDragStart={this.onDragStart}
									onDragEnd={this.onDragEnd}
									onDrop={this.onDrop}
									hideButton={true}
									hideCallback={this.hideRightCont}
									updateColumns={this.updateColumns}
									reportTitle={title}
									customEmptyMessage={
										PGNotAvailable
											? 'Нет доступной группы приоритизации'
											: 'Перетащите элементы сюда...'
									}
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
					) : (
						<GroupPriorityHistory
							flow={flow}
							title={title}
							RestClient={RestClient}
							currGroup={currGroup}
							currDept={currDept}
							currDirection={currDirection}
							currProject={currProject}
						/>
					)}
				</div>
				{/*<div className="container">
					<div
						className="box"
						draggable
						onDragStart={e => this.onDragStart2(e)}
						onDragEnd={e => this.onDragEnd2(e)}
						onDrop={e => this.onDrop2(e)}
						onDragOver={e => this.onDragOver2(e)}
						onDragEnter={e => this.onDragEnter2(e)}>
						To drag
					</div>

					<div
						className="box"
						draggable
						onDragStart={e => this.onDragStart2(e)}
						onDragEnd={e => this.onDragEnd2(e)}
						onDrop={e => this.onDrop2(e)}
						onDragOver={e => this.onDragOver2(e)}
						onDragEnter={e => this.onDragEnter2(e)}>
						To drop
					</div>
				</div>*/}
			</div>
		);
	}
}
export default GroupPriority;
