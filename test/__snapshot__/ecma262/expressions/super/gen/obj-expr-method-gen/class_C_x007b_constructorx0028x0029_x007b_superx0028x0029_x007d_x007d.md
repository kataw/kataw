# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/obj-expr-method-gen
> :: test: obj-expr-method-gen
> :: case: class C { constructor() { super(); } }
## Options

`````js
{}
`````
## Input

`````js
({ *method() { class C { constructor() { super(); } } } })
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
                                "asteriskToken": {
                                    "kind": 201360950,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 2,
                                    "end": 4
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 10
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 12
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
                                                        "transformFlags": 0,
                                                        "start": 14,
                                                        "end": 20
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 20,
                                                        "end": 22
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
                                                                            "text": "constructor",
                                                                            "rawText": "constructor",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 24,
                                                                            "end": 36
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [],
                                                                            "trailingComma": false,
                                                                            "flags": 2048,
                                                                            "transformFlags": 0,
                                                                            "start": 37,
                                                                            "end": 38
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
                                                                                                "start": 40,
                                                                                                "end": 46
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "transformFlags": 0,
                                                                                                "start": 47,
                                                                                                "end": 47
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "transformFlags": 1,
                                                                                            "start": 40,
                                                                                            "end": 48
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "transformFlags": 4096,
                                                                                        "start": 40,
                                                                                        "end": 49
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 40,
                                                                                "end": 49
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 38,
                                                                            "end": 51
                                                                        },
                                                                        "flags": 2048,
                                                                        "transformFlags": 0,
                                                                        "start": 36,
                                                                        "end": 51
                                                                    },
                                                                    "flags": 2048,
                                                                    "transformFlags": 0,
                                                                    "start": 24,
                                                                    "end": 51
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 24,
                                                            "end": 51
                                                        },
                                                        "flags": 22,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 53
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 14,
                                                    "end": 53
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 53
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 55
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 55
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 55
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 55
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 57
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 58
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "({ *method() { class C { constructor() { super(); } } } })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 40, end: 47

```

