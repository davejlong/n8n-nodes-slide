import { INodeProperties } from "n8n-workflow";

export const portForwardDescription: INodeProperties[] = [
	{
		displayName: 'Port Forward ID',
		name: 'portForwardId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['deletePortForward', 'updatePortForward'],
			},
		},
	},
	// ====================================
	// Create Properties
	// ====================================
	{
		displayName: 'Destination',
		hint: 'Destination IP address and port pair',
		placeholder: '192.168.1.100:80',
		name: 'destination',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['createPortForward'],
			},
		},
		routing: {
			send: {
				property: 'dest',
				value: "={{$value}}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'Protocol',
		name: 'protocol',
		type: 'options',
		default: 'tcp',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['createPortForward'],
			},
		},
		options: [
			{ name: 'TCP', value: 'tcp' },
			{ name: 'UDP', value: 'udp' },
		],
		routing: {
			send: {
				property: 'proto',
				value: "={{$value}}",
				type: 'body',
			},
		},
	},
	// ====================================
	// Update Properties
	// ====================================
	{
		displayName: 'Fields',
		name: 'fields',
		placeholder: 'Add Field',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['updatePortForward'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Destination',
				hint: 'Destination IP address and port pair',
				placeholder: '192.168.1.100:80',
				name: 'destination',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'dest',
						value: "={{$value}}",
						type: 'body',
					},
				},
			},
			{
				displayName: 'Protocol',
				name: 'protocol',
				type: 'options',
				default: 'tcp',
				options: [
					{ name: 'TCP', value: 'tcp' },
					{ name: 'UDP', value: 'udp' },
				],
				routing: {
					send: {
						property: 'proto',
						value: "={{$value}}",
						type: 'body',
					},
				},
			},
		],
	},
];
