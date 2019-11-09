import React, { Component } from 'react';
import './Table.less';
import moment from 'moment';
import constants from '../../constants.js';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultData: [],
			sortingFlags: [],
			isVisible: true,
			showColumnsSettings: false,
			columns: [],
			columnsSettings: [],
			hint: '',
			popupX: 0,
			popupY: 0,
			showFilterBlock: false,
			filterValues: [],
			navigationService: null
		};
	}
	componentDidMount() {
		const { data, columns, defaultColumns } = this.props;
		data &&
			this.setState({
				defaultData: data
			});

		if (columns) {
			const sortingFlags = columns.map(item => 0);
			this.setState({
				sortingFlags,
				columns
			});
		}
		if (columns && defaultColumns) {
			const columnsSettings = defaultColumns.map(
				item => false
			);
			columns.forEach(col => {
				if (col.columnRef !== undefined)
					columnsSettings[col.columnRef] = true;
			});
			this.setState({
				columnsSettings
			});
		}

		const that = this;
		VSS.getService(VSS.ServiceIds.Navigation).then(function(
			navigationService
		) {
			that.setState({ navigationService });
		});
	}
	componentDidUpdate(prevProps, prevState) {
		const { columns, data } = this.props;
		const { defaultData } = this.state;
		let toUpdate = false;
		if (prevProps.columns.length !== columns.length) {
			toUpdate = true;
		} else {
			for (let i = 0; i < prevProps.columns.length; i++) {
				if (
					columns[i].columnRef !==
					prevProps.columns[i].columnRef
				) {
					toUpdate = true;
					break;
				}
			}
		}
		if (toUpdate) {
			const sortingFlags = columns.map(item => 0);
			const filterValues = columns.map(item => '');
			this.setState({
				sortingFlags,
				filterValues
			});
		}

		let pr = false;

		if (defaultData.length) {
			for (let i = 0; i < data.length; i++) {
				if (data[i].Id === defaultData[0].Id) {
					pr = true;
				}
			}
		}

		if (
			(defaultData.length && !pr) ||
			(!prevProps.data.length && this.props.data.length)
		) {
			this.setState({
				defaultData: this.props.data
			});
		}
	}

	setFilterBlock = () => {
		let { showFilterBlock } = this.state;
		this.setState({
			showFilterBlock: !showFilterBlock
		});
	};

	setVisibility = () => {
		let { isVisible } = this.state;
		this.setState({
			isVisible: !isVisible
		});
		this.props.hideCallback && this.hideCallback();
	};

	hideCallback = () => {
		const sortingFlags = this.props.columns.map(item => 0);
		this.setState({
			sortingFlags
		});
		this.props.hideCallback();
	};

	setColumnsSettings = () => {
		let {
			showColumnsSettings,
			columnsSettings
		} = this.state;
		this.setState({
			showColumnsSettings: !showColumnsSettings
		});
		showColumnsSettings &&
			this.props.updateColumns(
				this.props.id,
				columnsSettings
			);
	};

	onCellOver = (e, hint) => {
		if (hint !== '' && hint != undefined) {
			this.setState({
				hint,
				popupX: e.clientX + 15,
				popupY: e.clientY - 15
			});
		}
	};
	onCellMove = e => {
		this.setState({
			popupX: e.clientX + 15,
			popupY: e.clientY - 15
		});
	};
	onCellOut = () => {
		this.setState({ hint: '' });
	};

	getRow = rowIndex => {
		const {
			data,
			width,
			defaultColumns,
			columns
		} = this.props;

		let weightSum = 0;

		columns.forEach(
			col =>
				(weightSum +=
					col.columnRef !== undefined
						? defaultColumns[col.columnRef].weight
						: 1)
		);

		const row = columns
			? columns.map((item, index) => {
					let content = null;
					if (item.columnRef === undefined) {
						if (item.content) {
							content = item.content;
						}
						if (item.counter !== undefined) {
							content = item.counter + rowIndex;
						}
					} else {
						const prop =
							defaultColumns[item.columnRef].property;
						content = data[rowIndex][prop];

						if (prop === 'Id') {
							const url =
								VSS.getWebContext().host.uri +
								VSS.getWebContext().project.name +
								'/_workitems?id=' +
								data[rowIndex][prop] +
								'&_a=edit';
							content = (
								<a
									onClick={e => {
										e.stopPropagation();
										this.state.navigationService &&
											this.state.navigationService.openNewWindow(
												url
											);
									}}>
									{data[rowIndex][prop]}
								</a>
							);
						}

						if (
							content != undefined &&
							defaultColumns[
								item.columnRef
							].property.indexOf('Date') !== -1
						) {
							content = content
								.split('T')[0]
								.split('-')
								.reverse()
								.join('.');
						}
					}

					const calcWidth = item.width
						? item.width
						: item.columnRef !== undefined
						? (defaultColumns[item.columnRef].weight *
								100) /
								weightSum +
						  '%'
						: 100 / weightSum + '%';

					return (
						<div
							className="td"
							style={{ width: calcWidth }}
							onMouseOver={e => this.onCellOver(e, content)}
							onMouseMove={e => this.onCellMove(e)}
							onMouseOut={this.onCellOut}
							onClick={
								item.onClick
									? () => item.onClick(rowIndex)
									: null
							}
							key={'td' + index}>
							{content}
						</div>
					);
			  })
			: [];
		return row;
	};

	sortData = (id, index) => {
		let sortingFlags = this.state.sortingFlags.slice();
		if (sortingFlags[index] === 0) {
			sortingFlags[index] = 1;
		} else {
			sortingFlags[index] = -sortingFlags[index];
		}
		sortingFlags = sortingFlags.map((item, i) =>
			i === index ? item : 0
		);

		this.props.sortData(id, index, sortingFlags[index]);
		this.setState({ sortingFlags });
	};

	switchColumn = num => {
		let columnsSettings = this.state.columnsSettings.slice();
		columnsSettings[num] = !columnsSettings[num];
		this.setState({ columnsSettings });
	};

	onFilterChange = (e, index) => {
		let filterValues = this.state.filterValues.slice();
		filterValues[index] = e.target.value;
		this.setState({ filterValues });
	};

	exportToExcel = () => {
		const { data, columns, defaultColumns } = this.props;
		const { filterValues } = this.state;
		let xlsData = [];

		console.warn('data');
		console.warn(JSON.stringify(data));

		data.forEach((row, rowIndex) => {
			let toShow = true;
			for (let i = 0; i < columns.length; i++) {
				if (
					filterValues[i] !== undefined &&
					filterValues[i].length > 0
				) {
					const prop =
						defaultColumns[columns[i].columnRef].property;
					if (
						row[prop] === undefined ||
						(columns[i].columnRef !== undefined &&
							row[prop] !== undefined &&
							row[prop]
								.toLowerCase()
								.indexOf(filterValues[i].toLowerCase()) ===
								-1)
					) {
						toShow = false;
						break;
					}
				}
			}
			if (toShow) {
				let obj = {};
				columns.forEach((col, index) => {
					if (col.columnRef !== undefined) {
						obj[defaultColumns[col.columnRef].property] =
							row[defaultColumns[col.columnRef].property];
					} else if (col.counter !== undefined) {
						obj['priority'] = col.counter + rowIndex;
					}
				});
				xlsData.push(obj);
			}
		});

		console.warn('xlsData');
		console.warn(JSON.stringify(xlsData));

		const url =
			constants.protocol +
			VSS.getWebContext().host.authority +
			constants.xlsLink;

		const dataToSend = {
			pageName: this.props.reportTitle,
			tableName: this.props.caption,
			data: xlsData
		};

		this.getBlob(url, dataToSend).then(response => {
			const url1 = URL.createObjectURL(response);
			this.linkToDownload.href = url1;
			this.linkToDownload.download =
				'Отчет_' + moment().format('DD-MM-YYYY') + '.xlsx';
			this.linkToDownload.click();
			URL.revokeObjectURL(url1);
		});
	};

	getBlob = (url, dataToSend) => {
		return new Promise(function(resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('POST', url, true);
			xhr.setRequestHeader(
				'Content-Type',
				'application/json; charset=utf-8'
			);
			xhr.responseType = 'blob';
			xhr.onload = function() {
				if (this.status == 200) {
					resolve(this.response);
				} else {
					var error = new Error(this.statusText);
					error.code = this.status;
					reject(error);
				}
			};
			xhr.onerror = function() {
				reject(new Error('Network Error'));
			};
			xhr.send(JSON.stringify(dataToSend));
		});
	};

	/*JSONToCSVConvertor = (JSONData, tableTitle) => {
		const {
			columns,
			defaultColumns,
			reportTitle
		} = this.props;
		var arrData =
			typeof JSONData !== 'object'
				? JSON.parse(JSONData)
				: JSONData;
		var CSV = '';
		var filename =
			'Query_' + moment().format('DD-MM-YYYY') + '.csv';
		if (reportTitle !== '')
			CSV +=
				'Рабочее место' + '\r\n' + reportTitle + '\r\n';
		if (tableTitle !== '')
			CSV += 'Таблица' + '\r\n' + tableTitle + '\r\n\n';
		let row = '';
		columns.forEach((col, index) => {
			if (col.columnRef !== undefined) {
				row +=
					'"' + defaultColumns[col.columnRef].head + '";';
			} else if (col.counter !== undefined) {
				row += '"' + col.head + '";';
			}
		});
		CSV += row + '\r\n';
		for (let i = 0; i < arrData.length; i++) {
			row = '';
			for (let index in arrData[i]) {
				if (typeof arrData[i][index] !== 'undefined')
					row += '"' + arrData[i][index] + '";';
				else row += '"";';
			}
			row = row.slice(0, row.length - 1);
			CSV += row + '\r\n';
		}
		if (CSV === '') {
			console.log('Invalid data for CSV');
			return;
		}
		var blob = new Blob(['\ufeff', CSV], {
			type: 'text/csv;charset=utf-8;'
		});
		if (navigator.msSaveBlob) {
			// IE 10+
			navigator.msSaveBlob(blob, filename);
		} else {
			var link = document.createElement('a');
			if (link.download !== undefined) {
				var url = URL.createObjectURL(blob);
				link.setAttribute('href', url);
				link.setAttribute('download', filename);
				link.style = 'visibility:hidden';
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
	};*/

	render() {
		const {
			caption,
			defaultColumns,
			columns,
			data,
			width,
			selected,
			rowClick,
			id,
			onDragStart,
			onDragEnd,
			onDrop,
			preserveDefaultData,
			hideButton,
			customEmptyMessage
		} = this.props;

		const {
			isVisible,
			sortingFlags,
			showColumnsSettings,
			defaultData,
			columnsSettings,
			hint,
			popupX,
			popupY,
			showFilterBlock,
			filterValues
		} = this.state;

		let weightSum = 0;

		columns.forEach(
			col =>
				(weightSum +=
					col.columnRef !== undefined
						? defaultColumns[col.columnRef].weight
						: 1)
		);

		const filters = [];

		const heads = columns
			? columns.map((item, index) => {
					const calcWidth = item.width
						? item.width
						: item.columnRef !== undefined
						? (defaultColumns[item.columnRef].weight *
								100) /
								weightSum +
						  '%'
						: 100 / weightSum + '%';

					let filterContent =
						item.columnRef !== undefined ? (
							<input
								type="text"
								placeholder={
									defaultColumns[item.columnRef].head
								}
								value={
									filterValues[index]
										? filterValues[index]
										: ''
								}
								onChange={e =>
									this.onFilterChange(e, index)
								}
							/>
						) : null;

					filters.push(
						<div
							key={'tf' + index}
							className="tfilter"
							style={{
								width: calcWidth
							}}>
							{filterContent}
						</div>
					);

					return (
						<div
							className="th"
							key={'th' + index}
							style={{
								width: calcWidth
							}}
							onMouseOver={e =>
								this.onCellOver(
									e,
									item.head
										? item.head
										: defaultColumns[item.columnRef].head
								)
							}
							onMouseMove={e => this.onCellMove(e)}
							onMouseOut={this.onCellOut}
							onClick={
								this.props.sortData &&
								item.columnRef !== undefined
									? () => this.sortData(id, index)
									: null
							}>
							{(item.head
								? item.head
								: defaultColumns[item.columnRef].head) +
								' ' +
								(sortingFlags[index] === 1
									? '⭣'
									: sortingFlags[index] === -1
									? '⭡'
									: '')}
						</div>
					);
			  })
			: [];

		const rows = data.map((row, index) => {
			const activeRow =
				!preserveDefaultData ||
				(preserveDefaultData && !defaultData.includes(row));
			const draggableRow =
				!preserveDefaultData ||
				(preserveDefaultData && !defaultData.includes(row));

			let toShow = true;
			for (let i = 0; i < columns.length; i++) {
				if (
					filterValues[i] !== undefined &&
					filterValues[i].length > 0
				) {
					const prop =
						defaultColumns[columns[i].columnRef].property;
					console.warn('row[prop]');
					console.warn(row[prop]);

					let val = row[prop];
					if (
						prop.indexOf('Date') !== -1 &&
						val !== undefined
					) {
						val = val
							.split('T')[0]
							.split('-')
							.reverse()
							.join('.');
					}
					if (
						val === undefined ||
						(columns[i].columnRef !== undefined &&
							val !== undefined &&
							val
								.toString()
								.toLowerCase()
								.indexOf(filterValues[i].toLowerCase()) ===
								-1)
					) {
						toShow = false;
						break;
					}
				}
			}

			return toShow ? (
				<div
					key={'tr' + index}
					onClick={
						activeRow && rowClick
							? () => rowClick(id, index)
							: null
					}
					draggable={draggableRow}
					onDragStart={e => {
						e.dataTransfer.setData('text', 'foo');
						this.onCellOut();
						onDragStart && onDragStart(id, index);
					}}
					/*onDragEnter={e => {
						e.stopPropagation();
						e.preventDefault();
						return false;
					}}*/
					onDragOver={e => {
						//e.stopPropagation();
						e.preventDefault();
						//return false;
					}}
					onDrop={e => {
						e.preventDefault();
						onDrop && onDrop(id, index);
					}}
					onDragEnd={
						onDragEnd ? () => onDragEnd(id, index) : null
					}
					className={
						'tr ' +
						(!activeRow ? 'row_inactive ' : '') +
						(selected && selected.includes(index)
							? 'selected'
							: '')
					}>
					{this.getRow(index)}
				</div>
			) : null;
		});

		const columnOptions = defaultColumns.map(
			(col, index) => {
				return (
					<label
						key={col.property}
						className="column-option">
						<input
							type="checkbox"
							name={col.property}
							checked={columnsSettings[index]}
							onChange={() => this.switchColumn(index)}
						/>
						{col.head}
					</label>
				);
			}
		);

		return (
			<div className="table-cont">
				<div
					className={
						'table' + (isVisible ? '' : ' table-hided')
					}
					style={{ width: width }}>
					<div className="table-settings-block">
						<button
							title="Экспорт в Excel"
							className={'button__square'}
							onClick={this.exportToExcel}>
							<img
								src="images/Microsoft_Excel_2013_logo.svg"
								alt=""
							/>
						</button>
						<button
							title="Фильтры"
							className={'button__square'}
							onClick={this.setFilterBlock}>
							<img src="images/filter.png" alt="" />
						</button>
						<button
							title="Настройка столбцов"
							className={'button__square'}
							onClick={this.setColumnsSettings}>
							<img src="images/columns.png" alt="" />
						</button>
					</div>
					<div className="caption">{caption}</div>
					{showFilterBlock && (
						<div className="filter-block">{filters}</div>
					)}
					<div className="thead">
						<div className="tr">{heads}</div>
					</div>
					<div className="tbody">
						{rows.length > 0 ? (
							rows
						) : (
							<div
								className="drop-cont"
								onDragOver={event => event.preventDefault()}
								onDrop={
									onDrop ? () => onDrop(id, -1) : null
								}>
								{customEmptyMessage
									? customEmptyMessage
									: 'Нет элементов для отображения'}
							</div>
						)}
					</div>
					{showColumnsSettings && (
						<div className="column-options-cont">
							{columnOptions}
						</div>
					)}
				</div>
				{hideButton && (
					<button
						title={isVisible ? 'Свернуть' : 'Развернуть'}
						className={
							'hide-button' +
							(isVisible ? '' : ' hide-button-hided') +
							(showFilterBlock
								? ' hide-button-lowered'
								: '')
						}
						onClick={this.setVisibility}>
						{isVisible ? '<' : '>'}
					</button>
				)}
				{hint !== '' && (
					<div
						className="hint"
						style={{ top: popupY, left: popupX }}>
						{hint}
					</div>
				)}
				<a ref={link => (this.linkToDownload = link)} />
			</div>
		);
	}
}
export default Table;
