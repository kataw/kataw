# Kataw parser test case

## Input

`````js
function foo1<T extends U, U>(t: T, u: U) { }
foo1<string, number>('hm', 1); // no error

function foo2<T, U extends T>(t: T, u: U) { }
foo2<number, string>(1, 'hm'); // error

`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function foo1<T extends U, U>(t: T, u: U) { }\nfoo1<string, number>('hm', 1); // no error\n\nfunction foo2<T, U extends T>(t: T, u: U) { }\nfoo2<number, string>(1, 'hm'); // error\n",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo1",
                "rawText": "foo1",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 8,
                "end": 13
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "t",
                            "rawText": "t",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 30,
                            "end": 31
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 34
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 32,
                            "end": 35
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 30,
                        "end": 34
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "u",
                            "rawText": "u",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 35,
                            "end": 37
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 40
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 38,
                            "end": 41
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 35,
                        "end": 40
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 30,
                "end": 41
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 43
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 41,
                "end": 45
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 15
                        },
                        "constraint": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 25
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 23,
                            "end": 26
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 14,
                        "end": 25
                    },
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "U",
                            "rawText": "U",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 28
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 26,
                        "end": 28
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 14,
                "end": 28
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 256,
            "start": 0,
            "end": 45
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "foo1",
                    "rawText": "foo1",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 50
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 51,
                            "end": 57
                        },
                        {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 58,
                            "end": 65
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 51,
                    "end": 66
                },
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261583,
                            "text": "hm",
                            "rawText": "hm",
                            "flags": 33554432,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 71
                        },
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 72,
                            "end": 74
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "intersects": false,
                    "start": 67,
                    "end": 74
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 50,
                "end": 75
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 45,
            "end": 76
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo2",
                "rawText": "foo2",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 98,
                "end": 103
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "t",
                            "rawText": "t",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 120,
                            "end": 121
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 122,
                                "end": 124
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 122,
                            "end": 125
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 120,
                        "end": 124
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "u",
                            "rawText": "u",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 125,
                            "end": 127
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 128,
                                "end": 130
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 128,
                            "end": 131
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 125,
                        "end": 130
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 120,
                "end": 131
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 133,
                    "end": 133
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 131,
                "end": 135
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 104,
                            "end": 105
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 104,
                        "end": 105
                    },
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "U",
                            "rawText": "U",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 106,
                            "end": 108
                        },
                        "constraint": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 116,
                                "end": 118
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 116,
                            "end": 119
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 106,
                        "end": 118
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 104,
                "end": 118
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 256,
            "start": 76,
            "end": 135
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "foo2",
                    "rawText": "foo2",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 135,
                    "end": 140
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 141,
                            "end": 147
                        },
                        {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 148,
                            "end": 155
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 141,
                    "end": 156
                },
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
                            "start": 157,
                            "end": 158
                        },
                        {
                            "kind": 4261583,
                            "text": "hm",
                            "rawText": "hm",
                            "flags": 33554432,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 159,
                            "end": 164
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "intersects": false,
                    "start": 157,
                    "end": 164
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 140,
                "end": 165
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 135,
            "end": 166
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
    "end": 176
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

