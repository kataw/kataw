# Kataw parser test case

## Input

`````js
async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 512,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 768,
                                "start": 19,
                                "end": 29
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 32,
                                                        "end": 33
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 32,
                                                "end": 33
                                            },
                                            "flags": 256,
                                            "start": 31,
                                            "end": 34
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 512,
                                            "start": 34,
                                            "end": 36
                                        },
                                        "right": {
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
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 201392130,
                                                                            "text": 5,
                                                                            "rawText": "5",
                                                                            "flags": 768,
                                                                            "start": 41,
                                                                            "end": 43
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 34098,
                                                                            "flags": 512,
                                                                            "start": 43,
                                                                            "end": 45
                                                                        },
                                                                        "right": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "t",
                                                                                "rawText": "t",
                                                                                "flags": 768,
                                                                                "start": 45,
                                                                                "end": 47
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 208,
                                                                                        "awaitToken": {
                                                                                            "kind": 82032,
                                                                                            "flags": 0,
                                                                                            "start": 48,
                                                                                            "end": 53
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "bar",
                                                                                            "rawText": "bar",
                                                                                            "flags": 768,
                                                                                            "start": 53,
                                                                                            "end": 57
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 48,
                                                                                        "end": 57
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 256,
                                                                                "start": 48,
                                                                                "end": 57
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 45,
                                                                            "end": 58
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 39,
                                                                        "end": 58
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "m",
                                                                        "rawText": "m",
                                                                        "flags": 768,
                                                                        "start": 39,
                                                                        "end": 40
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 39,
                                                                    "end": 58
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "start": 39,
                                                            "end": 58
                                                        },
                                                        "flags": 256,
                                                        "start": 38,
                                                        "end": 59
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 38,
                                                "end": 59
                                            },
                                            "flags": 256,
                                            "start": 36,
                                            "end": 60
                                        },
                                        "flags": 256,
                                        "start": 31,
                                        "end": 60
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 256,
                            "start": 19,
                            "end": 61
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 61
                },
                "flags": 256,
                "start": 18,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 61
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 66,
                "end": 66
            },
            "flags": 128,
            "start": 64,
            "end": 67
        }
    ],
    "isModule": false,
    "text": "async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 61, end: 64
✖ Statement expected - start: 67, end: 73

```

