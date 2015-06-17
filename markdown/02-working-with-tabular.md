# Write some tabular data

Let's put some data into dat.

There are three formats that dat can import: <a href="http://ndjson.org/" target="_blank">Newline-delimited JSON</a>, CSV and <a href="https://developers.google.com/protocol-buffers/" target="_blank">Protocol Buffers</a>. In this tutorial we will only work with JSON to keep things simple.

## What is newline-delimited JSON

Newline-delimited JSON is just JSON data formatted like this:

```
{"name": "alice", "height": "64in"}
{"name": "bob", "height": "71in"}
```

As you can see, it just means JSON objects separated by a line break. Some other common ways of formatting JSON that *aren't* newline delimited:

```JSON
{
  "name": "alice"
}
{
  "name": "bob"
}
```

or

```JSON
{
  "people": [
    {
      "name": "alice"
    },
    {
      "name": "bob"
    }
  ]
}
```

These aren't newline-delimited because there are new lines (or line breaks) inserted in the JSON, called **pretty-printing**. In non pretty-printed newline-delimited JSON, the only time you will see a line break is between two objects.

## Save some JSON to a file

First, you'll need a text file with some newline-delimited json in it.

If you want some test data, create a file called `people.json`. The easiest way is to type `touch people.json` into the terminal. This will create a new empty file. `people.json` should now show up in the file browser below, and you can double click it to edit it.

Here's some test newline-delimited JSON data you can copy-paste into `people.json`:

```
{"name": "alice", "age": "35"}
{"name":"bob", "age": "34"}
```

Run `cat people.json` to verify that the data has been written to the file successfully.

Make sure you are still in the same freshly initialized dat repository folder from the previous lessons (e.g. check that you can still see the `.dat` folder).

## Import the JSON into dat

Import the data into dat:

```
$ dat import people.json
Error: Must specify dataset (-d)
```

You'll get an error message, "Error: Must specify dataset (-d)."  When data is imported into dat, it must be put into a dataset, which has a unique name. We encourage users to create multiple datasets, so that each schema will be independent. A dataset is analogous to a sql table or a nosql collection; however, we chose not to use the language of 'table' or 'collection' because dat datasets do not support robust querying at this time.

```
$ dat import pepople.json -d people
Wrote 59 B.
Done importing data.
Version: e26dd88e028a56f5a86e7b6f5f2a355d5bbc69edb1916b1640de841d2ac33fab
```

You will see the amount of data you wrote to disk as well as the version hash. Wen dat begins writing to disk, a new `version` is created -- a uniquely identifiable sha256 hash that represents the changes that were made during the operation. As each write or import operation is performed, dat creates a new version hash that identifies the entire dat, not just the dataset that was changed.

## Export the data

Now, you should be able to get the data back out of dat by running `dat export`.

The output of `dat export` should be something like this:

```
$ dat export -d people
{"name":"alice","age":"35","key":"chz650a020000oxa5zpzmd9aj"}
{"name":"bob","age":"34","key":"chz650a040001oxa5bpa1ae5s"}
```

The `key` field was added by dat. Every row of data in dat needs to have a key. If they aren't in the incoming data then dat will generate them automatically.

Picking a `key` is an important thing to consider doing. Data in dat can only efficiently be accessed by `key`. Keys also must be unique, meaning there can only be one row per key for the whole dat database (but there *can* be multiple versions of a row).

Run the import command again:

```
dat import people.json -d people
```

Now when you do `dat export` you should see duplicates!

```
$ dat export -d people
{"name":"alice","age":"35""key":"chz650a020000oxa5zpzmd9aj"}
{"name":"bob","age":"34","key":"chz650a040001oxa5bpa1ae5s"}
{"name":"alice","age":"35","key":"chz65ge3z0000qiq4n711iaka"}
{"name":"bob","age":"34","key":"chz65ge420001qiq4q15as2ga"}
```

This is because our data doesn't have a `key` in it, so dat just assumes the data is new data.

For some use cases importing data without a key is perfectly fine behavior, but in other cases you will want to make sure your incoming data has a `key`. it all depends on the nature of the data that you are importing.

## Importing JSON with keys

OK, let's start over. run `dat clean` to get rid of the data we imported above, and then run `dat init` to initialize a new empty dat store.

Now import the data again, but this time let's specify a `primary` key:

```
dat import people.json -d people --key=name
```

If you do `dat export` again, you should see that the data is using the name as the key:

```
$ dat export -d people
{"name":"alice","age":"35","key":"alice"}
{"name":"bob","age":"34","key":"bob"}
```

If you run the import a second time:

```
dat import people.json -d people --key=name
```

A `dat export` should show no new data.
