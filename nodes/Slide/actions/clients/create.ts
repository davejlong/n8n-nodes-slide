import { INodeProperties } from "n8n-workflow";

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['clients'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'name',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'Comments',
		name: 'comments',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['clients'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'comments',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	}
];
