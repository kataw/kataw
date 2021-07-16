# Kataw parser test case

## Input

`````js
result = [ x = 'x' in {} ] = vals;
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
                    "kind": 134299649,
                    "text": "result",
                    "rawText": "result",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "x",
                                            "rawText": "'x'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 18
                                        },
                                        "operatorToken": {
                                            "kind": 21006388,
                                            "flags": 96,
                                            "transformFlags": 8192,
                                            "start": 18,
                                            "end": 21
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 23
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "flags": 4194400,
                                        "transformFlags": 5120,
                                        "start": 14,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 10,
                                    "end": 24
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 24
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 8,
                        "end": 26
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 28
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 33
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 8,
                    "end": 33
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "result = [ x = 'x' in {} ] = vals;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
result = [x = "'x'" in {}] = vals;
```

### Diagnostics

```javascript
✔ No errors
```

