# Editing & sharing data

Now you have a copy of the files on your destination a folder called `try-dat`! But what happens if the contents of the files change? Let's find out.

On the **source** create a new file called `welcome.txt` and open it in your favorite text editor app (such as TextEdit or Sublime Text). Make some changes to the text in the file. Once you've edited it, save the file. The file on the source will no longer match the one on the destination. To rectify this and sync the new changes to the destination copy, run `dat share` again on the source.

Type the following in the **source** terminal:

```
$ dat share
```

This will create a link, that looks like `dat://...`.  Your output in the **source** terminal will look something like this:

```
$ dat share
Created new dat
dat://5a4575c632d1a573...
```

Now lets switch to the **destination** terminal. `cd` into the `try-dat` folder, and run `dat sync`. 

Type the following in the **destination terminal**:

```
$ dat sync
```

Your output should look like this:

```
$ dat sync
dat v13.8.1
Downloading dat: 2 files (2.7 MB)

1 connection | Download 0 B/s Upload 0 B/s

dat synced, waiting for updates.
[==========================================] 100.00%
```

Check the file on both sides - they should match.
