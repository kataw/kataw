# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: class A extends B { constructor() { !{constructor() { super(); }}; } }
## Options

`````js
{}
`````
## Input

`````js
class A extends B { constructor() { !{constructor() { super(); }}; } }
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
                "text": "A",
                "rawText": "A",
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
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 17
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
                                    "start": 19,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 32,
                                    "end": 33
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
                                                        "flags": 64,
                                                        "start": 35,
                                                        "end": 37
                                                    },
                                                    "operand": {
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
                                                                            "text": "constructor",
                                                                            "rawText": "constructor",
                                                                            "flags": 96,
                                                                            "start": 38,
                                                                            "end": 49
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 50,
                                                                            "end": 51
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
                                                                                                    "start": 53,
                                                                                                    "end": 59
                                                                                                },
                                                                                                "flags": 96,
                                                                                                "start": 53,
                                                                                                "end": 59
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 60,
                                                                                                "end": 60
                                                                                            },
                                                                                            "flags": 268435488,
                                                                                            "start": 53,
                                                                                            "end": 61
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "start": 53,
                                                                                        "end": 62
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "start": 53,
                                                                                "end": 62
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 51,
                                                                            "end": 64
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 49,
                                                                        "end": 64
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 38,
                                                                    "end": 64
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 38,
                                                            "end": 64
                                                        },
                                                        "flags": 48,
                                                        "start": 37,
                                                        "end": 65
                                                    },
                                                    "flags": 32,
                                                    "start": 35,
                                                    "end": 65
                                                },
                                                "flags": 16,
                                                "start": 35,
                                                "end": 66
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 35,
                                        "end": 66
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 68
                                },
                                "flags": 2048,
                                "start": 31,
                                "end": 68
                            },
                            "flags": 2048,
                            "start": 19,
                            "end": 68
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 68
                },
                "flags": 7,
                "start": 32,
                "end": 70
            },
            "flags": 16,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "class A extends B { constructor() { !{constructor() { super(); }}; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 53, end: 60

```

