# Sharing data

We are going to start by using `dat` to share a folder located in the **virtual** machine and downloading it to your **local**machine. In this folder, you'll see:

  - `cat.png`, a wonderful picture of a cat
  - `welcome.txt`, information about this server.

Let's move these files to your local machine using `dat`!

## `dat share`

First, let's create a link to share these files. In the **virtual terminal** in the browser window, type:

```
$ dat share
```

This will create a link, that looks like `dat://...`.  Your output will look something like this:

```
$ dat share
Created new dat
dat://5a4575c632d1a573...
```

You'll also notice a new folder has appeared in the directory on the server. The appearance of the `.dat` folder means that everything in this directory can now be versioned with Dat. 

As long as the `dat share` process stays running on the virtual machine the data will be available via the global Dat decentralized network to anyone who has that link. The link is secret and unguessable. Only people who you share the link with will be able to access your dat.

## Downloading

Copy the dat link from the **virtual terminal** and open up your **local computer's terminal**. Move to a directory where you'd like to add these files. To download the image and welcome.txt, type `dat clone` followed by the link `dat://`, and a folder name like `try-dat` .

Type the following into your **local terminal**:

```
dat clone dat://replace-with-your-dat-link-here try-dat
```

The files will be downloaded to your local machine, to the current working directory, into a folder called `try-dat`. Take a minute now to check that the files on your local machine match the files from the server.

`cntrl-C` to stop running dat.  
