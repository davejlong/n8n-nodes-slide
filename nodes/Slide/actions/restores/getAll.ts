import { INodeProperties } from "n8n-workflow";
import { GetSortDescription } from "../../GenericFunctions";

export const getAllDescription: INodeProperties[] = [
	...GetSortDescription('restores', ['id'], {
		type: ['file', 'image']
	}),
	...GetSortDescription('restores', ['created'], {
		type: ['virt']
	}),
];
