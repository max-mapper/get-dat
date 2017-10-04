# Downloading a partial dataset from git
Here's an example of a dataset hosted on GitHub, where the author has included a `dat.json` file. This file contains the Dat link for the dataset as well as other metadata about these data. 

The author has included a .datdownload file which specifies which files users will download by default. Without this, all files would be downloaded upon cloning this repository. You can imagine a scenario where a larger dataset is availble, but only segments of it are required to reproduce an analysis. 

```
git clone https://github.com/joehand/dat-git-example.git
dat clone ./dat-git-example --empty
dat sync ./dat-git-example
```
