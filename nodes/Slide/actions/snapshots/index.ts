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
				resource: ['snapshots'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get snapshot',
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
				action: 'List snapshots',
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
	{
		displayName: 'Snapshot ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['snapshots'],
				operation: ['get'],
			},
		},
	},
	...getAllDescription,
];
