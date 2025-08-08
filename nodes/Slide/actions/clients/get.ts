import { INodeProperties } from "n8n-workflow";

export const getDescription: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['clients'],
				operation: ['get'],
			},
		},
	},
];
