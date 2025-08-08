import { INodeProperties } from "n8n-workflow";
import { GetSortDescription } from "../../GenericFunctions";

export const getAllDescription: INodeProperties[] = [
	...GetSortDescription('agents', ['hostname', 'id', 'name']),
	{
		displayName: 'Filters',
		name: 'filters',
		placeholder: 'Add Filter',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['getAll'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Client ID',
				name: 'clientId',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'client_id',
						value: "={{ $value }}",
						type: "query",
					},
				},
			},
		],
	},
];
