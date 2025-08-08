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
				resource: ['networks'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get an network',
				routing: {
					request: {
						method: 'GET',
						url: "=/network/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many networks',
				routing: {
					request: {
						method: 'GET',
						url: '/network',
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
