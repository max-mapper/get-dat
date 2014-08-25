# Storing blobs

## What are blobs

The word "blob" means "**b**inary **l**arge **ob**ject". In addition to storing tabular data, dat has a separate API for storing blobs. 

The [data importing guide](https://github.com/maxogden/dat/blob/master/docs/importing.md) has more detailed information about the differences between the two types of storage, but for now just think of the blob store as a way to store files, like what you might put in Dropbox or attach to an email. The tabular store is for any data made up of rows and columns. The key difference between the two stores is that every row of data in the tabular store gets versioned, but blobs are more coarsely versioned, meaning dat simply stores multiple versions of the blobs.

You could import a CSV file as rows into the tabular store, or upload the entire thing as a blob. It all depends on your specific use case.

## Write a blob

We have conveniently provided a cat photo for you to use in this tutorial. It is called `cat.png` and should be in the `get-dat` directory.

TODO finish this