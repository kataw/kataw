# Kataw parser test case

## Input

`````js
function* foo() {
  yield
  yield
}

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function* foo() {\n  yield\n  yield\n}\n",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 9,
                "end": 13
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 15
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65785,
                                "delegate": false,
                                "expression": null,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 16393,
                                "start": 17,
                                "end": 25
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 25
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65785,
                                "delegate": false,
                                "expression": null,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 16393,
                                "start": 25,
                                "end": 33
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 33
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 33
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 35
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 384,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

