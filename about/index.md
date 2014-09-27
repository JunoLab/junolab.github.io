---
layout: page
---
About Juno
==========

Juno began as an attempt to provide basic support for [Julia](http://julialang.org) in [Light Table](http://lighttable.com). I've been working on it over the summer as part of [Google Summer of Code](http://julialang.org/gsoc/2014/), and as the project has evolved it's come closer to providing a full IDE for Julia, with a particular focus on providing a good experience for beginners.

The [Juno plugin itself](http://github.com/one-more-minute/Juno-LT) is essentially a thin wrapper which provides nice defaults; the core functionality is provided in a bunch of packages and plugins:

* [Julia-LT](http://github.com/one-more-minute/Julia-LT) – which provides the basic language support for Julia in Light Table
* [Jewel.jl](http://github.com/one-more-minute/Jewel.jl) – A Julia source code analysis and manipulation library for Julia
* [June](http://github.com/one-more-minute/June-LT) – Nicer themes and font defaults for LT
* [Reminisce](http://github.com/one-more-minute/Reminisce) – Sublime-style saving of files and content for LT

Contributors
------------

* [one-more-minute](http://github.com/one-more-minute/)
* [Michael Hatherly](http://github.com/MichaelHatherly) (latex symbol lookup)
* [Varanas](http://github.com/Varanas)
* [JobJob](http://github.com/JobJob)

And, of course, the many great hackers in the Julia and Light Table communities who made this possible.

License
-------

All Juno-related Light Table plugins (listed above) are GPL licensed; the Julia code is MIT.
