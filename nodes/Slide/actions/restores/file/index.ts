import { INodeProperties } from "n8n-workflow";
import { createDescription } from "./create";
import { SlideNode } from "../../../GenericFunctions";

export const fileDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['restores-file'],
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
						url: "=/restore/file/{{$parameter.id}}/browse",
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
						url: "=/restore/file",
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
						url: "=/restore/file/{{$parameter.id}}",
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
						url: "=/restore/file/{{$parameter.id}}",
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
						url: "=/restore/file",
					},
					send: {
						paginate: true,
					},
				},
			},
		],
	},
	...SlideNode.GetSortDescription('restores-file', ['id']),
	{
		displayName: 'File Restore ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['restores-file'],
				operation: ['get', 'delete', 'browse'],
			},
		},
	},
	...createDescription,
];
