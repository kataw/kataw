# Kataw parser test case

## Input

`````js
class B {
    static readonly [s: string]: number;
    static readonly [s: number]: 42 | 233
}

class D {
    static [s: string]: number;
    static [s: number]: 42 | 233
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class B {\n    static readonly [s: string]: number;\n    static readonly [s: number]: 42 | 233\n}\n\nclass D {\n    static [s: string]: number;\n    static [s: number]: 42 | 233\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "B",
                    "rawText": "B",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 7
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 73844,
                            "accessModifier": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "s",
                                            "rawText": "s",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 31,
                                            "end": 32
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 33,
                                            "end": 40
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 31,
                                        "end": 40
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 31,
                                "end": 40
                            },
                            "returnType": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 42,
                                "end": 49
                            },
                            "isStatic": true,
                            "isReadOnly": true,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 31,
                            "end": 50
                        },
                        {
                            "kind": 73844,
                            "accessModifier": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "s",
                                            "rawText": "s",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 72,
                                            "end": 73
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 74,
                                            "end": 81
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 72,
                                        "end": 81
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 72,
                                "end": 81
                            },
                            "returnType": {
                                "kind": 8432,
                                "types": [
                                    {
                                        "kind": 8355,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 83,
                                        "end": 86
                                    },
                                    {
                                        "kind": 8355,
                                        "text": 233,
                                        "rawText": "233",
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 88,
                                        "end": 92
                                    }
                                ],
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 86,
                                "end": 92
                            },
                            "isStatic": true,
                            "isReadOnly": true,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 72,
                            "end": 92
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 94
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 94
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "D",
                    "rawText": "D",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 101,
                    "end": 103
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 73844,
                            "accessModifier": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "s",
                                            "rawText": "s",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 118,
                                            "end": 119
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 120,
                                            "end": 127
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 118,
                                        "end": 127
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 118,
                                "end": 127
                            },
                            "returnType": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 129,
                                "end": 136
                            },
                            "isStatic": true,
                            "isReadOnly": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 118,
                            "end": 137
                        },
                        {
                            "kind": 73844,
                            "accessModifier": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "s",
                                            "rawText": "s",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 150,
                                            "end": 151
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 152,
                                            "end": 159
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 150,
                                        "end": 159
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 150,
                                "end": 159
                            },
                            "returnType": {
                                "kind": 8432,
                                "types": [
                                    {
                                        "kind": 8355,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 161,
                                        "end": 164
                                    },
                                    {
                                        "kind": 8355,
                                        "text": 233,
                                        "rawText": "233",
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 166,
                                        "end": 170
                                    }
                                ],
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 164,
                                "end": 170
                            },
                            "isStatic": true,
                            "isReadOnly": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 150,
                            "end": 170
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 105,
                    "end": 172
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 94,
                "end": 172
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 172
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 172
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

