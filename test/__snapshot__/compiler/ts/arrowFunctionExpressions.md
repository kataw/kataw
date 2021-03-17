# Kataw parser test case

## Input

`````js
var a = (p: string) => p.length;
var a = (p: string) => { return p.length; }

var b = j => { return 0; }
var b = (j) => { return 0; }

var c: number;
var d = n => c = n;
var d = (n) => c = n;
var d: (n: any) => any;

var p1 = ([a]) => { };
var p2 = ([...a]) => { };
var p3 = ([, a]) => { };
var p4 = ([, ...a]) => { };
var p5 = ([a = 1]) => { };
var p6 = ({ a }) => { };
var p7 = ({ a: { b } }) => { };
var p8 = ({ a = 1 }) => { };
var p9 = ({ a: { b = 1 } = { b: 1 } }) => { };
var p10 = ([{ value, done }]) => { };

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var a = (p: string) => p.length;\nvar a = (p: string) => { return p.length; }\n\nvar b = j => { return 0; }\nvar b = (j) => { return 0; }\n\nvar c: number;\nvar d = n => c = n;\nvar d = (n) => c = n;\nvar d: (n: any) => any;\n\nvar p1 = ([a]) => { };\nvar p2 = ([...a]) => { };\nvar p3 = ([, a]) => { };\nvar p4 = ([, ...a]) => { };\nvar p5 = ([a = 1]) => { };\nvar p6 = ({ a }) => { };\nvar p7 = ({ a: { b } }) => { };\nvar p8 = ({ a = 1 }) => { };\nvar p9 = ({ a: { b = 1 } = { b: 1 } }) => { };\nvar p10 = ([{ value, done }]) => { };\n",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 196712,
                                            "text": "p",
                                            "rawText": "p",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 11,
                                            "end": 18
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 7,
                                        "end": 18
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 19
                            },
                            "contents": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "p",
                                    "rawText": "p",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 24
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 31
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 31,
                                "period": {
                                    "kind": 255,
                                    "pos": 24,
                                    "end": 25
                                }
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 31
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 31
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 31
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 36,
                            "end": 38
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 196712,
                                            "text": "p",
                                            "rawText": "p",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 42,
                                            "end": 43
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 44,
                                            "end": 51
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 40,
                                        "end": 51
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 52
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "p",
                                                    "rawText": "p",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 64,
                                                    "end": 66
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "length",
                                                    "rawText": "length",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 67,
                                                    "end": 73
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 66,
                                                "end": 73,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 66,
                                                    "end": 67
                                                }
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 57,
                                            "end": 74
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 74
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 76
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 76
                        },
                        "flags": 36,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 32768,
                        "end": 76
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 36,
                "end": 76
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 32,
            "end": 76
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 81,
                            "end": 83
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 4325406,
                                "text": "j",
                                "rawText": "j",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 85,
                                "end": 87
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 4261540,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 99,
                                                "end": 101
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 92,
                                            "end": 102
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 92,
                                    "end": 102
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 90,
                                "end": 104
                            },
                            "flags": 1073774592,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 85,
                            "end": 104
                        },
                        "flags": 81,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 32768,
                        "end": 104
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 81,
                "end": 104
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 76,
            "end": 104
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 108,
                            "end": 110
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "j",
                                            "rawText": "j",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 114,
                                            "end": 115
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 112,
                                        "end": 116
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 112,
                                "end": 116
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 4261540,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 128,
                                                "end": 130
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 121,
                                            "end": 131
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 121,
                                    "end": 131
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 119,
                                "end": 133
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 133
                        },
                        "flags": 108,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 32768,
                        "end": 133
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 108,
                "end": 133
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 104,
            "end": 133
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 138,
                            "end": 140
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 141,
                            "end": 148
                        },
                        "initializer": null,
                        "flags": 138,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 148
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 138,
                "end": 148
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 133,
            "end": 149
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 153,
                            "end": 155
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 4325406,
                                "text": "n",
                                "rawText": "n",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 157,
                                "end": 159
                            },
                            "contents": {
                                "kind": 65550,
                                "left": {
                                    "kind": 196712,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 162,
                                    "end": 164
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 196712,
                                    "text": "n",
                                    "rawText": "n",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 166,
                                    "end": 168
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 162,
                                "end": 168
                            },
                            "flags": 1073741824,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 157,
                            "end": 168
                        },
                        "flags": 153,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 168
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 153,
                "end": 168
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 149,
            "end": 169
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 173,
                            "end": 175
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "n",
                                            "rawText": "n",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 179,
                                            "end": 180
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 177,
                                        "end": 181
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 177,
                                "end": 181
                            },
                            "contents": {
                                "kind": 65550,
                                "left": {
                                    "kind": 196712,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 184,
                                    "end": 186
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 196712,
                                    "text": "n",
                                    "rawText": "n",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 188,
                                    "end": 190
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 184,
                                "end": 190
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 177,
                            "end": 190
                        },
                        "flags": 173,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 190
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 173,
                "end": 190
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 169,
            "end": 191
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 195,
                            "end": 197
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8287,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134226095,
                                "parameterList": [
                                    {
                                        "kind": 134226094,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "n",
                                            "rawText": "n",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 200,
                                            "end": 201
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 202,
                                            "end": 206
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 200,
                                        "end": 206
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 200,
                                "end": 206
                            },
                            "returnType": {
                                "kind": 4202498,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 210,
                                "end": 214
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 198,
                            "end": 214
                        },
                        "initializer": null,
                        "flags": 195,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 214
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 195,
                "end": 214
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 191,
            "end": 215
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "p1",
                            "rawText": "p1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 220,
                            "end": 223
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [
                                                    {
                                                        "kind": 4325406,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 228,
                                                        "end": 229
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 228,
                                                "end": 229
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 227,
                                            "end": 230
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 225,
                                        "end": 231
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 225,
                                "end": 231
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 236,
                                    "end": 236
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 234,
                                "end": 238
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 225,
                            "end": 238
                        },
                        "flags": 220,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 238
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 220,
                "end": 238
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 215,
            "end": 239
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "p2",
                            "rawText": "p2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 243,
                            "end": 246
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [
                                                    {
                                                        "kind": 16412,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 251,
                                                        "end": 255,
                                                        "ellipsis": true,
                                                        "left": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 254,
                                                            "end": 255
                                                        },
                                                        "right": null
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 251,
                                                "end": 255
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 250,
                                            "end": 256
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 248,
                                        "end": 257
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 248,
                                "end": 257
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 262,
                                    "end": 262
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 260,
                                "end": 264
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 248,
                            "end": 264
                        },
                        "flags": 243,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 264
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 243,
                "end": 264
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 239,
            "end": 265
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "p3",
                            "rawText": "p3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 269,
                            "end": 272
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [
                                                    {
                                                        "kind": 4276394,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 277,
                                                        "end": 277
                                                    },
                                                    {
                                                        "kind": 4325406,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 278,
                                                        "end": 280
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 277,
                                                "end": 280
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 276,
                                            "end": 281
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 274,
                                        "end": 282
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 274,
                                "end": 282
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 287,
                                    "end": 287
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 285,
                                "end": 289
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 274,
                            "end": 289
                        },
                        "flags": 269,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 289
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 269,
                "end": 289
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 265,
            "end": 290
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "p4",
                            "rawText": "p4",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 294,
                            "end": 297
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [
                                                    {
                                                        "kind": 4276394,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 302,
                                                        "end": 302
                                                    },
                                                    {
                                                        "kind": 16412,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2,
                                                        "start": 303,
                                                        "end": 308,
                                                        "ellipsis": true,
                                                        "left": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 307,
                                                            "end": 308
                                                        },
                                                        "right": null
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 302,
                                                "end": 308
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 301,
                                            "end": 309
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 299,
                                        "end": 310
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 299,
                                "end": 310
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 315,
                                    "end": 315
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 313,
                                "end": 317
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 299,
                            "end": 317
                        },
                        "flags": 294,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 317
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 294,
                "end": 317
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 290,
            "end": 318
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "p5",
                            "rawText": "p5",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 322,
                            "end": 325
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [
                                                    {
                                                        "kind": 16412,
                                                        "left": {
                                                            "kind": 4325406,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 330,
                                                            "end": 331
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 333,
                                                            "end": 335
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 330,
                                                        "end": 335
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 330,
                                                "end": 335
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 329,
                                            "end": 336
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 327,
                                        "end": 337
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 327,
                                "end": 337
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 342,
                                    "end": 342
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 340,
                                "end": 344
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 327,
                            "end": 344
                        },
                        "flags": 322,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 344
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 322,
                "end": 344
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 318,
            "end": 345
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "p6",
                            "rawText": "p6",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 349,
                            "end": 352
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 4325406,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 357,
                                                        "end": 359
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 357,
                                                "end": 359
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 356,
                                            "end": 361
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 354,
                                        "end": 362
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 354,
                                "end": 362
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 367,
                                    "end": 367
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 365,
                                "end": 369
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 354,
                            "end": 369
                        },
                        "flags": 349,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 369
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 349,
                "end": 369
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 345,
            "end": 370
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "p7",
                            "rawText": "p7",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 374,
                            "end": 377
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 16412,
                                                        "left": {
                                                            "kind": 4325406,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 382,
                                                            "end": 384
                                                        },
                                                        "right": {
                                                            "kind": 98984,
                                                            "propertyList": {
                                                                "kind": 65722,
                                                                "properties": [
                                                                    {
                                                                        "kind": 196712,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 387,
                                                                        "end": 389
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 387,
                                                                "end": 389
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 385,
                                                            "end": 391
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 382,
                                                        "end": 391
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 382,
                                                "end": 391
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 381,
                                            "end": 393
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 379,
                                        "end": 394
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 379,
                                "end": 394
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 399,
                                    "end": 399
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 397,
                                "end": 401
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 379,
                            "end": 401
                        },
                        "flags": 374,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 401
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 374,
                "end": 401
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 370,
            "end": 402
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "p8",
                            "rawText": "p8",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 406,
                            "end": 409
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 203,
                                                        "left": {
                                                            "kind": 4325406,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 414,
                                                            "end": 416
                                                        },
                                                        "isOptional": false,
                                                        "exclamation": false,
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 418,
                                                            "end": 420
                                                        },
                                                        "accessModifier": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 414,
                                                        "end": 420,
                                                        "ellipsis": false
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 414,
                                                "end": 420
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 413,
                                            "end": 422
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 411,
                                        "end": 423
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 411,
                                "end": 423
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 428,
                                    "end": 428
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 426,
                                "end": 430
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 411,
                            "end": 430
                        },
                        "flags": 406,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 430
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 406,
                "end": 430
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 402,
            "end": 431
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "p9",
                            "rawText": "p9",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 435,
                            "end": 438
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554598,
                                            "propertyList": {
                                                "kind": 33,
                                                "properties": [
                                                    {
                                                        "kind": 16412,
                                                        "left": {
                                                            "kind": 4325406,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 443,
                                                            "end": 445
                                                        },
                                                        "right": {
                                                            "kind": 65550,
                                                            "left": {
                                                                "kind": 98984,
                                                                "propertyList": {
                                                                    "kind": 65722,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 65597,
                                                                            "left": {
                                                                                "kind": 196712,
                                                                                "text": "b",
                                                                                "rawText": "b",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 448,
                                                                                "end": 450
                                                                            },
                                                                            "isOptional": false,
                                                                            "exclamation": false,
                                                                            "right": {
                                                                                "kind": 4261540,
                                                                                "text": 1,
                                                                                "rawText": "1",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 452,
                                                                                "end": 454
                                                                            },
                                                                            "accessModifier": null,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 1,
                                                                            "start": 448,
                                                                            "end": 454
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 448,
                                                                    "end": 454
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 446,
                                                                "end": 456
                                                            },
                                                            "operator": "=",
                                                            "right": {
                                                                "kind": 98984,
                                                                "propertyList": {
                                                                    "kind": 65722,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 65721,
                                                                            "left": {
                                                                                "kind": 196711,
                                                                                "text": "b",
                                                                                "rawText": "b",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 460,
                                                                                "end": 462
                                                                            },
                                                                            "right": {
                                                                                "kind": 4261540,
                                                                                "text": 1,
                                                                                "rawText": "1",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 463,
                                                                                "end": 465
                                                                            },
                                                                            "accessModifier": null,
                                                                            "decorators": null,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 460,
                                                                            "end": 465
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 460,
                                                                    "end": 465
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 458,
                                                                "end": 467
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 446,
                                                            "end": 467
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 443,
                                                        "end": 467
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 443,
                                                "end": 467
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 442,
                                            "end": 469
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 440,
                                        "end": 470
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 440,
                                "end": 470
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 475,
                                    "end": 475
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 473,
                                "end": 477
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 440,
                            "end": 477
                        },
                        "flags": 435,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 477
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 435,
                "end": 477
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 431,
            "end": 478
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "p10",
                            "rawText": "p10",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 482,
                            "end": 486
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [
                                                    {
                                                        "kind": 33554598,
                                                        "propertyList": {
                                                            "kind": 33,
                                                            "properties": [
                                                                {
                                                                    "kind": 4325406,
                                                                    "text": "value",
                                                                    "rawText": "value",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 492,
                                                                    "end": 498
                                                                },
                                                                {
                                                                    "kind": 4325406,
                                                                    "text": "done",
                                                                    "rawText": "done",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 499,
                                                                    "end": 504
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 492,
                                                            "end": 504
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 491,
                                                        "end": 506
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 491,
                                                "end": 506
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 490,
                                            "end": 507
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 488,
                                        "end": 508
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 488,
                                "end": 508
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 513,
                                    "end": 513
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 511,
                                "end": 515
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 488,
                            "end": 515
                        },
                        "flags": 482,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 515
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 482,
                "end": 515
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 478,
            "end": 516
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
    "end": 517
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

