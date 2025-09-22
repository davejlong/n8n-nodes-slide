import { INodeProperties } from "n8n-workflow";
import { createVirtDescription } from "./create/virt";
import { createImageDescription } from "./create/image";

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
		displayName: 'Passphrase',
		name: 'passphrase',
		type: 'string',
		typeOptions: {
			password: true,
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['restores'],
				operation: ['create'],
			},
		},
	},
	...createVirtDescription,
	...createImageDescription,
];
