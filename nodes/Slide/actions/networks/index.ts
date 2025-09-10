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
				resource: ['networks'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get network',
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
				action: 'List networks',
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
	{
		displayName: 'Network ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['get'],
			},
		},
	},
	...getAllDescription,
];
