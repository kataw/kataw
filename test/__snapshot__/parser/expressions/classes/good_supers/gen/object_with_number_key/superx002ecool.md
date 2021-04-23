# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: object with number key
> :: case: super.cool
## Input

`````js
class x extends y {
  constructor() {
    ({123: super.cool})
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
                "flags": 768,
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
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
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
                                                                        "superKeyword": {
                                                                            "kind": 4259935,
                                                                            "flags": 768,
                                                                            "start": 48,
                                                                            "end": 54
                                                                        },
                                                                        "flags": 768,
                                                                        "start": 48,
                                                                        "end": 54
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "cool",
                                                                        "rawText": "cool",
                                                                        "flags": 768,
                                                                        "start": 55,
                                                                        "end": 59
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 44,
                                                                    "end": 59
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": 123,
                                                                    "rawText": "123",
                                                                    "flags": 768,
                                                                    "start": 44,
                                                                    "end": 47
                                                                },
                                                                "flags": 256,
                                                                "start": 44,
                                                                "end": 59
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 44,
                                                        "end": 59
                                                    },
                                                    "flags": 256,
                                                    "start": 43,
                                                    "end": 60
                                                },
                                                "flags": 256,
                                                "start": 37,
                                                "end": 61
                                            },
                                            "flags": 128,
                                            "start": 37,
                                            "end": 61
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 61
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 65
                            },
                            "flags": 0,
                            "start": 33,
                            "end": 65
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 65
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 67
            },
            "flags": 128,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "text": "class x extends y {\n  constructor() {\n    ({123: super.cool})\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

