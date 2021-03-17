# Kataw parser test case

## Input

`````js
var v = (public x: string) => { };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var v = (public x: string) => { };",
    "filename": "",
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
                            "text": "v",
                            "rawText": "v",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 18,
                                            "end": 25
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": {
                                            "kind": 4194494,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 9,
                                            "end": 15
                                        },
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097153,
                                        "start": 9,
                                        "end": 25
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 26
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 31
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 33
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 33
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 33
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 33
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
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

