# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: arrow with string key
> :: case: super.cool
## Input

`````js
class x extends y {
  constructor() {
    ({"foo": super.cool}) => x
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
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 7,
                    "start": 0,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
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
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
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
                                                "kind": 271,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 63,
                                                    "start": 0,
                                                    "end": 66
                                                },
                                                "typeParameters": null,
                                                "parameters": [
                                                    {
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
                                                                                "flags": 50,
                                                                                "start": 0,
                                                                                "end": 56
                                                                            },
                                                                            "flags": 768,
                                                                            "start": 50,
                                                                            "end": 56
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "cool",
                                                                            "rawText": "cool",
                                                                            "flags": 768,
                                                                            "start": 57,
                                                                            "end": 61
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 44,
                                                                        "end": 61
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392131,
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
                                                    }
                                                ],
                                                "asyncToken": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 66,
                                                    "end": 68
                                                },
                                                "flags": 256,
                                                "start": 37,
                                                "end": 68
                                            },
                                            "flags": 128,
                                            "start": 37,
                                            "end": 68
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 68
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 72
                            },
                            "flags": 0,
                            "start": 33,
                            "end": 72
                        },
                        "flags": 0,
                        "start": 19,
                        "end": 72
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 74
            },
            "flags": 128,
            "start": 0,
            "end": 74
        }
    ],
    "isModule": false,
    "text": "class x extends y {\n  constructor() {\n    ({\"foo\": super.cool}) => x\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 74
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 63, end: 66

```

