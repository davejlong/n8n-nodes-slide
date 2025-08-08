import { INodeProperties } from "n8n-workflow";
import { getAllDescription } from "./getAll";
import { getDescription } from "./get";

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
		],
	},
	...getAllDescription,
	...getDescription,
];
