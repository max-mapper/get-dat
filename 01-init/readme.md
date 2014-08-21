# dat init

1. Before you do anything, run `ls -a` to print out the contents of this folder.

2. There should be nothing in here.

3. Now run `dat init`. You will be prompted to enter a few pieces of optional information.

4. Dat should have created a file called `dat.json` as well as a folder called `.dat`.

5. Run `ls -a` again and make sure you can see both of these.

`dat.json` is for settings and configuration for this dat. The `.dat` folder is where the dat data actually lives. The reason it starts with a `.` is to denote that it is a hidden folder. 

# delete a dat

To delete a dat repository all you have to do is delete the `.dat` folder. 

1. Run `rm -rf .dat` to delete the `.dat` folder, but don't delete the `dat.json` file.

2. You should now have a `dat.json` but no `.dat` folder. 

3. Try to start the dat http server by running `dat listen`. You should get an error `Error: You are not in a dat folder.`

So even though we have a `dat.json` file that doesn't make it a valid dat repository. 

4. Do `dat init` again. This time it should skip the prompts and use the existing `dat.json` file.

5. Now try to start the dat server again by running `dat listen`. This time it should succeed!

6. To stop the dat server enter `CTRL + c` (hold down `CTRL` and `c` simultaneously). This is a terminal command that stops the current program.
