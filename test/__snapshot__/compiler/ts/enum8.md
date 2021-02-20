# Kataw parser test case

## Input

`````js
enum E11 {
  A = true,
  B = new Date(),
  C = window,
  D = {},
  E = (() => 'foo')(),
}

enum E12 {
  A = '',
  B = new Date(),
  C = window,
  D = {},
  E = 1 + 1,
  F = (() => 'foo')(),
}

enum T1 {
  a = "1",
  b = "1" + "2",
  c = "1" + "2" + "3",
  d = "a" - "a",
  e = "a" + 1
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "enum E11 {\n  A = true,\n  B = new Date(),\n  C = window,\n  D = {},\n  E = (() => 'foo')(),\n}\n\nenum E12 {\n  A = '',\n  B = new Date(),\n  C = window,\n  D = {},\n  E = 1 + 1,\n  F = (() => 'foo')(),\n}\n\nenum T1 {\n  a = \"1\",\n  b = \"1\" + \"2\",\n  c = \"1\" + \"2\" + \"3\",\n  d = \"a\" - \"a\",\n  e = \"a\" + 1\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 71,
                "name": {
                    "kind": 196712,
                    "text": "E11",
                    "rawText": "E11",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 8
                },
                "members": {
                    "kind": 73,
                    "enumMembersList": [
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "A",
                                "rawText": "A",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 10,
                                "end": 14
                            },
                            "initializer": {
                                "kind": 4260391,
                                "text": true,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 16,
                                "end": 21
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 10,
                            "end": 21
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "B",
                                "rawText": "B",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 22,
                                "end": 26
                            },
                            "initializer": {
                                "kind": 66204,
                                "expression": {
                                    "kind": 196712,
                                    "text": "Date",
                                    "rawText": "Date",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 32,
                                    "end": 37
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 65536,
                                    "intersects": false,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 38,
                                    "end": 38
                                },
                                "flags": 28,
                                "intersects": false,
                                "transformFlags": 32,
                                "parent": null,
                                "emitNode": null,
                                "start": 65536,
                                "end": 39
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 22,
                            "end": 39
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "C",
                                "rawText": "C",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 40,
                                "end": 44
                            },
                            "initializer": {
                                "kind": 196712,
                                "text": "window",
                                "rawText": "window",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 46,
                                "end": 53
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 40,
                            "end": 53
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "D",
                                "rawText": "D",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 54,
                                "end": 58
                            },
                            "initializer": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 62,
                                    "end": 62
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 60,
                                "end": 63
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 54,
                            "end": 63
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "E",
                                "rawText": "E",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 64,
                                "end": 68
                            },
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 67592,
                                        "arrowParameters": {
                                            "kind": 65545,
                                            "typeParameters": 1,
                                            "elements": [],
                                            "type": null,
                                            "accessModifier": null,
                                            "trailingComma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 72,
                                            "end": 72
                                        },
                                        "contents": {
                                            "kind": 67279,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 16842752,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 77,
                                            "end": 83
                                        },
                                        "flags": 536936448,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 72,
                                        "end": 83
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 70,
                                    "end": 84
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 65536,
                                    "intersects": false,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 86,
                                    "end": 86
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 84,
                                "end": 86
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 64,
                            "end": 86
                        }
                    ],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 10,
                    "end": 87
                },
                "isConst": false,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 89
            },
            {
                "kind": 71,
                "name": {
                    "kind": 196712,
                    "text": "E12",
                    "rawText": "E12",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 95,
                    "end": 99
                },
                "members": {
                    "kind": 73,
                    "enumMembersList": [
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "A",
                                "rawText": "A",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 101,
                                "end": 105
                            },
                            "initializer": {
                                "kind": 67279,
                                "text": "",
                                "rawText": "",
                                "flags": 16842752,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 107,
                                "end": 110
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 101,
                            "end": 110
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "B",
                                "rawText": "B",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 111,
                                "end": 115
                            },
                            "initializer": {
                                "kind": 66204,
                                "expression": {
                                    "kind": 196712,
                                    "text": "Date",
                                    "rawText": "Date",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 121,
                                    "end": 126
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 65536,
                                    "intersects": false,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 127,
                                    "end": 127
                                },
                                "flags": 117,
                                "intersects": false,
                                "transformFlags": 32,
                                "parent": null,
                                "emitNode": null,
                                "start": 65536,
                                "end": 128
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 111,
                            "end": 128
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "C",
                                "rawText": "C",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 129,
                                "end": 133
                            },
                            "initializer": {
                                "kind": 196712,
                                "text": "window",
                                "rawText": "window",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 135,
                                "end": 142
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 129,
                            "end": 142
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "D",
                                "rawText": "D",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 143,
                                "end": 147
                            },
                            "initializer": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 151,
                                    "end": 151
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 149,
                                "end": 152
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 143,
                            "end": 152
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "E",
                                "rawText": "E",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 153,
                                "end": 157
                            },
                            "initializer": {
                                "kind": 65563,
                                "left": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 159,
                                    "end": 161
                                },
                                "operator": "+",
                                "right": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 163,
                                    "end": 165
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 159,
                                "end": 165
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 153,
                            "end": 165
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "F",
                                "rawText": "F",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 166,
                                "end": 170
                            },
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 67592,
                                        "arrowParameters": {
                                            "kind": 65545,
                                            "typeParameters": 1,
                                            "elements": [],
                                            "type": null,
                                            "accessModifier": null,
                                            "trailingComma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 174,
                                            "end": 174
                                        },
                                        "contents": {
                                            "kind": 67279,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 16842752,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 179,
                                            "end": 185
                                        },
                                        "flags": 536936448,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 174,
                                        "end": 185
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 172,
                                    "end": 186
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 65536,
                                    "intersects": false,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 188,
                                    "end": 188
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 186,
                                "end": 188
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 166,
                            "end": 188
                        }
                    ],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 101,
                    "end": 189
                },
                "isConst": false,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 89,
                "end": 191
            },
            {
                "kind": 71,
                "name": {
                    "kind": 196712,
                    "text": "T1",
                    "rawText": "T1",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 197,
                    "end": 200
                },
                "members": {
                    "kind": 73,
                    "enumMembersList": [
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "a",
                                "rawText": "a",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 202,
                                "end": 206
                            },
                            "initializer": {
                                "kind": 67279,
                                "text": "1",
                                "rawText": "1",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 208,
                                "end": 212
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 202,
                            "end": 212
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "b",
                                "rawText": "b",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 213,
                                "end": 217
                            },
                            "initializer": {
                                "kind": 65563,
                                "left": {
                                    "kind": 67279,
                                    "text": "1",
                                    "rawText": "1",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 219,
                                    "end": 223
                                },
                                "operator": "+",
                                "right": {
                                    "kind": 67279,
                                    "text": "2",
                                    "rawText": "2",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 225,
                                    "end": 229
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 219,
                                "end": 229
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 213,
                            "end": 229
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "c",
                                "rawText": "c",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 230,
                                "end": 234
                            },
                            "initializer": {
                                "kind": 65563,
                                "left": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 67279,
                                        "text": "1",
                                        "rawText": "1",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 236,
                                        "end": 240
                                    },
                                    "operator": "+",
                                    "right": {
                                        "kind": 67279,
                                        "text": "2",
                                        "rawText": "2",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 242,
                                        "end": 246
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 236,
                                    "end": 246
                                },
                                "operator": "+",
                                "right": {
                                    "kind": 67279,
                                    "text": "3",
                                    "rawText": "3",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 248,
                                    "end": 252
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 236,
                                "end": 252
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 230,
                            "end": 252
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "d",
                                "rawText": "d",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 253,
                                "end": 257
                            },
                            "initializer": {
                                "kind": 65563,
                                "left": {
                                    "kind": 67279,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 259,
                                    "end": 263
                                },
                                "operator": "-",
                                "right": {
                                    "kind": 67279,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 265,
                                    "end": 269
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 259,
                                "end": 269
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 253,
                            "end": 269
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "e",
                                "rawText": "e",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 270,
                                "end": 274
                            },
                            "initializer": {
                                "kind": 65563,
                                "left": {
                                    "kind": 67279,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 276,
                                    "end": 280
                                },
                                "operator": "+",
                                "right": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 282,
                                    "end": 284
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 276,
                                "end": 284
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 270,
                            "end": 284
                        }
                    ],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 202,
                    "end": 284
                },
                "isConst": false,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 191,
                "end": 286
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 286
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
    "end": 286
}
```

### Printed


```javascript

enum E11 {
    A = true,
    B = new Date(),
    C = window,
    D = { },
    E = (() => "foo")()
}

enum E12 {
    A = "",
    B = new Date(),
    C = window,
    D = { },
    E = 1 + 1,
    F = (() => "foo")()
}

enum T1 {
    a = "1",
    b = "1" + "2",
    c = "1" + "2" + "3",
    d = "a" - "a",
    e = "a" + 1
}

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

