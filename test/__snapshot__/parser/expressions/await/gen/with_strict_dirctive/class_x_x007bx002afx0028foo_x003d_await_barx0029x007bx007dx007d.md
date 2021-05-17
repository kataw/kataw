# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: class x {*f(foo = await bar){}}
## Input

`````js
'use strict'; class x {*f(foo = await bar){}}
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
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 23,
                            "end": 24
                        },
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 24,
                                "end": 25
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
                                            "start": 26,
                                            "end": 29
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "start": 31,
                                            "end": 37
                                        },
                                        "flags": 34,
                                        "start": 26,
                                        "end": 37
                                    },
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 37,
                                            "end": 41
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 37,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 26,
                                "end": 42
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 43,
                                    "end": 43
                                },
                                "flags": 32,
                                "start": 42,
                                "end": 44
                            },
                            "flags": 0,
                            "start": 25,
                            "end": 44
                        },
                        "flags": 0,
                        "start": 23,
                        "end": 44
                    }
                ],
                "flags": 32,
                "start": 21,
                "end": 45
            },
            "flags": 16,
            "start": 13,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "'use strict'; class x {*f(foo = await bar){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 37, end: 41

```

