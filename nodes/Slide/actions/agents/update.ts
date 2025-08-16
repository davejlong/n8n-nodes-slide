import { INodeProperties } from "n8n-workflow";

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Fields',
		name: 'fields',
		placeholder: 'Add Field',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['update'],
			}
		},
		default: {},
		options: [
			{
				displayName: 'Display Name',
				name: 'displayName',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'display_name',
						value: "={{ $value }}",
						type: 'body'
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
				routing: {
					send: {
						property: 'passphrase',
						value: "={{ $value }}",
						type: 'body',
					}
				}
			},
			{
				displayName: 'Sealed',
				name: 'sealed',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						property: 'sealed',
						value: "={{ $value }}",
						type: 'body',
					},
				},
			},
			{
				displayName: 'VSS Writer Configs',
				name: 'vssWriterConfigs',
				placeholder: 'Add VSS Writer Config',
				type: 'fixedCollection',
				default: [],
				typeOptions: {
					multipleValues: true,

				},
				options: [
					{
						name: 'vssWriterConfigs',
						displayName: 'VSS Writer Config',
						values: [
							{
								displayName: 'Writer ID',
								name: 'writer_id',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Writer Name',
								name: 'writer_name',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Excluded',
								name: 'excluded',
								type: 'boolean',
								default: false,
							}
						]
					}
				],
				routing: {
					send: {
						property: 'vss_writer_configs',
						value: "={{ $value.vssWriterConfigs }}",
						type: 'body',
					}
				}
			}
		],
	},
];
