import { INodeProperties } from "n8n-workflow";

export const passphraseDescription:INodeProperties[] = [
	{
		displayName: 'Agent Passphrase ID',
		name: 'passphraseId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['deletePassphrase'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'passphraseName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['addPassphrase'],
			},
		},
		routing: {
			send: {
				property: 'name',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'Passphrase',
		name: 'passphrase',
		type: 'string',
		typeOptions: {
			password: true,
		},
		default: '',
		required: true,
		description: 'The current passphrase for the agent',
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['addPassphrase', 'deletePassphrase'],
			},
		},
		routing: {
			send: {
				property: 'passphrase',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
];
