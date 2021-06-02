# Kataw parser test case

## Input

`````js
/** Variable comments*/
var myVariable = 10; // This trailing Comment1

/** This is another variable comment*/
var anotherVariable = 30;

// shouldn't appear
var aVar = "";

/** this is multiline comment
  * All these variables are of number type */
var anotherAnotherVariable = 70; /* these are multiple trailing comments */ /* multiple trailing comments */

/** Triple slash multiline comment*/
/** another line in the comment*/
/** comment line 2*/
var x = 70; /* multiline trailing comment
this is multiline trailing comment */
/** Triple slash comment on the assignment shouldnt be in .d.ts file*/
x = myVariable;

/** triple slash comment1*/
/** jsdocstyle comment - only this comment should be in .d.ts file*/
var n = 30;

/** var deckaration with comment on type as well*/
var y = /** value comment */ 20;

/// var deckaration with comment on type as well
var yy =
    /// value comment
    20;

/** comment2 */
var z = /** lambda comment */ (x: number, y: number) => x + y;

var z2: /** type comment*/ (x: number) => string;

var x2 = z2;

var n4: (x: number) => string;
n4 = z2;
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
                "end": 27
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "myVariable",
                            "rawText": "myVariable",
                            "flags": 96,
                            "start": 27,
                            "end": 38
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 96,
                            "start": 40,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 27,
                        "end": 43
                    }
                ],
                "flags": 16,
                "start": 27,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 44
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 44,
                "end": 114
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "anotherVariable",
                            "rawText": "anotherVariable",
                            "flags": 96,
                            "start": 114,
                            "end": 130
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 30,
                            "rawText": "30",
                            "flags": 96,
                            "start": 132,
                            "end": 135
                        },
                        "flags": 16,
                        "start": 114,
                        "end": 135
                    }
                ],
                "flags": 16,
                "start": 114,
                "end": 135
            },
            "flags": 16,
            "start": 44,
            "end": 136
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 136,
                "end": 161
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "aVar",
                            "rawText": "aVar",
                            "flags": 96,
                            "start": 161,
                            "end": 166
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "",
                            "rawText": "\"\"",
                            "flags": 96,
                            "start": 168,
                            "end": 171
                        },
                        "flags": 16,
                        "start": 161,
                        "end": 171
                    }
                ],
                "flags": 16,
                "start": 161,
                "end": 171
            },
            "flags": 16,
            "start": 136,
            "end": 172
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 172,
                "end": 253
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "anotherAnotherVariable",
                            "rawText": "anotherAnotherVariable",
                            "flags": 96,
                            "start": 253,
                            "end": 276
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 70,
                            "rawText": "70",
                            "flags": 96,
                            "start": 278,
                            "end": 281
                        },
                        "flags": 16,
                        "start": 253,
                        "end": 281
                    }
                ],
                "flags": 16,
                "start": 253,
                "end": 281
            },
            "flags": 16,
            "start": 172,
            "end": 282
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 282,
                "end": 455
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
                            "start": 455,
                            "end": 457
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 70,
                            "rawText": "70",
                            "flags": 96,
                            "start": 459,
                            "end": 462
                        },
                        "flags": 16,
                        "start": 455,
                        "end": 462
                    }
                ],
                "flags": 16,
                "start": 455,
                "end": 462
            },
            "flags": 16,
            "start": 282,
            "end": 463
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 463,
                    "end": 604
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 604,
                    "end": 606
                },
                "right": {
                    "kind": 134299649,
                    "text": "myVariable",
                    "rawText": "myVariable",
                    "flags": 96,
                    "start": 606,
                    "end": 617
                },
                "flags": 32,
                "start": 463,
                "end": 617
            },
            "flags": 16,
            "start": 463,
            "end": 618
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 618,
                "end": 720
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "n",
                            "rawText": "n",
                            "flags": 96,
                            "start": 720,
                            "end": 722
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 30,
                            "rawText": "30",
                            "flags": 96,
                            "start": 724,
                            "end": 727
                        },
                        "flags": 16,
                        "start": 720,
                        "end": 727
                    }
                ],
                "flags": 16,
                "start": 720,
                "end": 727
            },
            "flags": 16,
            "start": 618,
            "end": 728
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 728,
                "end": 784
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
                            "start": 784,
                            "end": 786
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 20,
                            "rawText": "20",
                            "flags": 96,
                            "start": 788,
                            "end": 812
                        },
                        "flags": 16,
                        "start": 784,
                        "end": 812
                    }
                ],
                "flags": 16,
                "start": 784,
                "end": 812
            },
            "flags": 16,
            "start": 728,
            "end": 813
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 813,
                "end": 867
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "yy",
                            "rawText": "yy",
                            "flags": 96,
                            "start": 867,
                            "end": 870
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 20,
                            "rawText": "20",
                            "flags": 97,
                            "start": 872,
                            "end": 901
                        },
                        "flags": 16,
                        "start": 867,
                        "end": 901
                    }
                ],
                "flags": 16,
                "start": 867,
                "end": 901
            },
            "flags": 16,
            "start": 813,
            "end": 902
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 902,
                "end": 923
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
                            "start": 923,
                            "end": 925
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 972,
                                "end": 975
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 951,
                                        "end": 952
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 953,
                                            "end": 960
                                        },
                                        "flags": 0,
                                        "start": 952,
                                        "end": 960
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 927,
                                    "end": 960
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 961,
                                        "end": 963
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 964,
                                            "end": 971
                                        },
                                        "flags": 0,
                                        "start": 963,
                                        "end": 971
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 927,
                                    "end": 971
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 975,
                                    "end": 977
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 64,
                                    "start": 977,
                                    "end": 979
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 979,
                                    "end": 981
                                },
                                "flags": 32,
                                "start": 975,
                                "end": 981
                            },
                            "flags": 32,
                            "start": 927,
                            "end": 981
                        },
                        "flags": 16,
                        "start": 923,
                        "end": 981
                    }
                ],
                "flags": 16,
                "start": 923,
                "end": 981
            },
            "flags": 16,
            "start": 902,
            "end": 982
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 982,
                "end": 987
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z2",
                            "rawText": "z2",
                            "flags": 96,
                            "start": 987,
                            "end": 990
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 1022,
                                    "end": 1025
                                },
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 1012,
                                                "end": 1013
                                            },
                                            "optionalToken": null,
                                            "typeAnnotation": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 1014,
                                                "end": 1021
                                            },
                                            "flags": 0,
                                            "start": 1012,
                                            "end": 1021
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1012,
                                    "end": 1021
                                },
                                "returnType": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 1025,
                                    "end": 1032
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 991,
                                "end": 1032
                            },
                            "flags": 0,
                            "start": 990,
                            "end": 1032
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 987,
                        "end": 1032
                    }
                ],
                "flags": 16,
                "start": 987,
                "end": 1032
            },
            "flags": 16,
            "start": 982,
            "end": 1033
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 1033,
                "end": 1038
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x2",
                            "rawText": "x2",
                            "flags": 96,
                            "start": 1038,
                            "end": 1041
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "z2",
                            "rawText": "z2",
                            "flags": 96,
                            "start": 1043,
                            "end": 1046
                        },
                        "flags": 16,
                        "start": 1038,
                        "end": 1046
                    }
                ],
                "flags": 16,
                "start": 1038,
                "end": 1046
            },
            "flags": 16,
            "start": 1033,
            "end": 1047
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 1047,
                "end": 1052
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "n4",
                            "rawText": "n4",
                            "flags": 96,
                            "start": 1052,
                            "end": 1055
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 1068,
                                    "end": 1071
                                },
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 1058,
                                                "end": 1059
                                            },
                                            "optionalToken": null,
                                            "typeAnnotation": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 1060,
                                                "end": 1067
                                            },
                                            "flags": 0,
                                            "start": 1058,
                                            "end": 1067
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1058,
                                    "end": 1067
                                },
                                "returnType": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 1071,
                                    "end": 1078
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 1056,
                                "end": 1078
                            },
                            "flags": 0,
                            "start": 1055,
                            "end": 1078
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 1052,
                        "end": 1078
                    }
                ],
                "flags": 16,
                "start": 1052,
                "end": 1078
            },
            "flags": 16,
            "start": 1047,
            "end": 1079
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "n4",
                    "rawText": "n4",
                    "flags": 96,
                    "start": 1079,
                    "end": 1082
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1082,
                    "end": 1084
                },
                "right": {
                    "kind": 134299649,
                    "text": "z2",
                    "rawText": "z2",
                    "flags": 96,
                    "start": 1084,
                    "end": 1087
                },
                "flags": 32,
                "start": 1079,
                "end": 1087
            },
            "flags": 16,
            "start": 1079,
            "end": 1088
        }
    ],
    "isModule": false,
    "source": "/** Variable comments*/\nvar myVariable = 10; // This trailing Comment1\n\n/** This is another variable comment*/\nvar anotherVariable = 30;\n\n// shouldn't appear\nvar aVar = \"\";\n\n/** this is multiline comment\n  * All these variables are of number type */\nvar anotherAnotherVariable = 70; /* these are multiple trailing comments */ /* multiple trailing comments */\n\n/** Triple slash multiline comment*/\n/** another line in the comment*/\n/** comment line 2*/\nvar x = 70; /* multiline trailing comment\nthis is multiline trailing comment */\n/** Triple slash comment on the assignment shouldnt be in .d.ts file*/\nx = myVariable;\n\n/** triple slash comment1*/\n/** jsdocstyle comment - only this comment should be in .d.ts file*/\nvar n = 30;\n\n/** var deckaration with comment on type as well*/\nvar y = /** value comment */ 20;\n\n/// var deckaration with comment on type as well\nvar yy =\n    /// value comment\n    20;\n\n/** comment2 */\nvar z = /** lambda comment */ (x: number, y: number) => x + y;\n\nvar z2: /** type comment*/ (x: number) => string;\n\nvar x2 = z2;\n\nvar n4: (x: number) => string;\nn4 = z2;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1088
}
```

### Printed

```javascript
/** Variable comments*/

var myVariable = 10; // This trailing Comment1

/** This is another variable comment*/
var anotherVariable = 30;
// shouldn't appear
var aVar = "\"\"";
/** this is multiline comment
  * All these variables are of number type */
var anotherAnotherVariable = 70; /* these are multiple trailing comments */ /* multiple trailing comments */
/** Triple slash multiline comment*/
/** another line in the comment*/
/** comment line 2*/
var x = 70; /* multiline trailing comment
this is multiline trailing comment */
/** Triple slash comment on the assignment shouldnt be in .d.ts file*/
x = myVariable;
/** triple slash comment1*/
/** jsdocstyle comment - only this comment should be in .d.ts file*/
var n = 30;
/** var deckaration with comment on type as well*/
var y = 20;
/// var deckaration with comment on type as well
var yy = /// value comment
20;
/** comment2 */
var z = (/** lambda comment */ x, /** lambda comment */ y) =>  x + y;
var z2;
var x2 = z2;
var n4;
n4 = z2;
```

### Diagnostics

```javascript
✔ No errors
```

