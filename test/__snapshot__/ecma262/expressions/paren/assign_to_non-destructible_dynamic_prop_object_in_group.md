# Kataw parser test case

## Input

`````js
({[x]:y} = z);
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3,
                                            "end": 4
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 7
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2,
                                    "end": 7
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 7
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 10
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 12
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 12
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "({[x]:y} = z);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
({ [x]: y } = z);
```

### Diagnostics

```javascript
✔ No errors
```

