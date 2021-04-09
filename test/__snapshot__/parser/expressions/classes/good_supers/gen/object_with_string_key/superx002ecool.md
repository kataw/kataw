# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: object with string key
> :: case: super.cool
## Input

`````js
class x extends y {
  constructor() {
    ({"foo": super.cool})
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
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 225,
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 50,
                                                                        "end": 56
                                                                    },
                                                                    "expression": {
                                                                        "kind": 81921,
                                                                        "value": "cool",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 57,
                                                                        "end": 61
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 44,
                                                                    "end": 61
                                                                },
                                                                "right": {
                                                                    "kind": 67174403,
                                                                    "value": "foo",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 44,
                                                                    "end": 49
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 44,
                                                                "end": 61
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 44,
                                                        "end": 61
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 43,
                                                    "end": 62
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 37,
                                                "end": 63
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 37,
                                            "end": 63
                                        }
                                    ],
                                    "multiline": true,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 63
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 35,
                                "end": 67
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 33,
                            "end": 67
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 67
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 69
            },
            "flags": 128,
            "start": 0,
            "end": 69
        }
    ],
    "isModule": false,
    "text": "class x extends y {\n  constructor() {\n    ({\"foo\": super.cool})\n  }\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 69
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: object with string key
> :: case: super.cool
## Input

`````js
class x extends y {
  constructor() {
    ({"foo": super.cool})
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
> :: test: object with string key
> :: case: super.cool
## Input

`````js
class x extends y {
  constructor() {
    ({"foo": super.cool})
  }
}
`````
```

