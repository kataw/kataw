# Kataw parser test case

## Input

`````js
class C {
   private x = 1;
}
class D extends C {}
class E {
   private y = 1;
}
function foo(x: "hi", items: string[]): D;
function foo(x: "bye", items: string[]): E;
function foo(x: string, items: string[]): C {
   return null;
}
var a: D = foo("hi", []); // D
var b: E = foo("bye", []); // E
var c = foo("um", []); // error


//function bar(x: "hi", items: string[]): D;
function bar(x: "bye", items: string[]): E;
function bar(x: string, items: string[]): C;
function bar(x: string, items: string[]): C {
   return null;
}

var d: D = bar("hi", []); // D
var e: E = bar("bye", []); // E
var f: C = bar("um", []); // C
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C {\n   private x = 1;\n}\nclass D extends C {}\nclass E {\n   private y = 1;\n}\nfunction foo(x: \"hi\", items: string[]): D;\nfunction foo(x: \"bye\", items: string[]): E;\nfunction foo(x: string, items: string[]): C {\n   return null;\n}\nvar a: D = foo(\"hi\", []); // D\nvar b: E = foo(\"bye\", []); // E\nvar c = foo(\"um\", []); // error\n\n\n//function bar(x: \"hi\", items: string[]): D;\nfunction bar(x: \"bye\", items: string[]): E;\nfunction bar(x: string, items: string[]): C;\nfunction bar(x: string, items: string[]): C {\n   return null;\n}\n\nvar d: D = bar(\"hi\", []); // D\nvar e: E = bar(\"bye\", []); // E\nvar f: C = bar(\"um\", []); // C",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 7
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 22
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 26
                            },
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 9,
                                "end": 20
                            },
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 9,
                            "end": 27
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 29
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 29
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "D",
                    "rawText": "D",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 35,
                    "end": 37
                },
                "typeParameters": null,
                "classHeritage": {
                    "kind": 52,
                    "expression": {
                        "kind": 196712,
                        "text": "C",
                        "rawText": "C",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 47
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 47
                },
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 49,
                    "end": 50
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 29,
                "end": 50
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "E",
                    "rawText": "E",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 56,
                    "end": 58
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 71,
                                "end": 73
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 75,
                                "end": 77
                            },
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 60,
                                "end": 71
                            },
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 60,
                            "end": 78
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 60,
                    "end": 80
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 50,
                "end": 80
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 89,
                    "end": 93
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 94,
                                "end": 95
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8400,
                                "value": "hi",
                                "rawValue": "hi",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 96,
                                "end": 101
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 94,
                            "end": 101
                        },
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "items",
                                "rawText": "items",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 102,
                                "end": 108
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 109,
                                    "end": 116
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 109,
                                "end": 119
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 102,
                            "end": 118
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 94,
                    "end": 119
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "D",
                        "rawText": "D",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 120,
                        "end": 122
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 120,
                    "end": 123
                },
                "contents": null,
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 80,
                "end": 123
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 132,
                    "end": 136
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 137,
                                "end": 138
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8400,
                                "value": "bye",
                                "rawValue": "bye",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 139,
                                "end": 145
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 137,
                            "end": 145
                        },
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "items",
                                "rawText": "items",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 146,
                                "end": 152
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 153,
                                    "end": 160
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 153,
                                "end": 163
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 146,
                            "end": 162
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 137,
                    "end": 163
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "E",
                        "rawText": "E",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 164,
                        "end": 166
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 164,
                    "end": 167
                },
                "contents": null,
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 123,
                "end": 167
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 176,
                    "end": 180
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 181,
                                "end": 182
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 183,
                                "end": 190
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 181,
                            "end": 190
                        },
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "items",
                                "rawText": "items",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 191,
                                "end": 197
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 198,
                                    "end": 205
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 198,
                                "end": 208
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 191,
                            "end": 207
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 181,
                    "end": 208
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "C",
                        "rawText": "C",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 209,
                        "end": 211
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 209,
                    "end": 213
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 4260512,
                                    "text": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 223,
                                    "end": 228
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 213,
                                "end": 229
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 213,
                        "end": 229
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 211,
                    "end": 231
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "start": 167,
                "end": 231
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 235,
                                "end": 237
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "D",
                                    "rawText": "D",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 238,
                                    "end": 240
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 238,
                                "end": 242
                            },
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 196712,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 242,
                                    "end": 246
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 4261583,
                                            "text": "hi",
                                            "rawText": "hi",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 247,
                                            "end": 251
                                        },
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
                                                "start": 254,
                                                "end": 254
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 252,
                                            "end": 255
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 251,
                                    "end": 256
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 246,
                                "end": 256
                            },
                            "flags": 235,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 256
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 235,
                    "end": 256
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 231,
                "end": 257
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
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 266,
                                "end": 268
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "E",
                                    "rawText": "E",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 269,
                                    "end": 271
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 269,
                                "end": 273
                            },
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 196712,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 273,
                                    "end": 277
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 4261583,
                                            "text": "bye",
                                            "rawText": "bye",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 278,
                                            "end": 283
                                        },
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
                                                "start": 286,
                                                "end": 286
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 284,
                                            "end": 287
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 283,
                                    "end": 288
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 277,
                                "end": 288
                            },
                            "flags": 266,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 288
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 266,
                    "end": 288
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 257,
                "end": 289
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
                                "text": "c",
                                "rawText": "c",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 298,
                                "end": 300
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 196712,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 302,
                                    "end": 306
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 4261583,
                                            "text": "um",
                                            "rawText": "um",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 307,
                                            "end": 311
                                        },
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
                                                "start": 314,
                                                "end": 314
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 312,
                                            "end": 315
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 311,
                                    "end": 316
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 306,
                                "end": 316
                            },
                            "flags": 298,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 316
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 298,
                    "end": 316
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 289,
                "end": 317
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 382,
                    "end": 386
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 387,
                                "end": 388
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8400,
                                "value": "bye",
                                "rawValue": "bye",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 389,
                                "end": 395
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 387,
                            "end": 395
                        },
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "items",
                                "rawText": "items",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 396,
                                "end": 402
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 403,
                                    "end": 410
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 403,
                                "end": 413
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 396,
                            "end": 412
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 387,
                    "end": 413
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "E",
                        "rawText": "E",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 414,
                        "end": 416
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 414,
                    "end": 417
                },
                "contents": null,
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 317,
                "end": 417
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 426,
                    "end": 430
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 431,
                                "end": 432
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 433,
                                "end": 440
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 431,
                            "end": 440
                        },
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "items",
                                "rawText": "items",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 441,
                                "end": 447
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 448,
                                    "end": 455
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 448,
                                "end": 458
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 441,
                            "end": 457
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 431,
                    "end": 458
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "C",
                        "rawText": "C",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 459,
                        "end": 461
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 459,
                    "end": 462
                },
                "contents": null,
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 417,
                "end": 462
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 471,
                    "end": 475
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 476,
                                "end": 477
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 478,
                                "end": 485
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 476,
                            "end": 485
                        },
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "items",
                                "rawText": "items",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 486,
                                "end": 492
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 493,
                                    "end": 500
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 493,
                                "end": 503
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 486,
                            "end": 502
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 476,
                    "end": 503
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "C",
                        "rawText": "C",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 504,
                        "end": 506
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 504,
                    "end": 508
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 4260512,
                                    "text": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 518,
                                    "end": 523
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 508,
                                "end": 524
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 508,
                        "end": 524
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 506,
                    "end": 526
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "start": 462,
                "end": 526
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
                                "text": "d",
                                "rawText": "d",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 531,
                                "end": 533
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "D",
                                    "rawText": "D",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 534,
                                    "end": 536
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 534,
                                "end": 538
                            },
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 196712,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 538,
                                    "end": 542
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 4261583,
                                            "text": "hi",
                                            "rawText": "hi",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 543,
                                            "end": 547
                                        },
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
                                                "start": 550,
                                                "end": 550
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 548,
                                            "end": 551
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 547,
                                    "end": 552
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 542,
                                "end": 552
                            },
                            "flags": 531,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 552
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 531,
                    "end": 552
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 526,
                "end": 553
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
                                "text": "e",
                                "rawText": "e",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 562,
                                "end": 564
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "E",
                                    "rawText": "E",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 565,
                                    "end": 567
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 565,
                                "end": 569
                            },
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 196712,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 569,
                                    "end": 573
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 4261583,
                                            "text": "bye",
                                            "rawText": "bye",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 574,
                                            "end": 579
                                        },
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
                                                "start": 582,
                                                "end": 582
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 580,
                                            "end": 583
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 579,
                                    "end": 584
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 573,
                                "end": 584
                            },
                            "flags": 562,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 584
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 562,
                    "end": 584
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 553,
                "end": 585
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
                                "text": "f",
                                "rawText": "f",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 594,
                                "end": 596
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 597,
                                    "end": 599
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 597,
                                "end": 601
                            },
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 196712,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 601,
                                    "end": 605
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 4261583,
                                            "text": "um",
                                            "rawText": "um",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 606,
                                            "end": 610
                                        },
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
                                                "start": 613,
                                                "end": 613
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 611,
                                            "end": 614
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 610,
                                    "end": 615
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 605,
                                "end": 615
                            },
                            "flags": 594,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 615
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 594,
                    "end": 615
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 585,
                "end": 616
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 616
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 621
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

