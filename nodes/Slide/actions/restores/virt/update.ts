import { INodeProperties } from "n8n-workflow";

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Options',
		name: 'options',
		placeholder: 'Add option',
		type: 'collection',
		default: {},
		displayOptions: {
			show: {
				resource: ['restores-virt'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'CPU Count',
				name: 'cpuCount',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 16,
				},
				default: 4,
				routing: {
					send: {
						property: 'cpu_count',
						value: "={{$value}}",
						type: 'body',
					},
				},
			},
			{
				displayName: 'Expires At',
				name: 'expiresAt',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						property: 'expires_at',
						value: "={{DateTime.fromISO($value).toFormat(\"yyyy-MM-dd'T'HH:mm:ssZZ\")}}", // 2024-08-23T01:25:08Z
						type: 'body',
					},
				},
			},
			{
				displayName: 'Memory (MB)',
				name: 'memory',
				type: 'number',
				default: 8192,
				typeOptions: {
					minValue: 1024,
					maxValue: 131072,
				},
				routing: {
					send: {
						property: 'memory_in_mb',
						value: "={{$value}}",
						type: 'body',
					},
				},
			},
			{
				displayName: 'Network ID',
				name: 'networkSource',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'network_source',
						value: "={{$value}}",
						type: 'body',
					}
				}
			},
			{
				displayName: 'Network Model',
				name: 'networkModel',
				type: 'options',
				default: 'virtio',
				options: [
					{ name: 'Hypervisor Default', value: 'hypervisor_default' },
					// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
					{ name: 'e1000', value: 'e1000' },
					// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
					{ name: 'rtl18139', value: 'rtl18139' },
					// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
					{ name: 'VirtIO', value: 'virtio' },
				],
				routing: {
					send: {
						property: 'network_model',
						value: "={{$value}}",
						type: 'body',
					},
				},
			},
			{
				displayName: 'Network Type',
				name: 'networkType',
				type: 'options',
				default: 'network-id',
				options: [
					{ name: 'Bridge to Local Network', value: 'bridge' },
					{ name: 'Host Only', value: 'network-hostonly' },
					{ name: 'Isolated NAT', value: 'network-nat-isolated' },
					{ name: 'Network ID', value: 'network-id' },
					{ name: 'None', value: 'network-none' },
					{ name: 'Shared NAT', value: 'network-nat-shared' },
				],
				routing: {
					send: {
						property: 'network_type',
						value: "={{$value}}",
						type: 'body',
					}
				}
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'options',
				default: 'running',
				options: [
					{ name: 'Running', value: 'running' },
					{ name: 'Stopped', value: 'stopped' },
					{ name: 'Paused', value: 'paused' },
				],
				routing: {
					send: {
						property: 'state',
						value: "={{$value}}",
						type: 'body',
					},
				},
			},
		],
	},
];
