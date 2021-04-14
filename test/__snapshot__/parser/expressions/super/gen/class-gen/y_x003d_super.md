# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: class-gen
> :: case: y = super
## Input

`````js
class C { *method() { y = super } }
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
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "key": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 9,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 11
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "method",
                                "rawText": "method",
                                "flags": 768,
                                "start": 11,
                                "end": 17
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 18,
                                "end": 19
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
                                                    "kind": 81921,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 21,
                                                    "end": 23
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 768,
                                                    "start": 23,
                                                    "end": 25
                                                },
                                                "right": {
                                                    "kind": 203,
                                                    "chain": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 768,
                                                            "start": 25,
                                                            "end": 31
                                                        },
                                                        "flags": 768,
                                                        "start": 25,
                                                        "end": 31
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "autofix": 0,
                                                        "flags": 12,
                                                        "start": 31,
                                                        "end": 31
                                                    },
                                                    "flags": 256,
                                                    "start": 25,
                                                    "end": 31
                                                },
                                                "flags": 256,
                                                "start": 21,
                                                "end": 31
                                            },
                                            "flags": 128,
                                            "start": 21,
                                            "end": 31
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 21,
                                    "end": 31
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 33
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 33
                        },
                        "flags": 256,
                        "start": 11,
                        "end": 33
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 35
            },
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "class C { *method() { y = super } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 9,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 74,
            "error": "'super' must be followed by an argument list or member access.",
            "start": 31,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 31,
            "end": 33
        }
    ],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: class-gen
> :: case: y = super
## Input

`````js
class C { *method() { y = super } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: class-gen
> :: case: y = super
## Input

`````js
class C { *method() { y = super } }
`````
```

