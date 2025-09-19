import { INodeProperties } from "n8n-workflow";
import { getAllLogsDescription } from "./getAllLogs";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['audits'],
			},
		},
		default: 'getAllLogs',
		options: [
			{
				name: 'Get Many Logs',
				value: 'getAllLogs',
				action: 'List audit logs',
				routing: {
					request: {
						method: 'GET',
						url: '/audit',
					},
					send: {
						paginate: true,
					},
				},
			},
			{
				name: 'Get Many Actions',
				value: 'getAllActions',
				action: 'List audit actions',
				routing: {
					request: {
						method: 'GET',
						url: '/audit/action',
					},
					send: {
						paginate: true,
					},
				},
			},
			{
				name: 'Get Many Resource Types',
				value: 'getAllResourceTypes',
				action: 'List audit resource types',
				routing: {
					request: {
						method: 'GET',
						url: '/audit/resource',
					},
					send: {
						paginate: true,
					},
				},
			},
			{
				name: 'Get Log',
				value: 'getLog',
				action: 'Get audit log',
				routing: {
					request: {
						method: 'GET',
						url: "=/audit/{{$paramter.id}}",
					},
				},
			},
		],
	},
	{
		displayName: 'Audit ID',
		name: 'id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['audits'],
				operation: ['getLog'],
			},
		},
	},
	...getAllLogsDescription,
]
