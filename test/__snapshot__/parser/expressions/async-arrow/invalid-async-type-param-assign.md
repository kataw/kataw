# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
async <T = U>(x)
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 0,
                    "end": 0
                },
                "flags": 268435488,
                "start": 0,
                "end": 16,
                "typeParameters": {
                    "kind": 307,
                    "declarations": {
                        "kind": 337,
                        "parameters": [
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 8
                                },
                                "type": null,
                                "defaultType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "U",
                                            "rawText": "U",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 12
                                },
                                "flags": 2097152,
                                "start": 0,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 0,
                        "end": 16
                    },
                    "flags": 2097152,
                    "start": 0,
                    "end": 16
                }
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": true,
    "source": "async <T = U>(x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 0, end: 16

```

