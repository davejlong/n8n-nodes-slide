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
				resource: ['alerts'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get alert',
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
				action: 'List alerts',
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
			{
				name: 'Update',
				value: 'update',
				action: 'Update alert',
				routing: {
					request: {
						method: 'PATCH',
						url: "=/alert/{{$parameter.id}}"
					},
				},
			},
		],
	},
	{
		displayName: 'Alert ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['get', 'update'],
			},
		},
	},
	...getAllDescription,
	...updateDescription,
];
