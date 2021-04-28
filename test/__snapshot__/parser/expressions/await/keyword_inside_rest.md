# Kataw parser test case

## Input

`````js
async r => result = [...{ x = await x }] = y;
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 7,
                    "start": 0,
                    "end": 10
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "r",
                            "rawText": "r",
                            "flags": 768,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 0,
                        "end": 7
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "flags": 0,
                    "start": 512,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "result",
                        "rawText": "result",
                        "flags": 768,
                        "start": 10,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 17,
                        "start": 512,
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
                                            "flags": 21,
                                            "start": 0,
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
                                                            "flags": 768,
                                                            "start": 25,
                                                            "end": 27
                                                        },
                                                        "right": {
                                                            "kind": 208,
                                                            "awaitToken": {
                                                                "kind": 82032,
                                                                "flags": 29,
                                                                "start": 0,
                                                                "end": 35
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 768,
                                                                "start": 35,
                                                                "end": 37
                                                            },
                                                            "flags": 256,
                                                            "start": 29,
                                                            "end": 37
                                                        },
                                                        "flags": 256,
                                                        "start": 25,
                                                        "end": 37
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 25,
                                                "end": 37
                                            },
                                            "flags": 256,
                                            "start": 24,
                                            "end": 39
                                        },
                                        "flags": 256,
                                        "start": 21,
                                        "end": 39
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 21,
                                "end": 39
                            },
                            "flags": 256,
                            "start": 19,
                            "end": 40
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 40,
                            "start": 512,
                            "end": 42
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 42,
                            "end": 44
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 44
                    },
                    "flags": 256,
                    "start": 10,
                    "end": 44
                },
                "flags": 2304,
                "start": 0,
                "end": 44
            },
            "flags": 128,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "async r => result = [...{ x = await x }] = y;",
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

