# Kataw parser test case

## Input

`````js
({ a: obj.a } = {});
({ a: this.a } = {});
([...[][x]] = x);
([...{}[x]] = x);
({...{b: 0}.x} = {});
({...[0].x} = {});
({...{b: 0}[x]} = {});
({...[0][x]} = {});
({...[1][2]} = {});
({x=0, y:z} = 0);
({x: y,} = 0);
({[a]: a} = 1);

(x, { a: obj.a } = {});
(x, { a: this.a } = {});
(x, [...[][x]] = x);
(x, [...{}[x]] = x);
(x, {...{b: 0}.x} = {});
(x, {...[0].x} = {});
(x, {...{b: 0}[x]} = {});
(x, {...[0][x]} = {});
(x, {...[1][2]} = {});
(x, {x=0, y:z} = 0);
(x, {x: y,} = 0);
(x, {[a]: a} = 1);
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
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 4
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "obj",
                                            "rawText": "obj",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 9
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "flags": 536870944,
                                        "start": 2,
                                        "end": 11
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 11
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 11
                        },
                        "flags": 48,
                        "start": 1,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 13,
                        "end": 15
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 17,
                            "end": 17
                        },
                        "flags": 48,
                        "start": 15,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 20
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
                                        "start": 23,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "start": 26,
                                            "end": 31
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 32,
                                            "end": 33
                                        },
                                        "flags": 536870944,
                                        "start": 23,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 33
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 23,
                            "end": 33
                        },
                        "flags": 48,
                        "start": 22,
                        "end": 35
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 35,
                        "end": 37
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 39,
                            "end": 39
                        },
                        "flags": 48,
                        "start": 37,
                        "end": 40
                    },
                    "flags": 32,
                    "start": 22,
                    "end": 40
                },
                "flags": 32,
                "start": 20,
                "end": 41
            },
            "flags": 16,
            "start": 20,
            "end": 42
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
                                        "start": 45,
                                        "end": 48
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 49,
                                                "end": 49
                                            },
                                            "flags": 32,
                                            "start": 48,
                                            "end": 50
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 51,
                                            "end": 52
                                        },
                                        "flags": 536870944,
                                        "start": 48,
                                        "end": 53
                                    },
                                    "flags": 32,
                                    "start": 45,
                                    "end": 53
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 45,
                            "end": 53
                        },
                        "flags": 32,
                        "start": 44,
                        "end": 54
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 54,
                        "end": 56
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 56,
                        "end": 58
                    },
                    "flags": 32,
                    "start": 44,
                    "end": 58
                },
                "flags": 32,
                "start": 42,
                "end": 59
            },
            "flags": 16,
            "start": 42,
            "end": 60
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
                                        "start": 63,
                                        "end": 66
                                    },
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 67,
                                                "end": 67
                                            },
                                            "flags": 48,
                                            "start": 66,
                                            "end": 68
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 69,
                                            "end": 70
                                        },
                                        "flags": 536870944,
                                        "start": 66,
                                        "end": 71
                                    },
                                    "flags": 32,
                                    "start": 63,
                                    "end": 71
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 63,
                            "end": 71
                        },
                        "flags": 32,
                        "start": 62,
                        "end": 72
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 72,
                        "end": 74
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 74,
                        "end": 76
                    },
                    "flags": 32,
                    "start": 62,
                    "end": 76
                },
                "flags": 32,
                "start": 60,
                "end": 77
            },
            "flags": 16,
            "start": 60,
            "end": 78
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 81,
                                        "end": 84
                                    },
                                    "argument": {
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
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 85,
                                                            "end": 86
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "start": 87,
                                                            "end": 89
                                                        },
                                                        "flags": 32,
                                                        "start": 85,
                                                        "end": 89
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 85,
                                                "end": 89
                                            },
                                            "flags": 48,
                                            "start": 84,
                                            "end": 90
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 91,
                                            "end": 92
                                        },
                                        "flags": 536870944,
                                        "start": 84,
                                        "end": 92
                                    },
                                    "flags": 32,
                                    "start": 81,
                                    "end": 92
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 81,
                            "end": 92
                        },
                        "flags": 48,
                        "start": 80,
                        "end": 93
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 93,
                        "end": 95
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 97,
                            "end": 97
                        },
                        "flags": 48,
                        "start": 95,
                        "end": 98
                    },
                    "flags": 32,
                    "start": 80,
                    "end": 98
                },
                "flags": 32,
                "start": 78,
                "end": 99
            },
            "flags": 16,
            "start": 78,
            "end": 100
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 103,
                                        "end": 106
                                    },
                                    "argument": {
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
                                                        "start": 107,
                                                        "end": 108
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 107,
                                                "end": 108
                                            },
                                            "flags": 32,
                                            "start": 106,
                                            "end": 109
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 110,
                                            "end": 111
                                        },
                                        "flags": 536870944,
                                        "start": 106,
                                        "end": 111
                                    },
                                    "flags": 32,
                                    "start": 103,
                                    "end": 111
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 103,
                            "end": 111
                        },
                        "flags": 48,
                        "start": 102,
                        "end": 112
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 112,
                        "end": 114
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 116,
                            "end": 116
                        },
                        "flags": 48,
                        "start": 114,
                        "end": 117
                    },
                    "flags": 32,
                    "start": 102,
                    "end": 117
                },
                "flags": 32,
                "start": 100,
                "end": 118
            },
            "flags": 16,
            "start": 100,
            "end": 119
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 122,
                                        "end": 125
                                    },
                                    "argument": {
                                        "kind": 130,
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
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 126,
                                                            "end": 127
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "start": 128,
                                                            "end": 130
                                                        },
                                                        "flags": 32,
                                                        "start": 126,
                                                        "end": 130
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 126,
                                                "end": 130
                                            },
                                            "flags": 48,
                                            "start": 125,
                                            "end": 131
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 132,
                                            "end": 133
                                        },
                                        "flags": 536870944,
                                        "start": 125,
                                        "end": 134
                                    },
                                    "flags": 32,
                                    "start": 122,
                                    "end": 134
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 122,
                            "end": 134
                        },
                        "flags": 48,
                        "start": 121,
                        "end": 135
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 135,
                        "end": 137
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 139,
                            "end": 139
                        },
                        "flags": 48,
                        "start": 137,
                        "end": 140
                    },
                    "flags": 32,
                    "start": 121,
                    "end": 140
                },
                "flags": 32,
                "start": 119,
                "end": 141
            },
            "flags": 16,
            "start": 119,
            "end": 142
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 145,
                                        "end": 148
                                    },
                                    "argument": {
                                        "kind": 130,
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
                                                        "start": 149,
                                                        "end": 150
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 149,
                                                "end": 150
                                            },
                                            "flags": 32,
                                            "start": 148,
                                            "end": 151
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 152,
                                            "end": 153
                                        },
                                        "flags": 536870944,
                                        "start": 148,
                                        "end": 154
                                    },
                                    "flags": 32,
                                    "start": 145,
                                    "end": 154
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 145,
                            "end": 154
                        },
                        "flags": 48,
                        "start": 144,
                        "end": 155
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 155,
                        "end": 157
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 159,
                            "end": 159
                        },
                        "flags": 48,
                        "start": 157,
                        "end": 160
                    },
                    "flags": 32,
                    "start": 144,
                    "end": 160
                },
                "flags": 32,
                "start": 142,
                "end": 161
            },
            "flags": 16,
            "start": 142,
            "end": 162
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
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 165,
                                        "end": 168
                                    },
                                    "argument": {
                                        "kind": 130,
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
                                                        "start": 169,
                                                        "end": 170
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 169,
                                                "end": 170
                                            },
                                            "flags": 32,
                                            "start": 168,
                                            "end": 171
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 172,
                                            "end": 173
                                        },
                                        "flags": 536870944,
                                        "start": 168,
                                        "end": 174
                                    },
                                    "flags": 32,
                                    "start": 165,
                                    "end": 174
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 165,
                            "end": 174
                        },
                        "flags": 48,
                        "start": 164,
                        "end": 175
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 175,
                        "end": 177
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 179,
                            "end": 179
                        },
                        "flags": 48,
                        "start": 177,
                        "end": 180
                    },
                    "flags": 32,
                    "start": 164,
                    "end": 180
                },
                "flags": 32,
                "start": 162,
                "end": 181
            },
            "flags": 16,
            "start": 162,
            "end": 182
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
                                        "start": 185,
                                        "end": 186
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 187,
                                        "end": 188
                                    },
                                    "flags": 32,
                                    "start": 185,
                                    "end": 188
                                },
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 189,
                                        "end": 191
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 192,
                                        "end": 193
                                    },
                                    "flags": 32,
                                    "start": 189,
                                    "end": 193
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 185,
                            "end": 193
                        },
                        "flags": 48,
                        "start": 184,
                        "end": 194
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 194,
                        "end": 196
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 196,
                        "end": 198
                    },
                    "flags": 32,
                    "start": 184,
                    "end": 198
                },
                "flags": 32,
                "start": 182,
                "end": 199
            },
            "flags": 16,
            "start": 182,
            "end": 200
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
                                        "start": 203,
                                        "end": 204
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 205,
                                        "end": 207
                                    },
                                    "flags": 32,
                                    "start": 203,
                                    "end": 207
                                }
                            ],
                            "trailingComma": true,
                            "flags": 16,
                            "start": 203,
                            "end": 208
                        },
                        "flags": 48,
                        "start": 202,
                        "end": 209
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 209,
                        "end": 211
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 211,
                        "end": 213
                    },
                    "flags": 32,
                    "start": 202,
                    "end": 213
                },
                "flags": 32,
                "start": 200,
                "end": 214
            },
            "flags": 16,
            "start": 200,
            "end": 215
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
                                        "kind": 194,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 219,
                                            "end": 220
                                        },
                                        "flags": 32,
                                        "start": 218,
                                        "end": 221
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 222,
                                        "end": 224
                                    },
                                    "flags": 32,
                                    "start": 218,
                                    "end": 224
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 218,
                            "end": 224
                        },
                        "flags": 48,
                        "start": 217,
                        "end": 225
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 225,
                        "end": 227
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 227,
                        "end": 229
                    },
                    "flags": 32,
                    "start": 217,
                    "end": 229
                },
                "flags": 32,
                "start": 215,
                "end": 230
            },
            "flags": 16,
            "start": 215,
            "end": 231
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
                            "start": 234,
                            "end": 235
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
                                                "start": 238,
                                                "end": 240
                                            },
                                            "right": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "obj",
                                                    "rawText": "obj",
                                                    "flags": 96,
                                                    "start": 241,
                                                    "end": 245
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 246,
                                                    "end": 247
                                                },
                                                "flags": 536870944,
                                                "start": 238,
                                                "end": 247
                                            },
                                            "flags": 32,
                                            "start": 238,
                                            "end": 247
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 238,
                                    "end": 247
                                },
                                "flags": 48,
                                "start": 236,
                                "end": 249
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 249,
                                "end": 251
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 253,
                                    "end": 253
                                },
                                "flags": 48,
                                "start": 251,
                                "end": 254
                            },
                            "flags": 32,
                            "start": 236,
                            "end": 254
                        }
                    ],
                    "flags": 32,
                    "start": 231,
                    "end": 255
                },
                "flags": 32,
                "start": 231,
                "end": 255
            },
            "flags": 16,
            "start": 231,
            "end": 256
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
                            "start": 258,
                            "end": 259
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
                                                "start": 262,
                                                "end": 264
                                            },
                                            "right": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 4276321,
                                                    "flags": 96,
                                                    "start": 265,
                                                    "end": 270
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 271,
                                                    "end": 272
                                                },
                                                "flags": 536870944,
                                                "start": 262,
                                                "end": 272
                                            },
                                            "flags": 32,
                                            "start": 262,
                                            "end": 272
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 262,
                                    "end": 272
                                },
                                "flags": 48,
                                "start": 260,
                                "end": 274
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 274,
                                "end": 276
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 278,
                                    "end": 278
                                },
                                "flags": 48,
                                "start": 276,
                                "end": 279
                            },
                            "flags": 32,
                            "start": 260,
                            "end": 279
                        }
                    ],
                    "flags": 32,
                    "start": 256,
                    "end": 280
                },
                "flags": 32,
                "start": 256,
                "end": 280
            },
            "flags": 16,
            "start": 256,
            "end": 281
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
                            "start": 283,
                            "end": 284
                        },
                        {
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
                                                "start": 287,
                                                "end": 290
                                            },
                                            "argument": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 291,
                                                        "end": 291
                                                    },
                                                    "flags": 32,
                                                    "start": 290,
                                                    "end": 292
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 293,
                                                    "end": 294
                                                },
                                                "flags": 536870944,
                                                "start": 290,
                                                "end": 295
                                            },
                                            "flags": 32,
                                            "start": 287,
                                            "end": 295
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 287,
                                    "end": 295
                                },
                                "flags": 32,
                                "start": 285,
                                "end": 296
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 296,
                                "end": 298
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 298,
                                "end": 300
                            },
                            "flags": 32,
                            "start": 285,
                            "end": 300
                        }
                    ],
                    "flags": 32,
                    "start": 281,
                    "end": 301
                },
                "flags": 32,
                "start": 281,
                "end": 301
            },
            "flags": 16,
            "start": 281,
            "end": 302
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
                            "start": 304,
                            "end": 305
                        },
                        {
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
                                                "start": 308,
                                                "end": 311
                                            },
                                            "argument": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 312,
                                                        "end": 312
                                                    },
                                                    "flags": 48,
                                                    "start": 311,
                                                    "end": 313
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 314,
                                                    "end": 315
                                                },
                                                "flags": 536870944,
                                                "start": 311,
                                                "end": 316
                                            },
                                            "flags": 32,
                                            "start": 308,
                                            "end": 316
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 308,
                                    "end": 316
                                },
                                "flags": 32,
                                "start": 306,
                                "end": 317
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 317,
                                "end": 319
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 319,
                                "end": 321
                            },
                            "flags": 32,
                            "start": 306,
                            "end": 321
                        }
                    ],
                    "flags": 32,
                    "start": 302,
                    "end": 322
                },
                "flags": 32,
                "start": 302,
                "end": 322
            },
            "flags": 16,
            "start": 302,
            "end": 323
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
                            "start": 325,
                            "end": 326
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 224,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 329,
                                                "end": 332
                                            },
                                            "argument": {
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
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 96,
                                                                    "start": 333,
                                                                    "end": 334
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 0,
                                                                    "rawText": "0",
                                                                    "flags": 96,
                                                                    "start": 335,
                                                                    "end": 337
                                                                },
                                                                "flags": 32,
                                                                "start": 333,
                                                                "end": 337
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 333,
                                                        "end": 337
                                                    },
                                                    "flags": 48,
                                                    "start": 332,
                                                    "end": 338
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 339,
                                                    "end": 340
                                                },
                                                "flags": 536870944,
                                                "start": 332,
                                                "end": 340
                                            },
                                            "flags": 32,
                                            "start": 329,
                                            "end": 340
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 329,
                                    "end": 340
                                },
                                "flags": 48,
                                "start": 327,
                                "end": 341
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 341,
                                "end": 343
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 345,
                                    "end": 345
                                },
                                "flags": 48,
                                "start": 343,
                                "end": 346
                            },
                            "flags": 32,
                            "start": 327,
                            "end": 346
                        }
                    ],
                    "flags": 32,
                    "start": 323,
                    "end": 347
                },
                "flags": 32,
                "start": 323,
                "end": 347
            },
            "flags": 16,
            "start": 323,
            "end": 348
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
                            "start": 350,
                            "end": 351
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 224,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 354,
                                                "end": 357
                                            },
                                            "argument": {
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
                                                                "start": 358,
                                                                "end": 359
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 358,
                                                        "end": 359
                                                    },
                                                    "flags": 32,
                                                    "start": 357,
                                                    "end": 360
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 361,
                                                    "end": 362
                                                },
                                                "flags": 536870944,
                                                "start": 357,
                                                "end": 362
                                            },
                                            "flags": 32,
                                            "start": 354,
                                            "end": 362
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 354,
                                    "end": 362
                                },
                                "flags": 48,
                                "start": 352,
                                "end": 363
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 363,
                                "end": 365
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 367,
                                    "end": 367
                                },
                                "flags": 48,
                                "start": 365,
                                "end": 368
                            },
                            "flags": 32,
                            "start": 352,
                            "end": 368
                        }
                    ],
                    "flags": 32,
                    "start": 348,
                    "end": 369
                },
                "flags": 32,
                "start": 348,
                "end": 369
            },
            "flags": 16,
            "start": 348,
            "end": 370
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
                            "start": 372,
                            "end": 373
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 224,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 376,
                                                "end": 379
                                            },
                                            "argument": {
                                                "kind": 130,
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
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 96,
                                                                    "start": 380,
                                                                    "end": 381
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 0,
                                                                    "rawText": "0",
                                                                    "flags": 96,
                                                                    "start": 382,
                                                                    "end": 384
                                                                },
                                                                "flags": 32,
                                                                "start": 380,
                                                                "end": 384
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 380,
                                                        "end": 384
                                                    },
                                                    "flags": 48,
                                                    "start": 379,
                                                    "end": 385
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 386,
                                                    "end": 387
                                                },
                                                "flags": 536870944,
                                                "start": 379,
                                                "end": 388
                                            },
                                            "flags": 32,
                                            "start": 376,
                                            "end": 388
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 376,
                                    "end": 388
                                },
                                "flags": 48,
                                "start": 374,
                                "end": 389
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 389,
                                "end": 391
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 393,
                                    "end": 393
                                },
                                "flags": 48,
                                "start": 391,
                                "end": 394
                            },
                            "flags": 32,
                            "start": 374,
                            "end": 394
                        }
                    ],
                    "flags": 32,
                    "start": 370,
                    "end": 395
                },
                "flags": 32,
                "start": 370,
                "end": 395
            },
            "flags": 16,
            "start": 370,
            "end": 396
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
                            "start": 398,
                            "end": 399
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 224,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 402,
                                                "end": 405
                                            },
                                            "argument": {
                                                "kind": 130,
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
                                                                "start": 406,
                                                                "end": 407
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 406,
                                                        "end": 407
                                                    },
                                                    "flags": 32,
                                                    "start": 405,
                                                    "end": 408
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 409,
                                                    "end": 410
                                                },
                                                "flags": 536870944,
                                                "start": 405,
                                                "end": 411
                                            },
                                            "flags": 32,
                                            "start": 402,
                                            "end": 411
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 402,
                                    "end": 411
                                },
                                "flags": 48,
                                "start": 400,
                                "end": 412
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 412,
                                "end": 414
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 416,
                                    "end": 416
                                },
                                "flags": 48,
                                "start": 414,
                                "end": 417
                            },
                            "flags": 32,
                            "start": 400,
                            "end": 417
                        }
                    ],
                    "flags": 32,
                    "start": 396,
                    "end": 418
                },
                "flags": 32,
                "start": 396,
                "end": 418
            },
            "flags": 16,
            "start": 396,
            "end": 419
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
                            "start": 421,
                            "end": 422
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 224,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 425,
                                                "end": 428
                                            },
                                            "argument": {
                                                "kind": 130,
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
                                                                "start": 429,
                                                                "end": 430
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 429,
                                                        "end": 430
                                                    },
                                                    "flags": 32,
                                                    "start": 428,
                                                    "end": 431
                                                },
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 96,
                                                    "start": 432,
                                                    "end": 433
                                                },
                                                "flags": 536870944,
                                                "start": 428,
                                                "end": 434
                                            },
                                            "flags": 32,
                                            "start": 425,
                                            "end": 434
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 425,
                                    "end": 434
                                },
                                "flags": 48,
                                "start": 423,
                                "end": 435
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 435,
                                "end": 437
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 439,
                                    "end": 439
                                },
                                "flags": 48,
                                "start": 437,
                                "end": 440
                            },
                            "flags": 32,
                            "start": 423,
                            "end": 440
                        }
                    ],
                    "flags": 32,
                    "start": 419,
                    "end": 441
                },
                "flags": 32,
                "start": 419,
                "end": 441
            },
            "flags": 16,
            "start": 419,
            "end": 442
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
                            "start": 444,
                            "end": 445
                        },
                        {
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
                                                "start": 448,
                                                "end": 449
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 450,
                                                "end": 451
                                            },
                                            "flags": 32,
                                            "start": 448,
                                            "end": 451
                                        },
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 452,
                                                "end": 454
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 455,
                                                "end": 456
                                            },
                                            "flags": 32,
                                            "start": 452,
                                            "end": 456
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 448,
                                    "end": 456
                                },
                                "flags": 48,
                                "start": 446,
                                "end": 457
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 457,
                                "end": 459
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 459,
                                "end": 461
                            },
                            "flags": 32,
                            "start": 446,
                            "end": 461
                        }
                    ],
                    "flags": 32,
                    "start": 442,
                    "end": 462
                },
                "flags": 32,
                "start": 442,
                "end": 462
            },
            "flags": 16,
            "start": 442,
            "end": 463
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
                            "start": 465,
                            "end": 466
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
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 469,
                                                "end": 470
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 471,
                                                "end": 473
                                            },
                                            "flags": 32,
                                            "start": 469,
                                            "end": 473
                                        }
                                    ],
                                    "trailingComma": true,
                                    "flags": 16,
                                    "start": 469,
                                    "end": 474
                                },
                                "flags": 48,
                                "start": 467,
                                "end": 475
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 475,
                                "end": 477
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 477,
                                "end": 479
                            },
                            "flags": 32,
                            "start": 467,
                            "end": 479
                        }
                    ],
                    "flags": 32,
                    "start": 463,
                    "end": 480
                },
                "flags": 32,
                "start": 463,
                "end": 480
            },
            "flags": 16,
            "start": 463,
            "end": 481
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
                            "start": 483,
                            "end": 484
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
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 488,
                                                    "end": 489
                                                },
                                                "flags": 32,
                                                "start": 487,
                                                "end": 490
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 491,
                                                "end": 493
                                            },
                                            "flags": 32,
                                            "start": 487,
                                            "end": 493
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 487,
                                    "end": 493
                                },
                                "flags": 48,
                                "start": 485,
                                "end": 494
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 494,
                                "end": 496
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 496,
                                "end": 498
                            },
                            "flags": 32,
                            "start": 485,
                            "end": 498
                        }
                    ],
                    "flags": 32,
                    "start": 481,
                    "end": 499
                },
                "flags": 32,
                "start": 481,
                "end": 499
            },
            "flags": 16,
            "start": 481,
            "end": 500
        }
    ],
    "isModule": false,
    "source": "({ a: obj.a } = {});\n({ a: this.a } = {});\n([...[][x]] = x);\n([...{}[x]] = x);\n({...{b: 0}.x} = {});\n({...[0].x} = {});\n({...{b: 0}[x]} = {});\n({...[0][x]} = {});\n({...[1][2]} = {});\n({x=0, y:z} = 0);\n({x: y,} = 0);\n({[a]: a} = 1);\n\n(x, { a: obj.a } = {});\n(x, { a: this.a } = {});\n(x, [...[][x]] = x);\n(x, [...{}[x]] = x);\n(x, {...{b: 0}.x} = {});\n(x, {...[0].x} = {});\n(x, {...{b: 0}[x]} = {});\n(x, {...[0][x]} = {});\n(x, {...[1][2]} = {});\n(x, {x=0, y:z} = 0);\n(x, {x: y,} = 0);\n(x, {[a]: a} = 1);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 500
}
```

### Printed

```javascript

({ a: obj.a } = {});
({ a: this.a } = {});
([...[][x]] = x);
([...{}[x]] = x);
({ ...{ b: 0 }.x } = {});
({ ...[0].x } = {});
({ ...{ b: 0 }[x] } = {});
({ ...[0][x] } = {});
({ ...[1][2] } = {});
({ x = 0, y: z } = 0);
({ x: y } = 0);
({ [a]: a } = 1);
(x, { a: obj.a } = {});
(x, { a: this.a } = {});
(x, [...[][x]] = x);
(x, [...{}[x]] = x);
(x, { ...{ b: 0 }.x } = {});
(x, { ...[0].x } = {});
(x, { ...{ b: 0 }[x] } = {});
(x, { ...[0][x] } = {});
(x, { ...[1][2] } = {});
(x, { x = 0, y: z } = 0);
(x, { x: y } = 0);
(x, { [a]: a } = 1);
```

### Diagnostics

```javascript
✔ No errors
```

