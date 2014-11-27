---
layout: docs
---

Light Table's configuration is stored in a "behaviors" file, which you can access by executing the `Settings: User behaviors` command. Each line in this file configures part of LT. For example, the command `[:editor :lt.objs.style/set-theme "june-night"]` sets the theme to "june-night" for all editors.

**Note:** Remember that settings you add like this must come *before* the last bracket in the file and after the first. See [here](https://gist.github.com/one-more-minute/9882389) for an example behaviours file.

### Setting the theme

June and June Night are the officially supported light and dark themes respectively, but I've tried to make sure that Juno plays well with others – simply start typing to get a list of available themes.

{% highlight clojure %}
[:editor :lt.objs.style/set-theme "june-night"]
{% endhighlight %}

If you use a dark theme, you'll also need to add `[:app :lt.objs.langs.julia/dark-theme]` so that matrices and tables display correctly.

### Changing tab settings

To change your tab settings add

{% highlight clojure %}
[:editor.julia :lt.objs.editor/tab-settings false 4 4]
{% endhighlight %}

to your user.behaviors file. The `4` here is the number of spaces that each tab takes up, and the boolean parameter specifies whether LT should insert spaces when the tab character is pressed.
