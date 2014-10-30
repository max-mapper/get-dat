# dat init

(When you are asked to 'run' something it means you should enter it into the terminal on the left)

1. Before you do anything, run `ls` to print out the contents of this folder.

1. There should be a `welcome.txt` file but nothing else. You can read it by typing `cat welcome.txt`.

1. Now run `ls -a`. The `-a` stands for 'all' and makes `ls` show you hidden files as well (hidden filenames start with a `.`)

1. Run `dat init`. You will be prompted to enter a few pieces of optional information.

1. Dat should have created a file called `dat.json` as well as a hidden folder called `.dat`.

1. Run `ls -a` again and make sure you can see both of these.

`dat.json` is for settings and configuration for this dat. The `.dat` folder is where the dat data actually lives. Note that it's a hidden folder! If something is hidden it generally means you don't need to open up the files inside very often.