# Kataw parser test case

## Input

`````js
// Expecting properties that don't exist should be an error
var a : { someProp: number } = function () {};

// Expecting properties that do exist should be fine
var b : { apply: Function } = function () {};

// Expecting properties in the functions statics should be fine
var f = function () {};
f.myProp = 123;
var c : { myProp: number } = f;

var a: { (x: number): string } = (x) => x.toString()

// ...and it should notice when the return type is wrong
var b: { (x: number): number } = (x) => "hi"

// ...or if the param type is wrong
var c: { (x: string): string } = (x) => x.toFixed()

// ...or if the arity is wrong
var d: { (): string } = (x) => "hi"

// ...but subtyping rules still apply
var e: { (x: any): void } = () => { } // arity
var f: { (): mixed } = () => "hi" // return type
var g: { (x: Date): void } = (x) => { x * 2 } // param type (date < number)

// A function can be an object
var y : {} = (x) => "hi"
var z : Object = (x) => "hi"
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
                "flags": 81,
                "start": 0,
                "end": 63
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 63,
                            "end": 65
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "someProp",
                                            "rawText": "someProp",
                                            "flags": 96,
                                            "start": 69,
                                            "end": 78
                                        },
                                        "optionalToken": null,
                                        "value": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 79,
                                            "end": 86
                                        },
                                        "flags": 2097152,
                                        "start": 69,
                                        "end": 86
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 67,
                                "end": 88
                            },
                            "flags": 2097152,
                            "start": 65,
                            "end": 88
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 90,
                                "end": 99
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 99,
                                "end": 102
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 104,
                                    "end": 104
                                },
                                "flags": 32,
                                "start": 102,
                                "end": 105
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 32,
                            "start": 90,
                            "end": 105
                        },
                        "flags": 16,
                        "start": 63,
                        "end": 105
                    }
                ],
                "flags": 16,
                "start": 63,
                "end": 105
            },
            "flags": 16,
            "start": 0,
            "end": 106
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 106,
                "end": 164
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 164,
                            "end": 166
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "apply",
                                            "rawText": "apply",
                                            "flags": 96,
                                            "start": 170,
                                            "end": 176
                                        },
                                        "optionalToken": null,
                                        "value": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "Function",
                                                "rawText": "Function",
                                                "flags": 96,
                                                "start": 177,
                                                "end": 186
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 177,
                                            "end": 186
                                        },
                                        "flags": 2097152,
                                        "start": 170,
                                        "end": 186
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 168,
                                "end": 188
                            },
                            "flags": 2097152,
                            "start": 166,
                            "end": 188
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 190,
                                "end": 199
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 199,
                                "end": 202
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 204,
                                    "end": 204
                                },
                                "flags": 32,
                                "start": 202,
                                "end": 205
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 32,
                            "start": 190,
                            "end": 205
                        },
                        "flags": 16,
                        "start": 164,
                        "end": 205
                    }
                ],
                "flags": 16,
                "start": 164,
                "end": 205
            },
            "flags": 16,
            "start": 106,
            "end": 206
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 206,
                "end": 275
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 275,
                            "end": 277
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 279,
                                "end": 288
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 288,
                                "end": 291
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 293,
                                    "end": 293
                                },
                                "flags": 32,
                                "start": 291,
                                "end": 294
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 32,
                            "start": 279,
                            "end": 294
                        },
                        "flags": 16,
                        "start": 275,
                        "end": 294
                    }
                ],
                "flags": 16,
                "start": 275,
                "end": 294
            },
            "flags": 16,
            "start": 206,
            "end": 295
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 295,
                        "end": 297
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "myProp",
                        "rawText": "myProp",
                        "flags": 96,
                        "start": 298,
                        "end": 304
                    },
                    "flags": 536870944,
                    "start": 295,
                    "end": 304
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 304,
                    "end": 306
                },
                "right": {
                    "kind": 201392130,
                    "text": 123,
                    "rawText": "123",
                    "flags": 96,
                    "start": 306,
                    "end": 310
                },
                "flags": 32,
                "start": 295,
                "end": 310
            },
            "flags": 16,
            "start": 295,
            "end": 311
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 311,
                "end": 315
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 315,
                            "end": 317
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "myProp",
                                            "rawText": "myProp",
                                            "flags": 96,
                                            "start": 321,
                                            "end": 328
                                        },
                                        "optionalToken": null,
                                        "value": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 329,
                                            "end": 336
                                        },
                                        "flags": 2097152,
                                        "start": 321,
                                        "end": 336
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 319,
                                "end": 338
                            },
                            "flags": 2097152,
                            "start": 317,
                            "end": 338
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 340,
                            "end": 342
                        },
                        "flags": 16,
                        "start": 315,
                        "end": 342
                    }
                ],
                "flags": 16,
                "start": 315,
                "end": 342
            },
            "flags": 16,
            "start": 311,
            "end": 343
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 343,
                "end": 348
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 348,
                            "end": 350
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 355,
                                                        "end": 356
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 134234345,
                                                        "flags": 2097216,
                                                        "start": 357,
                                                        "end": 364
                                                    },
                                                    "flags": 2097152,
                                                    "start": 355,
                                                    "end": 364
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 355,
                                            "end": 364
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "start": 366,
                                            "end": 373
                                        },
                                        "flags": 2097152,
                                        "start": 353,
                                        "end": 373
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 351,
                                "end": 375
                            },
                            "flags": 2097152,
                            "start": 350,
                            "end": 375
                        },
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 381,
                                "end": 384
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 379,
                                    "end": 380
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 384,
                                        "end": 386
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "toString",
                                        "rawText": "toString",
                                        "flags": 96,
                                        "start": 387,
                                        "end": 395
                                    },
                                    "flags": 536870944,
                                    "start": 384,
                                    "end": 395
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 396,
                                    "end": 396
                                },
                                "flags": 268435488,
                                "start": 384,
                                "end": 397
                            },
                            "flags": 32,
                            "start": 377,
                            "end": 397
                        },
                        "flags": 16,
                        "start": 348,
                        "end": 397
                    }
                ],
                "flags": 16,
                "start": 348,
                "end": 397
            },
            "flags": 16,
            "start": 343,
            "end": 397
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 397,
                "end": 459
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 459,
                            "end": 461
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 466,
                                                        "end": 467
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 134234345,
                                                        "flags": 2097216,
                                                        "start": 468,
                                                        "end": 475
                                                    },
                                                    "flags": 2097152,
                                                    "start": 466,
                                                    "end": 475
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 466,
                                            "end": 475
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 477,
                                            "end": 484
                                        },
                                        "flags": 2097152,
                                        "start": 464,
                                        "end": 484
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 462,
                                "end": 486
                            },
                            "flags": 2097152,
                            "start": 461,
                            "end": 486
                        },
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 492,
                                "end": 495
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 490,
                                    "end": 491
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 201392131,
                                "text": "hi",
                                "rawText": "\"hi\"",
                                "flags": 96,
                                "start": 495,
                                "end": 500
                            },
                            "flags": 32,
                            "start": 488,
                            "end": 500
                        },
                        "flags": 16,
                        "start": 459,
                        "end": 500
                    }
                ],
                "flags": 16,
                "start": 459,
                "end": 500
            },
            "flags": 16,
            "start": 397,
            "end": 500
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 500,
                "end": 541
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 541,
                            "end": 543
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 548,
                                                        "end": 549
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 134234347,
                                                        "flags": 2097216,
                                                        "start": 550,
                                                        "end": 557
                                                    },
                                                    "flags": 2097152,
                                                    "start": 548,
                                                    "end": 557
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 548,
                                            "end": 557
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "start": 559,
                                            "end": 566
                                        },
                                        "flags": 2097152,
                                        "start": 546,
                                        "end": 566
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 544,
                                "end": 568
                            },
                            "flags": 2097152,
                            "start": 543,
                            "end": 568
                        },
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 574,
                                "end": 577
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 572,
                                    "end": 573
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 577,
                                        "end": 579
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "toFixed",
                                        "rawText": "toFixed",
                                        "flags": 96,
                                        "start": 580,
                                        "end": 587
                                    },
                                    "flags": 536870944,
                                    "start": 577,
                                    "end": 587
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 588,
                                    "end": 588
                                },
                                "flags": 268435488,
                                "start": 577,
                                "end": 589
                            },
                            "flags": 32,
                            "start": 570,
                            "end": 589
                        },
                        "flags": 16,
                        "start": 541,
                        "end": 589
                    }
                ],
                "flags": 16,
                "start": 541,
                "end": 589
            },
            "flags": 16,
            "start": 500,
            "end": 589
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 589,
                "end": 625
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 625,
                            "end": 627
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 632,
                                            "end": 632
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "start": 634,
                                            "end": 641
                                        },
                                        "flags": 2097152,
                                        "start": 630,
                                        "end": 641
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 628,
                                "end": 643
                            },
                            "flags": 2097152,
                            "start": 627,
                            "end": 643
                        },
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 649,
                                "end": 652
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 647,
                                    "end": 648
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 201392131,
                                "text": "hi",
                                "rawText": "\"hi\"",
                                "flags": 96,
                                "start": 652,
                                "end": 657
                            },
                            "flags": 32,
                            "start": 645,
                            "end": 657
                        },
                        "flags": 16,
                        "start": 625,
                        "end": 657
                    }
                ],
                "flags": 16,
                "start": 625,
                "end": 657
            },
            "flags": 16,
            "start": 589,
            "end": 657
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 657,
                "end": 700
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "start": 700,
                            "end": 702
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 707,
                                                        "end": 708
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 134234252,
                                                        "flags": 2097216,
                                                        "start": 709,
                                                        "end": 713
                                                    },
                                                    "flags": 2097152,
                                                    "start": 707,
                                                    "end": 713
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 707,
                                            "end": 713
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 138477615,
                                            "flags": 2097216,
                                            "start": 715,
                                            "end": 720
                                        },
                                        "flags": 2097152,
                                        "start": 705,
                                        "end": 720
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 703,
                                "end": 722
                            },
                            "flags": 2097152,
                            "start": 702,
                            "end": 722
                        },
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 727,
                                "end": 730
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 732,
                                    "end": 732
                                },
                                "flags": 32,
                                "start": 730,
                                "end": 734
                            },
                            "flags": 32,
                            "start": 724,
                            "end": 734
                        },
                        "flags": 16,
                        "start": 700,
                        "end": 734
                    }
                ],
                "flags": 16,
                "start": 700,
                "end": 734
            },
            "flags": 16,
            "start": 657,
            "end": 734
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 734,
                "end": 747
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 747,
                            "end": 749
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 754,
                                            "end": 754
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "mixed",
                                                "rawText": "mixed",
                                                "flags": 96,
                                                "start": 756,
                                                "end": 762
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 756,
                                            "end": 762
                                        },
                                        "flags": 2097152,
                                        "start": 752,
                                        "end": 762
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 750,
                                "end": 764
                            },
                            "flags": 2097152,
                            "start": 749,
                            "end": 764
                        },
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 769,
                                "end": 772
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 201392131,
                                "text": "hi",
                                "rawText": "\"hi\"",
                                "flags": 96,
                                "start": 772,
                                "end": 777
                            },
                            "flags": 32,
                            "start": 766,
                            "end": 777
                        },
                        "flags": 16,
                        "start": 747,
                        "end": 777
                    }
                ],
                "flags": 16,
                "start": 747,
                "end": 777
            },
            "flags": 16,
            "start": 734,
            "end": 777
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 777,
                "end": 796
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "start": 796,
                            "end": 798
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 803,
                                                        "end": 804
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 134299649,
                                                            "text": "Date",
                                                            "rawText": "Date",
                                                            "flags": 96,
                                                            "start": 805,
                                                            "end": 810
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 805,
                                                        "end": 810
                                                    },
                                                    "flags": 2097152,
                                                    "start": 803,
                                                    "end": 810
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 803,
                                            "end": 810
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 138477615,
                                            "flags": 2097216,
                                            "start": 812,
                                            "end": 817
                                        },
                                        "flags": 2097152,
                                        "start": 801,
                                        "end": 817
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 799,
                                "end": 819
                            },
                            "flags": 2097152,
                            "start": 798,
                            "end": 819
                        },
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 825,
                                "end": 828
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 823,
                                    "end": 824
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 830,
                                                    "end": 832
                                                },
                                                "operatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 96,
                                                    "start": 832,
                                                    "end": 834
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 96,
                                                    "start": 834,
                                                    "end": 836
                                                },
                                                "flags": 32,
                                                "start": 830,
                                                "end": 836
                                            },
                                            "flags": 16,
                                            "start": 830,
                                            "end": 836
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 830,
                                    "end": 836
                                },
                                "flags": 32,
                                "start": 828,
                                "end": 838
                            },
                            "flags": 32,
                            "start": 821,
                            "end": 838
                        },
                        "flags": 16,
                        "start": 796,
                        "end": 838
                    }
                ],
                "flags": 16,
                "start": 796,
                "end": 838
            },
            "flags": 16,
            "start": 777,
            "end": 838
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 838,
                "end": 904
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
                            "start": 904,
                            "end": 906
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 908,
                                "end": 911
                            },
                            "flags": 2097152,
                            "start": 906,
                            "end": 911
                        },
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 917,
                                "end": 920
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 915,
                                    "end": 916
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 201392131,
                                "text": "hi",
                                "rawText": "\"hi\"",
                                "flags": 96,
                                "start": 920,
                                "end": 925
                            },
                            "flags": 32,
                            "start": 913,
                            "end": 925
                        },
                        "flags": 16,
                        "start": 904,
                        "end": 925
                    }
                ],
                "flags": 16,
                "start": 904,
                "end": 925
            },
            "flags": 16,
            "start": 838,
            "end": 925
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 925,
                "end": 929
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 929,
                            "end": 931
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Object",
                                    "rawText": "Object",
                                    "flags": 96,
                                    "start": 933,
                                    "end": 940
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 933,
                                "end": 940
                            },
                            "flags": 2097152,
                            "start": 931,
                            "end": 940
                        },
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 946,
                                "end": 949
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 944,
                                    "end": 945
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 201392131,
                                "text": "hi",
                                "rawText": "\"hi\"",
                                "flags": 96,
                                "start": 949,
                                "end": 954
                            },
                            "flags": 32,
                            "start": 942,
                            "end": 954
                        },
                        "flags": 16,
                        "start": 929,
                        "end": 954
                    }
                ],
                "flags": 16,
                "start": 929,
                "end": 954
            },
            "flags": 16,
            "start": 925,
            "end": 954
        }
    ],
    "isModule": false,
    "source": "// Expecting properties that don't exist should be an error\nvar a : { someProp: number } = function () {};\n\n// Expecting properties that do exist should be fine\nvar b : { apply: Function } = function () {};\n\n// Expecting properties in the functions statics should be fine\nvar f = function () {};\nf.myProp = 123;\nvar c : { myProp: number } = f;\n\nvar a: { (x: number): string } = (x) => x.toString()\n\n// ...and it should notice when the return type is wrong\nvar b: { (x: number): number } = (x) => \"hi\"\n\n// ...or if the param type is wrong\nvar c: { (x: string): string } = (x) => x.toFixed()\n\n// ...or if the arity is wrong\nvar d: { (): string } = (x) => \"hi\"\n\n// ...but subtyping rules still apply\nvar e: { (x: any): void } = () => { } // arity\nvar f: { (): mixed } = () => \"hi\" // return type\nvar g: { (x: Date): void } = (x) => { x * 2 } // param type (date < number)\n\n// A function can be an object\nvar y : {} = (x) => \"hi\"\nvar z : Object = (x) => \"hi\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 954
}
```

### Printed

```javascript
// Expecting properties that don't exist should be an error

var a = function () {};
// Expecting properties that do exist should be fine
var b = function () {};
// Expecting properties in the functions statics should be fine
var f = function () {};
f.myProp = 123;
var c = f;
var a = (x) =>  x.toString();
// ...and it should notice when the return type is wrong
var b = (x) =>  "\"hi\"";
// ...or if the param type is wrong
var c = (x) =>  x.toFixed();
// ...or if the arity is wrong
var d = (x) =>  "\"hi\"";
// ...but subtyping rules still apply
var e = () =>  {}; // arity

var f = () =>  "\"hi\""; // return type

var g = (x) =>  {
  x * 2;
}; // param type (date < number)

// A function can be an object
var y = (x) =>  "\"hi\"";
var z = (x) =>  "\"hi\"";
```

### Diagnostics

```javascript
✔ No errors
```

