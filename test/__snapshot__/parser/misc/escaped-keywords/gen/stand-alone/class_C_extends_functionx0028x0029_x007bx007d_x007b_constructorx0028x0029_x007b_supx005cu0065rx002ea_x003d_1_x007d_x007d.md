# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/misc/escaped-keywords/autogen.md
- Path: kataw7/test\__snapshot__\parser\misc\escaped-keywords\gen\stand-alone
> :: test: stand-alone
> :: case: class C extends function() {} { constructor() { sup\u0065r.a = 1 } }
## Input

`````js
class C extends function() {} { constructor() { sup\u0065r.a = 1 } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 15,
                            "end": 24
                        },
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 24,
                            "end": 26
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 28,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 26,
                            "end": 29
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 32,
                        "start": 15,
                        "end": 29
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 29
                },
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 43
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 44,
                                    "end": 45
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 16480,
                                                                "start": 47,
                                                                "end": 58
                                                            },
                                                            "flags": 96,
                                                            "start": 47,
                                                            "end": 58
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 59,
                                                            "end": 60
                                                        },
                                                        "flags": 536870944,
                                                        "start": 47,
                                                        "end": 60
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 60,
                                                        "end": 62
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 62,
                                                        "end": 64
                                                    },
                                                    "flags": 32,
                                                    "start": 47,
                                                    "end": 64
                                                },
                                                "flags": 16,
                                                "start": 47,
                                                "end": 64
                                            }
                                        ],
                                        "flags": 16416,
                                        "start": 47,
                                        "end": 64
                                    },
                                    "flags": 32,
                                    "start": 45,
                                    "end": 66
                                },
                                "flags": 0,
                                "start": 43,
                                "end": 66
                            },
                            "flags": 0,
                            "start": 31,
                            "end": 66
                        }
                    ],
                    "flags": 32,
                    "start": 31,
                    "end": 66
                },
                "flags": 7,
                "start": 32,
                "end": 68
            },
            "flags": 16,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "class C extends function() {} { constructor() { sup\\u0065r.a = 1 } }",
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
✖ Keywords cannot contain escape characters - start: 47, end: 58

```

