# Live syncing data

Currently, you're running Dat both on the source and at your destination. Don't quit Dat! Leave it running on both terminals. 

Notice that your **source** terminal window says:

```
dat synced, waiting for updates.
``` 

What happens if you make changes to the source file while your destination is watching? On the **source** side, edit the `welcome.txt` rapidly, saving after each edit in your text editor program.

Watch what happens in your **destionation terminal** window as you save. 

Since this is a tiny text time, the updates will download extremely fast. Your **source terminal** window will look something like this:

```
1 connection | Download 445 KB/s Upload 0 B/s

Downloading updates...
[====================================------] 86.05%

```

Meanwhile, Dat running in the **destination machine** is watching for file updates:

```
Watching for file updates                                                          
ADD: welcome.txt (329 B)                                                           
ADD: welcome.txt (328 B)                                                           
ADD: welcome.txt (323 B)                                                           
ADD: welcome.txt (0 B) 
```

The file will live sync to your machine as you save. Isn't that cool? 
