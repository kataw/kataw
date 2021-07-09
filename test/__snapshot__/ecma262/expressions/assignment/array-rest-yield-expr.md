# Kataw parser test case

## Input

`````js
result = [...x[yield]] = vals;
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
                                    "kind": 223,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 20
                                        },
                                        "flags": 536870944,
                                        "transformFlags": 4,
                                        "start": 13,
                                        "end": 21
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 21
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 8,
                        "end": 22
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 24
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 29
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 8,
                    "end": 29
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "result = [...x[yield]] = vals;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
result = [...x[yield]] = vals;
```

### Diagnostics

```javascript
✔ No errors
```

