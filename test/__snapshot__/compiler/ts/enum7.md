# Kataw parser test case

## Input

`````js
enum ErrorRecoverySet {  StmtStart = ExprStart | SColon | Var | Stmt | While | TypeScriptS, Postfix = Dot | LParen | LBrack, }

const enum X {
  None = 0,
  A = 1 << 0,
  B = 1 << 1,
  C = 1 << 2,
  D = A | B,
  E = C | string,
  F = D | E,
  G = D | C | A,
}

declare enum E {
 a = 1e3, // ok
 b = 1e25, // ok
 c = 1e-3, // error
 d = 1e-9, // error
 e = 1e0, // ok
 f = 1e+25 // ok
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "enum ErrorRecoverySet {  StmtStart = ExprStart | SColon | Var | Stmt | While | TypeScriptS, Postfix = Dot | LParen | LBrack, }\n\nconst enum X {\n  None = 0,\n  A = 1 << 0,\n  B = 1 << 1,\n  C = 1 << 2,\n  D = A | B,\n  E = C | string,\n  F = D | E,\n  G = D | C | A,\n}\n\ndeclare enum E {\n a = 1e3, // ok\n b = 1e25, // ok\n c = 1e-3, // error\n d = 1e-9, // error\n e = 1e0, // ok\n f = 1e+25 // ok\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 71,
                "name": {
                    "kind": 196712,
                    "text": "ErrorRecoverySet",
                    "rawText": "ErrorRecoverySet",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 21
                },
                "members": {
                    "kind": 73,
                    "enumMembersList": [
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "StmtStart",
                                "rawText": "StmtStart",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 23,
                                "end": 34
                            },
                            "initializer": {
                                "kind": 65563,
                                "left": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 65563,
                                        "left": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 65563,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "ExprStart",
                                                    "rawText": "ExprStart",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 36,
                                                    "end": 46
                                                },
                                                "operator": "|",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "SColon",
                                                    "rawText": "SColon",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 48,
                                                    "end": 55
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 36,
                                                "end": 55
                                            },
                                            "operator": "|",
                                            "right": {
                                                "kind": 196712,
                                                "text": "Var",
                                                "rawText": "Var",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 57,
                                                "end": 61
                                            },
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 36,
                                            "end": 61
                                        },
                                        "operator": "|",
                                        "right": {
                                            "kind": 196712,
                                            "text": "Stmt",
                                            "rawText": "Stmt",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 63,
                                            "end": 68
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 36,
                                        "end": 68
                                    },
                                    "operator": "|",
                                    "right": {
                                        "kind": 196712,
                                        "text": "While",
                                        "rawText": "While",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 70,
                                        "end": 76
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 36,
                                    "end": 76
                                },
                                "operator": "|",
                                "right": {
                                    "kind": 196712,
                                    "text": "TypeScriptS",
                                    "rawText": "TypeScriptS",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 78,
                                    "end": 90
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 36,
                                "end": 90
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 23,
                            "end": 90
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "Postfix",
                                "rawText": "Postfix",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 91,
                                "end": 99
                            },
                            "initializer": {
                                "kind": 65563,
                                "left": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 196712,
                                        "text": "Dot",
                                        "rawText": "Dot",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 101,
                                        "end": 105
                                    },
                                    "operator": "|",
                                    "right": {
                                        "kind": 196712,
                                        "text": "LParen",
                                        "rawText": "LParen",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 107,
                                        "end": 114
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 101,
                                    "end": 114
                                },
                                "operator": "|",
                                "right": {
                                    "kind": 196712,
                                    "text": "LBrack",
                                    "rawText": "LBrack",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 116,
                                    "end": 123
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 101,
                                "end": 123
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 91,
                            "end": 123
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 23,
                    "end": 124
                },
                "isConst": false,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 126
            },
            {
                "kind": 71,
                "name": {
                    "kind": 196712,
                    "text": "X",
                    "rawText": "X",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 138,
                    "end": 140
                },
                "members": {
                    "kind": 73,
                    "enumMembersList": [
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "None",
                                "rawText": "None",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 142,
                                "end": 149
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 0,
                                "rawText": "0",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 151,
                                "end": 153
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 142,
                            "end": 153
                        },
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
                                "start": 154,
                                "end": 158
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
                                    "start": 160,
                                    "end": 162
                                },
                                "operator": "<<",
                                "right": {
                                    "kind": 4261540,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 165,
                                    "end": 167
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 160,
                                "end": 167
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 154,
                            "end": 167
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
                                "start": 168,
                                "end": 172
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
                                    "start": 174,
                                    "end": 176
                                },
                                "operator": "<<",
                                "right": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 179,
                                    "end": 181
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 174,
                                "end": 181
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 168,
                            "end": 181
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
                                "start": 182,
                                "end": 186
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
                                    "start": 188,
                                    "end": 190
                                },
                                "operator": "<<",
                                "right": {
                                    "kind": 4261540,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 193,
                                    "end": 195
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 188,
                                "end": 195
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 182,
                            "end": 195
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
                                "start": 196,
                                "end": 200
                            },
                            "initializer": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 202,
                                    "end": 204
                                },
                                "operator": "|",
                                "right": {
                                    "kind": 196712,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 206,
                                    "end": 208
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 202,
                                "end": 208
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 196,
                            "end": 208
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
                                "start": 209,
                                "end": 213
                            },
                            "initializer": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 215,
                                    "end": 217
                                },
                                "operator": "|",
                                "right": {
                                    "kind": 196712,
                                    "text": "string",
                                    "rawText": "string",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 219,
                                    "end": 226
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 215,
                                "end": 226
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 209,
                            "end": 226
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
                                "start": 227,
                                "end": 231
                            },
                            "initializer": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "D",
                                    "rawText": "D",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 233,
                                    "end": 235
                                },
                                "operator": "|",
                                "right": {
                                    "kind": 196712,
                                    "text": "E",
                                    "rawText": "E",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 237,
                                    "end": 239
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 233,
                                "end": 239
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 227,
                            "end": 239
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "G",
                                "rawText": "G",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 240,
                                "end": 244
                            },
                            "initializer": {
                                "kind": 65563,
                                "left": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 196712,
                                        "text": "D",
                                        "rawText": "D",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 246,
                                        "end": 248
                                    },
                                    "operator": "|",
                                    "right": {
                                        "kind": 196712,
                                        "text": "C",
                                        "rawText": "C",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 250,
                                        "end": 252
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 246,
                                    "end": 252
                                },
                                "operator": "|",
                                "right": {
                                    "kind": 196712,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 254,
                                    "end": 256
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 246,
                                "end": 256
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 240,
                            "end": 256
                        }
                    ],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 142,
                    "end": 257
                },
                "isConst": true,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 126,
                "end": 259
            },
            {
                "kind": 71,
                "name": {
                    "kind": 196712,
                    "text": "E",
                    "rawText": "E",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 273,
                    "end": 275
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
                                "start": 277,
                                "end": 280
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 1000,
                                "rawText": "1e3",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 282,
                                "end": 286
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 277,
                            "end": 286
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
                                "start": 287,
                                "end": 296
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 1e+25,
                                "rawText": "1e25",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 298,
                                "end": 303
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 287,
                            "end": 303
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
                                "start": 304,
                                "end": 313
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 0.001,
                                "rawText": "1e-3",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 315,
                                "end": 320
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 304,
                            "end": 320
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
                                "start": 321,
                                "end": 333
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 1e-9,
                                "rawText": "1e-9",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 335,
                                "end": 340
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 321,
                            "end": 340
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
                                "start": 341,
                                "end": 353
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1e0",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 355,
                                "end": 359
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 341,
                            "end": 359
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "f",
                                "rawText": "f",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 360,
                                "end": 369
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 1e+25,
                                "rawText": "1e+25",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 371,
                                "end": 377
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 360,
                            "end": 377
                        }
                    ],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 277,
                    "end": 377
                },
                "isConst": false,
                "flags": 201392128,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 268,
                "end": 385
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 385
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
    "end": 385
}
```

### Printed


```javascript

enum ErrorRecoverySet {
    StmtStart = ExprStart | SColon | Var | Stmt | While | TypeScriptS,
    Postfix = Dot | LParen | LBrack
}

const enum X {
    None = 0,
    A = 1 << 0,
    B = 1 << 1,
    C = 1 << 2,
    D = A | B,
    E = C | string,
    F = D | E,
    G = D | C | A
}

declare enum E {
    a = 1e3,
    b = 1e25,
    c = 1e-3,
    d = 1e-9,
    e = 1e0,
    f = 1e+25
}

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

