---
layout: docs
---
Connecting Light Table to the terminal or IJulia is straightforward. As usual, execute commands in Light Table by pressing `Crtl+Space`, typing the command's name and pressing `Enter` once it becomes selected.

* Execute `Show connect bar`
* Disconnect the current Julia client, if there is one, by pressing the "Disconnect" button
* Click `Add Connection`
* Click `Julia (manual)`
* Copy the line of code which pops up
* In the Julia REPL or IJulia, execute `using Jewel` followed by the copied line of code.

This will look something like:

{% highlight julia %}
julia> using Jewel

julia> @async Jewel.server(64546, 1266)
Task (queued) @0x00007fa46fb1ae80

julia>
{% endhighlight %}

You can use this to develop packages using the autocompletion and module support available in Juno, while still using the REPL for throwaway input.

You can also use this if you need to read input – leave off the `@aync` above, and all input to the terminal will be readable from Julia's `STDIN`.
