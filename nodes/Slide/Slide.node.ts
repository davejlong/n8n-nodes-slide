import { INodeType, INodeTypeDescription, NodeConnectionType } from "n8n-workflow";

import * as Accounts from './actions/accounts';
import * as Agents from './actions/agents';
import * as Alerts from './actions/alerts';
import * as Backups from './actions/backups';
import * as Clients from './actions/clients';
import * as Devices from './actions/devices';
import * as Networks from './actions/networks';
import * as Restores from './actions/restores';
import * as Snapshots from './actions/snapshots';
import * as Users from './actions/users';

export class Slide implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Slide',
		name: 'slide',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-icon-not-svg
		icon: 'file:slide.png',
		group: ['output'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Slide API',
		defaults: {
			name: 'Slide',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'slideApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.slide.tech/v1',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		requestOperations: {
			pagination: {
				type: 'offset',
				properties: {
					limitParameter: 'limit',
					offsetParameter: 'offset',
					pageSize: 50,
					rootProperty: 'data',
					type: 'query'
				},
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				default: "accounts",
				options: [
					{
						name: "Account",
						value: "accounts"
					},
					{
						name: "Agent",
						value: "agents"
					},
					{
						name: "Alert",
						value: "alerts"
					},
					{
						name: "Backup",
						value: "backups"
					},
					{
						name: "Client",
						value: "clients"
					},
					{
						name: "Device",
						value: "devices"
					},
					{
						name: "Network",
						value: "networks"
					},
					{
						name: "Restore",
						value: "restores"
					},
					{
						name: "Snapshot",
						value: "snapshots"
					},
					{
						name: "User",
						value: "users"
					}
				]
			},
			...Accounts.description,
			...Agents.description,
			...Alerts.description,
			...Backups.description,
			...Clients.description,
			...Devices.description,
			...Networks.description,
			...Restores.description,
			...Snapshots.description,
			...Users.description,
		],
	};
}
