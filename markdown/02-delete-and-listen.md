# delete a dat

You should now be in the newly initialized dat repository from lesson `01`.

To delete the data in a dat repository all you have to do is delete the `.dat` folder. To delete the settings you simply delete the `dat.json` file.

In this lesson you will learn the ins-and-outs of deleting a dat repository and then re-initializing it again.

1. Run `dat clean` to delete the `.dat` folder. This doesn't delete the `dat.json` file.

2. You should now have a `dat.json` but no `.dat` folder. You can check this with `ls -a`.

3. Try to start the dat http server by running `dat listen`. You should get an error `Error: There is no dat here` So even though we have a `dat.json` file that doesn't make it a valid dat repository. 

4. Do `dat init` again. It will go through the prompt again, but with the existing values from `dat.json` as defaults.

5. Now try to start the dat server again by running `dat listen`. This time it should succeed!

6. Try viewing your dat server in a new browser tab. You can get the address of your server from `welcome.txt`. Remember to open it in a new tab!

6. To stop the dat server enter `CTRL + c` (hold down `CTRL` and then `c` simultaneously). This is a terminal command that stops the current program.

That's all there is to it!
