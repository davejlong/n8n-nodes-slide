import { INodeProperties } from "n8n-workflow";

export const getDescription: INodeProperties[] = [
	{
		displayName: 'Network ID',
		name: 'id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['get'],
			},
		},
	},
];
