## Fuzzer

This files and folders contains a fuzzer to test Kataw CST.

## API

The parse method allows you to fuzz in `script mode` (*the default*) or in `module goal`-

**Note** Only a subset of the CST can be fuzzed

```ts
kataw.fuzzScript()

kataw.fuzzeModule()
```
