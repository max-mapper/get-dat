# `dat.json`

## How to configure dat

The `dat.json` file that gets created when you do `dat init` can be used to override dat's default behavior and extend it with new functionality.

There is [full documentation available](https://github.com/maxogden/dat/blob/master/docs/dat-json-config.md) for the `dat.json` file. In this file we will cover some common use cases.

### Default port

Dat's default port is `6461`. Edit your `dat.json` file (create a new empty dat if you don't already have one) and add a port:

```JSON
{
  "name": "get-dat",
  "port": 9000
}
```

Now run `dat listen`. It should have started on port `9000` this time. Enter `CTRL + c` to stop the dat process.

### Transformations

You can insert custom functions that will happen whenever dat reads a row or writes a row to the tabular store. These can be commands that do 

### Blobs

### Leveldown

### Listen Hook
