import { INodeProperties } from "n8n-workflow";
import { virtDescription } from "./virt";
import { getAllDescription } from "./getAll";
import { imageDescription } from "./image";
import { fileDescription } from "./file";

export const description: INodeProperties[] = [
	...getAllDescription,
	...fileDescription,
	...virtDescription,
	...imageDescription,
];
