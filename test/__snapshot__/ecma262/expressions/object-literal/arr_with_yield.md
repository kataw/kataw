# Kataw parser test case

## Input

`````js
result = [x[yield]] = vals;
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
                                    "kind": 130,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "transformFlags": 4,
                                    "start": 10,
                                    "end": 18
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 18
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 8,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 21
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 26
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 8,
                    "end": 26
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "result = [x[yield]] = vals;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
result = [x[yield]] = vals;
```

### Diagnostics

```javascript
✔ No errors
```

