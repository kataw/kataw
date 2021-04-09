# Kataw parser test case

## Input

`````js
f = ([xCls2 = class { static name() {} }]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 537067531,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "xCls2",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 11
                                        },
                                        "operatorToken": {
                                            "kind": 37814352,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 6,
                                            "end": 13
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
                                                "elements": [
                                                    {
                                                        "kind": 278,
                                                        "decorators": null,
                                                        "staticToken": {
                                                            "kind": 8388716,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 21,
                                                            "end": 28
                                                        },
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 81921,
                                                                "value": "name",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 28,
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
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 37,
                                                                    "end": 37
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 35,
                                                                "end": 38
                                                            },
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 33,
                                                            "end": 38
                                                        },
                                                        "flags": 256,
                                                        "start": 28,
                                                        "end": 38
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 21,
                                                "end": 40
                                            },
                                            "flags": 256,
                                            "start": 13,
                                            "end": 40
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 6,
                                        "end": 40
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 40
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 41
                        }
                    ],
                    "asyncToken": false,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 47,
                            "end": 47
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 45,
                        "end": 48
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 48
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 48
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "f = ([xCls2 = class { static name() {} }]) => {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 42,
            "end": 45
        }
    ],
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

