# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function g(){let o = {async *f(foo = await bar){}}    }
## Input

`````js
'use strict'; async function g(){let o = {async *f(foo = await bar){}}    }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 768,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 19,
                "end": 28
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 768,
                                "start": 33,
                                "end": 36
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "o",
                                            "rawText": "o",
                                            "flags": 768,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 209,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "f",
                                                            "rawText": "f",
                                                            "flags": 768,
                                                            "start": 49,
                                                            "end": 50
                                                        },
                                                        "typeParameters": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [
                                                                {
                                                                    "kind": 215,
                                                                    "ellipsisToken": null,
                                                                    "binding": {
                                                                        "kind": 134299649,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 768,
                                                                        "start": 51,
                                                                        "end": 54
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 208,
                                                                        "awaitToken": {
                                                                            "kind": 82032,
                                                                            "flags": 768,
                                                                            "start": 56,
                                                                            "end": 62
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "bar",
                                                                            "rawText": "bar",
                                                                            "flags": 768,
                                                                            "start": 62,
                                                                            "end": 66
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 56,
                                                                        "end": 66
                                                                    },
                                                                    "flags": 258,
                                                                    "start": 51,
                                                                    "end": 66
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 3330,
                                                            "start": 51,
                                                            "end": 67
                                                        },
                                                        "type": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "multiline": false,
                                                                "flags": 256,
                                                                "start": 68,
                                                                "end": 68
                                                            },
                                                            "flags": 256,
                                                            "start": 67,
                                                            "end": 69
                                                        },
                                                        "flags": 3328,
                                                        "start": 50,
                                                        "end": 69
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 42,
                                                "end": 69
                                            },
                                            "flags": 256,
                                            "start": 40,
                                            "end": 70
                                        },
                                        "flags": 128,
                                        "start": 36,
                                        "end": 70
                                    }
                                ],
                                "flags": 128,
                                "start": 36,
                                "end": 70
                            },
                            "flags": 128,
                            "start": 33,
                            "end": 70
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 33,
                    "end": 70
                },
                "flags": 256,
                "start": 32,
                "end": 75
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1280,
            "start": 13,
            "end": 75
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function g(){let o = {async *f(foo = await bar){}}    }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

