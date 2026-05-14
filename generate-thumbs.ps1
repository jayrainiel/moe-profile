Add-Type -AssemblyName System.Drawing

$srcBase  = "C:\Users\DELL\Documents\GitHub\moe-profile\images\photography"
$destBase = "C:\Users\DELL\Documents\GitHub\moe-profile\images\thumbs"
$maxDim   = 800
$quality  = 78

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
             Where-Object { $_.MimeType -eq 'image/jpeg' } |
             Select-Object -First 1

$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality, [long]$quality
)

$files = Get-ChildItem -Recurse -Include "*.jpg","*.jpeg","*.JPG","*.JPEG" $srcBase
$total = $files.Count
$done  = 0

foreach ($file in $files) {
    $rel  = $file.FullName.Substring($srcBase.Length)
    $dest = $destBase + $rel

    if ((Test-Path $dest) -and (Get-Item $dest).LastWriteTime -ge $file.LastWriteTime) {
        $done++
        continue
    }

    $dir = Split-Path $dest -Parent
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }

    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        $w = $img.Width
        $h = $img.Height

        if ($w -le $maxDim -and $h -le $maxDim) {
            Copy-Item $file.FullName $dest -Force
        } else {
            $ratio = [Math]::Min($maxDim / $w, $maxDim / $h)
            $nw = [int]($w * $ratio)
            $nh = [int]($h * $ratio)

            $bmp = New-Object System.Drawing.Bitmap($nw, $nh)
            $g   = [System.Drawing.Graphics]::FromImage($bmp)
            $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $g.PixelOffsetMode   = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $g.DrawImage($img, 0, 0, $nw, $nh)
            $g.Dispose()
            $bmp.Save($dest, $jpegCodec, $encParams)
            $bmp.Dispose()
        }
        $img.Dispose()
    } catch {
        Write-Warning "Failed: $($file.Name)"
    }

    $done++
    if ($done % 20 -eq 0) {
        Write-Host "$done / $total processed..."
    }
}

Write-Host "Done. $done / $total files processed."

$srcMB  = [math]::Round(((Get-ChildItem -Recurse -Include "*.jpg","*.jpeg","*.JPG","*.JPEG" $srcBase | Measure-Object -Property Length -Sum).Sum / 1MB), 1)
$destMB = [math]::Round(((Get-ChildItem -Recurse -Include "*.jpg","*.jpeg","*.JPG","*.JPEG" $destBase | Measure-Object -Property Length -Sum).Sum / 1MB), 1)
$savedMB = [math]::Round($srcMB - $destMB, 1)
Write-Host "Original: $srcMB MB  ->  Thumbnails: $destMB MB  (saved $savedMB MB)"
