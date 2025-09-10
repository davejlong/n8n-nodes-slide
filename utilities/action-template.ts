import { INodeProperties } from "n8n-workflow";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['<resource>s'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get <resource>',
				routing: {
					request: {
						method: 'GET',
						url: "=/<resource>/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'List',
				value: 'getAll',
				action: 'List <resource>s',
				routing: {
					request: {
						method: 'GET',
						url: '/<resource>',
					},
					send: {
						paginate: true,
					},
				},
			},
		],
	},

	/*
	 * Get filter parameters
	**/
	{
		displayName: '<Resource> ID',
		name: 'id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['<resource>s'],
				operation: ['get'],
			},
		},
	},
];
