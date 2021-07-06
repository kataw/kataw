# Kataw parser test case

## Input

`````js
async function f() {
  const admins = (await(db.select('*').from('admins').leftJoin('bla').where('id', 'in', [1,2,3,4]))).map(({id, name})=>({id, name}))
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 37757004,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 28
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "admins",
                                            "rawText": "admins",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 35
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 39,
                                                            "end": 44
                                                        },
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 129,
                                                                                    "member": {
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 129,
                                                                                            "member": {
                                                                                                "kind": 134299649,
                                                                                                "text": "db",
                                                                                                "rawText": "db",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 45,
                                                                                                "end": 47
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 134299649,
                                                                                                "text": "select",
                                                                                                "rawText": "select",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 48,
                                                                                                "end": 54
                                                                                            },
                                                                                            "flags": 96,
                                                                                            "transformFlags": 2,
                                                                                            "start": 44,
                                                                                            "end": 54
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 201392131,
                                                                                                    "text": "*",
                                                                                                    "rawText": "'*'",
                                                                                                    "flags": 4194400,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 55,
                                                                                                    "end": 58
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 55,
                                                                                            "end": 58
                                                                                        },
                                                                                        "flags": 268435488,
                                                                                        "transformFlags": 1,
                                                                                        "start": 44,
                                                                                        "end": 59
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "from",
                                                                                        "rawText": "from",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 60,
                                                                                        "end": 64
                                                                                    },
                                                                                    "flags": 268435488,
                                                                                    "transformFlags": 2,
                                                                                    "start": 44,
                                                                                    "end": 64
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 201392131,
                                                                                            "text": "admins",
                                                                                            "rawText": "'admins'",
                                                                                            "flags": 4194400,
                                                                                            "transformFlags": 0,
                                                                                            "start": 65,
                                                                                            "end": 73
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 65,
                                                                                    "end": 73
                                                                                },
                                                                                "flags": 268435488,
                                                                                "transformFlags": 1,
                                                                                "start": 44,
                                                                                "end": 74
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "leftJoin",
                                                                                "rawText": "leftJoin",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 75,
                                                                                "end": 83
                                                                            },
                                                                            "flags": 268435488,
                                                                            "transformFlags": 2,
                                                                            "start": 44,
                                                                            "end": 83
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 201392131,
                                                                                    "text": "bla",
                                                                                    "rawText": "'bla'",
                                                                                    "flags": 4194400,
                                                                                    "transformFlags": 0,
                                                                                    "start": 84,
                                                                                    "end": 89
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 84,
                                                                            "end": 89
                                                                        },
                                                                        "flags": 268435488,
                                                                        "transformFlags": 1,
                                                                        "start": 44,
                                                                        "end": 90
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "where",
                                                                        "rawText": "where",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 91,
                                                                        "end": 96
                                                                    },
                                                                    "flags": 268435488,
                                                                    "transformFlags": 2,
                                                                    "start": 44,
                                                                    "end": 96
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 201392131,
                                                                            "text": "id",
                                                                            "rawText": "'id'",
                                                                            "flags": 4194400,
                                                                            "transformFlags": 0,
                                                                            "start": 97,
                                                                            "end": 101
                                                                        },
                                                                        {
                                                                            "kind": 201392131,
                                                                            "text": "in",
                                                                            "rawText": "'in'",
                                                                            "flags": 4194400,
                                                                            "transformFlags": 0,
                                                                            "start": 102,
                                                                            "end": 107
                                                                        },
                                                                        {
                                                                            "kind": 119,
                                                                            "elementList": {
                                                                                "kind": 270,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 201392130,
                                                                                        "text": 1,
                                                                                        "rawText": "1",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 110,
                                                                                        "end": 111
                                                                                    },
                                                                                    {
                                                                                        "kind": 201392130,
                                                                                        "text": 2,
                                                                                        "rawText": "2",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 112,
                                                                                        "end": 113
                                                                                    },
                                                                                    {
                                                                                        "kind": 201392130,
                                                                                        "text": 3,
                                                                                        "rawText": "3",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 114,
                                                                                        "end": 115
                                                                                    },
                                                                                    {
                                                                                        "kind": 201392130,
                                                                                        "text": 4,
                                                                                        "rawText": "4",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 116,
                                                                                        "end": 117
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 110,
                                                                                "end": 117
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 8,
                                                                            "start": 108,
                                                                            "end": 118
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 97,
                                                                    "end": 118
                                                                },
                                                                "flags": 268435488,
                                                                "transformFlags": 1,
                                                                "start": 44,
                                                                "end": 119
                                                            },
                                                            "flags": 44,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 120
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 39,
                                                        "end": 120
                                                    },
                                                    "flags": 37,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 121
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "map",
                                                    "rawText": "map",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 122,
                                                    "end": 125
                                                },
                                                "flags": 37,
                                                "transformFlags": 2,
                                                "start": 37,
                                                "end": 125
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 271,
                                                        "asyncKeyword": null,
                                                        "typeParameters": null,
                                                        "arrowPatameterList": {
                                                            "kind": 342,
                                                            "parameters": [
                                                                {
                                                                    "kind": 212,
                                                                    "propertyList": {
                                                                        "kind": 213,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "id",
                                                                                "rawText": "id",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 128,
                                                                                "end": 130
                                                                            },
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "name",
                                                                                "rawText": "name",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 131,
                                                                                "end": 136
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 128,
                                                                        "end": 136
                                                                    },
                                                                    "flags": 48,
                                                                    "transformFlags": 0,
                                                                    "start": 127,
                                                                    "end": 137
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 34,
                                                            "transformFlags": 0,
                                                            "start": 127,
                                                            "end": 138
                                                        },
                                                        "returnType": null,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 138,
                                                            "end": 140
                                                        },
                                                        "contents": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 220,
                                                                "propertyList": {
                                                                    "kind": 218,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "id",
                                                                            "rawText": "id",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 142,
                                                                            "end": 144
                                                                        },
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "name",
                                                                            "rawText": "name",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 145,
                                                                            "end": 150
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 16,
                                                                    "transformFlags": 0,
                                                                    "start": 142,
                                                                    "end": 150
                                                                },
                                                                "flags": 48,
                                                                "transformFlags": 8,
                                                                "start": 141,
                                                                "end": 151
                                                            },
                                                            "flags": 140,
                                                            "transformFlags": 0,
                                                            "start": 34,
                                                            "end": 152
                                                        },
                                                        "flags": 34,
                                                        "transformFlags": 0,
                                                        "start": 126,
                                                        "end": 152
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 126,
                                                "end": 152
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 37,
                                            "end": 153
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 28,
                                        "end": 153
                                    }
                                ],
                                "flags": 16777232,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 153
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 153
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 153
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 155
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 155
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  const admins = (await(db.select('*').from('admins').leftJoin('bla').where('id', 'in', [1,2,3,4]))).map(({id, name})=>({id, name}))\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 155
}
```

### Printed

```javascript
async function f() {
  const admins = (
      await (
        db.select("'*'").from("'admins'").leftJoin("'bla'").where(
          "'id'",
          "'in'",
          [1, 2, 3, 4]
        )
      )
    ).map(({ id, name }) => ({ id, name }));
}
```

### Diagnostics

```javascript
✔ No errors
```

