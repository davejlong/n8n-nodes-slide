import { INodeProperties } from "n8n-workflow";

export const startDescsription: INodeProperties[] = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['backups'],
				operation: ['start'],
			},
		},
		routing: {
			send: {
				property: 'agent_id',
				value: "={{ $value }}",
				type: 'body',
			},
		},
	},
]
