# Downloading a partial dataset from git
Here's an example of hosting your code on Github and data on Dat. Here, a Github repo contains a  `dat.json` file, that contains the Dat link (dat://...) for the dataset as well as other metadata about these data. 

The author has included a `.datdownload` file which specifies which files users will download by default. Without this, all files would be downloaded upon dat cloning this repository. You can imagine a scenario where a larger dataset is availble, but only segments of it are required to reproduce an analysis. Or a dataset that won't fit in git, but fits in dat. Because this author has a `dat.json` file in their git repository, you don't need to work with their Dat link. Once you clone the repository with git, you can run Dat to access the data.

To clone the repository using git:

```
git clone https://github.com/joehand/dat-git-example.git
```

Now you have a copy of `dat-git-example` in your working directory that includes text and code, but none of the data files come down. To get the data, run `dat clone --empty` to fetch the `.dat` metadata (but none of the files): 

```
dat clone ./dat-git-example --empty
```

Then sync to get the files, specified by the `.datdownload`:

```
dat sync ./dat-git-example
```



