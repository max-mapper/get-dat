# dat clone

You can use dat to distribute datasets to others. dat is transport-agnostic, so it is well-suited for typical transport protocols such as HTTP or SSH, which means any existing authentication setup is supported.

For example, once you create your dat with `dat init`, if you put it on a web server, then others can run `dat clone ssh://example.com/path/to/dat` to download a full copy of the dat, including all rows, blobs (files), and version history.

## Cloning a dat

We host a dat dataset with some genome data in it at <a href="http://eukaryota.dathub.org/" target="_blank">eukaryota.dathub.org</a>. You can clone that dataset onto your local system by running:

```
dat clone http://eukaryota.dathub.org eukaryota
```

This will clone the dataset into a folder called `eukaryota`. You can change the folder name by changing the last argument of the `clone` command above.

In the terminal, run `cd eukaryota` to interact with the newly-cloned dat.

Try running `dat status` to see how many datasets, keys, and files are in the dat.

Then, try `dat export -d organisms --limit=1` to print out the first row from the dataset. You will see something like this:

```json
{"uid":"10","organism_name":"Oryza sativa","organism_kingdom":"Eukaryota","organism_group":"","organism_subgroup":"Land Plants","defline":"Oryza sativa overview","projectid":9512,"project_accession":"PRJNA9512","status":"Complete","number_of_chromosomes":"12","number_of_plasmids":"1","number_of_organelles":"2","assembly_name":"Build 4.0","assembly_accession":"GCA_000005425.2","assemblyid":313038,"create_date":"2002/04/04 00:00","options":"","weight":385,"chromosome_assemblies":"5","scaffold_assemblies":"1","sra_genomes":"0","taxid":4530}
```

## Cloning a clone

So you've cloned a dataset and re-hosted it on a public server. You don't own the original dataset (`eukaryota.dathub.org`) but you *do* own your clone. This means you can edit your copy and re-distribute your edited versions for others to clone.

Now, let's try cloning your copy of the eukaryota data from this browser environment.
You'll need to install dat on your local machine so that you can clone your dataset onto your computer.

#### Installing dat is a 2-step process:

- First, <a href="http://nodejs.org" target="_blank">download the node.js installer for your OS</a> and walk through the installer. This will install the `node` and `npm` commands onto your computer.
- Second, open your terminal program ("Terminal" on Mac, "Command Prompt" on Windows) and install dat by running `npm install dat -g`. This make take a few minutes.

When the installation finishes, you should be able to run the `dat` command in your terminal and see output like this:
```
$ dat
 usage: dat <command(s)> [-flag] [--key=value]

 commands:
   init      initialize a new dat in a directory
   checkout  dat will operate at a particular fork
   add       import a file into dat
   push      push data to a remote dat
 ```

**If you run into permissions or `EACCESS` error, run the install command again with sudo: `sudo npm install dat -g`**


## Sharing a dat

First, run `dat serve --port=80`. This makes the dat available at http://MY-SERVER-ADDRESS. Your own server address will be available in `welcome.txt` -- find it by typing `cat welcome.txt`.

Then, run the following command on your laptop to get the data:

```
dat clone http://MY-SERVER-ADDRESS eukaryota
```

You can pass an additional argument, in this case, `eukaryota`, to clone the data into a custom folder name. Otherwise, it will use your server address as the folder name.

If you `cd` into your new dat folder `eukaryota`, you should be able to do `dat status` to print out a summary of the data repository.
