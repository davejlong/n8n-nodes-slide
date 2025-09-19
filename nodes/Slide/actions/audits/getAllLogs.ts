import { INodeProperties } from "n8n-workflow";

export const getAllLogsDescription: INodeProperties[] = [
	{
		displayName: 'Filters',
		name: 'filters',
		placeholder: 'Add Filter',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['audits'],
				operation: ['getAllLogs'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Action',
				name: 'action',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'audit_action_name',
						value: "={{ $value }}",
						type: 'query',
					},
				},
			},
			{
				displayName: 'Resource Type',
				name: 'resourceType',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'audit_resource_type_name',
						value: "={{ $value }}",
						type: 'query',
					},
				},
			},
		],
	},
];
