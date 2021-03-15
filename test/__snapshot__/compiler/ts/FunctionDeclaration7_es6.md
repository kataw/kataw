# Kataw parser test case

## Input

`````js
function*bar() {
  // 'yield' here is an identifier, and not a yield expression.
  function*foo(a = yield) {
  }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function*bar() {\n  // 'yield' here is an identifier, and not a yield expression.\n  function*foo(a = yield) {\n  }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "bar",
                "rawText": "bar",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 9,
                "end": 12
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 14
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
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
                                "start": 92,
                                "end": 95
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 96,
                                            "end": 97
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65785,
                                            "delegate": false,
                                            "expression": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 16393,
                                            "start": 99,
                                            "end": 105
                                        },
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 96,
                                        "end": 105
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 96,
                                "end": 106
                            },
                            "type": null,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 108,
                                    "end": 108
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 106,
                                "end": 112
                            },
                            "typeParameters": null,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 384,
                            "start": 16,
                            "end": 112
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 112
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 114
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 0,
            "end": 114
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
    "end": 114
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

