# Kataw parser test case

## Input

`````js
async () => {
    if (window)
        return;
}

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async () => {\n    if (window)\n        return;\n}\n",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 81936,
                "typeParameters": null,
                "arrowParameters": {
                    "kind": 81929,
                    "elements": [],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097257,
                                "expression": {
                                    "kind": 196712,
                                    "text": "window",
                                    "rawText": "window",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 28
                                },
                                "consequent": {
                                    "kind": 2097346,
                                    "expression": null,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 45
                                },
                                "alternate": null,
                                "isWebCompat": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 45
                            }
                        ],
                        "multiline": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 45
                    },
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 47
                },
                "flags": 1073774592,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 47
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 47
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
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

