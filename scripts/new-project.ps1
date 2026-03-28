param(
  [Parameter(Mandatory = $true)]
  [string]$ProjectName,

  [string]$TargetRoot = "D:\workspace"
)

$ErrorActionPreference = 'Stop'

$templateDir = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$targetDir = Join-Path $TargetRoot $ProjectName

if (Test-Path $targetDir) {
  throw "Target already exists: $targetDir"
}

if (-not (Test-Path $TargetRoot)) {
  New-Item -ItemType Directory -Path $TargetRoot | Out-Null
}

Write-Host "Creating project from template..."
Write-Host "Template: $templateDir"
Write-Host "Target:   $targetDir"

Copy-Item -Path $templateDir -Destination $targetDir -Recurse

$pathsToRemove = @(
  '.git',
  'node_modules',
  'dist'
)

foreach ($relative in $pathsToRemove) {
  $full = Join-Path $targetDir $relative
  if (Test-Path $full) {
    Remove-Item -Path $full -Recurse -Force
  }
}

$packageJsonPath = Join-Path $targetDir 'package.json'
if (Test-Path $packageJsonPath) {
  $package = Get-Content $packageJsonPath -Raw | ConvertFrom-Json
  $package.name = $ProjectName
  $package | ConvertTo-Json -Depth 100 | Set-Content -Path $packageJsonPath -Encoding UTF8
}

Push-Location $targetDir
try {
  npm install
  git init -b main | Out-Null
} finally {
  Pop-Location
}

Write-Host "Done."
Write-Host "Next steps:"
Write-Host "  cd $targetDir"
Write-Host "  npm run dev"
