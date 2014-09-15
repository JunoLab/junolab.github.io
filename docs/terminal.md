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

From now on evaluating code in Light Table will have the same effect as evaluating in the REPL itself – in particular, print statements will go to the terminal and `readline()` will wait for input from the terminal rather than hanging.

This is also useful if you prefer the REPL for interactive development – even if you only use Juno for editing, it's useful to connect it to the repl for live autocompletion.

NOTE: With the new (v0.3) REPL `readline()` functionality will no longer work from LT. If you need to read STDIN you can disable the REPL by removing the `@async` part of the connection code.
