# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: class x {async *f(foo = [{m: t(await bar)}]){}}
## Input

`````js
'use strict'; class x {async *f(foo = [{m: t(await bar)}]){}}
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 13,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 19,
                "end": 21
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 28,
                            "end": 30
                        },
                        "staticKeyword": null,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 23,
                            "end": 28
                        },
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 30,
                                "end": 31
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
                                            "flags": 96,
                                            "start": 32,
                                            "end": 35
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
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
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "t",
                                                                            "rawText": "t",
                                                                            "flags": 96,
                                                                            "start": 42,
                                                                            "end": 44
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 208,
                                                                                    "awaitToken": {
                                                                                        "kind": 82032,
                                                                                        "flags": 0,
                                                                                        "start": 45,
                                                                                        "end": 50
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "bar",
                                                                                        "rawText": "bar",
                                                                                        "flags": 96,
                                                                                        "start": 50,
                                                                                        "end": 54
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 45,
                                                                                    "end": 54
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 45,
                                                                            "end": 54
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 40,
                                                                        "end": 55
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "m",
                                                                        "rawText": "m",
                                                                        "flags": 96,
                                                                        "start": 40,
                                                                        "end": 41
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 40,
                                                                    "end": 55
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 40,
                                                            "end": 55
                                                        },
                                                        "flags": 32,
                                                        "start": 39,
                                                        "end": 56
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 39,
                                                "end": 56
                                            },
                                            "flags": 32,
                                            "start": 37,
                                            "end": 57
                                        },
                                        "flags": 34,
                                        "start": 32,
                                        "end": 57
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 418,
                                "start": 32,
                                "end": 58
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 59,
                                    "end": 59
                                },
                                "flags": 32,
                                "start": 58,
                                "end": 60
                            },
                            "flags": 384,
                            "start": 31,
                            "end": 60
                        },
                        "flags": 384,
                        "start": 23,
                        "end": 60
                    }
                ],
                "flags": 32,
                "start": 23,
                "end": 61
            },
            "flags": 16,
            "start": 13,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "'use strict'; class x {async *f(foo = [{m: t(await bar)}]){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
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

