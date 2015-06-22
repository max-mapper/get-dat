# delete a dat

You should now be in the newly initialized dat repository from lesson `01`.

To delete the data in a dat repository all you have to do is delete the `.dat` folder. To delete the settings you simply delete the `dat.json` file.

In this lesson you will learn the ins-and-outs of deleting a dat repository and then re-initializing it again.

1. Run `dat destroy` to delete the `.dat` folder.

1. You should now have no `.dat` folder. You can check this with `ls -a`.

1. Try to get the status by running `dat status`. You should get an error `This is not a dat repository`.

1. Run `dat init` again. Now try to get the status again by running `dat status`. This time it should succeed!

That's all there is to it!
