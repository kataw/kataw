# Kataw parser test case

## Input

`````js
[...a, ...b];
[...a, , ...b];
[...[...a]];
[...[...async]];
[, ...a];
[, , ...a];
[,];
[[[[[[[101]]]]]]];
[[[[[[[a]]]]]]] = b;
[[[[[[[a=b]]]] = c] = c] = c] = c;
[[[[[[[a=b] = c] = c] = c] = c] = c] = c] = c;
[[[[[[[a=b]] = c]] = c] = c] = c] = c;
[[[[[[[a=b] = c]]] = c] = c] = c] = c;
[[[[[[[a=b]]]] = c] = c] = c] = c;
[[[[[[[a=b] = c] = c] = c] = c] = c] = c] = [[[[[[[a=b] = c]]] = c] = c] = c] = c;
[[[[[[[a=b]] = c]] = c] = c[[[[[[[a=b] = c]]] = c] = c] = c] = c] = c] = c;
[1, ...rest];
[...rest, 1];
[...rest, ,1];
[{a: 0}.x] = [];
[[0].x] = [];
[...50..bar];
[...50];
[...a=b];
([...a.b] = c);
([...[x]]) => x;
[(a)] = x;
(z = [...x.y] = z) => z;
(z = [...x.y]) => z;
[...[x]=y];;
[...[{a: b}.c]] = [];;
[...[{prop: 1}.prop]] = [];
({ a: {prop: 1}.prop } = {});
[{a: 1}.c] = [];
[({a: 1}.c)] = [];
[[1].c] = [];
[foo.foo, foo.bar] = [1, 2];
[([1].c)] = [];
({ a: {prop: 1}.prop } = {});
[foo, bar] = [0,1];
[{a: 1, b: 2, ...o}];
[5, ...[6, 7, 8], 9];
[,,,1,2];
[,,,,,,,,,,,,,,,,,,,,,,,,,];
[,,,,a,,,,,,b,,,,,,,,,1,,,,,,];
[,,,,,,,,[5, ...[6, 7, 8], 9],,,,,,,,,,,,,,,,,];
[,,,,,,,,,,,,,,,,,,,,,,,,,];
[,,,,,,,,,,,,,,,,,,,,,,,,,];
[,,3,,,];
[[1,2], [3], []];
[([b].c.d) === {string} ? f : g ];
[([3].c.d) === e ? f : g /= 1];
[{}[x ? {zzz} : (z)] /= a];
[ c.d === e ? (f) : (g) ];
["b" === e ? f : g ];
[ [b].c.d === e ? f : g ];
[{}[x ? y : z] += a];
[ c.d === (e ? f : g )];
[101];
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 1,
                                "end": 4
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 4,
                                "end": 5
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 5
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 6,
                                "end": 10
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 10,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 15,
                                "end": 18
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 18,
                                "end": 19
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 19
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 20,
                            "end": 20
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 22,
                                "end": 26
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 26,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 22,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 15,
                    "end": 27
                },
                "flags": 33,
                "start": 13,
                "end": 28
            },
            "flags": 16,
            "start": 13,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 31,
                                "end": 34
                            },
                            "argument": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 35,
                                                "end": 38
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 38,
                                                "end": 39
                                            },
                                            "flags": 32,
                                            "start": 35,
                                            "end": 39
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 35,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 34,
                                "end": 40
                            },
                            "flags": 32,
                            "start": 31,
                            "end": 40
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 31,
                    "end": 40
                },
                "flags": 33,
                "start": 29,
                "end": 41
            },
            "flags": 16,
            "start": 29,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 44,
                                "end": 47
                            },
                            "argument": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 48,
                                                "end": 51
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "async",
                                                "rawText": "async",
                                                "flags": 96,
                                                "start": 51,
                                                "end": 56
                                            },
                                            "flags": 32,
                                            "start": 48,
                                            "end": 56
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 48,
                                    "end": 56
                                },
                                "flags": 32,
                                "start": 47,
                                "end": 57
                            },
                            "flags": 32,
                            "start": 44,
                            "end": 57
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 44,
                    "end": 57
                },
                "flags": 33,
                "start": 42,
                "end": 58
            },
            "flags": 16,
            "start": 42,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 61,
                            "end": 61
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 62,
                                "end": 66
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 66,
                                "end": 67
                            },
                            "flags": 32,
                            "start": 62,
                            "end": 67
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 61,
                    "end": 67
                },
                "flags": 33,
                "start": 59,
                "end": 68
            },
            "flags": 16,
            "start": 59,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 71,
                            "end": 71
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 72,
                            "end": 72
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 74,
                                "end": 78
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 78,
                                "end": 79
                            },
                            "flags": 32,
                            "start": 74,
                            "end": 79
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 71,
                    "end": 79
                },
                "flags": 33,
                "start": 69,
                "end": 80
            },
            "flags": 16,
            "start": 69,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 83,
                            "end": 83
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 83,
                    "end": 84
                },
                "flags": 33,
                "start": 81,
                "end": 85
            },
            "flags": 16,
            "start": 81,
            "end": 86
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 119,
                                                                "elementList": {
                                                                    "kind": 270,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 119,
                                                                            "elementList": {
                                                                                "kind": 270,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 119,
                                                                                        "elementList": {
                                                                                            "kind": 270,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 201392130,
                                                                                                    "text": 101,
                                                                                                    "rawText": "101",
                                                                                                    "flags": 96,
                                                                                                    "start": 94,
                                                                                                    "end": 97
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 94,
                                                                                            "end": 97
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 93,
                                                                                        "end": 98
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 93,
                                                                                "end": 98
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 92,
                                                                            "end": 99
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 92,
                                                                    "end": 99
                                                                },
                                                                "flags": 32,
                                                                "start": 91,
                                                                "end": 100
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 91,
                                                        "end": 100
                                                    },
                                                    "flags": 32,
                                                    "start": 90,
                                                    "end": 101
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 90,
                                            "end": 101
                                        },
                                        "flags": 32,
                                        "start": 89,
                                        "end": 102
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 89,
                                "end": 102
                            },
                            "flags": 32,
                            "start": 88,
                            "end": 103
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 88,
                    "end": 103
                },
                "flags": 33,
                "start": 86,
                "end": 104
            },
            "flags": 16,
            "start": 86,
            "end": 105
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 119,
                                                                                "elementList": {
                                                                                    "kind": 270,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 119,
                                                                                            "elementList": {
                                                                                                "kind": 270,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "a",
                                                                                                        "rawText": "a",
                                                                                                        "flags": 96,
                                                                                                        "start": 113,
                                                                                                        "end": 114
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 113,
                                                                                                "end": 114
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 112,
                                                                                            "end": 115
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 112,
                                                                                    "end": 115
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 111,
                                                                                "end": 116
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 111,
                                                                        "end": 116
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 110,
                                                                    "end": 117
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 110,
                                                            "end": 117
                                                        },
                                                        "flags": 32,
                                                        "start": 109,
                                                        "end": 118
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 109,
                                                "end": 118
                                            },
                                            "flags": 32,
                                            "start": 108,
                                            "end": 119
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 108,
                                    "end": 119
                                },
                                "flags": 32,
                                "start": 107,
                                "end": 120
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 107,
                        "end": 120
                    },
                    "flags": 33,
                    "start": 105,
                    "end": 121
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 121,
                    "end": 123
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 123,
                    "end": 125
                },
                "flags": 32,
                "start": 105,
                "end": 125
            },
            "flags": 16,
            "start": 105,
            "end": 126
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 119,
                                                                                "elementList": {
                                                                                    "kind": 270,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 119,
                                                                                            "elementList": {
                                                                                                "kind": 270,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 119,
                                                                                                        "elementList": {
                                                                                                            "kind": 270,
                                                                                                            "elements": [
                                                                                                                {
                                                                                                                    "kind": 125,
                                                                                                                    "left": {
                                                                                                                        "kind": 134299649,
                                                                                                                        "text": "a",
                                                                                                                        "rawText": "a",
                                                                                                                        "flags": 96,
                                                                                                                        "start": 134,
                                                                                                                        "end": 135
                                                                                                                    },
                                                                                                                    "operatorToken": {
                                                                                                                        "kind": 4125,
                                                                                                                        "flags": 96,
                                                                                                                        "start": 135,
                                                                                                                        "end": 136
                                                                                                                    },
                                                                                                                    "right": {
                                                                                                                        "kind": 134299649,
                                                                                                                        "text": "b",
                                                                                                                        "rawText": "b",
                                                                                                                        "flags": 96,
                                                                                                                        "start": 136,
                                                                                                                        "end": 137
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "start": 134,
                                                                                                                    "end": 137
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 32,
                                                                                                            "start": 134,
                                                                                                            "end": 137
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 133,
                                                                                                        "end": 138
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 133,
                                                                                                "end": 138
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 132,
                                                                                            "end": 139
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 132,
                                                                                    "end": 139
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 131,
                                                                                "end": 140
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 131,
                                                                        "end": 140
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 130,
                                                                    "end": 141
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 141,
                                                                    "end": 143
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 143,
                                                                    "end": 145
                                                                },
                                                                "flags": 32,
                                                                "start": 130,
                                                                "end": 145
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 130,
                                                        "end": 145
                                                    },
                                                    "flags": 32,
                                                    "start": 129,
                                                    "end": 146
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 146,
                                                    "end": 148
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 148,
                                                    "end": 150
                                                },
                                                "flags": 32,
                                                "start": 129,
                                                "end": 150
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 129,
                                        "end": 150
                                    },
                                    "flags": 32,
                                    "start": 128,
                                    "end": 151
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 151,
                                    "end": 153
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 153,
                                    "end": 155
                                },
                                "flags": 32,
                                "start": 128,
                                "end": 155
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 128,
                        "end": 155
                    },
                    "flags": 33,
                    "start": 126,
                    "end": 156
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 156,
                    "end": 158
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 158,
                    "end": 160
                },
                "flags": 32,
                "start": 126,
                "end": 160
            },
            "flags": 16,
            "start": 126,
            "end": 161
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 125,
                                                                                "left": {
                                                                                    "kind": 119,
                                                                                    "elementList": {
                                                                                        "kind": 270,
                                                                                        "elements": [
                                                                                            {
                                                                                                "kind": 125,
                                                                                                "left": {
                                                                                                    "kind": 119,
                                                                                                    "elementList": {
                                                                                                        "kind": 270,
                                                                                                        "elements": [
                                                                                                            {
                                                                                                                "kind": 125,
                                                                                                                "left": {
                                                                                                                    "kind": 119,
                                                                                                                    "elementList": {
                                                                                                                        "kind": 270,
                                                                                                                        "elements": [
                                                                                                                            {
                                                                                                                                "kind": 125,
                                                                                                                                "left": {
                                                                                                                                    "kind": 134299649,
                                                                                                                                    "text": "a",
                                                                                                                                    "rawText": "a",
                                                                                                                                    "flags": 96,
                                                                                                                                    "start": 169,
                                                                                                                                    "end": 170
                                                                                                                                },
                                                                                                                                "operatorToken": {
                                                                                                                                    "kind": 4125,
                                                                                                                                    "flags": 96,
                                                                                                                                    "start": 170,
                                                                                                                                    "end": 171
                                                                                                                                },
                                                                                                                                "right": {
                                                                                                                                    "kind": 134299649,
                                                                                                                                    "text": "b",
                                                                                                                                    "rawText": "b",
                                                                                                                                    "flags": 96,
                                                                                                                                    "start": 171,
                                                                                                                                    "end": 172
                                                                                                                                },
                                                                                                                                "flags": 32,
                                                                                                                                "start": 169,
                                                                                                                                "end": 172
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "trailingComma": false,
                                                                                                                        "flags": 32,
                                                                                                                        "start": 169,
                                                                                                                        "end": 172
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "start": 168,
                                                                                                                    "end": 173
                                                                                                                },
                                                                                                                "operatorToken": {
                                                                                                                    "kind": 4125,
                                                                                                                    "flags": 96,
                                                                                                                    "start": 173,
                                                                                                                    "end": 175
                                                                                                                },
                                                                                                                "right": {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "c",
                                                                                                                    "rawText": "c",
                                                                                                                    "flags": 96,
                                                                                                                    "start": 175,
                                                                                                                    "end": 177
                                                                                                                },
                                                                                                                "flags": 32,
                                                                                                                "start": 168,
                                                                                                                "end": 177
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 32,
                                                                                                        "start": 168,
                                                                                                        "end": 177
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "start": 167,
                                                                                                    "end": 178
                                                                                                },
                                                                                                "operatorToken": {
                                                                                                    "kind": 4125,
                                                                                                    "flags": 96,
                                                                                                    "start": 178,
                                                                                                    "end": 180
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "c",
                                                                                                    "rawText": "c",
                                                                                                    "flags": 96,
                                                                                                    "start": 180,
                                                                                                    "end": 182
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 167,
                                                                                                "end": 182
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 167,
                                                                                        "end": 182
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 166,
                                                                                    "end": 183
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 4125,
                                                                                    "flags": 96,
                                                                                    "start": 183,
                                                                                    "end": 185
                                                                                },
                                                                                "right": {
                                                                                    "kind": 134299649,
                                                                                    "text": "c",
                                                                                    "rawText": "c",
                                                                                    "flags": 96,
                                                                                    "start": 185,
                                                                                    "end": 187
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 166,
                                                                                "end": 187
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 166,
                                                                        "end": 187
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 165,
                                                                    "end": 188
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 188,
                                                                    "end": 190
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 190,
                                                                    "end": 192
                                                                },
                                                                "flags": 32,
                                                                "start": 165,
                                                                "end": 192
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 165,
                                                        "end": 192
                                                    },
                                                    "flags": 32,
                                                    "start": 164,
                                                    "end": 193
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 193,
                                                    "end": 195
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 195,
                                                    "end": 197
                                                },
                                                "flags": 32,
                                                "start": 164,
                                                "end": 197
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 164,
                                        "end": 197
                                    },
                                    "flags": 32,
                                    "start": 163,
                                    "end": 198
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 198,
                                    "end": 200
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 200,
                                    "end": 202
                                },
                                "flags": 32,
                                "start": 163,
                                "end": 202
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 163,
                        "end": 202
                    },
                    "flags": 33,
                    "start": 161,
                    "end": 203
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 203,
                    "end": 205
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 205,
                    "end": 207
                },
                "flags": 32,
                "start": 161,
                "end": 207
            },
            "flags": 16,
            "start": 161,
            "end": 208
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 119,
                                                                                "elementList": {
                                                                                    "kind": 270,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 125,
                                                                                            "left": {
                                                                                                "kind": 119,
                                                                                                "elementList": {
                                                                                                    "kind": 270,
                                                                                                    "elements": [
                                                                                                        {
                                                                                                            "kind": 119,
                                                                                                            "elementList": {
                                                                                                                "kind": 270,
                                                                                                                "elements": [
                                                                                                                    {
                                                                                                                        "kind": 125,
                                                                                                                        "left": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "a",
                                                                                                                            "rawText": "a",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 216,
                                                                                                                            "end": 217
                                                                                                                        },
                                                                                                                        "operatorToken": {
                                                                                                                            "kind": 4125,
                                                                                                                            "flags": 96,
                                                                                                                            "start": 217,
                                                                                                                            "end": 218
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "b",
                                                                                                                            "rawText": "b",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 218,
                                                                                                                            "end": 219
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "start": 216,
                                                                                                                        "end": 219
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "start": 216,
                                                                                                                "end": 219
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "start": 215,
                                                                                                            "end": 220
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "start": 215,
                                                                                                    "end": 220
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 214,
                                                                                                "end": 221
                                                                                            },
                                                                                            "operatorToken": {
                                                                                                "kind": 4125,
                                                                                                "flags": 96,
                                                                                                "start": 221,
                                                                                                "end": 223
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 134299649,
                                                                                                "text": "c",
                                                                                                "rawText": "c",
                                                                                                "flags": 96,
                                                                                                "start": 223,
                                                                                                "end": 225
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 214,
                                                                                            "end": 225
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 214,
                                                                                    "end": 225
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 213,
                                                                                "end": 226
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 213,
                                                                        "end": 226
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 212,
                                                                    "end": 227
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 227,
                                                                    "end": 229
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 229,
                                                                    "end": 231
                                                                },
                                                                "flags": 32,
                                                                "start": 212,
                                                                "end": 231
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 212,
                                                        "end": 231
                                                    },
                                                    "flags": 32,
                                                    "start": 211,
                                                    "end": 232
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 232,
                                                    "end": 234
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 234,
                                                    "end": 236
                                                },
                                                "flags": 32,
                                                "start": 211,
                                                "end": 236
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 211,
                                        "end": 236
                                    },
                                    "flags": 32,
                                    "start": 210,
                                    "end": 237
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 237,
                                    "end": 239
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 239,
                                    "end": 241
                                },
                                "flags": 32,
                                "start": 210,
                                "end": 241
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 210,
                        "end": 241
                    },
                    "flags": 33,
                    "start": 208,
                    "end": 242
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 242,
                    "end": 244
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 244,
                    "end": 246
                },
                "flags": 32,
                "start": 208,
                "end": 246
            },
            "flags": 16,
            "start": 208,
            "end": 247
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 119,
                                                                                "elementList": {
                                                                                    "kind": 270,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 119,
                                                                                            "elementList": {
                                                                                                "kind": 270,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 125,
                                                                                                        "left": {
                                                                                                            "kind": 119,
                                                                                                            "elementList": {
                                                                                                                "kind": 270,
                                                                                                                "elements": [
                                                                                                                    {
                                                                                                                        "kind": 125,
                                                                                                                        "left": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "a",
                                                                                                                            "rawText": "a",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 255,
                                                                                                                            "end": 256
                                                                                                                        },
                                                                                                                        "operatorToken": {
                                                                                                                            "kind": 4125,
                                                                                                                            "flags": 96,
                                                                                                                            "start": 256,
                                                                                                                            "end": 257
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "b",
                                                                                                                            "rawText": "b",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 257,
                                                                                                                            "end": 258
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "start": 255,
                                                                                                                        "end": 258
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "start": 255,
                                                                                                                "end": 258
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "start": 254,
                                                                                                            "end": 259
                                                                                                        },
                                                                                                        "operatorToken": {
                                                                                                            "kind": 4125,
                                                                                                            "flags": 96,
                                                                                                            "start": 259,
                                                                                                            "end": 261
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "c",
                                                                                                            "rawText": "c",
                                                                                                            "flags": 96,
                                                                                                            "start": 261,
                                                                                                            "end": 263
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 254,
                                                                                                        "end": 263
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 254,
                                                                                                "end": 263
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 253,
                                                                                            "end": 264
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 253,
                                                                                    "end": 264
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 252,
                                                                                "end": 265
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 252,
                                                                        "end": 265
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 251,
                                                                    "end": 266
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 266,
                                                                    "end": 268
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 268,
                                                                    "end": 270
                                                                },
                                                                "flags": 32,
                                                                "start": 251,
                                                                "end": 270
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 251,
                                                        "end": 270
                                                    },
                                                    "flags": 32,
                                                    "start": 250,
                                                    "end": 271
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 271,
                                                    "end": 273
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 273,
                                                    "end": 275
                                                },
                                                "flags": 32,
                                                "start": 250,
                                                "end": 275
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 250,
                                        "end": 275
                                    },
                                    "flags": 32,
                                    "start": 249,
                                    "end": 276
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 276,
                                    "end": 278
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 278,
                                    "end": 280
                                },
                                "flags": 32,
                                "start": 249,
                                "end": 280
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 249,
                        "end": 280
                    },
                    "flags": 33,
                    "start": 247,
                    "end": 281
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 281,
                    "end": 283
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 283,
                    "end": 285
                },
                "flags": 32,
                "start": 247,
                "end": 285
            },
            "flags": 16,
            "start": 247,
            "end": 286
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 119,
                                                                                "elementList": {
                                                                                    "kind": 270,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 119,
                                                                                            "elementList": {
                                                                                                "kind": 270,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 119,
                                                                                                        "elementList": {
                                                                                                            "kind": 270,
                                                                                                            "elements": [
                                                                                                                {
                                                                                                                    "kind": 125,
                                                                                                                    "left": {
                                                                                                                        "kind": 134299649,
                                                                                                                        "text": "a",
                                                                                                                        "rawText": "a",
                                                                                                                        "flags": 96,
                                                                                                                        "start": 294,
                                                                                                                        "end": 295
                                                                                                                    },
                                                                                                                    "operatorToken": {
                                                                                                                        "kind": 4125,
                                                                                                                        "flags": 96,
                                                                                                                        "start": 295,
                                                                                                                        "end": 296
                                                                                                                    },
                                                                                                                    "right": {
                                                                                                                        "kind": 134299649,
                                                                                                                        "text": "b",
                                                                                                                        "rawText": "b",
                                                                                                                        "flags": 96,
                                                                                                                        "start": 296,
                                                                                                                        "end": 297
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "start": 294,
                                                                                                                    "end": 297
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 32,
                                                                                                            "start": 294,
                                                                                                            "end": 297
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 293,
                                                                                                        "end": 298
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 293,
                                                                                                "end": 298
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 292,
                                                                                            "end": 299
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 292,
                                                                                    "end": 299
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 291,
                                                                                "end": 300
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 291,
                                                                        "end": 300
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 290,
                                                                    "end": 301
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 301,
                                                                    "end": 303
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 303,
                                                                    "end": 305
                                                                },
                                                                "flags": 32,
                                                                "start": 290,
                                                                "end": 305
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 290,
                                                        "end": 305
                                                    },
                                                    "flags": 32,
                                                    "start": 289,
                                                    "end": 306
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 306,
                                                    "end": 308
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 308,
                                                    "end": 310
                                                },
                                                "flags": 32,
                                                "start": 289,
                                                "end": 310
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 289,
                                        "end": 310
                                    },
                                    "flags": 32,
                                    "start": 288,
                                    "end": 311
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 311,
                                    "end": 313
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 313,
                                    "end": 315
                                },
                                "flags": 32,
                                "start": 288,
                                "end": 315
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 288,
                        "end": 315
                    },
                    "flags": 33,
                    "start": 286,
                    "end": 316
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 316,
                    "end": 318
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 318,
                    "end": 320
                },
                "flags": 32,
                "start": 286,
                "end": 320
            },
            "flags": 16,
            "start": 286,
            "end": 321
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 125,
                                                                                "left": {
                                                                                    "kind": 119,
                                                                                    "elementList": {
                                                                                        "kind": 270,
                                                                                        "elements": [
                                                                                            {
                                                                                                "kind": 125,
                                                                                                "left": {
                                                                                                    "kind": 119,
                                                                                                    "elementList": {
                                                                                                        "kind": 270,
                                                                                                        "elements": [
                                                                                                            {
                                                                                                                "kind": 125,
                                                                                                                "left": {
                                                                                                                    "kind": 119,
                                                                                                                    "elementList": {
                                                                                                                        "kind": 270,
                                                                                                                        "elements": [
                                                                                                                            {
                                                                                                                                "kind": 125,
                                                                                                                                "left": {
                                                                                                                                    "kind": 134299649,
                                                                                                                                    "text": "a",
                                                                                                                                    "rawText": "a",
                                                                                                                                    "flags": 96,
                                                                                                                                    "start": 329,
                                                                                                                                    "end": 330
                                                                                                                                },
                                                                                                                                "operatorToken": {
                                                                                                                                    "kind": 4125,
                                                                                                                                    "flags": 96,
                                                                                                                                    "start": 330,
                                                                                                                                    "end": 331
                                                                                                                                },
                                                                                                                                "right": {
                                                                                                                                    "kind": 134299649,
                                                                                                                                    "text": "b",
                                                                                                                                    "rawText": "b",
                                                                                                                                    "flags": 96,
                                                                                                                                    "start": 331,
                                                                                                                                    "end": 332
                                                                                                                                },
                                                                                                                                "flags": 32,
                                                                                                                                "start": 329,
                                                                                                                                "end": 332
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "trailingComma": false,
                                                                                                                        "flags": 32,
                                                                                                                        "start": 329,
                                                                                                                        "end": 332
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "start": 328,
                                                                                                                    "end": 333
                                                                                                                },
                                                                                                                "operatorToken": {
                                                                                                                    "kind": 4125,
                                                                                                                    "flags": 96,
                                                                                                                    "start": 333,
                                                                                                                    "end": 335
                                                                                                                },
                                                                                                                "right": {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "c",
                                                                                                                    "rawText": "c",
                                                                                                                    "flags": 96,
                                                                                                                    "start": 335,
                                                                                                                    "end": 337
                                                                                                                },
                                                                                                                "flags": 32,
                                                                                                                "start": 328,
                                                                                                                "end": 337
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 32,
                                                                                                        "start": 328,
                                                                                                        "end": 337
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "start": 327,
                                                                                                    "end": 338
                                                                                                },
                                                                                                "operatorToken": {
                                                                                                    "kind": 4125,
                                                                                                    "flags": 96,
                                                                                                    "start": 338,
                                                                                                    "end": 340
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "c",
                                                                                                    "rawText": "c",
                                                                                                    "flags": 96,
                                                                                                    "start": 340,
                                                                                                    "end": 342
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 327,
                                                                                                "end": 342
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 327,
                                                                                        "end": 342
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 326,
                                                                                    "end": 343
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 4125,
                                                                                    "flags": 96,
                                                                                    "start": 343,
                                                                                    "end": 345
                                                                                },
                                                                                "right": {
                                                                                    "kind": 134299649,
                                                                                    "text": "c",
                                                                                    "rawText": "c",
                                                                                    "flags": 96,
                                                                                    "start": 345,
                                                                                    "end": 347
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 326,
                                                                                "end": 347
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 326,
                                                                        "end": 347
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 325,
                                                                    "end": 348
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 348,
                                                                    "end": 350
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 350,
                                                                    "end": 352
                                                                },
                                                                "flags": 32,
                                                                "start": 325,
                                                                "end": 352
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 325,
                                                        "end": 352
                                                    },
                                                    "flags": 32,
                                                    "start": 324,
                                                    "end": 353
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 353,
                                                    "end": 355
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 355,
                                                    "end": 357
                                                },
                                                "flags": 32,
                                                "start": 324,
                                                "end": 357
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 324,
                                        "end": 357
                                    },
                                    "flags": 32,
                                    "start": 323,
                                    "end": 358
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 358,
                                    "end": 360
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 360,
                                    "end": 362
                                },
                                "flags": 32,
                                "start": 323,
                                "end": 362
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 323,
                        "end": 362
                    },
                    "flags": 33,
                    "start": 321,
                    "end": 363
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 363,
                    "end": 365
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 125,
                                                                    "left": {
                                                                        "kind": 119,
                                                                        "elementList": {
                                                                            "kind": 270,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 119,
                                                                                    "elementList": {
                                                                                        "kind": 270,
                                                                                        "elements": [
                                                                                            {
                                                                                                "kind": 119,
                                                                                                "elementList": {
                                                                                                    "kind": 270,
                                                                                                    "elements": [
                                                                                                        {
                                                                                                            "kind": 125,
                                                                                                            "left": {
                                                                                                                "kind": 119,
                                                                                                                "elementList": {
                                                                                                                    "kind": 270,
                                                                                                                    "elements": [
                                                                                                                        {
                                                                                                                            "kind": 125,
                                                                                                                            "left": {
                                                                                                                                "kind": 134299649,
                                                                                                                                "text": "a",
                                                                                                                                "rawText": "a",
                                                                                                                                "flags": 96,
                                                                                                                                "start": 373,
                                                                                                                                "end": 374
                                                                                                                            },
                                                                                                                            "operatorToken": {
                                                                                                                                "kind": 4125,
                                                                                                                                "flags": 96,
                                                                                                                                "start": 374,
                                                                                                                                "end": 375
                                                                                                                            },
                                                                                                                            "right": {
                                                                                                                                "kind": 134299649,
                                                                                                                                "text": "b",
                                                                                                                                "rawText": "b",
                                                                                                                                "flags": 96,
                                                                                                                                "start": 375,
                                                                                                                                "end": 376
                                                                                                                            },
                                                                                                                            "flags": 32,
                                                                                                                            "start": 373,
                                                                                                                            "end": 376
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "trailingComma": false,
                                                                                                                    "flags": 32,
                                                                                                                    "start": 373,
                                                                                                                    "end": 376
                                                                                                                },
                                                                                                                "flags": 32,
                                                                                                                "start": 372,
                                                                                                                "end": 377
                                                                                                            },
                                                                                                            "operatorToken": {
                                                                                                                "kind": 4125,
                                                                                                                "flags": 96,
                                                                                                                "start": 377,
                                                                                                                "end": 379
                                                                                                            },
                                                                                                            "right": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "c",
                                                                                                                "rawText": "c",
                                                                                                                "flags": 96,
                                                                                                                "start": 379,
                                                                                                                "end": 381
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "start": 372,
                                                                                                            "end": 381
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "start": 372,
                                                                                                    "end": 381
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 371,
                                                                                                "end": 382
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 371,
                                                                                        "end": 382
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 370,
                                                                                    "end": 383
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 370,
                                                                            "end": 383
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 369,
                                                                        "end": 384
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4125,
                                                                        "flags": 96,
                                                                        "start": 384,
                                                                        "end": 386
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "c",
                                                                        "rawText": "c",
                                                                        "flags": 96,
                                                                        "start": 386,
                                                                        "end": 388
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 369,
                                                                    "end": 388
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 369,
                                                            "end": 388
                                                        },
                                                        "flags": 32,
                                                        "start": 368,
                                                        "end": 389
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 389,
                                                        "end": 391
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 391,
                                                        "end": 393
                                                    },
                                                    "flags": 32,
                                                    "start": 368,
                                                    "end": 393
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 368,
                                            "end": 393
                                        },
                                        "flags": 32,
                                        "start": 367,
                                        "end": 394
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 394,
                                        "end": 396
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 396,
                                        "end": 398
                                    },
                                    "flags": 32,
                                    "start": 367,
                                    "end": 398
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 367,
                            "end": 398
                        },
                        "flags": 32,
                        "start": 365,
                        "end": 399
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 399,
                        "end": 401
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 401,
                        "end": 403
                    },
                    "flags": 32,
                    "start": 365,
                    "end": 403
                },
                "flags": 32,
                "start": 321,
                "end": 403
            },
            "flags": 16,
            "start": 321,
            "end": 404
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 119,
                                                                                "elementList": {
                                                                                    "kind": 270,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 125,
                                                                                            "left": {
                                                                                                "kind": 119,
                                                                                                "elementList": {
                                                                                                    "kind": 270,
                                                                                                    "elements": [
                                                                                                        {
                                                                                                            "kind": 119,
                                                                                                            "elementList": {
                                                                                                                "kind": 270,
                                                                                                                "elements": [
                                                                                                                    {
                                                                                                                        "kind": 125,
                                                                                                                        "left": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "a",
                                                                                                                            "rawText": "a",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 412,
                                                                                                                            "end": 413
                                                                                                                        },
                                                                                                                        "operatorToken": {
                                                                                                                            "kind": 4125,
                                                                                                                            "flags": 96,
                                                                                                                            "start": 413,
                                                                                                                            "end": 414
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "b",
                                                                                                                            "rawText": "b",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 414,
                                                                                                                            "end": 415
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "start": 412,
                                                                                                                        "end": 415
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "start": 412,
                                                                                                                "end": 415
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "start": 411,
                                                                                                            "end": 416
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "start": 411,
                                                                                                    "end": 416
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 410,
                                                                                                "end": 417
                                                                                            },
                                                                                            "operatorToken": {
                                                                                                "kind": 4125,
                                                                                                "flags": 96,
                                                                                                "start": 417,
                                                                                                "end": 419
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 134299649,
                                                                                                "text": "c",
                                                                                                "rawText": "c",
                                                                                                "flags": 96,
                                                                                                "start": 419,
                                                                                                "end": 421
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 410,
                                                                                            "end": 421
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 410,
                                                                                    "end": 421
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 409,
                                                                                "end": 422
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 409,
                                                                        "end": 422
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 408,
                                                                    "end": 423
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 423,
                                                                    "end": 425
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 425,
                                                                    "end": 427
                                                                },
                                                                "flags": 32,
                                                                "start": 408,
                                                                "end": 427
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 408,
                                                        "end": 427
                                                    },
                                                    "flags": 32,
                                                    "start": 407,
                                                    "end": 428
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 428,
                                                    "end": 430
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 130,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 96,
                                                            "start": 430,
                                                            "end": 432
                                                        },
                                                        "expression": {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 119,
                                                                "elementList": {
                                                                    "kind": 270,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 125,
                                                                            "left": {
                                                                                "kind": 119,
                                                                                "elementList": {
                                                                                    "kind": 270,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 125,
                                                                                            "left": {
                                                                                                "kind": 119,
                                                                                                "elementList": {
                                                                                                    "kind": 270,
                                                                                                    "elements": [
                                                                                                        {
                                                                                                            "kind": 119,
                                                                                                            "elementList": {
                                                                                                                "kind": 270,
                                                                                                                "elements": [
                                                                                                                    {
                                                                                                                        "kind": 119,
                                                                                                                        "elementList": {
                                                                                                                            "kind": 270,
                                                                                                                            "elements": [
                                                                                                                                {
                                                                                                                                    "kind": 125,
                                                                                                                                    "left": {
                                                                                                                                        "kind": 119,
                                                                                                                                        "elementList": {
                                                                                                                                            "kind": 270,
                                                                                                                                            "elements": [
                                                                                                                                                {
                                                                                                                                                    "kind": 125,
                                                                                                                                                    "left": {
                                                                                                                                                        "kind": 134299649,
                                                                                                                                                        "text": "a",
                                                                                                                                                        "rawText": "a",
                                                                                                                                                        "flags": 96,
                                                                                                                                                        "start": 439,
                                                                                                                                                        "end": 440
                                                                                                                                                    },
                                                                                                                                                    "operatorToken": {
                                                                                                                                                        "kind": 4125,
                                                                                                                                                        "flags": 96,
                                                                                                                                                        "start": 440,
                                                                                                                                                        "end": 441
                                                                                                                                                    },
                                                                                                                                                    "right": {
                                                                                                                                                        "kind": 134299649,
                                                                                                                                                        "text": "b",
                                                                                                                                                        "rawText": "b",
                                                                                                                                                        "flags": 96,
                                                                                                                                                        "start": 441,
                                                                                                                                                        "end": 442
                                                                                                                                                    },
                                                                                                                                                    "flags": 32,
                                                                                                                                                    "start": 439,
                                                                                                                                                    "end": 442
                                                                                                                                                }
                                                                                                                                            ],
                                                                                                                                            "trailingComma": false,
                                                                                                                                            "flags": 32,
                                                                                                                                            "start": 439,
                                                                                                                                            "end": 442
                                                                                                                                        },
                                                                                                                                        "flags": 32,
                                                                                                                                        "start": 438,
                                                                                                                                        "end": 443
                                                                                                                                    },
                                                                                                                                    "operatorToken": {
                                                                                                                                        "kind": 4125,
                                                                                                                                        "flags": 96,
                                                                                                                                        "start": 443,
                                                                                                                                        "end": 445
                                                                                                                                    },
                                                                                                                                    "right": {
                                                                                                                                        "kind": 134299649,
                                                                                                                                        "text": "c",
                                                                                                                                        "rawText": "c",
                                                                                                                                        "flags": 96,
                                                                                                                                        "start": 445,
                                                                                                                                        "end": 447
                                                                                                                                    },
                                                                                                                                    "flags": 32,
                                                                                                                                    "start": 438,
                                                                                                                                    "end": 447
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "flags": 32,
                                                                                                                            "start": 438,
                                                                                                                            "end": 447
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "start": 437,
                                                                                                                        "end": 448
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "start": 437,
                                                                                                                "end": 448
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "start": 436,
                                                                                                            "end": 449
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "start": 436,
                                                                                                    "end": 449
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 435,
                                                                                                "end": 450
                                                                                            },
                                                                                            "operatorToken": {
                                                                                                "kind": 4125,
                                                                                                "flags": 96,
                                                                                                "start": 450,
                                                                                                "end": 452
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 134299649,
                                                                                                "text": "c",
                                                                                                "rawText": "c",
                                                                                                "flags": 96,
                                                                                                "start": 452,
                                                                                                "end": 454
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 435,
                                                                                            "end": 454
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 435,
                                                                                    "end": 454
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 434,
                                                                                "end": 455
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 96,
                                                                                "start": 455,
                                                                                "end": 457
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "c",
                                                                                "rawText": "c",
                                                                                "flags": 96,
                                                                                "start": 457,
                                                                                "end": 459
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 434,
                                                                            "end": 459
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 434,
                                                                    "end": 459
                                                                },
                                                                "flags": 32,
                                                                "start": 433,
                                                                "end": 460
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 96,
                                                                "start": 460,
                                                                "end": 462
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "c",
                                                                "rawText": "c",
                                                                "flags": 96,
                                                                "start": 462,
                                                                "end": 464
                                                            },
                                                            "flags": 32,
                                                            "start": 433,
                                                            "end": 464
                                                        },
                                                        "flags": 536870944,
                                                        "start": 430,
                                                        "end": 465
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 465,
                                                        "end": 467
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 467,
                                                        "end": 469
                                                    },
                                                    "flags": 32,
                                                    "start": 430,
                                                    "end": 469
                                                },
                                                "flags": 32,
                                                "start": 407,
                                                "end": 469
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 407,
                                        "end": 469
                                    },
                                    "flags": 32,
                                    "start": 406,
                                    "end": 470
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 470,
                                    "end": 472
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 472,
                                    "end": 474
                                },
                                "flags": 32,
                                "start": 406,
                                "end": 474
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 406,
                        "end": 474
                    },
                    "flags": 33,
                    "start": 404,
                    "end": 475
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 475,
                    "end": 477
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 477,
                    "end": 479
                },
                "flags": 32,
                "start": 404,
                "end": 479
            },
            "flags": 16,
            "start": 404,
            "end": 480
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 482,
                            "end": 483
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 484,
                                "end": 488
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "start": 488,
                                "end": 492
                            },
                            "flags": 32,
                            "start": 484,
                            "end": 492
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 482,
                    "end": 492
                },
                "flags": 33,
                "start": 480,
                "end": 493
            },
            "flags": 16,
            "start": 480,
            "end": 494
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 496,
                                "end": 499
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "start": 499,
                                "end": 503
                            },
                            "flags": 32,
                            "start": 496,
                            "end": 503
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 504,
                            "end": 506
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 496,
                    "end": 506
                },
                "flags": 33,
                "start": 494,
                "end": 507
            },
            "flags": 16,
            "start": 494,
            "end": 508
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 510,
                                "end": 513
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "start": 513,
                                "end": 517
                            },
                            "flags": 32,
                            "start": 510,
                            "end": 517
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 518,
                            "end": 518
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 520,
                            "end": 521
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 510,
                    "end": 521
                },
                "flags": 33,
                "start": 508,
                "end": 522
            },
            "flags": 16,
            "start": 508,
            "end": 523
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
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
                                                    "start": 526,
                                                    "end": 527
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 96,
                                                    "start": 528,
                                                    "end": 530
                                                },
                                                "flags": 32,
                                                "start": 526,
                                                "end": 530
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 526,
                                        "end": 530
                                    },
                                    "flags": 48,
                                    "start": 525,
                                    "end": 531
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 532,
                                    "end": 533
                                },
                                "flags": 536870944,
                                "start": 525,
                                "end": 533
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 525,
                        "end": 533
                    },
                    "flags": 33,
                    "start": 523,
                    "end": 534
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 534,
                    "end": 536
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 538,
                        "end": 538
                    },
                    "flags": 32,
                    "start": 536,
                    "end": 539
                },
                "flags": 32,
                "start": 523,
                "end": 539
            },
            "flags": 16,
            "start": 523,
            "end": 540
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 543,
                                                "end": 544
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 543,
                                        "end": 544
                                    },
                                    "flags": 32,
                                    "start": 542,
                                    "end": 545
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 546,
                                    "end": 547
                                },
                                "flags": 536870944,
                                "start": 542,
                                "end": 547
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 542,
                        "end": 547
                    },
                    "flags": 33,
                    "start": 540,
                    "end": 548
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 548,
                    "end": 550
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 552,
                        "end": 552
                    },
                    "flags": 32,
                    "start": 550,
                    "end": 553
                },
                "flags": 32,
                "start": 540,
                "end": 553
            },
            "flags": 16,
            "start": 540,
            "end": 554
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 556,
                                "end": 559
                            },
                            "argument": {
                                "kind": 129,
                                "member": {
                                    "kind": 201392130,
                                    "text": 50,
                                    "rawText": "50.",
                                    "flags": 96,
                                    "start": 559,
                                    "end": 562
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 563,
                                    "end": 566
                                },
                                "flags": 536870944,
                                "start": 559,
                                "end": 566
                            },
                            "flags": 32,
                            "start": 556,
                            "end": 566
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 556,
                    "end": 566
                },
                "flags": 33,
                "start": 554,
                "end": 567
            },
            "flags": 16,
            "start": 554,
            "end": 568
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 570,
                                "end": 573
                            },
                            "argument": {
                                "kind": 201392130,
                                "text": 50,
                                "rawText": "50",
                                "flags": 96,
                                "start": 573,
                                "end": 575
                            },
                            "flags": 32,
                            "start": 570,
                            "end": 575
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 570,
                    "end": 575
                },
                "flags": 33,
                "start": 568,
                "end": 576
            },
            "flags": 16,
            "start": 568,
            "end": 577
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 579,
                                "end": 582
                            },
                            "argument": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 582,
                                    "end": 583
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 583,
                                    "end": 584
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 584,
                                    "end": 585
                                },
                                "flags": 32,
                                "start": 582,
                                "end": 585
                            },
                            "flags": 32,
                            "start": 579,
                            "end": 585
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 579,
                    "end": 585
                },
                "flags": 33,
                "start": 577,
                "end": 586
            },
            "flags": 16,
            "start": 577,
            "end": 587
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 223,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 590,
                                        "end": 593
                                    },
                                    "argument": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 593,
                                            "end": 594
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 595,
                                            "end": 596
                                        },
                                        "flags": 536870944,
                                        "start": 593,
                                        "end": 596
                                    },
                                    "flags": 32,
                                    "start": 590,
                                    "end": 596
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 590,
                            "end": 596
                        },
                        "flags": 32,
                        "start": 589,
                        "end": 597
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 597,
                        "end": 599
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 599,
                        "end": 601
                    },
                    "flags": 32,
                    "start": 589,
                    "end": 601
                },
                "flags": 32,
                "start": 587,
                "end": 602
            },
            "flags": 16,
            "start": 587,
            "end": 603
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 606,
                                            "end": 609
                                        },
                                        "left": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 610,
                                                        "end": 611
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 610,
                                                "end": 611
                                            },
                                            "flags": 32,
                                            "start": 609,
                                            "end": 612
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "start": 606,
                                        "end": 612
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 606,
                                "end": 612
                            },
                            "flags": 32,
                            "start": 605,
                            "end": 613
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2,
                    "start": 605,
                    "end": 614
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 614,
                    "end": 617
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 617,
                    "end": 619
                },
                "flags": 34,
                "start": 603,
                "end": 619
            },
            "flags": 16,
            "start": 603,
            "end": 620
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 623,
                                    "end": 624
                                },
                                "flags": 32,
                                "start": 622,
                                "end": 625
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 622,
                        "end": 625
                    },
                    "flags": 33,
                    "start": 620,
                    "end": 626
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 626,
                    "end": 628
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 628,
                    "end": 630
                },
                "flags": 32,
                "start": 620,
                "end": 630
            },
            "flags": 16,
            "start": 620,
            "end": 631
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 633,
                                "end": 634
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 223,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "start": 638,
                                                    "end": 641
                                                },
                                                "argument": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 641,
                                                        "end": 642
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 643,
                                                        "end": 644
                                                    },
                                                    "flags": 536870944,
                                                    "start": 641,
                                                    "end": 644
                                                },
                                                "flags": 32,
                                                "start": 638,
                                                "end": 644
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 638,
                                        "end": 644
                                    },
                                    "flags": 32,
                                    "start": 636,
                                    "end": 645
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 645,
                                    "end": 647
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 647,
                                    "end": 649
                                },
                                "flags": 32,
                                "start": 636,
                                "end": 649
                            },
                            "flags": 32,
                            "start": 631,
                            "end": 649
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2,
                    "start": 633,
                    "end": 650
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 650,
                    "end": 653
                },
                "contents": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 653,
                    "end": 655
                },
                "flags": 34,
                "start": 631,
                "end": 655
            },
            "flags": 16,
            "start": 631,
            "end": 656
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 658,
                                "end": 659
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 663,
                                                "end": 666
                                            },
                                            "argument": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 666,
                                                    "end": 667
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 668,
                                                    "end": 669
                                                },
                                                "flags": 536870944,
                                                "start": 666,
                                                "end": 669
                                            },
                                            "flags": 32,
                                            "start": 663,
                                            "end": 669
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 663,
                                    "end": 669
                                },
                                "flags": 32,
                                "start": 661,
                                "end": 670
                            },
                            "flags": 32,
                            "start": 656,
                            "end": 670
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2,
                    "start": 658,
                    "end": 671
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 671,
                    "end": 674
                },
                "contents": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 674,
                    "end": 676
                },
                "flags": 34,
                "start": 656,
                "end": 676
            },
            "flags": 16,
            "start": 656,
            "end": 677
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 679,
                                "end": 682
                            },
                            "argument": {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 683,
                                                "end": 684
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 683,
                                        "end": 684
                                    },
                                    "flags": 32,
                                    "start": 682,
                                    "end": 685
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 685,
                                    "end": 686
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 686,
                                    "end": 687
                                },
                                "flags": 32,
                                "start": 682,
                                "end": 687
                            },
                            "flags": 32,
                            "start": 679,
                            "end": 687
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 679,
                    "end": 687
                },
                "flags": 33,
                "start": 677,
                "end": 688
            },
            "flags": 16,
            "start": 677,
            "end": 689
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 689,
            "end": 690
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 692,
                                    "end": 695
                                },
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 129,
                                                "member": {
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
                                                                    "start": 697,
                                                                    "end": 698
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 96,
                                                                    "start": 699,
                                                                    "end": 701
                                                                },
                                                                "flags": 32,
                                                                "start": 697,
                                                                "end": 701
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 697,
                                                        "end": 701
                                                    },
                                                    "flags": 48,
                                                    "start": 696,
                                                    "end": 702
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 703,
                                                    "end": 704
                                                },
                                                "flags": 536870944,
                                                "start": 696,
                                                "end": 704
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 696,
                                        "end": 704
                                    },
                                    "flags": 32,
                                    "start": 695,
                                    "end": 705
                                },
                                "flags": 32,
                                "start": 692,
                                "end": 705
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 692,
                        "end": 705
                    },
                    "flags": 33,
                    "start": 690,
                    "end": 706
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 706,
                    "end": 708
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 710,
                        "end": 710
                    },
                    "flags": 32,
                    "start": 708,
                    "end": 711
                },
                "flags": 32,
                "start": 690,
                "end": 711
            },
            "flags": 16,
            "start": 690,
            "end": 712
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 712,
            "end": 713
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 715,
                                    "end": 718
                                },
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "prop",
                                                                    "rawText": "prop",
                                                                    "flags": 96,
                                                                    "start": 720,
                                                                    "end": 724
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "start": 725,
                                                                    "end": 727
                                                                },
                                                                "flags": 32,
                                                                "start": 720,
                                                                "end": 727
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 720,
                                                        "end": 727
                                                    },
                                                    "flags": 48,
                                                    "start": 719,
                                                    "end": 728
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "prop",
                                                    "rawText": "prop",
                                                    "flags": 96,
                                                    "start": 729,
                                                    "end": 733
                                                },
                                                "flags": 536870944,
                                                "start": 719,
                                                "end": 733
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 719,
                                        "end": 733
                                    },
                                    "flags": 32,
                                    "start": 718,
                                    "end": 734
                                },
                                "flags": 32,
                                "start": 715,
                                "end": 734
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 715,
                        "end": 734
                    },
                    "flags": 33,
                    "start": 713,
                    "end": 735
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 735,
                    "end": 737
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 739,
                        "end": 739
                    },
                    "flags": 32,
                    "start": 737,
                    "end": 740
                },
                "flags": 32,
                "start": 713,
                "end": 740
            },
            "flags": 16,
            "start": 713,
            "end": 741
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
                                        "start": 744,
                                        "end": 746
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "prop",
                                                            "rawText": "prop",
                                                            "flags": 96,
                                                            "start": 749,
                                                            "end": 753
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 754,
                                                            "end": 756
                                                        },
                                                        "flags": 32,
                                                        "start": 749,
                                                        "end": 756
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 749,
                                                "end": 756
                                            },
                                            "flags": 48,
                                            "start": 747,
                                            "end": 757
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "prop",
                                            "rawText": "prop",
                                            "flags": 96,
                                            "start": 758,
                                            "end": 762
                                        },
                                        "flags": 536870944,
                                        "start": 744,
                                        "end": 762
                                    },
                                    "flags": 32,
                                    "start": 744,
                                    "end": 762
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 744,
                            "end": 762
                        },
                        "flags": 48,
                        "start": 743,
                        "end": 764
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 764,
                        "end": 766
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 768,
                            "end": 768
                        },
                        "flags": 48,
                        "start": 766,
                        "end": 769
                    },
                    "flags": 32,
                    "start": 743,
                    "end": 769
                },
                "flags": 32,
                "start": 741,
                "end": 770
            },
            "flags": 16,
            "start": 741,
            "end": 771
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
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
                                                    "start": 774,
                                                    "end": 775
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 776,
                                                    "end": 778
                                                },
                                                "flags": 32,
                                                "start": 774,
                                                "end": 778
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 774,
                                        "end": 778
                                    },
                                    "flags": 48,
                                    "start": 773,
                                    "end": 779
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 780,
                                    "end": 781
                                },
                                "flags": 536870944,
                                "start": 773,
                                "end": 781
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 773,
                        "end": 781
                    },
                    "flags": 33,
                    "start": 771,
                    "end": 782
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 782,
                    "end": 784
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 786,
                        "end": 786
                    },
                    "flags": 32,
                    "start": 784,
                    "end": 787
                },
                "flags": 32,
                "start": 771,
                "end": 787
            },
            "flags": 16,
            "start": 771,
            "end": 788
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 121,
                                "expression": {
                                    "kind": 129,
                                    "member": {
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
                                                        "start": 792,
                                                        "end": 793
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 794,
                                                        "end": 796
                                                    },
                                                    "flags": 32,
                                                    "start": 792,
                                                    "end": 796
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 792,
                                            "end": 796
                                        },
                                        "flags": 48,
                                        "start": 791,
                                        "end": 797
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 798,
                                        "end": 799
                                    },
                                    "flags": 536870944,
                                    "start": 790,
                                    "end": 799
                                },
                                "flags": 32,
                                "start": 790,
                                "end": 800
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 790,
                        "end": 800
                    },
                    "flags": 33,
                    "start": 788,
                    "end": 801
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 801,
                    "end": 803
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 805,
                        "end": 805
                    },
                    "flags": 32,
                    "start": 803,
                    "end": 806
                },
                "flags": 32,
                "start": 788,
                "end": 806
            },
            "flags": 16,
            "start": 788,
            "end": 807
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 810,
                                                "end": 811
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 810,
                                        "end": 811
                                    },
                                    "flags": 32,
                                    "start": 809,
                                    "end": 812
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 813,
                                    "end": 814
                                },
                                "flags": 536870944,
                                "start": 809,
                                "end": 814
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 809,
                        "end": 814
                    },
                    "flags": 33,
                    "start": 807,
                    "end": 815
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 815,
                    "end": 817
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 819,
                        "end": 819
                    },
                    "flags": 32,
                    "start": 817,
                    "end": 820
                },
                "flags": 32,
                "start": 807,
                "end": 820
            },
            "flags": 16,
            "start": 807,
            "end": 821
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 823,
                                    "end": 826
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 827,
                                    "end": 830
                                },
                                "flags": 536870944,
                                "start": 823,
                                "end": 830
                            },
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 831,
                                    "end": 835
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 836,
                                    "end": 839
                                },
                                "flags": 536870944,
                                "start": 831,
                                "end": 839
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 823,
                        "end": 839
                    },
                    "flags": 33,
                    "start": 821,
                    "end": 840
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 840,
                    "end": 842
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 844,
                                "end": 845
                            },
                            {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 846,
                                "end": 848
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 844,
                        "end": 848
                    },
                    "flags": 32,
                    "start": 842,
                    "end": 849
                },
                "flags": 32,
                "start": 821,
                "end": 849
            },
            "flags": 16,
            "start": 821,
            "end": 850
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 121,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 854,
                                                    "end": 855
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 854,
                                            "end": 855
                                        },
                                        "flags": 32,
                                        "start": 853,
                                        "end": 856
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 857,
                                        "end": 858
                                    },
                                    "flags": 536870944,
                                    "start": 852,
                                    "end": 858
                                },
                                "flags": 32,
                                "start": 852,
                                "end": 859
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 852,
                        "end": 859
                    },
                    "flags": 33,
                    "start": 850,
                    "end": 860
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 860,
                    "end": 862
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 864,
                        "end": 864
                    },
                    "flags": 32,
                    "start": 862,
                    "end": 865
                },
                "flags": 32,
                "start": 850,
                "end": 865
            },
            "flags": 16,
            "start": 850,
            "end": 866
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
                                        "start": 869,
                                        "end": 871
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "prop",
                                                            "rawText": "prop",
                                                            "flags": 96,
                                                            "start": 874,
                                                            "end": 878
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 879,
                                                            "end": 881
                                                        },
                                                        "flags": 32,
                                                        "start": 874,
                                                        "end": 881
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 874,
                                                "end": 881
                                            },
                                            "flags": 48,
                                            "start": 872,
                                            "end": 882
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "prop",
                                            "rawText": "prop",
                                            "flags": 96,
                                            "start": 883,
                                            "end": 887
                                        },
                                        "flags": 536870944,
                                        "start": 869,
                                        "end": 887
                                    },
                                    "flags": 32,
                                    "start": 869,
                                    "end": 887
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 869,
                            "end": 887
                        },
                        "flags": 48,
                        "start": 868,
                        "end": 889
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 889,
                        "end": 891
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 893,
                            "end": 893
                        },
                        "flags": 48,
                        "start": 891,
                        "end": 894
                    },
                    "flags": 32,
                    "start": 868,
                    "end": 894
                },
                "flags": 32,
                "start": 866,
                "end": 895
            },
            "flags": 16,
            "start": 866,
            "end": 896
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 898,
                                "end": 901
                            },
                            {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 902,
                                "end": 906
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 898,
                        "end": 906
                    },
                    "flags": 33,
                    "start": 896,
                    "end": 907
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 907,
                    "end": 909
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 911,
                                "end": 912
                            },
                            {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 913,
                                "end": 914
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 911,
                        "end": 914
                    },
                    "flags": 32,
                    "start": 909,
                    "end": 915
                },
                "flags": 32,
                "start": 896,
                "end": 915
            },
            "flags": 16,
            "start": 896,
            "end": 916
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
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
                                            "start": 919,
                                            "end": 920
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 921,
                                            "end": 923
                                        },
                                        "flags": 32,
                                        "start": 919,
                                        "end": 923
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 924,
                                            "end": 926
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 927,
                                            "end": 929
                                        },
                                        "flags": 32,
                                        "start": 924,
                                        "end": 929
                                    },
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 930,
                                            "end": 934
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "o",
                                            "rawText": "o",
                                            "flags": 96,
                                            "start": 934,
                                            "end": 935
                                        },
                                        "flags": 32,
                                        "start": 930,
                                        "end": 935
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 919,
                                "end": 935
                            },
                            "flags": 48,
                            "start": 918,
                            "end": 936
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 918,
                    "end": 936
                },
                "flags": 33,
                "start": 916,
                "end": 937
            },
            "flags": 16,
            "start": 916,
            "end": 938
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 96,
                            "start": 940,
                            "end": 941
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 942,
                                "end": 946
                            },
                            "argument": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 6,
                                            "rawText": "6",
                                            "flags": 96,
                                            "start": 947,
                                            "end": 948
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "start": 949,
                                            "end": 951
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 8,
                                            "rawText": "8",
                                            "flags": 96,
                                            "start": 952,
                                            "end": 954
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 947,
                                    "end": 954
                                },
                                "flags": 32,
                                "start": 946,
                                "end": 955
                            },
                            "flags": 32,
                            "start": 942,
                            "end": 955
                        },
                        {
                            "kind": 201392130,
                            "text": 9,
                            "rawText": "9",
                            "flags": 96,
                            "start": 956,
                            "end": 958
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 940,
                    "end": 958
                },
                "flags": 33,
                "start": 938,
                "end": 959
            },
            "flags": 16,
            "start": 938,
            "end": 960
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 962,
                            "end": 962
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 963,
                            "end": 963
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 964,
                            "end": 964
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 965,
                            "end": 966
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 967,
                            "end": 968
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 962,
                    "end": 968
                },
                "flags": 33,
                "start": 960,
                "end": 969
            },
            "flags": 16,
            "start": 960,
            "end": 970
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 972,
                            "end": 972
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 973,
                            "end": 973
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 974,
                            "end": 974
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 975,
                            "end": 975
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 976,
                            "end": 976
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 977,
                            "end": 977
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 978,
                            "end": 978
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 979,
                            "end": 979
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 980,
                            "end": 980
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 981,
                            "end": 981
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 982,
                            "end": 982
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 983,
                            "end": 983
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 984,
                            "end": 984
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 985,
                            "end": 985
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 986,
                            "end": 986
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 987,
                            "end": 987
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 988,
                            "end": 988
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 989,
                            "end": 989
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 990,
                            "end": 990
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 991,
                            "end": 991
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 992,
                            "end": 992
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 993,
                            "end": 993
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 994,
                            "end": 994
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 995,
                            "end": 995
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 996,
                            "end": 996
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 972,
                    "end": 997
                },
                "flags": 33,
                "start": 970,
                "end": 998
            },
            "flags": 16,
            "start": 970,
            "end": 999
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1001,
                            "end": 1001
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1002,
                            "end": 1002
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1003,
                            "end": 1003
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1004,
                            "end": 1004
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1005,
                            "end": 1006
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1007,
                            "end": 1007
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1008,
                            "end": 1008
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1009,
                            "end": 1009
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1010,
                            "end": 1010
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1011,
                            "end": 1011
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 1012,
                            "end": 1013
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1014,
                            "end": 1014
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1015,
                            "end": 1015
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1016,
                            "end": 1016
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1017,
                            "end": 1017
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1018,
                            "end": 1018
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1019,
                            "end": 1019
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1020,
                            "end": 1020
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1021,
                            "end": 1021
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1022,
                            "end": 1023
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1024,
                            "end": 1024
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1025,
                            "end": 1025
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1026,
                            "end": 1026
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1027,
                            "end": 1027
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1028,
                            "end": 1028
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 1001,
                    "end": 1029
                },
                "flags": 33,
                "start": 999,
                "end": 1030
            },
            "flags": 16,
            "start": 999,
            "end": 1031
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1033,
                            "end": 1033
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1034,
                            "end": 1034
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1035,
                            "end": 1035
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1036,
                            "end": 1036
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1037,
                            "end": 1037
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1038,
                            "end": 1038
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1039,
                            "end": 1039
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1040,
                            "end": 1040
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 5,
                                        "rawText": "5",
                                        "flags": 96,
                                        "start": 1042,
                                        "end": 1043
                                    },
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1044,
                                            "end": 1048
                                        },
                                        "argument": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 201392130,
                                                        "text": 6,
                                                        "rawText": "6",
                                                        "flags": 96,
                                                        "start": 1049,
                                                        "end": 1050
                                                    },
                                                    {
                                                        "kind": 201392130,
                                                        "text": 7,
                                                        "rawText": "7",
                                                        "flags": 96,
                                                        "start": 1051,
                                                        "end": 1053
                                                    },
                                                    {
                                                        "kind": 201392130,
                                                        "text": 8,
                                                        "rawText": "8",
                                                        "flags": 96,
                                                        "start": 1054,
                                                        "end": 1056
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 1049,
                                                "end": 1056
                                            },
                                            "flags": 32,
                                            "start": 1048,
                                            "end": 1057
                                        },
                                        "flags": 32,
                                        "start": 1044,
                                        "end": 1057
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 9,
                                        "rawText": "9",
                                        "flags": 96,
                                        "start": 1058,
                                        "end": 1060
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1042,
                                "end": 1060
                            },
                            "flags": 32,
                            "start": 1041,
                            "end": 1061
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1062,
                            "end": 1062
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1063,
                            "end": 1063
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1064,
                            "end": 1064
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1065,
                            "end": 1065
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1066,
                            "end": 1066
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1067,
                            "end": 1067
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1068,
                            "end": 1068
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1069,
                            "end": 1069
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1070,
                            "end": 1070
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1071,
                            "end": 1071
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1072,
                            "end": 1072
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1073,
                            "end": 1073
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1074,
                            "end": 1074
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1075,
                            "end": 1075
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1076,
                            "end": 1076
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1077,
                            "end": 1077
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 1033,
                    "end": 1078
                },
                "flags": 33,
                "start": 1031,
                "end": 1079
            },
            "flags": 16,
            "start": 1031,
            "end": 1080
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1082,
                            "end": 1082
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1083,
                            "end": 1083
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1084,
                            "end": 1084
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1085,
                            "end": 1085
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1086,
                            "end": 1086
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1087,
                            "end": 1087
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1088,
                            "end": 1088
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1089,
                            "end": 1089
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1090,
                            "end": 1090
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1091,
                            "end": 1091
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1092,
                            "end": 1092
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1093,
                            "end": 1093
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1094,
                            "end": 1094
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1095,
                            "end": 1095
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1096,
                            "end": 1096
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1097,
                            "end": 1097
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1098,
                            "end": 1098
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1099,
                            "end": 1099
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1100,
                            "end": 1100
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1101,
                            "end": 1101
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1102,
                            "end": 1102
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1103,
                            "end": 1103
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1104,
                            "end": 1104
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1105,
                            "end": 1105
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1106,
                            "end": 1106
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 1082,
                    "end": 1107
                },
                "flags": 33,
                "start": 1080,
                "end": 1108
            },
            "flags": 16,
            "start": 1080,
            "end": 1109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1111,
                            "end": 1111
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1112,
                            "end": 1112
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1113,
                            "end": 1113
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1114,
                            "end": 1114
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1115,
                            "end": 1115
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1116,
                            "end": 1116
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1117,
                            "end": 1117
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1118,
                            "end": 1118
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1119,
                            "end": 1119
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1120,
                            "end": 1120
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1121,
                            "end": 1121
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1122,
                            "end": 1122
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1123,
                            "end": 1123
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1124,
                            "end": 1124
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1125,
                            "end": 1125
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1126,
                            "end": 1126
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1127,
                            "end": 1127
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1128,
                            "end": 1128
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1129,
                            "end": 1129
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1130,
                            "end": 1130
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1131,
                            "end": 1131
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1132,
                            "end": 1132
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1133,
                            "end": 1133
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1134,
                            "end": 1134
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1135,
                            "end": 1135
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 1111,
                    "end": 1136
                },
                "flags": 33,
                "start": 1109,
                "end": 1137
            },
            "flags": 16,
            "start": 1109,
            "end": 1138
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1140,
                            "end": 1140
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1141,
                            "end": 1141
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 1142,
                            "end": 1143
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1144,
                            "end": 1144
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1145,
                            "end": 1145
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 1140,
                    "end": 1146
                },
                "flags": 33,
                "start": 1138,
                "end": 1147
            },
            "flags": 16,
            "start": 1138,
            "end": 1148
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
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
                                        "start": 1151,
                                        "end": 1152
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 1153,
                                        "end": 1154
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1151,
                                "end": 1154
                            },
                            "flags": 32,
                            "start": 1150,
                            "end": 1155
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "start": 1158,
                                        "end": 1159
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1158,
                                "end": 1159
                            },
                            "flags": 32,
                            "start": 1156,
                            "end": 1160
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1163,
                                "end": 1163
                            },
                            "flags": 32,
                            "start": 1161,
                            "end": 1164
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1150,
                    "end": 1164
                },
                "flags": 33,
                "start": 1148,
                "end": 1165
            },
            "flags": 16,
            "start": 1148,
            "end": 1166
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 1170,
                                                            "end": 1171
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 1170,
                                                    "end": 1171
                                                },
                                                "flags": 32,
                                                "start": 1169,
                                                "end": 1172
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 1173,
                                                "end": 1174
                                            },
                                            "flags": 536870944,
                                            "start": 1168,
                                            "end": 1174
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 1175,
                                            "end": 1176
                                        },
                                        "flags": 536870944,
                                        "start": 1168,
                                        "end": 1176
                                    },
                                    "flags": 32,
                                    "start": 1168,
                                    "end": 1177
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1177,
                                    "end": 1181
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "string",
                                                "rawText": "string",
                                                "flags": 96,
                                                "start": 1183,
                                                "end": 1189
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 1183,
                                        "end": 1189
                                    },
                                    "flags": 48,
                                    "start": 1181,
                                    "end": 1190
                                },
                                "flags": 32,
                                "start": 1168,
                                "end": 1190
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 1190,
                                "end": 1192
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 1192,
                                "end": 1194
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 1194,
                                "end": 1196
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "start": 1196,
                                "end": 1198
                            },
                            "flags": 32,
                            "start": 1168,
                            "end": 1198
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1168,
                    "end": 1198
                },
                "flags": 33,
                "start": 1166,
                "end": 1200
            },
            "flags": 16,
            "start": 1166,
            "end": 1201
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 201392130,
                                                            "text": 3,
                                                            "rawText": "3",
                                                            "flags": 96,
                                                            "start": 1205,
                                                            "end": 1206
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 1205,
                                                    "end": 1206
                                                },
                                                "flags": 32,
                                                "start": 1204,
                                                "end": 1207
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 1208,
                                                "end": 1209
                                            },
                                            "flags": 536870944,
                                            "start": 1203,
                                            "end": 1209
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 1210,
                                            "end": 1211
                                        },
                                        "flags": 536870944,
                                        "start": 1203,
                                        "end": 1211
                                    },
                                    "flags": 32,
                                    "start": 1203,
                                    "end": 1212
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1212,
                                    "end": 1216
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 1216,
                                    "end": 1218
                                },
                                "flags": 32,
                                "start": 1203,
                                "end": 1218
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 1218,
                                "end": 1220
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 1220,
                                "end": 1222
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 1222,
                                "end": 1224
                            },
                            "alternate": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 1224,
                                    "end": 1226
                                },
                                "operatorToken": {
                                    "kind": 4133,
                                    "flags": 96,
                                    "start": 1226,
                                    "end": 1229
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 1229,
                                    "end": 1231
                                },
                                "flags": 32,
                                "start": 1224,
                                "end": 1231
                            },
                            "flags": 32,
                            "start": 1203,
                            "end": 1231
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1203,
                    "end": 1231
                },
                "flags": 33,
                "start": 1201,
                "end": 1232
            },
            "flags": 16,
            "start": 1201,
            "end": 1233
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 130,
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 1236,
                                        "end": 1236
                                    },
                                    "flags": 48,
                                    "start": 1235,
                                    "end": 1237
                                },
                                "expression": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 1238,
                                        "end": 1239
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 1239,
                                        "end": 1241
                                    },
                                    "consequent": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "zzz",
                                                    "rawText": "zzz",
                                                    "flags": 96,
                                                    "start": 1243,
                                                    "end": 1246
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 1243,
                                            "end": 1246
                                        },
                                        "flags": 48,
                                        "start": 1241,
                                        "end": 1247
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 1247,
                                        "end": 1249
                                    },
                                    "alternate": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 1251,
                                            "end": 1252
                                        },
                                        "flags": 32,
                                        "start": 1249,
                                        "end": 1253
                                    },
                                    "flags": 32,
                                    "start": 1238,
                                    "end": 1253
                                },
                                "flags": 536870944,
                                "start": 1235,
                                "end": 1254
                            },
                            "operatorToken": {
                                "kind": 4133,
                                "flags": 96,
                                "start": 1254,
                                "end": 1257
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1257,
                                "end": 1259
                            },
                            "flags": 32,
                            "start": 1235,
                            "end": 1259
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1235,
                    "end": 1259
                },
                "flags": 33,
                "start": 1233,
                "end": 1260
            },
            "flags": 16,
            "start": 1233,
            "end": 1261
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 1263,
                                        "end": 1265
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "start": 1266,
                                        "end": 1267
                                    },
                                    "flags": 536870944,
                                    "start": 1263,
                                    "end": 1267
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1267,
                                    "end": 1271
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 1271,
                                    "end": 1273
                                },
                                "flags": 32,
                                "start": 1263,
                                "end": 1273
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 1273,
                                "end": 1275
                            },
                            "consequent": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 1277,
                                    "end": 1278
                                },
                                "flags": 32,
                                "start": 1275,
                                "end": 1279
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 1279,
                                "end": 1281
                            },
                            "alternate": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 1283,
                                    "end": 1284
                                },
                                "flags": 32,
                                "start": 1281,
                                "end": 1285
                            },
                            "flags": 32,
                            "start": 1263,
                            "end": 1285
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1263,
                    "end": 1285
                },
                "flags": 33,
                "start": 1261,
                "end": 1287
            },
            "flags": 16,
            "start": 1261,
            "end": 1288
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392131,
                                    "text": "b",
                                    "rawText": "\"b\"",
                                    "flags": 96,
                                    "start": 1290,
                                    "end": 1293
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1293,
                                    "end": 1297
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 1297,
                                    "end": 1299
                                },
                                "flags": 32,
                                "start": 1290,
                                "end": 1299
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 1299,
                                "end": 1301
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 1301,
                                "end": 1303
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 1303,
                                "end": 1305
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "start": 1305,
                                "end": 1307
                            },
                            "flags": 32,
                            "start": 1290,
                            "end": 1307
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1290,
                    "end": 1307
                },
                "flags": 33,
                "start": 1288,
                "end": 1309
            },
            "flags": 16,
            "start": 1288,
            "end": 1310
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 1314,
                                                        "end": 1315
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 1314,
                                                "end": 1315
                                            },
                                            "flags": 32,
                                            "start": 1312,
                                            "end": 1316
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 1317,
                                            "end": 1318
                                        },
                                        "flags": 536870944,
                                        "start": 1312,
                                        "end": 1318
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "start": 1319,
                                        "end": 1320
                                    },
                                    "flags": 536870944,
                                    "start": 1312,
                                    "end": 1320
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1320,
                                    "end": 1324
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 1324,
                                    "end": 1326
                                },
                                "flags": 32,
                                "start": 1312,
                                "end": 1326
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 1326,
                                "end": 1328
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 1328,
                                "end": 1330
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 1330,
                                "end": 1332
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "start": 1332,
                                "end": 1334
                            },
                            "flags": 32,
                            "start": 1312,
                            "end": 1334
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1312,
                    "end": 1334
                },
                "flags": 33,
                "start": 1310,
                "end": 1336
            },
            "flags": 16,
            "start": 1310,
            "end": 1337
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 130,
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 1340,
                                        "end": 1340
                                    },
                                    "flags": 48,
                                    "start": 1339,
                                    "end": 1341
                                },
                                "expression": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 1342,
                                        "end": 1343
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 1343,
                                        "end": 1345
                                    },
                                    "consequent": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 1345,
                                        "end": 1347
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 1347,
                                        "end": 1349
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 1349,
                                        "end": 1351
                                    },
                                    "flags": 32,
                                    "start": 1342,
                                    "end": 1351
                                },
                                "flags": 536870944,
                                "start": 1339,
                                "end": 1352
                            },
                            "operatorToken": {
                                "kind": 4130,
                                "flags": 96,
                                "start": 1352,
                                "end": 1355
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1355,
                                "end": 1357
                            },
                            "flags": 32,
                            "start": 1339,
                            "end": 1357
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1339,
                    "end": 1357
                },
                "flags": 33,
                "start": 1337,
                "end": 1358
            },
            "flags": 16,
            "start": 1337,
            "end": 1359
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 1361,
                                    "end": 1363
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 1364,
                                    "end": 1365
                                },
                                "flags": 536870944,
                                "start": 1361,
                                "end": 1365
                            },
                            "operatorToken": {
                                "kind": 34620,
                                "flags": 96,
                                "start": 1365,
                                "end": 1369
                            },
                            "right": {
                                "kind": 121,
                                "expression": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "start": 1371,
                                        "end": 1372
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 1372,
                                        "end": 1374
                                    },
                                    "consequent": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 1374,
                                        "end": 1376
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 1376,
                                        "end": 1378
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 96,
                                        "start": 1378,
                                        "end": 1380
                                    },
                                    "flags": 32,
                                    "start": 1369,
                                    "end": 1380
                                },
                                "flags": 32,
                                "start": 1369,
                                "end": 1382
                            },
                            "flags": 32,
                            "start": 1361,
                            "end": 1382
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1361,
                    "end": 1382
                },
                "flags": 33,
                "start": 1359,
                "end": 1383
            },
            "flags": 16,
            "start": 1359,
            "end": 1384
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 101,
                            "rawText": "101",
                            "flags": 96,
                            "start": 1386,
                            "end": 1389
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1386,
                    "end": 1389
                },
                "flags": 33,
                "start": 1384,
                "end": 1390
            },
            "flags": 16,
            "start": 1384,
            "end": 1391
        }
    ],
    "isModule": false,
    "source": "[...a, ...b];\n[...a, , ...b];\n[...[...a]];\n[...[...async]];\n[, ...a];\n[, , ...a];\n[,];\n[[[[[[[101]]]]]]];\n[[[[[[[a]]]]]]] = b;\n[[[[[[[a=b]]]] = c] = c] = c] = c;\n[[[[[[[a=b] = c] = c] = c] = c] = c] = c] = c;\n[[[[[[[a=b]] = c]] = c] = c] = c] = c;\n[[[[[[[a=b] = c]]] = c] = c] = c] = c;\n[[[[[[[a=b]]]] = c] = c] = c] = c;\n[[[[[[[a=b] = c] = c] = c] = c] = c] = c] = [[[[[[[a=b] = c]]] = c] = c] = c] = c;\n[[[[[[[a=b]] = c]] = c] = c[[[[[[[a=b] = c]]] = c] = c] = c] = c] = c] = c;\n[1, ...rest];\n[...rest, 1];\n[...rest, ,1];\n[{a: 0}.x] = [];\n[[0].x] = [];\n[...50..bar];\n[...50];\n[...a=b];\n([...a.b] = c);\n([...[x]]) => x;\n[(a)] = x;\n(z = [...x.y] = z) => z;\n(z = [...x.y]) => z;\n[...[x]=y];;\n[...[{a: b}.c]] = [];;\n[...[{prop: 1}.prop]] = [];\n({ a: {prop: 1}.prop } = {});\n[{a: 1}.c] = [];\n[({a: 1}.c)] = [];\n[[1].c] = [];\n[foo.foo, foo.bar] = [1, 2];\n[([1].c)] = [];\n({ a: {prop: 1}.prop } = {});\n[foo, bar] = [0,1];\n[{a: 1, b: 2, ...o}];\n[5, ...[6, 7, 8], 9];\n[,,,1,2];\n[,,,,,,,,,,,,,,,,,,,,,,,,,];\n[,,,,a,,,,,,b,,,,,,,,,1,,,,,,];\n[,,,,,,,,[5, ...[6, 7, 8], 9],,,,,,,,,,,,,,,,,];\n[,,,,,,,,,,,,,,,,,,,,,,,,,];\n[,,,,,,,,,,,,,,,,,,,,,,,,,];\n[,,3,,,];\n[[1,2], [3], []];\n[([b].c.d) === {string} ? f : g ];\n[([3].c.d) === e ? f : g /= 1];\n[{}[x ? {zzz} : (z)] /= a];\n[ c.d === e ? (f) : (g) ];\n[\"b\" === e ? f : g ];\n[ [b].c.d === e ? f : g ];\n[{}[x ? y : z] += a];\n[ c.d === (e ? f : g )];\n[101];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1391
}
```

