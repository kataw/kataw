# Kataw parser test case

## Input

`````js
var a0: [any, any, any] = [];
var a1: [boolean, string, number] = ["string", 1, true];

var [b1, b2]: [number, number] = [1, 2, "string", true];

var temp = ["s", "t", "r"];
var temp1 = [1, 2, 3];
var temp2: [number[], string[]] = [[1, 2, 3], ["hello", "string"]];

interface tup {
    0: number[]|string[];
    1: number[]|string[];
}
interface myArray extends Array<Number> { }
interface myArray2 extends Array<Number|String> { }
var c0: tup = [...temp2];
var c1: [number, number, number] = [...temp1];
var c2: myArray = [...temp1, ...temp];

var a0 = [];
var a1 = ["string", 1, true];

var temp = ["s", "t", "r"];
var temp1 = [1, 2, 3];
var temp2 = [[1, 2, 3], ["hello", "string"]];
var c0 = temp2.slice();
var c1 = temp1.slice();
var c2 = temp1.concat(temp);

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var a0: [any, any, any] = [];\nvar a1: [boolean, string, number] = [\"string\", 1, true];\n\nvar [b1, b2]: [number, number] = [1, 2, \"string\", true];\n\nvar temp = [\"s\", \"t\", \"r\"];\nvar temp1 = [1, 2, 3];\nvar temp2: [number[], string[]] = [[1, 2, 3], [\"hello\", \"string\"]];\n\ninterface tup {\n    0: number[]|string[];\n    1: number[]|string[];\n}\ninterface myArray extends Array<Number> { }\ninterface myArray2 extends Array<Number|String> { }\nvar c0: tup = [...temp2];\nvar c1: [number, number, number] = [...temp1];\nvar c2: myArray = [...temp1, ...temp];\n\nvar a0 = [];\nvar a1 = [\"string\", 1, true];\n\nvar temp = [\"s\", \"t\", \"r\"];\nvar temp1 = [1, 2, 3];\nvar temp2 = [[1, 2, 3], [\"hello\", \"string\"]];\nvar c0 = temp2.slice();\nvar c1 = temp1.slice();\nvar c2 = temp1.concat(temp);\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "a0",
                                "rawText": "a0",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 6
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8416,
                                "elementTypes": [
                                    {
                                        "kind": 4202498,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 9,
                                        "end": 12
                                    },
                                    {
                                        "kind": 4202498,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 13,
                                        "end": 17
                                    },
                                    {
                                        "kind": 4202498,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 18,
                                        "end": 22
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 7,
                                "end": 23
                            },
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 28
                            },
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 28
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 28
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 29
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "a1",
                                "rawText": "a1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 33,
                                "end": 36
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8416,
                                "elementTypes": [
                                    {
                                        "kind": 4268070,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 39,
                                        "end": 46
                                    },
                                    {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 47,
                                        "end": 54
                                    },
                                    {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 55,
                                        "end": 62
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 37,
                                "end": 63
                            },
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 4261583,
                                            "text": "string",
                                            "rawText": "string",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 67,
                                            "end": 75
                                        },
                                        {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 76,
                                            "end": 78
                                        },
                                        {
                                            "kind": 4260391,
                                            "text": true,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 79,
                                            "end": 84
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 84
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 85
                            },
                            "flags": 33,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 85
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 85
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 29,
                "end": 86
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 33554437,
                                "elementList": {
                                    "kind": 29,
                                    "elements": [
                                        {
                                            "kind": 134217756,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "b1",
                                                "rawText": "b1",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 93,
                                                "end": 95
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 93,
                                            "end": 95
                                        },
                                        {
                                            "kind": 134217756,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "b2",
                                                "rawText": "b2",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 96,
                                                "end": 99
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 96,
                                            "end": 99
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 93,
                                    "end": 99
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 91,
                                "end": 100
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8416,
                                "elementTypes": [
                                    {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 103,
                                        "end": 109
                                    },
                                    {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 110,
                                        "end": 117
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 101,
                                "end": 118
                            },
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 122,
                                            "end": 123
                                        },
                                        {
                                            "kind": 4261540,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 124,
                                            "end": 126
                                        },
                                        {
                                            "kind": 4261583,
                                            "text": "string",
                                            "rawText": "string",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 127,
                                            "end": 136
                                        },
                                        {
                                            "kind": 4260391,
                                            "text": true,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 137,
                                            "end": 142
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 122,
                                    "end": 142
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 120,
                                "end": 143
                            },
                            "flags": 91,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 143
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 91,
                    "end": 143
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 86,
                "end": 144
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "temp",
                                "rawText": "temp",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 149,
                                "end": 154
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 4261583,
                                            "text": "s",
                                            "rawText": "s",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 158,
                                            "end": 161
                                        },
                                        {
                                            "kind": 4261583,
                                            "text": "t",
                                            "rawText": "t",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 162,
                                            "end": 166
                                        },
                                        {
                                            "kind": 4261583,
                                            "text": "r",
                                            "rawText": "r",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 167,
                                            "end": 171
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 158,
                                    "end": 171
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 156,
                                "end": 172
                            },
                            "flags": 149,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 172
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 149,
                    "end": 172
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 144,
                "end": 173
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "temp1",
                                "rawText": "temp1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 177,
                                "end": 183
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 187,
                                            "end": 188
                                        },
                                        {
                                            "kind": 4261540,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 189,
                                            "end": 191
                                        },
                                        {
                                            "kind": 4261540,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 192,
                                            "end": 194
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 187,
                                    "end": 194
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 185,
                                "end": 195
                            },
                            "flags": 177,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 195
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 177,
                    "end": 195
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 173,
                "end": 196
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "temp2",
                                "rawText": "temp2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 200,
                                "end": 206
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8416,
                                "elementTypes": [
                                    {
                                        "kind": 8199,
                                        "elementType": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 209,
                                            "end": 215
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 209,
                                        "end": 218
                                    },
                                    {
                                        "kind": 8199,
                                        "elementType": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 218,
                                            "end": 225
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 218,
                                        "end": 228
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 207,
                                "end": 228
                            },
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 67207686,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 4261540,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 233,
                                                        "end": 234
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 235,
                                                        "end": 237
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 238,
                                                        "end": 240
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 233,
                                                "end": 240
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 232,
                                            "end": 241
                                        },
                                        {
                                            "kind": 67207686,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 4261583,
                                                        "text": "hello",
                                                        "rawText": "hello",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 244,
                                                        "end": 251
                                                    },
                                                    {
                                                        "kind": 4261583,
                                                        "text": "string",
                                                        "rawText": "string",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 252,
                                                        "end": 261
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 244,
                                                "end": 261
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 242,
                                            "end": 262
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 232,
                                    "end": 262
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 230,
                                "end": 263
                            },
                            "flags": 200,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 263
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 200,
                    "end": 263
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 196,
                "end": 264
            },
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "tup",
                    "rawText": "tup",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 275,
                    "end": 279
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8380,
                            "name": {
                                "kind": 4261540,
                                "text": 0,
                                "rawText": "0",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 281,
                                "end": 287
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": {
                                "kind": 8432,
                                "types": [
                                    {
                                        "kind": 8199,
                                        "elementType": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 288,
                                            "end": 295
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 288,
                                        "end": 298
                                    },
                                    {
                                        "kind": 8199,
                                        "elementType": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 298,
                                            "end": 304
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 298,
                                        "end": 307
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 297,
                                "end": 306
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 281,
                            "end": 307
                        },
                        {
                            "kind": 8380,
                            "name": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 307,
                                "end": 313
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": {
                                "kind": 8432,
                                "types": [
                                    {
                                        "kind": 8199,
                                        "elementType": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 314,
                                            "end": 321
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 314,
                                        "end": 324
                                    },
                                    {
                                        "kind": 8199,
                                        "elementType": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 324,
                                            "end": 330
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 324,
                                        "end": 333
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 323,
                                "end": 332
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 307,
                            "end": 333
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 281,
                    "end": 333
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 264,
                "end": 335
            },
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "myArray",
                    "rawText": "myArray",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 345,
                    "end": 353
                },
                "typeParameters": null,
                "heritageClauses": {
                    "kind": 8294,
                    "clauses": [
                        {
                            "kind": 8293,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 361,
                                    "end": 367
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "Number",
                                                "rawText": "Number",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 368,
                                                "end": 374
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 368,
                                            "end": 375
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 368,
                                    "end": 374
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 361,
                                "end": 377
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 361,
                            "end": 375
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 361,
                    "end": 375
                },
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 377,
                    "end": 377
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 335,
                "end": 379
            },
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "myArray2",
                    "rawText": "myArray2",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 389,
                    "end": 398
                },
                "typeParameters": null,
                "heritageClauses": {
                    "kind": 8294,
                    "clauses": [
                        {
                            "kind": 8293,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 406,
                                    "end": 412
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 8432,
                                            "types": [
                                                {
                                                    "kind": 8428,
                                                    "typeName": {
                                                        "kind": 196711,
                                                        "text": "Number",
                                                        "rawText": "Number",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 413,
                                                        "end": 419
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 413,
                                                    "end": 420
                                                },
                                                {
                                                    "kind": 8428,
                                                    "typeName": {
                                                        "kind": 196711,
                                                        "text": "String",
                                                        "rawText": "String",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 420,
                                                        "end": 426
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 420,
                                                    "end": 427
                                                }
                                            ],
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 419,
                                            "end": 426
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 413,
                                    "end": 426
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 406,
                                "end": 429
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 406,
                            "end": 427
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 406,
                    "end": 427
                },
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 429,
                    "end": 429
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 379,
                "end": 431
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "c0",
                                "rawText": "c0",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 435,
                                "end": 438
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "tup",
                                    "rawText": "tup",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 439,
                                    "end": 443
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 439,
                                "end": 445
                            },
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 65740,
                                            "argument": {
                                                "kind": 196712,
                                                "text": "temp2",
                                                "rawText": "temp2",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 450,
                                                "end": 455
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2,
                                            "start": 447,
                                            "end": 455
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 447,
                                    "end": 455
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 445,
                                "end": 456
                            },
                            "flags": 435,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 456
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 435,
                    "end": 456
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 431,
                "end": 457
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "c1",
                                "rawText": "c1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 461,
                                "end": 464
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8416,
                                "elementTypes": [
                                    {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 467,
                                        "end": 473
                                    },
                                    {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 474,
                                        "end": 481
                                    },
                                    {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 482,
                                        "end": 489
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 465,
                                "end": 490
                            },
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 65740,
                                            "argument": {
                                                "kind": 196712,
                                                "text": "temp1",
                                                "rawText": "temp1",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 497,
                                                "end": 502
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2,
                                            "start": 494,
                                            "end": 502
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 494,
                                    "end": 502
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 492,
                                "end": 503
                            },
                            "flags": 461,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 503
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 461,
                    "end": 503
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 457,
                "end": 504
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "c2",
                                "rawText": "c2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 508,
                                "end": 511
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "myArray",
                                    "rawText": "myArray",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 512,
                                    "end": 520
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 512,
                                "end": 522
                            },
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 65740,
                                            "argument": {
                                                "kind": 196712,
                                                "text": "temp1",
                                                "rawText": "temp1",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 527,
                                                "end": 532
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2,
                                            "start": 524,
                                            "end": 532
                                        },
                                        {
                                            "kind": 65740,
                                            "argument": {
                                                "kind": 196712,
                                                "text": "temp",
                                                "rawText": "temp",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 537,
                                                "end": 541
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2,
                                            "start": 533,
                                            "end": 541
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 524,
                                    "end": 541
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 522,
                                "end": 542
                            },
                            "flags": 508,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 542
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 508,
                    "end": 542
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 504,
                "end": 543
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "a0",
                                "rawText": "a0",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 548,
                                "end": 551
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 555,
                                    "end": 555
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 553,
                                "end": 556
                            },
                            "flags": 548,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 556
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 548,
                    "end": 556
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 543,
                "end": 557
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "a1",
                                "rawText": "a1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 561,
                                "end": 564
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 4261583,
                                            "text": "string",
                                            "rawText": "string",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 568,
                                            "end": 576
                                        },
                                        {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 577,
                                            "end": 579
                                        },
                                        {
                                            "kind": 4260391,
                                            "text": true,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 580,
                                            "end": 585
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 568,
                                    "end": 585
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 566,
                                "end": 586
                            },
                            "flags": 561,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 586
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 561,
                    "end": 586
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 557,
                "end": 587
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "temp",
                                "rawText": "temp",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 592,
                                "end": 597
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 4261583,
                                            "text": "s",
                                            "rawText": "s",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 601,
                                            "end": 604
                                        },
                                        {
                                            "kind": 4261583,
                                            "text": "t",
                                            "rawText": "t",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 605,
                                            "end": 609
                                        },
                                        {
                                            "kind": 4261583,
                                            "text": "r",
                                            "rawText": "r",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 610,
                                            "end": 614
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 601,
                                    "end": 614
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 599,
                                "end": 615
                            },
                            "flags": 592,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 615
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 592,
                    "end": 615
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 587,
                "end": 616
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "temp1",
                                "rawText": "temp1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 620,
                                "end": 626
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 630,
                                            "end": 631
                                        },
                                        {
                                            "kind": 4261540,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 632,
                                            "end": 634
                                        },
                                        {
                                            "kind": 4261540,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 635,
                                            "end": 637
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 630,
                                    "end": 637
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 628,
                                "end": 638
                            },
                            "flags": 620,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 638
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 620,
                    "end": 638
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 616,
                "end": 639
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "temp2",
                                "rawText": "temp2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 643,
                                "end": 649
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 67207686,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 4261540,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 654,
                                                        "end": 655
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 656,
                                                        "end": 658
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 659,
                                                        "end": 661
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 654,
                                                "end": 661
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 653,
                                            "end": 662
                                        },
                                        {
                                            "kind": 67207686,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 4261583,
                                                        "text": "hello",
                                                        "rawText": "hello",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 665,
                                                        "end": 672
                                                    },
                                                    {
                                                        "kind": 4261583,
                                                        "text": "string",
                                                        "rawText": "string",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 673,
                                                        "end": 682
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 665,
                                                "end": 682
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 663,
                                            "end": 683
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 653,
                                    "end": 683
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 651,
                                "end": 684
                            },
                            "flags": 643,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 684
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 643,
                    "end": 684
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 639,
                "end": 685
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "c0",
                                "rawText": "c0",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 689,
                                "end": 692
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66232,
                                    "member": {
                                        "kind": 196712,
                                        "text": "temp2",
                                        "rawText": "temp2",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 694,
                                        "end": 700
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "slice",
                                        "rawText": "slice",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 701,
                                        "end": 706
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 700,
                                    "end": 706,
                                    "period": {
                                        "kind": 254,
                                        "pos": 700,
                                        "end": 701
                                    }
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 708,
                                    "end": 708
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 706,
                                "end": 708
                            },
                            "flags": 689,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 708
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 689,
                    "end": 708
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 685,
                "end": 709
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "c1",
                                "rawText": "c1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 713,
                                "end": 716
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66232,
                                    "member": {
                                        "kind": 196712,
                                        "text": "temp1",
                                        "rawText": "temp1",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 718,
                                        "end": 724
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "slice",
                                        "rawText": "slice",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 725,
                                        "end": 730
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 724,
                                    "end": 730,
                                    "period": {
                                        "kind": 254,
                                        "pos": 724,
                                        "end": 725
                                    }
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 732,
                                    "end": 732
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 730,
                                "end": 732
                            },
                            "flags": 713,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 732
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 713,
                    "end": 732
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 709,
                "end": 733
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "c2",
                                "rawText": "c2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 737,
                                "end": 740
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66232,
                                    "member": {
                                        "kind": 196712,
                                        "text": "temp1",
                                        "rawText": "temp1",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 742,
                                        "end": 748
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "concat",
                                        "rawText": "concat",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 749,
                                        "end": 755
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 748,
                                    "end": 755,
                                    "period": {
                                        "kind": 254,
                                        "pos": 748,
                                        "end": 749
                                    }
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "temp",
                                            "rawText": "temp",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 756,
                                            "end": 760
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 760,
                                    "end": 761
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 755,
                                "end": 761
                            },
                            "flags": 737,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 761
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 737,
                    "end": 761
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 733,
                "end": 762
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 762
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 763
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

