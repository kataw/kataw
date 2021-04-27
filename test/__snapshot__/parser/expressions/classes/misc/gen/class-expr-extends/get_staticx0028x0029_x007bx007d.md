# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: get static() {}
## Input

`````js
(class extends Base {get static() {}});
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
                                "setKeyword": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 21,
                                    "end": 24
                                },
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "static",
                                        "rawText": "static",
                                        "flags": 768,
                                        "start": 24,
                                        "end": 31
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 8192,
                                        "start": 32,
                                        "end": 33
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
                                            "start": 35,
                                            "end": 35
                                        },
                                        "flags": 256,
                                        "start": 33,
                                        "end": 36
                                    },
                                    "flags": 8192,
                                    "start": 31,
                                    "end": 36
                                },
                                "flags": 8192,
                                "start": 21,
                                "end": 36
                            }
                        ],
                        "flags": 256,
                        "start": 21,
                        "end": 37
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 37
                },
                "flags": 256,
                "start": 0,
                "end": 38
            },
            "flags": 128,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "(class extends Base {get static() {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

