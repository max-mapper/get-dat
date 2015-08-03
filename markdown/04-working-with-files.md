# Write some non-tabular data

So far we've only worked with simple text-based data in the form of JSON objects, stored as rows inside dat. But what if you have a large non-tabular file that you want store in dat?

To accommodate this, dat is capable of adding files to a dataset that is named, appropriately, "files." These attachments are sometimes called "blobs," which is short for "Binary Large OBjectS." A blob can be any form of binary data, but for now just think of a blob as a file, like one you might put in Dropbox or attach to an email.

## Adding blobs to dat

Let's store a file in dat. For your convenience we've prepared a picture of Bob for you at `bob.png`. Let's store it in dat:

```
$ dat write bob.png --key=bob
Done writing binary data.
Version: 8d7f4f0fdda699cce129508e7544da5c9a8631b037c26cb8ab2ff2553742b4ee
```

Notice the value of `version` has been updated, indicating that
the dat changed with the storage of `bob.png`.

## Reading blobs

Let's take the picture of Bob back out of Dat. We can use `dat read` to get the contents back out, though we need to pipe its output into a file to avoid displaying raw PNG data in the terminal (which just looks like nonsense):

```
$ dat read bob > bob-dat.png
```

You can double-click on `bob-dat.png` to open it up and view it, if you like.

For the sake of speed and efficiency, dat doesn't store blobs inside the datasets. Instead they're kept in a "blob store"—a special directory within the hidden `.dat` directory—and referred to using a unique "blob key."
