# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: class C { set x(_) { super(
## Input

`````js
({ *method() { class C { set x(_) { super( } })
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
                                        "formalParameterList": [],
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
                                                        "flags": 0,
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
                                                                        "start": 24,
                                                                        "end": 28
                                                                    },
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
                                                                            "formalParameterList": [
                                                                                {
                                                                                    "kind": 215,
                                                                                    "ellipsisToken": null,
                                                                                    "binding": {
                                                                                        "kind": 134299649,
                                                                                        "text": "_",
                                                                                        "rawText": "_",
                                                                                        "flags": 96,
                                                                                        "start": 31,
                                                                                        "end": 32
                                                                                    },
                                                                                    "optionalToken": null,
                                                                                    "type": null,
                                                                                    "initializer": null,
                                                                                    "flags": 32,
                                                                                    "start": 31,
                                                                                    "end": 32
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 544,
                                                                            "start": 31,
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
                                                                                            "kind": 131,
                                                                                            "expression": {
                                                                                                "kind": 225,
                                                                                                "superKeyword": {
                                                                                                    "kind": 4259935,
                                                                                                    "flags": 0,
                                                                                                    "start": 35,
                                                                                                    "end": 41
                                                                                                },
                                                                                                "flags": 96,
                                                                                                "start": 35,
                                                                                                "end": 41
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 42,
                                                                                                "end": 42
                                                                                            },
                                                                                            "flags": 268435488,
                                                                                            "start": 35,
                                                                                            "end": 42
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "start": 35,
                                                                                        "end": 42
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "start": 35,
                                                                                "end": 42
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 33,
                                                                            "end": 44
                                                                        },
                                                                        "flags": 512,
                                                                        "start": 30,
                                                                        "end": 44
                                                                    },
                                                                    "flags": 512,
                                                                    "start": 24,
                                                                    "end": 44
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 24,
                                                            "end": 44
                                                        },
                                                        "flags": 22,
                                                        "start": 32,
                                                        "end": 46
                                                    },
                                                    "flags": 16,
                                                    "start": 14,
                                                    "end": 46
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 14,
                                            "end": 46
                                        },
                                        "flags": 32,
                                        "start": 12,
                                        "end": 46
                                    },
                                    "flags": 160,
                                    "start": 10,
                                    "end": 46
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 46
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 46
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 46
                },
                "flags": 32,
                "start": 0,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "({ *method() { class C { set x(_) { super( } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 41, end: 42
✖ Expected a ')' to match the '(' token here - start: 42, end: 44
✖ The parser expected to find a '}' to match the '{' token here - start: 46, end: 47

```

