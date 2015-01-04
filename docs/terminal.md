---
layout: docs
---
Connecting Light Table to the terminal or IJulia is straightforward. As usual, execute commands in Light Table by pressing `Crtl+Space`, typing the command's name and pressing `Enter` once it becomes selected.

To spawn a new REPL client:

* Disconnect any existing client by executing the "disconnect clients" command
* Execute the "spawn a terminal" command.

To connect to a running REPL:

* Disconnect any existing client by executing the "disconnect clients" command
* Execute the "connect to a running session" command
* In the Julia REPL or IJulia, execute the given line of code.

This will look something like:

{% highlight julia %}
julia> using Jewel; @async Jewel.server(64546, 1266)
Task (queued) @0x00007fa46fb1ae80

julia>
{% endhighlight %}

You can use this to develop packages using the autocompletion and module support available in Juno, while still using the REPL for throwaway input.

You can also use this if you need to read input – leave off the `@aync` above, and all input to the terminal will be readable from Julia's `STDIN`.
