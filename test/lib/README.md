# Kataw test runner

This files and folders contains the source files for the Kataw's own test suite

## Features

- Snapshots

- Performance


## API

The Kataw test runner API is very simple and takes a few arguments. If no arguments, the tests
will run as normal and report if any errors.

```ts
ts-node test/run.ts
```

### Options


The second argument allows you to specify various options:

| Option        | Description |
| ----------- | ------------------------------------------------------------ |
| `-u`          | Regenerate computed test case blocks (*process all autogen.md files*) |
| `-g`          | Auto-update tests with the results |
