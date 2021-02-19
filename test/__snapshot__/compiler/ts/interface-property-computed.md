 Kataw parser test case

## Input

`````js
interface I {
    [Symbol.iterator]: number;
    [Symbol.iterator]?: number;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface I {\n    [Symbol.iterator]: number;\n    [Symbol.iterator]?: number;\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "I",
                    "rawText": "I",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 11
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 188,
                            "name": {
                                "kind": 55,
                                "expression": {
                                    "kind": 74424,
                                    "member": {
                                        "kind": 196712,
                                        "text": "Symbol",
                                        "rawText": "Symbol",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 19,
                                        "end": 25
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "iterator",
                                        "rawText": "iterator",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 26,
                                        "end": 34
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 25,
                                    "end": 34
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 131073,
                                "parent": null,
                                "emitNode": null,
                                "start": 13,
                                "end": 35
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": {
                                "kind": 161,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 36,
                                "end": 43
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 13,
                            "end": 44
                        },
                        {
                            "kind": 188,
                            "name": {
                                "kind": 55,
                                "expression": {
                                    "kind": 74424,
                                    "member": {
                                        "kind": 196712,
                                        "text": "Symbol",
                                        "rawText": "Symbol",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 50,
                                        "end": 56
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "iterator",
                                        "rawText": "iterator",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 57,
                                        "end": 65
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 56,
                                    "end": 65
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 131073,
                                "parent": null,
                                "emitNode": null,
                                "start": 44,
                                "end": 66
                            },
                            "isOptional": true,
                            "accessModifier": null,
                            "type": {
                                "kind": 161,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 68,
                                "end": 75
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 44,
                            "end": 76
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 13,
                    "end": 76
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 78
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 78
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 78
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

