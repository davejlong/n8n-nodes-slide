import { IAuthenticateGeneric, Icon, ICredentialTestRequest, ICredentialType, INodeProperties } from "n8n-workflow";

export class SlideApi implements ICredentialType {
	name = 'slideApi';
	displayName = 'Slide API';
	documentationUrl = 'https://docs.slide.tech/api/#description/authentication';
	icon: Icon = 'file:slide.png';

	properties: INodeProperties[] = [
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: "=Bearer {{ $credentials.token }}"
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.slide.tech/v1',
			url: '/device'
		}
	}
}
