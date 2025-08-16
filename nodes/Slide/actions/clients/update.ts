import { INodeProperties } from "n8n-workflow";

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Fields',
		name: 'fields',
		placeholder: 'Add Field',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['clients'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
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
				routing: {
					send: {
						property: 'comments',
						value: "={{ $value }}",
						type: 'body',
					},
				},
			},
		],
	},
];
