# dat clone

You can use dat to distribute datasets to others. All you have to do is run `dat listen` on a web server and others can do `dat clone http://your-server-address` to download a full copy of the dataset.

For example, we host a dat dataset with some genome data in it at <a href="http://eukaryota.dathub.org" target="_blank">http://eukaryota.dathub.org</a>.

You can click on the above link to browse the dataset from your web browser, but you can also make a clone of your dataset into your terminal by running this command:

```
dat clone http://eukaryota.dathub.org eukaryota
```

This should clone the dataset into a folder called `eukaryota`. You can change the folder name by changing the last argument of the `clone` command above. If you don't specify a folder name it will just use the server name as the folder name (e.g. `eukaryota.dathub.org`).

In the terminal, run `cd eukaryota` to enter into the newly cloned dat.

Try running `dat cat --limit=1` to print out the first row from the dataset. You should see something like this:

```JSON
{"uid":"10","organism_name":"Oryza sativa","organism_kingdom":"Eukaryota","organism_group":"","organism_subgroup":"Land Plants","defline":"Oryza sativa overview","projectid":9512,"project_accession":"PRJNA9512","status":"Complete","number_of_chromosomes":"12","number_of_plasmids":"1","number_of_organelles":"2","assembly_name":"Build 4.0","assembly_accession":"GCA_000005425.2","assemblyid":313038,"create_date":"2002/04/04 00:00","options":"","weight":385,"chromosome_assemblies":"5","scaffold_assemblies":"1","sra_genomes":"0","taxid":4530,"key":"10","version":1}
```

## Cloning a clone

If run you `dat listen` inside of the `eukaryota` directory, you can then open your server address (from `welcome.txt`) in your web browser to view your cloned copy of the eukaryota data.

So you've cloned a dataset and re-hosted it. You don't own the original dataset (`eukaryota.dathub.org`) but you *do* own your clone. This means you can edit your copy and re-distribute your edited versions for others to clone.

Dat is still very much in the early stages of development, but we hope to enable some really cool collaboration workflows to make sharing and improving datasets easy.

Open your cloned copy of the dataset in your browser (using the address from `welcome.txt`) and try editing and updating a couple of cells in the data spreadsheet. Make some basic edits like uppercasing all the letters in a cell or changing the worlds in a cell.

Now, for this next step you'll need to install dat on your local machine so that you can clone your dataset onto your personal computer.

Installing dat takes 2 steps:

- First, <a href="http://nodejs.org" target="_blank">download the node.js installer for your OS</a> and walk through the installer program. This will install the `node` and `npm` commands onto your computer.
- Second, open your terminal program (`Terminal.app` on Mac, `CMD.exe` on Windows) and install dat by running `npm install dat -g`. This make take a few minutes.

If you get an `EACCESS` error you can try running the install command again with more permissions: `sudo npm install dat -g`

When the install command finishes you should be able to run the `dat` command in your terminal and see output like:

```
$ dat
Usage: dat <command> [<args>]

Enter 'dat help' for help
```

Now try cloning your copy of the eukaryota data. Run this command on your laptop (using your own server address from `welcome.txt`)

```
dat clone http://MY-SERVER-ADDRESS
```

Remember, you can pass an additional argument to clone the data into a custom folder name, otherwise it will use your server address as the folder name.

If you `cd` into your newly created dat folder in your computer you should be able to do `dat cat` to print out all of the data, or `dat listen` to run a dat server locally.
