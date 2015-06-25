# dat clone

You can use dat to distribute datasets to others. Dat is transport agnostic, so it is well suited for typical transport protocols such as http or ssh -- which means any current authentication setup is supported.

For example, once you create your dat with `dat init`, others can do `dat clone ssh://your-server-address/path/to/dat` to download a full copy of the dat, including all rows, blobs/files, and version history.

For example, we host a dat dataset with some genome data in it at <a href="http://eukaryota.dathub.org" target="_blank">eukaryota.dathub.org</a>.

You can click on the above link to browse the dataset from your web browser, but you can also make a clone of your dataset into your terminal by running this command:

```
dat clone http://publicbits.org:6442 eukaryota
```

This should clone the dataset into a folder called `eukaryota`. You can change the folder name by changing the last argument of the `clone` command above. If you don't specify a folder name it will just use the server name as the folder name (e.g. `eukaryota.dathub.org`).

In the terminal, run `cd eukaryota` to enter into the newly cloned dat.

Try running `dat export -d organisms --limit=1` to print out the first row from the dataset. You should see something like this:

```JSON
{"uid":"10","organism_name":"Oryza sativa","organism_kingdom":"Eukaryota","organism_group":"","organism_subgroup":"Land Plants","defline":"Oryza sativa overview","projectid":9512,"project_accession":"PRJNA9512","status":"Complete","number_of_chromosomes":"12","number_of_plasmids":"1","number_of_organelles":"2","assembly_name":"Build 4.0","assembly_accession":"GCA_000005425.2","assemblyid":313038,"create_date":"2002/04/04 00:00","options":"","weight":385,"chromosome_assemblies":"5","scaffold_assemblies":"1","sra_genomes":"0","taxid":4530,"key":"10"}
```

## Cloning a clone

So you've cloned a dataset and re-hosted it. You don't own the original dataset (`publicbits.org:6442`) but you *do* own your clone. This means you can edit your copy and re-distribute your edited versions for others to clone.

Now try cloning your copy of the eukaryota data. Run this command on your laptop (using your own server address from `welcome.txt`)

```
dat clone http://MY-SERVER-ADDRESS eukaryota
```

(if you are on your own computer, you can go into another folder and do `dat clone ../path/to/original/repo eukaryota` to make a second clone locally in a new folder)

Remember, you can pass an additional argument to clone the data into a custom folder name, otherwise it will use your server address as the folder name.

If you `cd` into your newly created dat folder in your computer you should be able to do `dat export` to print out all of the data, or `dat listen` to run a dat server locally.
