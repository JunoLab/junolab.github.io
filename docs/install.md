---
layout: docs
---

## Windows Vista/7/8

* [Download 64-bit bundle](https://junolab.amazonaws.com/release/1.0.0/juno-windows-x64.zip)
* [Download 32-bit bundle](https://junolab.amazonaws.com/release/1.0.0/juno-windows-x32.zip)

Download the bundle for your platform (if you're not sure, 64-bit should be fine) and extract it to a convenient place (your desktop is fine). Then just click to run `Juno.exe`.

## Mac OS X

* [Download bundle](https://junolab.amazonaws.com/release/1.0.0/juno-mac-x64.dmg)

Double click the downloaded dmg file to open it, then drag the `Juno` app to your applications folder and double-click to open.

## Ubuntu/Debian

* [Download 64-bit bundle](https://junolab.amazonaws.com/release/1.0.0/juno-linux-x64.zip)
* [Download 32-bit bundle](https://junolab.amazonaws.com/release/1.0.0/juno-linux-x32.zip)

First install Julia with

```
sudo add-apt-repository ppa:staticfloat/juliareleases
sudo add-apt-repository ppa:staticfloat/julia-deps
sudo apt-get update
sudo apt-get install julia
```

Then download the bundle and run the `Juno` executable.

## Upgrading

When an update is available, first `Pkg.update()` in Julia, then use the "update all outdated" command in Light Table. On Windows you **must** disconnect Julia before updating – use "show connect bar" and click "disconnect".

You can safely upgrade patch releases of either the package or plugin independently, but you'll still need to close Julia before updating the plugin on Windows.
