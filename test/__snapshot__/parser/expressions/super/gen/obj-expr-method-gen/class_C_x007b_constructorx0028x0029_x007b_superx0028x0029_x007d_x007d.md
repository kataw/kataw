# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: class C { constructor() { super(); } }
## Input

`````js
({ *method() { class C { constructor() { super(); } } } })
`````

## Output

### Hybrid CST

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
                                "type": null,
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
                                                "classHeritage": null,
                                                "members": {
                                                    "kind": 277,
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
                                                                    "start": 24,
                                                                    "end": 36
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 2048,
                                                                    "start": 37,
                                                                    "end": 38
                                                                },
                                                                "type": null,
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
                                                                                            "start": 40,
                                                                                            "end": 46
                                                                                        },
                                                                                        "flags": 96,
                                                                                        "start": 40,
                                                                                        "end": 46
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 47,
                                                                                        "end": 47
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 40,
                                                                                    "end": 48
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 40,
                                                                                "end": 49
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 32,
                                                                        "start": 40,
                                                                        "end": 49
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 38,
                                                                    "end": 51
                                                                },
                                                                "flags": 2048,
                                                                "start": 36,
                                                                "end": 51
                                                            },
                                                            "flags": 2048,
                                                            "start": 24,
                                                            "end": 51
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 24,
                                                    "end": 53
                                                },
                                                "flags": 16,
                                                "start": 14,
                                                "end": 53
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 32,
                                        "start": 14,
                                        "end": 53
                                    },
                                    "flags": 32,
                                    "start": 12,
                                    "end": 55
                                },
                                "flags": 160,
                                "start": 10,
                                "end": 55
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 55
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 57
                },
                "flags": 32,
                "start": 0,
                "end": 58
            },
            "flags": 16,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "text": "({ *method() { class C { constructor() { super(); } } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 46, end: 47

```

