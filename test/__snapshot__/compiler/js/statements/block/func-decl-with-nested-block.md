# Kataw parser test case

## Input

`````js
 function x() { { var f; var f } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": " function x() { { var f; var f } }",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 13
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097397,
                                        "declarationList": {
                                            "kind": 244,
                                            "declarations": [
                                                {
                                                    "kind": 16627,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 21,
                                                        "end": 23
                                                    },
                                                    "exclamation": false,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 21,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 0,
                                                    "end": 23
                                                }
                                            ],
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 24
                                    },
                                    {
                                        "kind": 2097397,
                                        "declarationList": {
                                            "kind": 244,
                                            "declarations": [
                                                {
                                                    "kind": 16627,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 28,
                                                        "end": 30
                                                    },
                                                    "exclamation": false,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 28,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 0,
                                                    "end": 30
                                                }
                                            ],
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 30
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 30
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 32
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 32
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 34
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 34
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
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

