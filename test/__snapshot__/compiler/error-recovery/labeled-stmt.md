# Kataw parser test case

## Input

`````js
x: while (true) { (function () { break; }); }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x: while (true) { (function () { break; }); }",
    "filename": "",
    "statements": [
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "statement": {
                "kind": 2097399,
                "expression": {
                    "kind": 4260391,
                    "text": true,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 14
                },
                "statement": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 8456285,
                                        "name": null,
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 30
                                        },
                                        "contents": {
                                            "kind": 91,
                                            "functionStatementList": {
                                                "kind": 94,
                                                "statements": [
                                                    {
                                                        "kind": 2097193,
                                                        "label": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 39
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 39
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 41
                                        },
                                        "typeParameters": null,
                                        "type": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 41
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 42
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 43
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 43
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 45
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 45
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 45
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
    "end": 45
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

