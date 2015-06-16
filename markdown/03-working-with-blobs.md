# Write some blobs (or files)

So far we've only worked with simple text-based data in the form of JSON
objects, stored as rows inside dat. But what if you have a large file
that you want to associate with a row in dat?

To accomondate this, dat is capable of adding attachments to datasets.
These attachments are called blobs, which is short for "binary large
object". A blob can be any form of binary data, but for now just think
of a blob as a file, like one you might put in Dropbox or attach to an
email.

## Adding blobs to dat

Let's try and attach a blob to a dataset in dat. For convenience we've
prepared a picture of Bob for you and put it on your server under
`/pictures`. Let see it first:

```
picture-tube /pictures/bob.png
```

What a good looking gentleman. Now let's attach it to the dataset we created
in the previous exercise, containing bob's data:

```
$ dat write /pictures/bob.png --name=bob -d people
Done writing binary data.
Version: 8d7f4f0fdda699cce129508e7544da5c9a8631b037c26cb8ab2ff2553742b4ee
```

Notice the value of `version` has been updated, indicating that
the dat changed.

## Reading blobs

Let's read the picture of bob and pipe it through picture-tube:
Thats it! Now let's see what happened to our dataset. Type `dat read`
to see the content of the blob we wrote:

```
$ dat read bob -d people | picture-tube -
```

To be performant, dat doesn't store blobs inside the datasets.
Instead they're kept in a blob-store and referenced using a unique blob key.