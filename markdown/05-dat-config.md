# dat configuration

When you `dat init`, you are given a `package.json` file which holds information about the dat. This is a small configuration file that can hold information about the publisher, extensions such as an alternative backend (e.g., postgres), and the url location of the dat.

In your package.json file, you'll see:

```
{
  "dat": {},
  "name": "eukaryota"
}
```

You can add a variety of options to the `dat` key.

#### Default url for `dat pull`

Right now, if you type `dat pull` or `dat push` you will get a help message because you need a url to sync:

```
dat pull <url>

Pulls the checkout at the given url to the current dat.
```

But let's say we always want to `dat pull` from the eukaryota repository. To do this, first open `package.json` using a terminal text editor like `vim`, `pico`, or `emacs` or by clicking the <a href="#" data-action="toggle-bottom" class="toggle-editor">toggle editor</a> link in the bottom right of this web page.

Once you have opened `package.json`, you can the default dat remote like so:

```
{
  "dat": {
    "remote": "http://eukaryota.dathub.org"
  },
  "name": "eukaryota"
}
```

So, from now on, you can simply type `dat pull` to get the latest changes from "http://eukaryota.dathub.org", or `dat push` to update eukaryota with your latest changes.