# Kataw parser test case

## Input

`````js
async r => result = [...{ x = await x }] = y;
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 7,
                    "end": 10
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "r",
                    "rawText": "r",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "result",
                        "rawText": "result",
                        "flags": 96,
                        "start": 10,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 17,
                        "end": 19
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
                                            "flags": 0,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "argument": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 205,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 25,
                                                            "end": 27
                                                        },
                                                        "right": {
                                                            "kind": 208,
                                                            "awaitKeyword": {
                                                                "kind": 82032,
                                                                "flags": 0,
                                                                "start": 29,
                                                                "end": 35
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 35,
                                                                "end": 37
                                                            },
                                                            "flags": 32,
                                                            "start": 29,
                                                            "end": 37
                                                        },
                                                        "flags": 32,
                                                        "start": 25,
                                                        "end": 37
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 25,
                                                "end": 37
                                            },
                                            "flags": 32,
                                            "start": 24,
                                            "end": 39
                                        },
                                        "flags": 32,
                                        "start": 21,
                                        "end": 39
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 21,
                                "end": 39
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 40
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 40,
                            "end": 42
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 42,
                            "end": 44
                        },
                        "flags": 32,
                        "start": 19,
                        "end": 44
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 44
                },
                "flags": 288,
                "start": 0,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "async r => result = [...{ x = await x }] = y;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
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

