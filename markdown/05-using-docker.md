# Using docker

Once you have some data, and you want to do fun things with it, you usually have to install extra software. 

This can be really difficult if the software requires installing lots of dependencies, e.g. specific versions of Python or Ruby.

To make this process easier we have been using <a href="http://docker.io/" target="_blank">docker</a> to build lightweight linux containers that come pre-installed with various data processing tools and all of their dependencies.

We have written a data processing program that you can stream data into and it will render a bar chart. It uses a bar chart rendering program <a href="https://github.com/bitly/data_hacks/blob/master/data_hacks/bar_chart.py" target="_blank">written in Python</a> but in order to make it easier to use we also published a <a href="https://registry.hub.docker.com/u/bmpvieira/barchart/dockerfile/" target="_blank">docker container</a> that has Python + all the other dependencies for the bar chart pre-installed.

To render the bar chart, first make sure your terminal is inside the `eukaryota` dat repository, and run the following command:

```
dat cat | docker run -i bmpvieira/barchart
```

This pipes the `dat cat` JSON data into the barchart program running in docker. You should see a barchart show up in your terminal.
