import { INodeProperties } from "n8n-workflow";

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Fields',
		name: 'fields',
		placeholder: 'Add Field',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['accounts'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Alert Emails',
				name: 'alertEmails',
				placeholder: 'Add alert email',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				options: [
					{
						name: 'alertEmails',
						displayName: 'Alert Email',
						values: [
							{
								displayName: 'Email Address',
								name: 'emailAddress',
								type: 'string',
								default: '',
							}
						],
					},
				],
				routing: {
					send: {
						property: 'alert_emails',
						value: "={{ $value.alertEmails.map(ae => ae.emailAddress.trim()) }}",
						type: 'body',
					},
				},
			},
		],
	},
];


