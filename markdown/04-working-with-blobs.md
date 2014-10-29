# Write some blobs

So far we've only worked with simple text-based data in the form of JSON
objects, stored as rows inside dat. But what if you have a large file
that you want to associate with a row in dat?

To accomondate this, dat is capable of adding attachments to rows.
These attachments are called blobs, which is short for "binary large
object". A blob can be any form of binary data, but for now just think
of a blob as a file, like one you might put in Dropbox or attach to an
email.

## Adding blobs to dat

Let's try and attach a blob to a row in dat. For convenience we've
prepared a picture of Bob for you and put it on your server under
`/pictures`. Let see it first:

```
picture-tube /pictures/bob.png
```

What a good looking gentleman. Now let's attach it to the row we created
in the previous exercise, containing bob's data:

```
dat blobs put bob /pictures/bob.png
```

Thats it! Now let's try a see what happended to our row. Type `dat cat`
to see the content of dat (the example below have added line breaks and
indentation for clearity):

```
$ dat cat
{"name":"alice","age":"35","key":"alice","version":1}
{"name":"bob","age":"34","key":"bob","version":2,"blobs":{
  "bob.png": {
    "key":"a606f4046af33b83a00a814cb551781d00d4ce648880aff9b9d5cb582e324e99",
    "size":737855
  }
}}
```

To be performant, dat technically doesn't store the blobs together with
the rows inside dat. Instead blobs are stored in a blob-store and
referenced using a unique blob key. You'll see that dat have added an
extra column to the row named `blobs`. This column just holds a
reference to the actual blob. Also notice how the version column got
incremented to indicate that the row changed.

## Viewing blobs in the dat editor

1. To view blobs in the dat editor, first start the dat server by typing
`dat listen`

1. Then open your server address (from `welcome.txt`) in a new web
browser tab

1. You should now see the two rows containing alice and bob. Click on on
the document icon to the left of the row containing bob

1. This will bring up a detailed view of the bob record with all
attachments. Try clicking of the big bob.png picture at the top to see
the actual attachment (click the back button in your browser to go back
to the dat editor)

## Adding blobs via the dat editor

You can also add new files via the dat editor. While back on the detail
page for bob, now try to upload a new file to the bob row (just use any
file you have on your computer).

After uploading the new file to the bob row, just close the tab with the
dat editor and return to here. In the terminal, once again type `dat cat`
so we can see what acually happened (the example below have added line
breaks and indentation for clearity):

```
$ dat cat
{"name":"alice","age":"35","key":"alice","version":1}
{"name":"bob","age":"34","key":"bob","version":3,"blobs":{
  "bob.png": {
    "key":"a606f4046af33b83a00a814cb551781d00d4ce648880aff9b9d5cb582e324e99",
    "size":737855
  },
  "your-new-file":{
    "key":"2599d5cf9b4ffe4a71f0624ce6cb2402f5c4b2b2014442a36d186c3007ede994",
    "size":808972
  }
}}
```

As you can see dat incremented the version of the bob row and added your
new file to the list of blobs.

## Reading blobs

To read a blob from dat via the terminal, use the `dat blobs get`
command. Let's read the picture of bob and pipe it through picture-tube:

```
dat blobs get bob bob.png | picture-tube -
```
