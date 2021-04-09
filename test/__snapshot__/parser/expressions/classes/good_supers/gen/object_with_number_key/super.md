# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: object with number key
> :: case: super
## Input

`````js
class x extends y {
  constructor() {
    ({123: super})
  }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "expression": {
                    "kind": 81921,
                    "value": "y",
                    "autofix": 0,
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 17
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
                                "value": "constructor",
                                "autofix": 0,
                                "flags": 768,
                                "start": 19,
                                "end": 33
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 34,
                                "end": 35
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "left": {
                                                                    "kind": 203,
                                                                    "chain": {
                                                                        "kind": 225,
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 48,
                                                                        "end": 54
                                                                    },
                                                                    "expression": {
                                                                        "kind": 253,
                                                                        "text": "",
                                                                        "autofix": 0,
                                                                        "flags": 12,
                                                                        "start": 54,
                                                                        "end": 54
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 48,
                                                                    "end": 54
                                                                },
                                                                "right": {
                                                                    "kind": 81921,
                                                                    "value": 123,
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 44,
                                                                    "end": 47
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 44,
                                                                "end": 54
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 44,
                                                        "end": 54
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 43,
                                                    "end": 55
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 37,
                                                "end": 56
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 37,
                                            "end": 56
                                        }
                                    ],
                                    "multiline": true,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 56
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 35,
                                "end": 60
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 33,
                            "end": 60
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 60
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 62
            },
            "flags": 128,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "text": "class x extends y {\n  constructor() {\n    ({123: super})\n  }\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 74,
            "error": "'super' must be followed by an argument list or member access.",
            "start": 54,
            "end": 55
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 54,
            "end": 55
        }
    ],
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: object with number key
> :: case: super
## Input

`````js
class x extends y {
  constructor() {
    ({123: super})
  }
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: object with number key
> :: case: super
## Input

`````js
class x extends y {
  constructor() {
    ({123: super})
  }
}
`````
```

