# Runs the 2,851 words through the three models that showed real dialect
# knowledge, one after another, unattended.
#
#   allam-plus-7b     7.4 GB   fastest, already 1,357 words done
#   mawrooth-allam-7b  14 GB   best on the calibration words
#   aya-expanse-32b   18.9 GB   agrees with ALLaM where it is right
#
# Each model writes to its own folder so consensus.mjs can compare them.
# Answers are never overwritten: a rerun picks up where this stops.

Set-Location "C:\Users\Juma\Desktop\AI\DeepSeek Harness\UAE Streets"
$node = "C:\Users\Juma\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\node\bin\node.exe"
$lms  = "$env:USERPROFILE\.lmstudio\bin\lms.exe"

$env:UNSULOTH_URL   = "http://127.0.0.1:1234/v1/chat/completions"
$env:UNSULOTH_TASKS = "tasks-words"

$models = @("allam-plus-7b", "mawrooth-allam-7b", "aya-expanse-32b")
$folders = @{
  "allam-plus-7b"     = "words-allam-plus"
  "mawrooth-allam-7b" = "words-mawrooth"
  "aya-expanse-32b"   = "words-aya"
}

foreach ($m in $models) {
  Write-Output ""
  Write-Output "==================== $m ===================="
  & $lms unload --all 2>&1 | Out-Null
  Start-Sleep -Seconds 2
  & $lms load $m --gpu max -c 8192 --identifier $m 2>&1 | Select-Object -Last 2 | ForEach-Object { "  " + $_ }
  Start-Sleep -Seconds 3

  $env:UNSULOTH_MODEL   = $m
  $env:UNSULOTH_ANSWERS = $folders[$m]
  & $node unsloth/run-local.mjs 2>&1 | Select-Object -Last 4
}
Write-Output ""
Write-Output "all three models finished"
