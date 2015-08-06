# Editing data with flatsheet

[Flatsheet](http://flatsheet.io/) is an open source data editor. We have created a tool called `data-editor`, a standalone version of Flatsheet

First, get flatsheet by running `npm install data-editor -g`.

From the data-editor interface you can do four things:

- edit values in the cells
- add rows
- add columns
- export a new CSV file

Let's export a CSV file of the eukaryota data that you cloned in the last section.

```
dat export -d organisms -f csv > organisms.csv
```

Now you should have a file called `organisms.csv`. To edit this CSV file using `data-editor`, run:

```
data-editor organisms.csv
```

This makes `organisms.csv` editable within a web-based interface, which you can use by opening [http://localhost:4455](http://localhost:4455) in your web browser, if you're on your local machine.
