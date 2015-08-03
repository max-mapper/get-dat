# dat clone

You can use dat to distribute datasets to others. dat is transport-agnostic, so it is well-suited for typical transport protocols such as HTTP or SSH, which means any existing authentication setup is supported.

For example, once you create your dat with `dat init`, if you put it on a web server, then others can run `dat clone ssh://example.com/path/to/dat` to download a full copy of the dat, including all rows, blobs (files), and version history.

For example, we host a dat dataset with some genome data in it at <a href="http://eukaryota.dathub.org/" target="_blank">eukaryota.dathub.org</a>. You can clone that dataset onto your local system by running:

```
dat clone http://eukaryota.dathub.org eukaryota
```

This will clone the dataset into a folder called `eukaryota`. You can change the folder name by changing the last argument of the `clone` command above.

In the terminal, run `cd eukaryota` to interact with the newly-cloned dat.

Run `dat export -d organisms --limit=1` to print out the first row from the dataset. You will see something like this:

```json
{"uid":"10","organism_name":"Oryza sativa","organism_kingdom":"Eukaryota","organism_group":"","organism_subgroup":"Land Plants","defline":"Oryza sativa overview","projectid":9512,"project_accession":"PRJNA9512","status":"Complete","number_of_chromosomes":"12","number_of_plasmids":"1","number_of_organelles":"2","assembly_name":"Build 4.0","assembly_accession":"GCA_000005425.2","assemblyid":313038,"create_date":"2002/04/04 00:00","options":"","weight":385,"chromosome_assemblies":"5","scaffold_assemblies":"1","sra_genomes":"0","taxid":4530}
```

## Cloning a clone

So you've cloned a dataset and re-hosted it on a public server. You don't own the original dataset (`eukaryota.dathub.org`) but you *do* own your clone. This means you can edit your copy and re-distribute your edited versions for others to clone.

Now try cloning your copy of the eukaryota data.

First, run `dat listen --port=80` on the server. (You can skip this step if you aren't using our online get-dat web based environment)

Then, run this command on your laptop (using your own server address from `welcome.txt`)

```
dat clone http://MY-SERVER-ADDRESS eukaryota
```

(If you are on your own computer, you can go into another folder and do `dat clone ../path/to/original/repo eukaryota` to make a second clone locally in a new folder)

Remember, you can pass an additional argument to clone the data into a custom folder name, otherwise it will use your server address as the folder name.

If you `cd` into your newly created dat folder in your computer you should be able to do `dat export` to print out all of the data, or `dat listen` to run a dat server locally.
