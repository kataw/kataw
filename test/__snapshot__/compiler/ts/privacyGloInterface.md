# Kataw parser test case

## Input

`````js

class C5_public {
    private f1() {
    }
}


interface C7_public {
    (c1: C5_public);
    (): C5_public;

    new (c1: C5_public);
    new (): C5_public;

    [c: number]: C5_public;

    x: C5_public;

    a?: C5_public;

    f1(a1: C5_public);
    f3(): C5_public;
}


`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\nclass C5_public {\n    private f1() {\n    }\n}\n\n\ninterface C7_public {\n    (c1: C5_public);\n    (): C5_public;\n\n    new (c1: C5_public);\n    new (): C5_public;\n\n    [c: number]: C5_public;\n\n    x: C5_public;\n\n    a?: C5_public;\n\n    f1(a1: C5_public);\n    f3(): C5_public;\n}\n\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C5_public",
                    "rawText": "C5_public",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 6,
                    "end": 16
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "f1",
                                    "rawText": "f1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 33
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 35
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 37
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 43
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 18,
                                    "end": 30
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 33,
                                "end": 43
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 18,
                            "end": 43
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 18,
                    "end": 45
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 45
            },
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "C7_public",
                    "rawText": "C7_public",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 67
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8236,
                            "isReadOnly": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "c1",
                                            "rawText": "c1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 75,
                                            "end": 77
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "C5_public",
                                                "rawText": "C5_public",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 78,
                                                "end": 88
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 78,
                                            "end": 89
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 75,
                                        "end": 88
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 75,
                                "end": 88
                            },
                            "returnType": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 69,
                            "end": 90
                        },
                        {
                            "kind": 8236,
                            "isReadOnly": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 96,
                                "end": 96
                            },
                            "returnType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "C5_public",
                                    "rawText": "C5_public",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 98,
                                    "end": 108
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 98,
                                "end": 109
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 90,
                            "end": 109
                        },
                        {
                            "kind": 8250,
                            "isReadOnly": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "c1",
                                            "rawText": "c1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 120,
                                            "end": 122
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "C5_public",
                                                "rawText": "C5_public",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 123,
                                                "end": 133
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 123,
                                            "end": 134
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 120,
                                        "end": 133
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 120,
                                "end": 133
                            },
                            "returnType": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 118,
                            "end": 135
                        },
                        {
                            "kind": 8250,
                            "isReadOnly": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 145,
                                "end": 145
                            },
                            "returnType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "C5_public",
                                    "rawText": "C5_public",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 147,
                                    "end": 157
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 147,
                                "end": 158
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 143,
                            "end": 158
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
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 165,
                                            "end": 166
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 167,
                                            "end": 174
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 165,
                                        "end": 174
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 165,
                                "end": 174
                            },
                            "returnType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "C5_public",
                                    "rawText": "C5_public",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 176,
                                    "end": 186
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 176,
                                "end": 187
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 165,
                            "end": 187
                        },
                        {
                            "kind": 8380,
                            "name": {
                                "kind": 196711,
                                "text": "x",
                                "rawText": "x",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 187,
                                "end": 194
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "C5_public",
                                    "rawText": "C5_public",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 195,
                                    "end": 205
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 195,
                                "end": 206
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 187,
                            "end": 206
                        },
                        {
                            "kind": 8380,
                            "name": {
                                "kind": 196711,
                                "text": "a",
                                "rawText": "a",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 206,
                                "end": 213
                            },
                            "isOptional": true,
                            "accessModifier": null,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "C5_public",
                                    "rawText": "C5_public",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 215,
                                    "end": 225
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 215,
                                "end": 226
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 206,
                            "end": 226
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "f1",
                                "rawText": "f1",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 226,
                                "end": 234
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a1",
                                            "rawText": "a1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 235,
                                            "end": 237
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "C5_public",
                                                "rawText": "C5_public",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 238,
                                                "end": 248
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 238,
                                            "end": 249
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 235,
                                        "end": 248
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 235,
                                "end": 248
                            },
                            "returnType": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 226,
                            "end": 250
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "f3",
                                "rawText": "f3",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 250,
                                "end": 257
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 258,
                                "end": 258
                            },
                            "returnType": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "C5_public",
                                    "rawText": "C5_public",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 260,
                                    "end": 270
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 260,
                                "end": 271
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 250,
                            "end": 271
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 69,
                    "end": 271
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 45,
                "end": 273
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 273
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 275
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

