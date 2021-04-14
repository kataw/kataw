# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: destructuring with string key
> :: case: super.cool
## Input

`````js
class x extends y {
  constructor() {
    ({"foo": super.cool} = x)
  }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 81921,
                    "text": "y",
                    "rawText": "y",
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
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 19,
                                "end": 33
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 34,
                                "end": 35
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
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
                                                                            "superKeyword": {
                                                                                "kind": 4259935,
                                                                                "flags": 768,
                                                                                "start": 50,
                                                                                "end": 56
                                                                            },
                                                                            "flags": 768,
                                                                            "start": 50,
                                                                            "end": 56
                                                                        },
                                                                        "expression": {
                                                                            "kind": 81921,
                                                                            "text": "cool",
                                                                            "rawText": "cool",
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
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 768,
                                                                        "start": 44,
                                                                        "end": 49
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 44,
                                                                    "end": 61
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "start": 44,
                                                            "end": 61
                                                        },
                                                        "flags": 256,
                                                        "start": 43,
                                                        "end": 62
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 768,
                                                        "start": 62,
                                                        "end": 64
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 64,
                                                        "end": 66
                                                    },
                                                    "flags": 256,
                                                    "start": 43,
                                                    "end": 66
                                                },
                                                "flags": 256,
                                                "start": 37,
                                                "end": 67
                                            },
                                            "flags": 128,
                                            "start": 37,
                                            "end": 67
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 67
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 71
                            },
                            "flags": 0,
                            "start": 33,
                            "end": 71
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 71
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 73
            },
            "flags": 128,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "text": "class x extends y {\n  constructor() {\n    ({\"foo\": super.cool} = x)\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: destructuring with string key
> :: case: super.cool
## Input

`````js
class x extends y {
  constructor() {
    ({"foo": super.cool} = x)
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
> :: test: destructuring with string key
> :: case: super.cool
## Input

`````js
class x extends y {
  constructor() {
    ({"foo": super.cool} = x)
  }
}
`````
```

