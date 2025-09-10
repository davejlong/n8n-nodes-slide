import { INodeProperties } from "n8n-workflow";

export const pairDescription: INodeProperties[] = [
	{
		displayName: 'Device ID',
		name: 'deviceId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['pair'],
			},
		},
		routing: {
			send: {
				property: 'device_id',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
	{
		displayName: 'Pair Code',
		name: 'pairCode',
		type: 'string',
		default: '',
		required: true,
		description: 'Short code used to identify an unpaired agent',
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['pair'],
			},
		},
		routing: {
			send: {
				property: 'pair_code',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
];
