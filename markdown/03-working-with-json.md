# Write some JSON

Let’s put some data into dat.

There are three formats that dat can import: <a href="http://ndjson.org/" target="_blank">Newline-delimited JSON</a>, CSV and <a href="https://developers.google.com/protocol-buffers/" target="_blank">Protocol Buffers</a>. In this tutorial we will only work with JSON to keep things simple.

## Newline-delimited JSON

Newline-delimited JSON a little different than regular JSON. Standard JSON looks like this:

```JSON
[
  {"name": "alice"},
  {"name": "bob"}
]
```

The two values are wrapped in array brackets (`[...]`) and separated by a comma (`,`). Newline-delimited JSIN lacks these two features:

```
{"name": "alice"}
{"name": "bob"}
```

As you can see, it just means JSON objects separated by only a single line break. It’s a very small change, but it’s necessary to support parsing arbitrary subsets of a larger JSON file.

Note that the following is _not_ valid newline-delimited JSON:

```JSON
{
  "name": "alice"
}
{
  "name": "bob"
}
```

That’s because it uses line breaks to format the JSON by pretty-printing it. In newline-delimited JSON the only time you will see a line break (AKA a “newline”) is to separate two objects.

## Save some JSON to a file

Create a new text file named `people.json`. The easiest way is to run `touch people.json`. This will create a new, empty file. `people.json` will show up in the file browser below, and you can double-click it to edit it.

Copy the following newline-delimited JSON data and paste it into `people.json`:

```
{"name": "alice", "age": "35"}
{"name":"bob", "age": "34"}
```

Run `cat people.json` to verify that the data has been written to the file successfully.

Make sure you are still in the same freshly-initialized dat repository folder from the previous lessons (e.g. check that you can still see the `.dat` folder with `ls -a`).

## Import the JSON into dat

Import the data into dat, under a dataset called “people”:

```
dat import people.json -d people
```

The data about Bob and Alice is now stored within dat.

You can get the data back out of dat by running `dat export -d people`.

The output of `dat export -d people` will look about like this:

```
{"name":"alice","age":"35","key":"chz650a020000oxa5zpzmd9aj"}
{"name":"bob","age":"34","key":"chz650a040001oxa5bpa1ae5s"}
```

`key` was added by dat. Every row of data in dat needs a key. If now key is found in the provided data, dat will generate it automatically.

Sometimes you’ll want to provide your own key. That’s because data in dat can only accessed efficiently by specifying the key. Keys must be unique.

Another reason why it might be useful to specify a key can be seen if you run the import command again:

```
dat import people.json -d people
```

Now when you run `dat export -d people` you’ll see duplicate data!

```
$ dat export -d people
{"name":"alice","age":"35""key":"chz650a020000oxa5zpzmd9aj"}
{"name":"bob","age":"34","key":"chz650a040001oxa5bpa1ae5s"}
{"name":"alice","age":"35","key":"chz65ge3z0000qiq4n711iaka"}
{"name":"bob","age":"34","key":"chz65ge420001qiq4q15as2ga"}
```

We imported the same data into our dat again, and because our imported JSON lacks a key, dat just assumes the data is new data.

For some use cases importing data without a key is perfectly fine behavior, but in other cases you will want to make sure your incoming data has one. it all depends on the nature of the data that you are importing.

## Importing JSON with keys

Let’s wipe the slate and start over again. run `dat destroy` to get rid of the data we imported above, and then run `dat init` to initialize a fresh dat store.

Now import the data again, but this time let’s specify a key that the `name` field should be used as the key:

```
dat import people.json --key=name -d people
```

If you run `dat export -d people` again, you will see that the data is using the `name` field as the key:

```
$ dat export -d people
{"name":"alice","age":"35","key":"alice"}
{"name":"bob","age":"34","key":"bob"}
```

Now run the import a second time, to import the data on top of the existing data:

```
dat import people.json --key=name -d people
```

Because we’re using a unique key, running `dat export -d people` shows no duplicates.
