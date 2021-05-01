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
                "text": "C",
                "rawText": "C",
                "flags": 96,
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
                        "declareToken": null,
                        "decorators": null,
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 9,
                            "end": 11
                        },
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "method",
                                "rawText": "method",
                                "flags": 96,
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
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 21,
                                                    "end": 23
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 64,
                                                    "start": 23,
                                                    "end": 25
                                                },
                                                "right": {
                                                    "kind": 203,
                                                    "chain": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 0,
                                                            "start": 25,
                                                            "end": 31
                                                        },
                                                        "flags": 96,
                                                        "start": 25,
                                                        "end": 31
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 68,
                                                        "start": 31,
                                                        "end": 31
                                                    },
                                                    "flags": 32,
                                                    "start": 25,
                                                    "end": 31
                                                },
                                                "flags": 32,
                                                "start": 21,
                                                "end": 31
                                            },
                                            "flags": 16,
                                            "start": 21,
                                            "end": 31
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 21,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 33
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 33
                        },
                        "flags": 0,
                        "start": 9,
                        "end": 33
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "class C { *method() { y = super } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 31, end: 33
✖ Dot property must be an identifier - start: 31, end: 33

```

