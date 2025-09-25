import { INodeProperties } from "n8n-workflow";
import { SlideNode } from "../../GenericFunctions";

export const getAllDescription: INodeProperties[] = [
	...SlideNode.GetSortDescription('restores', ['id'], {
		type: ['file', 'image']
	}),
	...SlideNode.GetSortDescription('restores', ['created'], {
		type: ['virt']
	}),
];
