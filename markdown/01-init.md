# dat init

(When you are asked to 'run' something it means you should enter it into the terminal on the left)

* Before you do anything, run `ls` to print out the contents of this folder.

* There should be a `welcome.txt` file but nothing else. You can read it by typing `cat welcome.txt`.

* Now run `ls -a`. The `-a` stands for 'all' and makes `ls` show you hidden files as well (hidden filenames start with a `.`)

* Run `dat init`.

* Dat should have created a file called `dat.json` as well as a hidden folder called `.dat`.

* Run `ls -a` again and make sure you can see both of these.

`dat.json` is for settings and configuration for this dat. The `.dat` folder is where the dat data actually lives. Note that it's a hidden folder, meaning you don't need to open up the files inside very often.