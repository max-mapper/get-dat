**get-dat** is a tutorial that teaches you how to work with datasets using <a href="http://dat-data.com" target="_blank">dat</a>.

dat is still very much in the early stages of development, but we hope to enable some really cool collaboration workflows to make sharing and improving datasets easy.

In this panel you will find step by step instructions for this tutorial. There are navigation links at the **bottom** of each page.

On the bottom there is a file browser and text editor that is **connected to the same server** that the terminal is logged on to.

You can double-click files in the file browser to open them, and editing text in the text editor **auto-saves** your changes to the server.

**When you leave or close this webpage your server will be shut down.**

You'll need to install dat on your local machine so that you can clone your dataset onto your computer (used later in the "dat clone" portion of the lesson).

Installing dat is a 2-step process:

- First, <a href="http://nodejs.org" target="_blank">download the node.js installer for your OS</a> and walk through the installer. This will install the `node` and `npm` commands onto your computer.
- Second, open your terminal program (“Terminal” on Mac, "Command Prompt" on Windows) and install dat by running `npm install dat -g`. This make take a few minutes.

If you get an `EACCESS` error you can try running the install command again with more permissions: `sudo npm install dat -g`

When the installation finishes, you should be able to run the `dat` command in your terminal and see output like this:

```
$ dat
usage: dat <command(s)> [-flag] [--key=value]

commands:
  init      initialize a new dat in a directory
  checkout  dat will operate at a particular fork
  add       import a file into dat
  push      push data to a remote dat
  ... etc
```

OK, now we're ready to dive in!
