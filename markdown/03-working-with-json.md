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

Run `cat people.json` to verify that the data has been written to the file successfully.

Make sure you are still in the same freshly initialized dat repository folder from the previous lessons (e.g. check that you can still see the `.dat` folder).

## Import the JSON into dat

Import the data into dat, under a dataset called 'people':

```
dat import people.json -d people
```

Now you should be able to get the data back out of dat by running `dat export -d people`. 

The output of `dat export -d people` should be something like this:

```
$ dat export -d people
{"name":"alice","age":"35","key":"chz650a020000oxa5zpzmd9aj"}
{"name":"bob","age":"34","key":"chz650a040001oxa5bpa1ae5s"}
```

The `key` was added by dat. Every row of data in dat needs to a key. If it isnt in the incoming data then dat will generate it automatically. 

Picking a `key` is an important thing to consider doing. Data in dat can only efficiently be accessed by `key`. Keys also must be unique, meaning there can only be one row per key for the whole dat database.

Run the import command again:

```
dat import people.json -d people
```

Now when you do `dat export -d people` you should see duplicates!

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

OK, let's start over. run `dat destroy` to get rid of the data we imported above, and then run `dat init` to initialize a new empty dat store.

Now import the data again, but this time let's specify a key:

```
dat import people.json --key=name -d people
```

If you do `dat export -d people` again, you should see that the data is using the name as the key:

```
$ dat export -d people
{"name":"alice","age":"35","key":"alice"}
{"name":"bob","age":"34","key":"bob"}
```

If you run the import a second time:

```
dat import people.json --key=name -d people
```

A `dat export -d people` should show no duplicates this time.
