# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (class { async method(await) {} })
## Input

`````js
'use strict'; (class { async method(await) {} })
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
                                "staticToken": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 81921,
                                        "value": "method",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 28,
                                        "end": 35
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 81921,
                                                    "value": "await",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 36,
                                                    "end": 41
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 36,
                                                "end": 41
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 36,
                                        "end": 42
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
                                            "start": 44,
                                            "end": 44
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 42,
                                        "end": 45
                                    },
                                    "autofix": 0,
                                    "flags": 2048,
                                    "start": 35,
                                    "end": 45
                                },
                                "flags": 256,
                                "start": 22,
                                "end": 45
                            }
                        ],
                        "flags": 256,
                        "start": 22,
                        "end": 47
                    },
                    "flags": 256,
                    "start": 15,
                    "end": 47
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 48
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "'use strict'; (class { async method(await) {} })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 58,
            "error": "`Await` expression cannot be used in function parameters",
            "start": 36,
            "end": 41
        }
    ],
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (class { async method(await) {} })
## Input

`````js
'use strict'; (class { async method(await) {} })
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (class { async method(await) {} })
## Input

`````js
'use strict'; (class { async method(await) {} })
`````
```

