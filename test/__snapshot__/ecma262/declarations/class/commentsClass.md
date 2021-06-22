# Kataw parser test case

## Input

`````js
/** This is class c2 without constuctor*/
class c2 {
} // trailing comment1
var i2 = new c2();
var i2_c = c2;
class c3 {
    /** Constructor comment*/
    constructor() {
    } // trailing comment of constructor
} /* trailing comment 2 */
var i3 = new c3();
var i3_c = c3;
/** Class comment*/
class c4 {
    /** Constructor comment*/
    constructor() {
    } /* trailing comment of constructor 2*/
}
var i4 = new c4();
var i4_c = c4;
/** Class with statics*/
class c5 {
    static s1: number;
}
var i5 = new c5();
var i5_c = c5;

/// class with statics and constructor
class c6 { /// class with statics and constructor2
    /// s1 comment
    static s1: number; /// s1 comment2
    /// constructor comment
    constructor() { /// constructor comment2
    }
}
var i6 = new c6();
var i6_c = c6;

// class with statics and constructor
class c7 {
    // s1 comment
    static s1: number;
    // constructor comment
    constructor() {
    }
}
var i7 = new c7();
var i7_c = c7;

/** class with statics and constructor
 */
class c8 {
    /** s1 comment */
    static s1: number; /** s1 comment2 */
    /** constructor comment
    */
    constructor() {
        /** constructor comment2
        */
    }
}
var i8 = new c8();
var i8_c = c8;

class c9 {
    constructor() {
        /// This is some detached comment

        // should emit this leading comment of } too
    }
}
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 0,
                "end": 47
            },
            "name": {
                "kind": 134299649,
                "text": "c2",
                "rawText": "c2",
                "flags": 96,
                "start": 47,
                "end": 50
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 52,
                    "end": 52
                },
                "flags": 50,
                "start": 32,
                "end": 54
            },
            "flags": 17,
            "start": 0,
            "end": 54
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 54,
                "end": 79
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i2",
                            "rawText": "i2",
                            "flags": 96,
                            "start": 79,
                            "end": 82
                        },
                        "type": null,
                        "initializer": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "start": 84,
                                "end": 88
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c2",
                                "rawText": "c2",
                                "flags": 96,
                                "start": 88,
                                "end": 91
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 92,
                                "end": 92
                            },
                            "flags": 96,
                            "start": 84,
                            "end": 93
                        },
                        "flags": 16,
                        "start": 79,
                        "end": 93
                    }
                ],
                "flags": 16,
                "start": 79,
                "end": 93
            },
            "flags": 16,
            "start": 54,
            "end": 94
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 94,
                "end": 98
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i2_c",
                            "rawText": "i2_c",
                            "flags": 96,
                            "start": 98,
                            "end": 103
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "c2",
                            "rawText": "c2",
                            "flags": 96,
                            "start": 105,
                            "end": 108
                        },
                        "flags": 16,
                        "start": 98,
                        "end": 108
                    }
                ],
                "flags": 16,
                "start": 98,
                "end": 108
            },
            "flags": 16,
            "start": 94,
            "end": 109
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 109,
                "end": 115
            },
            "name": {
                "kind": 134299649,
                "text": "c3",
                "rawText": "c3",
                "flags": 96,
                "start": 115,
                "end": 118
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 120,
                                    "end": 166
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 167,
                                    "end": 168
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "start": 170,
                                        "end": 170
                                    },
                                    "flags": 32,
                                    "start": 168,
                                    "end": 176
                                },
                                "flags": 2048,
                                "start": 166,
                                "end": 176
                            },
                            "flags": 2048,
                            "start": 120,
                            "end": 176
                        }
                    ],
                    "flags": 32,
                    "start": 120,
                    "end": 176
                },
                "flags": 118,
                "start": 32,
                "end": 213
            },
            "flags": 17,
            "start": 109,
            "end": 213
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 213,
                "end": 242
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i3",
                            "rawText": "i3",
                            "flags": 96,
                            "start": 242,
                            "end": 245
                        },
                        "type": null,
                        "initializer": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "start": 247,
                                "end": 251
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c3",
                                "rawText": "c3",
                                "flags": 96,
                                "start": 251,
                                "end": 254
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 255,
                                "end": 255
                            },
                            "flags": 96,
                            "start": 247,
                            "end": 256
                        },
                        "flags": 16,
                        "start": 242,
                        "end": 256
                    }
                ],
                "flags": 16,
                "start": 242,
                "end": 256
            },
            "flags": 16,
            "start": 213,
            "end": 257
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 257,
                "end": 261
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i3_c",
                            "rawText": "i3_c",
                            "flags": 96,
                            "start": 261,
                            "end": 266
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "c3",
                            "rawText": "c3",
                            "flags": 96,
                            "start": 268,
                            "end": 271
                        },
                        "flags": 16,
                        "start": 261,
                        "end": 271
                    }
                ],
                "flags": 16,
                "start": 261,
                "end": 271
            },
            "flags": 16,
            "start": 257,
            "end": 272
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 272,
                "end": 298
            },
            "name": {
                "kind": 134299649,
                "text": "c4",
                "rawText": "c4",
                "flags": 96,
                "start": 298,
                "end": 301
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 303,
                                    "end": 349
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 350,
                                    "end": 351
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "start": 353,
                                        "end": 353
                                    },
                                    "flags": 32,
                                    "start": 351,
                                    "end": 359
                                },
                                "flags": 2048,
                                "start": 349,
                                "end": 359
                            },
                            "flags": 2048,
                            "start": 303,
                            "end": 359
                        }
                    ],
                    "flags": 32,
                    "start": 303,
                    "end": 359
                },
                "flags": 301,
                "start": 32,
                "end": 400
            },
            "flags": 17,
            "start": 272,
            "end": 400
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 400,
                "end": 404
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i4",
                            "rawText": "i4",
                            "flags": 96,
                            "start": 404,
                            "end": 407
                        },
                        "type": null,
                        "initializer": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "start": 409,
                                "end": 413
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c4",
                                "rawText": "c4",
                                "flags": 96,
                                "start": 413,
                                "end": 416
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 417,
                                "end": 417
                            },
                            "flags": 96,
                            "start": 409,
                            "end": 418
                        },
                        "flags": 16,
                        "start": 404,
                        "end": 418
                    }
                ],
                "flags": 16,
                "start": 404,
                "end": 418
            },
            "flags": 16,
            "start": 400,
            "end": 419
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 419,
                "end": 423
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i4_c",
                            "rawText": "i4_c",
                            "flags": 96,
                            "start": 423,
                            "end": 428
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "c4",
                            "rawText": "c4",
                            "flags": 96,
                            "start": 430,
                            "end": 433
                        },
                        "flags": 16,
                        "start": 423,
                        "end": 433
                    }
                ],
                "flags": 16,
                "start": 423,
                "end": 433
            },
            "flags": 16,
            "start": 419,
            "end": 434
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 434,
                "end": 465
            },
            "name": {
                "kind": 134299649,
                "text": "c5",
                "rawText": "c5",
                "flags": 96,
                "start": 465,
                "end": 468
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 470,
                                "end": 481
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "s1",
                                "rawText": "s1",
                                "flags": 96,
                                "start": 481,
                                "end": 484
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 485,
                                    "end": 492
                                },
                                "flags": 2097152,
                                "start": 485,
                                "end": 492
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 481,
                            "end": 492
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 492,
                            "end": 493
                        }
                    ],
                    "flags": 32,
                    "start": 470,
                    "end": 493
                },
                "flags": 468,
                "start": 32,
                "end": 495
            },
            "flags": 17,
            "start": 434,
            "end": 495
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 495,
                "end": 499
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i5",
                            "rawText": "i5",
                            "flags": 96,
                            "start": 499,
                            "end": 502
                        },
                        "type": null,
                        "initializer": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "start": 504,
                                "end": 508
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c5",
                                "rawText": "c5",
                                "flags": 96,
                                "start": 508,
                                "end": 511
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 512,
                                "end": 512
                            },
                            "flags": 96,
                            "start": 504,
                            "end": 513
                        },
                        "flags": 16,
                        "start": 499,
                        "end": 513
                    }
                ],
                "flags": 16,
                "start": 499,
                "end": 513
            },
            "flags": 16,
            "start": 495,
            "end": 514
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 514,
                "end": 518
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i5_c",
                            "rawText": "i5_c",
                            "flags": 96,
                            "start": 518,
                            "end": 523
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "c5",
                            "rawText": "c5",
                            "flags": 96,
                            "start": 525,
                            "end": 528
                        },
                        "flags": 16,
                        "start": 518,
                        "end": 528
                    }
                ],
                "flags": 16,
                "start": 518,
                "end": 528
            },
            "flags": 16,
            "start": 514,
            "end": 529
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 529,
                "end": 575
            },
            "name": {
                "kind": 134299649,
                "text": "c6",
                "rawText": "c6",
                "flags": 96,
                "start": 575,
                "end": 578
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 580,
                                "end": 650
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "s1",
                                "rawText": "s1",
                                "flags": 96,
                                "start": 650,
                                "end": 653
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 654,
                                    "end": 661
                                },
                                "flags": 2097152,
                                "start": 654,
                                "end": 661
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 650,
                            "end": 661
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 661,
                            "end": 662
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 662,
                                    "end": 722
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 723,
                                    "end": 724
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "start": 726,
                                        "end": 726
                                    },
                                    "flags": 32,
                                    "start": 724,
                                    "end": 757
                                },
                                "flags": 2048,
                                "start": 722,
                                "end": 757
                            },
                            "flags": 2048,
                            "start": 662,
                            "end": 757
                        }
                    ],
                    "flags": 32,
                    "start": 580,
                    "end": 757
                },
                "flags": 578,
                "start": 32,
                "end": 759
            },
            "flags": 17,
            "start": 529,
            "end": 759
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 759,
                "end": 763
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i6",
                            "rawText": "i6",
                            "flags": 96,
                            "start": 763,
                            "end": 766
                        },
                        "type": null,
                        "initializer": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "start": 768,
                                "end": 772
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c6",
                                "rawText": "c6",
                                "flags": 96,
                                "start": 772,
                                "end": 775
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 776,
                                "end": 776
                            },
                            "flags": 96,
                            "start": 768,
                            "end": 777
                        },
                        "flags": 16,
                        "start": 763,
                        "end": 777
                    }
                ],
                "flags": 16,
                "start": 763,
                "end": 777
            },
            "flags": 16,
            "start": 759,
            "end": 778
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 778,
                "end": 782
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i6_c",
                            "rawText": "i6_c",
                            "flags": 96,
                            "start": 782,
                            "end": 787
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "c6",
                            "rawText": "c6",
                            "flags": 96,
                            "start": 789,
                            "end": 792
                        },
                        "flags": 16,
                        "start": 782,
                        "end": 792
                    }
                ],
                "flags": 16,
                "start": 782,
                "end": 792
            },
            "flags": 16,
            "start": 778,
            "end": 793
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 793,
                "end": 838
            },
            "name": {
                "kind": 134299649,
                "text": "c7",
                "rawText": "c7",
                "flags": 96,
                "start": 838,
                "end": 841
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 843,
                                "end": 872
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "s1",
                                "rawText": "s1",
                                "flags": 96,
                                "start": 872,
                                "end": 875
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 876,
                                    "end": 883
                                },
                                "flags": 2097152,
                                "start": 876,
                                "end": 883
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 872,
                            "end": 883
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 883,
                            "end": 884
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 884,
                                    "end": 927
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 928,
                                    "end": 929
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "start": 931,
                                        "end": 931
                                    },
                                    "flags": 32,
                                    "start": 929,
                                    "end": 937
                                },
                                "flags": 2048,
                                "start": 927,
                                "end": 937
                            },
                            "flags": 2048,
                            "start": 884,
                            "end": 937
                        }
                    ],
                    "flags": 32,
                    "start": 843,
                    "end": 937
                },
                "flags": 841,
                "start": 32,
                "end": 939
            },
            "flags": 17,
            "start": 793,
            "end": 939
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 939,
                "end": 943
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i7",
                            "rawText": "i7",
                            "flags": 96,
                            "start": 943,
                            "end": 946
                        },
                        "type": null,
                        "initializer": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "start": 948,
                                "end": 952
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c7",
                                "rawText": "c7",
                                "flags": 96,
                                "start": 952,
                                "end": 955
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 956,
                                "end": 956
                            },
                            "flags": 96,
                            "start": 948,
                            "end": 957
                        },
                        "flags": 16,
                        "start": 943,
                        "end": 957
                    }
                ],
                "flags": 16,
                "start": 943,
                "end": 957
            },
            "flags": 16,
            "start": 939,
            "end": 958
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 958,
                "end": 962
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i7_c",
                            "rawText": "i7_c",
                            "flags": 96,
                            "start": 962,
                            "end": 967
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "c7",
                            "rawText": "c7",
                            "flags": 96,
                            "start": 969,
                            "end": 972
                        },
                        "flags": 16,
                        "start": 962,
                        "end": 972
                    }
                ],
                "flags": 16,
                "start": 962,
                "end": 972
            },
            "flags": 16,
            "start": 958,
            "end": 973
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 973,
                "end": 1023
            },
            "name": {
                "kind": 134299649,
                "text": "c8",
                "rawText": "c8",
                "flags": 96,
                "start": 1023,
                "end": 1026
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 1028,
                                "end": 1061
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "s1",
                                "rawText": "s1",
                                "flags": 96,
                                "start": 1061,
                                "end": 1064
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 1065,
                                    "end": 1072
                                },
                                "flags": 2097152,
                                "start": 1065,
                                "end": 1072
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 1061,
                            "end": 1072
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 1072,
                            "end": 1073
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 1073,
                                    "end": 1143
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 1144,
                                    "end": 1145
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "start": 1147,
                                        "end": 1147
                                    },
                                    "flags": 32,
                                    "start": 1145,
                                    "end": 1197
                                },
                                "flags": 2048,
                                "start": 1143,
                                "end": 1197
                            },
                            "flags": 2048,
                            "start": 1073,
                            "end": 1197
                        }
                    ],
                    "flags": 32,
                    "start": 1028,
                    "end": 1197
                },
                "flags": 1026,
                "start": 32,
                "end": 1199
            },
            "flags": 17,
            "start": 973,
            "end": 1199
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 1199,
                "end": 1203
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i8",
                            "rawText": "i8",
                            "flags": 96,
                            "start": 1203,
                            "end": 1206
                        },
                        "type": null,
                        "initializer": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "start": 1208,
                                "end": 1212
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c8",
                                "rawText": "c8",
                                "flags": 96,
                                "start": 1212,
                                "end": 1215
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 1216,
                                "end": 1216
                            },
                            "flags": 96,
                            "start": 1208,
                            "end": 1217
                        },
                        "flags": 16,
                        "start": 1203,
                        "end": 1217
                    }
                ],
                "flags": 16,
                "start": 1203,
                "end": 1217
            },
            "flags": 16,
            "start": 1199,
            "end": 1218
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 1218,
                "end": 1222
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "i8_c",
                            "rawText": "i8_c",
                            "flags": 96,
                            "start": 1222,
                            "end": 1227
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "c8",
                            "rawText": "c8",
                            "flags": 96,
                            "start": 1229,
                            "end": 1232
                        },
                        "flags": 16,
                        "start": 1222,
                        "end": 1232
                    }
                ],
                "flags": 16,
                "start": 1222,
                "end": 1232
            },
            "flags": 16,
            "start": 1218,
            "end": 1233
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 1233,
                "end": 1240
            },
            "name": {
                "kind": 134299649,
                "text": "c9",
                "rawText": "c9",
                "flags": 96,
                "start": 1240,
                "end": 1243
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 1245,
                                    "end": 1261
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 1262,
                                    "end": 1263
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "start": 1265,
                                        "end": 1265
                                    },
                                    "flags": 32,
                                    "start": 1263,
                                    "end": 1367
                                },
                                "flags": 2048,
                                "start": 1261,
                                "end": 1367
                            },
                            "flags": 2048,
                            "start": 1245,
                            "end": 1367
                        }
                    ],
                    "flags": 32,
                    "start": 1245,
                    "end": 1367
                },
                "flags": 1243,
                "start": 32,
                "end": 1369
            },
            "flags": 17,
            "start": 1233,
            "end": 1369
        }
    ],
    "isModule": false,
    "source": "/** This is class c2 without constuctor*/\nclass c2 {\n} // trailing comment1\nvar i2 = new c2();\nvar i2_c = c2;\nclass c3 {\n    /** Constructor comment*/\n    constructor() {\n    } // trailing comment of constructor\n} /* trailing comment 2 */\nvar i3 = new c3();\nvar i3_c = c3;\n/** Class comment*/\nclass c4 {\n    /** Constructor comment*/\n    constructor() {\n    } /* trailing comment of constructor 2*/\n}\nvar i4 = new c4();\nvar i4_c = c4;\n/** Class with statics*/\nclass c5 {\n    static s1: number;\n}\nvar i5 = new c5();\nvar i5_c = c5;\n\n/// class with statics and constructor\nclass c6 { /// class with statics and constructor2\n    /// s1 comment\n    static s1: number; /// s1 comment2\n    /// constructor comment\n    constructor() { /// constructor comment2\n    }\n}\nvar i6 = new c6();\nvar i6_c = c6;\n\n// class with statics and constructor\nclass c7 {\n    // s1 comment\n    static s1: number;\n    // constructor comment\n    constructor() {\n    }\n}\nvar i7 = new c7();\nvar i7_c = c7;\n\n/** class with statics and constructor\n */\nclass c8 {\n    /** s1 comment */\n    static s1: number; /** s1 comment2 */\n    /** constructor comment\n    */\n    constructor() {\n        /** constructor comment2\n        */\n    }\n}\nvar i8 = new c8();\nvar i8_c = c8;\n\nclass c9 {\n    constructor() {\n        /// This is some detached comment\n\n        // should emit this leading comment of } too\n    }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1369
}
```

