---
layout: docs
---
### Setting the theme

You can set the theme simply by changing the string in the `set-theme` behavior (use the "user behaviors" command to open your config file). June and June Night are the officially supported light and dark themes respectively, but I've tried to make sure that Juno plays well with others – simply start typing to get a list of available themes.

Note that, for now, if you want Gadfly to look right you'll need to use the light theme.

{% highlight clojure %}
(:lt.objs.style/set-theme "june")
{% endhighlight %}

### Changing tab settings

To change tab settings for Julia specifically you'll need to add the tab behaviour to `:editor.julia`, not just `:editor`. In your user behaviours file is an example of adding a setting to `:editor.clojure` which you can follow, but basically it will look something like:
{% highlight clojure %}
{:+
  {:editor [...]
   :editor.julia [(:lt.objs.editor/tab-settings false 4 4)]
  }}
{% endhighlight %}

If you type `:editor.julia [` followed by `indent`, autocompletion should pop up to complete the setting for you and explain the parameters.

### Understanding the user behaviours file

I want to make configuring Juno easier but for now we're stuck with behaviour files, which are a lot like JSON with Clojure syntax. A lightning tour:

| Data Type | Clojure                    | Julia                | JSON               |
|-----------|----------------------------|----------------------|--------------------|
| Symbol    | `:foo`                     | `:foo`               | `"foo"`            |
| Map       | `{:a 1 :b 2}`              | `{:a => 1, :b => 2}` | `{"a": 1, "b": 2}` |
| Array     | `[1 2 3]` or `(1 2 3)`     | `[1, 2, 3]`          | `[1, 2, 3]`        |

Whitespace and newlines are not significant.

A behaviour file such as:

{% highlight clojure %}
{:+
  {:app [:lt.objs.langs.julia.proc/connect-on-startup
         (:lt.objs.langs.julia/julia-path "julia")]

   :editor [(:lt.objs.style/set-theme "june-night")]}}
{% endhighlight %}

Means "add two settings to the application – one to connect to Julia at startup and one to set the path, and add a setting to editors to change the colour scheme". If you try to add a new setting, you'll find that autocomplete pops up to give you hints about what's available. Use the "user behaviors" command to see your config file and try this out.

You can also use the "user keymap" command to set custom shortcuts in a very similar way.
