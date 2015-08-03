# dat init

(When you are asked to “run” something it means you should enter it in your terminal.)

* Before you do anything, run `ls` to print out the contents of this directory.

(If you are doing this on your own computer you won’t have `welcome.txt`, but make sure to do all of this in a new empty directory, e.g. on your Desktop.)

1. There should be a `welcome.txt` file. You can read it by typing `cat welcome.txt`.

1. Now run `ls -a`. This displays a list of all files in the directory—the `-a` stands for “all” and instructs `ls` to show hidden files, too. (Hidden filenames start with a `.`.)

1. Run `dat init`. This will establish the current directory as a dat repository, with dat’s data stored in a hidden folder called `.dat`.

1. Run `ls -a` again and note that `data.dat` is now listed.

The `data.dat` directory is where dat’s data is stored.
