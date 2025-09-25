import { INodeProperties } from "n8n-workflow";
import { SlideNode } from "../../GenericFunctions";

export const wireGuardDescription: INodeProperties[] = [
	{
		displayName: 'WireGuard Peer ID',
		name: 'wgPeerId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['deleteWgPeer', 'updateWgPeer'],
			},
		},
	},
	// ====================================
	// Create Properties
	// ====================================
	{
		displayName: 'Peer Name',
		name: 'peerName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['createwgPeer'],
			},
		},
		routing: {
			send: {
				property: 'peer_name',
				value: "={{$value}}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'Remote Networks',
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
				operation: ['createWgPeer'],
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
				operation: ['updateWgPeer'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Peer Name',
				name: 'peerName',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'peer_name',
						value: "={{$value}}",
						type: 'body',
					},
				},
			},
			{
				displayName: 'Remote Networks',
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
