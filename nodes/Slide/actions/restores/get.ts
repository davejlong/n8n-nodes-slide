import { INodeProperties } from "n8n-workflow";

export const getDescription: INodeProperties[] = [
	{
		displayName: 'Restore ID',
		name: 'id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['restores'],
				operation: ['get'],
			},
		},
	},
];
