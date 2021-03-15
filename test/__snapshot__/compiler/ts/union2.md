# Kataw parser test case

## Input

`````js
type UploadState<E, EM, D>
  // The upload hasnt begun yet
  = {type: "Not_begun"}
  // The upload timed out
  | {type: "Timed_out"}
  // Failed somewhere on the line
  | {type: "Failed", error: E, errorMsg: EM}
  // Uploading to aws3 and CreatePostMutation succeeded
  | {type: "Success", data: D};

type UploadState2<E, EM, D>
  // The upload hasnt begun yet
  = A
  // The upload timed out
  | B
  // Failed somewhere on the line
  | C
  // Uploading to aws3 and CreatePostMutation succeeded
  | D;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "type UploadState<E, EM, D>\n  // The upload hasnt begun yet\n  = {type: \"Not_begun\"}\n  // The upload timed out\n  | {type: \"Timed_out\"}\n  // Failed somewhere on the line\n  | {type: \"Failed\", error: E, errorMsg: EM}\n  // Uploading to aws3 and CreatePostMutation succeeded\n  | {type: \"Success\", data: D};\n\ntype UploadState2<E, EM, D>\n  // The upload hasnt begun yet\n  = A\n  // The upload timed out\n  | B\n  // Failed somewhere on the line\n  | C\n  // Uploading to aws3 and CreatePostMutation succeeded\n  | D;",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "UploadState",
                "rawText": "UploadState",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 16
            },
            "type": {
                "kind": 8432,
                "types": [
                    {
                        "kind": 536879334,
                        "objectTypeMembers": {
                            "kind": 536871081,
                            "members": [
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "type",
                                        "rawText": "type",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 64,
                                        "end": 68
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 8400,
                                        "text": "Not_begun",
                                        "rawText": "Not_begun",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 69,
                                        "end": 81
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 64,
                                    "end": 81
                                }
                            ],
                            "multiline": false,
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 64,
                            "end": 82
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 62,
                        "end": 82
                    },
                    {
                        "kind": 536879334,
                        "objectTypeMembers": {
                            "kind": 536871081,
                            "members": [
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "type",
                                        "rawText": "type",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 114,
                                        "end": 118
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 8400,
                                        "text": "Timed_out",
                                        "rawText": "Timed_out",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 119,
                                        "end": 131
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 114,
                                    "end": 131
                                }
                            ],
                            "multiline": false,
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 114,
                            "end": 132
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 112,
                        "end": 132
                    },
                    {
                        "kind": 536879334,
                        "objectTypeMembers": {
                            "kind": 536871081,
                            "members": [
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "type",
                                        "rawText": "type",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 172,
                                        "end": 176
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 8400,
                                        "text": "Failed",
                                        "rawText": "Failed",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 177,
                                        "end": 186
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 172,
                                    "end": 187
                                },
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "error",
                                        "rawText": "error",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 187,
                                        "end": 193
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "E",
                                            "rawText": "E",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 194,
                                            "end": 196
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 194,
                                        "end": 197
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 187,
                                    "end": 197
                                },
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "errorMsg",
                                        "rawText": "errorMsg",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 197,
                                        "end": 206
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "EM",
                                            "rawText": "EM",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 207,
                                            "end": 210
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 207,
                                        "end": 211
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 197,
                                    "end": 210
                                }
                            ],
                            "multiline": false,
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 172,
                            "end": 211
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 170,
                        "end": 211
                    },
                    {
                        "kind": 536879334,
                        "objectTypeMembers": {
                            "kind": 536871081,
                            "members": [
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "type",
                                        "rawText": "type",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 273,
                                        "end": 277
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 8400,
                                        "text": "Success",
                                        "rawText": "Success",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 278,
                                        "end": 288
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 273,
                                    "end": 289
                                },
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "data",
                                        "rawText": "data",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 289,
                                        "end": 294
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "D",
                                            "rawText": "D",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 295,
                                            "end": 297
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 295,
                                        "end": 298
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 289,
                                    "end": 297
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 273,
                            "end": 298
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 271,
                        "end": 298
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 82,
                "end": 298
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "E",
                            "rawText": "E",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 18
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 17,
                        "end": 18
                    },
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "EM",
                            "rawText": "EM",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 22
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 19,
                        "end": 22
                    },
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "D",
                            "rawText": "D",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 25
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 23,
                        "end": 25
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 17,
                "end": 25
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 299
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "UploadState2",
                "rawText": "UploadState2",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 305,
                "end": 318
            },
            "type": {
                "kind": 8432,
                "types": [
                    {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "A",
                            "rawText": "A",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 364,
                            "end": 366
                        },
                        "typeArguments": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 364,
                        "end": 396
                    },
                    {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "B",
                            "rawText": "B",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 396,
                            "end": 398
                        },
                        "typeArguments": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 396,
                        "end": 436
                    },
                    {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "C",
                            "rawText": "C",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 436,
                            "end": 438
                        },
                        "typeArguments": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 436,
                        "end": 498
                    },
                    {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "D",
                            "rawText": "D",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 498,
                            "end": 500
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 498,
                        "end": 501
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 366,
                "end": 500
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "E",
                            "rawText": "E",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 319,
                            "end": 320
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 319,
                        "end": 320
                    },
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "EM",
                            "rawText": "EM",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 321,
                            "end": 324
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 321,
                        "end": 324
                    },
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "D",
                            "rawText": "D",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 325,
                            "end": 327
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 325,
                        "end": 327
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 319,
                "end": 327
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 299,
            "end": 501
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
    "end": 501
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

