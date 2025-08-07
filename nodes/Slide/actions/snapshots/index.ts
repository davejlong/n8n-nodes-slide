import { INodeProperties } from "n8n-workflow";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['snapshots'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get an snapshot',
				routing: {
					request: {
						method: 'GET',
						url: "=/snapshot/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many snapshots',
				routing: {
					request: {
						method: 'GET',
						url: '/snapshot',
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
		displayName: 'Snapshot ID',
		name: 'id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['snapshots'],
				operation: ['get'],
			},
		},
	},
];
