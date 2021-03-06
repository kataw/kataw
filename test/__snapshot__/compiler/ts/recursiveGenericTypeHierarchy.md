# Kataw parser test case

## Input

`````js
interface A<T extends A<T, S>, S extends A<T, S>> { }
interface B<T extends B<T, S>, S extends B<T, S>> extends A<B<T, S>, B<T, S>> { }

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface A<T extends A<T, S>, S extends A<T, S>> { }\ninterface B<T extends B<T, S>, S extends B<T, S>> extends A<B<T, S>, B<T, S>> { }\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 13
                            },
                            "constraint": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 23
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 25
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 24,
                                            "end": 26
                                        },
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "S",
                                                "rawText": "S",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 28
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 26,
                                            "end": 29
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 24,
                                    "end": 28
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 21,
                                "end": 30
                            },
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 12,
                            "end": 29
                        },
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "S",
                                "rawText": "S",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 32
                            },
                            "constraint": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 42
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 43,
                                                "end": 44
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 43,
                                            "end": 45
                                        },
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "S",
                                                "rawText": "S",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 45,
                                                "end": 47
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 45,
                                            "end": 48
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 43,
                                    "end": 47
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 40,
                                "end": 49
                            },
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 30,
                            "end": 48
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 12,
                    "end": 48
                },
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 51,
                    "end": 51
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 53
            },
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "B",
                    "rawText": "B",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 63,
                    "end": 65
                },
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 67
                            },
                            "constraint": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 75,
                                    "end": 77
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 78,
                                                "end": 79
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 78,
                                            "end": 80
                                        },
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "S",
                                                "rawText": "S",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 80,
                                                "end": 82
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 80,
                                            "end": 83
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 78,
                                    "end": 82
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 75,
                                "end": 84
                            },
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 66,
                            "end": 83
                        },
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "S",
                                "rawText": "S",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 84,
                                "end": 86
                            },
                            "constraint": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 94,
                                    "end": 96
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 97,
                                                "end": 98
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 97,
                                            "end": 99
                                        },
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "S",
                                                "rawText": "S",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 99,
                                                "end": 101
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 99,
                                            "end": 102
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 97,
                                    "end": 101
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 94,
                                "end": 103
                            },
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 84,
                            "end": 102
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 66,
                    "end": 102
                },
                "heritageClauses": {
                    "kind": 8294,
                    "clauses": [
                        {
                            "kind": 8293,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 111,
                                    "end": 113
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "B",
                                                "rawText": "B",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 114,
                                                "end": 115
                                            },
                                            "typeArguments": {
                                                "kind": 8419,
                                                "typeArgumentsList": [
                                                    {
                                                        "kind": 8428,
                                                        "typeName": {
                                                            "kind": 196711,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 116,
                                                            "end": 117
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 116,
                                                        "end": 118
                                                    },
                                                    {
                                                        "kind": 8428,
                                                        "typeName": {
                                                            "kind": 196711,
                                                            "text": "S",
                                                            "rawText": "S",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 118,
                                                            "end": 120
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 118,
                                                        "end": 121
                                                    }
                                                ],
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 116,
                                                "end": 120
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 114,
                                            "end": 122
                                        },
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "B",
                                                "rawText": "B",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 122,
                                                "end": 124
                                            },
                                            "typeArguments": {
                                                "kind": 8419,
                                                "typeArgumentsList": [
                                                    {
                                                        "kind": 8428,
                                                        "typeName": {
                                                            "kind": 196711,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 125,
                                                            "end": 126
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 125,
                                                        "end": 127
                                                    },
                                                    {
                                                        "kind": 8428,
                                                        "typeName": {
                                                            "kind": 196711,
                                                            "text": "S",
                                                            "rawText": "S",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 127,
                                                            "end": 129
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 127,
                                                        "end": 130
                                                    }
                                                ],
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 125,
                                                "end": 129
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 122,
                                            "end": 131
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 114,
                                    "end": 130
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 111,
                                "end": 133
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 111,
                            "end": 131
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 111,
                    "end": 131
                },
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 133,
                    "end": 133
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 53,
                "end": 135
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 135
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 136
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

