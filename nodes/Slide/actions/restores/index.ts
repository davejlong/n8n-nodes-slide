import { INodeProperties } from "n8n-workflow";

export const description: INodeProperties[] = [
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: 'image',
		options: [
			{
				name: 'File',
				value: 'file',
			},
			{
				name: 'Image',
				value: 'image',
			},
			{
				name: 'Virtual Machine',
				value: 'virt',
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['restores'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get an restore',
				routing: {
					request: {
						method: 'GET',
						url: "=/restore/{{$parameter.type}}/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many restores',
				routing: {
					request: {
						method: 'GET',
						url: "=/restore/{{$parameter.type}}",
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
