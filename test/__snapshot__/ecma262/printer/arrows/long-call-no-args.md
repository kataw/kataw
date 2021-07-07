# Kataw parser test case

## Input

`````js
veryLongCall(VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_LONG_CONSTANT, () => {})
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
                    "text": "veryLongCall",
                    "rawText": "veryLongCall",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 12
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_LONG_CONSTANT",
                            "rawText": "VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_LONG_CONSTANT",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 76
                        },
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 79,
                                "end": 79
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 83
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 85,
                                    "end": 85
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 83,
                                "end": 86
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 77,
                            "end": 86
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 86
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 87
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 87
        }
    ],
    "isModule": false,
    "source": "veryLongCall(VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_LONG_CONSTANT, () => {})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 87
}
```

### Printed

```javascript
veryLongCall(
  VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_VERY_LONG_CONSTANT,
  () => {}
);
```

### Diagnostics

```javascript
✔ No errors
```

