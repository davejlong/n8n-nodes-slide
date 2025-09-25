import { INodeProperties } from "n8n-workflow";
import { getAllDescription } from "./getAll";
import { createDescription } from "./create";
import { updateDescription } from "./update";
import { ipsecDescription } from "./ipsec";
import { portForwardDescription } from "./portForward";
import { wireGuardDescription } from "./wireguard";

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['networks'],
			},
		},
		default: 'getAll',
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create network',
				routing: {
					request: {
						method: 'POST',
						url: "/network",
					},
				},
			},
			{
				name: 'Create IPsec Connection',
				value: 'createIpsec',
				// eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
				action: 'Create IPsec connection',
				routing: {
					request: {
						method: 'POST',
						url: "=/network/{{$parameter.netId}}/ipsec",
					},
				},
			},
			{
				name: 'Create Port Forward',
				value: 'createPortForward',
				action: 'Create port forward',
				routing: {
					request: {
						method: 'POST',
						url: "=/network/{{$parameter.netId}}/port-forward",
					},
				},
			},
			{
				name: 'Create WireGuard Peer',
				value: 'createWgPeer',
				// eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
				action: 'Create WireGuard peer',
				routing: {
					request: {
						method: 'POST',
						url: "=/network/{{$parameter.netId}}/wg-peer",
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete network',
				routing: {
					request: {
						method: 'DELETE',
						url: "=/network/{{$parameter.netId}}",
					},
				},
			},
			{
				name: 'Delete IPsec Connection',
				value: 'deleteIpsec',
				// eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
				action: 'Delete IPsec connection',
				routing: {
					request: {
						method: 'DELETE',
						url: "=/network/{{$parameter.netId}}/ipsec/{{$parameter.ipsecId}}",
					},
				},
			},
			{
				name: 'Delete Port Forward',
				value: 'deletePortForward',
				action: 'Delete port forward',
				routing: {
					request: {
						method: 'DELETE',
						url: "=/network/{{$parameter.netId}}/port-forward/{{$parameter.portForwardId}}",
					},
				},
			},
			{
				name: 'Delete WireGuard Peer',
				value: 'deleteWgPeer',
				// eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
				action: 'Delete WireGuard peer',
				routing: {
					request: {
						method: 'DELETE',
						url: "=/network/{{$parameter.netId}}/wg-peer/{{$parameter.wgPeerId}}",
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get network',
				routing: {
					request: {
						method: 'GET',
						url: "=/network/{{$parameter.netId}}",
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'List networks',
				routing: {
					request: {
						method: 'GET',
						url: '/network',
					},
					send: {
						paginate: true,
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update network',
				routing: {
					request: {
						method: 'PATCH',
						url: "=/network/{{$parameter.netId}}",
					},
				},
			},
			{
				name: 'Update IPsec Connection',
				value: 'updateIpsec',
				// eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
				action: 'Update IPsec connection',
				routing: {
					request: {
						method: 'PATCH',
						url: "=/network/{{$parameter.netId}}/ipsec/{{$parameter.ipsecId}}",
					},
				},
			},
			{
				name: 'Update Port Forward',
				value: 'updatePortForward',
				action: 'Update port forward',
				routing: {
					request: {
						method: 'PATCH',
						url: "=/network/{{$parameter.netId}}/port-forward/{{$parameter.portForwardId}}",
					},
				},
			},
			{
				name: 'Update WireGuard Peer',
				value: 'updateWgPeer',
				// eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
				action: 'Update WireGuard peer',
				routing: {
					request: {
						method: 'PATCH',
						url: "=/network/{{$parameter.netId}}/wg-peer/{{$parameter.wgPeerId}}",
					},
				},
			},
		],
	},
	{
		displayName: 'Network ID',
		name: 'netId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['networks'],
				operation: ['delete', 'get', 'update', 'createIpsec', 'deleteIpsec', 'updateIpsec', 'createPortForward', 'deletePortForward', 'updatePortForward', 'createWgPeer', 'deleteWgPeer', 'updateWgPeer'],
			},
		},
	},
	...createDescription,
	...getAllDescription,
	...updateDescription,
	...ipsecDescription,
	...portForwardDescription,
	...wireGuardDescription,
];
