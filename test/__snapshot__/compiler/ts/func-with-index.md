# Kataw parser test case

## Input

`````js
function f() {
    interface I {
        [yield: string]: boolean;
    }
}

function* g() {
    interface I {
        [yield: string]: boolean;
    }
}

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function f() {\n    interface I {\n        [yield: string]: boolean;\n    }\n}\n\nfunction* g() {\n    interface I {\n        [yield: string]: boolean;\n    }\n}\n",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 12
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
                                "start": 28,
                                "end": 30
                            },
                            "typeParameters": null,
                            "heritageClauses": null,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 73844,
                                        "accessModifier": null,
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
                                                        "start": 42,
                                                        "end": 47
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 4202702,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 48,
                                                        "end": 55
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1,
                                                    "start": 42,
                                                    "end": 55
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 42,
                                            "end": 55
                                        },
                                        "returnType": {
                                            "kind": 4268070,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 57,
                                            "end": 65
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 42,
                                        "end": 66
                                    }
                                ],
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 32,
                                "end": 66
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 14,
                            "end": 72
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 72
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 74
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 74
        },
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "g",
                "rawText": "g",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 85,
                "end": 87
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 88,
                "end": 89
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
                                "start": 105,
                                "end": 107
                            },
                            "typeParameters": null,
                            "heritageClauses": null,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 73844,
                                        "accessModifier": null,
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
                                                        "start": 119,
                                                        "end": 124
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 4202702,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 125,
                                                        "end": 132
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1,
                                                    "start": 119,
                                                    "end": 132
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 119,
                                            "end": 132
                                        },
                                        "returnType": {
                                            "kind": 4268070,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 134,
                                            "end": 142
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 119,
                                        "end": 143
                                    }
                                ],
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 109,
                                "end": 143
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 91,
                            "end": 149
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 91,
                    "end": 149
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 89,
                "end": 151
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 384,
            "start": 74,
            "end": 151
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
    "end": 152
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

