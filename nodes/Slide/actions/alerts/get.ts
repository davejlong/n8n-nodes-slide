import { INodeProperties } from "n8n-workflow";

export const getDescription: INodeProperties[] = [
	{
		displayName: 'Alert ID',
		name: 'id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['get'],
			},
		},
	},
];
