$Api = Invoke-RestMethod -Uri "https://api.slide.tech/openapi.json"
$Resources = @{}
foreach($Property in ($Api.paths.PSObject.Properties | Sort-Object Name)) {
	# Write-Output $Property.Name
	foreach($Method in $Property.Value.PSObject.Properties) {
		# Write-Output $Method.Value
		$Resource = $Method.Value.tags[0]
		$Resources[$Resource] += @($Method.Value.summary)
	}
}

$ResourceList = @()

$Resources.GetEnumerator() | ForEach-Object {
	$ResourceList += @("### $($_.Name)")
	foreach($Action in $_.Value) {
		$ResourceList += @("* [ ] $Action")
	}
}

$ResourceList -join "`n" | Write-Output
