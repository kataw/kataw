# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-expr
> :: case: set static(v) {}
## Input

`````js
(class { set static(v) {} });
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
                                    "flags": 512,
                                    "start": 8,
                                    "end": 12
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "static",
                                        "rawText": "static",
                                        "flags": 768,
                                        "start": 12,
                                        "end": 19
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
                                                    "text": "v",
                                                    "rawText": "v",
                                                    "flags": 768,
                                                    "start": 20,
                                                    "end": 21
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 20,
                                                "end": 21
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 4352,
                                        "start": 20,
                                        "end": 22
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
                                            "start": 24,
                                            "end": 24
                                        },
                                        "flags": 256,
                                        "start": 22,
                                        "end": 25
                                    },
                                    "flags": 4096,
                                    "start": 19,
                                    "end": 25
                                },
                                "flags": 4096,
                                "start": 8,
                                "end": 25
                            }
                        ],
                        "flags": 256,
                        "start": 8,
                        "end": 27
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 27
                },
                "flags": 256,
                "start": 0,
                "end": 28
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "(class { set static(v) {} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
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

