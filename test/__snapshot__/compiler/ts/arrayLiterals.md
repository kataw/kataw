# Kataw parser test case

## Input

`````js
var arr1= [[], [1], ['']];

var arr2 = [[null], [1], ['']];

var stringArrArr = [[''], [""]];

var stringArr = ['', ""];

var numberArr = [0, 0.0, 0x00, 1e1];

var boolArr = [false, true, false, true];

class C { private p; }
var classArr = [new C(), new C()];

var classTypeArray = [C, C, C];
var classTypeArray: Array<typeof C>; // Should OK, not be a parse error

var context1: { [n: number]: { a: string; b: number; }; } = [{ a: '', b: 0, c: '' }, { a: "", b: 3, c: 0 }];
var context2 = [{ a: '', b: 0, c: '' }, { a: "", b: 3, c: 0 }];

class Base { private p; }
class Derived1 extends Base { private m };
class Derived2 extends Base { private n };
var context3: Base[] = [new Derived1(), new Derived2()];

var context4: Base[] = [new Derived1(), new Derived1()];
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var arr1= [[], [1], ['']];\n\nvar arr2 = [[null], [1], ['']];\n\nvar stringArrArr = [[''], [\"\"]];\n\nvar stringArr = ['', \"\"];\n\nvar numberArr = [0, 0.0, 0x00, 1e1];\n\nvar boolArr = [false, true, false, true];\n\nclass C { private p; }\nvar classArr = [new C(), new C()];\n\nvar classTypeArray = [C, C, C];\nvar classTypeArray: Array<typeof C>; // Should OK, not be a parse error\n\nvar context1: { [n: number]: { a: string; b: number; }; } = [{ a: '', b: 0, c: '' }, { a: \"\", b: 3, c: 0 }];\nvar context2 = [{ a: '', b: 0, c: '' }, { a: \"\", b: 3, c: 0 }];\n\nclass Base { private p; }\nclass Derived1 extends Base { private m };\nclass Derived2 extends Base { private n };\nvar context3: Base[] = [new Derived1(), new Derived2()];\n\nvar context4: Base[] = [new Derived1(), new Derived1()];",
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
                            "text": "arr1",
                            "rawText": "arr1",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 8
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 98822,
                                        "elementList": {
                                            "kind": 65605,
                                            "elements": [],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 12
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 13
                                    },
                                    {
                                        "kind": 98822,
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
                                                    "start": 16,
                                                    "end": 17
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 18
                                    },
                                    {
                                        "kind": 98822,
                                        "elementList": {
                                            "kind": 65605,
                                            "elements": [
                                                {
                                                    "kind": 4261583,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 33554432,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 23
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 24
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 25
                        },
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 25
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 25
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 26
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
                            "text": "arr2",
                            "rawText": "arr2",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 31,
                            "end": 36
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 98822,
                                        "elementList": {
                                            "kind": 65605,
                                            "elements": [
                                                {
                                                    "kind": 4260512,
                                                    "text": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 45
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 45
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 46
                                    },
                                    {
                                        "kind": 98822,
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
                                                    "start": 49,
                                                    "end": 50
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 49,
                                            "end": 50
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 47,
                                        "end": 51
                                    },
                                    {
                                        "kind": 98822,
                                        "elementList": {
                                            "kind": 65605,
                                            "elements": [
                                                {
                                                    "kind": 4261583,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 33554432,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 54,
                                                    "end": 56
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 54,
                                            "end": 56
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 52,
                                        "end": 57
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 57
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 58
                        },
                        "flags": 31,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 58
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 31,
                "end": 58
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 26,
            "end": 59
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
                            "text": "stringArrArr",
                            "rawText": "stringArrArr",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 64,
                            "end": 77
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 98822,
                                        "elementList": {
                                            "kind": 65605,
                                            "elements": [
                                                {
                                                    "kind": 4261583,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 33554432,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 82,
                                                    "end": 84
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 82,
                                            "end": 84
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 81,
                                        "end": 85
                                    },
                                    {
                                        "kind": 98822,
                                        "elementList": {
                                            "kind": 65605,
                                            "elements": [
                                                {
                                                    "kind": 4261583,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 88,
                                                    "end": 90
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 88,
                                            "end": 90
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 86,
                                        "end": 91
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 81,
                                "end": 91
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 79,
                            "end": 92
                        },
                        "flags": 64,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 92
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 64,
                "end": 92
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 59,
            "end": 93
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
                            "text": "stringArr",
                            "rawText": "stringArr",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 98,
                            "end": 108
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 4261583,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 33554432,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 112,
                                        "end": 114
                                    },
                                    {
                                        "kind": 4261583,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 115,
                                        "end": 118
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 112,
                                "end": 118
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 110,
                            "end": 119
                        },
                        "flags": 98,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 119
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 98,
                "end": 119
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 93,
            "end": 120
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
                            "text": "numberArr",
                            "rawText": "numberArr",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 125,
                            "end": 135
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 139,
                                        "end": 140
                                    },
                                    {
                                        "kind": 4261540,
                                        "text": 0,
                                        "rawText": "0.0",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 141,
                                        "end": 145
                                    },
                                    {
                                        "kind": 4261540,
                                        "text": 0,
                                        "rawText": "0x00",
                                        "flags": 512,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 146,
                                        "end": 151
                                    },
                                    {
                                        "kind": 4261540,
                                        "text": 10,
                                        "rawText": "1e1",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 152,
                                        "end": 156
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 139,
                                "end": 156
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 137,
                            "end": 157
                        },
                        "flags": 125,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 157
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 125,
                "end": 157
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 120,
            "end": 158
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
                            "text": "boolArr",
                            "rawText": "boolArr",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 163,
                            "end": 171
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 4260391,
                                        "text": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 175,
                                        "end": 180
                                    },
                                    {
                                        "kind": 4260391,
                                        "text": true,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 181,
                                        "end": 186
                                    },
                                    {
                                        "kind": 4260391,
                                        "text": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 187,
                                        "end": 193
                                    },
                                    {
                                        "kind": 4260391,
                                        "text": true,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 194,
                                        "end": 199
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 175,
                                "end": 199
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 173,
                            "end": 200
                        },
                        "flags": 163,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 200
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 163,
                "end": 200
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 158,
            "end": 201
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C",
                "rawText": "C",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 208,
                "end": 210
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "p",
                            "rawText": "p",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 220,
                            "end": 222
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194485,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 212,
                            "end": 220
                        },
                        "isStatic": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 212,
                        "end": 223
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 212,
                "end": 225
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 201,
            "end": 225
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
                            "text": "classArr",
                            "rawText": "classArr",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 229,
                            "end": 238
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 66204,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "C",
                                            "rawText": "C",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 245,
                                            "end": 247
                                        },
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 3,
                                            "elements": [],
                                            "trailingComma": false,
                                            "transformFlags": 0,
                                            "flags": 0,
                                            "intersects": false,
                                            "start": 248,
                                            "end": 248
                                        },
                                        "flags": 242,
                                        "intersects": false,
                                        "transformFlags": 32,
                                        "start": 0,
                                        "end": 249
                                    },
                                    {
                                        "kind": 66204,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "C",
                                            "rawText": "C",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 254,
                                            "end": 256
                                        },
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 3,
                                            "elements": [],
                                            "trailingComma": false,
                                            "transformFlags": 0,
                                            "flags": 0,
                                            "intersects": false,
                                            "start": 257,
                                            "end": 257
                                        },
                                        "flags": 250,
                                        "intersects": false,
                                        "transformFlags": 32,
                                        "start": 0,
                                        "end": 258
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 242,
                                "end": 258
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 240,
                            "end": 259
                        },
                        "flags": 229,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 259
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 229,
                "end": 259
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 225,
            "end": 260
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
                            "text": "classTypeArray",
                            "rawText": "classTypeArray",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 265,
                            "end": 280
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 196712,
                                        "text": "C",
                                        "rawText": "C",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 284,
                                        "end": 285
                                    },
                                    {
                                        "kind": 196712,
                                        "text": "C",
                                        "rawText": "C",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 286,
                                        "end": 288
                                    },
                                    {
                                        "kind": 196712,
                                        "text": "C",
                                        "rawText": "C",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 289,
                                        "end": 291
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 284,
                                "end": 291
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 282,
                            "end": 292
                        },
                        "flags": 265,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 292
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 265,
                "end": 292
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 260,
            "end": 293
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
                            "text": "classTypeArray",
                            "rawText": "classTypeArray",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 297,
                            "end": 312
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Array",
                                "rawText": "Array",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 313,
                                "end": 319
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 8427,
                                        "exprName": {
                                            "kind": 196711,
                                            "text": "C",
                                            "rawText": "C",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 326,
                                            "end": 328
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 320,
                                        "end": 328
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 320,
                                "end": 328
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 313,
                            "end": 330
                        },
                        "initializer": null,
                        "flags": 297,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 329
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 297,
                "end": 329
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 293,
            "end": 330
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
                            "text": "context1",
                            "rawText": "context1",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 370,
                            "end": 379
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 73844,
                                        "accessModifier": null,
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
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 384,
                                                        "end": 385
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 386,
                                                        "end": 393
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 384,
                                                    "end": 393
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 384,
                                            "end": 393
                                        },
                                        "returnType": {
                                            "kind": 536879334,
                                            "objectTypeMembers": {
                                                "kind": 536871081,
                                                "members": [
                                                    {
                                                        "kind": 8380,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 397,
                                                            "end": 399
                                                        },
                                                        "isOptional": false,
                                                        "accessModifier": null,
                                                        "type": {
                                                            "kind": 4202702,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 400,
                                                            "end": 407
                                                        },
                                                        "isStatic": false,
                                                        "isReadOnly": false,
                                                        "initializer": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 397,
                                                        "end": 408
                                                    },
                                                    {
                                                        "kind": 8380,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 408,
                                                            "end": 410
                                                        },
                                                        "isOptional": false,
                                                        "accessModifier": null,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 411,
                                                            "end": 418
                                                        },
                                                        "isStatic": false,
                                                        "isReadOnly": false,
                                                        "initializer": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 408,
                                                        "end": 419
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 397,
                                                "end": 421
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 395,
                                            "end": 421
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 384,
                                        "end": 422
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 382,
                                "end": 424
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 380,
                            "end": 424
                        },
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 98984,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 429,
                                                        "end": 431
                                                    },
                                                    "right": {
                                                        "kind": 4261583,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 33554432,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 432,
                                                        "end": 435
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 429,
                                                    "end": 435
                                                },
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 436,
                                                        "end": 438
                                                    },
                                                    "right": {
                                                        "kind": 4261540,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 439,
                                                        "end": 441
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 436,
                                                    "end": 441
                                                },
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 442,
                                                        "end": 444
                                                    },
                                                    "right": {
                                                        "kind": 4261583,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 33554432,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 445,
                                                        "end": 448
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 442,
                                                    "end": 448
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 429,
                                            "end": 448
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 428,
                                        "end": 450
                                    },
                                    {
                                        "kind": 98984,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 453,
                                                        "end": 455
                                                    },
                                                    "right": {
                                                        "kind": 4261583,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 456,
                                                        "end": 459
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 453,
                                                    "end": 459
                                                },
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 460,
                                                        "end": 462
                                                    },
                                                    "right": {
                                                        "kind": 4261540,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 463,
                                                        "end": 465
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 460,
                                                    "end": 465
                                                },
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 466,
                                                        "end": 468
                                                    },
                                                    "right": {
                                                        "kind": 4261540,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 469,
                                                        "end": 471
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 466,
                                                    "end": 471
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 453,
                                            "end": 471
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 451,
                                        "end": 473
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 428,
                                "end": 473
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 426,
                            "end": 474
                        },
                        "flags": 370,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 474
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 370,
                "end": 474
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 330,
            "end": 475
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
                            "text": "context2",
                            "rawText": "context2",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 479,
                            "end": 488
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 98984,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 493,
                                                        "end": 495
                                                    },
                                                    "right": {
                                                        "kind": 4261583,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 33554432,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 496,
                                                        "end": 499
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 493,
                                                    "end": 499
                                                },
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 500,
                                                        "end": 502
                                                    },
                                                    "right": {
                                                        "kind": 4261540,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 503,
                                                        "end": 505
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 500,
                                                    "end": 505
                                                },
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 506,
                                                        "end": 508
                                                    },
                                                    "right": {
                                                        "kind": 4261583,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 33554432,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 509,
                                                        "end": 512
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 506,
                                                    "end": 512
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 493,
                                            "end": 512
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 492,
                                        "end": 514
                                    },
                                    {
                                        "kind": 98984,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 517,
                                                        "end": 519
                                                    },
                                                    "right": {
                                                        "kind": 4261583,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 520,
                                                        "end": 523
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 517,
                                                    "end": 523
                                                },
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 524,
                                                        "end": 526
                                                    },
                                                    "right": {
                                                        "kind": 4261540,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 527,
                                                        "end": 529
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 524,
                                                    "end": 529
                                                },
                                                {
                                                    "kind": 65721,
                                                    "left": {
                                                        "kind": 196711,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 530,
                                                        "end": 532
                                                    },
                                                    "right": {
                                                        "kind": 4261540,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 533,
                                                        "end": 535
                                                    },
                                                    "accessModifier": null,
                                                    "decorators": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 530,
                                                    "end": 535
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 517,
                                            "end": 535
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 515,
                                        "end": 537
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 492,
                                "end": 537
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 490,
                            "end": 538
                        },
                        "flags": 479,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 538
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 479,
                "end": 538
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 475,
            "end": 539
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Base",
                "rawText": "Base",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 546,
                "end": 551
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "p",
                            "rawText": "p",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 561,
                            "end": 563
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194485,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 553,
                            "end": 561
                        },
                        "isStatic": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 553,
                        "end": 564
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 553,
                "end": 566
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 539,
            "end": 566
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Derived1",
                "rawText": "Derived1",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 572,
                "end": 581
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "Base",
                    "rawText": "Base",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 589,
                    "end": 594
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 589,
                "end": 594
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "m",
                            "rawText": "m",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 604,
                            "end": 606
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194485,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 596,
                            "end": 604
                        },
                        "isStatic": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 596,
                        "end": 606
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 596,
                "end": 608
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 566,
            "end": 608
        },
        {
            "kind": 6291526,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 608,
            "end": 609
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Derived2",
                "rawText": "Derived2",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 615,
                "end": 624
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "Base",
                    "rawText": "Base",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 632,
                    "end": 637
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 632,
                "end": 637
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "n",
                            "rawText": "n",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 647,
                            "end": 649
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194485,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 639,
                            "end": 647
                        },
                        "isStatic": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 639,
                        "end": 649
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 639,
                "end": 651
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 609,
            "end": 651
        },
        {
            "kind": 6291526,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 651,
            "end": 652
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
                            "text": "context3",
                            "rawText": "context3",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 656,
                            "end": 665
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Base",
                                    "rawText": "Base",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 666,
                                    "end": 671
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 666,
                                "end": 672
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 666,
                            "end": 675
                        },
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 66204,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "Derived1",
                                            "rawText": "Derived1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 680,
                                            "end": 689
                                        },
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 3,
                                            "elements": [],
                                            "trailingComma": false,
                                            "transformFlags": 0,
                                            "flags": 0,
                                            "intersects": false,
                                            "start": 690,
                                            "end": 690
                                        },
                                        "flags": 677,
                                        "intersects": false,
                                        "transformFlags": 32,
                                        "start": 0,
                                        "end": 691
                                    },
                                    {
                                        "kind": 66204,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "Derived2",
                                            "rawText": "Derived2",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 696,
                                            "end": 705
                                        },
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 3,
                                            "elements": [],
                                            "trailingComma": false,
                                            "transformFlags": 0,
                                            "flags": 0,
                                            "intersects": false,
                                            "start": 706,
                                            "end": 706
                                        },
                                        "flags": 692,
                                        "intersects": false,
                                        "transformFlags": 32,
                                        "start": 0,
                                        "end": 707
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 677,
                                "end": 707
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 675,
                            "end": 708
                        },
                        "flags": 656,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 708
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 656,
                "end": 708
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 652,
            "end": 709
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
                            "text": "context4",
                            "rawText": "context4",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 714,
                            "end": 723
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Base",
                                    "rawText": "Base",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 724,
                                    "end": 729
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 724,
                                "end": 730
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 724,
                            "end": 733
                        },
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 66204,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "Derived1",
                                            "rawText": "Derived1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 738,
                                            "end": 747
                                        },
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 3,
                                            "elements": [],
                                            "trailingComma": false,
                                            "transformFlags": 0,
                                            "flags": 0,
                                            "intersects": false,
                                            "start": 748,
                                            "end": 748
                                        },
                                        "flags": 735,
                                        "intersects": false,
                                        "transformFlags": 32,
                                        "start": 0,
                                        "end": 749
                                    },
                                    {
                                        "kind": 66204,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "Derived1",
                                            "rawText": "Derived1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 754,
                                            "end": 763
                                        },
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 3,
                                            "elements": [],
                                            "trailingComma": false,
                                            "transformFlags": 0,
                                            "flags": 0,
                                            "intersects": false,
                                            "start": 764,
                                            "end": 764
                                        },
                                        "flags": 750,
                                        "intersects": false,
                                        "transformFlags": 32,
                                        "start": 0,
                                        "end": 765
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 735,
                                "end": 765
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 733,
                            "end": 766
                        },
                        "flags": 714,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 766
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 714,
                "end": 766
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 709,
            "end": 767
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 767
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

