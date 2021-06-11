# Kataw parser test case

## Input

`````js
type a = (a[a & b][c | d][{a():string}][][][(a[a & b][c | d][{a():string}][][][]) => T]) => T;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 260,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 136,
                        "type": {
                            "kind": 136,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 268,
                                    "objectType": {
                                        "kind": 268,
                                        "objectType": {
                                            "kind": 268,
                                            "objectType": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "indexType": {
                                                "kind": 138,
                                                "types": [
                                                    {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 12,
                                                            "end": 13
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 15,
                                                            "end": 17
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 15,
                                                        "end": 17
                                                    }
                                                ],
                                                "flags": 0,
                                                "start": 13,
                                                "end": 17
                                            },
                                            "flags": 0,
                                            "start": 12,
                                            "end": 19
                                        },
                                        "indexType": {
                                            "kind": 137,
                                            "types": [
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 19,
                                                        "end": 20
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 19,
                                                    "end": 20
                                                },
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "d",
                                                        "rawText": "d",
                                                        "flags": 96,
                                                        "start": 22,
                                                        "end": 24
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 22,
                                                    "end": 24
                                                }
                                            ],
                                            "flags": 0,
                                            "start": 20,
                                            "end": 24
                                        },
                                        "flags": 0,
                                        "start": 19,
                                        "end": 26
                                    },
                                    "indexType": {
                                        "kind": 134234353,
                                        "properties": [
                                            {
                                                "kind": 193,
                                                "protoKeyword": null,
                                                "staticToken": null,
                                                "getKeyword": null,
                                                "setKeyword": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 27,
                                                    "end": 28
                                                },
                                                "optionalToken": null,
                                                "value": {
                                                    "kind": 148,
                                                    "parameters": {
                                                        "kind": 208,
                                                        "parameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 29,
                                                        "end": 29
                                                    },
                                                    "returnType": {
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "start": 31,
                                                        "end": 37
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 28,
                                                    "end": 37
                                                },
                                                "flags": 0,
                                                "start": 27,
                                                "end": 37
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 26,
                                        "end": 38
                                    },
                                    "flags": 0,
                                    "start": 26,
                                    "end": 40
                                },
                                "flags": 0,
                                "start": 40,
                                "end": 41
                            },
                            "flags": 0,
                            "start": 42,
                            "end": 43
                        },
                        "flags": 0,
                        "start": 44,
                        "end": 44
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 8,
                    "end": 44
                },
                "flags": 0,
                "start": 8,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 536871042,
                    "member": {
                        "kind": 536871042,
                        "member": {
                            "kind": 536871042,
                            "member": {
                                "kind": 536871042,
                                "member": {
                                    "kind": 536871042,
                                    "member": {
                                        "kind": 536871042,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 45,
                                            "end": 46
                                        },
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 47,
                                                "end": 48
                                            },
                                            "operatorToken": {
                                                "kind": 134252103,
                                                "flags": 64,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 50,
                                                "end": 52
                                            },
                                            "flags": 32,
                                            "start": 47,
                                            "end": 52
                                        },
                                        "flags": 32,
                                        "start": 44,
                                        "end": 53
                                    },
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 54,
                                            "end": 55
                                        },
                                        "operatorToken": {
                                            "kind": 134251592,
                                            "flags": 64,
                                            "start": 55,
                                            "end": 57
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 57,
                                            "end": 59
                                        },
                                        "flags": 32,
                                        "start": 54,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "start": 44,
                                    "end": 60
                                },
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 257,
                                                "asyncKeyword": null,
                                                "generatorToken": null,
                                                "getKeyword": null,
                                                "setKeyword": null,
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 62,
                                                        "end": 63
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 64,
                                                        "end": 65
                                                    },
                                                    "returnType": {
                                                        "kind": 139,
                                                        "type": {
                                                            "kind": 134234347,
                                                            "flags": 64,
                                                            "start": 66,
                                                            "end": 72
                                                        },
                                                        "flags": 0,
                                                        "start": 65,
                                                        "end": 72
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 72,
                                                            "end": 72
                                                        },
                                                        "flags": 32,
                                                        "start": 72,
                                                        "end": 72
                                                    },
                                                    "flags": 32,
                                                    "start": 63,
                                                    "end": 72
                                                },
                                                "flags": 32,
                                                "start": 62,
                                                "end": 72
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 62,
                                        "end": 72
                                    },
                                    "flags": 48,
                                    "start": 61,
                                    "end": 73
                                },
                                "flags": 32,
                                "start": 44,
                                "end": 74
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 75,
                                "end": 75
                            },
                            "flags": 32,
                            "start": 44,
                            "end": 76
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 77,
                            "end": 77
                        },
                        "flags": 32,
                        "start": 44,
                        "end": 78
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 79,
                        "end": 79
                    },
                    "flags": 32,
                    "start": 44,
                    "end": 80
                },
                "flags": 32,
                "start": 44,
                "end": 81
            },
            "flags": 16,
            "start": 44,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 84,
                "end": 86
            },
            "flags": 16,
            "start": 84,
            "end": 86
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 91,
                "end": 93
            },
            "flags": 16,
            "start": 91,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b][c | d][{a():string}][][][(a[a & b][c | d][{a():string}][][][]) => T]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 44, end: 45
✖ Missing an opening brace - '{ - start: 72, end: 73
✖ An member access expression should take an argument. - start: 44, end: 76
✖ Identifier expected - start: 75, end: 76
✖ An member access expression should take an argument. - start: 44, end: 78
✖ Identifier expected - start: 77, end: 78
✖ An member access expression should take an argument. - start: 44, end: 80
✖ Identifier expected - start: 79, end: 80
✖ Expected a `;` - start: 81, end: 84
✖ Expected a `;` - start: 86, end: 87
✖ Declaration or statement expected - start: 87, end: 88
✖ Declaration or statement expected - start: 88, end: 91

```

