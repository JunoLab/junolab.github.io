---
layout: docs
---
## The Profiler

You can access the profile viewer at any time by evaluating `profile()`. I recommend following the [ProfileView.jl tutorial](http://github.com/TimHoly/ProfileView.jl) with Juno's profile viewer. The main differences from flame graph in ProfileView.jl are that

* The canopy chart represents the same data, but is flipped top to bottom
* Clicking a rectangle will take you to the relevant line/function
* Relevant lines in the code will display a progress meter of sorts in the background, which show how long that line took relative to others
* You can use the mouse wheel to zoom in – right click to reset or remove the chart.

## Interrupting Evaluation

Under the "Evaluation" menu Juno provides a "disconnect clients" command, but this only works when Julia is responsive. If not then you can use either "interrupt the current client" to interrupt the current calculation without resetting, or "kill the client" to restart completely. Note that there is an issue with this on Windows, where "interrupt" is effectively the same as "kill".

If/when things go wrong "reset working indicator" and "clear console" are useful commands to know.

## Useful Shortcuts
`C` = `Ctrl` (Windows, Linux), `Cmd` (Mac)

* `C-Enter`: Evaluate block / selection
* `C-Shift-Enter`: IPython-style eval (moves to the next block)
* `C-Shift-Enter`: Evaluate whole file
* `Ctrl-d`: Toggle docs
* `Ctrl-m`: Toggle methods
* `C-Shift-A`: Select block
* `C-/`: Toggle comment
* `Ctrl-Space`: Open the command bar
* `C-Shift-T`: Re-open the last closed tab (this will restore any unsaved work, and works even after restarts).

Place the cursor on a function name and press `Ctrl-D` or `Ctrl-M` to toggle docs and methods for that function, as above.

All of Juno and Light Table's features are available through the command bar, so if you're stuck on how to do something that's always the best place to start. If you need any help feel free to open an issue.
