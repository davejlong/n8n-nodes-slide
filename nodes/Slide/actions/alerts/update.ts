import { INodeProperties } from "n8n-workflow";

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Resolved',
		name: 'resolved',
		type: 'boolean',
		default: false,
		description: 'Whether the alert has been resolved',
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				property: 'resolved',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
];
