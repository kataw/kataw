# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: static get x() {}
## Input

`````js
(class extends Base {static get x() {}});
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
                        "flags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 0,
                            "start": 6,
                            "end": 14
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "Base",
                            "rawText": "Base",
                            "flags": 96,
                            "start": 14,
                            "end": 19
                        },
                        "typeParameter": null,
                        "flags": 16,
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
                                "generatorToken": null,
                                "staticKeyword": {
                                    "kind": 8388716,
                                    "flags": 64,
                                    "start": 21,
                                    "end": 27
                                },
                                "asyncKeyword": null,
                                "setKeyword": {
                                    "kind": 16498,
                                    "flags": 64,
                                    "start": 27,
                                    "end": 31
                                },
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 31,
                                        "end": 33
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 1024,
                                        "start": 34,
                                        "end": 35
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 37,
                                            "end": 37
                                        },
                                        "flags": 32,
                                        "start": 35,
                                        "end": 38
                                    },
                                    "flags": 1024,
                                    "start": 33,
                                    "end": 38
                                },
                                "flags": 1024,
                                "start": 27,
                                "end": 38
                            }
                        ],
                        "flags": 32,
                        "start": 21,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 39
                },
                "flags": 32,
                "start": 0,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "(class extends Base {static get x() {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
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

