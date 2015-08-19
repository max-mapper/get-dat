# dat configuration

When you `dat init`, you are given a `package.json` file which holds information about the dat. This is a small configuration file that can hold information about the publisher, extensions such as an alternative backend (e.g., PostgreSQL), and the URL of the dat.

In your `package.json` file, you'll see:

```
{
  "dat": {},
  "name": "eukaryota"
}
```

You can add a variety of options to the `dat` key.

#### Default URL for `dat pull`

Right now, if you type `dat pull` or `dat push` you will get a help message, because you need a URL to sync:

```
dat pull <url>

Pulls the checkout at the given url to the current dat.
```

But let's say we **always** want to `dat pull` from the eukaryota repository. That means, by default, `dat pull` and `dat push` would need to use this URL by default.

To do this, we will open `package.json` to edit the default dat remote like so, and then save it:

```
{
  "dat": {
    "remote": "http://eukaryota.dathub.org"
  },
  "name": "eukaryota"
}
```

That's it! From now on, you can simply type `dat pull` to get the latest changes from `http://eukaryota.dathub.org/`, or `dat push` to update eukaryota with your latest changes.
