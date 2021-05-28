# Kataw parser test case

## Input

`````js
async function a(){     async ({g} = [{m: 5 + t(await bar)}]);     }
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
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                                "flags": 96,
                                "start": 19,
                                "end": 29
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "g",
                                                        "rawText": "g",
                                                        "flags": 96,
                                                        "start": 32,
                                                        "end": 33
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 32,
                                                "end": 33
                                            },
                                            "flags": 48,
                                            "start": 31,
                                            "end": 34
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
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
                                                                    "generatorToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "m",
                                                                        "rawText": "m",
                                                                        "flags": 96,
                                                                        "start": 39,
                                                                        "end": 40
                                                                    },
                                                                    "right": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 201392130,
                                                                            "text": 5,
                                                                            "rawText": "5",
                                                                            "flags": 96,
                                                                            "start": 41,
                                                                            "end": 43
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 34098,
                                                                            "flags": 64,
                                                                            "start": 43,
                                                                            "end": 45
                                                                        },
                                                                        "right": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "t",
                                                                                "rawText": "t",
                                                                                "flags": 96,
                                                                                "start": 45,
                                                                                "end": 47
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 208,
                                                                                        "awaitKeyword": {
                                                                                            "kind": 82196,
                                                                                            "flags": 0,
                                                                                            "start": 48,
                                                                                            "end": 53
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "bar",
                                                                                            "rawText": "bar",
                                                                                            "flags": 96,
                                                                                            "start": 53,
                                                                                            "end": 57
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 48,
                                                                                        "end": 57
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 48,
                                                                                "end": 57
                                                                            },
                                                                            "flags": 268435488,
                                                                            "start": 45,
                                                                            "end": 58
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 39,
                                                                        "end": 58
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 39,
                                                                    "end": 58
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 39,
                                                            "end": 58
                                                        },
                                                        "flags": 48,
                                                        "start": 38,
                                                        "end": 59
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 38,
                                                "end": 59
                                            },
                                            "flags": 32,
                                            "start": 36,
                                            "end": 60
                                        },
                                        "flags": 32,
                                        "start": 31,
                                        "end": 60
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 268435488,
                            "start": 19,
                            "end": 61
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 61,
                            "end": 62
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 62
                },
                "flags": 32,
                "start": 18,
                "end": 68
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "async function a(){     async ({g} = [{m: 5 + t(await bar)}]);     }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

async function a() {
  async({ g } = [{ m: 5 + t(await bar) }])

}
```

### Diagnostics

```javascript
✔ No errors
```

