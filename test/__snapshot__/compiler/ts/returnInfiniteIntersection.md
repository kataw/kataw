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
                                                "start": 30,
                                                "end": 32
                                            },
                                            "exclamation": false,
                                            "type": null,
                                            "initializer": {
                                                "kind": 73956,
                                                "type": {
                                                    "kind": 8428,
                                                    "typeName": {
                                                        "kind": 196711,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 36,
                                                        "end": 37
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 36,
                                                    "end": 38
                                                },
                                                "expression": {
                                                    "kind": 65545,
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
                                                                "start": 39,
                                                                "end": 45
                                                            },
                                                            "isOptional": false,
                                                            "type": {
                                                                "kind": 8428,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 46,
                                                                    "end": 48
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
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
                                                    "start": 38,
                                                    "end": 49
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 34,
                                                "end": 49
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 49
                                        }
                                    ],
                                    "flags": 18,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 49
                                },
                                "flags": 16402,
                                "intersects": false,
                                "transformFlags": 769,
                                "start": 22,
                                "end": 49
                            }
                        ],
                        "multiline": true,
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 49
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 49
                },
                "typeParameters": null,
                "flags": 2,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 49
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "recursive",
                        "rawText": "recursive",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
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
                        "start": 64,
                        "end": 64
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 64
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 52,
                "end": 65
            },
            {
                "kind": 2097346,
                "expression": {
                    "kind": 73738,
                    "expression": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 76,
                        "end": 78
                    },
                    "type": {
                        "kind": 8312,
                        "types": [
                            {
                                "kind": 8427,
                                "exprName": {
                                    "kind": 196711,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 88,
                                    "end": 90
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 81,
                                "end": 90
                            },
                            {
                                "kind": 8422,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [
                                        {
                                            "kind": 8380,
                                            "name": {
                                                "kind": 196711,
                                                "text": "p",
                                                "rawText": "p",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
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
                                            "start": 94,
                                            "end": 96
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 94,
                                    "end": 98
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 92,
                                "end": 98
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 90,
                        "end": 98
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 78,
                    "end": 98
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 65,
                "end": 99
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
                                        "start": 127,
                                        "end": 127
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
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
                                            "start": 128,
                                            "end": 129
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 16384,
                                    "intersects": false,
                                    "start": 129,
                                    "end": 130
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 127,
                                "end": 130
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 106,
                            "end": 130
                        }
                    ],
                    "flags": 16400,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 106,
                    "end": 130
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "start": 101,
                "end": 130
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 130
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 100,
            "length": 0
        }
    ],
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

