import { INodeProperties } from "n8n-workflow";

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['create'],
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
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: 'standard',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['create'],
			},
		},
		options: [
			{ name: 'Disaster Network', value: 'standard' },
			{ name: 'Bridged Network', value: 'bridge-lan' },
		],
		routing: {
			send: {
				property: 'type',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'Comments',
		name: 'comments',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'comments',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
	/*****************************
	* Bridged Network Paramters
	******************************/
	{
		displayName: 'Bridge Device ID',
		name: 'bridgeDeviceId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['create'],
				type: ['bridge-lan'],
			},
		},
		routing: {
			send: {
				property: 'bridge_device_id',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
	/*****************************
	* Disaster Network Paramters
	******************************/
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['create'],
				type: ['standard'],
			},
		},
		routing: {
			send: {
				property: 'client_id',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'Internet Enabled',
		name: 'internet',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['create'],
				type: ['standard']
			},
		},
		routing: {
			send: {
				property: 'internet',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'Router IP and Netmask',
		name: 'routerPrefix',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: false,
		},
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['create'],
				type: ['standard']
			},
		},
		routing: {
			send: {
				property: 'router_prefix',
				value: "={{ $value.routerPrefix.routerIp.trim() }}/{{ $value.routerPrefix.netmask }}",
				type: 'body',
			},
		},
		options: [
			{
				name: 'routerPrefix',
				displayName: 'Network',
				values: [
					{
						displayName: 'Router IP',
						name: 'routerIp',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Prefix',
						name: 'netmask',
						type: 'options',
						// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
						default: 24,
						options: Array.from({length: 23}, (_, i) => {
							const prefix = 8 + i;
							return { name: `/${prefix}`, value: prefix };
						}),
					},
				],
			},
		],
	},
	{
		displayName: 'DHCP Enabled',
		name: 'dhcp',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['create'],
				type: ['standard']
			},
		},
		routing: {
			send: {
				property: 'dhcp',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'DHCP Range Start',
		name: 'dhcpRangeStart',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['create'],
				type: ['standard'],
				dhcp: [true]
			},
		},
		routing: {
			send: {
				property: 'dhcp_range_start',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'DHCP Range End',
		name: 'dhcpRangeEnd',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['create'],
				type: ['standard'],
				dhcp: [true]
			},
		},
		routing: {
			send: {
				property: 'dhcp_range_end',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'Nameservers',
		name: 'nameservers',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['create'],
				type: ['standard'],
				dhcp: [true]
			},
		},
		options: [
			{
				name: 'nameservers',
				displayName: 'Nameserver',
				placeholder: 'Add nameserver',
				values: [
					{
						displayName: 'Nameserver',
						name: 'nameserver',
						type: 'string',
						default: '',
					},
				],
			},
		],
		routing: {
			send: {
				property: 'nameservers',
				value: "={{ $value.nameservers.map(ns => ns.nameserver.trim()) }}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'WireGuest Enabled',
		name: 'wireguard',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['create'],
				type: ['standard']
			},
		},
		routing: {
			send: {
				property: 'wg',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'Wireguard Network',
		name: 'wgNetwork',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: false,
		},
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['create'],
				type: ['standard'],
				wireguard: [true],
			},
		},
		routing: {
			send: {
				property: 'wg_prefix',
				value: "={{ $value.wgPrefix.routerIp.trim() }}/{{ $value.wgPrefix.netmask }}",
				type: 'body',
			},
		},
		options: [
			{
				name: 'wgPrefix',
				displayName: 'WireGuart IP and Netmask',
				values: [
					{
						displayName: 'Router IP',
						name: 'routerIp',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Prefix',
						name: 'netmask',
						type: 'options',
						// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
						default: 24,
						options: Array.from({length: 23}, (_, i) => {
							const prefix = 8 + i;
							return { name: `/${prefix}`, value: prefix };
						}),
					},
				],
			},
		],
	},
];
