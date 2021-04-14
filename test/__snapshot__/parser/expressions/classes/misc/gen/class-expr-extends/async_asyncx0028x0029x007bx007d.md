# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: async async(){}
## Input

`````js
(class extends Base {async async(){}});
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
                        "kind": 37814352,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsToken": {
                            "kind": 4194391,
                            "flags": 768,
                            "start": 6,
                            "end": 14
                        },
                        "expression": {
                            "kind": 81921,
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
                                "decorators": null,
                                "staticToken": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 81921,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 768,
                                        "start": 26,
                                        "end": 32
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 2048,
                                        "start": 33,
                                        "end": 34
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
                                        "start": 34,
                                        "end": 36
                                    },
                                    "flags": 2048,
                                    "start": 32,
                                    "end": 36
                                },
                                "flags": 256,
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
    "text": "(class extends Base {async async(){}});",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: async async(){}
## Input

`````js
(class extends Base {async async(){}});
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: async async(){}
## Input

`````js
(class extends Base {async async(){}});
`````
```

