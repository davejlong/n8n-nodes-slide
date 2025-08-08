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
				resource: ['devices'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get an device',
				routing: {
					request: {
						method: 'GET',
						url: "=/device/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many devices',
				routing: {
					request: {
						method: 'GET',
						url: '/device',
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
