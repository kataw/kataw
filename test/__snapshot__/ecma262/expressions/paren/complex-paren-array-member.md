# Kataw parser test case

## Input

`````js
([...[([...[].x] = x)].x] = x);
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
                                        "start": 2,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 121,
                                                        "expression": {
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
                                                                                "start": 8,
                                                                                "end": 11
                                                                            },
                                                                            "argument": {
                                                                                "kind": 129,
                                                                                "member": {
                                                                                    "kind": 119,
                                                                                    "elementList": {
                                                                                        "kind": 270,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 12,
                                                                                        "end": 12
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 8,
                                                                                    "start": 11,
                                                                                    "end": 13
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "x",
                                                                                    "rawText": "x",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 14,
                                                                                    "end": 15
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 2,
                                                                                "start": 11,
                                                                                "end": 15
                                                                            },
                                                                            "flags": 1073741856,
                                                                            "transformFlags": 0,
                                                                            "start": 8,
                                                                            "end": 15
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 8,
                                                                    "end": 15
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 8,
                                                                "start": 7,
                                                                "end": 16
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 16,
                                                                "end": 18
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 18,
                                                                "end": 20
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 128,
                                                            "start": 7,
                                                            "end": 20
                                                        },
                                                        "flags": 6,
                                                        "transformFlags": 0,
                                                        "start": 34,
                                                        "end": 21
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 21
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 5,
                                            "end": 22
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 5,
                                        "end": 24
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 24
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 24
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 25
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 27
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 29
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "([...[([...[].x] = x)].x] = x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
([...[([...[].x] = x)].x] = x);
```

### Diagnostics

```javascript
✔ No errors
```

