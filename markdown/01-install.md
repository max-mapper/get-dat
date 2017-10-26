# Installation

Dat is already installed on the server session we have provided, but in order to complete this tutorial you'll need a fresh copy on your personal computer too. Dat is currently distributed using `npm`. We recommend downloading `node` and `npm` LTS from the Node.js website.

- [Download node and npm here](https://nodejs.org/en/)

You'll also need a Terminal application on your local computer. If you're using Windows, you should use the **Git Shell** app as your terminal. It is installed with [GitHub Desktop](http://desktop.github.com). In Mac and Linux you can use the app **Terminal**, which is already on your computer.

If you've never used the command line before, check out [Command Line Bootcamp](http://rik.smith-unna.com/command_line_bootcamp/?id=bfv5p9l1w5g) to get comfortable navigating your computer via the command line. 

Once you have downloaded npm, install dat on your local machine. Type the following in your **local terminal**:

```
npm install -g dat
```

This means that dat is now installed on your system:

```
$ dat

Usage: dat <cmd> [<dir>] [options]

Sharing Files:
   dat share                   create dat, import files, share to network
   dat create                  create empty dat and dat.json
   dat sync                    import files to existing dat & sync with network

Downloading Files:
   dat clone <link> [<dir>]    download a dat via link to <dir>
   dat pull                    update dat & exit
   dat sync                    live sync files with the network

Info:
   dat log                     log history for a dat
   dat status                  get key & info about a local dat

Dat public registries:
   dat <cmd> [<registry>]      All commands take <registry> option
   dat register                register new account
   dat login                   login to your account
   dat publish                 publish a dat
   dat whoami                  print active login information
   dat logout                  logout from active login

Stateless/Shortcut Commands:
   dat <link> [<dir>]          clone or sync link to <dir>
   dat <dir>                   create and sync dat in directory

Troubleshooting & Help:
   dat doctor                  run the dat network doctor
   dat help                    print this usage guide
   dat <command> --help, -h    print help for a specific command
   dat --version, -v           print the dat version

  
Have fun using Dat! Learn more at docs.datproject.org
```

Once you have this installed, you're good to go! Let's move on to the good stuff.
