# Downloading a dataset from GitHub
Here's an example of a dataset hosted on GitHub, where the author has included a `dat.json` file. This file contains the Dat link for the dataset as well as other metadata about these data. 



```
git clone https://github.com/joehand/dat-git-example.git
dat clone ./dat-git-example --empty
dat sync ./dat-git-example
```
