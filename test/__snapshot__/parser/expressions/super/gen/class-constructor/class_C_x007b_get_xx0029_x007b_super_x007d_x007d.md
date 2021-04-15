# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: class C { get x) { super; } }
## Input

`````js
class C { constructor() { class C { get x) { super; } } } }
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
                                            "kind": 178,
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37814352,
                                                "flags": 768,
                                                "start": 25,
                                                "end": 31
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 768,
                                                "start": 31,
                                                "end": 33
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
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 768,
                                                            "start": 39,
                                                            "end": 41
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 256,
                                                        "start": 35,
                                                        "end": 41
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 35,
                                                "end": 41
                                            },
                                            "flags": 128,
                                            "start": 25,
                                            "end": 41
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 41
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 41
                            },
                            "flags": 0,
                            "start": 21,
                            "end": 41
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 41
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 41
            },
            "flags": 128,
            "start": 0,
            "end": 41
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 203,
                            "chain": {
                                "kind": 225,
                                "superKeyword": {
                                    "kind": 4259935,
                                    "flags": 768,
                                    "start": 44,
                                    "end": 50
                                },
                                "flags": 768,
                                "start": 44,
                                "end": 50
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 50,
                                "end": 50
                            },
                            "flags": 256,
                            "start": 44,
                            "end": 50
                        },
                        "flags": 128,
                        "start": 44,
                        "end": 51
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 44,
                "end": 51
            },
            "flags": 128,
            "start": 42,
            "end": 53
        }
    ],
    "isModule": false,
    "text": "class C { constructor() { class C { get x) { super; } } } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 41,
            "end": 42
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 41,
            "end": 42
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 41,
            "end": 42
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 41,
            "end": 42
        },
        {
            "kind": 2,
            "source": 2,
            "code": 74,
            "error": "'super' must be followed by an argument list or member access.",
            "start": 50,
            "end": 51
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 50,
            "end": 51
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 53,
            "end": 55
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 55,
            "end": 57
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 57,
            "end": 59
        }
    ],
    "start": 0,
    "end": 59
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

