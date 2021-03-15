# Kataw parser test case

## Input

`````js
interface I {
    [Symbol.iterator](): void;
    [Symbol.iterator]?(): number;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface I {\n    [Symbol.iterator](): void;\n    [Symbol.iterator]?(): number;\n}",
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
                            "kind": 65591,
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "Symbol",
                                    "rawText": "Symbol",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 25
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "iterator",
                                    "rawText": "iterator",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 34
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 34,
                                "period": {
                                    "kind": 255,
                                    "pos": 25,
                                    "end": 26
                                }
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 131073,
                            "start": 13,
                            "end": 35
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
                            "start": 36,
                            "end": 36
                        },
                        "returnType": {
                            "kind": 4202742,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 38,
                            "end": 43
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 13,
                        "end": 44
                    },
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 65591,
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "Symbol",
                                    "rawText": "Symbol",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 56
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "iterator",
                                    "rawText": "iterator",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 65
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 56,
                                "end": 65,
                                "period": {
                                    "kind": 255,
                                    "pos": 56,
                                    "end": 57
                                }
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 131073,
                            "start": 44,
                            "end": 66
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": true,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 68,
                            "end": 68
                        },
                        "returnType": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 70,
                            "end": 77
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 44,
                        "end": 78
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 13,
                "end": 78
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 80
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
    "end": 80
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

