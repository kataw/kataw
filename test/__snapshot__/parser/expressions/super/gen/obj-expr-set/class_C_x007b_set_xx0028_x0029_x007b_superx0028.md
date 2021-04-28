# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: obj-expr-set
> :: case: class C { set x(_) { super(
## Input

`````js
({ set x(_) { class C { set x(_) { super( } })
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
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "_",
                                                "rawText": "_",
                                                "flags": 768,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 9,
                                            "end": 10
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 4352,
                                    "start": 9,
                                    "end": 11
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
                                                    "start": 13,
                                                    "end": 19
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 768,
                                                    "start": 19,
                                                    "end": 21
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
                                                                "start": 23,
                                                                "end": 27
                                                            },
                                                            "method": {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 768,
                                                                    "start": 27,
                                                                    "end": 29
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
                                                                                "start": 30,
                                                                                "end": 31
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": null,
                                                                            "flags": 256,
                                                                            "start": 30,
                                                                            "end": 31
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 4352,
                                                                    "start": 30,
                                                                    "end": 32
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
                                                                                            "start": 34,
                                                                                            "end": 40
                                                                                        },
                                                                                        "flags": 768,
                                                                                        "start": 34,
                                                                                        "end": 40
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 41,
                                                                                        "end": 41
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 34,
                                                                                    "end": 41
                                                                                },
                                                                                "flags": 128,
                                                                                "start": 34,
                                                                                "end": 41
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 256,
                                                                        "start": 34,
                                                                        "end": 41
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 32,
                                                                    "end": 43
                                                                },
                                                                "flags": 4096,
                                                                "start": 29,
                                                                "end": 43
                                                            },
                                                            "flags": 4096,
                                                            "start": 23,
                                                            "end": 43
                                                        }
                                                    ],
                                                    "flags": 256,
                                                    "start": 23,
                                                    "end": 45
                                                },
                                                "flags": 128,
                                                "start": 13,
                                                "end": 45
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 13,
                                        "end": 45
                                    },
                                    "flags": 256,
                                    "start": 11,
                                    "end": 45
                                },
                                "flags": 4352,
                                "start": 8,
                                "end": 45
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 45
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 45
                },
                "flags": 256,
                "start": 0,
                "end": 46
            },
            "flags": 128,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "({ set x(_) { class C { set x(_) { super( } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 40, end: 41
✖ ',' expected - start: 45, end: 46

```

