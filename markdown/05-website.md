# Hosting a website

We've covered sharing, syncing, and live syncing of data. But what about sharing via the web?
Add index.html file to server by typing the following into the virtual terminal: `touch index.html`
You will see a new file, `index.html`, has been added to the directory on the virutal server. 

Let's make it fun. Edit it and add some stuff in your html. Here's a template to get you started. 
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello Friends!</title>
</head>
<body>
<h1>Welcome to my data website!</h1>
<p>More things about my data. And cat!</p>
  <img src="cat.png" alt="cat" height="300" width="450"> 
<br>
  <img id="rickroll" src="https://media.giphy.com/media/13tTN4ccM3R6us/giphy.gif"/>  
</body>
</html>
```

To share this, run `dat share --http=$PORT_80`

Now, view it in browser, use the url in `welcome.txt` which should look something like this: `http://docker.try-dat.com:34777`.
Copy and past the link from your welcome.txt file into a new tab in the browser window. Check out your new website!

When you modify file, the site will update when you refresh the browser window. Pretty cool, huh?
