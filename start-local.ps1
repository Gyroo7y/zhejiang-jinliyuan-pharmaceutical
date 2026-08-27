param([int]$Port = 4173)

$SiteUrl = "http://127.0.0.1:$Port/#home"
$ExistingServer = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue

if ($ExistingServer) {
    Write-Host "Jinliyuan preview is already available at $SiteUrl"
    Start-Process $SiteUrl
    exit 0
}

Write-Host "Starting the Jinliyuan local prototype at $SiteUrl"
Start-Process $SiteUrl
python -m http.server $Port
