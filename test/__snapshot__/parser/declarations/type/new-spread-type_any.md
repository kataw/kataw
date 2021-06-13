# Kataw parser test case

## Input

`````js
type O1 = {...any};
var o1: O1 = (0: mixed); // ok
(o1: empty); // ok

type O2 = {...Object};
var o2: O2 = (0: mixed); // ok
(o2: empty); // ok

declare var Base: any;
declare class Derived extends Base {}
type O3 = {...Derived};
var o3: O3 = (0: mixed); // ok
(o3: empty) // ok
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
                "end": 7
            },
            "name": {
                "kind": 134299649,
                "text": "O1",
                "rawText": "O1",
                "flags": 96,
                "start": 4,
                "end": 7
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 7,
                "end": 9
            },
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 247,
                        "protoKeyword": null,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 11,
                            "end": 14
                        },
                        "type": {
                            "kind": 134234252,
                            "flags": 64,
                            "start": 14,
                            "end": 17
                        },
                        "staticToken": null,
                        "flags": 32,
                        "start": 11,
                        "end": 17
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 9,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 19
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 19,
                "end": 23
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "o1",
                            "rawText": "o1",
                            "flags": 96,
                            "start": 23,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "O1",
                                    "rawText": "O1",
                                    "flags": 96,
                                    "start": 27,
                                    "end": 30
                                },
                                "typeParameters": null,
                                "flags": 32,
                                "start": 27,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 26,
                            "end": 30
                        },
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 34,
                                "end": 35
                            },
                            "flags": 32,
                            "start": 32,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 23,
                        "end": 35
                    }
                ],
                "flags": 16,
                "start": 23,
                "end": 35
            },
            "flags": 16,
            "start": 19,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "mixed",
                "rawText": "mixed",
                "flags": 96,
                "start": 36,
                "end": 42
            },
            "flags": 16,
            "start": 36,
            "end": 42
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 43,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 281,
                    "ellipsisToken": null,
                    "left": {
                        "kind": 134299649,
                        "text": "o1",
                        "rawText": "o1",
                        "flags": 96,
                        "start": 52,
                        "end": 54
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "empty",
                                "rawText": "empty",
                                "flags": 96,
                                "start": 55,
                                "end": 61
                            },
                            "typeParameters": null,
                            "flags": 32,
                            "start": 55,
                            "end": 61
                        },
                        "flags": 32,
                        "start": 54,
                        "end": 61
                    },
                    "right": null,
                    "flags": 32,
                    "start": 44,
                    "end": 61
                },
                "flags": 32,
                "start": 44,
                "end": 62
            },
            "flags": 16,
            "start": 44,
            "end": 63
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 63,
                "end": 78
            },
            "name": {
                "kind": 134299649,
                "text": "O2",
                "rawText": "O2",
                "flags": 96,
                "start": 75,
                "end": 78
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 78,
                "end": 80
            },
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 247,
                        "protoKeyword": null,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 82,
                            "end": 85
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "Object",
                                "rawText": "Object",
                                "flags": 96,
                                "start": 85,
                                "end": 91
                            },
                            "typeParameters": null,
                            "flags": 32,
                            "start": 85,
                            "end": 91
                        },
                        "staticToken": null,
                        "flags": 32,
                        "start": 82,
                        "end": 91
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 80,
                "end": 92
            },
            "flags": 17,
            "start": 63,
            "end": 93
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 93,
                "end": 97
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "o2",
                            "rawText": "o2",
                            "flags": 96,
                            "start": 97,
                            "end": 100
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "O2",
                                    "rawText": "O2",
                                    "flags": 96,
                                    "start": 101,
                                    "end": 104
                                },
                                "typeParameters": null,
                                "flags": 32,
                                "start": 101,
                                "end": 104
                            },
                            "flags": 32,
                            "start": 100,
                            "end": 104
                        },
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 108,
                                "end": 109
                            },
                            "flags": 32,
                            "start": 106,
                            "end": 109
                        },
                        "flags": 16,
                        "start": 97,
                        "end": 109
                    }
                ],
                "flags": 16,
                "start": 97,
                "end": 109
            },
            "flags": 16,
            "start": 93,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "mixed",
                "rawText": "mixed",
                "flags": 96,
                "start": 110,
                "end": 116
            },
            "flags": 16,
            "start": 110,
            "end": 116
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 117,
            "end": 118
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 281,
                    "ellipsisToken": null,
                    "left": {
                        "kind": 134299649,
                        "text": "o2",
                        "rawText": "o2",
                        "flags": 96,
                        "start": 126,
                        "end": 128
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "empty",
                                "rawText": "empty",
                                "flags": 96,
                                "start": 129,
                                "end": 135
                            },
                            "typeParameters": null,
                            "flags": 32,
                            "start": 129,
                            "end": 135
                        },
                        "flags": 32,
                        "start": 128,
                        "end": 135
                    },
                    "right": null,
                    "flags": 32,
                    "start": 118,
                    "end": 135
                },
                "flags": 32,
                "start": 118,
                "end": 136
            },
            "flags": 16,
            "start": 118,
            "end": 137
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 137,
                "end": 152
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 152,
                "end": 156
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "Base",
                            "rawText": "Base",
                            "flags": 96,
                            "start": 156,
                            "end": 161
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234252,
                                "flags": 64,
                                "start": 162,
                                "end": 166
                            },
                            "flags": 32,
                            "start": 161,
                            "end": 166
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 156,
                        "end": 166
                    }
                ],
                "flags": 16,
                "start": 156,
                "end": 166
            },
            "flags": 4112,
            "start": 152,
            "end": 167
        },
        {
            "kind": 178,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 167,
                "end": 175
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 167,
                "end": 181
            },
            "name": {
                "kind": 134299649,
                "text": "Derived",
                "rawText": "Derived",
                "flags": 96,
                "start": 181,
                "end": 189
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 189,
                        "end": 197
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Base",
                        "rawText": "Base",
                        "flags": 96,
                        "start": 197,
                        "end": 202
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 197,
                    "end": 202
                },
                "body": {
                    "kind": 134234353,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 202,
                    "end": 205
                },
                "flags": 4128,
                "start": 189,
                "end": 205
            },
            "flags": 16,
            "start": 167,
            "end": 205
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 205,
                "end": 213
            },
            "name": {
                "kind": 134299649,
                "text": "O3",
                "rawText": "O3",
                "flags": 96,
                "start": 210,
                "end": 213
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 213,
                "end": 215
            },
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 247,
                        "protoKeyword": null,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 217,
                            "end": 220
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "Derived",
                                "rawText": "Derived",
                                "flags": 96,
                                "start": 220,
                                "end": 227
                            },
                            "typeParameters": null,
                            "flags": 32,
                            "start": 220,
                            "end": 227
                        },
                        "staticToken": null,
                        "flags": 32,
                        "start": 217,
                        "end": 227
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 215,
                "end": 228
            },
            "flags": 17,
            "start": 205,
            "end": 229
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 229,
                "end": 233
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "o3",
                            "rawText": "o3",
                            "flags": 96,
                            "start": 233,
                            "end": 236
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "O3",
                                    "rawText": "O3",
                                    "flags": 96,
                                    "start": 237,
                                    "end": 240
                                },
                                "typeParameters": null,
                                "flags": 32,
                                "start": 237,
                                "end": 240
                            },
                            "flags": 32,
                            "start": 236,
                            "end": 240
                        },
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 244,
                                "end": 245
                            },
                            "flags": 32,
                            "start": 242,
                            "end": 245
                        },
                        "flags": 16,
                        "start": 233,
                        "end": 245
                    }
                ],
                "flags": 16,
                "start": 233,
                "end": 245
            },
            "flags": 16,
            "start": 229,
            "end": 245
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "mixed",
                "rawText": "mixed",
                "flags": 96,
                "start": 246,
                "end": 252
            },
            "flags": 16,
            "start": 246,
            "end": 252
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 253,
            "end": 254
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 281,
                    "ellipsisToken": null,
                    "left": {
                        "kind": 134299649,
                        "text": "o3",
                        "rawText": "o3",
                        "flags": 96,
                        "start": 262,
                        "end": 264
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "empty",
                                "rawText": "empty",
                                "flags": 96,
                                "start": 265,
                                "end": 271
                            },
                            "typeParameters": null,
                            "flags": 32,
                            "start": 265,
                            "end": 271
                        },
                        "flags": 32,
                        "start": 264,
                        "end": 271
                    },
                    "right": null,
                    "flags": 32,
                    "start": 254,
                    "end": 271
                },
                "flags": 32,
                "start": 254,
                "end": 272
            },
            "flags": 16,
            "start": 254,
            "end": 272
        }
    ],
    "isModule": false,
    "source": "type O1 = {...any};\nvar o1: O1 = (0: mixed); // ok\n(o1: empty); // ok\n\ntype O2 = {...Object};\nvar o2: O2 = (0: mixed); // ok\n(o2: empty); // ok\n\ndeclare var Base: any;\ndeclare class Derived extends Base {}\ntype O3 = {...Derived};\nvar o3: O3 = (0: mixed); // ok\n(o3: empty) // ok",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 278
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 35, end: 36
✖ ',' expected - start: 35, end: 36
✖ Expected a `;` - start: 42, end: 43
✖ Expected '=>' - start: 62, end: 63
✖ Expected a ')' to match the '(' token here - start: 109, end: 110
✖ ',' expected - start: 109, end: 110
✖ Expected a `;` - start: 116, end: 117
✖ Expected '=>' - start: 136, end: 137
✖ Expected a ')' to match the '(' token here - start: 245, end: 246
✖ ',' expected - start: 245, end: 246
✖ Expected a `;` - start: 252, end: 253
✖ Expected '=>' - start: 272, end: 278

```

