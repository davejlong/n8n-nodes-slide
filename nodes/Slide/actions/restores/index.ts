import { INodeProperties } from "n8n-workflow";
import { virtDescription } from "./virt";
import { getAllDescription } from "./getAll";
import { imageDescription } from "./image";
import { fileDescription } from "./file";

export const description: INodeProperties[] = [
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['restores'],
			},
		},
		default: 'image',
		options: [
			{
				name: 'File',
				value: 'file',
			},
			{
				name: 'Image',
				value: 'image',
			},
			{
				name: 'Virtual Machine',
				value: 'virt',
			},
		],
	},
	...getAllDescription,
	...fileDescription,
	...virtDescription,
	...imageDescription,
];
