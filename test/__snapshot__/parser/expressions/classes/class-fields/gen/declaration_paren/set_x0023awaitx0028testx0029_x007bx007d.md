# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration_paren
> :: case: set #await(test) {}
## Input

`````js
(class extends Base { set #await(test) {} });
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
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 768,
                            "start": 6,
                            "end": 14
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "Base",
                            "rawText": "Base",
                            "flags": 768,
                            "start": 14,
                            "end": 19
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 14,
                        "end": 19
                    },
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
                                    "start": 21,
                                    "end": 25
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#await",
                                        "flags": 768,
                                        "start": 25,
                                        "end": 32
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
                                                    "text": "test",
                                                    "rawText": "test",
                                                    "flags": 768,
                                                    "start": 33,
                                                    "end": 37
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 33,
                                                "end": 37
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 4352,
                                        "start": 33,
                                        "end": 38
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 40,
                                            "end": 40
                                        },
                                        "flags": 256,
                                        "start": 38,
                                        "end": 41
                                    },
                                    "flags": 4096,
                                    "start": 32,
                                    "end": 41
                                },
                                "flags": 4096,
                                "start": 21,
                                "end": 41
                            }
                        ],
                        "flags": 256,
                        "start": 21,
                        "end": 43
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 43
                },
                "flags": 256,
                "start": 0,
                "end": 44
            },
            "flags": 128,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "(class extends Base { set #await(test) {} });",
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
✔ No errors
```

