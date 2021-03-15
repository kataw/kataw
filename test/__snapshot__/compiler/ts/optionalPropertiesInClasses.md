# Kataw parser test case

## Input

`````js
interface ifoo {
@{x9}@x?:number;
@{x9}@y:number;
}

class C1 implements ifoo {
@{x9}@public y:number;
}

class C2 implements ifoo { // ERROR - still need 'y'
@{x9}@public x:number;
}

class C3 implements ifoo {
@{x9}@public x:number;
@{x9}@public y:number;
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface ifoo {\n\tx?:number;\n\ty:number;\n}\n\nclass C1 implements ifoo {\n\tpublic y:number;\n}\n\nclass C2 implements ifoo { // ERROR - still need 'y'\n\tpublic x:number;\n}\n\nclass C3 implements ifoo {\n\tpublic x:number;\n\tpublic y:number;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "ifoo",
                "rawText": "ifoo",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
                "end": 14
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 19
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 21,
                            "end": 27
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 16,
                        "end": 28
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "y",
                            "rawText": "y",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 31
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 32,
                            "end": 38
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 28,
                        "end": 39
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 16,
                "end": 39
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 41
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C1",
                "rawText": "C1",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 48,
                "end": 51
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": {
                "kind": 107,
                "clauses": [
                    {
                        "kind": 106,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "ifoo",
                                "rawText": "ifoo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 67
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 62,
                            "end": 69
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 62,
                        "end": 67
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 62,
                "end": 67
            },
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 77,
                            "end": 79
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 80,
                            "end": 86
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 69,
                            "end": 77
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 69,
                        "end": 87
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 69,
                "end": 89
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 41,
            "end": 89
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C2",
                "rawText": "C2",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 96,
                "end": 99
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": {
                "kind": 107,
                "clauses": [
                    {
                        "kind": 106,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "ifoo",
                                "rawText": "ifoo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 110,
                                "end": 115
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 110,
                            "end": 117
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 110,
                        "end": 115
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 110,
                "end": 115
            },
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 151,
                            "end": 153
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 154,
                            "end": 160
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 117,
                            "end": 151
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 117,
                        "end": 161
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 117,
                "end": 163
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 89,
            "end": 163
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C3",
                "rawText": "C3",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 170,
                "end": 173
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": {
                "kind": 107,
                "clauses": [
                    {
                        "kind": 106,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "ifoo",
                                "rawText": "ifoo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 184,
                                "end": 189
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 184,
                            "end": 191
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 184,
                        "end": 189
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 184,
                "end": 189
            },
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 199,
                            "end": 201
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 202,
                            "end": 208
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 191,
                            "end": 199
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 191,
                        "end": 209
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 217,
                            "end": 219
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 220,
                            "end": 226
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 209,
                            "end": 217
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 209,
                        "end": 227
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 191,
                "end": 229
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 163,
            "end": 229
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 229
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

