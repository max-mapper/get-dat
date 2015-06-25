# Editing data with flatsheet

[Flatsheet](http://flatsheet.io/) is an open source data editor application.

For this workshop we have prepared `data-editor`, a standalone version of Flatsheet

(If doing this on your own machine you can get flatsheet by running `npm install data-editor -g`)

First lets export a CSV of the eukaryota data that you cloned in the last section.

```
dat export -d organisms -f csv > organisms.csv
```

Now you should have a file called `organisms.csv`.

To edit the file using `data-editor`, run this commend:

```
data-editor organisms.csv 80
```

(If running on your machine you can leave off the 80 above and then open `http://localhost:4455`)

Now open the URL from `welcome.txt` in a new tab. You should hopefully see some data!

From the data-editor interface you can do four things:

- edit values in the cells (including a popup editor for long text)
- add rows
- add columns
- export a new csv file

After making some revisions to the data, export a new csv.