# Live syncing data

Currently, you're running Dat both on the remote server and at your local machine. Don't quit Dat! Leave it running on both your local machine and the virtual server. 

Notice that your **local machine** terminal window says:

```
dat synced, waiting for updates.
``` 

What happens if you make changes to the remote file while your local machine is watching? Put your **local terminal** window next to the browser **virtual terminal** window and edit the `welcome.txt` file on the server again. 

Watch what happens in your **local terminal** window as you type. 

Since this is a tiny text time, the updates will download extremely fast. Your **local terminal** window will look something like this:
```
1 connection | Download 445 KB/s Upload 0 B/s

Downloading updates...
[====================================------] 86.05%

```
Meanwhile, Dat running in the **virtual machine** is watching for file updates:
```
Watching for file updates                                                          
ADD: welcome.txt (329 B)                                                           
ADD: welcome.txt (328 B)                                                           
ADD: welcome.txt (323 B)                                                           
ADD: welcome.txt (0 B) 
```
The file will live sync to your machine as you type. Isn't that cool? 
