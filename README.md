# n8n-nodes-slide

This is an n8n community node. It lets you use [Slide](https://slide.tech) in your n8n workflows.

> Slide offers a Modern Business Continuity & Disaster Recovery (BCDR) Solution Purpose-built for MSPs. The legacy backup solutions rely on outdated technology and offer substandard support. Slide has reimagined the BCDR from the ground up by combining modern software, high-performance hardware, and end-to-end encryption at no extra cost. The result is a faster, more secure, more cost-effective solution.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Resources](#resources)  
[Version history](#version-history)  <!-- delete if not using this section -->  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Accounts

* List accounts
* Get an account

### Agents

* List agents
* Get an agent

### Alerts

* List alerts
* Get an alert

### Backups

* List backups
* Get a backup

### Clients

* List clients
* Get a client

### Devices

* List devices
* Get a device

### Networks

* List networks
* Get a network

### Restores

* List restores
* Get a restore

### Snapshots

* List snapshots
* Get a snapshot

### Users

* List users
* Get a user

## Credentials

n8n-nodes-slide requires an API token from Slide. Retreive an API token by logging into the [Slide console](https://console.slide.tech).

## Compatibility

Tested against n8n version 1.103.2

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Slide API documentation](https://docs.slide.tech/api/)

## Version history

### 0.1.0
Initial release with basic support for List and Get actions on each endpoint

### 0.1.1
Populated README file and fixed the Slide icon to use an SVG

### 0.1.2
Fix minor bug with Restores Type showing on all resources

### 0.1.3
Add all filter options for List and Get actions on each endpoint.
