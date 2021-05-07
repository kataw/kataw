# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function a(){     async ({r} = await bar);     }
## Input

`````js
'use strict'; async function a(){     async ({r} = await bar);     }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 19,
                "end": 28
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 30,
                "end": 32
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
                                "start": 33,
                                "end": 43
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
                                                        "start": 46,
                                                        "end": 47
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 46,
                                                "end": 47
                                            },
                                            "flags": 32,
                                            "start": 45,
                                            "end": 48
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 48,
                                            "end": 50
                                        },
                                        "right": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82032,
                                                "flags": 0,
                                                "start": 50,
                                                "end": 56
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 56,
                                                "end": 60
                                            },
                                            "flags": 32,
                                            "start": 50,
                                            "end": 60
                                        },
                                        "flags": 32,
                                        "start": 45,
                                        "end": 60
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 33,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 33,
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
                    "start": 33,
                    "end": 62
                },
                "flags": 32,
                "start": 32,
                "end": 68
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 13,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "'use strict'; async function a(){     async ({r} = await bar);     }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

async function a() {
  async({ r } = await bar)

}
```

### Diagnostics

```javascript
✔ No errors
```

