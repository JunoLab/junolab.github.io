---
layout: docs
---

**Note:** If you have an existing Julia installation, make sure to run `Pkg.update()` before running Juno.

## Windows Vista/7/8

* [Download 64-bit bundle](https://junolab.s3.amazonaws.com/release/1.1.0/juno-windows-x64.zip)
* [Download 32-bit bundle](https://junolab.s3.amazonaws.com/release/1.1.0/juno-windows-x32.zip)

Download the bundle for your platform (if you're not sure, 64-bit should be fine) and extract it to a convenient place (your desktop is fine). Then just click to run `Juno.exe`.

## Mac OS X (10.8+)

* [Download bundle](https://junolab.s3.amazonaws.com/release/1.1.0/juno-mac-x64.dmg)

Double click the downloaded dmg file to open it, then drag the `Juno` app to your applications folder and double-click to open.

## Ubuntu/Debian

* [Download 64-bit bundle](https://junolab.s3.amazonaws.com/release/1.1.0/juno-linux-x64.zip)
* [Download 32-bit bundle](https://junolab.s3.amazonaws.com/release/1.1.0/juno-linux-x32.zip)

Download the bundle for your platform (if you're not sure, 64-bit should be fine) and extract it to a convenient place (your desktop is fine). Then just click to run `Juno`.

## Upgrading

When an update is available, first `Pkg.update()` in Julia, then use the "update all outdated" command in Light Table. On Windows you **must** disconnect Julia before updating – use "show connect bar" and click "disconnect".

You can safely upgrade patch releases of either the package or plugin independently, but you'll still need to close Julia before updating the plugin on Windows.
