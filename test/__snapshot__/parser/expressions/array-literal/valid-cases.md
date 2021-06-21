# Kataw parser test case

## Input

`````js

[];
[,];
[1];
[1,];
[,1];
[1,2];
[,1,2];
[1,,2];
[1,2,];
[1,2,,];
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
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 2
                },
                "flags": 33,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 4
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
                            "start": 6,
                            "end": 6
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 6,
                    "end": 7
                },
                "flags": 33,
                "start": 4,
                "end": 8
            },
            "flags": 16,
            "start": 4,
            "end": 9
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
                            "start": 11,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 11,
                    "end": 12
                },
                "flags": 33,
                "start": 9,
                "end": 13
            },
            "flags": 16,
            "start": 9,
            "end": 14
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
                            "start": 16,
                            "end": 17
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 16,
                    "end": 18
                },
                "flags": 33,
                "start": 14,
                "end": 19
            },
            "flags": 16,
            "start": 14,
            "end": 20
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
                            "start": 22,
                            "end": 22
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 23,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 22,
                    "end": 24
                },
                "flags": 33,
                "start": 20,
                "end": 25
            },
            "flags": 16,
            "start": 20,
            "end": 26
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
                            "start": 28,
                            "end": 29
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 30,
                            "end": 31
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 28,
                    "end": 31
                },
                "flags": 33,
                "start": 26,
                "end": 32
            },
            "flags": 16,
            "start": 26,
            "end": 33
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
                            "start": 35,
                            "end": 35
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 36,
                            "end": 37
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 38,
                            "end": 39
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 35,
                    "end": 39
                },
                "flags": 33,
                "start": 33,
                "end": 40
            },
            "flags": 16,
            "start": 33,
            "end": 41
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
                            "start": 43,
                            "end": 44
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 45,
                            "end": 45
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 46,
                            "end": 47
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 43,
                    "end": 47
                },
                "flags": 33,
                "start": 41,
                "end": 48
            },
            "flags": 16,
            "start": 41,
            "end": 49
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
                            "start": 51,
                            "end": 52
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 53,
                            "end": 54
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 51,
                    "end": 55
                },
                "flags": 33,
                "start": 49,
                "end": 56
            },
            "flags": 16,
            "start": 49,
            "end": 57
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
                            "start": 59,
                            "end": 60
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 61,
                            "end": 62
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 63,
                            "end": 63
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 59,
                    "end": 64
                },
                "flags": 33,
                "start": 57,
                "end": 65
            },
            "flags": 16,
            "start": 57,
            "end": 66
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
                                "start": 68,
                                "end": 71
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 71,
                                "end": 72
                            },
                            "flags": 32,
                            "start": 68,
                            "end": 72
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 73,
                                "end": 77
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 77,
                                "end": 78
                            },
                            "flags": 32,
                            "start": 73,
                            "end": 78
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 68,
                    "end": 78
                },
                "flags": 33,
                "start": 66,
                "end": 79
            },
            "flags": 16,
            "start": 66,
            "end": 80
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
                                "start": 82,
                                "end": 85
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 85,
                                "end": 86
                            },
                            "flags": 32,
                            "start": 82,
                            "end": 86
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 87,
                            "end": 87
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 89,
                                "end": 93
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 93,
                                "end": 94
                            },
                            "flags": 32,
                            "start": 89,
                            "end": 94
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 82,
                    "end": 94
                },
                "flags": 33,
                "start": 80,
                "end": 95
            },
            "flags": 16,
            "start": 80,
            "end": 96
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
                                "start": 98,
                                "end": 101
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
                                                "start": 102,
                                                "end": 105
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 105,
                                                "end": 106
                                            },
                                            "flags": 32,
                                            "start": 102,
                                            "end": 106
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 102,
                                    "end": 106
                                },
                                "flags": 32,
                                "start": 101,
                                "end": 107
                            },
                            "flags": 32,
                            "start": 98,
                            "end": 107
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 98,
                    "end": 107
                },
                "flags": 33,
                "start": 96,
                "end": 108
            },
            "flags": 16,
            "start": 96,
            "end": 109
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
                                "start": 111,
                                "end": 114
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
                                                "start": 115,
                                                "end": 118
                                            },
                                            "argument": {
                                                "kind": 134299649,
                                                "text": "async",
                                                "rawText": "async",
                                                "flags": 96,
                                                "start": 118,
                                                "end": 123
                                            },
                                            "flags": 32,
                                            "start": 115,
                                            "end": 123
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 115,
                                    "end": 123
                                },
                                "flags": 32,
                                "start": 114,
                                "end": 124
                            },
                            "flags": 32,
                            "start": 111,
                            "end": 124
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 111,
                    "end": 124
                },
                "flags": 33,
                "start": 109,
                "end": 125
            },
            "flags": 16,
            "start": 109,
            "end": 126
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
                            "start": 128,
                            "end": 128
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 129,
                                "end": 133
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 133,
                                "end": 134
                            },
                            "flags": 32,
                            "start": 129,
                            "end": 134
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 128,
                    "end": 134
                },
                "flags": 33,
                "start": 126,
                "end": 135
            },
            "flags": 16,
            "start": 126,
            "end": 136
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
                            "start": 138,
                            "end": 138
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 139,
                            "end": 139
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 141,
                                "end": 145
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 145,
                                "end": 146
                            },
                            "flags": 32,
                            "start": 141,
                            "end": 146
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 138,
                    "end": 146
                },
                "flags": 33,
                "start": 136,
                "end": 147
            },
            "flags": 16,
            "start": 136,
            "end": 148
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
                            "start": 150,
                            "end": 150
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 150,
                    "end": 151
                },
                "flags": 33,
                "start": 148,
                "end": 152
            },
            "flags": 16,
            "start": 148,
            "end": 153
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
                                                                                                    "start": 161,
                                                                                                    "end": 164
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 161,
                                                                                            "end": 164
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 160,
                                                                                        "end": 165
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 160,
                                                                                "end": 165
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 159,
                                                                            "end": 166
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 159,
                                                                    "end": 166
                                                                },
                                                                "flags": 32,
                                                                "start": 158,
                                                                "end": 167
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 158,
                                                        "end": 167
                                                    },
                                                    "flags": 32,
                                                    "start": 157,
                                                    "end": 168
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 157,
                                            "end": 168
                                        },
                                        "flags": 32,
                                        "start": 156,
                                        "end": 169
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 156,
                                "end": 169
                            },
                            "flags": 32,
                            "start": 155,
                            "end": 170
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 155,
                    "end": 170
                },
                "flags": 33,
                "start": 153,
                "end": 171
            },
            "flags": 16,
            "start": 153,
            "end": 172
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
                                                                                                        "start": 180,
                                                                                                        "end": 181
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 180,
                                                                                                "end": 181
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 179,
                                                                                            "end": 182
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 179,
                                                                                    "end": 182
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 178,
                                                                                "end": 183
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 178,
                                                                        "end": 183
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 177,
                                                                    "end": 184
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 177,
                                                            "end": 184
                                                        },
                                                        "flags": 32,
                                                        "start": 176,
                                                        "end": 185
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 176,
                                                "end": 185
                                            },
                                            "flags": 32,
                                            "start": 175,
                                            "end": 186
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 175,
                                    "end": 186
                                },
                                "flags": 32,
                                "start": 174,
                                "end": 187
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 174,
                        "end": 187
                    },
                    "flags": 33,
                    "start": 172,
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
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 190,
                    "end": 192
                },
                "flags": 32,
                "start": 172,
                "end": 192
            },
            "flags": 16,
            "start": 172,
            "end": 193
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
                                                                                                                        "start": 201,
                                                                                                                        "end": 202
                                                                                                                    },
                                                                                                                    "operatorToken": {
                                                                                                                        "kind": 4125,
                                                                                                                        "flags": 96,
                                                                                                                        "start": 202,
                                                                                                                        "end": 203
                                                                                                                    },
                                                                                                                    "right": {
                                                                                                                        "kind": 134299649,
                                                                                                                        "text": "b",
                                                                                                                        "rawText": "b",
                                                                                                                        "flags": 96,
                                                                                                                        "start": 203,
                                                                                                                        "end": 204
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "start": 201,
                                                                                                                    "end": 204
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 32,
                                                                                                            "start": 201,
                                                                                                            "end": 204
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 200,
                                                                                                        "end": 205
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 200,
                                                                                                "end": 205
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 199,
                                                                                            "end": 206
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 199,
                                                                                    "end": 206
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 198,
                                                                                "end": 207
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 198,
                                                                        "end": 207
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 197,
                                                                    "end": 208
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 208,
                                                                    "end": 210
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 210,
                                                                    "end": 212
                                                                },
                                                                "flags": 32,
                                                                "start": 197,
                                                                "end": 212
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 197,
                                                        "end": 212
                                                    },
                                                    "flags": 32,
                                                    "start": 196,
                                                    "end": 213
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 213,
                                                    "end": 215
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 215,
                                                    "end": 217
                                                },
                                                "flags": 32,
                                                "start": 196,
                                                "end": 217
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 196,
                                        "end": 217
                                    },
                                    "flags": 32,
                                    "start": 195,
                                    "end": 218
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 218,
                                    "end": 220
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 220,
                                    "end": 222
                                },
                                "flags": 32,
                                "start": 195,
                                "end": 222
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 195,
                        "end": 222
                    },
                    "flags": 33,
                    "start": 193,
                    "end": 223
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 223,
                    "end": 225
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 225,
                    "end": 227
                },
                "flags": 32,
                "start": 193,
                "end": 227
            },
            "flags": 16,
            "start": 193,
            "end": 228
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
                                                                                                                                    "start": 236,
                                                                                                                                    "end": 237
                                                                                                                                },
                                                                                                                                "operatorToken": {
                                                                                                                                    "kind": 4125,
                                                                                                                                    "flags": 96,
                                                                                                                                    "start": 237,
                                                                                                                                    "end": 238
                                                                                                                                },
                                                                                                                                "right": {
                                                                                                                                    "kind": 134299649,
                                                                                                                                    "text": "b",
                                                                                                                                    "rawText": "b",
                                                                                                                                    "flags": 96,
                                                                                                                                    "start": 238,
                                                                                                                                    "end": 239
                                                                                                                                },
                                                                                                                                "flags": 32,
                                                                                                                                "start": 236,
                                                                                                                                "end": 239
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "trailingComma": false,
                                                                                                                        "flags": 32,
                                                                                                                        "start": 236,
                                                                                                                        "end": 239
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "start": 235,
                                                                                                                    "end": 240
                                                                                                                },
                                                                                                                "operatorToken": {
                                                                                                                    "kind": 4125,
                                                                                                                    "flags": 96,
                                                                                                                    "start": 240,
                                                                                                                    "end": 242
                                                                                                                },
                                                                                                                "right": {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "c",
                                                                                                                    "rawText": "c",
                                                                                                                    "flags": 96,
                                                                                                                    "start": 242,
                                                                                                                    "end": 244
                                                                                                                },
                                                                                                                "flags": 32,
                                                                                                                "start": 235,
                                                                                                                "end": 244
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 32,
                                                                                                        "start": 235,
                                                                                                        "end": 244
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "start": 234,
                                                                                                    "end": 245
                                                                                                },
                                                                                                "operatorToken": {
                                                                                                    "kind": 4125,
                                                                                                    "flags": 96,
                                                                                                    "start": 245,
                                                                                                    "end": 247
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "c",
                                                                                                    "rawText": "c",
                                                                                                    "flags": 96,
                                                                                                    "start": 247,
                                                                                                    "end": 249
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 234,
                                                                                                "end": 249
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 234,
                                                                                        "end": 249
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 233,
                                                                                    "end": 250
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 4125,
                                                                                    "flags": 96,
                                                                                    "start": 250,
                                                                                    "end": 252
                                                                                },
                                                                                "right": {
                                                                                    "kind": 134299649,
                                                                                    "text": "c",
                                                                                    "rawText": "c",
                                                                                    "flags": 96,
                                                                                    "start": 252,
                                                                                    "end": 254
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 233,
                                                                                "end": 254
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 233,
                                                                        "end": 254
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 232,
                                                                    "end": 255
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 255,
                                                                    "end": 257
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 257,
                                                                    "end": 259
                                                                },
                                                                "flags": 32,
                                                                "start": 232,
                                                                "end": 259
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 232,
                                                        "end": 259
                                                    },
                                                    "flags": 32,
                                                    "start": 231,
                                                    "end": 260
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 260,
                                                    "end": 262
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 262,
                                                    "end": 264
                                                },
                                                "flags": 32,
                                                "start": 231,
                                                "end": 264
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 231,
                                        "end": 264
                                    },
                                    "flags": 32,
                                    "start": 230,
                                    "end": 265
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 265,
                                    "end": 267
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 267,
                                    "end": 269
                                },
                                "flags": 32,
                                "start": 230,
                                "end": 269
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 230,
                        "end": 269
                    },
                    "flags": 33,
                    "start": 228,
                    "end": 270
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 270,
                    "end": 272
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 272,
                    "end": 274
                },
                "flags": 32,
                "start": 228,
                "end": 274
            },
            "flags": 16,
            "start": 228,
            "end": 275
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
                                                                                                                            "start": 283,
                                                                                                                            "end": 284
                                                                                                                        },
                                                                                                                        "operatorToken": {
                                                                                                                            "kind": 4125,
                                                                                                                            "flags": 96,
                                                                                                                            "start": 284,
                                                                                                                            "end": 285
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "b",
                                                                                                                            "rawText": "b",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 285,
                                                                                                                            "end": 286
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "start": 283,
                                                                                                                        "end": 286
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "start": 283,
                                                                                                                "end": 286
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "start": 282,
                                                                                                            "end": 287
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "start": 282,
                                                                                                    "end": 287
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 281,
                                                                                                "end": 288
                                                                                            },
                                                                                            "operatorToken": {
                                                                                                "kind": 4125,
                                                                                                "flags": 96,
                                                                                                "start": 288,
                                                                                                "end": 290
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 134299649,
                                                                                                "text": "c",
                                                                                                "rawText": "c",
                                                                                                "flags": 96,
                                                                                                "start": 290,
                                                                                                "end": 292
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 281,
                                                                                            "end": 292
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 281,
                                                                                    "end": 292
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 280,
                                                                                "end": 293
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 280,
                                                                        "end": 293
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 279,
                                                                    "end": 294
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 294,
                                                                    "end": 296
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 296,
                                                                    "end": 298
                                                                },
                                                                "flags": 32,
                                                                "start": 279,
                                                                "end": 298
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 279,
                                                        "end": 298
                                                    },
                                                    "flags": 32,
                                                    "start": 278,
                                                    "end": 299
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 299,
                                                    "end": 301
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 301,
                                                    "end": 303
                                                },
                                                "flags": 32,
                                                "start": 278,
                                                "end": 303
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 278,
                                        "end": 303
                                    },
                                    "flags": 32,
                                    "start": 277,
                                    "end": 304
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 304,
                                    "end": 306
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 306,
                                    "end": 308
                                },
                                "flags": 32,
                                "start": 277,
                                "end": 308
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 277,
                        "end": 308
                    },
                    "flags": 33,
                    "start": 275,
                    "end": 309
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 309,
                    "end": 311
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 311,
                    "end": 313
                },
                "flags": 32,
                "start": 275,
                "end": 313
            },
            "flags": 16,
            "start": 275,
            "end": 314
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
                                                                                                                            "start": 322,
                                                                                                                            "end": 323
                                                                                                                        },
                                                                                                                        "operatorToken": {
                                                                                                                            "kind": 4125,
                                                                                                                            "flags": 96,
                                                                                                                            "start": 323,
                                                                                                                            "end": 324
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "b",
                                                                                                                            "rawText": "b",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 324,
                                                                                                                            "end": 325
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "start": 322,
                                                                                                                        "end": 325
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "start": 322,
                                                                                                                "end": 325
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "start": 321,
                                                                                                            "end": 326
                                                                                                        },
                                                                                                        "operatorToken": {
                                                                                                            "kind": 4125,
                                                                                                            "flags": 96,
                                                                                                            "start": 326,
                                                                                                            "end": 328
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "c",
                                                                                                            "rawText": "c",
                                                                                                            "flags": 96,
                                                                                                            "start": 328,
                                                                                                            "end": 330
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 321,
                                                                                                        "end": 330
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 321,
                                                                                                "end": 330
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 320,
                                                                                            "end": 331
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 320,
                                                                                    "end": 331
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 319,
                                                                                "end": 332
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 319,
                                                                        "end": 332
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 318,
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
                                                                "start": 318,
                                                                "end": 337
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 318,
                                                        "end": 337
                                                    },
                                                    "flags": 32,
                                                    "start": 317,
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
                                                "start": 317,
                                                "end": 342
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 317,
                                        "end": 342
                                    },
                                    "flags": 32,
                                    "start": 316,
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
                                "start": 316,
                                "end": 347
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 316,
                        "end": 347
                    },
                    "flags": 33,
                    "start": 314,
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
                "start": 314,
                "end": 352
            },
            "flags": 16,
            "start": 314,
            "end": 353
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
                                                                                                                        "start": 361,
                                                                                                                        "end": 362
                                                                                                                    },
                                                                                                                    "operatorToken": {
                                                                                                                        "kind": 4125,
                                                                                                                        "flags": 96,
                                                                                                                        "start": 362,
                                                                                                                        "end": 363
                                                                                                                    },
                                                                                                                    "right": {
                                                                                                                        "kind": 134299649,
                                                                                                                        "text": "b",
                                                                                                                        "rawText": "b",
                                                                                                                        "flags": 96,
                                                                                                                        "start": 363,
                                                                                                                        "end": 364
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "start": 361,
                                                                                                                    "end": 364
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 32,
                                                                                                            "start": 361,
                                                                                                            "end": 364
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 360,
                                                                                                        "end": 365
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "start": 360,
                                                                                                "end": 365
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 359,
                                                                                            "end": 366
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 359,
                                                                                    "end": 366
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 358,
                                                                                "end": 367
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 358,
                                                                        "end": 367
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 357,
                                                                    "end": 368
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 368,
                                                                    "end": 370
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 370,
                                                                    "end": 372
                                                                },
                                                                "flags": 32,
                                                                "start": 357,
                                                                "end": 372
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 357,
                                                        "end": 372
                                                    },
                                                    "flags": 32,
                                                    "start": 356,
                                                    "end": 373
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 373,
                                                    "end": 375
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 375,
                                                    "end": 377
                                                },
                                                "flags": 32,
                                                "start": 356,
                                                "end": 377
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 356,
                                        "end": 377
                                    },
                                    "flags": 32,
                                    "start": 355,
                                    "end": 378
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 378,
                                    "end": 380
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 380,
                                    "end": 382
                                },
                                "flags": 32,
                                "start": 355,
                                "end": 382
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 355,
                        "end": 382
                    },
                    "flags": 33,
                    "start": 353,
                    "end": 383
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 383,
                    "end": 385
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 385,
                    "end": 387
                },
                "flags": 32,
                "start": 353,
                "end": 387
            },
            "flags": 16,
            "start": 353,
            "end": 388
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
                                                                                                                                    "start": 396,
                                                                                                                                    "end": 397
                                                                                                                                },
                                                                                                                                "operatorToken": {
                                                                                                                                    "kind": 4125,
                                                                                                                                    "flags": 96,
                                                                                                                                    "start": 397,
                                                                                                                                    "end": 398
                                                                                                                                },
                                                                                                                                "right": {
                                                                                                                                    "kind": 134299649,
                                                                                                                                    "text": "b",
                                                                                                                                    "rawText": "b",
                                                                                                                                    "flags": 96,
                                                                                                                                    "start": 398,
                                                                                                                                    "end": 399
                                                                                                                                },
                                                                                                                                "flags": 32,
                                                                                                                                "start": 396,
                                                                                                                                "end": 399
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "trailingComma": false,
                                                                                                                        "flags": 32,
                                                                                                                        "start": 396,
                                                                                                                        "end": 399
                                                                                                                    },
                                                                                                                    "flags": 32,
                                                                                                                    "start": 395,
                                                                                                                    "end": 400
                                                                                                                },
                                                                                                                "operatorToken": {
                                                                                                                    "kind": 4125,
                                                                                                                    "flags": 96,
                                                                                                                    "start": 400,
                                                                                                                    "end": 402
                                                                                                                },
                                                                                                                "right": {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "c",
                                                                                                                    "rawText": "c",
                                                                                                                    "flags": 96,
                                                                                                                    "start": 402,
                                                                                                                    "end": 404
                                                                                                                },
                                                                                                                "flags": 32,
                                                                                                                "start": 395,
                                                                                                                "end": 404
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 32,
                                                                                                        "start": 395,
                                                                                                        "end": 404
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "start": 394,
                                                                                                    "end": 405
                                                                                                },
                                                                                                "operatorToken": {
                                                                                                    "kind": 4125,
                                                                                                    "flags": 96,
                                                                                                    "start": 405,
                                                                                                    "end": 407
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "c",
                                                                                                    "rawText": "c",
                                                                                                    "flags": 96,
                                                                                                    "start": 407,
                                                                                                    "end": 409
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 394,
                                                                                                "end": 409
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 394,
                                                                                        "end": 409
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 393,
                                                                                    "end": 410
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 4125,
                                                                                    "flags": 96,
                                                                                    "start": 410,
                                                                                    "end": 412
                                                                                },
                                                                                "right": {
                                                                                    "kind": 134299649,
                                                                                    "text": "c",
                                                                                    "rawText": "c",
                                                                                    "flags": 96,
                                                                                    "start": 412,
                                                                                    "end": 414
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 393,
                                                                                "end": 414
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 393,
                                                                        "end": 414
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 392,
                                                                    "end": 415
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 415,
                                                                    "end": 417
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 417,
                                                                    "end": 419
                                                                },
                                                                "flags": 32,
                                                                "start": 392,
                                                                "end": 419
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 392,
                                                        "end": 419
                                                    },
                                                    "flags": 32,
                                                    "start": 391,
                                                    "end": 420
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 420,
                                                    "end": 422
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 422,
                                                    "end": 424
                                                },
                                                "flags": 32,
                                                "start": 391,
                                                "end": 424
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 391,
                                        "end": 424
                                    },
                                    "flags": 32,
                                    "start": 390,
                                    "end": 425
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 425,
                                    "end": 427
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 427,
                                    "end": 429
                                },
                                "flags": 32,
                                "start": 390,
                                "end": 429
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 390,
                        "end": 429
                    },
                    "flags": 33,
                    "start": 388,
                    "end": 430
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 430,
                    "end": 432
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
                                                                                                                                "start": 440,
                                                                                                                                "end": 441
                                                                                                                            },
                                                                                                                            "operatorToken": {
                                                                                                                                "kind": 4125,
                                                                                                                                "flags": 96,
                                                                                                                                "start": 441,
                                                                                                                                "end": 442
                                                                                                                            },
                                                                                                                            "right": {
                                                                                                                                "kind": 134299649,
                                                                                                                                "text": "b",
                                                                                                                                "rawText": "b",
                                                                                                                                "flags": 96,
                                                                                                                                "start": 442,
                                                                                                                                "end": 443
                                                                                                                            },
                                                                                                                            "flags": 32,
                                                                                                                            "start": 440,
                                                                                                                            "end": 443
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "trailingComma": false,
                                                                                                                    "flags": 32,
                                                                                                                    "start": 440,
                                                                                                                    "end": 443
                                                                                                                },
                                                                                                                "flags": 32,
                                                                                                                "start": 439,
                                                                                                                "end": 444
                                                                                                            },
                                                                                                            "operatorToken": {
                                                                                                                "kind": 4125,
                                                                                                                "flags": 96,
                                                                                                                "start": 444,
                                                                                                                "end": 446
                                                                                                            },
                                                                                                            "right": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "c",
                                                                                                                "rawText": "c",
                                                                                                                "flags": 96,
                                                                                                                "start": 446,
                                                                                                                "end": 448
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "start": 439,
                                                                                                            "end": 448
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "start": 439,
                                                                                                    "end": 448
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 438,
                                                                                                "end": 449
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 438,
                                                                                        "end": 449
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 437,
                                                                                    "end": 450
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 437,
                                                                            "end": 450
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 436,
                                                                        "end": 451
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4125,
                                                                        "flags": 96,
                                                                        "start": 451,
                                                                        "end": 453
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "c",
                                                                        "rawText": "c",
                                                                        "flags": 96,
                                                                        "start": 453,
                                                                        "end": 455
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 436,
                                                                    "end": 455
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 436,
                                                            "end": 455
                                                        },
                                                        "flags": 32,
                                                        "start": 435,
                                                        "end": 456
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 456,
                                                        "end": 458
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 458,
                                                        "end": 460
                                                    },
                                                    "flags": 32,
                                                    "start": 435,
                                                    "end": 460
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 435,
                                            "end": 460
                                        },
                                        "flags": 32,
                                        "start": 434,
                                        "end": 461
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 461,
                                        "end": 463
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 463,
                                        "end": 465
                                    },
                                    "flags": 32,
                                    "start": 434,
                                    "end": 465
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 434,
                            "end": 465
                        },
                        "flags": 32,
                        "start": 432,
                        "end": 466
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 466,
                        "end": 468
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 468,
                        "end": 470
                    },
                    "flags": 32,
                    "start": 432,
                    "end": 470
                },
                "flags": 32,
                "start": 388,
                "end": 470
            },
            "flags": 16,
            "start": 388,
            "end": 471
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
                                                                                                                            "start": 479,
                                                                                                                            "end": 480
                                                                                                                        },
                                                                                                                        "operatorToken": {
                                                                                                                            "kind": 4125,
                                                                                                                            "flags": 96,
                                                                                                                            "start": 480,
                                                                                                                            "end": 481
                                                                                                                        },
                                                                                                                        "right": {
                                                                                                                            "kind": 134299649,
                                                                                                                            "text": "b",
                                                                                                                            "rawText": "b",
                                                                                                                            "flags": 96,
                                                                                                                            "start": 481,
                                                                                                                            "end": 482
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "start": 479,
                                                                                                                        "end": 482
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "start": 479,
                                                                                                                "end": 482
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "start": 478,
                                                                                                            "end": 483
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "start": 478,
                                                                                                    "end": 483
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 477,
                                                                                                "end": 484
                                                                                            },
                                                                                            "operatorToken": {
                                                                                                "kind": 4125,
                                                                                                "flags": 96,
                                                                                                "start": 484,
                                                                                                "end": 486
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 134299649,
                                                                                                "text": "c",
                                                                                                "rawText": "c",
                                                                                                "flags": 96,
                                                                                                "start": 486,
                                                                                                "end": 488
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 477,
                                                                                            "end": 488
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 477,
                                                                                    "end": 488
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 476,
                                                                                "end": 489
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 476,
                                                                        "end": 489
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 475,
                                                                    "end": 490
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 490,
                                                                    "end": 492
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "c",
                                                                    "rawText": "c",
                                                                    "flags": 96,
                                                                    "start": 492,
                                                                    "end": 494
                                                                },
                                                                "flags": 32,
                                                                "start": 475,
                                                                "end": 494
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 475,
                                                        "end": 494
                                                    },
                                                    "flags": 32,
                                                    "start": 474,
                                                    "end": 495
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 495,
                                                    "end": 497
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
                                                            "start": 497,
                                                            "end": 499
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
                                                                                                                                                        "start": 506,
                                                                                                                                                        "end": 507
                                                                                                                                                    },
                                                                                                                                                    "operatorToken": {
                                                                                                                                                        "kind": 4125,
                                                                                                                                                        "flags": 96,
                                                                                                                                                        "start": 507,
                                                                                                                                                        "end": 508
                                                                                                                                                    },
                                                                                                                                                    "right": {
                                                                                                                                                        "kind": 134299649,
                                                                                                                                                        "text": "b",
                                                                                                                                                        "rawText": "b",
                                                                                                                                                        "flags": 96,
                                                                                                                                                        "start": 508,
                                                                                                                                                        "end": 509
                                                                                                                                                    },
                                                                                                                                                    "flags": 32,
                                                                                                                                                    "start": 506,
                                                                                                                                                    "end": 509
                                                                                                                                                }
                                                                                                                                            ],
                                                                                                                                            "trailingComma": false,
                                                                                                                                            "flags": 32,
                                                                                                                                            "start": 506,
                                                                                                                                            "end": 509
                                                                                                                                        },
                                                                                                                                        "flags": 32,
                                                                                                                                        "start": 505,
                                                                                                                                        "end": 510
                                                                                                                                    },
                                                                                                                                    "operatorToken": {
                                                                                                                                        "kind": 4125,
                                                                                                                                        "flags": 96,
                                                                                                                                        "start": 510,
                                                                                                                                        "end": 512
                                                                                                                                    },
                                                                                                                                    "right": {
                                                                                                                                        "kind": 134299649,
                                                                                                                                        "text": "c",
                                                                                                                                        "rawText": "c",
                                                                                                                                        "flags": 96,
                                                                                                                                        "start": 512,
                                                                                                                                        "end": 514
                                                                                                                                    },
                                                                                                                                    "flags": 32,
                                                                                                                                    "start": 505,
                                                                                                                                    "end": 514
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "trailingComma": false,
                                                                                                                            "flags": 32,
                                                                                                                            "start": 505,
                                                                                                                            "end": 514
                                                                                                                        },
                                                                                                                        "flags": 32,
                                                                                                                        "start": 504,
                                                                                                                        "end": 515
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "flags": 32,
                                                                                                                "start": 504,
                                                                                                                "end": 515
                                                                                                            },
                                                                                                            "flags": 32,
                                                                                                            "start": 503,
                                                                                                            "end": 516
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "start": 503,
                                                                                                    "end": 516
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 502,
                                                                                                "end": 517
                                                                                            },
                                                                                            "operatorToken": {
                                                                                                "kind": 4125,
                                                                                                "flags": 96,
                                                                                                "start": 517,
                                                                                                "end": 519
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 134299649,
                                                                                                "text": "c",
                                                                                                "rawText": "c",
                                                                                                "flags": 96,
                                                                                                "start": 519,
                                                                                                "end": 521
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 502,
                                                                                            "end": 521
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 502,
                                                                                    "end": 521
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 501,
                                                                                "end": 522
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 96,
                                                                                "start": 522,
                                                                                "end": 524
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "c",
                                                                                "rawText": "c",
                                                                                "flags": 96,
                                                                                "start": 524,
                                                                                "end": 526
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 501,
                                                                            "end": 526
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 501,
                                                                    "end": 526
                                                                },
                                                                "flags": 32,
                                                                "start": 500,
                                                                "end": 527
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 96,
                                                                "start": 527,
                                                                "end": 529
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "c",
                                                                "rawText": "c",
                                                                "flags": 96,
                                                                "start": 529,
                                                                "end": 531
                                                            },
                                                            "flags": 32,
                                                            "start": 500,
                                                            "end": 531
                                                        },
                                                        "flags": 536870944,
                                                        "start": 497,
                                                        "end": 532
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 532,
                                                        "end": 534
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 534,
                                                        "end": 536
                                                    },
                                                    "flags": 32,
                                                    "start": 497,
                                                    "end": 536
                                                },
                                                "flags": 32,
                                                "start": 474,
                                                "end": 536
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 474,
                                        "end": 536
                                    },
                                    "flags": 32,
                                    "start": 473,
                                    "end": 537
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 537,
                                    "end": 539
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 539,
                                    "end": 541
                                },
                                "flags": 32,
                                "start": 473,
                                "end": 541
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 473,
                        "end": 541
                    },
                    "flags": 33,
                    "start": 471,
                    "end": 542
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 542,
                    "end": 544
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 544,
                    "end": 546
                },
                "flags": 32,
                "start": 471,
                "end": 546
            },
            "flags": 16,
            "start": 471,
            "end": 547
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
                            "start": 549,
                            "end": 550
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 551,
                                "end": 555
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "start": 555,
                                "end": 559
                            },
                            "flags": 32,
                            "start": 551,
                            "end": 559
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 549,
                    "end": 559
                },
                "flags": 33,
                "start": 547,
                "end": 560
            },
            "flags": 16,
            "start": 547,
            "end": 561
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
                                "start": 563,
                                "end": 566
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "start": 566,
                                "end": 570
                            },
                            "flags": 32,
                            "start": 563,
                            "end": 570
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 571,
                            "end": 573
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 563,
                    "end": 573
                },
                "flags": 33,
                "start": 561,
                "end": 574
            },
            "flags": 16,
            "start": 561,
            "end": 575
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
                                "start": 577,
                                "end": 580
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "start": 580,
                                "end": 584
                            },
                            "flags": 32,
                            "start": 577,
                            "end": 584
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 585,
                            "end": 585
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 587,
                            "end": 588
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 577,
                    "end": 588
                },
                "flags": 33,
                "start": 575,
                "end": 589
            },
            "flags": 16,
            "start": 575,
            "end": 590
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
                                                    "start": 593,
                                                    "end": 594
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 96,
                                                    "start": 595,
                                                    "end": 597
                                                },
                                                "flags": 32,
                                                "start": 593,
                                                "end": 597
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 593,
                                        "end": 597
                                    },
                                    "flags": 48,
                                    "start": 592,
                                    "end": 598
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 599,
                                    "end": 600
                                },
                                "flags": 536870944,
                                "start": 592,
                                "end": 600
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 592,
                        "end": 600
                    },
                    "flags": 33,
                    "start": 590,
                    "end": 601
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 601,
                    "end": 603
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 605,
                        "end": 605
                    },
                    "flags": 32,
                    "start": 603,
                    "end": 606
                },
                "flags": 32,
                "start": 590,
                "end": 606
            },
            "flags": 16,
            "start": 590,
            "end": 607
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
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 613,
                                    "end": 614
                                },
                                "flags": 536870944,
                                "start": 609,
                                "end": 614
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 609,
                        "end": 614
                    },
                    "flags": 33,
                    "start": 607,
                    "end": 615
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 615,
                    "end": 617
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 619,
                        "end": 619
                    },
                    "flags": 32,
                    "start": 617,
                    "end": 620
                },
                "flags": 32,
                "start": 607,
                "end": 620
            },
            "flags": 16,
            "start": 607,
            "end": 621
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
                                "start": 623,
                                "end": 626
                            },
                            "argument": {
                                "kind": 129,
                                "member": {
                                    "kind": 201392130,
                                    "text": 50,
                                    "rawText": "50.",
                                    "flags": 96,
                                    "start": 626,
                                    "end": 629
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 630,
                                    "end": 633
                                },
                                "flags": 536870944,
                                "start": 626,
                                "end": 633
                            },
                            "flags": 32,
                            "start": 623,
                            "end": 633
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 623,
                    "end": 633
                },
                "flags": 33,
                "start": 621,
                "end": 634
            },
            "flags": 16,
            "start": 621,
            "end": 635
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
                                "start": 637,
                                "end": 640
                            },
                            "argument": {
                                "kind": 201392130,
                                "text": 50,
                                "rawText": "50",
                                "flags": 96,
                                "start": 640,
                                "end": 642
                            },
                            "flags": 32,
                            "start": 637,
                            "end": 642
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 637,
                    "end": 642
                },
                "flags": 33,
                "start": 635,
                "end": 643
            },
            "flags": 16,
            "start": 635,
            "end": 644
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
                                "start": 646,
                                "end": 649
                            },
                            "argument": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 649,
                                    "end": 650
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 650,
                                    "end": 651
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 651,
                                    "end": 652
                                },
                                "flags": 32,
                                "start": 649,
                                "end": 652
                            },
                            "flags": 32,
                            "start": 646,
                            "end": 652
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 646,
                    "end": 652
                },
                "flags": 33,
                "start": 644,
                "end": 653
            },
            "flags": 16,
            "start": 644,
            "end": 654
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
                                        "start": 657,
                                        "end": 660
                                    },
                                    "argument": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 660,
                                            "end": 661
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 662,
                                            "end": 663
                                        },
                                        "flags": 536870944,
                                        "start": 660,
                                        "end": 663
                                    },
                                    "flags": 32,
                                    "start": 657,
                                    "end": 663
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 657,
                            "end": 663
                        },
                        "flags": 32,
                        "start": 656,
                        "end": 664
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 664,
                        "end": 666
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 666,
                        "end": 668
                    },
                    "flags": 32,
                    "start": 656,
                    "end": 668
                },
                "flags": 32,
                "start": 654,
                "end": 669
            },
            "flags": 16,
            "start": 654,
            "end": 670
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
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
                                        "start": 673,
                                        "end": 676
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
                                                    "start": 677,
                                                    "end": 678
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 677,
                                            "end": 678
                                        },
                                        "flags": 32,
                                        "start": 676,
                                        "end": 679
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 32,
                                    "start": 673,
                                    "end": 679
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 673,
                            "end": 679
                        },
                        "flags": 32,
                        "start": 672,
                        "end": 680
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 681,
                    "end": 684
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 684,
                    "end": 686
                },
                "flags": 34,
                "start": 670,
                "end": 686
            },
            "flags": 16,
            "start": 670,
            "end": 687
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
                                    "start": 690,
                                    "end": 691
                                },
                                "flags": 32,
                                "start": 689,
                                "end": 692
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 689,
                        "end": 692
                    },
                    "flags": 33,
                    "start": 687,
                    "end": 693
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 693,
                    "end": 695
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 695,
                    "end": 697
                },
                "flags": 32,
                "start": 687,
                "end": 697
            },
            "flags": 16,
            "start": 687,
            "end": 698
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 700,
                            "end": 701
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
                                                "start": 705,
                                                "end": 708
                                            },
                                            "argument": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 708,
                                                    "end": 709
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 710,
                                                    "end": 711
                                                },
                                                "flags": 536870944,
                                                "start": 708,
                                                "end": 711
                                            },
                                            "flags": 32,
                                            "start": 705,
                                            "end": 711
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 705,
                                    "end": 711
                                },
                                "flags": 32,
                                "start": 703,
                                "end": 712
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 712,
                                "end": 714
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 714,
                                "end": 716
                            },
                            "flags": 32,
                            "start": 703,
                            "end": 716
                        },
                        "flags": 32,
                        "start": 698,
                        "end": 716
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 717,
                    "end": 720
                },
                "contents": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 720,
                    "end": 722
                },
                "flags": 34,
                "start": 698,
                "end": 722
            },
            "flags": 16,
            "start": 698,
            "end": 723
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 725,
                            "end": 726
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
                                            "start": 730,
                                            "end": 733
                                        },
                                        "argument": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 733,
                                                "end": 734
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 735,
                                                "end": 736
                                            },
                                            "flags": 536870944,
                                            "start": 733,
                                            "end": 736
                                        },
                                        "flags": 32,
                                        "start": 730,
                                        "end": 736
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 730,
                                "end": 736
                            },
                            "flags": 32,
                            "start": 728,
                            "end": 737
                        },
                        "flags": 32,
                        "start": 723,
                        "end": 737
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 738,
                    "end": 741
                },
                "contents": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 741,
                    "end": 743
                },
                "flags": 34,
                "start": 723,
                "end": 743
            },
            "flags": 16,
            "start": 723,
            "end": 744
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
                                "start": 746,
                                "end": 749
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
                                                "start": 750,
                                                "end": 751
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 750,
                                        "end": 751
                                    },
                                    "flags": 32,
                                    "start": 749,
                                    "end": 752
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 752,
                                    "end": 753
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 753,
                                    "end": 754
                                },
                                "flags": 32,
                                "start": 749,
                                "end": 754
                            },
                            "flags": 32,
                            "start": 746,
                            "end": 754
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 746,
                    "end": 754
                },
                "flags": 33,
                "start": 744,
                "end": 755
            },
            "flags": 16,
            "start": 744,
            "end": 756
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 756,
            "end": 757
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
                                    "start": 759,
                                    "end": 762
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
                                                                    "start": 764,
                                                                    "end": 765
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 96,
                                                                    "start": 766,
                                                                    "end": 768
                                                                },
                                                                "flags": 32,
                                                                "start": 764,
                                                                "end": 768
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 764,
                                                        "end": 768
                                                    },
                                                    "flags": 48,
                                                    "start": 763,
                                                    "end": 769
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 770,
                                                    "end": 771
                                                },
                                                "flags": 536870944,
                                                "start": 763,
                                                "end": 771
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 763,
                                        "end": 771
                                    },
                                    "flags": 32,
                                    "start": 762,
                                    "end": 772
                                },
                                "flags": 32,
                                "start": 759,
                                "end": 772
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 759,
                        "end": 772
                    },
                    "flags": 33,
                    "start": 757,
                    "end": 773
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 773,
                    "end": 775
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 777,
                        "end": 777
                    },
                    "flags": 32,
                    "start": 775,
                    "end": 778
                },
                "flags": 32,
                "start": 757,
                "end": 778
            },
            "flags": 16,
            "start": 757,
            "end": 779
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 779,
            "end": 780
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
                                    "start": 782,
                                    "end": 785
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
                                                                    "start": 787,
                                                                    "end": 791
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "start": 792,
                                                                    "end": 794
                                                                },
                                                                "flags": 32,
                                                                "start": 787,
                                                                "end": 794
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 787,
                                                        "end": 794
                                                    },
                                                    "flags": 48,
                                                    "start": 786,
                                                    "end": 795
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "prop",
                                                    "rawText": "prop",
                                                    "flags": 96,
                                                    "start": 796,
                                                    "end": 800
                                                },
                                                "flags": 536870944,
                                                "start": 786,
                                                "end": 800
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 786,
                                        "end": 800
                                    },
                                    "flags": 32,
                                    "start": 785,
                                    "end": 801
                                },
                                "flags": 32,
                                "start": 782,
                                "end": 801
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 782,
                        "end": 801
                    },
                    "flags": 33,
                    "start": 780,
                    "end": 802
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 802,
                    "end": 804
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 806,
                        "end": 806
                    },
                    "flags": 32,
                    "start": 804,
                    "end": 807
                },
                "flags": 32,
                "start": 780,
                "end": 807
            },
            "flags": 16,
            "start": 780,
            "end": 808
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
                                        "start": 811,
                                        "end": 813
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
                                                            "start": 816,
                                                            "end": 820
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 821,
                                                            "end": 823
                                                        },
                                                        "flags": 32,
                                                        "start": 816,
                                                        "end": 823
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 816,
                                                "end": 823
                                            },
                                            "flags": 48,
                                            "start": 814,
                                            "end": 824
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "prop",
                                            "rawText": "prop",
                                            "flags": 96,
                                            "start": 825,
                                            "end": 829
                                        },
                                        "flags": 536870944,
                                        "start": 811,
                                        "end": 829
                                    },
                                    "flags": 32,
                                    "start": 811,
                                    "end": 829
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 811,
                            "end": 829
                        },
                        "flags": 48,
                        "start": 810,
                        "end": 831
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 831,
                        "end": 833
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 835,
                            "end": 835
                        },
                        "flags": 48,
                        "start": 833,
                        "end": 836
                    },
                    "flags": 32,
                    "start": 810,
                    "end": 836
                },
                "flags": 32,
                "start": 808,
                "end": 837
            },
            "flags": 16,
            "start": 808,
            "end": 838
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
                                                    "start": 841,
                                                    "end": 842
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 843,
                                                    "end": 845
                                                },
                                                "flags": 32,
                                                "start": 841,
                                                "end": 845
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 841,
                                        "end": 845
                                    },
                                    "flags": 48,
                                    "start": 840,
                                    "end": 846
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 847,
                                    "end": 848
                                },
                                "flags": 536870944,
                                "start": 840,
                                "end": 848
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 840,
                        "end": 848
                    },
                    "flags": 33,
                    "start": 838,
                    "end": 849
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 849,
                    "end": 851
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 853,
                        "end": 853
                    },
                    "flags": 32,
                    "start": 851,
                    "end": 854
                },
                "flags": 32,
                "start": 838,
                "end": 854
            },
            "flags": 16,
            "start": 838,
            "end": 855
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
                                                        "start": 859,
                                                        "end": 860
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 861,
                                                        "end": 863
                                                    },
                                                    "flags": 32,
                                                    "start": 859,
                                                    "end": 863
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 859,
                                            "end": 863
                                        },
                                        "flags": 48,
                                        "start": 858,
                                        "end": 864
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 865,
                                        "end": 866
                                    },
                                    "flags": 536870944,
                                    "start": 857,
                                    "end": 866
                                },
                                "flags": 32,
                                "start": 857,
                                "end": 867
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 857,
                        "end": 867
                    },
                    "flags": 33,
                    "start": 855,
                    "end": 868
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 868,
                    "end": 870
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 872,
                        "end": 872
                    },
                    "flags": 32,
                    "start": 870,
                    "end": 873
                },
                "flags": 32,
                "start": 855,
                "end": 873
            },
            "flags": 16,
            "start": 855,
            "end": 874
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
                                                "start": 877,
                                                "end": 878
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 877,
                                        "end": 878
                                    },
                                    "flags": 32,
                                    "start": 876,
                                    "end": 879
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 880,
                                    "end": 881
                                },
                                "flags": 536870944,
                                "start": 876,
                                "end": 881
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 876,
                        "end": 881
                    },
                    "flags": 33,
                    "start": 874,
                    "end": 882
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 882,
                    "end": 884
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 886,
                        "end": 886
                    },
                    "flags": 32,
                    "start": 884,
                    "end": 887
                },
                "flags": 32,
                "start": 874,
                "end": 887
            },
            "flags": 16,
            "start": 874,
            "end": 888
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
                                    "start": 890,
                                    "end": 893
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 894,
                                    "end": 897
                                },
                                "flags": 536870944,
                                "start": 890,
                                "end": 897
                            },
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 898,
                                    "end": 902
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 903,
                                    "end": 906
                                },
                                "flags": 536870944,
                                "start": 898,
                                "end": 906
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 890,
                        "end": 906
                    },
                    "flags": 33,
                    "start": 888,
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
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 911,
                                "end": 912
                            },
                            {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 913,
                                "end": 915
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 911,
                        "end": 915
                    },
                    "flags": 32,
                    "start": 909,
                    "end": 916
                },
                "flags": 32,
                "start": 888,
                "end": 916
            },
            "flags": 16,
            "start": 888,
            "end": 917
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
                                                    "start": 921,
                                                    "end": 922
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 921,
                                            "end": 922
                                        },
                                        "flags": 32,
                                        "start": 920,
                                        "end": 923
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 924,
                                        "end": 925
                                    },
                                    "flags": 536870944,
                                    "start": 919,
                                    "end": 925
                                },
                                "flags": 32,
                                "start": 919,
                                "end": 926
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 919,
                        "end": 926
                    },
                    "flags": 33,
                    "start": 917,
                    "end": 927
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 927,
                    "end": 929
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 931,
                        "end": 931
                    },
                    "flags": 32,
                    "start": 929,
                    "end": 932
                },
                "flags": 32,
                "start": 917,
                "end": 932
            },
            "flags": 16,
            "start": 917,
            "end": 933
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
                                        "start": 936,
                                        "end": 938
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
                                                            "start": 941,
                                                            "end": 945
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 946,
                                                            "end": 948
                                                        },
                                                        "flags": 32,
                                                        "start": 941,
                                                        "end": 948
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 941,
                                                "end": 948
                                            },
                                            "flags": 48,
                                            "start": 939,
                                            "end": 949
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "prop",
                                            "rawText": "prop",
                                            "flags": 96,
                                            "start": 950,
                                            "end": 954
                                        },
                                        "flags": 536870944,
                                        "start": 936,
                                        "end": 954
                                    },
                                    "flags": 32,
                                    "start": 936,
                                    "end": 954
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 936,
                            "end": 954
                        },
                        "flags": 48,
                        "start": 935,
                        "end": 956
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 956,
                        "end": 958
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 960,
                            "end": 960
                        },
                        "flags": 48,
                        "start": 958,
                        "end": 961
                    },
                    "flags": 32,
                    "start": 935,
                    "end": 961
                },
                "flags": 32,
                "start": 933,
                "end": 962
            },
            "flags": 16,
            "start": 933,
            "end": 963
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
                                "start": 965,
                                "end": 968
                            },
                            {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 969,
                                "end": 973
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 965,
                        "end": 973
                    },
                    "flags": 33,
                    "start": 963,
                    "end": 974
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 974,
                    "end": 976
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
                                "start": 978,
                                "end": 979
                            },
                            {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 980,
                                "end": 981
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 978,
                        "end": 981
                    },
                    "flags": 32,
                    "start": 976,
                    "end": 982
                },
                "flags": 32,
                "start": 963,
                "end": 982
            },
            "flags": 16,
            "start": 963,
            "end": 983
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
                                            "start": 986,
                                            "end": 987
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 988,
                                            "end": 990
                                        },
                                        "flags": 32,
                                        "start": 986,
                                        "end": 990
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 991,
                                            "end": 993
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 994,
                                            "end": 996
                                        },
                                        "flags": 32,
                                        "start": 991,
                                        "end": 996
                                    },
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 997,
                                            "end": 1001
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "o",
                                            "rawText": "o",
                                            "flags": 96,
                                            "start": 1001,
                                            "end": 1002
                                        },
                                        "flags": 32,
                                        "start": 997,
                                        "end": 1002
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 986,
                                "end": 1002
                            },
                            "flags": 48,
                            "start": 985,
                            "end": 1003
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 985,
                    "end": 1003
                },
                "flags": 33,
                "start": 983,
                "end": 1004
            },
            "flags": 16,
            "start": 983,
            "end": 1005
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
                            "start": 1007,
                            "end": 1008
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 1009,
                                "end": 1013
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
                                            "start": 1014,
                                            "end": 1015
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "start": 1016,
                                            "end": 1018
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 8,
                                            "rawText": "8",
                                            "flags": 96,
                                            "start": 1019,
                                            "end": 1021
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1014,
                                    "end": 1021
                                },
                                "flags": 32,
                                "start": 1013,
                                "end": 1022
                            },
                            "flags": 32,
                            "start": 1009,
                            "end": 1022
                        },
                        {
                            "kind": 201392130,
                            "text": 9,
                            "rawText": "9",
                            "flags": 96,
                            "start": 1023,
                            "end": 1025
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1007,
                    "end": 1025
                },
                "flags": 33,
                "start": 1005,
                "end": 1026
            },
            "flags": 16,
            "start": 1005,
            "end": 1027
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
                            "start": 1029,
                            "end": 1029
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1030,
                            "end": 1030
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1031,
                            "end": 1031
                        },
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1032,
                            "end": 1033
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 1034,
                            "end": 1035
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1029,
                    "end": 1035
                },
                "flags": 33,
                "start": 1027,
                "end": 1036
            },
            "flags": 16,
            "start": 1027,
            "end": 1037
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
                            "kind": 230,
                            "flags": 96,
                            "start": 1041,
                            "end": 1041
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1042,
                            "end": 1042
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1043,
                            "end": 1043
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1044,
                            "end": 1044
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1045,
                            "end": 1045
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1046,
                            "end": 1046
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1047,
                            "end": 1047
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1048,
                            "end": 1048
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1049,
                            "end": 1049
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1050,
                            "end": 1050
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1051,
                            "end": 1051
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1052,
                            "end": 1052
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1053,
                            "end": 1053
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1054,
                            "end": 1054
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1055,
                            "end": 1055
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1056,
                            "end": 1056
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1057,
                            "end": 1057
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1058,
                            "end": 1058
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1059,
                            "end": 1059
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1060,
                            "end": 1060
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1061,
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
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 1039,
                    "end": 1064
                },
                "flags": 33,
                "start": 1037,
                "end": 1065
            },
            "flags": 16,
            "start": 1037,
            "end": 1066
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
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1072,
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
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1078,
                            "end": 1078
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 1079,
                            "end": 1080
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1081,
                            "end": 1081
                        },
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
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 1089,
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
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 1068,
                    "end": 1096
                },
                "flags": 33,
                "start": 1066,
                "end": 1097
            },
            "flags": 16,
            "start": 1066,
            "end": 1098
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
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1107,
                            "end": 1107
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
                                        "start": 1109,
                                        "end": 1110
                                    },
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 1111,
                                            "end": 1115
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
                                                        "start": 1116,
                                                        "end": 1117
                                                    },
                                                    {
                                                        "kind": 201392130,
                                                        "text": 7,
                                                        "rawText": "7",
                                                        "flags": 96,
                                                        "start": 1118,
                                                        "end": 1120
                                                    },
                                                    {
                                                        "kind": 201392130,
                                                        "text": 8,
                                                        "rawText": "8",
                                                        "flags": 96,
                                                        "start": 1121,
                                                        "end": 1123
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 1116,
                                                "end": 1123
                                            },
                                            "flags": 32,
                                            "start": 1115,
                                            "end": 1124
                                        },
                                        "flags": 32,
                                        "start": 1111,
                                        "end": 1124
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 9,
                                        "rawText": "9",
                                        "flags": 96,
                                        "start": 1125,
                                        "end": 1127
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1109,
                                "end": 1127
                            },
                            "flags": 32,
                            "start": 1108,
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
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1136,
                            "end": 1136
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1137,
                            "end": 1137
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1138,
                            "end": 1138
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1139,
                            "end": 1139
                        },
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
                            "kind": 230,
                            "flags": 96,
                            "start": 1142,
                            "end": 1142
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1143,
                            "end": 1143
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1144,
                            "end": 1144
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 1100,
                    "end": 1145
                },
                "flags": 33,
                "start": 1098,
                "end": 1146
            },
            "flags": 16,
            "start": 1098,
            "end": 1147
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
                            "start": 1149,
                            "end": 1149
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1150,
                            "end": 1150
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1151,
                            "end": 1151
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1152,
                            "end": 1152
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1153,
                            "end": 1153
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1154,
                            "end": 1154
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1155,
                            "end": 1155
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1156,
                            "end": 1156
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1157,
                            "end": 1157
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1158,
                            "end": 1158
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1159,
                            "end": 1159
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1160,
                            "end": 1160
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1161,
                            "end": 1161
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1162,
                            "end": 1162
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1163,
                            "end": 1163
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1164,
                            "end": 1164
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1165,
                            "end": 1165
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1166,
                            "end": 1166
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1167,
                            "end": 1167
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1168,
                            "end": 1168
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1169,
                            "end": 1169
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1170,
                            "end": 1170
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1171,
                            "end": 1171
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1172,
                            "end": 1172
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1173,
                            "end": 1173
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 1149,
                    "end": 1174
                },
                "flags": 33,
                "start": 1147,
                "end": 1175
            },
            "flags": 16,
            "start": 1147,
            "end": 1176
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
                            "start": 1178,
                            "end": 1178
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1179,
                            "end": 1179
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1180,
                            "end": 1180
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1181,
                            "end": 1181
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1182,
                            "end": 1182
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1183,
                            "end": 1183
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1184,
                            "end": 1184
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1185,
                            "end": 1185
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1186,
                            "end": 1186
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1187,
                            "end": 1187
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1188,
                            "end": 1188
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1189,
                            "end": 1189
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1190,
                            "end": 1190
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1191,
                            "end": 1191
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1192,
                            "end": 1192
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1193,
                            "end": 1193
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1194,
                            "end": 1194
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1195,
                            "end": 1195
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1196,
                            "end": 1196
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1197,
                            "end": 1197
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1198,
                            "end": 1198
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1199,
                            "end": 1199
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1200,
                            "end": 1200
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1201,
                            "end": 1201
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1202,
                            "end": 1202
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 1178,
                    "end": 1203
                },
                "flags": 33,
                "start": 1176,
                "end": 1204
            },
            "flags": 16,
            "start": 1176,
            "end": 1205
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
                            "start": 1207,
                            "end": 1207
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1208,
                            "end": 1208
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 1209,
                            "end": 1210
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1211,
                            "end": 1211
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1212,
                            "end": 1212
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 1207,
                    "end": 1213
                },
                "flags": 33,
                "start": 1205,
                "end": 1214
            },
            "flags": 16,
            "start": 1205,
            "end": 1215
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
                                        "start": 1218,
                                        "end": 1219
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 1220,
                                        "end": 1221
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1218,
                                "end": 1221
                            },
                            "flags": 32,
                            "start": 1217,
                            "end": 1222
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
                                        "start": 1225,
                                        "end": 1226
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1225,
                                "end": 1226
                            },
                            "flags": 32,
                            "start": 1223,
                            "end": 1227
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1230,
                                "end": 1230
                            },
                            "flags": 32,
                            "start": 1228,
                            "end": 1231
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1217,
                    "end": 1231
                },
                "flags": 33,
                "start": 1215,
                "end": 1232
            },
            "flags": 16,
            "start": 1215,
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
                                                            "start": 1237,
                                                            "end": 1238
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 1237,
                                                    "end": 1238
                                                },
                                                "flags": 32,
                                                "start": 1236,
                                                "end": 1239
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 1240,
                                                "end": 1241
                                            },
                                            "flags": 536870944,
                                            "start": 1235,
                                            "end": 1241
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 1242,
                                            "end": 1243
                                        },
                                        "flags": 536870944,
                                        "start": 1235,
                                        "end": 1243
                                    },
                                    "flags": 32,
                                    "start": 1235,
                                    "end": 1244
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1244,
                                    "end": 1248
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
                                                "start": 1250,
                                                "end": 1256
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 1250,
                                        "end": 1256
                                    },
                                    "flags": 48,
                                    "start": 1248,
                                    "end": 1257
                                },
                                "flags": 32,
                                "start": 1235,
                                "end": 1257
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 1257,
                                "end": 1259
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 1259,
                                "end": 1261
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 1261,
                                "end": 1263
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "start": 1263,
                                "end": 1265
                            },
                            "flags": 32,
                            "start": 1235,
                            "end": 1265
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1235,
                    "end": 1265
                },
                "flags": 33,
                "start": 1233,
                "end": 1267
            },
            "flags": 16,
            "start": 1233,
            "end": 1268
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
                                                            "start": 1272,
                                                            "end": 1273
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 1272,
                                                    "end": 1273
                                                },
                                                "flags": 32,
                                                "start": 1271,
                                                "end": 1274
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 1275,
                                                "end": 1276
                                            },
                                            "flags": 536870944,
                                            "start": 1270,
                                            "end": 1276
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 1277,
                                            "end": 1278
                                        },
                                        "flags": 536870944,
                                        "start": 1270,
                                        "end": 1278
                                    },
                                    "flags": 32,
                                    "start": 1270,
                                    "end": 1279
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1279,
                                    "end": 1283
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 1283,
                                    "end": 1285
                                },
                                "flags": 32,
                                "start": 1270,
                                "end": 1285
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 1285,
                                "end": 1287
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 1287,
                                "end": 1289
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 1289,
                                "end": 1291
                            },
                            "alternate": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 1291,
                                    "end": 1293
                                },
                                "operatorToken": {
                                    "kind": 4133,
                                    "flags": 96,
                                    "start": 1293,
                                    "end": 1296
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 1296,
                                    "end": 1298
                                },
                                "flags": 32,
                                "start": 1291,
                                "end": 1298
                            },
                            "flags": 32,
                            "start": 1270,
                            "end": 1298
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1270,
                    "end": 1298
                },
                "flags": 33,
                "start": 1268,
                "end": 1299
            },
            "flags": 16,
            "start": 1268,
            "end": 1300
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
                                        "start": 1303,
                                        "end": 1303
                                    },
                                    "flags": 48,
                                    "start": 1302,
                                    "end": 1304
                                },
                                "expression": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 1305,
                                        "end": 1306
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 1306,
                                        "end": 1308
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
                                                    "start": 1310,
                                                    "end": 1313
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 1310,
                                            "end": 1313
                                        },
                                        "flags": 48,
                                        "start": 1308,
                                        "end": 1314
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 1314,
                                        "end": 1316
                                    },
                                    "alternate": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 1318,
                                            "end": 1319
                                        },
                                        "flags": 32,
                                        "start": 1316,
                                        "end": 1320
                                    },
                                    "flags": 32,
                                    "start": 1305,
                                    "end": 1320
                                },
                                "flags": 536870944,
                                "start": 1302,
                                "end": 1321
                            },
                            "operatorToken": {
                                "kind": 4133,
                                "flags": 96,
                                "start": 1321,
                                "end": 1324
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1324,
                                "end": 1326
                            },
                            "flags": 32,
                            "start": 1302,
                            "end": 1326
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1302,
                    "end": 1326
                },
                "flags": 33,
                "start": 1300,
                "end": 1327
            },
            "flags": 16,
            "start": 1300,
            "end": 1328
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
                                        "start": 1330,
                                        "end": 1332
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "start": 1333,
                                        "end": 1334
                                    },
                                    "flags": 536870944,
                                    "start": 1330,
                                    "end": 1334
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1334,
                                    "end": 1338
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 1338,
                                    "end": 1340
                                },
                                "flags": 32,
                                "start": 1330,
                                "end": 1340
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 1340,
                                "end": 1342
                            },
                            "consequent": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 1344,
                                    "end": 1345
                                },
                                "flags": 32,
                                "start": 1342,
                                "end": 1346
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 1346,
                                "end": 1348
                            },
                            "alternate": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 1350,
                                    "end": 1351
                                },
                                "flags": 32,
                                "start": 1348,
                                "end": 1352
                            },
                            "flags": 32,
                            "start": 1330,
                            "end": 1352
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1330,
                    "end": 1352
                },
                "flags": 33,
                "start": 1328,
                "end": 1354
            },
            "flags": 16,
            "start": 1328,
            "end": 1355
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
                                    "start": 1357,
                                    "end": 1360
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1360,
                                    "end": 1364
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 1364,
                                    "end": 1366
                                },
                                "flags": 32,
                                "start": 1357,
                                "end": 1366
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 1366,
                                "end": 1368
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 1368,
                                "end": 1370
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 1370,
                                "end": 1372
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "start": 1372,
                                "end": 1374
                            },
                            "flags": 32,
                            "start": 1357,
                            "end": 1374
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1357,
                    "end": 1374
                },
                "flags": 33,
                "start": 1355,
                "end": 1376
            },
            "flags": 16,
            "start": 1355,
            "end": 1377
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
                                                        "start": 1381,
                                                        "end": 1382
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 1381,
                                                "end": 1382
                                            },
                                            "flags": 32,
                                            "start": 1379,
                                            "end": 1383
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 1384,
                                            "end": 1385
                                        },
                                        "flags": 536870944,
                                        "start": 1379,
                                        "end": 1385
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "start": 1386,
                                        "end": 1387
                                    },
                                    "flags": 536870944,
                                    "start": 1379,
                                    "end": 1387
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1387,
                                    "end": 1391
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 1391,
                                    "end": 1393
                                },
                                "flags": 32,
                                "start": 1379,
                                "end": 1393
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 1393,
                                "end": 1395
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 1395,
                                "end": 1397
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 1397,
                                "end": 1399
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "start": 1399,
                                "end": 1401
                            },
                            "flags": 32,
                            "start": 1379,
                            "end": 1401
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1379,
                    "end": 1401
                },
                "flags": 33,
                "start": 1377,
                "end": 1403
            },
            "flags": 16,
            "start": 1377,
            "end": 1404
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
                                        "start": 1407,
                                        "end": 1407
                                    },
                                    "flags": 48,
                                    "start": 1406,
                                    "end": 1408
                                },
                                "expression": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 1409,
                                        "end": 1410
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 1410,
                                        "end": 1412
                                    },
                                    "consequent": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 1412,
                                        "end": 1414
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 1414,
                                        "end": 1416
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 1416,
                                        "end": 1418
                                    },
                                    "flags": 32,
                                    "start": 1409,
                                    "end": 1418
                                },
                                "flags": 536870944,
                                "start": 1406,
                                "end": 1419
                            },
                            "operatorToken": {
                                "kind": 4130,
                                "flags": 96,
                                "start": 1419,
                                "end": 1422
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1422,
                                "end": 1424
                            },
                            "flags": 32,
                            "start": 1406,
                            "end": 1424
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1406,
                    "end": 1424
                },
                "flags": 33,
                "start": 1404,
                "end": 1425
            },
            "flags": 16,
            "start": 1404,
            "end": 1426
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
                                    "start": 1428,
                                    "end": 1430
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 1431,
                                    "end": 1432
                                },
                                "flags": 536870944,
                                "start": 1428,
                                "end": 1432
                            },
                            "operatorToken": {
                                "kind": 34620,
                                "flags": 96,
                                "start": 1432,
                                "end": 1436
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
                                        "start": 1438,
                                        "end": 1439
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 1439,
                                        "end": 1441
                                    },
                                    "consequent": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 1441,
                                        "end": 1443
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 1443,
                                        "end": 1445
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 96,
                                        "start": 1445,
                                        "end": 1447
                                    },
                                    "flags": 32,
                                    "start": 1436,
                                    "end": 1447
                                },
                                "flags": 32,
                                "start": 1436,
                                "end": 1449
                            },
                            "flags": 32,
                            "start": 1428,
                            "end": 1449
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1428,
                    "end": 1449
                },
                "flags": 33,
                "start": 1426,
                "end": 1450
            },
            "flags": 16,
            "start": 1426,
            "end": 1451
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
                            "start": 1453,
                            "end": 1456
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1453,
                    "end": 1456
                },
                "flags": 33,
                "start": 1451,
                "end": 1457
            },
            "flags": 16,
            "start": 1451,
            "end": 1458
        }
    ],
    "isModule": false,
    "source": "\n[];\n[,];\n[1];\n[1,];\n[,1];\n[1,2];\n[,1,2];\n[1,,2];\n[1,2,];\n[1,2,,];\n[...a, ...b];\n[...a, , ...b];\n[...[...a]];\n[...[...async]];\n[, ...a];\n[, , ...a];\n[,];\n[[[[[[[101]]]]]]];\n[[[[[[[a]]]]]]] = b;\n[[[[[[[a=b]]]] = c] = c] = c] = c;\n[[[[[[[a=b] = c] = c] = c] = c] = c] = c] = c;\n[[[[[[[a=b]] = c]] = c] = c] = c] = c;\n[[[[[[[a=b] = c]]] = c] = c] = c] = c;\n[[[[[[[a=b]]]] = c] = c] = c] = c;\n[[[[[[[a=b] = c] = c] = c] = c] = c] = c] = [[[[[[[a=b] = c]]] = c] = c] = c] = c;\n[[[[[[[a=b]] = c]] = c] = c[[[[[[[a=b] = c]]] = c] = c] = c] = c] = c] = c;\n[1, ...rest];\n[...rest, 1];\n[...rest, ,1];\n[{a: 0}.x] = [];\n[[0].x] = [];\n[...50..bar];\n[...50];\n[...a=b];\n([...a.b] = c);\n([...[x]]) => x;\n[(a)] = x;\n(z = [...x.y] = z) => z;\n(z = [...x.y]) => z;\n[...[x]=y];;\n[...[{a: b}.c]] = [];;\n[...[{prop: 1}.prop]] = [];\n({ a: {prop: 1}.prop } = {});\n[{a: 1}.c] = [];\n[({a: 1}.c)] = [];\n[[1].c] = [];\n[foo.foo, foo.bar] = [1, 2];\n[([1].c)] = [];\n({ a: {prop: 1}.prop } = {});\n[foo, bar] = [0,1];\n[{a: 1, b: 2, ...o}];\n[5, ...[6, 7, 8], 9];\n[,,,1,2];\n[,,,,,,,,,,,,,,,,,,,,,,,,,];\n[,,,,a,,,,,,b,,,,,,,,,1,,,,,,];\n[,,,,,,,,[5, ...[6, 7, 8], 9],,,,,,,,,,,,,,,,,];\n[,,,,,,,,,,,,,,,,,,,,,,,,,];\n[,,,,,,,,,,,,,,,,,,,,,,,,,];\n[,,3,,,];\n[[1,2], [3], []];\n[([b].c.d) === {string} ? f : g ];\n[([3].c.d) === e ? f : g /= 1];\n[{}[x ? {zzz} : (z)] /= a];\n[ c.d === e ? (f) : (g) ];\n[\"b\" === e ? f : g ];\n[ [b].c.d === e ? f : g ];\n[{}[x ? y : z] += a];\n[ c.d === (e ? f : g )];\n[101];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1458
}
```

