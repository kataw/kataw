# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: kataw8/test\__snapshot__/parser/expressions/super/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\super\gen\obj-method
> :: test: obj-method
> :: case: class C { set x(_) { super(
## Input

`````js
({ method() { class C { set x(_) { super( } })
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
                                                                    "getKeyword": {
                                                                        "kind": 16499,
                                                                        "flags": 64,
                                                                        "start": 23,
                                                                        "end": 27
                                                                    },
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
                                                                            "formalParameterList": [
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "_",
                                                                                    "rawText": "_",
                                                                                    "flags": 96,
                                                                                    "start": 30,
                                                                                    "end": 31
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 608,
                                                                            "start": 30,
                                                                            "end": 32
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
                                                                                                    "start": 34,
                                                                                                    "end": 40
                                                                                                },
                                                                                                "flags": 96,
                                                                                                "start": 34,
                                                                                                "end": 40
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 41,
                                                                                                "end": 41
                                                                                            },
                                                                                            "flags": 268435488,
                                                                                            "start": 34,
                                                                                            "end": 41
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "start": 34,
                                                                                        "end": 41
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "start": 34,
                                                                                "end": 41
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 32,
                                                                            "end": 43
                                                                        },
                                                                        "flags": 512,
                                                                        "start": 29,
                                                                        "end": 43
                                                                    },
                                                                    "flags": 512,
                                                                    "start": 23,
                                                                    "end": 43
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 23,
                                                            "end": 43
                                                        },
                                                        "flags": 21,
                                                        "start": 32,
                                                        "end": 45
                                                    },
                                                    "flags": 16,
                                                    "start": 13,
                                                    "end": 45
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 13,
                                            "end": 45
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 45
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 45
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 45
                },
                "flags": 32,
                "start": 0,
                "end": 46
            },
            "flags": 16,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "({ method() { class C { set x(_) { super( } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 34, end: 41
✖ Expected a ')' to match the '(' token here - start: 41, end: 43
✖ The parser expected to find a '}' to match the '{' token here - start: 45, end: 46

```

