# Write some JSON

Let's put some data into dat.

There are three formats that dat can import: <a href="http://ndjson.org/" target="_blank">Newline-delimited JSON</a>, CSV and <a href="https://developers.google.com/protocol-buffers/" target="_blank">Protocol Buffers</a>. In this tutorial we will only work with JSON to keep things simple.

## What is newline-delimited JSON

Newline-delimited JSON is just JSON data formatted like this:

```
{"name": "alice"}
{"name": "bob"}
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

These aren't newline-delimited because they use line breaks to format the JSON by pretty-printing it. In newline-delimited JSON the only time you will see a line break (AKA newline) is between two objects.

## Save some JSON to a file

First create a new text file called `people.json`. The easiest way is to type `touch people.json` into the terminal. This will create a new empty file. `people.json` should now show up in the file browser below, and you can double click it to edit it.

Copy-paste the following newline-delimited JSON data into `people.json`:

```
{"name": "alice", "age": "35"}
{"name":"bob", "age": "34"}
```

Make sure you are still in the same freshly initialized dat repository folder from the previous lessons (e.g. check that you can still see the `.dat` folder).

## Import the JSON into dat

Import the data into dat:

```
dat import people.json --json
```

Now you should be able to get the data back out of dat by running `dat cat`. This command is named after the UNIX command called `cat` which prints out the contents of files.

The output of `dat cat` should be something like this:

```
$ dat cat
{"name":"alice","age":"35","key":"chz650a020000oxa5zpzmd9aj","version":1}
{"name":"bob","age":"34","key":"chz650a040001oxa5bpa1ae5s","version":1}
```

The `key` and `version` fields were added by dat. Every row of data in dat needs to have both of these. If they aren't in the incoming data then dat will generate them automatically. 

Picking a `key` is an important thing to consider doing. Data in dat can only efficiently be accessed by `key`. Keys also must be unique, meaning there can only be one row per key for the whole dat database (but there *can* be multiple versions of a row).

Run the import command again:

```
dat import people.json --json
```

Now when you do `dat cat` you should see duplicates!

```
$ dat cat
{"name":"alice","age":"35""key":"chz650a020000oxa5zpzmd9aj","version":1}
{"name":"bob","age":"34","key":"chz650a040001oxa5bpa1ae5s","version":1}
{"name":"alice","age":"35","key":"chz65ge3z0000qiq4n711iaka","version":1}
{"name":"bob","age":"34","key":"chz65ge420001qiq4q15as2ga","version":1}
```

This is because our data doesn't have a `key` in it, so dat just assumes the data is new data.

For some use cases importing data without a key is perfectly fine behavior, but in other cases you will want to make sure your incoming data has a `key`. it all depends on the nature of the data that you are importing.

## Importing JSON with keys

OK, let's start over. run `dat clean` to get rid of the data we imported above, and then run `dat init` to initialize a new empty dat store.

Now import the data again, but this time let's specify a `primary` key:

```
dat import people.json --json --primary=name
```

If you do `dat cat` again, you should see that the data is using the name as the key:

```
$ dat cat
{"name":"alice","age":"35","key":"alice","version":1}
{"name":"bob","age":"34","key":"bob","version":1}
```

If you run the import a second time:

```
dat import people.json --json --primary=name
```

A `dat cat` should show no new data, and both rows should still be at version 1.
