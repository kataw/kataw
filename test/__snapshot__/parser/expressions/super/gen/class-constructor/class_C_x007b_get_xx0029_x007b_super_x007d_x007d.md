# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/class-constructor
> :: test: class-constructor
> :: case: class C { get x) { super; } }
## Options

`````js
{}
`````
## Input

`````js
class C { constructor() { class C { get x) { super; } } } }
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
                "classHeritage": null,
                "body": {
                    "kind": 303,
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
                                    "start": 9,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 22,
                                    "end": 23
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
                                                    "start": 25,
                                                    "end": 31
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 96,
                                                    "start": 31,
                                                    "end": 33
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
                                                                "generatorToken": null,
                                                                "staticKeyword": null,
                                                                "asyncKeyword": null,
                                                                "setKeyword": {
                                                                    "kind": 16498,
                                                                    "flags": 64,
                                                                    "start": 35,
                                                                    "end": 39
                                                                },
                                                                "getKeyword": null,
                                                                "method": {
                                                                    "kind": 209,
                                                                    "name": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "start": 39,
                                                                        "end": 41
                                                                    },
                                                                    "typeParameters": null,
                                                                    "formalParameters": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 1024,
                                                                        "start": 41,
                                                                        "end": 41
                                                                    },
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
                                                                            "flags": 32,
                                                                            "start": 41,
                                                                            "end": 41
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 41,
                                                                        "end": 41
                                                                    },
                                                                    "flags": 1024,
                                                                    "start": 41,
                                                                    "end": 41
                                                                },
                                                                "flags": 1024,
                                                                "start": 35,
                                                                "end": 41
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 35,
                                                        "end": 41
                                                    },
                                                    "flags": 33,
                                                    "start": 32,
                                                    "end": 41
                                                },
                                                "flags": 16,
                                                "start": 25,
                                                "end": 41
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 25,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 41
                                },
                                "flags": 2048,
                                "start": 21,
                                "end": 41
                            },
                            "flags": 2048,
                            "start": 9,
                            "end": 41
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 41
                },
                "flags": 7,
                "start": 32,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 41
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 225,
                                "superKeyword": {
                                    "kind": 4259935,
                                    "flags": 96,
                                    "start": 44,
                                    "end": 50
                                },
                                "flags": 96,
                                "start": 44,
                                "end": 50
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 50,
                                "end": 50
                            },
                            "flags": 536870944,
                            "start": 44,
                            "end": 50
                        },
                        "flags": 16,
                        "start": 44,
                        "end": 51
                    }
                ],
                "flags": 16,
                "start": 44,
                "end": 51
            },
            "flags": 16,
            "start": 42,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "class C { constructor() { class C { get x) { super; } } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Method definition expected - start: 41, end: 42
✖ 'super' must be followed by an argument list or member access. - start: 44, end: 51
✖ Dot property must be an identifier - start: 50, end: 51
✖ Declaration or statement expected - start: 53, end: 55
✖ Declaration or statement expected - start: 55, end: 57
✖ Declaration or statement expected - start: 57, end: 59

```

