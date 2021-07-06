# Kataw parser test case

## Input

`````js
({ x = y } = {});
({ x: [ x ] } = { x: null });
({ x: { x } } = { x: null });
({ x: { x } } = { x: undefined });
({ x: { x } } = {});
({ a: x } = {});
({ x: [ x ] } = { x: undefined });
({[(a)(x = (y))]: {}});
({a = [b]} = 1 * (c = d));
({a = [b]} = 1 * (d = (e)));
({1: [b.c = x]} = 1 / (d = ((a)) = a));
({1: [b.c = x]} = 2 / (dd = ((a)) = 3));
({1: [b.c = x]} = 2 ** (dd = ((a)) = 3));
({1: [b.c = x]} = 1 * (d = ((a)) = a));

({a, a});
({a, a: 1});
({a: 1, a});
({a: 1, a});
({a: b = x} = d);
({a: b = x} / d);
({a: b * x});

(x, {a, a});
(x, {a, a: 1});
(x, {a: 1, a});
(x, {a: 1, a});
(x, {a: b = x} = d);
(x, {a: b = x} / d);
(x, {a: b * x});

({ test = 1 } = {});
({x = 0} = 1);
({x = 0,} = 1);
({var: x} = 0);


({b, c, d, ...{a} });
((a)) = b;

({}.length);
({}.x);
([].x);
([x].foo) = x;

({*15(){}});

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 4
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 8
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 8
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 12
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 14
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 12,
                        "end": 15
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 15
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 27
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 23,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 20,
                                    "end": 29
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 29
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 19,
                        "end": 31
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 33
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 37
                                    },
                                    "right": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 43
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 35,
                                    "end": 43
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 43
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 33,
                        "end": 45
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 19,
                    "end": 45
                },
                "flags": 17,
                "transformFlags": 0,
                "start": 35,
                "end": 46
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 17,
            "end": 47
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 50,
                                        "end": 52
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 55,
                                                    "end": 57
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 55,
                                            "end": 57
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 53,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 50,
                                    "end": 59
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 59
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 49,
                        "end": 61
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 61,
                        "end": 63
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 65,
                                        "end": 67
                                    },
                                    "right": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 68,
                                        "end": 73
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 65,
                                    "end": 73
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 73
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 63,
                        "end": 75
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 49,
                    "end": 75
                },
                "flags": 47,
                "transformFlags": 0,
                "start": 35,
                "end": 76
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 47,
            "end": 77
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 80,
                                        "end": 82
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 85,
                                                    "end": 87
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 85,
                                            "end": 87
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 83,
                                        "end": 89
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 80,
                                    "end": 89
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 80,
                            "end": 89
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 79,
                        "end": 91
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 91,
                        "end": 93
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 95,
                                        "end": 97
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "undefined",
                                        "rawText": "undefined",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 98,
                                        "end": 108
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 95,
                                    "end": 108
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 95,
                            "end": 108
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 93,
                        "end": 110
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 79,
                    "end": 110
                },
                "flags": 77,
                "transformFlags": 0,
                "start": 35,
                "end": 111
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 77,
            "end": 112
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 115,
                                        "end": 117
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 120,
                                                    "end": 122
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 120,
                                            "end": 122
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 118,
                                        "end": 124
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 115,
                                    "end": 124
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 115,
                            "end": 124
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 114,
                        "end": 126
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 126,
                        "end": 128
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 130,
                            "end": 130
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 128,
                        "end": 131
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 114,
                    "end": 131
                },
                "flags": 112,
                "transformFlags": 0,
                "start": 35,
                "end": 132
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 112,
            "end": 133
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 136,
                                        "end": 138
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 139,
                                        "end": 141
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 136,
                                    "end": 141
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 136,
                            "end": 141
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 135,
                        "end": 143
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 143,
                        "end": 145
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 147,
                            "end": 147
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 145,
                        "end": 148
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 135,
                    "end": 148
                },
                "flags": 133,
                "transformFlags": 0,
                "start": 35,
                "end": 149
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 133,
            "end": 150
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 153,
                                        "end": 155
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 158,
                                                    "end": 160
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 158,
                                            "end": 160
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 156,
                                        "end": 162
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 153,
                                    "end": 162
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 153,
                            "end": 162
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 152,
                        "end": 164
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 164,
                        "end": 166
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 168,
                                        "end": 170
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "undefined",
                                        "rawText": "undefined",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 171,
                                        "end": 181
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 168,
                                    "end": 181
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 168,
                            "end": 181
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 166,
                        "end": 183
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 152,
                    "end": 183
                },
                "flags": 150,
                "transformFlags": 0,
                "start": 35,
                "end": 184
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 150,
            "end": 185
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 190,
                                                "end": 191
                                            },
                                            "flags": 189,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 192
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 193,
                                                        "end": 194
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 194,
                                                        "end": 196
                                                    },
                                                    "right": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 198,
                                                            "end": 199
                                                        },
                                                        "flags": 196,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 200
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 193,
                                                    "end": 200
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 193,
                                            "end": 200
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 189,
                                        "end": 201
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 188,
                                    "end": 202
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 205,
                                        "end": 205
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 203,
                                    "end": 206
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 188,
                                "end": 206
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 188,
                        "end": 206
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 187,
                    "end": 207
                },
                "flags": 185,
                "transformFlags": 0,
                "start": 35,
                "end": 208
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 185,
            "end": 209
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 212,
                                        "end": 213
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 217,
                                                    "end": 218
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 217,
                                            "end": 218
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 215,
                                        "end": 219
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 212,
                                    "end": 219
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 212,
                            "end": 219
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 211,
                        "end": 220
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 220,
                        "end": 222
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 222,
                            "end": 224
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 96,
                            "transformFlags": 32,
                            "start": 224,
                            "end": 226
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 228,
                                    "end": 229
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 229,
                                    "end": 231
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 231,
                                    "end": 233
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 226,
                                "end": 233
                            },
                            "flags": 226,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 234
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 222,
                        "end": 234
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 211,
                    "end": 234
                },
                "flags": 209,
                "transformFlags": 0,
                "start": 35,
                "end": 235
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 209,
            "end": 236
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 239,
                                        "end": 240
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 244,
                                                    "end": 245
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 244,
                                            "end": 245
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 242,
                                        "end": 246
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 239,
                                    "end": 246
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 239,
                            "end": 246
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 238,
                        "end": 247
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 247,
                        "end": 249
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 249,
                            "end": 251
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 96,
                            "transformFlags": 32,
                            "start": 251,
                            "end": 253
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 255,
                                    "end": 256
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 256,
                                    "end": 258
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 260,
                                        "end": 261
                                    },
                                    "flags": 258,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 262
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 253,
                                "end": 262
                            },
                            "flags": 253,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 263
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 249,
                        "end": 263
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 238,
                    "end": 263
                },
                "flags": 236,
                "transformFlags": 0,
                "start": 35,
                "end": 264
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 236,
            "end": 265
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 268,
                                        "end": 269
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 272,
                                                            "end": 273
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 274,
                                                            "end": 275
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 272,
                                                        "end": 275
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 275,
                                                        "end": 277
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 277,
                                                        "end": 279
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 272,
                                                    "end": 279
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 272,
                                            "end": 279
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 270,
                                        "end": 280
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 268,
                                    "end": 280
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 268,
                            "end": 280
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 267,
                        "end": 281
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 281,
                        "end": 283
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 283,
                            "end": 285
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "transformFlags": 32,
                            "start": 285,
                            "end": 287
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 289,
                                    "end": 290
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 290,
                                    "end": 292
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 295,
                                                "end": 296
                                            },
                                            "flags": 294,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 297
                                        },
                                        "flags": 292,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 298
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 298,
                                        "end": 300
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 300,
                                        "end": 302
                                    },
                                    "flags": 0,
                                    "transformFlags": 128,
                                    "start": 292,
                                    "end": 302
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 287,
                                "end": 302
                            },
                            "flags": 287,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 303
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 283,
                        "end": 303
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 267,
                    "end": 303
                },
                "flags": 265,
                "transformFlags": 0,
                "start": 35,
                "end": 304
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 265,
            "end": 305
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 308,
                                        "end": 309
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 312,
                                                            "end": 313
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 314,
                                                            "end": 315
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 312,
                                                        "end": 315
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 315,
                                                        "end": 317
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 317,
                                                        "end": 319
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 312,
                                                    "end": 319
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 312,
                                            "end": 319
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 310,
                                        "end": 320
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 308,
                                    "end": 320
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 308,
                            "end": 320
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 307,
                        "end": 321
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 321,
                        "end": 323
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 323,
                            "end": 325
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "transformFlags": 32,
                            "start": 325,
                            "end": 327
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "dd",
                                    "rawText": "dd",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 329,
                                    "end": 331
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 331,
                                    "end": 333
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 336,
                                                "end": 337
                                            },
                                            "flags": 335,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 338
                                        },
                                        "flags": 333,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 339
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 339,
                                        "end": 341
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 341,
                                        "end": 343
                                    },
                                    "flags": 0,
                                    "transformFlags": 128,
                                    "start": 333,
                                    "end": 343
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 327,
                                "end": 343
                            },
                            "flags": 327,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 344
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 323,
                        "end": 344
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 307,
                    "end": 344
                },
                "flags": 305,
                "transformFlags": 0,
                "start": 35,
                "end": 345
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 305,
            "end": 346
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 349,
                                        "end": 350
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 353,
                                                            "end": 354
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 355,
                                                            "end": 356
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 353,
                                                        "end": 356
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 356,
                                                        "end": 358
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 358,
                                                        "end": 360
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 353,
                                                    "end": 360
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 353,
                                            "end": 360
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 351,
                                        "end": 361
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 349,
                                    "end": 361
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 349,
                            "end": 361
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 348,
                        "end": 362
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 362,
                        "end": 364
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 364,
                            "end": 366
                        },
                        "operatorToken": {
                            "kind": 35897,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 366,
                            "end": 369
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "dd",
                                    "rawText": "dd",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 371,
                                    "end": 373
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 373,
                                    "end": 375
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 378,
                                                "end": 379
                                            },
                                            "flags": 377,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 380
                                        },
                                        "flags": 375,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 381
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 381,
                                        "end": 383
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 383,
                                        "end": 385
                                    },
                                    "flags": 0,
                                    "transformFlags": 128,
                                    "start": 375,
                                    "end": 385
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 369,
                                "end": 385
                            },
                            "flags": 369,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 386
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 364,
                        "end": 386
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 348,
                    "end": 386
                },
                "flags": 346,
                "transformFlags": 0,
                "start": 35,
                "end": 387
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 346,
            "end": 388
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 391,
                                        "end": 392
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 395,
                                                            "end": 396
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 397,
                                                            "end": 398
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 395,
                                                        "end": 398
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 398,
                                                        "end": 400
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 400,
                                                        "end": 402
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 395,
                                                    "end": 402
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 395,
                                            "end": 402
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 393,
                                        "end": 403
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 391,
                                    "end": 403
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 391,
                            "end": 403
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 390,
                        "end": 404
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 404,
                        "end": 406
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 406,
                            "end": 408
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 96,
                            "transformFlags": 32,
                            "start": 408,
                            "end": 410
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 412,
                                    "end": 413
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 413,
                                    "end": 415
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 418,
                                                "end": 419
                                            },
                                            "flags": 417,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 420
                                        },
                                        "flags": 415,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 421
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 421,
                                        "end": 423
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 423,
                                        "end": 425
                                    },
                                    "flags": 0,
                                    "transformFlags": 128,
                                    "start": 415,
                                    "end": 425
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 410,
                                "end": 425
                            },
                            "flags": 410,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 426
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 406,
                        "end": 426
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 390,
                    "end": 426
                },
                "flags": 388,
                "transformFlags": 0,
                "start": 35,
                "end": 427
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 388,
            "end": 428
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 432,
                                "end": 433
                            },
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 434,
                                "end": 436
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 432,
                        "end": 436
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 431,
                    "end": 437
                },
                "flags": 428,
                "transformFlags": 0,
                "start": 35,
                "end": 438
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 428,
            "end": 439
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 442,
                                "end": 443
                            },
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 444,
                                    "end": 446
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 447,
                                    "end": 449
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 444,
                                "end": 449
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 442,
                        "end": 449
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 441,
                    "end": 450
                },
                "flags": 439,
                "transformFlags": 0,
                "start": 35,
                "end": 451
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 439,
            "end": 452
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 455,
                                    "end": 456
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 457,
                                    "end": 459
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 455,
                                "end": 459
                            },
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 460,
                                "end": 462
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 455,
                        "end": 462
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 454,
                    "end": 463
                },
                "flags": 452,
                "transformFlags": 0,
                "start": 35,
                "end": 464
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 452,
            "end": 465
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 468,
                                    "end": 469
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 470,
                                    "end": 472
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 468,
                                "end": 472
                            },
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 473,
                                "end": 475
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 468,
                        "end": 475
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 467,
                    "end": 476
                },
                "flags": 465,
                "transformFlags": 0,
                "start": 35,
                "end": 477
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 465,
            "end": 478
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 481,
                                        "end": 482
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 483,
                                            "end": 485
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 485,
                                            "end": 487
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 487,
                                            "end": 489
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 481,
                                        "end": 489
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 481,
                                    "end": 489
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 481,
                            "end": 489
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 480,
                        "end": 490
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 490,
                        "end": 492
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 492,
                        "end": 494
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 480,
                    "end": 494
                },
                "flags": 478,
                "transformFlags": 0,
                "start": 35,
                "end": 495
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 478,
            "end": 496
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 499,
                                        "end": 500
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 501,
                                            "end": 503
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 503,
                                            "end": 505
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 505,
                                            "end": 507
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 499,
                                        "end": 507
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 499,
                                    "end": 507
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 499,
                            "end": 507
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 498,
                        "end": 508
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 508,
                        "end": 510
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 510,
                        "end": 512
                    },
                    "flags": 48,
                    "transformFlags": 1024,
                    "start": 496,
                    "end": 512
                },
                "flags": 496,
                "transformFlags": 0,
                "start": 35,
                "end": 513
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 496,
            "end": 514
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 517,
                                    "end": 518
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 519,
                                        "end": 521
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 521,
                                        "end": 523
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 523,
                                        "end": 525
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 517,
                                    "end": 525
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 517,
                                "end": 525
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 517,
                        "end": 525
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 516,
                    "end": 526
                },
                "flags": 514,
                "transformFlags": 0,
                "start": 35,
                "end": 527
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 514,
            "end": 528
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 531,
                            "end": 532
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 535,
                                        "end": 536
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 537,
                                        "end": 539
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 535,
                                "end": 539
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 533,
                            "end": 540
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 528,
                    "end": 541
                },
                "flags": 528,
                "transformFlags": 0,
                "start": 35,
                "end": 541
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 528,
            "end": 542
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 544,
                            "end": 545
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 548,
                                        "end": 549
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 550,
                                            "end": 552
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 553,
                                            "end": 555
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 550,
                                        "end": 555
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 548,
                                "end": 555
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 546,
                            "end": 556
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 542,
                    "end": 557
                },
                "flags": 542,
                "transformFlags": 0,
                "start": 35,
                "end": 557
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 542,
            "end": 558
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 560,
                            "end": 561
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 564,
                                            "end": 565
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 566,
                                            "end": 568
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 564,
                                        "end": 568
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 569,
                                        "end": 571
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 564,
                                "end": 571
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 562,
                            "end": 572
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 558,
                    "end": 573
                },
                "flags": 558,
                "transformFlags": 0,
                "start": 35,
                "end": 573
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 558,
            "end": 574
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 576,
                            "end": 577
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 580,
                                            "end": 581
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 582,
                                            "end": 584
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 580,
                                        "end": 584
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 585,
                                        "end": 587
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 580,
                                "end": 587
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 578,
                            "end": 588
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 574,
                    "end": 589
                },
                "flags": 574,
                "transformFlags": 0,
                "start": 35,
                "end": 589
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 574,
            "end": 590
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 592,
                            "end": 593
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 596,
                                                "end": 597
                                            },
                                            "right": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 598,
                                                    "end": 600
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 600,
                                                    "end": 602
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 602,
                                                    "end": 604
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 596,
                                                "end": 604
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 596,
                                            "end": 604
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 596,
                                    "end": 604
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 594,
                                "end": 605
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 605,
                                "end": 607
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 607,
                                "end": 609
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 594,
                            "end": 609
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 590,
                    "end": 610
                },
                "flags": 590,
                "transformFlags": 0,
                "start": 35,
                "end": 610
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 590,
            "end": 611
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 613,
                            "end": 614
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 617,
                                                "end": 618
                                            },
                                            "right": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 619,
                                                    "end": 621
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 621,
                                                    "end": 623
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 623,
                                                    "end": 625
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 617,
                                                "end": 625
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 617,
                                            "end": 625
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 617,
                                    "end": 625
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 615,
                                "end": 626
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 96,
                                "transformFlags": 32,
                                "start": 626,
                                "end": 628
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 628,
                                "end": 630
                            },
                            "flags": 48,
                            "transformFlags": 1024,
                            "start": 611,
                            "end": 630
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 611,
                    "end": 631
                },
                "flags": 611,
                "transformFlags": 0,
                "start": 35,
                "end": 631
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 611,
            "end": 632
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 634,
                            "end": 635
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 638,
                                            "end": 639
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 640,
                                                "end": 642
                                            },
                                            "operatorToken": {
                                                "kind": 67143222,
                                                "flags": 96,
                                                "transformFlags": 32,
                                                "start": 642,
                                                "end": 644
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 644,
                                                "end": 646
                                            },
                                            "flags": 96,
                                            "transformFlags": 1024,
                                            "start": 638,
                                            "end": 646
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 638,
                                        "end": 646
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 638,
                                "end": 646
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 636,
                            "end": 647
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 632,
                    "end": 648
                },
                "flags": 632,
                "transformFlags": 0,
                "start": 35,
                "end": 648
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 632,
            "end": 649
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "test",
                                        "rawText": "test",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 653,
                                        "end": 658
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 660,
                                        "end": 662
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 653,
                                    "end": 662
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 653,
                            "end": 662
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 652,
                        "end": 664
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 664,
                        "end": 666
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 668,
                            "end": 668
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 666,
                        "end": 669
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 652,
                    "end": 669
                },
                "flags": 649,
                "transformFlags": 0,
                "start": 35,
                "end": 670
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 649,
            "end": 671
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 674,
                                        "end": 675
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 677,
                                        "end": 679
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 674,
                                    "end": 679
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 674,
                            "end": 679
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 673,
                        "end": 680
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 680,
                        "end": 682
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 682,
                        "end": 684
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 673,
                    "end": 684
                },
                "flags": 671,
                "transformFlags": 0,
                "start": 35,
                "end": 685
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 671,
            "end": 686
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 689,
                                        "end": 690
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 692,
                                        "end": 694
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 689,
                                    "end": 694
                                }
                            ],
                            "trailingComma": true,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 689,
                            "end": 695
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 688,
                        "end": 696
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 696,
                        "end": 698
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 698,
                        "end": 700
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 688,
                    "end": 700
                },
                "flags": 686,
                "transformFlags": 0,
                "start": 35,
                "end": 701
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 686,
            "end": 702
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "var",
                                        "rawText": "var",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 705,
                                        "end": 708
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 709,
                                        "end": 711
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 705,
                                    "end": 711
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 705,
                            "end": 711
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 704,
                        "end": 712
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 712,
                        "end": 714
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 714,
                        "end": 716
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 704,
                    "end": 716
                },
                "flags": 702,
                "transformFlags": 0,
                "start": 35,
                "end": 717
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 702,
            "end": 718
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 723,
                                "end": 724
                            },
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 725,
                                "end": 727
                            },
                            {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 728,
                                "end": 730
                            },
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 731,
                                    "end": 735
                                },
                                "argument": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 736,
                                                "end": 737
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 736,
                                        "end": 737
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 735,
                                    "end": 738
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 731,
                                "end": 738
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 723,
                        "end": 738
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 722,
                    "end": 740
                },
                "flags": 718,
                "transformFlags": 0,
                "start": 35,
                "end": 741
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 718,
            "end": 742
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 745,
                            "end": 746
                        },
                        "flags": 744,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 747
                    },
                    "flags": 742,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 748
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 748,
                    "end": 750
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 750,
                    "end": 752
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 742,
                "end": 752
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 742,
            "end": 753
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 757,
                            "end": 757
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 756,
                        "end": 758
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "length",
                        "rawText": "length",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 759,
                        "end": 765
                    },
                    "flags": 48,
                    "transformFlags": 2,
                    "start": 753,
                    "end": 765
                },
                "flags": 753,
                "transformFlags": 0,
                "start": 35,
                "end": 766
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 753,
            "end": 767
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 770,
                            "end": 770
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 769,
                        "end": 771
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 772,
                        "end": 773
                    },
                    "flags": 48,
                    "transformFlags": 2,
                    "start": 767,
                    "end": 773
                },
                "flags": 767,
                "transformFlags": 0,
                "start": 35,
                "end": 774
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 767,
            "end": 775
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 778,
                            "end": 778
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 777,
                        "end": 779
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 780,
                        "end": 781
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 775,
                    "end": 781
                },
                "flags": 775,
                "transformFlags": 0,
                "start": 35,
                "end": 782
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 775,
            "end": 783
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 786,
                                        "end": 787
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 786,
                                "end": 787
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 785,
                            "end": 788
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 789,
                            "end": 792
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 783,
                        "end": 792
                    },
                    "flags": 783,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 793
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 793,
                    "end": 795
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 795,
                    "end": 797
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 783,
                "end": 797
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 783,
            "end": 798
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 802,
                                    "end": 803
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392130,
                                        "text": 15,
                                        "rawText": "15",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 803,
                                        "end": 805
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "transformFlags": 0,
                                        "start": 806,
                                        "end": 807
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 808,
                                            "end": 808
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 807,
                                        "end": 809
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 805,
                                    "end": 809
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 802,
                                "end": 809
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 802,
                        "end": 809
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 801,
                    "end": 810
                },
                "flags": 798,
                "transformFlags": 0,
                "start": 35,
                "end": 811
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 798,
            "end": 812
        }
    ],
    "isModule": false,
    "source": "({ x = y } = {});\n({ x: [ x ] } = { x: null });\n({ x: { x } } = { x: null });\n({ x: { x } } = { x: undefined });\n({ x: { x } } = {});\n({ a: x } = {});\n({ x: [ x ] } = { x: undefined });\n({[(a)(x = (y))]: {}});\n({a = [b]} = 1 * (c = d));\n({a = [b]} = 1 * (d = (e)));\n({1: [b.c = x]} = 1 / (d = ((a)) = a));\n({1: [b.c = x]} = 2 / (dd = ((a)) = 3));\n({1: [b.c = x]} = 2 ** (dd = ((a)) = 3));\n({1: [b.c = x]} = 1 * (d = ((a)) = a));\n\n({a, a});\n({a, a: 1});\n({a: 1, a});\n({a: 1, a});\n({a: b = x} = d);\n({a: b = x} / d);\n({a: b * x});\n\n(x, {a, a});\n(x, {a, a: 1});\n(x, {a: 1, a});\n(x, {a: 1, a});\n(x, {a: b = x} = d);\n(x, {a: b = x} / d);\n(x, {a: b * x});\n\n({ test = 1 } = {});\n({x = 0} = 1);\n({x = 0,} = 1);\n({var: x} = 0);\n\n\n({b, c, d, ...{a} });\n((a)) = b;\n\n({}.length);\n({}.x);\n([].x);\n([x].foo) = x;\n\n({*15(){}});\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 813
}
```

