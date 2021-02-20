# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
type A = {
  // commentA
  [a in A]: string;
}

type B = {
  /* commentB */ [b in B]: string
}

type C = {
  [/* commentC */ c in C]: string
}

type D = {
  [d /* commentD */ in D]: string
}

type E = {
  [e in /* commentE */ E]: string
}

type F = {
  [f in F /* commentF */]: string
}

type G = {
  [g in G] /* commentG */: string
}

type H = { /* commentH */ [h in H]: string }

type I = { [/* commentI */ i in I]: string }

type J = { [j /* commentJ */ in J]: string }

type K = { [k in /* commentK */ K]: string }

type L = { [l in L /* commentL */]: string }

type M = { [m in M] /* commentG */: string }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "type A = {\n  // commentA\n  [a in A]: string;\n}\n\ntype B = {\n  /* commentB */ [b in B]: string\n}\n\ntype C = {\n  [/* commentC */ c in C]: string\n}\n\ntype D = {\n  [d /* commentD */ in D]: string\n}\n\ntype E = {\n  [e in /* commentE */ E]: string\n}\n\ntype F = {\n  [f in F /* commentF */]: string\n}\n\ntype G = {\n  [g in G] /* commentG */: string\n}\n\ntype H = { /* commentH */ [h in H]: string }\n\ntype I = { [/* commentI */ i in I]: string }\n\ntype J = { [j /* commentJ */ in J]: string }\n\ntype K = { [k in /* commentK */ K]: string }\n\ntype L = { [l in L /* commentL */]: string }\n\ntype M = { [m in M] /* commentG */: string }",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 6
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "a",
                            "rawText": "a",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 28,
                            "end": 29
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "A",
                                "rawText": "A",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 32,
                                "end": 34
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 32,
                            "end": 35
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 28,
                        "end": 34
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 36,
                        "end": 43
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 8,
                    "end": 46
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 46
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "B",
                    "rawText": "B",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 52,
                    "end": 54
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "b",
                            "rawText": "b",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 77,
                            "end": 78
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "B",
                                "rawText": "B",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 81,
                                "end": 83
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 81,
                            "end": 84
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 77,
                        "end": 83
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 85,
                        "end": 92
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 56,
                    "end": 94
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 46,
                "end": 94
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "C",
                    "rawText": "C",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 100,
                    "end": 102
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "c",
                            "rawText": "c",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 110,
                            "end": 126
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "C",
                                "rawText": "C",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 129,
                                "end": 131
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 129,
                            "end": 132
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 110,
                        "end": 131
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 133,
                        "end": 140
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 104,
                    "end": 142
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 94,
                "end": 142
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "D",
                    "rawText": "D",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 148,
                    "end": 150
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "d",
                            "rawText": "d",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 158,
                            "end": 159
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "D",
                                "rawText": "D",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 177,
                                "end": 179
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 177,
                            "end": 180
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 158,
                        "end": 179
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 181,
                        "end": 188
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 152,
                    "end": 190
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 142,
                "end": 190
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "E",
                    "rawText": "E",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 196,
                    "end": 198
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "e",
                            "rawText": "e",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 206,
                            "end": 207
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "E",
                                "rawText": "E",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 210,
                                "end": 227
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 210,
                            "end": 228
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 206,
                        "end": 227
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 229,
                        "end": 236
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 200,
                    "end": 238
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 190,
                "end": 238
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "F",
                    "rawText": "F",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 244,
                    "end": 246
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "f",
                            "rawText": "f",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 254,
                            "end": 255
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "F",
                                "rawText": "F",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 258,
                                "end": 260
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 258,
                            "end": 276
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 254,
                        "end": 260
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 277,
                        "end": 284
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 248,
                    "end": 286
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 238,
                "end": 286
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "G",
                    "rawText": "G",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 292,
                    "end": 294
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "g",
                            "rawText": "g",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 302,
                            "end": 303
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "G",
                                "rawText": "G",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 306,
                                "end": 308
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 306,
                            "end": 309
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 302,
                        "end": 308
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 325,
                        "end": 332
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 296,
                    "end": 334
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 286,
                "end": 334
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "H",
                    "rawText": "H",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 340,
                    "end": 342
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "h",
                            "rawText": "h",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 363,
                            "end": 364
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "H",
                                "rawText": "H",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 367,
                                "end": 369
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 367,
                            "end": 370
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 363,
                        "end": 369
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 371,
                        "end": 378
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 344,
                    "end": 380
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 334,
                "end": 380
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "I",
                    "rawText": "I",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 386,
                    "end": 388
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "i",
                            "rawText": "i",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 394,
                            "end": 410
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "I",
                                "rawText": "I",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 413,
                                "end": 415
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 413,
                            "end": 416
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 394,
                        "end": 415
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 417,
                        "end": 424
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 390,
                    "end": 426
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 380,
                "end": 426
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "J",
                    "rawText": "J",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 432,
                    "end": 434
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "j",
                            "rawText": "j",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 440,
                            "end": 441
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "J",
                                "rawText": "J",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 459,
                                "end": 461
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 459,
                            "end": 462
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 440,
                        "end": 461
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 463,
                        "end": 470
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 436,
                    "end": 472
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 426,
                "end": 472
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "K",
                    "rawText": "K",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 478,
                    "end": 480
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "k",
                            "rawText": "k",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 486,
                            "end": 487
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "K",
                                "rawText": "K",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 490,
                                "end": 507
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 490,
                            "end": 508
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 486,
                        "end": 507
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 509,
                        "end": 516
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 482,
                    "end": 518
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 472,
                "end": 518
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "L",
                    "rawText": "L",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 524,
                    "end": 526
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "l",
                            "rawText": "l",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 532,
                            "end": 533
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "L",
                                "rawText": "L",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 536,
                                "end": 538
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 536,
                            "end": 554
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 532,
                        "end": 538
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 555,
                        "end": 562
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 528,
                    "end": 564
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 518,
                "end": 564
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "M",
                    "rawText": "M",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 570,
                    "end": 572
                },
                "type": {
                    "kind": 143,
                    "typeParameter": {
                        "kind": 232,
                        "name": {
                            "kind": 196711,
                            "text": "m",
                            "rawText": "m",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 578,
                            "end": 579
                        },
                        "constraint": {
                            "kind": 236,
                            "typeName": {
                                "kind": 196711,
                                "text": "M",
                                "rawText": "M",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 582,
                                "end": 584
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 582,
                            "end": 585
                        },
                        "defaultType": null,
                        "expression": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 578,
                        "end": 584
                    },
                    "nameType": null,
                    "isReadOnly": false,
                    "plus": false,
                    "minus": false,
                    "isOptional": false,
                    "type": {
                        "kind": 4194510,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 601,
                        "end": 608
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 574,
                    "end": 610
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 564,
                "end": 610
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 610
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 610
}
```

### Printed


```javascript

type A = {
    [a in A]: string;
};

type B = {
    [b in B]: string;
};

type C = {
    [c in C]: string;
};

type D = {
    [d in D]: string;
};

type E = {
    [e in E]: string;
};

type F = {
    [f in F]: string;
};

type G = {
    [g in G]: string;
};

type H = {
    [h in H]: string;
};

type I = {
    [i in I]: string;
};

type J = {
    [j in J]: string;
};

type K = {
    [k in K]: string;
};

type L = {
    [l in L]: string;
};

type M = {
    [m in M]: string;
};

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

