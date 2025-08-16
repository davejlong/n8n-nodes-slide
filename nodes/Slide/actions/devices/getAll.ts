import { INodeProperties } from "n8n-workflow";
import { GetSortDescription } from "../../GenericFunctions";

export const getAllDescription: INodeProperties[] = [
	...GetSortDescription('devices', ['hostname']),
	{
		displayName: 'Filters',
		name: 'filters',
		placeholder: 'Add Filter',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['devices'],
				operation: ['getAll'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Client Name or ID',
				name: 'clientId',
				type: 'options',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				default: '',
				routing: {
					send: {
						property: 'client_id',
						value: "={{ $value }}",
						type: "query",
					},
				},
				typeOptions: {
					loadOptionsMethod: 'GetClientsLoadMethod'
				}
			},
		],
	},
];
