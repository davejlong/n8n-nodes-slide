import { INodeProperties } from "n8n-workflow";
import { createDescription } from "./create";
import { SlideNode } from "../../../GenericFunctions";
import { updateDescription } from "./update";

export const virtDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['restores-virt'],
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
						url: "=/restore/virt",
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
						url: "=/restore/virt/{{$parameter.id}}",
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
						url: "=/restore/virt/{{$parameter.id}}",
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
						url: "=/restore/virt",
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
						url: "=/restore/virt/{{$parameter.id}}",
					},
				},
			},
		],
	},
	...SlideNode.GetSortDescription('restores-virt', ['id']),
	{
		displayName: 'Virtual Machine ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['restores-virt'],
				operation: ['get', 'delete', 'update'],
			},
		},
	},
	...createDescription,
	...updateDescription,
];
