# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: obj-expr-get
> :: case: class C { constructor() { super(); } }
## Input

`````js
({ get x() { class C { constructor() { super(); } } } })
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
                                    "original": "x",
                                    "text": "x",
                                    "rawText": " x",
                                    "flags": 96,
                                    "start": 6,
                                    "end": 8
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1056,
                                    "start": 9,
                                    "end": 10
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
                                                    "start": 12,
                                                    "end": 18
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "original": "C",
                                                    "text": "C",
                                                    "rawText": " C",
                                                    "flags": 96,
                                                    "start": 18,
                                                    "end": 20
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
                                                                    "original": "constructor",
                                                                    "text": "constructor",
                                                                    "rawText": " constructor",
                                                                    "flags": 96,
                                                                    "start": 22,
                                                                    "end": 34
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 2048,
                                                                    "start": 35,
                                                                    "end": 36
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
                                                                                            "start": 38,
                                                                                            "end": 44
                                                                                        },
                                                                                        "flags": 96,
                                                                                        "start": 38,
                                                                                        "end": 44
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 45,
                                                                                        "end": 45
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 38,
                                                                                    "end": 46
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 38,
                                                                                "end": 47
                                                                            }
                                                                        ],
                                                                        "flags": 32,
                                                                        "start": 38,
                                                                        "end": 47
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 36,
                                                                    "end": 49
                                                                },
                                                                "flags": 2048,
                                                                "start": 34,
                                                                "end": 49
                                                            },
                                                            "flags": 2048,
                                                            "start": 22,
                                                            "end": 49
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 22,
                                                    "end": 51
                                                },
                                                "flags": 16,
                                                "start": 12,
                                                "end": 51
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 12,
                                        "end": 51
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 53
                                },
                                "flags": 1056,
                                "start": 8,
                                "end": 53
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 53
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 55
                },
                "flags": 32,
                "start": 0,
                "end": 56
            },
            "flags": 16,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "({ get x() { class C { constructor() { super(); } } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 44, end: 45

```

