import React, { Component } from 'react';
import './GroupPriorityHistory.less';
import Table from '../ui/Table/Table';
import constants from '../constants.js';

const table1 = 0;
const table2 = 1;

class GroupPriorityHistory extends Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			data: [[], []],
			selected: [],
			columns: [
				[
					{
						columnRef: 0
						//width: '30%'
					},
					{
						columnRef: 1
						//width: '70%'
					}
				],
				[
					{
						head: 'Приоритет',
						property: null,
						counter: 1 //сделать счетчик с 1
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
			],
			columns_default: [
				constants.revisionsColumns,
				constants.featureColumns
			]
		};
	}

	componentDidMount() {
		this._isMounted = true;
		if (
			this.props.RestClient &&
			this.props.currGroup !== null
		) {
			this.loadRevisions();
		}
	}
	componentDidUpdate(prevProps, prevState) {
		const { flow, currGroup } = this.props;
		if (currGroup !== prevProps.currGroup) {
			this.loadRevisions();
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	loadRevisions = () => {
		const { RestClient, currGroup } = this.props;

		if (currGroup) {
			RestClient.getRevisions([currGroup.id]).then(
				revisions => {
					const revData = revisions
						.map(rev => rev.fields)
						.reverse();
					let data = this.state.data.slice();
					data[table1] = revData;
					data[table2] = [];
					this._isMounted &&
						this.setState({ data, selected: [] });
				}
			);
		} else {
			this._isMounted &&
				this.setState({ data: [[], []], selected: [] });
		}
	};

	selectItem = (tableId, num) => {
		const { RestClient } = this.props;
		this.setState({ selected: [num] });

		const listIds = this.state.data[table1][num][
			'Logrocon.Prioritylist'
		]
			? this.state.data[table1][num][
					'Logrocon.Prioritylist'
			  ].split(',')
			: [];

		if (listIds.length > 0) {
			RestClient.getWorkItems(listIds).then(features => {
				const features2 = features.map(item =>
					Object.assign({ Id: item.id }, item.fields)
				);
				let data = this.state.data.slice();
				data[table2] = features2;
				this.setState({ data });
			});
		}
	};

	sortData = (tableId, index, dest) => {
		let data = this.state.data.slice();
		let dataNum = data[tableId].slice();
		let columns = this.state.columns.slice();
		let columnsNum = columns[tableId].slice();

		const columns_default = this.state.columns_default[
			tableId
		];

		dataNum.sort(
			this.sortBy(
				columns_default[columnsNum[index].columnRef]
					.property,
				dest
			)
		);

		data[tableId] = dataNum;
		this.setState({ data, selected: [] });
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

	render() {
		const {
			selected,
			data,
			columns,
			columns_default
		} = this.state;
		const { flow, title } = this.props;

		return (
			<div className="group-history-cont">
				<div className="tables-cont">
					<div className="left-table-cont">
						<Table
							width="100%"
							caption="Версия"
							defaultColumns={columns_default[table1]}
							columns={columns[table1]}
							data={data[table1]}
							selected={selected}
							rowClick={this.selectItem}
							sortData={this.sortData}
							id={table1}
							updateColumns={this.updateColumns}
							reportTitle={title}
						/>
					</div>
					<div className="right-table-cont">
						<Table
							width="100%"
							caption="Плановые приоритеты"
							defaultColumns={columns_default[table2]}
							columns={columns[table2]}
							data={data[table2]}
							id={table2}
							updateColumns={this.updateColumns}
							reportTitle={title}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default GroupPriorityHistory;
