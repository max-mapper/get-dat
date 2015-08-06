# Write some non-tabular data

So far we've only worked with simple text-based data in the form of JSON objects, stored as rows inside dat. But what if you have a large non-tabular file that you want store in dat?

To accommodate this, dat is capable of adding files to a dataset that is named, appropriately, "files." These attachments are sometimes called "blobs," which is short for "Binary Large OBjectS." A blob can be any form of binary data, but for now just think of a blob as a file, like one you might put in Dropbox or attach to an email.

## Adding blobs to dat

Let's store a file in dat. First, find an image online that you'd like to import into dat. I recommend this great [European wildcat](http://try-dat.com/static/img/wildcat.jpg). Let's store it in dat:

```
dat write http://try-dat.com/static/img/wildcat.jpg -m "Added a wildcat because I can."
```

Notice the value of `version` has been updated, indicating that the dat changed with the storage of `wildcat.jpg`.

Every time you write data to dat -- tabular or non tabular -- a new version snapshot is created of the entire dat.

## Reading blobs

Do an `ls`. You can see that the cat has now appeared on your filesystem. This is great for working with other programs. If you want to integrate dat programmatically, you can have dat read their binary contents back out using `read`.

We need to pipe its output into a file to avoid displaying raw PNG data in the terminal (which just looks like nonsense):

```
$ dat read wildcat.jpg > wildcat-is-out-of-dat.jpg
```

You can double-click on `wildcat.jpg` to open it up and view it, if you like.

For the sake of speed and efficiency, dat doesn't store blobs inside the datasets. Instead they're kept in a "blob store" -- a special directory -- with each having an indexed "blob key."

