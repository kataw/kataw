# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/obj-expr-get
> :: test: obj-expr-get
> :: case: class C { constructor() { super(); } }
## Options

`````js
{}
`````
## Input

`````js
({ get x() { class C { constructor() { super(); } } } })
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
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "transformFlags": 0,
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
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 18
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 20
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
                                                                            "start": 22,
                                                                            "end": 34
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [],
                                                                            "trailingComma": false,
                                                                            "flags": 2048,
                                                                            "transformFlags": 0,
                                                                            "start": 35,
                                                                            "end": 36
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
                                                                                                "start": 38,
                                                                                                "end": 44
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "transformFlags": 0,
                                                                                                "start": 45,
                                                                                                "end": 45
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "transformFlags": 1,
                                                                                            "start": 38,
                                                                                            "end": 46
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "transformFlags": 4096,
                                                                                        "start": 38,
                                                                                        "end": 47
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 38,
                                                                                "end": 47
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 36,
                                                                            "end": 49
                                                                        },
                                                                        "flags": 2048,
                                                                        "transformFlags": 0,
                                                                        "start": 34,
                                                                        "end": 49
                                                                    },
                                                                    "flags": 2048,
                                                                    "transformFlags": 0,
                                                                    "start": 22,
                                                                    "end": 49
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 22,
                                                            "end": 49
                                                        },
                                                        "flags": 20,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 51
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 51
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 51
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 53
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 53
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 53
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 53
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 55
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 56
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "({ get x() { class C { constructor() { super(); } } } })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 38, end: 45

```