### Printed

```javascript
({ x = y } = {});
({ x: [x] } = { x: null });

({ x: { x } } = { x: null });

({ x: { x } } = { x: undefined });

({ x: { x } } = {});

({ a: x } = {});

({ x: [x] } = { x: undefined });

({ [(a)(x = (y))]: {} });

({ a = [b] } = 1 * (c = d));

({ a = [b] } = 1 * (d = (e)));

({ 1: [b.c = x] } = 1 / (d = ((a)) = a));

({ 1: [b.c = x] } = 2 / (dd = ((a)) = 3));

({ 1: [b.c = x] } = 2 ** (dd = ((a)) = 3));

({ 1: [b.c = x] } = 1 * (d = ((a)) = a));

({ a, a });

({ a, a: 1 });

({ a: 1, a });

({ a: 1, a });

({ a: b = x } = d);

({ a: b = x } / d);

({ a: b * x });

(x, { a, a });

(x, { a, a: 1 });

(x, { a: 1, a });

(x, { a: 1, a });

(x, { a: b = x } = d);

(x, { a: b = x } / d);

(x, { a: b * x });

({ test = 1 } = {});

({ x = 0 } = 1);

({ x = 0 } = 1);

({ var: x } = 0);

({ b, c, d, ...{ a } });

((a)) = b;

({}.length);

({}.x);

([].x);

([x].foo) = x;

({ * 15() {} });

```

### Diagnostics

```javascript
✔ No errors
```

