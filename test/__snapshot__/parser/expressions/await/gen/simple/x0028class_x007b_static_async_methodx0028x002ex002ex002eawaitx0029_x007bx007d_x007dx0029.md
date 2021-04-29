# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: (class { static async method(...await) {} })
## Input

`````js
(class { static async method(...await) {} })
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
                                "generatorToken": null,
                                "staticKeyword": {
                                    "kind": 8388716,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 15
                                },
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 15,
                                    "end": 21
                                },
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 28
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "start": 29,
                                                    "end": 32
                                                },
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "start": 32,
                                                    "end": 37
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 34,
                                                "start": 29,
                                                "end": 37
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 290,
                                        "start": 29,
                                        "end": 38
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 40,
                                            "end": 40
                                        },
                                        "flags": 32,
                                        "start": 38,
                                        "end": 41
                                    },
                                    "flags": 256,
                                    "start": 28,
                                    "end": 41
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 41
                            }
                        ],
                        "flags": 32,
                        "start": 8,
                        "end": 43
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 43
                },
                "flags": 32,
                "start": 0,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "(class { static async method(...await) {} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
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

