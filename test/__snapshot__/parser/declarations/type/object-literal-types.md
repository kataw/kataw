# Kataw parser test case

## Input

`````js
type U = {};
type V = {};
type T1 = { ...U, };
type T2 = { ...U, ...V };
type T3 = { p: V, ...U };
type T4 = { ...U, p: V, };
type T5 = { ...{}|{ p: V, }};
type T6 = { foo(): number }
type T7 = { foo: () => number }
type T8 = { [string]: U };
type T9 = { [param: string]: U };
//type T10 = { ... };
//type T11 = { a: { b: { c: {...}, ... }, ... } }
//type T12 = { foo: number, ... };
//type T13 = { foo: number, bar: string, ... };
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
                "text": "U",
                "rawText": "U",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 12,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "V",
                "rawText": "V",
                "flags": 96,
                "start": 17,
                "end": 19
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 21,
                "end": 24
            },
            "flags": 16,
            "start": 12,
            "end": 25
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 25,
                "end": 33
            },
            "name": {
                "kind": 134299649,
                "text": "T1",
                "rawText": "T1",
                "flags": 96,
                "start": 30,
                "end": 33
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 247,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 37,
                            "end": 41
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 96,
                                "start": 41,
                                "end": 42
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 41,
                            "end": 42
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 37,
                        "end": 42
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 35,
                "end": 45
            },
            "flags": 16,
            "start": 25,
            "end": 46
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 46,
                "end": 54
            },
            "name": {
                "kind": 134299649,
                "text": "T2",
                "rawText": "T2",
                "flags": 96,
                "start": 51,
                "end": 54
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 247,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 58,
                            "end": 62
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 96,
                                "start": 62,
                                "end": 63
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 62,
                            "end": 63
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 58,
                        "end": 63
                    },
                    {
                        "kind": 247,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 64,
                            "end": 68
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "V",
                                "rawText": "V",
                                "flags": 96,
                                "start": 68,
                                "end": 69
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 68,
                            "end": 69
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 64,
                        "end": 69
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 56,
                "end": 71
            },
            "flags": 16,
            "start": 46,
            "end": 72
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 72,
                "end": 80
            },
            "name": {
                "kind": 134299649,
                "text": "T3",
                "rawText": "T3",
                "flags": 96,
                "start": 77,
                "end": 80
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "p",
                            "rawText": "p",
                            "flags": 96,
                            "start": 84,
                            "end": 86
                        },
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "V",
                                "rawText": "V",
                                "flags": 96,
                                "start": 87,
                                "end": 89
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 87,
                            "end": 89
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 84,
                        "end": 89
                    },
                    {
                        "kind": 247,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 90,
                            "end": 94
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 96,
                                "start": 94,
                                "end": 95
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 94,
                            "end": 95
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 90,
                        "end": 95
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 82,
                "end": 97
            },
            "flags": 16,
            "start": 72,
            "end": 98
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 98,
                "end": 106
            },
            "name": {
                "kind": 134299649,
                "text": "T4",
                "rawText": "T4",
                "flags": 96,
                "start": 103,
                "end": 106
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 247,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 110,
                            "end": 114
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 96,
                                "start": 114,
                                "end": 115
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 114,
                            "end": 115
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 110,
                        "end": 115
                    },
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "p",
                            "rawText": "p",
                            "flags": 96,
                            "start": 116,
                            "end": 118
                        },
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "V",
                                "rawText": "V",
                                "flags": 96,
                                "start": 119,
                                "end": 121
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 119,
                            "end": 121
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 116,
                        "end": 121
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 108,
                "end": 124
            },
            "flags": 16,
            "start": 98,
            "end": 125
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 125,
                "end": 133
            },
            "name": {
                "kind": 134299649,
                "text": "T5",
                "rawText": "T5",
                "flags": 96,
                "start": 130,
                "end": 133
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 247,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 137,
                            "end": 141
                        },
                        "type": {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 134234353,
                                    "properties": [],
                                    "indexers": [],
                                    "callProperties": [],
                                    "internalSlots": [],
                                    "flags": 0,
                                    "start": 141,
                                    "end": 143
                                },
                                {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "p",
                                                "rawText": "p",
                                                "flags": 96,
                                                "start": 145,
                                                "end": 147
                                            },
                                            "value": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "V",
                                                    "rawText": "V",
                                                    "flags": 96,
                                                    "start": 148,
                                                    "end": 150
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 148,
                                                "end": 150
                                            },
                                            "optionalToken": null,
                                            "staticToken": null,
                                            "flags": 0,
                                            "start": 145,
                                            "end": 150
                                        }
                                    ],
                                    "indexers": [],
                                    "callProperties": [],
                                    "internalSlots": [],
                                    "flags": 0,
                                    "start": 144,
                                    "end": 153
                                }
                            ],
                            "flags": 0,
                            "start": 143,
                            "end": 153
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 137,
                        "end": 153
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 135,
                "end": 154
            },
            "flags": 16,
            "start": 125,
            "end": 155
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 155,
                "end": 163
            },
            "name": {
                "kind": 134299649,
                "text": "T6",
                "rawText": "T6",
                "flags": 96,
                "start": 160,
                "end": 163
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 167,
                            "end": 171
                        },
                        "value": {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 172,
                                "end": 172
                            },
                            "returnType": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 174,
                                "end": 181
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 171,
                            "end": 181
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 167,
                        "end": 181
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 165,
                "end": 183
            },
            "flags": 16,
            "start": 155,
            "end": 183
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 183,
                "end": 191
            },
            "name": {
                "kind": 134299649,
                "text": "T7",
                "rawText": "T7",
                "flags": 96,
                "start": 188,
                "end": 191
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 195,
                            "end": 199
                        },
                        "value": {
                            "kind": 261,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 203,
                                "end": 206
                            },
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 202,
                                "end": 202
                            },
                            "returnType": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 206,
                                "end": 213
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 200,
                            "end": 213
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 195,
                        "end": 213
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 193,
                "end": 215
            },
            "flags": 16,
            "start": 183,
            "end": 215
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 215,
                "end": 223
            },
            "name": {
                "kind": 134299649,
                "text": "T8",
                "rawText": "T8",
                "flags": 96,
                "start": 220,
                "end": 223
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [],
                "indexers": [
                    {
                        "kind": 195,
                        "name": null,
                        "key": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 229,
                            "end": 235
                        },
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 96,
                                "start": 237,
                                "end": 239
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 237,
                            "end": 239
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 227,
                        "end": 239
                    }
                ],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 225,
                "end": 241
            },
            "flags": 16,
            "start": 215,
            "end": 242
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 242,
                "end": 250
            },
            "name": {
                "kind": 134299649,
                "text": "T9",
                "rawText": "T9",
                "flags": 96,
                "start": 247,
                "end": 250
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [],
                "indexers": [
                    {
                        "kind": 195,
                        "name": {
                            "kind": 134299649,
                            "text": "param",
                            "rawText": "param",
                            "flags": 96,
                            "start": 256,
                            "end": 261
                        },
                        "key": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 262,
                            "end": 269
                        },
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 96,
                                "start": 271,
                                "end": 273
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 271,
                            "end": 273
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 254,
                        "end": 273
                    }
                ],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 252,
                "end": 275
            },
            "flags": 16,
            "start": 242,
            "end": 276
        }
    ],
    "isModule": false,
    "source": "type U = {};\ntype V = {};\ntype T1 = { ...U, };\ntype T2 = { ...U, ...V };\ntype T3 = { p: V, ...U };\ntype T4 = { ...U, p: V, };\ntype T5 = { ...{}|{ p: V, }};\ntype T6 = { foo(): number }\ntype T7 = { foo: () => number }\ntype T8 = { [string]: U };\ntype T9 = { [param: string]: U };\n//type T10 = { ... };\n//type T11 = { a: { b: { c: {...}, ... }, ... } }\n//type T12 = { foo: number, ... };\n//type T13 = { foo: number, bar: string, ... };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 431
}
```

### Printed

```javascript












```

### Diagnostics

```javascript
✔ No errors
```

