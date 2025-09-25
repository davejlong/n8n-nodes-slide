import { INodeProperties } from "n8n-workflow";
import { SlideNode } from "../../../GenericFunctions";

export const imageDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['restores-image'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Browse',
				value: 'browse',
				action: 'Browse image export',
				routing: {
					request: {
						method: 'GET',
						url: "=/restore/image/{{$parameter.id}}/browse",
					},
					send: {
						paginate: true,
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create image export',
				routing: {
					request: {
						method: 'POST',
						url: "=/restore/image",
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete image export',
				routing: {
					request: {
						method: 'DELETE',
						url: "=/restore/image/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get image export',
				routing: {
					request: {
						method: 'GET',
						url: "=/restore/image/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List image exports',
				routing: {
					request: {
						method: 'GET',
						url: "=/restore/image",
					},
					send: {
						paginate: true,
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update image export',
				routing: {
					request: {
						method: 'PATCH',
						url: "=/restore/image/{{$parameter.id}}",
					},
				},
			},
		],
	},
	...SlideNode.GetSortDescription('restores-image', ['id']),
	{
		displayName: 'Image Export ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['restores-image'],
				operation: ['get', 'delete', 'update', 'browse'],
			},
		},
	},
	{
		displayName: 'Device ID',
		name: 'deviceId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['restores-image'],
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
				resource: ['restores-image'],
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
		displayName: 'Image Type',
		name: 'imageType',
		type: 'options',
		default: 'vhdx',
		displayOptions: {
			show: {
				resource: ['restores-image'],
				operation: ['create'],
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
	{
		displayName: 'Enable Administrator User',
		name: 'passwordlessAdminUser',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['restores-image'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				preSend: [SlideNode.compileBootMods],
			}
		}
	},
	{
		displayName: 'Enable NFS',
		name: 'nfs',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['restores-image'],
				operation: ['create', 'update'],
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
				resource: ['restores-image'],
				operation: ['create', 'update'],
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
				resource: ['restores-image'],
				operation: ['create'],
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
