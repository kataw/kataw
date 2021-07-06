# Kataw parser test case

## Input

`````js
({...{}[x]} = y);

(x, {...{}[y]} = z);
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 6
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "flags": 536870944,
                                        "transformFlags": 4,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "flags": 1073741856,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 10
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 15
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 20,
                            "end": 21
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 224,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 27
                                            },
                                            "argument": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 28
                                                    },
                                                    "flags": 48,
                                                    "transformFlags": 8,
                                                    "start": 27,
                                                    "end": 29
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 30,
                                                    "end": 31
                                                },
                                                "flags": 536870944,
                                                "transformFlags": 4,
                                                "start": 27,
                                                "end": 32
                                            },
                                            "flags": 1073741856,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 32
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 22,
                                "end": 33
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 35
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 37
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 22,
                            "end": 37
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 38
                },
                "flags": 17,
                "transformFlags": 0,
                "start": 35,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 17,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "({...{}[x]} = y);\n\n(x, {...{}[y]} = z);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

({...{}[x]} = y);
(x, {...{}[y]} = z);

```

### Diagnostics

```javascript
✔ No errors
```

