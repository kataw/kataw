# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/obj-expr-get
> :: test: obj-expr-get
> :: case: class C { method() { super(); } }
## Input

`````js
({ get x() { class C { method() { super(); } } } })
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
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 6
                                },
                                "setKeyword": null,
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
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 9,
                                        "end": 10
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
                                                        "start": 12,
                                                        "end": 18
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
                                                        "start": 18,
                                                        "end": 20
                                                    },
                                                    "typeParameters": null,
                                                    "tail": {
                                                        "kind": 277,
                                                        "classHeritage": null,
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
                                                                            "text": "method",
                                                                            "rawText": "method",
                                                                            "flags": 96,
                                                                            "start": 22,
                                                                            "end": 29
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 0,
                                                                            "start": 30,
                                                                            "end": 31
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
                                                                                                    "start": 33,
                                                                                                    "end": 39
                                                                                                },
                                                                                                "flags": 96,
                                                                                                "start": 33,
                                                                                                "end": 39
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 40,
                                                                                                "end": 40
                                                                                            },
                                                                                            "flags": 268435488,
                                                                                            "start": 33,
                                                                                            "end": 41
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "start": 33,
                                                                                        "end": 42
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "start": 33,
                                                                                "end": 42
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 31,
                                                                            "end": 44
                                                                        },
                                                                        "flags": 0,
                                                                        "start": 29,
                                                                        "end": 44
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 22,
                                                                    "end": 44
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 22,
                                                            "end": 44
                                                        },
                                                        "flags": 20,
                                                        "start": 32,
                                                        "end": 46
                                                    },
                                                    "flags": 16,
                                                    "start": 12,
                                                    "end": 46
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 12,
                                            "end": 46
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 48
                                    },
                                    "flags": 1056,
                                    "start": 8,
                                    "end": 48
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 48
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 48
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 50
                },
                "flags": 32,
                "start": 0,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "({ get x() { class C { method() { super(); } } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 33, end: 40

```

