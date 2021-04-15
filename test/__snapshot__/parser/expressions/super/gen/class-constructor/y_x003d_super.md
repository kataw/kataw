# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: y = super
## Input

`````js
class C { constructor() { y = super } }
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
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 768,
                "start": 5,
                "end": 7
            },
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
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 9,
                                "end": 21
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 22,
                                "end": 23
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
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 25,
                                                    "end": 27
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 768,
                                                    "start": 27,
                                                    "end": 29
                                                },
                                                "right": {
                                                    "kind": 203,
                                                    "chain": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 768,
                                                            "start": 29,
                                                            "end": 35
                                                        },
                                                        "flags": 768,
                                                        "start": 29,
                                                        "end": 35
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "autofix": 0,
                                                        "flags": 12,
                                                        "start": 35,
                                                        "end": 35
                                                    },
                                                    "flags": 256,
                                                    "start": 29,
                                                    "end": 35
                                                },
                                                "flags": 256,
                                                "start": 25,
                                                "end": 35
                                            },
                                            "flags": 128,
                                            "start": 25,
                                            "end": 35
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 35
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 37
                            },
                            "flags": 0,
                            "start": 21,
                            "end": 37
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 37
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 39
            },
            "flags": 128,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "class C { constructor() { y = super } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 74,
            "error": "'super' must be followed by an argument list or member access.",
            "start": 35,
            "end": 37
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 35,
            "end": 37
        }
    ],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

