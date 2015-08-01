# Thanks!

That's it, you're done with the core part of the workshop! There is an extra credit lesson available if you have the time.

**Ready to try dat at home?** You'll need to install dat on your local machine so that you can clone your dataset onto your personal computer.

## Installing dat takes 2 steps:

- First, <a href="http://nodejs.org" target="_blank">download the node.js installer for your OS</a> and walk through the installer program. This will install the `node` and `npm` commands onto your computer.
- Second, open your terminal program (`Terminal.app` on Mac, `CMD.exe` on Windows) and install dat by running `npm install dat -g`. This make take a few minutes.

If you get an `EACCESS` error you can try running the install command again with more permissions: `sudo npm install dat -g`

When the install command finishes you should be able to run the `dat` command in your terminal and see output like:

```
$ dat
usage: dat <command(s)> [-flag] [--key=value]

commands:
  init      initialize a new dat in a directory
  checkout  dat will operate at a particular fork
  import    import a file into dat
  push      push data to a remote dat
  ... etc
```

Dat is still in beta, but we are working hard on making dat more awesome in the future.

To learn more about dat you can check out our <a href="https://github.com/maxogden/dat/blob/master/docs" target="_blank">getting started guides</a>, follow <a href="https://twitter.com/dat_project" target="_blank">@dat_project</a> on twitter, and join `#dat` on [freenode](https://webchat.freenode.net). Chat logs are [available here](https://botbot.me/freenode/dat/)