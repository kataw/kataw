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
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 6,
                                    "end": 8
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 8448,
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
                                                    "kind": 37814352,
                                                    "flags": 768,
                                                    "start": 12,
                                                    "end": 18
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 768,
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
                                                            "decorators": null,
                                                            "staticToken": null,
                                                            "method": {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 768,
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
                                                                                "flags": 768,
                                                                                "start": 29,
                                                                                "end": 30
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": null,
                                                                            "flags": 256,
                                                                            "start": 29,
                                                                            "end": 30
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 4352,
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
                                                                                            "flags": 768,
                                                                                            "start": 33,
                                                                                            "end": 39
                                                                                        },
                                                                                        "flags": 768,
                                                                                        "start": 33,
                                                                                        "end": 39
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 40,
                                                                                        "end": 40
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 33,
                                                                                    "end": 40
                                                                                },
                                                                                "flags": 128,
                                                                                "start": 33,
                                                                                "end": 40
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 256,
                                                                        "start": 33,
                                                                        "end": 40
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 31,
                                                                    "end": 42
                                                                },
                                                                "flags": 4096,
                                                                "start": 28,
                                                                "end": 42
                                                            },
                                                            "flags": 256,
                                                            "start": 22,
                                                            "end": 42
                                                        }
                                                    ],
                                                    "flags": 256,
                                                    "start": 22,
                                                    "end": 44
                                                },
                                                "flags": 128,
                                                "start": 12,
                                                "end": 44
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 44
                                    },
                                    "flags": 256,
                                    "start": 10,
                                    "end": 44
                                },
                                "flags": 8448,
                                "start": 8,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 44
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 44
                },
                "flags": 256,
                "start": 0,
                "end": 45
            },
            "flags": 128,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "({ get x() { class C { set x(_) { super( } })",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 39,
            "end": 40
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 40,
            "end": 42
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 44,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 45
        }
    ],
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

