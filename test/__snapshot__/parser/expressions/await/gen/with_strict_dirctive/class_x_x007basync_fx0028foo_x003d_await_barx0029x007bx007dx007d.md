# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: class x {async f(foo = await bar){}}
## Input

`````js
'use strict'; class x {async f(foo = await bar){}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "original": "'use strict'",
                "rawText": "'use strict'",
                "flags": 4194400,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
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
                "original": "x",
                "text": "x",
                "rawText": " x",
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
                        "generatorToken": null,
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
                                "original": "f",
                                "text": "f",
                                "rawText": " f",
                                "flags": 96,
                                "start": 28,
                                "end": 30
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
                                            "original": "foo",
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 31,
                                            "end": 34
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 208,
                                            "awaitToken": {
                                                "kind": 82032,
                                                "flags": 0,
                                                "start": 36,
                                                "end": 42
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "original": "bar",
                                                "text": "bar",
                                                "rawText": " bar",
                                                "flags": 96,
                                                "start": 42,
                                                "end": 46
                                            },
                                            "flags": 32,
                                            "start": 36,
                                            "end": 46
                                        },
                                        "flags": 34,
                                        "start": 31,
                                        "end": 46
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 290,
                                "start": 31,
                                "end": 47
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 48,
                                    "end": 48
                                },
                                "flags": 32,
                                "start": 47,
                                "end": 49
                            },
                            "flags": 256,
                            "start": 30,
                            "end": 49
                        },
                        "flags": 256,
                        "start": 23,
                        "end": 49
                    }
                ],
                "flags": 32,
                "start": 23,
                "end": 50
            },
            "flags": 16,
            "start": 13,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "'use strict'; class x {async f(foo = await bar){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
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

