# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: obj-expr-get
> :: case: class C { set x(_) { super(
## Input

`````js
({ get x() { class C { set x(_) { super( } })
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
                                                    "text": "C",
                                                    "rawText": "C",
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
                                                            "getKeyword": {
                                                                "kind": 16499,
                                                                "flags": 64,
                                                                "start": 22,
                                                                "end": 26
                                                            },
                                                            "method": {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": " x",
                                                                    "flags": 96,
                                                                    "start": 26,
                                                                    "end": 28
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
                                                                                "start": 29,
                                                                                "end": 30
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": null,
                                                                            "flags": 32,
                                                                            "start": 29,
                                                                            "end": 30
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 544,
                                                                    "start": 29,
                                                                    "end": 31
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
                                                                                            "start": 33,
                                                                                            "end": 39
                                                                                        },
                                                                                        "flags": 96,
                                                                                        "start": 33,
                                                                                        "end": 39
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 40,
                                                                                        "end": 40
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 33,
                                                                                    "end": 40
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 33,
                                                                                "end": 40
                                                                            }
                                                                        ],
                                                                        "flags": 32,
                                                                        "start": 33,
                                                                        "end": 40
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 31,
                                                                    "end": 42
                                                                },
                                                                "flags": 512,
                                                                "start": 28,
                                                                "end": 42
                                                            },
                                                            "flags": 512,
                                                            "start": 22,
                                                            "end": 42
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 22,
                                                    "end": 44
                                                },
                                                "flags": 16,
                                                "start": 12,
                                                "end": 44
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 12,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 44
                                },
                                "flags": 1056,
                                "start": 8,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 44
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 44
                },
                "flags": 32,
                "start": 0,
                "end": 45
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "({ get x() { class C { set x(_) { super( } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 39, end: 40
✖ ',' expected - start: 44, end: 45

```

