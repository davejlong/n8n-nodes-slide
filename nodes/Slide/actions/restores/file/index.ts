import { INodeProperties } from "n8n-workflow";
import { createDescription } from "./create";

export const fileDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['restores'],
				type: ['file'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Browse',
				value: 'browse',
				action: 'Browse file restore',
				routing: {
					request: {
						method: 'GET',
						url: "=/restore/{{$parameter.type}}/{{$parameter.id}}/browse",
					},
					send: {
						paginate: true,
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create file restore',
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
				action: 'Delete file restore',
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
				action: 'Get file restore',
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
				action: 'List file restores',
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
		displayName: 'File Restore ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['restores'],
				operation: ['get', 'delete', 'browse'],
				type: ['file'],
			},
		},
	},
	...createDescription,
];
