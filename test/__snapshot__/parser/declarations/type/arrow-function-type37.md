# Kataw parser test case

## Input

`````js
type a = (a[a & b[a|b|c|d|e]][c | d][(x) => T][-1][{...x}][]) => T;
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
                                            "kind": 268,
                                            "objectType": {
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
                                            },
                                            "indexType": {
                                                "kind": 137,
                                                "types": [
                                                    {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 18,
                                                            "end": 19
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 18,
                                                        "end": 19
                                                    },
                                                    {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 20,
                                                            "end": 21
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 20,
                                                        "end": 21
                                                    },
                                                    {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 96,
                                                            "start": 22,
                                                            "end": 23
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 22,
                                                        "end": 23
                                                    },
                                                    {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "d",
                                                            "rawText": "d",
                                                            "flags": 96,
                                                            "start": 24,
                                                            "end": 25
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 24,
                                                        "end": 25
                                                    },
                                                    {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "e",
                                                            "rawText": "e",
                                                            "flags": 96,
                                                            "start": 26,
                                                            "end": 27
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 26,
                                                        "end": 27
                                                    }
                                                ],
                                                "flags": 0,
                                                "start": 19,
                                                "end": 27
                                            },
                                            "flags": 0,
                                            "start": 18,
                                            "end": 29
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 13,
                                    "end": 28
                                },
                                "flags": 0,
                                "start": 12,
                                "end": 30
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
                                            "start": 30,
                                            "end": 31
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 30,
                                        "end": 31
                                    },
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 33,
                                            "end": 35
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 33,
                                        "end": 35
                                    }
                                ],
                                "flags": 0,
                                "start": 31,
                                "end": 35
                            },
                            "flags": 0,
                            "start": 30,
                            "end": 37
                        },
                        "flags": 0,
                        "start": 37,
                        "end": 37
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 8,
                    "end": 37
                },
                "flags": 0,
                "start": 8,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 40,
                    "end": 43
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 38,
                        "end": 39
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "T",
                    "rawText": "T",
                    "flags": 96,
                    "start": 43,
                    "end": 45
                },
                "flags": 32,
                "start": 37,
                "end": 45
            },
            "flags": 16,
            "start": 37,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 536871042,
                "member": {
                    "kind": 536871042,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 134318643,
                                        "flags": 64,
                                        "start": 47,
                                        "end": 48
                                    },
                                    "operand": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 48,
                                        "end": 49
                                    },
                                    "flags": 32,
                                    "start": 47,
                                    "end": 49
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 47,
                            "end": 49
                        },
                        "flags": 32,
                        "start": 46,
                        "end": 50
                    },
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 52,
                                        "end": 55
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 55,
                                        "end": 56
                                    },
                                    "flags": 32,
                                    "start": 52,
                                    "end": 56
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 52,
                            "end": 56
                        },
                        "flags": 48,
                        "start": 51,
                        "end": 57
                    },
                    "flags": 32,
                    "start": 46,
                    "end": 58
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 59,
                    "end": 59
                },
                "flags": 32,
                "start": 46,
                "end": 60
            },
            "flags": 16,
            "start": 46,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 64,
                "end": 66
            },
            "flags": 16,
            "start": 64,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b[a|b|c|d|e]][c | d][(x) => T][-1][{...x}][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 37, end: 38
✖ Expected a `;` - start: 45, end: 46
✖ An member access expression should take an argument. - start: 46, end: 60
✖ Identifier expected - start: 59, end: 60
✖ Expected a `;` - start: 60, end: 61
✖ Declaration or statement expected - start: 61, end: 64

```