### Printed

```javascript

 [];, [];, [1];, [1];, [, 1];, [1, 2];, [, 1, 2];, [1, , 2];, [1, 2];, [1, 2, ];, [...a, ...b];, [...a, , ...b];, [...[...a]];, [...[...async]];, [, ...a];, [, , ...a];, [];, [[[[[[[101]]]]]]];, [[[[[[[a]]]]]]]=b;, [[[[[[[a=b]]]]=c]=c]=c]=c;, [[[[[[[a=b]=c]=c]=c]=c]=c]=c]=c;, [[[[[[[a=b]]=c]]=c]=c]=c]=c;, [[[[[[[a=b]=c]]]=c]=c]=c]=c;, [[[[[[[a=b]]]]=c]=c]=c]=c;, [[[[[[[a=b]=c]=c]=c]=c]=c]=c]=[[[[[[[a=b]=c]]]=c]=c]=c]=c;, [[[[[[[a=b]]=c]]=c]=c[[[[[[[a=b]=c]]]=c]=c]=c]=c]=c]=c;, [1, ...rest];, [...rest, 1];, [...rest, , 1];, [{ a : 0 }.x]=[];, [[0].x]=[];, [...50..bar];, [...50];, [...a=b];, ([...a.b]=c);, ([...[x]]) =>x;, [(a)]=x;, (z = [...x.y]=z) =>z;, (z = [...x.y]) =>z;, [...[x]=y];, ;, [...[{ a : b }.c]]=[];, ;, [...[{ prop : 1 }.prop]]=[];, ({ a : { prop : 1 }.prop }={  });, [{ a : 1 }.c]=[];, [({ a : 1 }.c)]=[];, [[1].c]=[];, [foo.foo, foo.bar]=[1, 2];, [([1].c)]=[];, ({ a : { prop : 1 }.prop }={  });, [foo, bar]=[0, 1];, [{ a : 1, b : 2,  }];, [5, ...[6, 7, 8], 9];, [, , , 1, 2];, [, , , , , , , , , , , , , , , , , , , , , , , , ];, [, , , , a, , , , , , b, , , , , , , , , 1, , , , , ];, [, , , , , , , , [5, ...[6, 7, 8], 9], , , , , , , , , , , , , , , , ];, [, , , , , , , , , , , , , , , , , , , , , , , , ];, [, , , , , , , , , , , , , , , , , , , , , , , , ];, [, , 3, , ];, [[1, 2], [3], []];, [([b].c.d) === { string } ? f : g];, [([3].c.d) === e ? f : g/=1];, [{  }[x ? { zzz } : (z)]/=a];, [c.d === e ? (f) : (g)];, ["b" === e ? f : g];, [[b].c.d === e ? f : g];, [{  }[x ? y : z]+=a];, [c.d === (e ? f : g)];, [101]; 
```

### Diagnostics

```javascript
✔ No errors
```

