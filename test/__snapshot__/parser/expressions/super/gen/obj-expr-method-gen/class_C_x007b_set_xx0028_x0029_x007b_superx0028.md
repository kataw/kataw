# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: class C { set x(_) { super(
## Input

`````js
({ *method() { class C { set x(_) { super( } })
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
                                    "flags": 768,
                                    "start": 4,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
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
                                                    "flags": 768,
                                                    "start": 14,
                                                    "end": 20
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 768,
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
                                                            "staticKeyword": null,
                                                            "asyncKeyword": null,
                                                            "setKeyword": null,
                                                            "getKeyword": {
                                                                "kind": 82031,
                                                                "flags": 768,
                                                                "start": 24,
                                                                "end": 28
                                                            },
                                                            "method": {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 768,
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
                                                                                "flags": 768,
                                                                                "start": 31,
                                                                                "end": 32
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": null,
                                                                            "flags": 256,
                                                                            "start": 31,
                                                                            "end": 32
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 4352,
                                                                    "start": 31,
                                                                    "end": 33
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
                                                                                            "start": 35,
                                                                                            "end": 41
                                                                                        },
                                                                                        "flags": 768,
                                                                                        "start": 35,
                                                                                        "end": 41
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 42,
                                                                                        "end": 42
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 35,
                                                                                    "end": 42
                                                                                },
                                                                                "flags": 128,
                                                                                "start": 35,
                                                                                "end": 42
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 256,
                                                                        "start": 35,
                                                                        "end": 42
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 33,
                                                                    "end": 44
                                                                },
                                                                "flags": 4096,
                                                                "start": 30,
                                                                "end": 44
                                                            },
                                                            "flags": 256,
                                                            "start": 24,
                                                            "end": 44
                                                        }
                                                    ],
                                                    "flags": 256,
                                                    "start": 24,
                                                    "end": 46
                                                },
                                                "flags": 128,
                                                "start": 14,
                                                "end": 46
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 46
                                    },
                                    "flags": 256,
                                    "start": 12,
                                    "end": 46
                                },
                                "flags": 1280,
                                "start": 10,
                                "end": 46
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 46
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 46
                },
                "flags": 256,
                "start": 0,
                "end": 47
            },
            "flags": 128,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "({ *method() { class C { set x(_) { super( } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

