import { INodeProperties } from "n8n-workflow";
import { getAllDescription } from "./getAll";

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
				operation: ['get'],
			},
		},
	},
	...getAllDescription,
];
