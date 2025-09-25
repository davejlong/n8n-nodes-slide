import { INodeProperties } from "n8n-workflow";
import { SlideNode } from "../../GenericFunctions";

export const getAllDescription: INodeProperties[] = [
	...SlideNode.GetSortDescription('clients', ['id']),
]
