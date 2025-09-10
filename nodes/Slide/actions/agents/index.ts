import { INodeProperties } from "n8n-workflow";
import { getAllDescription } from "./getAll";
import { updateDescription } from "./update";
import { passphraseDescription } from "./passphrase";
import { pairDescription } from "./pair";
import { createDescription } from "./create";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['agents'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Add Passphrase',
				value: 'addPassphrase',
				action: 'Add agent passphrase',
				routing: {
					request: {
						method: 'POST',
						url: "=/agent/{{$parameter.id}}/passphrase",
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				// eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
				action: 'Create an agent for an auto-pair installation',
				routing: {
					request: {
						method: 'POST',
						url: "/agent",
					},
				},
			},
			{
				name: 'Delete Passphrase',
				value: 'deletePassphrase',
				action: 'Delete agent passphrase',
				routing: {
					request: {
						method: 'DELETE',
						url: "=/agent/{{$parameter.id}}/passphrase/{{$parameter.passphraseId}}",
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get agent',
				routing: {
					request: {
						method: 'GET',
						url: "=/agent/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List agents',
				routing: {
					request: {
						method: 'GET',
						url: '/agent',
					},
					send: {
						paginate: true,
					},
				},
			},
			{
				name: 'Pair Agent',
				value: 'pair',
				action: 'Pair agent',
				routing: {
					request: {
						method: 'POST',
						url: '/agent/pair',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an agent',
				routing: {
					request: {
						method: 'PATCH',
						url: "=/agent/{{$parameter.id}}"
					}
				}
			}
		],
	},

	{
		displayName: 'Agent ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['addPassphrase', 'deletePassphrase', 'get', 'update'],
			},
		},
	},
	...getAllDescription,
	...updateDescription,
	...passphraseDescription,
	...pairDescription,
	...createDescription,
];
