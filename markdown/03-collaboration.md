# Collaboration: change logs, messages, and repository status

dat isn't just about working by yourself—it's a collaborative platform. So let's try collaborating with dat.

First, let's make a cities.csv dataset with the following contents:

```
cityId, name, region, country
12389720, Portland, Oregon, USA
41031233, San Francisco, California, USA
35682579, Copenhagen, Hovedstaden, Denmark
```

Now, let's import it into a new "cities" dat repository, but this time we can add a "commit message." It's nice to add a message when you import data, so that other people (including your future self) can easily see what was changed with eac commit.

```
dat import cities.csv -d cities -k cityId  -m "Added cities dataset"
```

## Status

Now we have 3 rows, and a new dataset called 'cities'. How can we check this? First, let's run:

```
dat status
```

We can see what the current version is, how many datasets there are, how big the dat is, and when it was last updated.

## Updating data

Now, open the cities.csv file and add another row to the CSV data:

```
20560012, Paris, Île-de-France, France
```

Then, import the new data with a message:

```
dat import cities.csv -d cities -k cityId  -m "Added Paris"
```

After you import, you will see that 1 row was added, like `Wrote [+1, -0].`. If 4 rows were added (`+4`), that means you forgot to add the `--key=cityId`. It's important to specify your key!

## Commit log

To see what changed in your dat, type:

```
dat log
```

You'll see a history of changes, including the version, the date changed, and any metadata stored in the message.

## Go to another version

You can always change the dat repository (the entire repository, not just a dataset) to another version. Data is never deleted from dat. Instead, different views of the data are provided, depending on the version that you're looking at. Let's try interacting with an older version of the data.

In that output from `dat log`, look for the version of the first import. It's the very long string of letters and numbers that's preceded by `Version: `. (If you used a message, it will be the log entry with the message "Added cities dataset.") Run the below command, using that version number in place of `<version>`:

```
dat checkout <version>
```

If you run `dat status` and `dat export -d cities`, you should now see that the dat repository is at the same version it was when you first imported the cities dataset—Paris is missing.

Go back to the latest version of your repository with:

```
dat checkout latest
```

And see what datasets currently exist with:

```
dat datasets
```

## Forks, branches, conflicts?

After checking out a dataset to a previous point in the past, you can still add more data. However, adding to a version that is not the latest creates a new "fork" in the dataset.

Although forks could be represented as conflicts to be merged immediately (as one might expect in a version control system such as Git), dat's philosophy is the opposite. We think that data tools should embrace forks as key support for experimentation during the scientific process. When a user pulls from a peer, forks will also be pulled so that each user has a complete picture of the graph.
