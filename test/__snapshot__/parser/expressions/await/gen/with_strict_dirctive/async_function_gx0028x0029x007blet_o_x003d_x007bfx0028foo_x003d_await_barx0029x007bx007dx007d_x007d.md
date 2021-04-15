# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function g(){let o = {f(foo = await bar){}}    }
## Input

`````js
'use strict'; async function g(){let o = {f(foo = await bar){}}    }
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
                                                            "start": 42,
                                                            "end": 43
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
                                                                        "start": 44,
                                                                        "end": 47
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 768,
                                                                        "start": 49,
                                                                        "end": 55
                                                                    },
                                                                    "flags": 258,
                                                                    "start": 44,
                                                                    "end": 55
                                                                },
                                                                {
                                                                    "kind": 215,
                                                                    "ellipsisToken": null,
                                                                    "binding": {
                                                                        "kind": 134299649,
                                                                        "text": "bar",
                                                                        "rawText": "bar",
                                                                        "flags": 768,
                                                                        "start": 55,
                                                                        "end": 59
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": null,
                                                                    "flags": 256,
                                                                    "start": 55,
                                                                    "end": 59
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 258,
                                                            "start": 44,
                                                            "end": 60
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
                                                                "start": 61,
                                                                "end": 61
                                                            },
                                                            "flags": 256,
                                                            "start": 60,
                                                            "end": 62
                                                        },
                                                        "flags": 256,
                                                        "start": 43,
                                                        "end": 62
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 42,
                                                "end": 62
                                            },
                                            "flags": 256,
                                            "start": 40,
                                            "end": 63
                                        },
                                        "flags": 128,
                                        "start": 36,
                                        "end": 63
                                    }
                                ],
                                "flags": 128,
                                "start": 36,
                                "end": 63
                            },
                            "flags": 128,
                            "start": 33,
                            "end": 63
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 33,
                    "end": 63
                },
                "flags": 256,
                "start": 32,
                "end": 68
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1280,
            "start": 13,
            "end": 68
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function g(){let o = {f(foo = await bar){}}    }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 55,
            "end": 59
        }
    ],
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

