# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/obj-expr-set
> :: test: obj-expr-set
> :: case: class C { method() { super(); } }
## Options

`````js
{}
`````
## Input

`````js
({ set x(_) { class C { method() { super(); } } } })
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "start": 2,
                                    "end": 6
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "_",
                                                "rawText": "_",
                                                "flags": 96,
                                                "start": 9,
                                                "end": 10
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "returnType": null,
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
                                                        "flags": 80,
                                                        "start": 13,
                                                        "end": 19
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
                                                        "start": 19,
                                                        "end": 21
                                                    },
                                                    "typeParameters": null,
                                                    "tail": {
                                                        "kind": 277,
                                                        "classHeritage": null,
                                                        "body": {
                                                            "kind": 303,
                                                            "elements": [
                                                                {
                                                                    "kind": 278,
                                                                    "declareToken": null,
                                                                    "decorators": null,
                                                                    "staticKeyword": null,
                                                                    "asyncKeyword": null,
                                                                    "setKeyword": null,
                                                                    "getKeyword": null,
                                                                    "asteriskToken": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "method",
                                                                            "rawText": "method",
                                                                            "flags": 96,
                                                                            "start": 23,
                                                                            "end": 30
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [],
                                                                            "trailingComma": false,
                                                                            "flags": 0,
                                                                            "start": 31,
                                                                            "end": 32
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
                                                                                            "kind": 131,
                                                                                            "expression": {
                                                                                                "kind": 225,
                                                                                                "superKeyword": {
                                                                                                    "kind": 4259935,
                                                                                                    "flags": 96,
                                                                                                    "start": 34,
                                                                                                    "end": 40
                                                                                                },
                                                                                                "flags": 96,
                                                                                                "start": 34,
                                                                                                "end": 40
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 41,
                                                                                                "end": 41
                                                                                            },
                                                                                            "flags": 268435488,
                                                                                            "start": 34,
                                                                                            "end": 42
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "start": 34,
                                                                                        "end": 43
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "start": 34,
                                                                                "end": 43
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 32,
                                                                            "end": 45
                                                                        },
                                                                        "flags": 0,
                                                                        "start": 30,
                                                                        "end": 45
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 23,
                                                                    "end": 45
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 23,
                                                            "end": 45
                                                        },
                                                        "flags": 21,
                                                        "start": 32,
                                                        "end": 47
                                                    },
                                                    "flags": 16,
                                                    "start": 13,
                                                    "end": 47
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 13,
                                            "end": 47
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 49
                                    },
                                    "flags": 544,
                                    "start": 8,
                                    "end": 49
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 49
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 49
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 51
                },
                "flags": 32,
                "start": 0,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "({ set x(_) { class C { method() { super(); } } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 34, end: 41

```

