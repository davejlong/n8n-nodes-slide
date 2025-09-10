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
				resource: ['agents'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get agent',
				routing: {
					request: {
						method: 'GET',
						url: "=/agent/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List agents',
				routing: {
					request: {
						method: 'GET',
						url: '/agent',
					},
					send: {
						paginate: true,
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an agent',
				routing: {
					request: {
						method: 'PATCH',
						url: "=/agent/{{$parameter.id}}"
					}
				}
			}
		],
	},

	{
		displayName: 'Agent ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['get', 'update'],
			},
		},
	},
	...getAllDescription,
	...updateDescription,
];
