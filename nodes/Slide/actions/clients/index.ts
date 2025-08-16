import { INodeProperties } from "n8n-workflow";
import { getAllDescription } from "./getAll";
import { createDescription } from "./create";
import { updateDescription } from "./update";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['clients'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create new client',
				routing: {
					request: {
						method: 'POST',
						url: '/client',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a client',
				routing: {
					request: {
						method: 'DELETE',
						url: "=/client/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an client',
				routing: {
					request: {
						method: 'GET',
						url: "=/client/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many clients',
				routing: {
					request: {
						method: 'GET',
						url: '/client',
					},
					send: {
						paginate: true,
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a client',
				routing: {
					request: {
						method: 'PATCH',
						url: "=/client/{{$parameter.id}}",
					},
				},
			},
		],
	},
	{
		displayName: 'Client ID',
		name: 'id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['clients'],
				operation: ['delete', 'get', 'update'],
			},
		},
	},
	...createDescription,
	...getAllDescription,
	...updateDescription,
];
