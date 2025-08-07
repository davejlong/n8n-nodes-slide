[CmdletBinding()]
param (
		[Parameter()]
		[String]
		$ResourceName
)
$ProjectRoot = Split-Path -Path $PSScriptRoot -Parent

$Template = Get-Content -Path "$ProjectRoot/utilities/action-template.ts"

$TextInfo = (Get-Culture).TextInfo

$CapitalizedResource = $TextInfo.ToTitleCase($ResourceName)

$Template = $Template -creplace "<Resource>", "$CapitalizedResource"
$Template = $Template -creplace "<resource>", "$ResourceName"

Set-Content -Path "$ProjectRoot/nodes/Slide/actions/$($ResourceName)s/index.ts" -Value $Template
