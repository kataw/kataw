# Kataw parser test case

## Input

`````js
function* f() {
    interface I {
        (yield: number): void;
        new (yield: number): void;
        f(yield: number): void;
    }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function* f() {\n    interface I {\n        (yield: number): void;\n        new (yield: number): void;\n        f(yield: number): void;\n    }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 13
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 8311,
                            "name": {
                                "kind": 196712,
                                "text": "I",
                                "rawText": "I",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 31
                            },
                            "typeParameters": null,
                            "heritageClauses": null,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8236,
                                        "isReadOnly": false,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [
                                                {
                                                    "kind": 134226094,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 43,
                                                        "end": 48
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 49,
                                                        "end": 56
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1,
                                                    "start": 43,
                                                    "end": 56
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 43,
                                            "end": 56
                                        },
                                        "returnType": {
                                            "kind": 4202742,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 58,
                                            "end": 63
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 33,
                                        "end": 64
                                    },
                                    {
                                        "kind": 8250,
                                        "isReadOnly": false,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [
                                                {
                                                    "kind": 134226094,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 78,
                                                        "end": 83
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 84,
                                                        "end": 91
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1,
                                                    "start": 78,
                                                    "end": 91
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 78,
                                            "end": 91
                                        },
                                        "returnType": {
                                            "kind": 4202742,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 93,
                                            "end": 98
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 76,
                                        "end": 99
                                    },
                                    {
                                        "kind": 8339,
                                        "name": {
                                            "kind": 196711,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 99,
                                            "end": 109
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [
                                                {
                                                    "kind": 134226094,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 110,
                                                        "end": 115
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 116,
                                                        "end": 123
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1,
                                                    "start": 110,
                                                    "end": 123
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 110,
                                            "end": 123
                                        },
                                        "returnType": {
                                            "kind": 4202742,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 125,
                                            "end": 130
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 99,
                                        "end": 131
                                    }
                                ],
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 33,
                                "end": 131
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 15,
                            "end": 137
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 137
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 139
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 0,
            "end": 139
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 139
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

