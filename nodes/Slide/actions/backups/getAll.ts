import { INodeProperties } from "n8n-workflow";
import { SlideNode } from "../../GenericFunctions";

export const getAllDescription: INodeProperties[] = [
	...SlideNode.GetSortDescription('backups', ['start_time', 'id']),
	{
		displayName: 'Filters',
		name: 'filters',
		placeholder: 'Add Filter',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['backups'],
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
				displayName: 'Snapshot ID',
				name: 'snapshotId',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'snapshot_id',
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
		],
	},
];
