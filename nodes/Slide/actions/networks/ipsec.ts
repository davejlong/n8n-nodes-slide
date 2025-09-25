import { INodeProperties } from "n8n-workflow";
import { SlideNode } from "../../GenericFunctions";

export const ipsecDescription: INodeProperties[] = [
	{
		displayName: 'IPsec Connection ID',
		name: 'ipsecId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['deleteIpsec', 'updateIpsec'],
			},
		},
	},
	// ====================================
	// Create Properties
	// ====================================
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['createIpsec'],
			},
		},
		routing: {
			send: {
				property: 'name',
				value: "={{$value}}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'Remote Addresses',
		hint: 'Public IP addresses of the partner-side of the router/firewall',
		name: 'remoteAddrs',
		placeholder: 'Add Remote Address',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['createIpsec'],
			},
		},
		options: [
			{
				name: 'remoteAddr',
				displayName: 'Remote Address',
				values: [
					{
						displayName: 'Remote Address',
						name: 'addr',
						type: 'string',
						default: '',
					},
				],
			},
		],
		routing: {
			send: {
				preSend: [SlideNode.compileRemoteAddresses],
			}
		}
	},
	{
		displayName: 'Remote Networks',
		hint: 'List of partner-side networks that are accessible through the IPsec connection',
		name: 'remoteNets',
		placeholder: 'Add Remote Network',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['createIpsec'],
			},
		},
		options: [
			{
				name: 'remoteNet',
				displayName: 'Remote Network',
				values: [
					{
						displayName: 'Remote Network',
						name: 'net',
						type: 'string',
						default: '',
					},
				],
			},
		],
		routing: {
			send: {
				preSend: [SlideNode.compileRemoteNetworks],
			}
		}
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
				operation: ['updateIpsec'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'name',
						value: "={{$value}}",
						type: 'body',
					},
				},
			},
			{
				displayName: 'Remote Addresses',
				hint: 'Public IP addresses of the partner-side of the router/firewall',
				name: 'remoteAddrs',
				placeholder: 'Add Remote Address',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				options: [
					{
						name: 'remoteAddr',
						displayName: 'Remote Address',
						values: [
							{
								displayName: 'Remote Address',
								name: 'addr',
								type: 'string',
								default: '',
							},
						],
					},
				],
				routing: {
					send: {
						preSend: [SlideNode.compileRemoteAddresses],

					}
				}
			},
			{
				displayName: 'Remote Networks',
				hint: 'List of partner-side networks that are accessible through the IPsec connection',
				name: 'remoteNets',
				placeholder: 'Add Remote Network',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				options: [
					{
						name: 'remoteNet',
						displayName: 'Remote Network',
						values: [
							{
								displayName: 'Remote Network',
								name: 'net',
								type: 'string',
								default: '',
							},
						],
					},
				],
				routing: {
					send: {
						preSend: [SlideNode.compileRemoteNetworks],
					}
				}
			},
		]
	},
];
