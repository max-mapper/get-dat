# Write some non-tabular data

So far we've only worked with simple text-based data in the form of JSON
objects, stored as rows inside dat. But what if you have a large non-tabular
file that you want store in dat?

To accomondate this, dat is capable of adding files to a dataset called 'files.'
These attachments are sometimes called blobs, which is short for "binary large
object". A blob can be any form of binary data, but for now just think
of a blob as a file, like one you might put in Dropbox or attach to an
email.

## Adding blobs to dat

Let's try and write a file to dat. For convenience we've
prepared a picture of Bob for you and put it on your server under
`/pictures`. Let see it first. Run this:

```
picture-tube /pictures/bob.png
```

(if you don't have picture-tube you can `npm install -g picture-tube` and use any png on your computer)

What a good looking gentleman. Now let's attach it:

```
$ dat write /pictures/bob.png --key=bob
Done writing binary data.
Version: 8d7f4f0fdda699cce129508e7544da5c9a8631b037c26cb8ab2ff2553742b4ee
```

Notice the value of `version` has been updated, indicating that
the dat changed.

## Reading blobs

Let's read the picture of bob and pipe it through picture-tube:
Thats it! Now let's see what happened. Type `dat read`
to see the content of the blob we wrote:

```
$ dat read bob > exported.png
$ picture-tube exported.png
```

To be performant, dat doesn't store blobs inside the datasets.
Instead they're kept in a blob-store and referenced using a unique blob key.
