# Delete a dat

You should now be in the newly initialized dat repository from lesson `01`. Let's see how to delete the dat repository and then re-initialize it again.

1. Run `dat destroy` to delete the `data.dat` folder.

1. You should now have no `data.dat` folder. You can check this with `ls`.

1. Get dat’s status by running `dat status`. You should get an error: `This is not a dat repository`.

1. Create the dat again: run `dat init`. Now get the status again by running `dat status`. This time it should succeed. You have recreated your dat.
