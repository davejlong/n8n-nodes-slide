import { INodeProperties } from "n8n-workflow";
import { getAllDescription } from "./getAll";
import { createDescription } from "./create";

export const description: INodeProperties[] = [
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['restores'],
			},
		},
		default: 'image',
		options: [
			{
				name: 'File',
				value: 'file',
			},
			{
				name: 'Image',
				value: 'image',
			},
			{
				name: 'Virtual Machine',
				value: 'virt',
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['restores'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get restore',
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
				action: 'List restores',
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
				name: 'Create',
				value: 'create',
				action: 'Create restore',
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
				action: 'Delete restore',
				routing: {
					request: {
						method: 'DELETE',
						url: "=/restore/{{$parameter.type}}/{{$parameter.id}}",
					},
				},
			},
		],
	},
	{
		displayName: 'Restore ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['restores'],
				operation: ['get', 'delete'],
			},
		},
	},
	...getAllDescription,
	...createDescription,
];
