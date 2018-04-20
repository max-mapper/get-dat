# Downloading a partial dataset from git

Here's an example of hosting code on Github that includes a link to a Dat dataset. This Github repo contains a `dat.json` file, which contains the Dat link (dat://...) for the dataset as well as other metadata about these data. 

The author has included a `.datdownload` file which specifies which files users will download by default. Without this, all files would be downloaded upon dat cloning this repository. You can imagine a scenario where a larger dataset is availble, but only segments of it are required to reproduce an analysis. Or a dataset that won't fit in git, but fits in dat. Because this author has a `dat.json` file in their git repository, you don't need to work with their Dat link. In this exercise, you will clone the repository with git and then access the data with dat.

To clone the repository to your local machine using git, type the following in your **local terminal**:

```
git clone https://github.com/joehand/dat-git-example.git
```

Now you have a copy of `dat-git-example` that includes text and code files, but none of the data files. Check the `index.html` to see that the pictures are missing by typing the following in your **local terminal**:

```
open index.html
```

To get the data, run `dat clone --empty` to fetch the `.dat` metadata (but none of the files). Type the following in your **source terminal**: 

```
dat clone ./dat-git-example --empty
```

Then sync to get the files, specified by the `.datdownload`, type the following in your **source terminal**:

```
dat sync ./dat-git-example
```

You should now have downloaded both the code (`index.html`) and the data files that were specificed by the `.datdownload` file. 
