import { INodeProperties } from "n8n-workflow";
import { createDescription } from "./create";

export const imageDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['restores'],
				type: ['image'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Browse',
				value: 'browse',
				action: 'Browse image export',
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
				action: 'Create image export',
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
				action: 'Delete image export',
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
				action: 'Get image export',
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
				action: 'List image exports',
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
				action: 'Update image export',
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
		displayName: 'Image Export ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['restores'],
				type: ['image'],
				operation: ['get', 'delete', 'update', 'browse'],
			},
		},
	},
	...createDescription,
];
