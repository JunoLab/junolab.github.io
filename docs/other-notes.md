---
layout: page
---
### Files & The Workspace

Go to View->Workspace (or use the "Toggle Workspace" command) to see a list of files you're working with (which will be empty by default). Add files by dragging them in or right clicking and selecting "Add File/Folder". On OS X I recommend the [Opener](https://github.com/eldargab/LT-Opener) plugin.

Press `C-O` to open the fuzzy file finder, which will search through files in your workspace as you type – this is really useful.

### Tabs & Tabsets

You can view tabs side by side by right clicking on a tab and clicking "Move tab into a new tabset". Drag and drop tabs to move them. Right click on the blank area next to the last tab to close that tabset.

### Interrupting Evaluation

Juno provides a "disconnect clients" command, but this only works when Julia is responsive. If not then you can use either "interrupt the current client" to interrupt the current calculation without resetting, or "kill the client" to restart completely. Note that there is an issue with this on Windows, where "interrupt" is effectively the same as "kill".

If/when things go wrong "reset working indicator" and "clear console" are useful commands to know.
