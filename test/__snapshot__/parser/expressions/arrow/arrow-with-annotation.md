# Kataw parser test case

## Input

`````js
(a: string) => x;

(x, y: string) => z;

([a]: string) => x;

({a}: string) => x;


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
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 16619,
                                "autofix": 0,
                                "flags": 0,
                                "start": 3,
                                "end": 10
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 2,
                            "end": 10
                        },
                        "initializer": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 10
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 14,
                    "end": 16
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 20,
                            "end": 21
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 22,
                                "end": 24
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 16619,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 25,
                                    "end": 32
                                },
                                "autofix": 0,
                                "flags": 0,
                                "start": 24,
                                "end": 32
                            },
                            "initializer": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 17,
                            "end": 32
                        }
                    ]
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "z",
                    "autofix": 0,
                    "flags": 768,
                    "start": 36,
                    "end": 38
                },
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 38
            },
            "autofix": 0,
            "flags": 128,
            "start": 17,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 43,
                                        "end": 44
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 43,
                                "end": 44
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 42,
                            "end": 45
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 16619,
                                "autofix": 0,
                                "flags": 0,
                                "start": 46,
                                "end": 53
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 45,
                            "end": 53
                        },
                        "initializer": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 39,
                        "end": 53
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 57,
                    "end": 59
                },
                "autofix": 0,
                "flags": 256,
                "start": 39,
                "end": 59
            },
            "autofix": 0,
            "flags": 128,
            "start": 39,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 64,
                                        "end": 65
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 64,
                                "end": 65
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 63,
                            "end": 66
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 16619,
                                "autofix": 0,
                                "flags": 0,
                                "start": 67,
                                "end": 74
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 66,
                            "end": 74
                        },
                        "initializer": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 60,
                        "end": 74
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 78,
                    "end": 80
                },
                "autofix": 0,
                "flags": 256,
                "start": 60,
                "end": 80
            },
            "autofix": 0,
            "flags": 128,
            "start": 60,
            "end": 81
        }
    ],
    "isModule": false,
    "text": "(a: string) => x;\n\n(x, y: string) => z;\n\n([a]: string) => x;\n\n({a}: string) => x;\n\n",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

