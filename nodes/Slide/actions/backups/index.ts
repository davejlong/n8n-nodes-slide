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
				resource: ['backups'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get an backup',
				routing: {
					request: {
						method: 'GET',
						url: "=/backup/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many backups',
				routing: {
					request: {
						method: 'GET',
						url: '/backup',
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