### Printed

```javascript

[...a, ...b];
[...a, , ...b];
[...[...a]];
[...[...async]];
[, ...a];
[, , ...a];
[,];
[[[[[[[101]]]]]]];
[[[[[[[a]]]]]]] = b;
[[[[[[[a = b]]]] = c] = c] = c] = c;
[[[[[[[a = b] = c] = c] = c] = c] = c] = c] = c;
[[[[[[[a = b]] = c]] = c] = c] = c] = c;
[[[[[[[a = b] = c]]] = c] = c] = c] = c;
[[[[[[[a = b]]]] = c] = c] = c] = c;
[[[[[[[a = b] = c] = c] = c] = c] = c] = c] = [
  [[[[[[a = b] = c]]] = c] = c] = c
] = c;
[[[[[[[a = b]] = c]] = c] = c[[[[[[[a = b] = c]]] = c] = c] = c] = c] = c] = c;
[1, ...rest];
[...rest, 1];
[...rest, , 1];
[{ a: 0 }.x] = [];
[[0].x] = [];
[...50.bar];
[...50];
[...a = b];
([...a.b] = c);
() =>  x;
[(a)] = x;
() =>  z;
() =>  z;
[...[x] = y];
[...[{ a: b }.c]] = [];
[...[{ prop: 1 }.prop]] = [];
({ a: { prop: 1 }.prop } = {});
[{ a: 1 }.c] = [];
[({ a: 1 }.c)] = [];
[[1].c] = [];
[foo.foo, foo.bar] = [1, 2];
[([1].c)] = [];
({ a: { prop: 1 }.prop } = {});
[foo, bar] = [0, 1];
[{ a: 1, b: 2, ...o }];
[5, ...[6, 7, 8], 9];
[, , , 1, 2];
[, , , , , , , , , , , , , , , , , , , , , , , , ,];
[, , , , a, , , , , , b, , , , , , , , , 1, , , , , ,];
[, , , , , , , , [5, ...[6, 7, 8], 9], , , , , , , , , , , , , , , , ,];
[, , , , , , , , , , , , , , , , , , , , , , , , ,];
[, , , , , , , , , , , , , , , , , , , , , , , , ,];
[, , 3, , ,];
[[1, 2], [3], []];
[([b].c.d) === { string } ? f : g];
[([3].c.d) === e ? f : g /= 1];
[{}[x ? { zzz } : (z)] /= a];
[c.d === e ? (f) : (g)];
["\"b\"" === e ? f : g];
[[b].c.d === e ? f : g];
[{}[x ? y : z] += a];
[c.d === (e ? f : g)];
[101];
```

### Diagnostics

```javascript
✔ No errors
```

