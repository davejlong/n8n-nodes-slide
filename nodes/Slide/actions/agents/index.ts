import { INodeProperties } from "n8n-workflow";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['agents'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get an agent',
				routing: {
					request: {
						method: 'GET',
						url: "=/agent/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many agents',
				routing: {
					request: {
						method: 'GET',
						url: '/agent',
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
		displayName: 'Agent ID',
		name: 'id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['get'],
			},
		},
	},
];
