# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: class A extends B { constructor() { !{constructor() { super(); }}; } }
## Options

`````js
{}
`````
## Input

`````js
{ class A extends B { constructor() { !{constructor() { super(); }}; } } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 7
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 9
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": {
                                "kind": 279,
                                "extendsKeyword": {
                                    "kind": 4194391,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 17
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 19
                                },
                                "typeParameter": null,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 19
                            },
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
                                                "text": "constructor",
                                                "rawText": "constructor",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 33
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 2048,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 35
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
                                                                    "transformFlags": 0,
                                                                    "start": 37,
                                                                    "end": 39
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
                                                                                        "transformFlags": 0,
                                                                                        "start": 40,
                                                                                        "end": 51
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "formalParameterList": {
                                                                                        "kind": 214,
                                                                                        "formalParameters": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 52,
                                                                                        "end": 53
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
                                                                                                            "kind": 4259935,
                                                                                                            "flags": 96,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 55,
                                                                                                            "end": 61
                                                                                                        },
                                                                                                        "argumentList": {
                                                                                                            "kind": 256,
                                                                                                            "elements": [],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 32,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 62,
                                                                                                            "end": 62
                                                                                                        },
                                                                                                        "flags": 268435488,
                                                                                                        "transformFlags": 1,
                                                                                                        "start": 55,
                                                                                                        "end": 63
                                                                                                    },
                                                                                                    "flags": 16,
                                                                                                    "transformFlags": 4096,
                                                                                                    "start": 55,
                                                                                                    "end": 64
                                                                                                }
                                                                                            ],
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 55,
                                                                                            "end": 64
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 53,
                                                                                        "end": 66
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 51,
                                                                                    "end": 66
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 40,
                                                                                "end": 66
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 40,
                                                                        "end": 66
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 8,
                                                                    "start": 39,
                                                                    "end": 67
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 1024,
                                                                "start": 37,
                                                                "end": 67
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4096,
                                                            "start": 37,
                                                            "end": 68
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 68
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 35,
                                                "end": 70
                                            },
                                            "flags": 2048,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 70
                                        },
                                        "flags": 2048,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 70
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 70
                            },
                            "flags": 9,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 72
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 72
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 72
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 74
        }
    ],
    "isModule": false,
    "source": "{ class A extends B { constructor() { !{constructor() { super(); }}; } } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 74
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 55, end: 62

```

