# Kataw parser test case

## Input

`````js
interface myInt {
    voidFn(): void;
}
var myVar: myInt;
var strArray: string[] = [myVar.voidFn()];


var myArray: number[][][];
myArray = [[1, 2]];

function isEmpty(l: { length: number }) {
    return l.length === 0;
}

isEmpty([]);
isEmpty(new Array(3));
isEmpty(new Array<string>(3));
isEmpty(['a']);

var myVar;
var strArray = [myVar.voidFn()];
var myArray;
myArray = [[1, 2]];
function isEmpty(l) {
    return l.length === 0;
}
isEmpty([]);
isEmpty(new Array(3));
isEmpty(new Array(3));
isEmpty(['a']);
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface myInt {\n    voidFn(): void;\n}\nvar myVar: myInt;\nvar strArray: string[] = [myVar.voidFn()];\n\n\nvar myArray: number[][][];\nmyArray = [[1, 2]];\n\nfunction isEmpty(l: { length: number }) {\n    return l.length === 0;\n}\n\nisEmpty([]);\nisEmpty(new Array(3));\nisEmpty(new Array<string>(3));\nisEmpty(['a']);\n\nvar myVar;\nvar strArray = [myVar.voidFn()];\nvar myArray;\nmyArray = [[1, 2]];\nfunction isEmpty(l) {\n    return l.length === 0;\n}\nisEmpty([]);\nisEmpty(new Array(3));\nisEmpty(new Array(3));\nisEmpty(['a']);",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "myInt",
                    "rawText": "myInt",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 15
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 147,
                            "name": {
                                "kind": 196711,
                                "text": "voidFn",
                                "rawText": "voidFn",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 17,
                                "end": 28
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 175,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 29,
                                "end": 29
                            },
                            "returnType": {
                                "kind": 4194550,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 31,
                                "end": 36
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 17,
                            "end": 37
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 17,
                    "end": 37
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 39
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
                                "text": "myVar",
                                "rawText": "myVar",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 43,
                                "end": 49
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "myInt",
                                    "rawText": "myInt",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 50,
                                    "end": 56
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 50,
                                "end": 57
                            },
                            "initializer": null,
                            "flags": 43,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 56
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 43,
                    "end": 56
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 39,
                "end": 57
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
                                "text": "strArray",
                                "rawText": "strArray",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 61,
                                "end": 70
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 7,
                                "elementType": {
                                    "kind": 4194510,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 71,
                                    "end": 78
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 71,
                                "end": 82
                            },
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 66091,
                                            "expression": {
                                                "kind": 74424,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "myVar",
                                                    "rawText": "myVar",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 84,
                                                    "end": 89
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "voidFn",
                                                    "rawText": "voidFn",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 90,
                                                    "end": 96
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 89,
                                                "end": 96
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 0,
                                                "intersects": false,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 98,
                                                "end": 98
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 96,
                                            "end": 98
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 84,
                                    "end": 98
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 82,
                                "end": 99
                            },
                            "flags": 61,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 99
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 61,
                    "end": 99
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 57,
                "end": 100
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
                                "text": "myArray",
                                "rawText": "myArray",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 106,
                                "end": 114
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 7,
                                "elementType": {
                                    "kind": 7,
                                    "elementType": {
                                        "kind": 7,
                                        "elementType": {
                                            "kind": 161,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 115,
                                            "end": 122
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 115,
                                        "end": 125
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 115,
                                    "end": 127
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 115,
                                "end": 129
                            },
                            "initializer": null,
                            "flags": 106,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 128
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 106,
                    "end": 128
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 100,
                "end": 129
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "myArray",
                        "rawText": "myArray",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 129,
                        "end": 137
                    },
                    "operator": "=",
                    "right": {
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
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 142,
                                                "end": 143
                                            },
                                            {
                                                "kind": 4261540,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 144,
                                                "end": 146
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 142,
                                        "end": 146
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 141,
                                    "end": 147
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 141,
                            "end": 147
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 139,
                        "end": 148
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 129,
                    "end": 148
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 129,
                "end": 149
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "isEmpty",
                    "rawText": "isEmpty",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 159,
                    "end": 167
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "l",
                                "rawText": "l",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 168,
                                "end": 169
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 230,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [
                                        {
                                            "kind": 188,
                                            "name": {
                                                "kind": 196711,
                                                "text": "length",
                                                "rawText": "length",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 172,
                                                "end": 179
                                            },
                                            "isOptional": false,
                                            "accessModifier": null,
                                            "type": {
                                                "kind": 161,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 180,
                                                "end": 187
                                            },
                                            "isStatic": false,
                                            "isReadOnly": false,
                                            "initializer": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 172,
                                            "end": 187
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 172,
                                    "end": 189
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 170,
                                "end": 189
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 168,
                            "end": 189
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 168,
                    "end": 190
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 74424,
                                        "member": {
                                            "kind": 196712,
                                            "text": "l",
                                            "rawText": "l",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 203,
                                            "end": 205
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "length",
                                            "rawText": "length",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 206,
                                            "end": 212
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 205,
                                        "end": 212
                                    },
                                    "operator": "===",
                                    "right": {
                                        "kind": 4261540,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 216,
                                        "end": 218
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 203,
                                    "end": 218
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 192,
                                "end": 219
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 192,
                        "end": 219
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 190,
                    "end": 221
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "parent": null,
                "emitNode": null,
                "start": 149,
                "end": 221
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "isEmpty",
                        "rawText": "isEmpty",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 221,
                        "end": 230
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 232,
                                    "end": 232
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 231,
                                "end": 233
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 232,
                        "end": 234
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 230,
                    "end": 234
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 221,
                "end": 235
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "isEmpty",
                        "rawText": "isEmpty",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 235,
                        "end": 243
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 66204,
                                "expression": {
                                    "kind": 196712,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 247,
                                    "end": 253
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 4261540,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 254,
                                            "end": 255
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 254,
                                    "end": 255
                                },
                                "flags": 244,
                                "intersects": false,
                                "transformFlags": 32,
                                "parent": null,
                                "emitNode": null,
                                "start": 0,
                                "end": 256
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 247,
                        "end": 257
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 243,
                    "end": 257
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 235,
                "end": 258
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "isEmpty",
                        "rawText": "isEmpty",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 258,
                        "end": 266
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 66204,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "Array",
                                        "rawText": "Array",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 270,
                                        "end": 276
                                    },
                                    "typeArguments": {
                                        "kind": 227,
                                        "typeArgumentsList": [
                                            {
                                                "kind": 4194510,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 277,
                                                "end": 283
                                            }
                                        ],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 277,
                                        "end": 284
                                    },
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 4261540,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 285,
                                                "end": 286
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 285,
                                        "end": 286
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 276,
                                    "end": 287
                                },
                                "typeArguments": null,
                                "argumentList": null,
                                "flags": 267,
                                "intersects": false,
                                "transformFlags": 32,
                                "parent": null,
                                "emitNode": null,
                                "start": 0,
                                "end": 287
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 270,
                        "end": 288
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 266,
                    "end": 288
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 258,
                "end": 289
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "isEmpty",
                        "rawText": "isEmpty",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 289,
                        "end": 297
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 67279,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 16777216,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 299,
                                            "end": 302
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 299,
                                    "end": 302
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 298,
                                "end": 303
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 299,
                        "end": 304
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 297,
                    "end": 304
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 289,
                "end": 305
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
                                "text": "myVar",
                                "rawText": "myVar",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 310,
                                "end": 316
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 310,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 316
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 310,
                    "end": 316
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 305,
                "end": 317
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
                                "text": "strArray",
                                "rawText": "strArray",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 321,
                                "end": 330
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 66091,
                                            "expression": {
                                                "kind": 74424,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "myVar",
                                                    "rawText": "myVar",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 334,
                                                    "end": 339
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "voidFn",
                                                    "rawText": "voidFn",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 340,
                                                    "end": 346
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 339,
                                                "end": 346
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 0,
                                                "intersects": false,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 348,
                                                "end": 348
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 346,
                                            "end": 348
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 334,
                                    "end": 348
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 332,
                                "end": 349
                            },
                            "flags": 321,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 349
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 321,
                    "end": 349
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 317,
                "end": 350
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
                                "text": "myArray",
                                "rawText": "myArray",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 354,
                                "end": 362
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 354,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 362
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 354,
                    "end": 362
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 350,
                "end": 363
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "myArray",
                        "rawText": "myArray",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 363,
                        "end": 371
                    },
                    "operator": "=",
                    "right": {
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
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 376,
                                                "end": 377
                                            },
                                            {
                                                "kind": 4261540,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 378,
                                                "end": 380
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 376,
                                        "end": 380
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 375,
                                    "end": 381
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 375,
                            "end": 381
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 373,
                        "end": 382
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 363,
                    "end": 382
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 363,
                "end": 383
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "isEmpty",
                    "rawText": "isEmpty",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 392,
                    "end": 400
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "l",
                                "rawText": "l",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 401,
                                "end": 402
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 401,
                            "end": 402
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 401,
                    "end": 403
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 74424,
                                        "member": {
                                            "kind": 196712,
                                            "text": "l",
                                            "rawText": "l",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 416,
                                            "end": 418
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "length",
                                            "rawText": "length",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 419,
                                            "end": 425
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 418,
                                        "end": 425
                                    },
                                    "operator": "===",
                                    "right": {
                                        "kind": 4261540,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 429,
                                        "end": 431
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 416,
                                    "end": 431
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 405,
                                "end": 432
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 405,
                        "end": 432
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 403,
                    "end": 434
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "parent": null,
                "emitNode": null,
                "start": 383,
                "end": 434
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "isEmpty",
                        "rawText": "isEmpty",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 434,
                        "end": 442
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 444,
                                    "end": 444
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 443,
                                "end": 445
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 444,
                        "end": 446
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 442,
                    "end": 446
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 434,
                "end": 447
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "isEmpty",
                        "rawText": "isEmpty",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 447,
                        "end": 455
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 66204,
                                "expression": {
                                    "kind": 196712,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 459,
                                    "end": 465
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 4261540,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 466,
                                            "end": 467
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 466,
                                    "end": 467
                                },
                                "flags": 456,
                                "intersects": false,
                                "transformFlags": 32,
                                "parent": null,
                                "emitNode": null,
                                "start": 0,
                                "end": 468
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 459,
                        "end": 469
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 455,
                    "end": 469
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 447,
                "end": 470
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "isEmpty",
                        "rawText": "isEmpty",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 470,
                        "end": 478
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 66204,
                                "expression": {
                                    "kind": 196712,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 482,
                                    "end": 488
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 4261540,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 489,
                                            "end": 490
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 489,
                                    "end": 490
                                },
                                "flags": 479,
                                "intersects": false,
                                "transformFlags": 32,
                                "parent": null,
                                "emitNode": null,
                                "start": 0,
                                "end": 491
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 482,
                        "end": 492
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 478,
                    "end": 492
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 470,
                "end": 493
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "isEmpty",
                        "rawText": "isEmpty",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 493,
                        "end": 501
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 67279,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 16777216,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 503,
                                            "end": 506
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 503,
                                    "end": 506
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 502,
                                "end": 507
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 503,
                        "end": 508
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 501,
                    "end": 508
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 493,
                "end": 509
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 509
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 509
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

