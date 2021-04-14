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
                    "text": "f",
                    "rawText": "f",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 42,
                        "end": 45
                    },
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
                                            "text": "xCls2",
                                            "rawText": "xCls2",
                                            "flags": 768,
                                            "start": 6,
                                            "end": 11
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37814352,
                                                "flags": 768,
                                                "start": 13,
                                                "end": 19
                                            },
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
                                                            "flags": 768,
                                                            "start": 21,
                                                            "end": 28
                                                        },
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 81921,
                                                                "text": "name",
                                                                "rawText": "name",
                                                                "flags": 768,
                                                                "start": 28,
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
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 37,
                                                                    "end": 37
                                                                },
                                                                "flags": 256,
                                                                "start": 35,
                                                                "end": 38
                                                            },
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
                                        "flags": 256,
                                        "start": 6,
                                        "end": 40
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 6,
                                "end": 40
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 41
                        }
                    ],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 47,
                            "end": 47
                        },
                        "flags": 256,
                        "start": 45,
                        "end": 48
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 48
                },
                "flags": 256,
                "start": 0,
                "end": 48
            },
            "flags": 128,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "f = ([xCls2 = class { static name() {} }]) => {}",
    "fileName": "__root__",
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

