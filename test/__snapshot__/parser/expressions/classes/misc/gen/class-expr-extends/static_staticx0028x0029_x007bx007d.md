# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: static static() {}
## Input

`````js
(class extends Base {static static() {}});
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
                        "flags": 1,
                        "start": 0,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 6,
                            "start": 0,
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
                                "staticKeyword": {
                                    "kind": 8388716,
                                    "flags": 21,
                                    "start": 512,
                                    "end": 27
                                },
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "static",
                                        "rawText": "static",
                                        "flags": 768,
                                        "start": 27,
                                        "end": 34
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 35,
                                        "end": 36
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
                                            "start": 38,
                                            "end": 38
                                        },
                                        "flags": 256,
                                        "start": 36,
                                        "end": 39
                                    },
                                    "flags": 0,
                                    "start": 34,
                                    "end": 39
                                },
                                "flags": 0,
                                "start": 27,
                                "end": 39
                            }
                        ],
                        "flags": 256,
                        "start": 21,
                        "end": 40
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 40
                },
                "flags": 256,
                "start": 0,
                "end": 41
            },
            "flags": 128,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "text": "(class extends Base {static static() {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
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

