import { IDisplayOptions, IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties, JsonObject } from "n8n-workflow";


export namespace SlideNode {
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

	export async function compileRemoteAddresses(this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions> {
		let remoteAddresses = this.getNodeParameter('remoteAddrs.remoteAddr', null) as Array<{addr: string}>;
		if (!remoteAddresses) {
			remoteAddresses = this.getNodeParameter('fields.remoteAddrs.remoteAddr') as Array<{addr: string}>;
		}
		const { body } = requestOptions;

		body.remote_addrs = remoteAddresses.map(item => item.addr);

		return requestOptions;
	}

	export async function compileRemoteNetworks(this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions> {
		let remoteNetworks = this.getNodeParameter('remoteNets.remoteNet', null) as Array<{net: string}>;
		if (!remoteNetworks) {
			remoteNetworks = this.getNodeParameter('fields.remoteNets.remoteNet') as Array<{net: string}>;
		}
		const { body } = requestOptions;

		body.remote_networks = remoteNetworks.map(item => item.net);

		return requestOptions;
	}

	export async function compileBootMods(this:IExecuteSingleFunctions, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions> {
		const enableAdminUser = this.getNodeParameter('passwordlessAdminUser') as boolean;
		const bootMods = [];
		if (enableAdminUser) {
			bootMods.push('passwordless_admin_user');
		}

		requestOptions.body.boot_mods = bootMods;

		return requestOptions;
	}
}
