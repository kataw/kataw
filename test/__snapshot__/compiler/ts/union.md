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
    "kind": 149,
    "source": "type UploadState<E, EM, D>\n  // The upload hasnt begun yet\n  = {type: \"Not_begun\"}\n  // The upload timed out\n  | {type: \"Timed_out\"}\n  // Failed somewhere on the line\n  | {type: \"Failed\", error: E, errorMsg: EM}\n  // Uploading to aws3 and CreatePostMutation succeeded\n  | {type: \"Success\", data: D};\n\ntype UploadState2<E, EM, D>\n  // The upload hasnt begun yet\n  = A\n  // The upload timed out\n  | B\n  // Failed somewhere on the line\n  | C\n  // Uploading to aws3 and CreatePostMutation succeeded\n  | D;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "UploadState",
                    "rawText": "UploadState",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 16
                },
                "type": {
                    "kind": 240,
                    "types": [
                        {
                            "kind": 230,
                            "objectTypeMembers": {
                                "kind": 169,
                                "members": [
                                    {
                                        "kind": 188,
                                        "name": {
                                            "kind": 196711,
                                            "text": "type",
                                            "rawText": "type",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 64,
                                            "end": 68
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 208,
                                            "value": "Not_begun",
                                            "rawValue": "Not_begun",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 69,
                                            "end": 81
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 64,
                                        "end": 81
                                    }
                                ],
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 64,
                                "end": 82
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 62,
                            "end": 82
                        },
                        {
                            "kind": 230,
                            "objectTypeMembers": {
                                "kind": 169,
                                "members": [
                                    {
                                        "kind": 188,
                                        "name": {
                                            "kind": 196711,
                                            "text": "type",
                                            "rawText": "type",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 114,
                                            "end": 118
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 208,
                                            "value": "Timed_out",
                                            "rawValue": "Timed_out",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 119,
                                            "end": 131
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 114,
                                        "end": 131
                                    }
                                ],
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 114,
                                "end": 132
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 112,
                            "end": 132
                        },
                        {
                            "kind": 230,
                            "objectTypeMembers": {
                                "kind": 169,
                                "members": [
                                    {
                                        "kind": 188,
                                        "name": {
                                            "kind": 196711,
                                            "text": "type",
                                            "rawText": "type",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 172,
                                            "end": 176
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 208,
                                            "value": "Failed",
                                            "rawValue": "Failed",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 177,
                                            "end": 186
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 172,
                                        "end": 187
                                    },
                                    {
                                        "kind": 188,
                                        "name": {
                                            "kind": 196711,
                                            "text": "error",
                                            "rawText": "error",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 187,
                                            "end": 193
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
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
                                                "start": 194,
                                                "end": 196
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 194,
                                            "end": 197
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 187,
                                        "end": 197
                                    },
                                    {
                                        "kind": 188,
                                        "name": {
                                            "kind": 196711,
                                            "text": "errorMsg",
                                            "rawText": "errorMsg",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 197,
                                            "end": 206
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 236,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "EM",
                                                "rawText": "EM",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 207,
                                                "end": 210
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 207,
                                            "end": 211
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 197,
                                        "end": 210
                                    }
                                ],
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 172,
                                "end": 211
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 170,
                            "end": 211
                        },
                        {
                            "kind": 230,
                            "objectTypeMembers": {
                                "kind": 169,
                                "members": [
                                    {
                                        "kind": 188,
                                        "name": {
                                            "kind": 196711,
                                            "text": "type",
                                            "rawText": "type",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 273,
                                            "end": 277
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 208,
                                            "value": "Success",
                                            "rawValue": "Success",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 278,
                                            "end": 288
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 273,
                                        "end": 289
                                    },
                                    {
                                        "kind": 188,
                                        "name": {
                                            "kind": 196711,
                                            "text": "data",
                                            "rawText": "data",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 289,
                                            "end": 294
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
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
                                                "start": 295,
                                                "end": 297
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 295,
                                            "end": 298
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 289,
                                        "end": 297
                                    }
                                ],
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 273,
                                "end": 298
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 271,
                            "end": 298
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 82,
                    "end": 298
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "E",
                                "rawText": "E",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 17,
                                "end": 18
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 17,
                            "end": 18
                        },
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "EM",
                                "rawText": "EM",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 19,
                                "end": 22
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 19,
                            "end": 22
                        },
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "D",
                                "rawText": "D",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 23,
                                "end": 25
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 23,
                            "end": 25
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 17,
                    "end": 25
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 299
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "UploadState2",
                    "rawText": "UploadState2",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 305,
                    "end": 318
                },
                "type": {
                    "kind": 240,
                    "types": [
                        {
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
                                "start": 364,
                                "end": 366
                            },
                            "typeArguments": null,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 364,
                            "end": 396
                        },
                        {
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
                                "start": 396,
                                "end": 398
                            },
                            "typeArguments": null,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 396,
                            "end": 436
                        },
                        {
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
                                "start": 436,
                                "end": 438
                            },
                            "typeArguments": null,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 436,
                            "end": 498
                        },
                        {
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
                                "start": 498,
                                "end": 500
                            },
                            "typeArguments": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 498,
                            "end": 501
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 366,
                    "end": 500
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "E",
                                "rawText": "E",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 319,
                                "end": 320
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 319,
                            "end": 320
                        },
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "EM",
                                "rawText": "EM",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 321,
                                "end": 324
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 321,
                            "end": 324
                        },
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "D",
                                "rawText": "D",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 325,
                                "end": 327
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 325,
                            "end": 327
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 319,
                    "end": 327
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 299,
                "end": 501
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 501
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
    "end": 501
}
```

### Printed


```javascript

type UploadState<E, EM, D> = {
    type: "Not_begun";
} | {
    type: "Timed_out";
} | {
    type: "Failed";
    error: E;
    errorMsg: EM;
} | {
    type: "Success";
    data: D;
};

type UploadState2<E, EM, D> = A | B | C | D;

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

