import { INodeProperties } from "n8n-workflow";

export const createImageDescription: INodeProperties[] = [
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
];
