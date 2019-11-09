import React, { Component } from 'react';
import './App.less';
import './ui/common.less';
import MenuBar from './ui/MenuBar/MenuBar';
import GroupPriority from './GroupPriority/GroupPriority';
import ITCurator from './ITCurator/ITCurator';
import constants from './constants.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeWorkspace: 0,
			RestClient: null,
			projects: null,
			departments: null,
			directions: null
		};

		/*this.httpGet(
			'https://pp2018.logrocon.com/tfs/Main/_apis/projects/2ec32129-610b-4a2e-ac97-1f3a3996027a/teams/10b5048f-37b9-435d-a7e2-d2e1469d01f7/members?api-version=4.1'
		);*/
	}

	setActiveWorkspace = num => {
		this.setState({ activeWorkspace: num });
	};

	componentDidMount() {
		const that = this;
		VSS.require(
			['TFS/WorkItemTracking/RestClient'],

			function(RestClient, Host) {
				const client = RestClient.getClient();
				that.setState({ RestClient: client }, () =>
					that.loadDictionaries()
				);
			}
		);
	}

	loadDictionaries = () => {
		const url =
			constants.protocol +
			VSS.getWebContext().host.authority +
			constants.apiLink;

		constants.dics.forEach(dic => {
			this.httpGet(url + dic).then(response => {
				const resp = JSON.parse(response);
				const resArray = resp[Object.keys(resp)[0]];
				this.setState({
					[dic + 's']: resArray
				});
			});
		});
	};

	httpGet(url) {
		return new Promise(function(resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
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
			xhr.send();
		});
	}

	render() {
		/*console.warn(VSS.getWebContext());
		console.warn(VSS.getExtensionContext());*/

		const {
			activeWorkspace,
			projects,
			departments,
			directions,
			RestClient
		} = this.state;

		let page = null;

		switch (activeWorkspace) {
			case 0:
				page = (
					<GroupPriority
						key="0"
						title={constants.workspaceOptions[0]}
						RestClient={RestClient}
						projects={projects}
						departments={departments}
						directions={directions}
					/>
				);
				break;
			case 1:
				page = (
					<GroupPriority
						key="1"
						title={constants.workspaceOptions[1]}
						RestClient={RestClient}
						projects={projects}
						departments={departments}
						directions={directions}
						flow={true}
					/>
				);
				break;
			case 2:
				page = (
					<ITCurator
						key="2"
						title={constants.workspaceOptions[2]}
						RestClient={RestClient}
						projects={projects}
						departments={departments}
						directions={directions}
					/>
				);
				break;
			case 3:
				page = (
					<ITCurator
						key="3"
						title={constants.workspaceOptions[3]}
						RestClient={RestClient}
						projects={projects}
						departments={departments}
						directions={directions}
						flow={true}
					/>
				);
				break;
			default:
				break;
		}

		return (
			<div className="App">
				<div className="top-panel">
					<MenuBar
						data={constants.workspaceOptions}
						active={activeWorkspace}
						onClickItem={this.setActiveWorkspace}
					/>
				</div>
				<div className="main-cont">{page}</div>
			</div>
		);
	}
}

export default App;
