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
				resource: ['agents'],
				operation: ['create'],
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
		displayName: 'Display Name',
		name: 'displayName',
		type: 'string',
		default: '',
		required: true,
		description: 'Customizable display name',
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'display_name',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	}
];
