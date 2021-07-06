# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/class-set
> :: test: class-set
> :: case: class C { constructor() { super(); } }
## Options

`````js
{}
`````
## Input

`````js
class C { set x(_) { class C { constructor() { super(); } } } }
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
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
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 15
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
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 18
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
                                                    "start": 20,
                                                    "end": 26
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 28
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
                                                                        "start": 30,
                                                                        "end": 42
                                                                    },
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 2048,
                                                                        "transformFlags": 0,
                                                                        "start": 43,
                                                                        "end": 44
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
                                                                                            "start": 46,
                                                                                            "end": 52
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 53,
                                                                                            "end": 53
                                                                                        },
                                                                                        "flags": 268435488,
                                                                                        "transformFlags": 1,
                                                                                        "start": 46,
                                                                                        "end": 54
                                                                                    },
                                                                                    "flags": 16,
                                                                                    "transformFlags": 0,
                                                                                    "start": 46,
                                                                                    "end": 55
                                                                                }
                                                                            ],
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 46,
                                                                            "end": 55
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 44,
                                                                        "end": 57
                                                                    },
                                                                    "flags": 2048,
                                                                    "transformFlags": 0,
                                                                    "start": 42,
                                                                    "end": 57
                                                                },
                                                                "flags": 2048,
                                                                "transformFlags": 0,
                                                                "start": 30,
                                                                "end": 57
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 57
                                                    },
                                                    "flags": 28,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 59
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 59
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 61
                                },
                                "flags": 512,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 61
                            },
                            "flags": 512,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 61
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 61
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 63
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "class C { set x(_) { class C { constructor() { super(); } } } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 46, end: 53

```

