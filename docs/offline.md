---
layout: docs
---
Light Table needs a writable directory to store plugins and configuration. By default, this is one of:

* OS X: `~/Library/Application Support/LightTable/`
* Linux: `~/.config/LightTable/`
* Windows: `C:\Users\[YourUserName]\AppData\Local\LightTable\`

This directory can be overridden by setting the `LT_USER_DIR` environment variable.

In order to install Juno offline, you simply need to download the relevant plugins and drop them into the `plugins` folder inside the LightTable directory above. The relevant plugins are:

* [Juno](https://github.com/one-more-minute/Jupiter-LT/releases)
* [Jewel](https://github.com/one-more-minute/Jewel/releases)
* [June](https://github.com/one-more-minute/June-LT/releases)
* [Reminisce](https://github.com/one-more-minute/Reminisce/releases)

Download the source code for the latest release of each and drop it into the plugins folder. Once you've done this and restarted Light Table you should see the plugins in the Plugin Manager – you can then continue the install process just as if you had installed the plugins through Light Table.
