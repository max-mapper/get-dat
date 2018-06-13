# Hosting a website

We've covered sharing, syncing, and live syncing of data. But what about sharing via the web? We can create a Dat link that can be viewed in a browser by asking dat to use the built-in http server. Use the `--http` flag to start serving on `http://localhost:8080`. The port can be specified using `--http=XYZ`, where `XYZ` is the server port. 

To demonstrate a good use case we will create a file called `index.html`. We suggest the following content but any HTML will do:

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

To share this, type the following in your terminal:

`dat share --http` 

Check out your new website at http://localhost:8080!

When you modify the file, the site will update when you refresh the browser window. Pretty cool, huh?
