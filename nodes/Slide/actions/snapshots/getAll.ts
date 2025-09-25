import { INodeProperties } from "n8n-workflow";
import { SlideNode } from "../../GenericFunctions";

export const getAllDescription:INodeProperties[] = [
	...SlideNode.GetSortDescription('snapshots', ['created', 'backup_start_time', 'backup_end_time']),
	{
		displayName: 'Filters',
		name: 'filters',
		placeholder: 'Add Filter',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['snapshots'],
				operation: ['getAll'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Agent ID',
				name: 'agentId',
				type: 'string',
				default: '',
				routing: {
					send: {
						property: 'agent_id',
						value: "={{ $value }}",
						type: "query",
					},
				},
			},
			{
				displayName: 'Snapshot Location',
				name: 'snapshotLocation',
				type: 'options',
				default: 'exists_local',
				// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
				options: [
					{ name: 'Exists Local', value: 'exists_local' },
					{ name: 'Exists Cloud', value: 'exists_cloud' },
					{ name: 'Deleted', value: 'exists_deleted' },
					{ name: 'Deleted - Retention Rules', value: 'exists_deleted_retention' },
					{ name: 'Deleted - Manually', value: 'exists_deleted_manual' },
					{ name: 'Deleted - Other', value: 'exists_deleted_other' },
				],
				routing: {
					send: {
						property: 'snapshot_location',
						value: "={{ $value }}",
						type: "query",
					},
				},
			}
		],
	},
];
