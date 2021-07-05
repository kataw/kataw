# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/simple
> :: test: simple
> :: case: async function a(){     async ({r} = await bar);     }
## Options

`````js
{}
`````
## Input

`````js
async function a(){     async ({r} = await bar);     }
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
                                                        "text": "r",
                                                        "rawText": "r",
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
                                            "flags": 96,
                                            "start": 34,
                                            "end": 36
                                        },
                                        "right": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 64,
                                                "start": 36,
                                                "end": 42
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 42,
                                                "end": 46
                                            },
                                            "flags": 32,
                                            "start": 36,
                                            "end": 46
                                        },
                                        "flags": 32,
                                        "start": 31,
                                        "end": 46
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 268435490,
                            "start": 19,
                            "end": 47
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 47,
                            "end": 48
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 48
                },
                "flags": 32,
                "start": 18,
                "end": 54
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "async function a(){     async ({r} = await bar);     }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

async function a() {
  async(
    {r} = await bar
  )
}
```

### Diagnostics

```javascript
✔ No errors
```

