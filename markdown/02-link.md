# Sharing data

We are going to start by using `dat` to share a folder. First you have to pick a folder with some files in it on your machine. If you can't find one, try making one on your Desktop called 'dat-test' and put a couple screenshots or other images in it. The folder can be any size, but something at least a couple megabytes in total size will be more fun to test out.

## `dat share`

First, let's create a link to share these files. If you're new to the command line, check out [Command Line Bootcamp](http://rik.smith-unna.com/command_line_bootcamp/?id=ocd6pv8xa0i) before moving on.

Type the following in your terminal (replacing the `cd` path with the actual path your test folder):

```
$ cd ~/Desktop/dat-test
$ dat share
```

This will create a link, that looks like `dat://...`.  Your output should look something like this:

```
$ dat share
Created new dat
dat://5a4575c632d1a573...
```

Behind the scenes dat created a new hidden folder called `.dat` in your test folder. The appearance of the `.dat` folder means that everything in this directory can now be versioned with Dat. 

As long as the `dat share` process stays open and running the data will be available via the global Dat decentralized network to anyone who has that link. The link is secret and unguessable. Only people who you share the link with will be able to access your dat.

## Downloading

First, copy the dat link from the source terminal. Windows users beware - please right-click to copy, as `cntrl-C` will quit dat and dat needs to keep running.

If you are doing this tutorial using a single computer, open up a second terminal window, we will refer to this second one as the **destination** terminal. The first one is the **source** terminal.

If you are doing this tutorial with a second computer, then use the second computer as the **destination**. Find a way to send them the dat link (email, text message).

On the **destination** terminal: Move to a directory where you'd like to add these files. To download the files from the source, type `dat clone` followed by the link `dat://`, and a folder name like `try-dat`. 

The full command should look like this:

```
dat clone dat://replace-with-your-dat-link-here try-dat
```

The files will be downloaded to the destination, to the current working directory, into a folder called `try-dat`. Take a minute now to check that the files on your destination match the files from the source.

**Lastly**, on the source, type `control-C` to stop running dat. You should now be back to the command prompt on both terminals.
