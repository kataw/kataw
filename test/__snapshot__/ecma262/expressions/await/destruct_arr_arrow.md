# Kataw parser test case

## Input

`````js
async function a(){     ([y] = [{m: 5 + t(await bar)}]) => {}     }
`````

## Output

### CST

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
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 26,
                                                            "end": 27
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 26,
                                                    "end": 27
                                                },
                                                "flags": 32,
                                                "start": 25,
                                                "end": 28
                                            },
                                            "optionalToken": null,
                                            "type": null,
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
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "m",
                                                                            "rawText": "m",
                                                                            "flags": 96,
                                                                            "start": 33,
                                                                            "end": 34
                                                                        },
                                                                        "right": {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 201392130,
                                                                                "text": 5,
                                                                                "rawText": "5",
                                                                                "flags": 96,
                                                                                "start": 35,
                                                                                "end": 37
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 99634,
                                                                                "flags": 96,
                                                                                "start": 37,
                                                                                "end": 39
                                                                            },
                                                                            "right": {
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "t",
                                                                                    "rawText": "t",
                                                                                    "flags": 96,
                                                                                    "start": 39,
                                                                                    "end": 41
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 208,
                                                                                            "awaitKeyword": {
                                                                                                "kind": 82196,
                                                                                                "flags": 64,
                                                                                                "start": 42,
                                                                                                "end": 47
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 134299649,
                                                                                                "text": "bar",
                                                                                                "rawText": "bar",
                                                                                                "flags": 96,
                                                                                                "start": 47,
                                                                                                "end": 51
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 42,
                                                                                            "end": 51
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 42,
                                                                                    "end": 51
                                                                                },
                                                                                "flags": 268435488,
                                                                                "start": 39,
                                                                                "end": 52
                                                                            },
                                                                            "flags": 96,
                                                                            "start": 33,
                                                                            "end": 52
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 33,
                                                                        "end": 52
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 33,
                                                                "end": 52
                                                            },
                                                            "flags": 48,
                                                            "start": 32,
                                                            "end": 53
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 32,
                                                    "end": 53
                                                },
                                                "flags": 32,
                                                "start": 30,
                                                "end": 54
                                            },
                                            "flags": 32,
                                            "start": 25,
                                            "end": 54
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2,
                                    "start": 25,
                                    "end": 55
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 55,
                                    "end": 58
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 60,
                                        "end": 60
                                    },
                                    "flags": 32,
                                    "start": 58,
                                    "end": 61
                                },
                                "flags": 34,
                                "start": 19,
                                "end": 61
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 61
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 61
                },
                "flags": 32,
                "start": 18,
                "end": 67
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "async function a(){     ([y] = [{m: 5 + t(await bar)}]) => {}     }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

async function a() {
  ([y] = [{ m : 5 + t(await bar) },]) => {};
}

```

### Diagnostics

```javascript
✔ No errors
```

