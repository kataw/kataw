# Kataw parser test case

## Input

`````js
[a = [b] = c, {[d]: e}, f] = g
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
                                    "flags": 96,
                                    "start": 1,
                                    "end": 2
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 4
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 6,
                                                    "end": 7
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "flags": 32,
                                        "start": 4,
                                        "end": 8
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "flags": 32,
                                    "start": 4,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 12
                            },
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 96,
                                                "start": 19,
                                                "end": 21
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "d",
                                                    "rawText": "d",
                                                    "flags": 96,
                                                    "start": 16,
                                                    "end": 17
                                                },
                                                "flags": 32,
                                                "start": 15,
                                                "end": 18
                                            },
                                            "flags": 32,
                                            "start": 15,
                                            "end": 21
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 15,
                                    "end": 21
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 22
                            },
                            {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 23,
                                "end": 25
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 26,
                    "end": 28
                },
                "right": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 28,
                    "end": 30
                },
                "flags": 32,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "[a = [b] = c, {[d]: e}, f] = g",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
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

