# Kataw parser test case

## Input

`````js
function recursive() {
    let x = <T>(subkey: T) => recursive();
    return x as typeof x & { p };
}

let result = recursive()(1)

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function recursive() {\n    let x = <T>(subkey: T) => recursive();\n    return x as typeof x & { p };\n}\n\nlet result = recursive()(1)\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "recursive",
                    "rawText": "recursive",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 8,
                    "end": 18
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 19,
                    "end": 20
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 142,
                                "isConst": false,
                                "binding": {
                                    "kind": 31,
                                    "bindingList": [
                                        {
                                            "kind": 141,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 30,
                                                "end": 32
                                            },
                                            "exclamation": false,
                                            "type": null,
                                            "initializer": {
                                                "kind": 67592,
                                                "arrowParameters": {
                                                    "kind": 65545,
                                                    "typeParameters": {
                                                        "kind": 233,
                                                        "typeParameterList": [],
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 38,
                                                        "end": 38
                                                    },
                                                    "elements": [
                                                        {
                                                            "kind": 89,
                                                            "ellipsis": false,
                                                            "binding": {
                                                                "kind": 196712,
                                                                "text": "subkey",
                                                                "rawText": "subkey",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 39,
                                                                "end": 45
                                                            },
                                                            "isOptional": false,
                                                            "type": {
                                                                "kind": 236,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 46,
                                                                    "end": 48
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 46,
                                                                "end": 49
                                                            },
                                                            "initializer": null,
                                                            "decorators": null,
                                                            "accessModifier": null,
                                                            "isReadOnly": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 38,
                                                            "end": 48
                                                        }
                                                    ],
                                                    "type": null,
                                                    "accessModifier": null,
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 38,
                                                    "end": 49
                                                },
                                                "contents": {
                                                    "kind": 66091,
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "recursive",
                                                        "rawText": "recursive",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 52,
                                                        "end": 62
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 64,
                                                        "end": 64
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 62,
                                                    "end": 64
                                                },
                                                "flags": 536870912,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 34,
                                                "end": 64
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 30,
                                            "end": 64
                                        }
                                    ],
                                    "flags": 16,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 30,
                                    "end": 64
                                },
                                "flags": 16400,
                                "intersects": false,
                                "transformFlags": 769,
                                "parent": null,
                                "emitNode": null,
                                "start": 22,
                                "end": 65
                            },
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 65546,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 76,
                                        "end": 78
                                    },
                                    "type": {
                                        "kind": 120,
                                        "types": [
                                            {
                                                "kind": 235,
                                                "exprName": {
                                                    "kind": 196711,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 88,
                                                    "end": 90
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 81,
                                                "end": 90
                                            },
                                            {
                                                "kind": 230,
                                                "objectTypeMembers": {
                                                    "kind": 169,
                                                    "members": [
                                                        {
                                                            "kind": 188,
                                                            "name": {
                                                                "kind": 196711,
                                                                "text": "p",
                                                                "rawText": "p",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 94,
                                                                "end": 96
                                                            },
                                                            "isOptional": false,
                                                            "accessModifier": null,
                                                            "type": null,
                                                            "isStatic": false,
                                                            "isReadOnly": false,
                                                            "initializer": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 94,
                                                            "end": 96
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 94,
                                                    "end": 98
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 92,
                                                "end": 98
                                            }
                                        ],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 90,
                                        "end": 98
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 78,
                                    "end": 98
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 65,
                                "end": 99
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 22,
                        "end": 99
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 20,
                    "end": 101
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 101
            },
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "result",
                                "rawText": "result",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 106,
                                "end": 113
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "recursive",
                                        "rawText": "recursive",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 115,
                                        "end": 125
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 127,
                                        "end": 127
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 125,
                                    "end": 127
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 128,
                                            "end": 129
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 16384,
                                    "intersects": false,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 129,
                                    "end": 130
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 127,
                                "end": 130
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 106,
                            "end": 130
                        }
                    ],
                    "flags": 16400,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 106,
                    "end": 130
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 101,
                "end": 130
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 130
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
    "end": 131
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

