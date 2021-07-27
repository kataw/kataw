# Reporters

This files and folders contains two diagnostic reporters that can be added to your error callback.

The reporters uses different color codes - depends on whether it is an `error`, `lint issue` or `warning`.

## Available reports

| Reporter        |   Description |
| ----------- |------------------------------------------------- |
| `aladdin`  |  Outputs a detailed, graphic for each diagnostic |
| `listings`    | Outputs a list identical with `ESLint` |


## API

Here is how you can use the reports.

```ts
import { parseScript, aladdin } from 'kataw';

parseScript('eval()', { lint: { noEval: true } }, function(diagnosticSource, kind, message, start, end) {
  aladdin(diagnosticSource, kind, message, start, end, source);
});

```

The `source` is the source code currently being parsed.
