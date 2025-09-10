import { INodeProperties } from "n8n-workflow";
import { getAllDescription } from "./getAll";

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
				action: 'Get user',
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
				action: 'List users',
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
	{
		displayName: 'User ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['get'],
			},
		},
	},
	...getAllDescription,
];
