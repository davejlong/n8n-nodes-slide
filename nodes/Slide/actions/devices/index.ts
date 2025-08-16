import { INodeProperties } from "n8n-workflow";
import { getAllDescription } from "./getAll";
import { updateDescription } from "./update";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['devices'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get an device',
				routing: {
					request: {
						method: 'GET',
						url: "=/device/{{$parameter.id}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many devices',
				routing: {
					request: {
						method: 'GET',
						url: '/device',
					},
					send: {
						paginate: true,
					},
				},
			},
			{
				name: 'Reboot',
				value: 'reboot',
				action: 'Reboot a device',
				routing: {
					request: {
						method: 'POST',
						url: "=/device/{{$parameter.id}}/shutdown/reboot",
					},
				},
			},
			{
				name: 'Shutdown',
				value: 'shutdown',
				action: 'Shutdown a device',
				routing: {
					request: {
						method: 'POST',
						url: "=/device/{{$parameter.id}}/shutdown/poweroff",
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a device',
				routing: {
					request: {
						method: 'PATCH',
						url: "=/device/{{$parameter.id}}"
					}
				}
			}
		],
	},

	{
		displayName: 'Device ID',
		name: 'id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['devices'],
				operation: ['get', 'reboot', 'shutdown', 'update'],
			},
		},
	},
	...getAllDescription,
	...updateDescription,
];
