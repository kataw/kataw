# Kataw parser test case

## Input

`````js
class C {
    public foo(x: any) { return x; }
    private x = 1;
}

interface I extends C {
    other(x: any): any;
}

class D2 implements I {
    public foo(x: any) { return x }
    private x = 3;
    other(x: any) { return x }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class C {\n    public foo(x: any) { return x; }\n    private x = 1;\n}\n\ninterface I extends C {\n    other(x: any): any;\n}\n\nclass D2 implements I {\n    public foo(x: any) { return x }\n    private x = 3;\n    other(x: any) { return x }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C",
                "rawText": "C",
                "flags": 0,
                "symbol": null,
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
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 24
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 25,
                                            "end": 26
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 27,
                                            "end": 31
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 25,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 32
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 41,
                                                "end": 43
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 44
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 44
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 46
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 9,
                                "end": 20
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 24,
                            "end": 46
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 46
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 58,
                            "end": 60
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 62,
                            "end": 64
                        },
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194485,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 46,
                            "end": 58
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 46,
                        "end": 65
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 67
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 67
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "I",
                "rawText": "I",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 78,
                "end": 80
            },
            "typeParameters": null,
            "heritageClauses": {
                "kind": 8294,
                "clauses": [
                    {
                        "kind": 8293,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "C",
                                "rawText": "C",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 88,
                                "end": 90
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 88,
                            "end": 92
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 88,
                        "end": 90
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 88,
                "end": 90
            },
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "other",
                            "rawText": "other",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 92,
                            "end": 102
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
                                        "start": 103,
                                        "end": 104
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202498,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 105,
                                        "end": 109
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 103,
                                    "end": 109
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 103,
                            "end": 109
                        },
                        "returnType": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 111,
                            "end": 115
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 92,
                        "end": 116
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 92,
                "end": 116
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 67,
            "end": 118
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "D2",
                "rawText": "D2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 125,
                "end": 128
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
                                "text": "I",
                                "rawText": "I",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 139,
                                "end": 141
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 139,
                            "end": 143
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 139,
                        "end": 141
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 139,
                "end": 141
            },
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
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 154,
                                "end": 158
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 159,
                                            "end": 160
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 161,
                                            "end": 165
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 159,
                                        "end": 165
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 159,
                                "end": 166
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 175,
                                                "end": 177
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 168,
                                            "end": 177
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 168,
                                    "end": 177
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 166,
                                "end": 179
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 143,
                                "end": 154
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 158,
                            "end": 179
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 143,
                        "end": 179
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 191,
                            "end": 193
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 3,
                            "rawText": "3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 195,
                            "end": 197
                        },
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194485,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 179,
                            "end": 191
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 179,
                        "end": 198
                    },
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
                                "text": "other",
                                "rawText": "other",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 198,
                                "end": 208
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 209,
                                            "end": 210
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 211,
                                            "end": 215
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 209,
                                        "end": 215
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 209,
                                "end": 216
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 225,
                                                "end": 227
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 218,
                                            "end": 227
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 218,
                                    "end": 227
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 216,
                                "end": 229
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 208,
                            "end": 229
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 198,
                        "end": 229
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 143,
                "end": 231
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 118,
            "end": 231
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
    "end": 231
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

