# Sharing data

In this folder, you'll see:

  - `cat.png`, a wonderful picture of a cat
  - `welcome.txt`, information about this server.

Let's get these files to your local machine using `dat`.

## `dat share`

First, let's create a link to share these files. Type:

```
$ dat share
```

This will create a link, that looks like `dat://...`.  Your output might look something like this:

```
$ dat share
Created new dat
dat://5a4575c632d1a573...
```

As long as the `dat share` process stays running the data will be available via the global Dat decentralized network to anyone who has that link. The link is secret and unguessable. Only people who you share the link with will be able to access your dat.

## Downloading

On your local computer, use the dat link from your terminal output to get the image and welcome.txt:

```
dat clone dat://replace-with-your-dat-link-here
```

The files will be downloaded inside of the current directory. Check that they match.
