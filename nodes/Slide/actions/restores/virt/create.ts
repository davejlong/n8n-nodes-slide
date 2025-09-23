import { INodeProperties } from "n8n-workflow";

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Device ID',
		name: 'deviceId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['restores-virt'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'device_id',
				value: "={{$value}}",
				type: 'body',
			}
		}
	},
	{
		displayName: 'Snapshot ID',
		name: 'snapshotId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['restores-virt'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'snapshot_id',
				value: "={{$value}}",
				type: 'body',
			}
		}
	},
	{
		displayName: 'Purpose',
		name: 'purpose',
		type: 'options',
		default: 'test',
		displayOptions: {
			show: {
				resource: ['restores-virt'],
				operation: ['create'],
			},
		},
		options: [
			{ name: 'Disaster', value: 'disaster' },
			{ name: 'Test', value: 'test' },
		],
		routing: {
			send: {
				property: 'purpose',
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
		displayOptions: {
			show: {
				resource: ['restores-virt'],
				operation: ['create'],
			},
		},
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
		displayName: 'Network ID',
		name: 'networkSource',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['restores-virt'],
				operation: ['create'],
				networkType: ['network-id']
			},
		},
		routing: {
			send: {
				property: 'network_source',
				value: "={{$value}}",
				type: 'body',
			}
		}
	},
	//TODO: Figure out how to send an array of strings as the property
	// {
	// 	displayName: 'Enable Administrator User',
	// 	name: 'passwordlessAdminUser',
	// 	type: 'boolean',
	// 	default: false,
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['restores-virt'],
	// 			operation: ['create'],
	// 		},
	// 	},
	// 	routing: {
	// 		send: {
	// 			property: 'boot_mods',
	// 			value: "={{$if($value, 'passwordless_admin_user', '')}}",
	// 			type: 'body',
	// 		}
	// 	}
	// },
	{
		displayName: 'Other Options',
		name: 'otherOptions',
		placeholder: 'Other Options',
		type: 'collection',
		default: {},
		displayOptions: {
			show: {
				resource: ['restores-virt'],
				operation: ['create'],
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
				displayName: 'Disk Bus',
				name: 'diskBus',
				type: 'options',
				default: 'virtio',
				options: [
					{name: 'SATA', value: 'sata' },
					{ name: 'VirtIO', value: 'virtio' },
				],
				routing: {
					send: {
						property: 'disk_bus',
						value: "={{$value}}",
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
					}
				}
			},
			{
				displayName: 'Passphrase',
				name: 'passphrase',
				type: 'string',
				typeOptions: {
					password: true,
				},
				default: '',
				routing: {
					send: {
						property: 'passphrase',
						value: "={{$value}}",
						type: 'body',
					},
				},
			},
		],
	},
];
