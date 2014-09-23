---
layout: docs
---
## Troubleshooting

Juno tries to install Jewel.jl – the required Julia package – automatically, but if things aren't working check that it's loaded with `Pkg.status()` (and if not, `Pkg.add("Jewel")`).

You should also check the version of the Julia plugin for Light Table (in the "installed" tab in Light Table's plugin manager). Both the plugin and the package should have the same minor version number (currently 0.9.x). If not execute the "refresh plugin list", then when this is done "update all outdated".

#### Light Table Freezes

There's an unfortunate issue on Windows at the moment where LT will (fairly rarely) freeze and refuse to boot. The solution is to head to the `C:\Users\[YourUserName]\AppData\Local\LightTable` folder and delete everything inside except for the `settings` folder. You'll need to re-download the plugins but settings like the Julia path will be preserved.
