# Kataw parser test case

## Input

`````js
wrap({set} = x);
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
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 4
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "set",
                                            "rawText": "set",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 9
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 9
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 5,
                                "end": 10
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 12
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 14
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 5,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 14
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "wrap({set} = x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
wrap({ set } = x);
```

### Diagnostics

```javascript
✔ No errors
```

