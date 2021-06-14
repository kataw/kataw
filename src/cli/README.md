## CLI

This files and folders contains the code for running Kataw from the command line.


### API

The `cli` is for internal usage and there are no public API.

It can be used like this:


```ts

cli(source, filename, /* isModule */ true, /* disableWebCompat */ false, function() {

})

```

The `source` is the source file to be parsed and the `filename` is the name on the file.
