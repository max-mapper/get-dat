# Collaboration: change logs, messages, and repository status

So, let's try collaborating with dat. First, let's make a cities.csv dataset with the following contents:

```
cityId, name, region, country
12389720, Portland, Oregon, USA
41031233, San Francisco, California, USA
35682579, Copenhagen, Hovedstaden, Denmark
```

Now, let's import it into dat, but this time we can add a message. It's nice to add a message when you import data so that other people (including your future self) can get a quick overview of what happened to the dataset overtime.

```
dat import cities.csv -d cities -k cityId  -m "Added cities dataset"
```

Success?

## Status

Now, we should have 3 rows, and a new dataset called 'cities'. How can we check this? First, let's run:

```
dat status
```

We can see what the current version is, how many datasets there are, how big the dat is, and when it was last updated.

## Updating data

Now, open the cities.csv file and add another row to the csv data. Make sure you create all fields: `cityId` (unique), `name`, `region`, and `country`. Then import the new data with a message, perhaps something like 'added a new city'.

After you import, you should see that 1 row was added, like `Wrote [+1, -0]. If 4 rows were added, that means you forgot to add the `--key=cityId`. Don't forget to specify the unique key!

## Log

To see what changed in your dat, type

```
dat log
```

You'll see a history of changes

```
dat log
```