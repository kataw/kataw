# Kataw parser test case

## Input

`````js
  type Mapped<T> = { readonly [K in keyof T ]: T[K] }

  type Mapped<T> = { + readonly  [K in keyof T ]: T[K] }

  type Mapped<T> = { [K in keyof T ]?: T[K]   }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "  type Mapped<T> = { readonly [K in keyof T ]: T[K] }\n\n  type Mapped<T> = { + readonly  [K in keyof T ]: T[K] }\n\n  type Mapped<T> = { [K in keyof T ]?: T[K]   }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Mapped",
                    "rawText": "Mapped",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 6,
                    "end": 13
                },
                "type": {
                    "kind": 230,
                    "objectTypeMembers": {
                        "kind": 169,
                        "members": [
                            {
                                "kind": 188,
                                "name": {
                                    "kind": 55,
                                    "expression": {
                                        "kind": 65563,
                                        "left": {
                                            "kind": 196712,
                                            "text": "K",
                                            "rawText": "K",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 31,
                                            "end": 32
                                        },
                                        "operator": "in",
                                        "right": {
                                            "kind": 196712,
                                            "text": "keyof",
                                            "rawText": "keyof",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 35,
                                            "end": 41
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 31,
                                        "end": 41
                                    },
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 131073,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 20,
                                    "end": 41
                                },
                                "isOptional": false,
                                "accessModifier": null,
                                "type": null,
                                "isReadOnly": true,
                                "initializer": null,
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 20,
                                "end": 41
                            },
                            {
                                "kind": 188,
                                "name": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 41,
                                    "end": 43
                                },
                                "isOptional": false,
                                "accessModifier": null,
                                "type": null,
                                "isReadOnly": false,
                                "initializer": null,
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 41,
                                "end": 43
                            }
                        ],
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 20,
                        "end": 43
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 18,
                    "end": 43
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 14,
                                "end": 15
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 14,
                            "end": 15
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 14,
                    "end": 15
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 43
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 74308,
                    "member": {
                        "kind": 196712,
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
                    "expression": {
                        "kind": 196712,
                        "text": "K",
                        "rawText": "K",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 49,
                        "end": 50
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 48,
                    "end": 51
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 46,
                "end": 51
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Mapped",
                    "rawText": "Mapped",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 61,
                    "end": 68
                },
                "type": {
                    "kind": 230,
                    "objectTypeMembers": {
                        "kind": 169,
                        "members": [],
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 75,
                        "end": 75
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 73,
                    "end": 75
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 69,
                                "end": 70
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 69,
                            "end": 70
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 69,
                    "end": 70
                },
                "flags": 16386,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 53,
                "end": 75
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65774,
                    "operator": "+",
                    "operand": {
                        "kind": 74308,
                        "member": {
                            "kind": 196712,
                            "text": "readonly",
                            "rawText": "readonly",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 77,
                            "end": 86
                        },
                        "expression": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "K",
                                "rawText": "K",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 89,
                                "end": 90
                            },
                            "operator": "in",
                            "right": {
                                "kind": 196712,
                                "text": "keyof",
                                "rawText": "keyof",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 93,
                                "end": 99
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 89,
                            "end": 99
                        },
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 86,
                        "end": 99
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 75,
                    "end": 99
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 75,
                "end": 99
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "T",
                    "rawText": "T",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 99,
                    "end": 101
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 99,
                "end": 101
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 74308,
                    "member": {
                        "kind": 196712,
                        "text": "T",
                        "rawText": "T",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 104,
                        "end": 106
                    },
                    "expression": {
                        "kind": 196712,
                        "text": "K",
                        "rawText": "K",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 107,
                        "end": 108
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 106,
                    "end": 109
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 104,
                "end": 109
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Mapped",
                    "rawText": "Mapped",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 119,
                    "end": 126
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "K",
                            "rawText": "K",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 135,
                            "end": 136
                        },
                        "constraint": {
                            "kind": 231,
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
                                    "start": 145,
                                    "end": 147
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 145,
                                "end": 149
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 139,
                            "end": 147
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 135,
                        "end": 147
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": true,
                    "type": {
                        "kind": 117,
                        "objectType": {
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
                                "start": 151,
                                "end": 153
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 151,
                            "end": 154
                        },
                        "indexType": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "K",
                                "rawText": "K",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 154,
                                "end": 155
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 154,
                            "end": 156
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 151,
                        "end": 160
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 131,
                    "end": 160
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 127,
                                "end": 128
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 127,
                            "end": 128
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 127,
                    "end": 128
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 111,
                "end": 160
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 160
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
    "end": 160
}
```

### Printed


```javascript

type Mapped<T> = {
    readonly [K in keyof];
    T;
};

T[K]

type Mapped<T> = {
};

+ readonly[K in keyof]

T

T[K]

type Mapped<T> = {
    [K in undefined T]?: T[K];
};

```

### Diagnostics


```javascript
✖ ']' expected. - start: 159, end: 0
✖ ';' expected. - start: 160, end: 0
✖ Declaration or statement expected - start: 161, end: 0
✖ Declaration or statement expected - start: 162, end: 0
✖ Declaration or statement expected - start: 170, end: 0

```

