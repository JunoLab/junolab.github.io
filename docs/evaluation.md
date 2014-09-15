---
layout: page
---
Everything in Julia is an expression with a value. For example, `2+2` is an expression with the value `4`. `plot(sin, 0, 25)` is also an expression with a value – a plot of the sin function.

Juno's basic job is to transform expressions into values, which it does when you press `C-Enter`. Unlike tools like RStudio, this is not done one line at a time – if you press `C-Enter` with the cursor inside a block of code, Juno will evaluate the whole block and immediately display the result. You will not usually need to select code to evaluate it.

Results are generally "single-line" by default, for example arrays are displayed as `Array{Float64,1}...`. Click on this result to open it, double click to close again.

Sometimes you'll want to remove these inline results to clear clutter – you can do this by right clicking on individual results, or by using the "clear inline results" command. Errors can also be cleared by double-clicking them.

Expressions like `println("foo")` are different – this has a value of `nothing`, represented in Juno as a small tick. Of course, it's still useful because it has the side effect of printing. If you evaluated that `println` call you'll notice a little number indicator in the bottom right corner; click on it to open the console. All calls to functions such as `println`, `show` and `display` will appear here.

You can toggle the console by right clicking on it, going to View->Console, or executing "toggle console". You can also get a better view of it by right clicking on it and clicking "open console tab" or executing the same command – see [[Other Notes]] for more info on tabs.

Quarantining side effects in this way might seem odd, especially if you're used to environments like IJulia. However, being able to have a backlog of results without cluttering your work in itself is enormously useful, and better suits the kind of development Juno is designed for. (You'll appreciate it when your code containing a `println` goes horribly wrong.)
