import { INodeProperties } from "n8n-workflow";
import { createDescription } from "./create";

export const virtDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['restores'],
				type: ['virt'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create virtual machine',
				routing: {
					request: {
						method: 'POST',
						url: "=/restore/{{$parameter.type}}",
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete virtual machine',
				routing: {
					request: {
						method: 'DELETE',
						url: "=/restore/{{$parameter.type}}/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get virtual machine',
				routing: {
					request: {
						method: 'GET',
						url: "=/restore/{{$parameter.type}}/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List virtual machines',
				routing: {
					request: {
						method: 'GET',
						url: "=/restore/{{$parameter.type}}",
					},
					send: {
						paginate: true,
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update virtual machine',
				routing: {
					request: {
						method: 'PATCH',
						url: "=/restore/{{$parameter.type}}/{{$parameter.id}}",
					},
				},
			},
		],
	},
	{
		displayName: 'Virtual Machine ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['restores'],
				operation: ['get', 'delete', 'update'],
				type: ['virt'],
			},
		},
	},
	...createDescription,
];
