# Kataw parser test case

## Input

`````js
[{x:x = 1, y:y = 2}, [a = 3, b = 4, c = 5]] = {};
`````

## Output

### Hybrid CST

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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 4,
                                                    "end": 5
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 5,
                                                    "start": 512,
                                                    "end": 7
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 7,
                                                    "end": 9
                                                },
                                                "flags": 256,
                                                "start": 2,
                                                "end": 9
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 2,
                                                "end": 3
                                            },
                                            "flags": 256,
                                            "start": 2,
                                            "end": 9
                                        },
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 13,
                                                    "end": 14
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 14,
                                                    "start": 512,
                                                    "end": 16
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 16,
                                                    "end": 18
                                                },
                                                "flags": 256,
                                                "start": 10,
                                                "end": 18
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 768,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "flags": 256,
                                            "start": 10,
                                            "end": 18
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 18
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 19
                            },
                            {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 22,
                                                "end": 23
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 23,
                                                "start": 512,
                                                "end": 25
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 768,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "flags": 256,
                                            "start": 22,
                                            "end": 27
                                        },
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 28,
                                                "end": 30
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 30,
                                                "start": 512,
                                                "end": 32
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 4,
                                                "rawText": "4",
                                                "flags": 768,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "flags": 256,
                                            "start": 28,
                                            "end": 34
                                        },
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 768,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 37,
                                                "start": 512,
                                                "end": 39
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 5,
                                                "rawText": "5",
                                                "flags": 768,
                                                "start": 39,
                                                "end": 41
                                            },
                                            "flags": 256,
                                            "start": 35,
                                            "end": 41
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 22,
                                    "end": 41
                                },
                                "flags": 256,
                                "start": 20,
                                "end": 42
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 42
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 43
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 43,
                    "start": 512,
                    "end": 45
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 47,
                        "end": 47
                    },
                    "flags": 256,
                    "start": 45,
                    "end": 48
                },
                "flags": 256,
                "start": 0,
                "end": 48
            },
            "flags": 128,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "text": "[{x:x = 1, y:y = 2}, [a = 3, b = 4, c = 5]] = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

