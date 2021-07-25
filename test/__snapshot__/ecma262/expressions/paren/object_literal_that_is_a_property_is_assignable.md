# Kataw parser test case

## Input

`````js
({x: y}.length) = z
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
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 3
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 6
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 2,
                                        "end": 6
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 6
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 7
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "length",
                            "rawText": "length",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 14
                        },
                        "flags": 48,
                        "transformFlags": 2,
                        "start": 0,
                        "end": 14
                    },
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "({x: y}.length) = z",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
({ x: y }.length) = z;
```

### Diagnostics

```javascript
✔ No errors
```

