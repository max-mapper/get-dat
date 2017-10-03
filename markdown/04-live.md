# Live syncing data

Currently, you're running Dat both on the remote server and at your local machine. Don't quit Dat! Leave it running on both your local machine and the virtual server. 

Notice that your local machine says:

```
dat synced, waiting for updates.
``` 

What happens if you make changes to the remote file while your local machine is watching? Pull up your terminal window next to the browser window and edit the `welcome.txt` file on ther server again. 

Watch what happens in the terminal window. 

Your local terminal window:
```
1 connection | Download 445 KB/s Upload 0 B/s

Downloading updates...
[====================================------] 86.05%

```
The virtual machine:
```
Watching for file updates                                                          
ADD: welcome.txt (329 B)                                                           
ADD: welcome.txt (328 B)                                                           
ADD: welcome.txt (323 B)                                                           
ADD: welcome.txt (0 B) 
```
The file will live sync to your machine as you type. Isn't that cool? 
