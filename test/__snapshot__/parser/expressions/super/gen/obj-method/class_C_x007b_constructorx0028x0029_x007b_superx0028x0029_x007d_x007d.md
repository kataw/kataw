# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: obj-method
> :: case: class C { constructor() { super(); } }
## Input

`````js
({ method() { class C { constructor() { super(); } } } })
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
                                                            "getKeyword": null,
                                                            "method": {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "constructor",
                                                                    "rawText": "constructor",
                                                                    "flags": 96,
                                                                    "start": 23,
                                                                    "end": 35
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 2048,
                                                                    "start": 36,
                                                                    "end": 37
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
                                                                                            "start": 39,
                                                                                            "end": 45
                                                                                        },
                                                                                        "flags": 96,
                                                                                        "start": 39,
                                                                                        "end": 45
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 46,
                                                                                        "end": 46
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 39,
                                                                                    "end": 47
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 39,
                                                                                "end": 48
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 32,
                                                                        "start": 39,
                                                                        "end": 48
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 37,
                                                                    "end": 50
                                                                },
                                                                "flags": 2048,
                                                                "start": 35,
                                                                "end": 50
                                                            },
                                                            "flags": 2048,
                                                            "start": 23,
                                                            "end": 50
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 23,
                                                    "end": 52
                                                },
                                                "flags": 16,
                                                "start": 13,
                                                "end": 52
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 32,
                                        "start": 13,
                                        "end": 52
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 54
                                },
                                "flags": 32,
                                "start": 9,
                                "end": 54
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 54
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 56
                },
                "flags": 32,
                "start": 0,
                "end": 57
            },
            "flags": 16,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "({ method() { class C { constructor() { super(); } } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 45, end: 46

```

