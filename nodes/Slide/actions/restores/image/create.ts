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
				resource: ['restores'],
				operation: ['create'],
				type: ['image'],
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
				resource: ['restores'],
				operation: ['create'],
				type: ['image'],
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
		displayName: 'Image Type',
		name: 'imageType',
		type: 'options',
		default: 'vhdx',
		displayOptions: {
			show: {
				resource: ['restores'],
				operation: ['create'],
				type: ['image'],
			},
		},
		options: [
			{ name: 'Dynamic VHDX', value: 'vhdx-dynamic' },
			{ name: 'Fixed VHDX', value: 'vhdx' },
			{ name: 'Flat VMDK', value: 'vmdk-flat' },
			{ name: 'QCOW2', value: 'qcow2' },
			{ name: 'Raw', value: 'raw' },
			{ name: 'VHD', value: 'vhd' },
			{ name: 'VMDK', value: 'vmdk' },
		],
		routing: {
			send: {
				property: 'image_type',
				value: "={{$value}}",
				type: 'body',
			},
		},
	},
	// {
	// 	displayName: 'Enable Administrator User',
	// 	name: 'passwordlessAdminUser',
	// 	type: 'boolean',
	// 	default: false,
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['restores'],
	// 			operation: ['create'],
	// 			type: ['image'],
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
		displayName: 'Enable NFS',
		name: 'nfs',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['restores'],
				operation: ['create'],
				type: ['image'],
			},
		},
		routing: {
			send: {
				property: 'nfs',
				value: "={{$value}}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'NFS Clients',
		name: 'nfsClients',
		type: 'fixedCollection',
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['restores'],
				operation: ['create'],
				type: ['image'],
				nfs: [true],
			},
		},
		options: [
			{
				displayName: 'NFS Client',
				name: 'nfsClients',
				action: 'Add NFS Client',
				values: [
					{
						displayName: 'NFS Client',
						name: 'nfsClient',
						type: 'string',
						placeholder: '192.168.1.0/24',
						default: '',
					},
				],
			},
		],
		routing: {
			send: {
				property: 'nfs_clients',
				value: "={{ $value.nfsClients.map(nc => nc.nfsClient.trim()) }}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'Other Options',
		name: 'other',
		placeholder: 'Other Options',
		type: 'collection',
		default: {},
		displayOptions: {
			show: {
				resource: ['restores'],
				operation: ['create'],
				type: ['image'],
			},
		},
		options: [
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
