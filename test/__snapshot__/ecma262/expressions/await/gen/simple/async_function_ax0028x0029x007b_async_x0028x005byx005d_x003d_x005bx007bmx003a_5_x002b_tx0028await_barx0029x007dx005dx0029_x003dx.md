# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/simple
> :: test: simple
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Options

`````js
{}
`````
## Input

`````js
async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
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
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 29
                            },
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
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 33
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 33
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 34
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
                                                                        "transformFlags": 0,
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
                                                                            "transformFlags": 0,
                                                                            "start": 41,
                                                                            "end": 43
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
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
                                                                                "transformFlags": 0,
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
                                                                                            "flags": 64,
                                                                                            "transformFlags": 0,
                                                                                            "start": 48,
                                                                                            "end": 53
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "bar",
                                                                                            "rawText": "bar",
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 53,
                                                                                            "end": 57
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 48,
                                                                                        "end": 57
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 48,
                                                                                "end": 57
                                                                            },
                                                                            "flags": 268435488,
                                                                            "transformFlags": 1,
                                                                            "start": 45,
                                                                            "end": 58
                                                                        },
                                                                        "flags": 96,
                                                                        "transformFlags": 1024,
                                                                        "start": 39,
                                                                        "end": 58
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 128,
                                                                    "start": 39,
                                                                    "end": 58
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 39,
                                                            "end": 58
                                                        },
                                                        "flags": 48,
                                                        "transformFlags": 8,
                                                        "start": 38,
                                                        "end": 59
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 59
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 36,
                                            "end": 60
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 60
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 61
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 64
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 66
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 67
                            },
                            "flags": 290,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 67
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 67
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 73
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
async function a() {
  async ([y] = [{ m: 5 + t(await bar) }]) => {}
}
```

### Diagnostics

```javascript
✔ No errors
```

