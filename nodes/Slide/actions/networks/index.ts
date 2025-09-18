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
				resource: ['networks'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create network',
				routing: {
					request: {
						method: 'POST',
						url: "/network",
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete network',
				routing: {
					request: {
						method: 'DELETE',
						url: "=/network/{{$parameter.id}}",
					},
				},
			},
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
			{
				name: 'Update',
				value: 'update',
				action: 'Update network',
				routing: {
					request: {
						method: 'PATCH',
						url: "=/network/{{$parameter.id}}",
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
				operation: ['delete', 'get', 'update'],
			},
		},
	},
	...createDescription,
	...getAllDescription,
	...updateDescription,
];
