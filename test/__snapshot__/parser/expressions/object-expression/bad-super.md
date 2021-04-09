# Kataw parser test case

## Input

`````js
class x extends y {constructor(){    ({"foo": super}) => x    }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
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
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "constructor",
                                "autofix": 0,
                                "flags": 768,
                                "start": 19,
                                "end": 30
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 31,
                                "end": 32
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
                                                "kind": 271,
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
                                                                        "kind": 203,
                                                                        "chain": {
                                                                            "kind": 225,
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 45,
                                                                            "end": 51
                                                                        },
                                                                        "expression": {
                                                                            "kind": 253,
                                                                            "text": "",
                                                                            "autofix": 0,
                                                                            "flags": 12,
                                                                            "start": 51,
                                                                            "end": 51
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 45,
                                                                        "end": 51
                                                                    },
                                                                    "right": {
                                                                        "kind": 67174403,
                                                                        "value": "foo",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 39,
                                                                        "end": 44
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 39,
                                                                    "end": 51
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 39,
                                                            "end": 51
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 38,
                                                        "end": 52
                                                    }
                                                ],
                                                "asyncToken": false,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 33,
                                                "end": 58
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 33,
                                            "end": 58
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 33,
                                    "end": 58
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 32,
                                "end": 63
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 30,
                            "end": 63
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 63
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 64
            },
            "flags": 128,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "text": "class x extends y {constructor(){    ({\"foo\": super}) => x    }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 74,
            "error": "'super' must be followed by an argument list or member access.",
            "start": 51,
            "end": 52
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 51,
            "end": 52
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 53,
            "end": 56
        }
    ],
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

