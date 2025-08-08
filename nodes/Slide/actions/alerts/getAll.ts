import { INodeProperties } from "n8n-workflow";
import { GetSortDescription } from "../../GenericFunctions";

export const getAllDescription: INodeProperties[] = [
	...GetSortDescription('alerts', ['created']),
	{
		displayName: 'Filters',
		name: 'filters',
		placeholder: 'Add Filter',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['getAll'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Agent ID',
				name: 'agentId',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'agent_id',
						value: "={{ $value }}",
						type: "query",
					},
				},
			},
			{
				displayName: 'Device ID',
				name: 'deviceId',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'device_id',
						value: "={{ $value }}",
						type: "query",
					},
				},
			},
			{
				displayName: 'Resolved',
				name: 'resolved',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						property: 'resolved',
						value: "={{ $value }}",
						type: 'query',
					},
				},
			},
		],
	},
];
