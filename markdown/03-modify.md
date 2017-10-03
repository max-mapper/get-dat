# Editing & sharing data

Now you have a copy of the files on your machine inside a folder called `try-dat`! But what happens if the contents of the files change? 

Click on the `welcome.txt` file to bring it up in the editor. Make some changes to the text in the file. Once you've edited it (the server saves automatically) the file on the server willno longer matches the one on your local machine. To rectify this, run `dat share` again on the server:

```
$ dat share
```

This will create a link, that looks like `dat://...`.  Your output will look something like this:

```
$ dat share
Created new dat
dat://5a4575c632d1a573...
```
Now move over to your local terminal window, navigate into the `try-dat` folder, and run `dat sync`. Your output should look like this:

```
$ dat sync
dat v13.8.1
Downloading dat: 2 files (2.7 MB)

1 connection | Download 0 B/s Upload 0 B/s

dat synced, waiting for updates.
[==========================================] 100.00%
```

Check the local file - it should be updated! 
