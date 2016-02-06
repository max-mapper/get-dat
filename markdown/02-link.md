# Sharing data

In this folder, you'll see:

  - `bob.png`, a wonderful picture of Bob Marley.
  - `welcome.txt`, information about this server.

Let's get these files to your local machine using `dat`.

## `dat link`

First, let's create a link that represents these files. Type:

```
$ dat link
```

This will create a link, that looks like `dat://...`.  Your output might look something like this:

```
$ dat link
Scanning folder, found 2 files in 1 directories.
dat://a9933c3d00e1134e5814a0fe2b0f1166885f523dfe0d135a39a2ca4b43840d83
```

The data will now available via the global Dat decentralized network, which works like BitTorrent. 

## Downloading

On your local computer, use the dat link from your terminal output to get the image and welcome.txt:

```
dat dat://a9933c3d00e1134e5814a0fe2b0f1166885f523dfe0d135a39a2ca4b43840d83
```

The files will be downloaded inside of the current directory. The process will stay open, re-hosting the data.
