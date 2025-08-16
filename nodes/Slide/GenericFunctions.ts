import { IDataObject, IDisplayOptions, IHttpRequestOptions, ILoadOptionsFunctions, INodeProperties, INodePropertyOptions, PaginationOptions } from "n8n-workflow";

export function GetSortDescription(
	resource: string,
	options:string[],
	otherShowDisplayOptions: IDisplayOptions["show"] = {},
): INodeProperties[] {
	// Don't return sort options if there is only a single sort by option
	if (options.length <= 1) { return []; }

	return [
		// eslint-disable-next-line n8n-nodes-base/node-param-default-missing
		{
			displayName: 'Sort By',
			name: 'sortBy',
			type: 'options',
			displayOptions: {
				show: {
					resource: [resource],
					operation: ['getAll'],
					...otherShowDisplayOptions
				},
			},
			default: options[0],
			isNodeSetting: true,
			options: options.sort().map(option => {
				return {
					name: option, value: option
				};
			}),
			routing: {
				send: {
					type: 'query',
					property: 'sort_by',
					value: "={{$value}}",
				},
			},
		},
		{
			displayName: 'Sort Order',
			name: 'sortOrder',
			type: 'options',
			displayOptions: {
				show: {
					resource: [resource],
					operation: ['getAll'],
				},
			},
			default: false,
			isNodeSetting: true,
			options: [
				{
					name: 'Ascending',
					value: true,
				},
				{
					name: 'Descending',
					value: false,
				},
			],
			routing: {
				send: {
					type: 'query',
					property: 'sort_asc',
					value: "={{$value}}",
				},
			},
		},
	]
}

export async function GetClientsLoadMethod(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const requestOptions:IHttpRequestOptions = {
		url: 'https://api.slide.tech/v1/client',
	}

	const paginationOptions: PaginationOptions = {
		continue: "={{ $response.body.pagination.next_offset }}",
		request: {
			qs: {
				offset: "={{ $response.body.pagination.next_offset }}",
			},
			url: requestOptions.url,
		},
		requestInterval: 110,
	}

	const response:IDataObject[] = await this.helpers.requestWithAuthenticationPaginated.call(this, requestOptions, 0, paginationOptions, 'slideApi');

	this.logger.debug("================================");
	this.logger.debug("Clients load");
	this.logger.debug(JSON.stringify(response[0].res));
	this.logger.debug("================================");


	return Promise.resolve([]);
}

export function GetDevicesLoadMethod() {}

export function GetAgentsLoadMethod() {}

export function GetSnapshotsLoadMethod() {}
