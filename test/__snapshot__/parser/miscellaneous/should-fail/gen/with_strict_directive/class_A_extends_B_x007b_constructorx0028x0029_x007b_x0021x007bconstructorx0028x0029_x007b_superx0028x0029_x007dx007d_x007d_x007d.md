# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: class A extends B { constructor() { !{constructor() { super(); }}; } }
## Options

`````js
{}
`````
## Input

`````js
"use strict"; class A extends B { constructor() { !{constructor() { super(); }}; } }
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
            "rawText": "\"use strict\"",
            "flags": 96,
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
                "flags": 80,
                "start": 13,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 19,
                "end": 21
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 21,
                        "end": 29
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 29,
                        "end": 31
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 29,
                    "end": 31
                },
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "asteriskToken": null,
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
                                    "start": 33,
                                    "end": 45
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 46,
                                    "end": 47
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
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 65584,
                                                        "flags": 96,
                                                        "start": 49,
                                                        "end": 51
                                                    },
                                                    "operand": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 351,
                                                                    "asyncKeyword": null,
                                                                    "asteriskToken": null,
                                                                    "getKeyword": null,
                                                                    "setKeyword": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "constructor",
                                                                            "rawText": "constructor",
                                                                            "flags": 96,
                                                                            "start": 52,
                                                                            "end": 63
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 64,
                                                                            "end": 65
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
                                                                                                    "start": 67,
                                                                                                    "end": 73
                                                                                                },
                                                                                                "flags": 96,
                                                                                                "start": 67,
                                                                                                "end": 73
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 74,
                                                                                                "end": 74
                                                                                            },
                                                                                            "flags": 268435488,
                                                                                            "start": 67,
                                                                                            "end": 75
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "start": 67,
                                                                                        "end": 76
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "start": 67,
                                                                                "end": 76
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 65,
                                                                            "end": 78
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 63,
                                                                        "end": 78
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 52,
                                                                    "end": 78
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 52,
                                                            "end": 78
                                                        },
                                                        "flags": 48,
                                                        "start": 51,
                                                        "end": 79
                                                    },
                                                    "flags": 32,
                                                    "start": 49,
                                                    "end": 79
                                                },
                                                "flags": 16,
                                                "start": 49,
                                                "end": 80
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 49,
                                        "end": 80
                                    },
                                    "flags": 32,
                                    "start": 47,
                                    "end": 82
                                },
                                "flags": 2048,
                                "start": 45,
                                "end": 82
                            },
                            "flags": 2048,
                            "start": 33,
                            "end": 82
                        }
                    ],
                    "flags": 32,
                    "start": 33,
                    "end": 82
                },
                "flags": 21,
                "start": 32,
                "end": 84
            },
            "flags": 16,
            "start": 13,
            "end": 84
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; class A extends B { constructor() { !{constructor() { super(); }}; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 84
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 67, end: 74

```

