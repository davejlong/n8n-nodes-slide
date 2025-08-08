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
				resource: ['alerts'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get an alert',
				routing: {
					request: {
						method: 'GET',
						url: "=/alert/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many alerts',
				routing: {
					request: {
						method: 'GET',
						url: '/alert',
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
