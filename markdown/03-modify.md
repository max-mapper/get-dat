# Editing & sharing data

Now you have a copy of the files on your machine inside a folder called `try-dat`! But what happens if the contents of the files change? Let's find out.

On the **virtual machine** in the browser, click on the `welcome.txt` file to bring it up in the editor in the lower right-hand quadrant of the browser window. Make some changes to the text in the file. Once you've edited it (the server saves automatically) the file on the server will no longer matche the one on your local machine. To rectify this and sync the new changes to your local copy, run `dat share` again on the server.

Type the following in the **virtual terminal**:

```
$ dat share
```

This will create a link, that looks like `dat://...`.  Your output in the **virtual terminal** will look something like this:

```
$ dat share
Created new dat
dat://5a4575c632d1a573...
```
Now move over to your **local terminal** window, navigate into the `try-dat` folder, and type `dat sync`. Your output should look like this:

```
$ dat sync
dat v13.8.1
Downloading dat: 2 files (2.7 MB)

1 connection | Download 0 B/s Upload 0 B/s

dat synced, waiting for updates.
[==========================================] 100.00%
```

Check the local file - it should be updated! 
