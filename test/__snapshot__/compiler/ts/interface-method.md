# Kataw parser test case

## Input

`````js
interface I {
    m();
    m(x?: number, ...y: number[]): void;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface I {\n    m();\n    m(x?: number, ...y: number[]): void;\n}",
    "filename": "",
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
                "start": 9,
                "end": 11
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "m",
                            "rawText": "m",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 19
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 20,
                            "end": 20
                        },
                        "returnType": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 13,
                        "end": 22
                    },
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "m",
                            "rawText": "m",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 28
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 29,
                                        "end": 30
                                    },
                                    "isOptional": true,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 32,
                                        "end": 39
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 29,
                                    "end": 39
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": true,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 44,
                                        "end": 45
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 8199,
                                        "elementType": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 46,
                                            "end": 53
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 46,
                                        "end": 56
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 4097,
                                    "start": 40,
                                    "end": 55
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 29,
                            "end": 55
                        },
                        "returnType": {
                            "kind": 4202742,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 57,
                            "end": 62
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 22,
                        "end": 63
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 13,
                "end": 63
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 65
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
    "end": 65
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

