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
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 13,
                "end": 22
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "gf",
                "rawText": "gf",
                "flags": 768,
                "start": 23,
                "end": 26
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "flags": 768,
                                "start": 30,
                                "end": 36
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 768,
                                "start": 36,
                                "end": 38
                            },
                            "typeParameters": null,
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [
                                    {
                                        "kind": 280,
                                        "decorators": null,
                                        "declaredToken": null,
                                        "staticToken": null,
                                        "key": {
                                            "kind": 16637,
                                            "text": "",
                                            "autofix": 0,
                                            "flags": 12,
                                            "start": 40,
                                            "end": 40
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 40,
                                        "end": 42
                                    },
                                    {
                                        "kind": 278,
                                        "declareToken": null,
                                        "decorators": null,
                                        "staticToken": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 768,
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
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 51,
                                                    "end": 51
                                                },
                                                "flags": 256,
                                                "start": 49,
                                                "end": 53
                                            },
                                            "flags": 0,
                                            "start": 47,
                                            "end": 53
                                        },
                                        "flags": 256,
                                        "start": 42,
                                        "end": 53
                                    }
                                ],
                                "flags": 256,
                                "start": 40,
                                "end": 55
                            },
                            "flags": 128,
                            "start": 30,
                            "end": 55
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 30,
                    "end": 55
                },
                "flags": 256,
                "start": 28,
                "end": 57
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 13,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "'use strict'; function* gf() { class C { *yield() { } } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 40,
            "end": 42
        }
    ],
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

