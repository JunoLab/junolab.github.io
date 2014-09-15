---
layout: docs
---
When you open a new Julia file with `C-N` you'll notice, in the bottom-right corner, a little indicator which reads `Main`. This is the current module you're working with which is `Main` by default just as in the REPL.

Try this: Type `using Distributions`, evaluate it, then type `sample` and press `Ctrl-M`. (If you don't have Distributions, any other package/function will do).

`Ctrl-M` shows the methods defined for `sample` – click the first one and you're taken directly to line 277 of `sampling.jl` in the StatsBase source code. You'll notice that the indicator now reads `StatsBase` to indicate the module you're working in.

You can evaluate any code in this file, as well as just looking at it. Let's patch the sample function to throw an error, i.e.
{% highlight julia %}
function sample!(a::AbstractArray, x::AbstractArray; replace::Bool=true, ordered::Bool=false)
    error("Panic!")
    n = length(a)
    # ...
{% endhighlight %}
Now go back to your original file and evaluate
{% highlight julia %}
sample([1,2,3], 5)
{% endhighlight %}
This now throws an error. You can also click the link in the error to be taken back to the StatsBase code which threw it. The offending line will be highlighted red – you probably want to delete it.

This is Juno's key feature, since it allows you to build up modules and packages gradually and interactively. Of course, it will work just as well for any packages you create yourself – Juno will figure out which module you want whenever you open a file.
