import { INodeProperties } from "n8n-workflow"

export const getDescription: INodeProperties[] = [
	{
		displayName: 'Device ID',
		name: 'id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['devices'],
				operation: ['get'],
			},
		},
	},
];
