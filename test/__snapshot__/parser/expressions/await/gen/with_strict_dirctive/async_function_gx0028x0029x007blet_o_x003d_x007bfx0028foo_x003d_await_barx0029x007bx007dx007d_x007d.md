# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/await/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function g(){let o = {f(foo = await bar){}}    }
## Input

`````js
'use strict'; async function g(){let o = {f(foo = await bar){}}    }
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
                "flags": 64,
                "start": 19,
                "end": 28
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
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
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
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
                                            "flags": 96,
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
                                                        "kind": 257,
                                                        "asyncKeyword": null,
                                                        "generatorToken": null,
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "f",
                                                                "rawText": "f",
                                                                "flags": 96,
                                                                "start": 42,
                                                                "end": 43
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [
                                                                    {
                                                                        "kind": 281,
                                                                        "ellipsisToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 96,
                                                                            "start": 44,
                                                                            "end": 47
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "await",
                                                                            "rawText": "await",
                                                                            "flags": 96,
                                                                            "start": 49,
                                                                            "end": 55
                                                                        },
                                                                        "flags": 34,
                                                                        "start": 44,
                                                                        "end": 55
                                                                    },
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "bar",
                                                                        "rawText": "bar",
                                                                        "flags": 96,
                                                                        "start": 55,
                                                                        "end": 59
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 98,
                                                                "start": 44,
                                                                "end": 60
                                                            },
                                                            "returnType": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "flags": 32,
                                                                    "start": 61,
                                                                    "end": 61
                                                                },
                                                                "flags": 32,
                                                                "start": 60,
                                                                "end": 62
                                                            },
                                                            "flags": 32,
                                                            "start": 43,
                                                            "end": 62
                                                        },
                                                        "flags": 32,
                                                        "start": 42,
                                                        "end": 62
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 42,
                                                "end": 62
                                            },
                                            "flags": 48,
                                            "start": 40,
                                            "end": 63
                                        },
                                        "flags": 16,
                                        "start": 36,
                                        "end": 63
                                    }
                                ],
                                "flags": 16,
                                "start": 36,
                                "end": 63
                            },
                            "flags": 33554448,
                            "start": 33,
                            "end": 63
                        }
                    ],
                    "flags": 32,
                    "start": 33,
                    "end": 63
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
    "source": "'use strict'; async function g(){let o = {f(foo = await bar){}}    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 55, end: 59

```

