# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (class { static async method(...await) {} })
## Input

`````js
'use strict'; (class { static async method(...await) {} })
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
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
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
                                    "start": 22,
                                    "end": 29
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 81921,
                                        "value": "method",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 35,
                                        "end": 42
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
                                                    "start": 43,
                                                    "end": 46
                                                },
                                                "binding": {
                                                    "kind": 81921,
                                                    "value": "await",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 46,
                                                    "end": 51
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 43,
                                                "end": 51
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 43,
                                        "end": 52
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
                                            "start": 54,
                                            "end": 54
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 52,
                                        "end": 55
                                    },
                                    "autofix": 0,
                                    "flags": 2048,
                                    "start": 42,
                                    "end": 55
                                },
                                "flags": 256,
                                "start": 29,
                                "end": 55
                            }
                        ],
                        "flags": 256,
                        "start": 22,
                        "end": 57
                    },
                    "flags": 256,
                    "start": 15,
                    "end": 57
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 58
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 58
        }
    ],
    "isModule": false,
    "text": "'use strict'; (class { static async method(...await) {} })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 58
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (class { static async method(...await) {} })
## Input

`````js
'use strict'; (class { static async method(...await) {} })
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (class { static async method(...await) {} })
## Input

`````js
'use strict'; (class { static async method(...await) {} })
`````
```

