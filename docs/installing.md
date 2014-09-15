---
layout: page
---
## Getting Light Table

* Go to the [website](http://www.lighttable.com/) and download Light Table
* Unzip the folder into a convenient location. Your desktop is fine, on OS X the Applications folder will work too.
* Double click the `LightTable` executable (`LightTable.exe` on Windows).

## Installing the Plugin

The following commands should be run in Light Table. To execute commands, hit `Ctrl+Space` then type the command's name (you'll be selecting from search results).

* Install the plugin with Light Table's plugin manager ("show plugin manager" command, search for "Juno").
* Execute the "user behaviors" command and in the config file that appears, change "default" to "june".
* Either make sure `julia` is on your path or see "Setting the Julia path" below.
* Now restart LT. You should see a working indicator as the Julia client boots up – this may take a while the first time. Use the "toggle console" command to see output.
* Open a `.jl` file (or press `Ctrl-N` for a new one), type something, `Ctrl-Enter` to evaluate the line (`Cmd-N`/`Cmd-Enter` on OS X).

See the troubleshooting section below if you have problems.

## Upgrading

When an update is available, first `Pkg.update()` in Julia, then use the "update all outdated" command in Light Table. On Windows you **must** disconnect Julia before updating – use "show connect bar" and click "disconnect".

You can safely upgrade to point releases of either the package or plugin independently, but you'll still need to close Julia before updating the plugin on Windows.

## Setting the Julia path

Unfortunately this is a little tricky at the moment. In the config file you opened with "user behaviors" you need to add `(:lt.objs.langs.julia/julia-path "/path/to/julia")` inside the square brackets after `:app` – see [[Settings & Configuration]] for more information and [here](https://gist.github.com/one-more-minute/9882389) for an example config file.

If it looks like Light Table can't find Julia, open an issue (copy your user.behaviors file) and I'll see what I can do.

## Troubleshooting

Juno tries to install Jewel.jl – the required Julia package – automatically, but if things aren't working check that it's loaded with `Pkg.status()` (and if not, `Pkg.add("Jewel")`).

You should also check the version of the Julia plugin for Light Table (in the "installed" tab in Light Table's plugin manager). Both the plugin and the package should have the same minor version number (currently 0.7.x). If not execute the "refresh plugin list", then when this is done "update all outdated".

#### Light Table Freezes

There's an unfortunate issue on Windows at the moment where LT will (fairly rarely) freeze and refuse to boot. The solution is to head to the `C:\Users\[YourUserName]\AppData\Local\LightTable` folder and delete everything inside except for the `settings` folder. You'll need to re-download the plugins but settings like the Julia path will be preserved.
