# Kataw parser test case

## Input

`````js
const testConsole = new TestConsole(
  config.useStderr ? process.stderr : process.stdout
);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "testConsole",
                            "rawText": "testConsole",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 17
                        },
                        "type": null,
                        "initializer": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 23
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "TestConsole",
                                "rawText": "TestConsole",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 35
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 197,
                                        "shortCircuit": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "config",
                                                "rawText": "config",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 36,
                                                "end": 45
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "useStderr",
                                                "rawText": "useStderr",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 55
                                            },
                                            "flags": 97,
                                            "transformFlags": 2,
                                            "start": 36,
                                            "end": 55
                                        },
                                        "questionToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 55,
                                            "end": 57
                                        },
                                        "consequent": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "process",
                                                "rawText": "process",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 57,
                                                "end": 65
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "stderr",
                                                "rawText": "stderr",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 66,
                                                "end": 72
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 57,
                                            "end": 72
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 72,
                                            "end": 74
                                        },
                                        "alternate": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "process",
                                                "rawText": "process",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 74,
                                                "end": 82
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "stdout",
                                                "rawText": "stdout",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 83,
                                                "end": 89
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 74,
                                            "end": 89
                                        },
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 89
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 89
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 91
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 5,
                        "end": 91
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 91
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 92
        }
    ],
    "isModule": false,
    "source": "const testConsole = new TestConsole(\n  config.useStderr ? process.stderr : process.stdout\n);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 92
}
```

### Printed

```javascript

const testConsole = new TestConsole(
    config.useStderr ? process.stderr : process.stdout
  );
```

### Diagnostics

```javascript
✔ No errors
```

