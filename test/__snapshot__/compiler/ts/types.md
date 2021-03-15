# Kataw parser test case

## Input

`````js
(() => {
  // swallow error and fallback to using directory as path
}) as string[];
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(() => {\n  // swallow error and fallback to using directory as path\n}) as string[];",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 73738,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 83976,
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
                            "start": 1,
                            "end": 1
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 69
                        },
                        "flags": 1073741824,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 69
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 70
                },
                "type": {
                    "kind": 8199,
                    "elementType": {
                        "kind": 4202702,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 73,
                        "end": 80
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 73,
                    "end": 83
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 70,
                "end": 82
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 83
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
    "end": 83
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

