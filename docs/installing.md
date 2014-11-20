---
layout: docs
---

To start with, you'll want to grab [Light Table](http://www.lighttable.com), the platform that powers Juno. Once we've done that we just need to get the plugin within Light Table and make sure that it can find Julia.

Oh, and make sure to install [Julia](http://julialang.org) if you don't have it already – see [here](http://julialang.org/downloads/) for more info. Please note that Juno currently only supports the latest release, v0.3.

## Getting Light Table

* Go to the [Light Table website](http://www.lighttable.com/) and download Light Table
* Unzip the folder into a convenient location. Your desktop is fine, on OS X the Applications folder will work too.
* Double click the `LightTable` executable (`LightTable.exe` on Windows).

## Installing the Plugin

The following commands should be run in Light Table. To execute commands, hit `Ctrl+Space` then type the command's name (you'll be selecting from search results).

* Install the plugin with Light Table's plugin manager ("show plugin manager" command, search for "Juno").
* Execute the "user behaviors" command and in the config file that appears, change "default" to "june".
  * (you can [change this later](settings.html), but it's good to get it working first)
* Either make sure `julia` is on your path or see "Setting the Julia path" below.
* Now restart LT. You should see a working indicator as the Julia client boots up – this may take a while the first time. Use the "toggle console" command to see output.
* Open a `.jl` file (or press `Ctrl-N` for a new one), type something, `Ctrl-Enter` to evaluate the line (`Cmd-N`/`Cmd-Enter` on OS X).

See [troubleshooting](troubleshooting.html) if you have problems.

## Upgrading

When an update is available, first `Pkg.update()` in Julia, then use the "update all outdated" command in Light Table. On Windows you **must** disconnect Julia before updating – use "show connect bar" and click "disconnect".

You can safely upgrade patch releases of either the package or plugin independently, but you'll still need to close Julia before updating the plugin on Windows.

## Setting the Julia path

In the config file you opened with "user behaviors" you need to add `[:app :lt.objs.langs.julia/julia-path "/path/to/julia"]` – see [Settings & Configuration](settings.html) for more information and [here](https://gist.github.com/one-more-minute/9882389) for an example config file.

If it looks like Light Table can't find Julia, open an issue (copy your user.behaviors file) and I'll see what I can do.

