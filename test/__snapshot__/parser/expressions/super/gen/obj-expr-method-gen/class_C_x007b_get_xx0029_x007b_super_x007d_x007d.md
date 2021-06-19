# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/obj-expr-method-gen
> :: test: obj-expr-method-gen
> :: case: class C { get x) { super; } }
## Options

`````js
{}
`````
## Input

`````js
({ *method() { class C { get x) { super; } } } })
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
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
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
                                        "start": 4,
                                        "end": 10
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
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
                                                        "start": 14,
                                                        "end": 20
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
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
                                                                    "asteriskToken": null,
                                                                    "staticKeyword": null,
                                                                    "asyncKeyword": null,
                                                                    "setKeyword": {
                                                                        "kind": 16498,
                                                                        "flags": 64,
                                                                        "start": 24,
                                                                        "end": 28
                                                                    },
                                                                    "getKeyword": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 28,
                                                                            "end": 30
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameters": [],
                                                                            "trailingComma": false,
                                                                            "flags": 1024,
                                                                            "start": 30,
                                                                            "end": 30
                                                                        },
                                                                        "returnType": null,
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "directives": [],
                                                                                "statements": [],
                                                                                "flags": 32,
                                                                                "start": 30,
                                                                                "end": 30
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 30,
                                                                            "end": 30
                                                                        },
                                                                        "flags": 1024,
                                                                        "start": 30,
                                                                        "end": 30
                                                                    },
                                                                    "flags": 1024,
                                                                    "start": 24,
                                                                    "end": 30
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 24,
                                                            "end": 30
                                                        },
                                                        "flags": 22,
                                                        "start": 32,
                                                        "end": 30
                                                    },
                                                    "flags": 16,
                                                    "start": 14,
                                                    "end": 30
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 14,
                                            "end": 30
                                        },
                                        "flags": 32,
                                        "start": 12,
                                        "end": 30
                                    },
                                    "flags": 160,
                                    "start": 10,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 30
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 30
                },
                "flags": 32,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
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
                                    "start": 33,
                                    "end": 39
                                },
                                "flags": 96,
                                "start": 33,
                                "end": 39
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "start": 39,
                                "end": 39
                            },
                            "flags": 536870944,
                            "start": 33,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 33,
                        "end": 40
                    }
                ],
                "flags": 16,
                "start": 33,
                "end": 40
            },
            "flags": 16,
            "start": 31,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "({ *method() { class C { get x) { super; } } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Method definition expected - start: 30, end: 31
✖ Expected a `;` - start: 31, end: 33
✖ 'super' must be followed by an argument list or member access. - start: 33, end: 40
✖ Dot property must be an identifier - start: 39, end: 40
✖ Declaration or statement expected - start: 42, end: 44
✖ Declaration or statement expected - start: 44, end: 46
✖ Declaration or statement expected - start: 46, end: 48
✖ Declaration or statement expected - start: 48, end: 49

```