### Printed

```javascript
/** This is class c2 without constuctor*/

class c2 {} // trailing comment1

var i2 = new  c2();
var i2_c = c2;
class c3 {
  /** Constructor comment*/
  /** Constructor comment*/
  constructor() {} // trailing comment of constructor

} /* trailing comment 2 */
var i3 = new  c3();
var i3_c = c3;
/** Class comment*/
class c4 {
  /** Constructor comment*/
  /** Constructor comment*/
  constructor() {} /* trailing comment of constructor 2*/
}
var i4 = new  c4();
var i4_c = c4;
/** Class with statics*/
class c5 {
  static s1;

}
var i5 = new  c5();
var i5_c = c5;
/// class with statics and constructor
class c6 {
  static s1;
   /// s1 comment2

  /// constructor comment
  /// constructor comment
  constructor() {}
}
var i6 = new  c6();
var i6_c = c6;
// class with statics and constructor
class c7 {
  static s1;

  // constructor comment
  // constructor comment
  constructor() {}
}
var i7 = new  c7();
var i7_c = c7;
/** class with statics and constructor
 */
class c8 {
  static s1;
   /** s1 comment2 */
  /** constructor comment
    */
  /** constructor comment
    */
  constructor() {}
}
var i8 = new  c8();
var i8_c = c8;
class c9 {
  constructor() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

