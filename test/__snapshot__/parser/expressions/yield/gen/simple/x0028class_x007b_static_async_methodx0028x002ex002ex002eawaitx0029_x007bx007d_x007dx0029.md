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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 278,
                                "decorators": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 8,
                                    "end": 15
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 81921,
                                        "value": "method",
                                        "autofix": 0,
                                        "flags": 768,
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
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 29,
                                                    "end": 32
                                                },
                                                "binding": {
                                                    "kind": 81921,
                                                    "value": "await",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 32,
                                                    "end": 37
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 29,
                                                "end": 37
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 29,
                                        "end": 38
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "statements": [],
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 40,
                                            "end": 40
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 41
                                    },
                                    "autofix": 0,
                                    "flags": 2048,
                                    "start": 28,
                                    "end": 41
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 41
                            }
                        ],
                        "flags": 256,
                        "start": 8,
                        "end": 43
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 43
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 44
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "(class { static async method(...await) {} })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: (class { static async method(...await) {} })
## Input

`````js
(class { static async method(...await) {} })
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: (class { static async method(...await) {} })
## Input

`````js
(class { static async method(...await) {} })
`````
```

