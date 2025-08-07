import { INodeProperties } from "n8n-workflow";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['users'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get an user',
				routing: {
					request: {
						method: 'GET',
						url: "=/user/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many users',
				routing: {
					request: {
						method: 'GET',
						url: '/user',
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
