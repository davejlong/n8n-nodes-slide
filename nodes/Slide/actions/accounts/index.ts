import { INodeProperties } from "n8n-workflow";
import { getAllDescription } from "./getAll";
import { updateDescription } from "./update";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['accounts'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get an account',
				routing: {
					request: {
						method: 'GET',
						url: "=/account/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many accounts',
				routing: {
					request: {
						method: 'GET',
						url: '/account',
					},
					send: {
						paginate: true,
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an account',
				routing: {
					request: {
						method: 'PATCH',
						url: "=/account/{{$parameter.id}}",
					},
				},
			},
		],
	},

	{
		displayName: 'Account ID',
		name: 'id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['accounts'],
				operation: ['get', 'update'],
			},
		},
	},
	...getAllDescription,
	...updateDescription,
];
