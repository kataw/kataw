# Kataw parser test case

## Input

`````js
var A = [1,2,3];
var B = [...A];
var C = [1,2,3];
B.sort((a, b) => a - b);
C.sort((a, b) => a - b);

var x: Array<string> = ['1', '2'];
var y: Array<string> = ['3', ...x];
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 9,
                                        "end": 10
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 12
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 9,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 15
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 16
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 16,
                "end": 20
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "B",
                            "rawText": "B",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 26,
                                            "end": 29
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "A",
                                            "rawText": "A",
                                            "flags": 96,
                                            "start": 29,
                                            "end": 30
                                        },
                                        "flags": 32,
                                        "start": 26,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 26,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 24,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 20,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 20,
                "end": 31
            },
            "flags": 16,
            "start": 16,
            "end": 32
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 32,
                "end": 36
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "C",
                            "rawText": "C",
                            "flags": 96,
                            "start": 36,
                            "end": 38
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 42,
                                        "end": 43
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 44,
                                        "end": 45
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "start": 46,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 42,
                                "end": 47
                            },
                            "flags": 32,
                            "start": 40,
                            "end": 48
                        },
                        "flags": 16,
                        "start": 36,
                        "end": 48
                    }
                ],
                "flags": 16,
                "start": 36,
                "end": 48
            },
            "flags": 16,
            "start": 32,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 49,
                        "end": 51
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "sort",
                        "rawText": "sort",
                        "flags": 96,
                        "start": 52,
                        "end": 56
                    },
                    "flags": 536870944,
                    "start": 49,
                    "end": 56
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 63,
                                "end": 66
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 58,
                                    "end": 59
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 60,
                                    "end": 62
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 66,
                                    "end": 68
                                },
                                "operatorToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "start": 68,
                                    "end": 70
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 70,
                                    "end": 72
                                },
                                "flags": 32,
                                "start": 66,
                                "end": 72
                            },
                            "flags": 32,
                            "start": 57,
                            "end": 72
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 57,
                    "end": 72
                },
                "flags": 268435488,
                "start": 49,
                "end": 73
            },
            "flags": 16,
            "start": 49,
            "end": 74
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 74,
                        "end": 76
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "sort",
                        "rawText": "sort",
                        "flags": 96,
                        "start": 77,
                        "end": 81
                    },
                    "flags": 536870944,
                    "start": 74,
                    "end": 81
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 88,
                                "end": 91
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 83,
                                    "end": 84
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 85,
                                    "end": 87
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 91,
                                    "end": 93
                                },
                                "operatorToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "start": 93,
                                    "end": 95
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 95,
                                    "end": 97
                                },
                                "flags": 32,
                                "start": 91,
                                "end": 97
                            },
                            "flags": 32,
                            "start": 82,
                            "end": 97
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 82,
                    "end": 97
                },
                "flags": 268435488,
                "start": 74,
                "end": 98
            },
            "flags": 16,
            "start": 74,
            "end": 99
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 99,
                "end": 104
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 104,
                            "end": 106
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "start": 107,
                                    "end": 113
                                },
                                "typeParameters": {
                                    "kind": 309,
                                    "parameters": [
                                        {
                                            "kind": 310,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 114,
                                                "end": 120
                                            },
                                            "flags": 2097152,
                                            "start": 114,
                                            "end": 120
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 113,
                                    "end": 121
                                },
                                "flags": 2097152,
                                "start": 107,
                                "end": 121
                            },
                            "flags": 2097152,
                            "start": 106,
                            "end": 121
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "1",
                                        "rawText": "'1'",
                                        "flags": 4194400,
                                        "start": 125,
                                        "end": 128
                                    },
                                    {
                                        "kind": 201392131,
                                        "text": "2",
                                        "rawText": "'2'",
                                        "flags": 4194400,
                                        "start": 129,
                                        "end": 133
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4194336,
                                "start": 125,
                                "end": 133
                            },
                            "flags": 32,
                            "start": 123,
                            "end": 134
                        },
                        "flags": 16,
                        "start": 104,
                        "end": 134
                    }
                ],
                "flags": 16,
                "start": 104,
                "end": 134
            },
            "flags": 16,
            "start": 99,
            "end": 135
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 135,
                "end": 139
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 139,
                            "end": 141
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "start": 142,
                                    "end": 148
                                },
                                "typeParameters": {
                                    "kind": 309,
                                    "parameters": [
                                        {
                                            "kind": 310,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 149,
                                                "end": 155
                                            },
                                            "flags": 2097152,
                                            "start": 149,
                                            "end": 155
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 148,
                                    "end": 156
                                },
                                "flags": 2097152,
                                "start": 142,
                                "end": 156
                            },
                            "flags": 2097152,
                            "start": 141,
                            "end": 156
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "3",
                                        "rawText": "'3'",
                                        "flags": 4194400,
                                        "start": 160,
                                        "end": 163
                                    },
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 164,
                                            "end": 168
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 168,
                                            "end": 169
                                        },
                                        "flags": 32,
                                        "start": 164,
                                        "end": 169
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4194336,
                                "start": 160,
                                "end": 169
                            },
                            "flags": 32,
                            "start": 158,
                            "end": 170
                        },
                        "flags": 16,
                        "start": 139,
                        "end": 170
                    }
                ],
                "flags": 16,
                "start": 139,
                "end": 170
            },
            "flags": 16,
            "start": 135,
            "end": 171
        }
    ],
    "isModule": false,
    "source": "var A = [1,2,3];\nvar B = [...A];\nvar C = [1,2,3];\nB.sort((a, b) => a - b);\nC.sort((a, b) => a - b);\n\nvar x: Array<string> = ['1', '2'];\nvar y: Array<string> = ['3', ...x];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 171
}
```

### Printed

```javascript

var A = [1, 2, 3];
var B = [...A];
var C = [1, 2, 3];
B.sort((a, b) =>  a - b);
C.sort((a, b) =>  a - b);
var x = ["'1'", "'2'"];
var y = ["'3'", ...x];
```

### Diagnostics

```javascript
✔ No errors
```

