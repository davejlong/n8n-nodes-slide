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
				type: ['file'],
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
				type: ['file'],
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
		displayName: 'Other Options',
		name: 'other',
		placeholder: 'Other Options',
		type: 'collection',
		default: {},
		displayOptions: {
			show: {
				resource: ['restores'],
				operation: ['create'],
				type: ['file'],
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
		]
	}
];
