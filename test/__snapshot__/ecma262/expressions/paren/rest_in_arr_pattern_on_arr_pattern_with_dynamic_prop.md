# Kataw parser test case

## Input

`````js
([...[][x]] = x);

(x, [...[][x]] = x);
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
                                        "start": 2,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 6,
                                                "end": 6
                                            },
                                            "flags": 32,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "flags": 536870944,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 10
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 20,
                            "end": 21
                        },
                        {
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
                                                "start": 24,
                                                "end": 27
                                            },
                                            "argument": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 28,
                                                        "end": 28
                                                    },
                                                    "flags": 32,
                                                    "start": 27,
                                                    "end": 29
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 30,
                                                    "end": 31
                                                },
                                                "flags": 536870944,
                                                "start": 27,
                                                "end": 32
                                            },
                                            "flags": 32,
                                            "start": 24,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 24,
                                    "end": 32
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 33
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 33,
                                "end": 35
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 35,
                                "end": 37
                            },
                            "flags": 32,
                            "start": 22,
                            "end": 37
                        }
                    ],
                    "flags": 32,
                    "start": 17,
                    "end": 38
                },
                "flags": 32,
                "start": 17,
                "end": 38
            },
            "flags": 16,
            "start": 17,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "([...[][x]] = x);\n\n(x, [...[][x]] = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

([...[][x]] = x);
(x, [...[][x]] = x);
```

### Diagnostics

```javascript
✔ No errors
```

