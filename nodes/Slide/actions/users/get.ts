import { INodeProperties } from "n8n-workflow";

export const getDescription: INodeProperties[] = [
	{
		displayName: 'User ID',
		name: 'id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['get'],
			},
		},
	},
];
