# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/super/gen/obj-method
> :: test: obj-method
> :: case: class C { get x) { super; } }
## Options

`````js
{}
`````
## Input

`````js
({ method() { class C { get x) { super; } } } })
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
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 9
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 10,
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
                                                                    "generatorToken": null,
                                                                    "staticKeyword": null,
                                                                    "asyncKeyword": null,
                                                                    "setKeyword": {
                                                                        "kind": 16498,
                                                                        "flags": 64,
                                                                        "start": 23,
                                                                        "end": 27
                                                                    },
                                                                    "getKeyword": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 27,
                                                                            "end": 29
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 1024,
                                                                            "start": 29,
                                                                            "end": 29
                                                                        },
                                                                        "returnType": null,
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "directives": [],
                                                                                "statements": [],
                                                                                "flags": 32,
                                                                                "start": 29,
                                                                                "end": 29
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 29,
                                                                            "end": 29
                                                                        },
                                                                        "flags": 1024,
                                                                        "start": 29,
                                                                        "end": 29
                                                                    },
                                                                    "flags": 1024,
                                                                    "start": 23,
                                                                    "end": 29
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 23,
                                                            "end": 29
                                                        },
                                                        "flags": 21,
                                                        "start": 32,
                                                        "end": 29
                                                    },
                                                    "flags": 16,
                                                    "start": 13,
                                                    "end": 29
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 13,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 29
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
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
                                    "start": 32,
                                    "end": 38
                                },
                                "flags": 96,
                                "start": 32,
                                "end": 38
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 38,
                                "end": 38
                            },
                            "flags": 536870944,
                            "start": 32,
                            "end": 38
                        },
                        "flags": 16,
                        "start": 32,
                        "end": 39
                    }
                ],
                "flags": 16,
                "start": 32,
                "end": 39
            },
            "flags": 16,
            "start": 30,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "({ method() { class C { get x) { super; } } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Method definition expected - start: 29, end: 30
✖ Expected a `;` - start: 30, end: 32
✖ 'super' must be followed by an argument list or member access. - start: 32, end: 39
✖ Dot property must be an identifier - start: 38, end: 39
✖ Declaration or statement expected - start: 41, end: 43
✖ Declaration or statement expected - start: 43, end: 45
✖ Declaration or statement expected - start: 45, end: 47
✖ Declaration or statement expected - start: 47, end: 48

```

