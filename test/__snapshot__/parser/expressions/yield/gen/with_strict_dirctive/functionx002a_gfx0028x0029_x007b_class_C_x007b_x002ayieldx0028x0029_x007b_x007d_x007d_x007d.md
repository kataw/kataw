# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* gf() { class C { *yield() { } } }
## Input

`````js
'use strict'; function* gf() { class C { *yield() { } } }
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 13,
                "end": 22
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "gf",
                "rawText": "gf",
                "flags": 96,
                "start": 23,
                "end": 26
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 26,
                "end": 28
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 0,
                                "start": 30,
                                "end": 36
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 36,
                                "end": 38
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
                                            "start": 40,
                                            "end": 42
                                        },
                                        "staticKeyword": null,
                                        "asyncKeyword": null,
                                        "setKeyword": null,
                                        "getKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "start": 42,
                                                "end": 47
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 48,
                                                "end": 49
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 51,
                                                    "end": 51
                                                },
                                                "flags": 32,
                                                "start": 49,
                                                "end": 53
                                            },
                                            "flags": 0,
                                            "start": 47,
                                            "end": 53
                                        },
                                        "flags": 0,
                                        "start": 40,
                                        "end": 53
                                    }
                                ],
                                "flags": 32,
                                "start": 40,
                                "end": 55
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "start": 30,
                    "end": 55
                },
                "flags": 32,
                "start": 28,
                "end": 57
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 13,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "'use strict'; function* gf() { class C { *yield() { } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 42, end: 47

```

