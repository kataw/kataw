# Kataw parser test case

## Input

`````js
enum E1 { ONE, TWO, THREE }
declare enum E2 { ONE, TWO, THREE }

type Bins1 = { [k in E1]?: string; }
type Bins2 = { [k in E2]?: string; }

const b1: Bins1 = {};
const b2: Bins2 = {};

const e1: E1 = E1.ONE;
const e2: E2 = E2.ONE;

b1[1] = "a";
b1[e1] = "b";

b2[1] = "a";
b2[e2] = "b";

// Multiple numeric enum types accrue to the same numeric index signature in a mapped type

declare function val(): number;

enum N1 { A = val(), B = val() }
enum N2 { C = val(), D = val() }

type T1 = { [K in N1 | N2]: K };

// Enum types with string valued members are always literal enum types and therefore
// ONE and TWO below are not computed members but rather just numerically valued members
// with auto-incremented values.

declare enum E { ONE, TWO, THREE = 'x' }
const e: E = E.ONE;
const x: E.ONE = e;

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "enum E1 { ONE, TWO, THREE }\ndeclare enum E2 { ONE, TWO, THREE }\n\ntype Bins1 = { [k in E1]?: string; }\ntype Bins2 = { [k in E2]?: string; }\n\nconst b1: Bins1 = {};\nconst b2: Bins2 = {};\n\nconst e1: E1 = E1.ONE;\nconst e2: E2 = E2.ONE;\n\nb1[1] = \"a\";\nb1[e1] = \"b\";\n\nb2[1] = \"a\";\nb2[e2] = \"b\";\n\n// Multiple numeric enum types accrue to the same numeric index signature in a mapped type\n\ndeclare function val(): number;\n\nenum N1 { A = val(), B = val() }\nenum N2 { C = val(), D = val() }\n\ntype T1 = { [K in N1 | N2]: K };\n\n// Enum types with string valued members are always literal enum types and therefore\n// ONE and TWO below are not computed members but rather just numerically valued members\n// with auto-incremented values.\n\ndeclare enum E { ONE, TWO, THREE = 'x' }\nconst e: E = E.ONE;\nconst x: E.ONE = e;\n",
    "filename": "",
    "statements": [
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "E1",
                "rawText": "E1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 7
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "ONE",
                            "rawText": "ONE",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 13
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 9,
                        "end": 13
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "TWO",
                            "rawText": "TWO",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 18
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 14,
                        "end": 18
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "THREE",
                            "rawText": "THREE",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 25
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 19,
                        "end": 25
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 9,
                "end": 25
            },
            "isConst": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 27
        },
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "E2",
                "rawText": "E2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 40,
                "end": 43
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "ONE",
                            "rawText": "ONE",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 49
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 45,
                        "end": 49
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "TWO",
                            "rawText": "TWO",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 54
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 50,
                        "end": 54
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "THREE",
                            "rawText": "THREE",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 55,
                            "end": 61
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 55,
                        "end": 61
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 45,
                "end": 61
            },
            "isConst": false,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 35,
            "end": 63
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "Bins1",
                "rawText": "Bins1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 69,
                "end": 75
            },
            "type": {
                "kind": 8335,
                "typeParameter": {
                    "kind": 134226152,
                    "name": {
                        "kind": 196711,
                        "text": "k",
                        "rawText": "k",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 81,
                        "end": 82
                    },
                    "constraint": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "E1",
                            "rawText": "E1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 85,
                            "end": 88
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 85,
                        "end": 89
                    },
                    "defaultType": null,
                    "expression": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 81,
                    "end": 88
                },
                "nameType": null,
                "isReadOnly": false,
                "plus": false,
                "minus": false,
                "isOptional": true,
                "type": {
                    "kind": 4202702,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 91,
                    "end": 98
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 77,
                "end": 101
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 63,
            "end": 101
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "Bins2",
                "rawText": "Bins2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 106,
                "end": 112
            },
            "type": {
                "kind": 8335,
                "typeParameter": {
                    "kind": 134226152,
                    "name": {
                        "kind": 196711,
                        "text": "k",
                        "rawText": "k",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 118,
                        "end": 119
                    },
                    "constraint": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "E2",
                            "rawText": "E2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 122,
                            "end": 125
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 122,
                        "end": 126
                    },
                    "defaultType": null,
                    "expression": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 118,
                    "end": 125
                },
                "nameType": null,
                "isReadOnly": false,
                "plus": false,
                "minus": false,
                "isOptional": true,
                "type": {
                    "kind": 4202702,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 128,
                    "end": 135
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 114,
                "end": 138
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 101,
            "end": 138
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "b1",
                            "rawText": "b1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 145,
                            "end": 148
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Bins1",
                                "rawText": "Bins1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 149,
                                "end": 155
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 149,
                            "end": 157
                        },
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 159,
                                "end": 159
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 157,
                            "end": 160
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 145,
                        "end": 160
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 138,
                "end": 160
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 138,
            "end": 161
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "b2",
                            "rawText": "b2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 167,
                            "end": 170
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Bins2",
                                "rawText": "Bins2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 171,
                                "end": 177
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 171,
                            "end": 179
                        },
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 181,
                                "end": 181
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 179,
                            "end": 182
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 167,
                        "end": 182
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 161,
                "end": 182
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 161,
            "end": 183
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "e1",
                            "rawText": "e1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 190,
                            "end": 193
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "E1",
                                "rawText": "E1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 194,
                                "end": 197
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 194,
                            "end": 199
                        },
                        "initializer": {
                            "kind": 67175096,
                            "member": {
                                "kind": 196712,
                                "text": "E1",
                                "rawText": "E1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 199,
                                "end": 202
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "ONE",
                                "rawText": "ONE",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 203,
                                "end": 206
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 202,
                            "end": 206,
                            "period": {
                                "kind": 255,
                                "pos": 202,
                                "end": 203
                            }
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 190,
                        "end": 206
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 183,
                "end": 206
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 183,
            "end": 207
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "e2",
                            "rawText": "e2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 213,
                            "end": 216
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "E2",
                                "rawText": "E2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 217,
                                "end": 220
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 217,
                            "end": 222
                        },
                        "initializer": {
                            "kind": 67175096,
                            "member": {
                                "kind": 196712,
                                "text": "E2",
                                "rawText": "E2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 222,
                                "end": 225
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "ONE",
                                "rawText": "ONE",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 226,
                                "end": 229
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 225,
                            "end": 229,
                            "period": {
                                "kind": 255,
                                "pos": 225,
                                "end": 226
                            }
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 213,
                        "end": 229
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 207,
                "end": 229
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 207,
            "end": 230
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 67174980,
                    "member": {
                        "kind": 196712,
                        "text": "b1",
                        "rawText": "b1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 230,
                        "end": 234
                    },
                    "expression": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 235,
                        "end": 236
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 234,
                    "end": 237
                },
                "operator": "=",
                "right": {
                    "kind": 4261583,
                    "text": "a",
                    "rawText": "a",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 239,
                    "end": 243
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 230,
                "end": 243
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 230,
            "end": 244
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 67174980,
                    "member": {
                        "kind": 196712,
                        "text": "b1",
                        "rawText": "b1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 244,
                        "end": 247
                    },
                    "expression": {
                        "kind": 196712,
                        "text": "e1",
                        "rawText": "e1",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 248,
                        "end": 250
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 247,
                    "end": 251
                },
                "operator": "=",
                "right": {
                    "kind": 4261583,
                    "text": "b",
                    "rawText": "b",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 253,
                    "end": 257
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 244,
                "end": 257
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 244,
            "end": 258
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 67174980,
                    "member": {
                        "kind": 196712,
                        "text": "b2",
                        "rawText": "b2",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 258,
                        "end": 262
                    },
                    "expression": {
                        "kind": 4261540,
                        "text": 1,
                        "rawText": "1",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 263,
                        "end": 264
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 262,
                    "end": 265
                },
                "operator": "=",
                "right": {
                    "kind": 4261583,
                    "text": "a",
                    "rawText": "a",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 267,
                    "end": 271
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 258,
                "end": 271
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 258,
            "end": 272
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 67174980,
                    "member": {
                        "kind": 196712,
                        "text": "b2",
                        "rawText": "b2",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 272,
                        "end": 275
                    },
                    "expression": {
                        "kind": 196712,
                        "text": "e2",
                        "rawText": "e2",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 276,
                        "end": 278
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 275,
                    "end": 279
                },
                "operator": "=",
                "right": {
                    "kind": 4261583,
                    "text": "b",
                    "rawText": "b",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 281,
                    "end": 285
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 272,
                "end": 285
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 272,
            "end": 286
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "val",
                "rawText": "val",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 396,
                "end": 400
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 401,
                "end": 402
            },
            "type": {
                "kind": 4202657,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 403,
                "end": 410
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 387,
            "end": 411
        },
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "N1",
                "rawText": "N1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 417,
                "end": 420
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "A",
                            "rawText": "A",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 422,
                            "end": 424
                        },
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "val",
                                "rawText": "val",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 426,
                                "end": 430
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 432,
                                "end": 432
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 430,
                            "end": 432
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 422,
                        "end": 432
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "B",
                            "rawText": "B",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 433,
                            "end": 435
                        },
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "val",
                                "rawText": "val",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 437,
                                "end": 441
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 443,
                                "end": 443
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 441,
                            "end": 443
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 433,
                        "end": 443
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 422,
                "end": 443
            },
            "isConst": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 411,
            "end": 445
        },
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "N2",
                "rawText": "N2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 450,
                "end": 453
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "C",
                            "rawText": "C",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 455,
                            "end": 457
                        },
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "val",
                                "rawText": "val",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 459,
                                "end": 463
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 465,
                                "end": 465
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 463,
                            "end": 465
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 455,
                        "end": 465
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "D",
                            "rawText": "D",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 466,
                            "end": 468
                        },
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "val",
                                "rawText": "val",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 470,
                                "end": 474
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 476,
                                "end": 476
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 474,
                            "end": 476
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 466,
                        "end": 476
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 455,
                "end": 476
            },
            "isConst": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 445,
            "end": 478
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "T1",
                "rawText": "T1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 484,
                "end": 487
            },
            "type": {
                "kind": 8335,
                "typeParameter": {
                    "kind": 134226152,
                    "name": {
                        "kind": 196711,
                        "text": "K",
                        "rawText": "K",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 493,
                        "end": 494
                    },
                    "constraint": {
                        "kind": 8432,
                        "types": [
                            {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "N1",
                                    "rawText": "N1",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 497,
                                    "end": 500
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 497,
                                "end": 502
                            },
                            {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "N2",
                                    "rawText": "N2",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 502,
                                    "end": 505
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 502,
                                "end": 506
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 500,
                        "end": 505
                    },
                    "defaultType": null,
                    "expression": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 493,
                    "end": 505
                },
                "nameType": null,
                "isReadOnly": false,
                "plus": false,
                "minus": false,
                "isOptional": false,
                "type": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "K",
                        "rawText": "K",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 507,
                        "end": 509
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 507,
                    "end": 511
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 489,
                "end": 511
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 478,
            "end": 512
        },
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "E",
                "rawText": "E",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 734,
                "end": 736
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "ONE",
                            "rawText": "ONE",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 738,
                            "end": 742
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 738,
                        "end": 742
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "TWO",
                            "rawText": "TWO",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 743,
                            "end": 747
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 743,
                        "end": 747
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "THREE",
                            "rawText": "THREE",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 748,
                            "end": 754
                        },
                        "initializer": {
                            "kind": 4261583,
                            "text": "x",
                            "rawText": "x",
                            "flags": 33554432,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 756,
                            "end": 760
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 748,
                        "end": 760
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 738,
                "end": 760
            },
            "isConst": false,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 729,
            "end": 762
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "e",
                            "rawText": "e",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 768,
                            "end": 770
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "E",
                                "rawText": "E",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 771,
                                "end": 773
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 771,
                            "end": 775
                        },
                        "initializer": {
                            "kind": 67175096,
                            "member": {
                                "kind": 196712,
                                "text": "E",
                                "rawText": "E",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 775,
                                "end": 777
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "ONE",
                                "rawText": "ONE",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 778,
                                "end": 781
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 777,
                            "end": 781,
                            "period": {
                                "kind": 255,
                                "pos": 777,
                                "end": 778
                            }
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 768,
                        "end": 781
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 762,
                "end": 781
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 762,
            "end": 782
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 788,
                            "end": 790
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 8383,
                                "left": {
                                    "kind": 196711,
                                    "text": "E",
                                    "rawText": "E",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 791,
                                    "end": 793
                                },
                                "right": {
                                    "kind": 196711,
                                    "text": "ONE",
                                    "rawText": "ONE",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 794,
                                    "end": 797
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 791,
                                "end": 797
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 791,
                            "end": 799
                        },
                        "initializer": {
                            "kind": 196712,
                            "text": "e",
                            "rawText": "e",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 799,
                            "end": 801
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 788,
                        "end": 801
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 782,
                "end": 801
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 782,
            "end": 802
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
    "end": 803
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

