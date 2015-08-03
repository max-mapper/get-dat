# dat clone

You can use dat to distribute datasets to others. Dat is transport agnostic, so it is well suited for typical transport protocols such as http or ssh -- which means any current authentication setup is supported.

For example, once you create your dat with `dat init`, others can do `dat clone ssh://your-server-address/path/to/dat` to download a full copy of the dat, including all rows, blobs/files, and version history.

## Cloning a dat

We host a dat dataset with some genome data in it at <a href="http://eukaryota.dathub.org" target="_blank">eukaryota.dathub.org</a>.

Try this:

```
dat clone http://eukaryota.dathub.org eukaryota
```

This should clone the dataset into a folder called `eukaryota`. You can change the folder name by changing the last argument of the `clone` command above. If you don't specify a folder name it will just use the server name as the folder name (e.g. `eukaryota.dathub.org`).

In the terminal, run `cd eukaryota` to enter into the newly cloned dat.

Try running `dat status` to see how many datasets, keys, and files are in the dat.

Then, try `export -d organisms --limit=1` to print out the first row from the dataset. You should see something like this:

```JSON
{"uid":"10","organism_name":"Oryza sativa","organism_kingdom":"Eukaryota","organism_group":"","organism_subgroup":"Land Plants","defline":"Oryza sativa overview","projectid":9512,"project_accession":"PRJNA9512","status":"Complete","number_of_chromosomes":"12","number_of_plasmids":"1","number_of_organelles":"2","assembly_name":"Build 4.0","assembly_accession":"GCA_000005425.2","assemblyid":313038,"create_date":"2002/04/04 00:00","options":"","weight":385,"chromosome_assemblies":"5","scaffold_assemblies":"1","sra_genomes":"0","taxid":4530}
```

## Cloning a clone

So you've cloned a dataset and re-hosted it. You don't own the original dataset (`http://eukaryota.dathub.org`) but you *do* own your clone. This means you can edit your copy and re-distribute your edited versions for others to clone.

Now, let's try cloning your copy of the eukaryota data from this browser environment. You'll need to install dat on your local machine so that you can clone your dataset onto your personal computer.

#### Installing dat on your personal computer:

- First, <a href="http://nodejs.org" target="_blank">download the node.js installer for your OS</a> and walk through the installer program. This will install the `node` and `npm` commands onto your computer.
- Second, open your terminal program (`Terminal.app` on Mac, `CMD.exe` on Windows) and install dat by running `npm install dat -g`.

If you run into permissions or `EACCESS` error, run the install command again with sudo: `sudo npm install dat -g`

First, run `dat serve --port=80` on the server.

Then, run this command on your laptop, using your own server address from `welcome.txt`

```
dat clone http://MY-SERVER-ADDRESS eukaryota
```

Remember, you can pass an additional argument to clone the data into a custom folder name, otherwise it will use your server address as the folder name.

If you `cd` into your newly created dat folder in your computer you should be able to do `dat status` to print out all of the data.
