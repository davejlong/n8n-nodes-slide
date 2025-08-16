import { INodeProperties } from "n8n-workflow";

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Fields',
		name: 'fields',
		placeholder: 'Add Field',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['devices'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Client ID',
				name: 'clientId',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'client_id',
						value: "={{ $value }}",
						type: 'body',
					},
				},
			},
			{
				displayName: 'Display Name',
				name: 'displayName',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'display_name',
						value: "={{ $value }}",
						type: 'body',
					},
				},
			},
			{
				displayName: 'Hostname',
				name: 'hostname',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'hostname',
						value: "={{ $value }}",
						type: 'body',
					},
				},
			},
		],
	},
];


