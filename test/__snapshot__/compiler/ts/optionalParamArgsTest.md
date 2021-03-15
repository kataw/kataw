# Kataw parser test case

## Input

`````js
interface I1 {
    C1M1():number;
    C1M2(C1M2A1:number):number;
    C1M3(C1M3A1?:number,C1M3A2?:number):number;
    C1M4(C1M4A1:number,C1M4A2?:number):number;
}

// test basic configurations
class C1 {
    constructor(v: number = 1, p: number = 0) { }
    public n:number = 0;

    public C1M1() { return 0; } // returning C1M1A1 will result in "Unresolved symbol C1M1A1"

    public C1M2(C1M2A1:number) { return C1M2A1; } // will return C1M1A2 without complaint

    // C1M3 contains all optional parameters
    public C1M3(C1M3A1:number=0,C1M3A2:number=C1M3A1) {return C1M3A1 + C1M3A2; }

    // C1M4 contains a mix of optional and non-optional parameters
    public C1M4(C1M4A1:number,C1M4A2?:number) { return C1M4A1 + C1M4A2; }

    public C1M5(C1M5A1:number,C1M5A2:number=0,C1M5A3?:number) { return C1M5A1 + C1M5A2; }

    // Uninitialized parameter makes the initialized one required
    public C1M5(C1M5A1:number,C1M5A2:number=0,C1M5A3:number) { return C1M5A1 + C1M5A2; }
}

class C2 extends C1 {
    constructor(v2: number = 6) {
        super(v2);
    }
}


function F1() { return 0; }
function F2(F2A1:number) { return F2A1; }
function F3(F3A1=0,F3A2=F3A1) {return F3A1 + F3A2; }
function F4(F4A1:number,F4A2?:number) { return F4A1 + F4A2; }

var L1 = function() {return 0;}
var L2 = function (L2A1:number) { return L2A1; }
var L3 = function (L3A1=0,L3A2=L3A1) {return L3A1 + L3A2; }
var L4 = function (L4A1:number,L4A2?:number) { return L4A1 + L4A2; }

var c1o1:C1 = new C1(5);
var i1o1:I1 = new C1(5);
// Valid
c1o1.C1M1();
var f1v1=F1();
var l1v1=L1();

// Valid
c1o1.C1M2(1);
i1o1.C1M2(1);
var f2v1=F2(1);
var l2v1=L2(1);

// Valid
c1o1.C1M3(1,2);
i1o1.C1M3(1,2);
var f3v1=F3(1,2);
var l3v1=L3(1,2);

// Valid
c1o1.C1M4(1,2);
i1o1.C1M4(1,2);
var f4v1=F4(1,2);
var l4v1=L4(1,2);

// Valid
c1o1.C1M3(1);
i1o1.C1M3(1);
var f3v2=F3(1);
var l3v2=L3(1);

// Valid
c1o1.C1M3();
i1o1.C1M3();
var f3v3=F3();
var l3v3=L3();

// Valid
c1o1.C1M4(1);
i1o1.C1M4(1);
var f4v2=F4(1);
var l4v2=L4(1);

// Negative tests - we expect these cases to fail
c1o1.C1M1(1);
i1o1.C1M1(1);
F1(1);
L1(1);
c1o1.C1M2();
i1o1.C1M2();
F2();
L2();
c1o1.C1M2(1,2);
i1o1.C1M2(1,2);
F2(1,2);
L2(1,2);
c1o1.C1M3(1,2,3);
i1o1.C1M3(1,2,3);
F3(1,2,3);
L3(1,2,3);
c1o1.C1M4();
i1o1.C1M4();
F4();
L4();

function fnOpt1(id: number, children: number[] = [], expectedPath: number[] = [], isRoot?: boolean): void {}
function fnOpt2(id: number, children?: number[], expectedPath?: number[], isRoot?: boolean): void {}
fnOpt1(1, [2, 3], [1], true);
fnOpt2(1, [2, 3], [1], true);

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface I1 {\n    C1M1():number;\n    C1M2(C1M2A1:number):number;\n    C1M3(C1M3A1?:number,C1M3A2?:number):number;\n    C1M4(C1M4A1:number,C1M4A2?:number):number;\n}\n\n// test basic configurations\nclass C1 {\n    constructor(v: number = 1, p: number = 0) { }\n    public n:number = 0;\n\n    public C1M1() { return 0; } // returning C1M1A1 will result in \"Unresolved symbol C1M1A1\"\n\n    public C1M2(C1M2A1:number) { return C1M2A1; } // will return C1M1A2 without complaint\n\n    // C1M3 contains all optional parameters\n    public C1M3(C1M3A1:number=0,C1M3A2:number=C1M3A1) {return C1M3A1 + C1M3A2; }\n\n    // C1M4 contains a mix of optional and non-optional parameters\n    public C1M4(C1M4A1:number,C1M4A2?:number) { return C1M4A1 + C1M4A2; }\n\n    public C1M5(C1M5A1:number,C1M5A2:number=0,C1M5A3?:number) { return C1M5A1 + C1M5A2; }\n\n    // Uninitialized parameter makes the initialized one required\n    public C1M5(C1M5A1:number,C1M5A2:number=0,C1M5A3:number) { return C1M5A1 + C1M5A2; }\n}\n\nclass C2 extends C1 {\n    constructor(v2: number = 6) {\n        super(v2);\n    }\n}\n\n\nfunction F1() { return 0; }\nfunction F2(F2A1:number) { return F2A1; }\nfunction F3(F3A1=0,F3A2=F3A1) {return F3A1 + F3A2; }\nfunction F4(F4A1:number,F4A2?:number) { return F4A1 + F4A2; }\n\nvar L1 = function() {return 0;}\nvar L2 = function (L2A1:number) { return L2A1; }\nvar L3 = function (L3A1=0,L3A2=L3A1) {return L3A1 + L3A2; }\nvar L4 = function (L4A1:number,L4A2?:number) { return L4A1 + L4A2; }\n\nvar c1o1:C1 = new C1(5);\nvar i1o1:I1 = new C1(5);\n// Valid\nc1o1.C1M1();\nvar f1v1=F1();\nvar l1v1=L1();\n\n// Valid\nc1o1.C1M2(1);\ni1o1.C1M2(1);\nvar f2v1=F2(1);\nvar l2v1=L2(1);\n\n// Valid\nc1o1.C1M3(1,2);\ni1o1.C1M3(1,2);\nvar f3v1=F3(1,2);\nvar l3v1=L3(1,2);\n\n// Valid\nc1o1.C1M4(1,2);\ni1o1.C1M4(1,2);\nvar f4v1=F4(1,2);\nvar l4v1=L4(1,2);\n\n// Valid\nc1o1.C1M3(1);\ni1o1.C1M3(1);\nvar f3v2=F3(1);\nvar l3v2=L3(1);\n\n// Valid\nc1o1.C1M3();\ni1o1.C1M3();\nvar f3v3=F3();\nvar l3v3=L3();\n\n// Valid\nc1o1.C1M4(1);\ni1o1.C1M4(1);\nvar f4v2=F4(1);\nvar l4v2=L4(1);\n\n// Negative tests - we expect these cases to fail\nc1o1.C1M1(1);\ni1o1.C1M1(1);\nF1(1);\nL1(1);\nc1o1.C1M2();\ni1o1.C1M2();\nF2();\nL2();\nc1o1.C1M2(1,2);\ni1o1.C1M2(1,2);\nF2(1,2);\nL2(1,2);\nc1o1.C1M3(1,2,3);\ni1o1.C1M3(1,2,3);\nF3(1,2,3);\nL3(1,2,3);\nc1o1.C1M4();\ni1o1.C1M4();\nF4();\nL4();\n\nfunction fnOpt1(id: number, children: number[] = [], expectedPath: number[] = [], isRoot?: boolean): void {}\nfunction fnOpt2(id: number, children?: number[], expectedPath?: number[], isRoot?: boolean): void {}\nfnOpt1(1, [2, 3], [1], true);\nfnOpt2(1, [2, 3], [1], true);\n",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "I1",
                "rawText": "I1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 12
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "C1M1",
                            "rawText": "C1M1",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 23
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 24,
                            "end": 24
                        },
                        "returnType": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 26,
                            "end": 32
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 14,
                        "end": 33
                    },
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "C1M2",
                            "rawText": "C1M2",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 42
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "C1M2A1",
                                        "rawText": "C1M2A1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 43,
                                        "end": 49
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 50,
                                        "end": 56
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 43,
                                    "end": 56
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 43,
                            "end": 56
                        },
                        "returnType": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 58,
                            "end": 64
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 33,
                        "end": 65
                    },
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "C1M3",
                            "rawText": "C1M3",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 74
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "C1M3A1",
                                        "rawText": "C1M3A1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 75,
                                        "end": 81
                                    },
                                    "isOptional": true,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 83,
                                        "end": 89
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 75,
                                    "end": 89
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "C1M3A2",
                                        "rawText": "C1M3A2",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 90,
                                        "end": 96
                                    },
                                    "isOptional": true,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 98,
                                        "end": 104
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 90,
                                    "end": 104
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 75,
                            "end": 104
                        },
                        "returnType": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 106,
                            "end": 112
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 65,
                        "end": 113
                    },
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "C1M4",
                            "rawText": "C1M4",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 113,
                            "end": 122
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "C1M4A1",
                                        "rawText": "C1M4A1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 123,
                                        "end": 129
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 130,
                                        "end": 136
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 123,
                                    "end": 136
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "C1M4A2",
                                        "rawText": "C1M4A2",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 137,
                                        "end": 143
                                    },
                                    "isOptional": true,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 145,
                                        "end": 151
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 137,
                                    "end": 151
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 123,
                            "end": 151
                        },
                        "returnType": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 153,
                            "end": 159
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 113,
                        "end": 160
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 14,
                "end": 160
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 162
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C1",
                "rawText": "C1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 198,
                "end": 201
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 203,
                                "end": 219
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "v",
                                            "rawText": "v",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 220,
                                            "end": 221
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 222,
                                            "end": 229
                                        },
                                        "initializer": {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 231,
                                            "end": 233
                                        },
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 220,
                                        "end": 233
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "p",
                                            "rawText": "p",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 234,
                                            "end": 236
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 237,
                                            "end": 244
                                        },
                                        "initializer": {
                                            "kind": 4261540,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 246,
                                            "end": 248
                                        },
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 234,
                                        "end": 248
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 220,
                                "end": 249
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 251,
                                    "end": 251
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 249,
                                "end": 253
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 219,
                            "end": 253
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 203,
                        "end": 253
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "n",
                            "rawText": "n",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 264,
                            "end": 266
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 267,
                            "end": 273
                        },
                        "initializer": {
                            "kind": 4261540,
                            "text": 0,
                            "rawText": "0",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 275,
                            "end": 277
                        },
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 253,
                            "end": 264
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 253,
                        "end": 278
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "C1M1",
                                "rawText": "C1M1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 290,
                                "end": 295
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 296,
                                "end": 297
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 4261540,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 306,
                                                "end": 308
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 299,
                                            "end": 309
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 299,
                                    "end": 309
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 297,
                                "end": 311
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 278,
                                "end": 290
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 295,
                            "end": 311
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 278,
                        "end": 311
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "C1M2",
                                "rawText": "C1M2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 385,
                                "end": 390
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "C1M2A1",
                                            "rawText": "C1M2A1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 391,
                                            "end": 397
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 398,
                                            "end": 404
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 391,
                                        "end": 404
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 391,
                                "end": 405
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "C1M2A1",
                                                "rawText": "C1M2A1",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 414,
                                                "end": 421
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 407,
                                            "end": 422
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 407,
                                    "end": 422
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 405,
                                "end": 424
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 311,
                                "end": 385
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 390,
                            "end": 424
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 311,
                        "end": 424
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "C1M3",
                                "rawText": "C1M3",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 521,
                                "end": 526
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "C1M3A1",
                                            "rawText": "C1M3A1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 527,
                                            "end": 533
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 534,
                                            "end": 540
                                        },
                                        "initializer": {
                                            "kind": 4261540,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 541,
                                            "end": 542
                                        },
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 527,
                                        "end": 542
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "C1M3A2",
                                            "rawText": "C1M3A2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 543,
                                            "end": 549
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 550,
                                            "end": 556
                                        },
                                        "initializer": {
                                            "kind": 196712,
                                            "text": "C1M3A1",
                                            "rawText": "C1M3A1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 557,
                                            "end": 563
                                        },
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 543,
                                        "end": 563
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 527,
                                "end": 564
                            },
                            "isSetter": false,
                            "isGetter": false,
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
                                                    "kind": 196712,
                                                    "text": "C1M3A1",
                                                    "rawText": "C1M3A1",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 572,
                                                    "end": 579
                                                },
                                                "operator": "+",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "C1M3A2",
                                                    "rawText": "C1M3A2",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 581,
                                                    "end": 588
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 572,
                                                "end": 588
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 566,
                                            "end": 589
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 566,
                                    "end": 589
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 564,
                                "end": 591
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 424,
                                "end": 521
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 526,
                            "end": 591
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 424,
                        "end": 591
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "C1M4",
                                "rawText": "C1M4",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 670,
                                "end": 675
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "C1M4A1",
                                            "rawText": "C1M4A1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 676,
                                            "end": 682
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 683,
                                            "end": 689
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 676,
                                        "end": 689
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "C1M4A2",
                                            "rawText": "C1M4A2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 690,
                                            "end": 696
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 698,
                                            "end": 704
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 690,
                                        "end": 704
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 676,
                                "end": 705
                            },
                            "isSetter": false,
                            "isGetter": false,
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
                                                    "kind": 196712,
                                                    "text": "C1M4A1",
                                                    "rawText": "C1M4A1",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 714,
                                                    "end": 721
                                                },
                                                "operator": "+",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "C1M4A2",
                                                    "rawText": "C1M4A2",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 723,
                                                    "end": 730
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 714,
                                                "end": 730
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 707,
                                            "end": 731
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 707,
                                    "end": 731
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 705,
                                "end": 733
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 591,
                                "end": 670
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 675,
                            "end": 733
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 591,
                        "end": 733
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "C1M5",
                                "rawText": "C1M5",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 745,
                                "end": 750
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "C1M5A1",
                                            "rawText": "C1M5A1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 751,
                                            "end": 757
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 758,
                                            "end": 764
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 751,
                                        "end": 764
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "C1M5A2",
                                            "rawText": "C1M5A2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 765,
                                            "end": 771
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 772,
                                            "end": 778
                                        },
                                        "initializer": {
                                            "kind": 4261540,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 779,
                                            "end": 780
                                        },
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 765,
                                        "end": 780
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "C1M5A3",
                                            "rawText": "C1M5A3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 781,
                                            "end": 787
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 789,
                                            "end": 795
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 781,
                                        "end": 795
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 751,
                                "end": 796
                            },
                            "isSetter": false,
                            "isGetter": false,
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
                                                    "kind": 196712,
                                                    "text": "C1M5A1",
                                                    "rawText": "C1M5A1",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 805,
                                                    "end": 812
                                                },
                                                "operator": "+",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "C1M5A2",
                                                    "rawText": "C1M5A2",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 814,
                                                    "end": 821
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 805,
                                                "end": 821
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 798,
                                            "end": 822
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 798,
                                    "end": 822
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 796,
                                "end": 824
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 733,
                                "end": 745
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 750,
                            "end": 824
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 733,
                        "end": 824
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "C1M5",
                                "rawText": "C1M5",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 902,
                                "end": 907
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "C1M5A1",
                                            "rawText": "C1M5A1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 908,
                                            "end": 914
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 915,
                                            "end": 921
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 908,
                                        "end": 921
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "C1M5A2",
                                            "rawText": "C1M5A2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 922,
                                            "end": 928
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 929,
                                            "end": 935
                                        },
                                        "initializer": {
                                            "kind": 4261540,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 936,
                                            "end": 937
                                        },
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 922,
                                        "end": 937
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "C1M5A3",
                                            "rawText": "C1M5A3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 938,
                                            "end": 944
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 945,
                                            "end": 951
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 938,
                                        "end": 951
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 908,
                                "end": 952
                            },
                            "isSetter": false,
                            "isGetter": false,
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
                                                    "kind": 196712,
                                                    "text": "C1M5A1",
                                                    "rawText": "C1M5A1",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 961,
                                                    "end": 968
                                                },
                                                "operator": "+",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "C1M5A2",
                                                    "rawText": "C1M5A2",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 970,
                                                    "end": 977
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 961,
                                                "end": 977
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 954,
                                            "end": 978
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 954,
                                    "end": 978
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 952,
                                "end": 980
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 824,
                                "end": 902
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 907,
                            "end": 980
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 824,
                        "end": 980
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 203,
                "end": 982
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 162,
            "end": 982
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C2",
                "rawText": "C2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 989,
                "end": 992
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "C1",
                    "rawText": "C1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1000,
                    "end": 1003
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1000,
                "end": 1003
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1005,
                                "end": 1021
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "v2",
                                            "rawText": "v2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1022,
                                            "end": 1024
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 1025,
                                            "end": 1032
                                        },
                                        "initializer": {
                                            "kind": 4261540,
                                            "text": 6,
                                            "rawText": "6",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1034,
                                            "end": 1036
                                        },
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 1022,
                                        "end": 1036
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1022,
                                "end": 1037
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 4260561,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1039,
                                                    "end": 1053
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 196712,
                                                            "text": "v2",
                                                            "rawText": "v2",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 1054,
                                                            "end": 1056
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 1056,
                                                    "end": 1057
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 65536,
                                                "start": 1053,
                                                "end": 1057
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1039,
                                            "end": 1058
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1039,
                                    "end": 1058
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1037,
                                "end": 1064
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1021,
                            "end": 1064
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 1005,
                        "end": 1064
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 1005,
                "end": 1066
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 982,
            "end": 1066
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "F1",
                "rawText": "F1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1077,
                "end": 1080
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1081,
                "end": 1082
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
                                "kind": 4261540,
                                "text": 0,
                                "rawText": "0",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1091,
                                "end": 1093
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1084,
                            "end": 1094
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1084,
                    "end": 1094
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 1082,
                "end": 1096
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 1066,
            "end": 1096
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "F2",
                "rawText": "F2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1105,
                "end": 1108
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "F2A1",
                            "rawText": "F2A1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1109,
                            "end": 1113
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1114,
                            "end": 1120
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 1109,
                        "end": 1120
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1109,
                "end": 1121
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
                                "kind": 196712,
                                "text": "F2A1",
                                "rawText": "F2A1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1130,
                                "end": 1135
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1123,
                            "end": 1136
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1123,
                    "end": 1136
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 1121,
                "end": 1138
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 1096,
            "end": 1138
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "F3",
                "rawText": "F3",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1147,
                "end": 1150
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "F3A1",
                            "rawText": "F3A1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1151,
                            "end": 1155
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 0,
                            "rawText": "0",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1156,
                            "end": 1157
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 1151,
                        "end": 1157
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "F3A2",
                            "rawText": "F3A2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1158,
                            "end": 1162
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": {
                            "kind": 196712,
                            "text": "F3A1",
                            "rawText": "F3A1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1163,
                            "end": 1167
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 1158,
                        "end": 1167
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1151,
                "end": 1168
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
                                    "kind": 196712,
                                    "text": "F3A1",
                                    "rawText": "F3A1",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1176,
                                    "end": 1181
                                },
                                "operator": "+",
                                "right": {
                                    "kind": 196712,
                                    "text": "F3A2",
                                    "rawText": "F3A2",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1183,
                                    "end": 1188
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1176,
                                "end": 1188
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1170,
                            "end": 1189
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1170,
                    "end": 1189
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 1168,
                "end": 1191
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 1138,
            "end": 1191
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "F4",
                "rawText": "F4",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1200,
                "end": 1203
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "F4A1",
                            "rawText": "F4A1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1204,
                            "end": 1208
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1209,
                            "end": 1215
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 1204,
                        "end": 1215
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "F4A2",
                            "rawText": "F4A2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1216,
                            "end": 1220
                        },
                        "isOptional": true,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1222,
                            "end": 1228
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 1216,
                        "end": 1228
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1204,
                "end": 1229
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
                                    "kind": 196712,
                                    "text": "F4A1",
                                    "rawText": "F4A1",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1238,
                                    "end": 1243
                                },
                                "operator": "+",
                                "right": {
                                    "kind": 196712,
                                    "text": "F4A2",
                                    "rawText": "F4A2",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1245,
                                    "end": 1250
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1238,
                                "end": 1250
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1231,
                            "end": 1251
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1231,
                    "end": 1251
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 1229,
                "end": 1253
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 1191,
            "end": 1253
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "L1",
                            "rawText": "L1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1258,
                            "end": 1261
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 8456285,
                            "name": null,
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1273,
                                "end": 1274
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 4261540,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1282,
                                                "end": 1284
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1276,
                                            "end": 1285
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1276,
                                    "end": 1285
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1274,
                                "end": 1286
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1263,
                            "end": 1286
                        },
                        "flags": 1258,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 32768,
                        "end": 1286
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 1258,
                "end": 1286
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1253,
            "end": 1286
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "L2",
                            "rawText": "L2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1290,
                            "end": 1293
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 8456285,
                            "name": null,
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "L2A1",
                                            "rawText": "L2A1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1306,
                                            "end": 1310
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 1311,
                                            "end": 1317
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 1306,
                                        "end": 1317
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1306,
                                "end": 1318
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "L2A1",
                                                "rawText": "L2A1",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1327,
                                                "end": 1332
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1320,
                                            "end": 1333
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1320,
                                    "end": 1333
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1318,
                                "end": 1335
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1295,
                            "end": 1335
                        },
                        "flags": 1290,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 32768,
                        "end": 1335
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 1290,
                "end": 1335
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1286,
            "end": 1335
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "L3",
                            "rawText": "L3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1339,
                            "end": 1342
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 8456285,
                            "name": null,
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "L3A1",
                                            "rawText": "L3A1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1355,
                                            "end": 1359
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 4261540,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1360,
                                            "end": 1361
                                        },
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 1355,
                                        "end": 1361
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "L3A2",
                                            "rawText": "L3A2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1362,
                                            "end": 1366
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 196712,
                                            "text": "L3A1",
                                            "rawText": "L3A1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1367,
                                            "end": 1371
                                        },
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 1362,
                                        "end": 1371
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1355,
                                "end": 1372
                            },
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
                                                    "kind": 196712,
                                                    "text": "L3A1",
                                                    "rawText": "L3A1",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1380,
                                                    "end": 1385
                                                },
                                                "operator": "+",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "L3A2",
                                                    "rawText": "L3A2",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1387,
                                                    "end": 1392
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1380,
                                                "end": 1392
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1374,
                                            "end": 1393
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1374,
                                    "end": 1393
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1372,
                                "end": 1395
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1344,
                            "end": 1395
                        },
                        "flags": 1339,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 32768,
                        "end": 1395
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 1339,
                "end": 1395
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1335,
            "end": 1395
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "L4",
                            "rawText": "L4",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1399,
                            "end": 1402
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 8456285,
                            "name": null,
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "L4A1",
                                            "rawText": "L4A1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1415,
                                            "end": 1419
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 1420,
                                            "end": 1426
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 1415,
                                        "end": 1426
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "L4A2",
                                            "rawText": "L4A2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1427,
                                            "end": 1431
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 1433,
                                            "end": 1439
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 1427,
                                        "end": 1439
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1415,
                                "end": 1440
                            },
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
                                                    "kind": 196712,
                                                    "text": "L4A1",
                                                    "rawText": "L4A1",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1449,
                                                    "end": 1454
                                                },
                                                "operator": "+",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "L4A2",
                                                    "rawText": "L4A2",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1456,
                                                    "end": 1461
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1449,
                                                "end": 1461
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1442,
                                            "end": 1462
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1442,
                                    "end": 1462
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1440,
                                "end": 1464
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1404,
                            "end": 1464
                        },
                        "flags": 1399,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 32768,
                        "end": 1464
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 1399,
                "end": 1464
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1395,
            "end": 1464
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "c1o1",
                            "rawText": "c1o1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1469,
                            "end": 1474
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "C1",
                                "rawText": "C1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1475,
                                "end": 1477
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1475,
                            "end": 1479
                        },
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "C1",
                                "rawText": "C1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1483,
                                "end": 1486
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 5,
                                        "rawText": "5",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1487,
                                        "end": 1488
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1487,
                                "end": 1488
                            },
                            "flags": 1479,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 1489
                        },
                        "flags": 1469,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1489
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1469,
                "end": 1489
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1464,
            "end": 1490
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "i1o1",
                            "rawText": "i1o1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1494,
                            "end": 1499
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "I1",
                                "rawText": "I1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1500,
                                "end": 1502
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1500,
                            "end": 1504
                        },
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "C1",
                                "rawText": "C1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1508,
                                "end": 1511
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 5,
                                        "rawText": "5",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1512,
                                        "end": 1513
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1512,
                                "end": 1513
                            },
                            "flags": 1504,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 1514
                        },
                        "flags": 1494,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1514
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1494,
                "end": 1514
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1490,
            "end": 1515
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c1o1",
                        "rawText": "c1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1515,
                        "end": 1529
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M1",
                        "rawText": "C1M1",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1530,
                        "end": 1534
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1529,
                    "end": 1534,
                    "period": {
                        "kind": 255,
                        "pos": 1529,
                        "end": 1530
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1536,
                    "end": 1536
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1534,
                "end": 1536
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1515,
            "end": 1537
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f1v1",
                            "rawText": "f1v1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1541,
                            "end": 1546
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "F1",
                                "rawText": "F1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1547,
                                "end": 1549
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1551,
                                "end": 1551
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1549,
                            "end": 1551
                        },
                        "flags": 1541,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1551
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1541,
                "end": 1551
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1537,
            "end": 1552
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "l1v1",
                            "rawText": "l1v1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1556,
                            "end": 1561
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "L1",
                                "rawText": "L1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1562,
                                "end": 1564
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1566,
                                "end": 1566
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1564,
                            "end": 1566
                        },
                        "flags": 1556,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1566
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1556,
                "end": 1566
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1552,
            "end": 1567
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c1o1",
                        "rawText": "c1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1567,
                        "end": 1582
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M2",
                        "rawText": "C1M2",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1583,
                        "end": 1587
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1582,
                    "end": 1587,
                    "period": {
                        "kind": 255,
                        "pos": 1582,
                        "end": 1583
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1588,
                            "end": 1589
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1589,
                    "end": 1590
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1587,
                "end": 1590
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1567,
            "end": 1591
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "i1o1",
                        "rawText": "i1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1591,
                        "end": 1596
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M2",
                        "rawText": "C1M2",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1597,
                        "end": 1601
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1596,
                    "end": 1601,
                    "period": {
                        "kind": 255,
                        "pos": 1596,
                        "end": 1597
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1602,
                            "end": 1603
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1603,
                    "end": 1604
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1601,
                "end": 1604
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1591,
            "end": 1605
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f2v1",
                            "rawText": "f2v1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1609,
                            "end": 1614
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "F2",
                                "rawText": "F2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1615,
                                "end": 1617
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1618,
                                        "end": 1619
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1619,
                                "end": 1620
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1617,
                            "end": 1620
                        },
                        "flags": 1609,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1620
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1609,
                "end": 1620
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1605,
            "end": 1621
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "l2v1",
                            "rawText": "l2v1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1625,
                            "end": 1630
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "L2",
                                "rawText": "L2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1631,
                                "end": 1633
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1634,
                                        "end": 1635
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1635,
                                "end": 1636
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1633,
                            "end": 1636
                        },
                        "flags": 1625,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1636
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1625,
                "end": 1636
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1621,
            "end": 1637
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c1o1",
                        "rawText": "c1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1637,
                        "end": 1652
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M3",
                        "rawText": "C1M3",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1653,
                        "end": 1657
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1652,
                    "end": 1657,
                    "period": {
                        "kind": 255,
                        "pos": 1652,
                        "end": 1653
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1658,
                            "end": 1659
                        },
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1660,
                            "end": 1661
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1659,
                    "end": 1662
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1657,
                "end": 1662
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1637,
            "end": 1663
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "i1o1",
                        "rawText": "i1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1663,
                        "end": 1668
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M3",
                        "rawText": "C1M3",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1669,
                        "end": 1673
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1668,
                    "end": 1673,
                    "period": {
                        "kind": 255,
                        "pos": 1668,
                        "end": 1669
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1674,
                            "end": 1675
                        },
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1676,
                            "end": 1677
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1675,
                    "end": 1678
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1673,
                "end": 1678
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1663,
            "end": 1679
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f3v1",
                            "rawText": "f3v1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1683,
                            "end": 1688
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "F3",
                                "rawText": "F3",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1689,
                                "end": 1691
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1692,
                                        "end": 1693
                                    },
                                    {
                                        "kind": 4261540,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1694,
                                        "end": 1695
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1693,
                                "end": 1696
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1691,
                            "end": 1696
                        },
                        "flags": 1683,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1696
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1683,
                "end": 1696
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1679,
            "end": 1697
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "l3v1",
                            "rawText": "l3v1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1701,
                            "end": 1706
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "L3",
                                "rawText": "L3",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1707,
                                "end": 1709
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1710,
                                        "end": 1711
                                    },
                                    {
                                        "kind": 4261540,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1712,
                                        "end": 1713
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1711,
                                "end": 1714
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1709,
                            "end": 1714
                        },
                        "flags": 1701,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1714
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1701,
                "end": 1714
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1697,
            "end": 1715
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c1o1",
                        "rawText": "c1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1715,
                        "end": 1730
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M4",
                        "rawText": "C1M4",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1731,
                        "end": 1735
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1730,
                    "end": 1735,
                    "period": {
                        "kind": 255,
                        "pos": 1730,
                        "end": 1731
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1736,
                            "end": 1737
                        },
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1738,
                            "end": 1739
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1737,
                    "end": 1740
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1735,
                "end": 1740
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1715,
            "end": 1741
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "i1o1",
                        "rawText": "i1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1741,
                        "end": 1746
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M4",
                        "rawText": "C1M4",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1747,
                        "end": 1751
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1746,
                    "end": 1751,
                    "period": {
                        "kind": 255,
                        "pos": 1746,
                        "end": 1747
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1752,
                            "end": 1753
                        },
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1754,
                            "end": 1755
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1753,
                    "end": 1756
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1751,
                "end": 1756
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1741,
            "end": 1757
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f4v1",
                            "rawText": "f4v1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1761,
                            "end": 1766
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "F4",
                                "rawText": "F4",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1767,
                                "end": 1769
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1770,
                                        "end": 1771
                                    },
                                    {
                                        "kind": 4261540,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1772,
                                        "end": 1773
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1771,
                                "end": 1774
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1769,
                            "end": 1774
                        },
                        "flags": 1761,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1774
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1761,
                "end": 1774
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1757,
            "end": 1775
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "l4v1",
                            "rawText": "l4v1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1779,
                            "end": 1784
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "L4",
                                "rawText": "L4",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1785,
                                "end": 1787
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1788,
                                        "end": 1789
                                    },
                                    {
                                        "kind": 4261540,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1790,
                                        "end": 1791
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1789,
                                "end": 1792
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1787,
                            "end": 1792
                        },
                        "flags": 1779,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1792
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1779,
                "end": 1792
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1775,
            "end": 1793
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c1o1",
                        "rawText": "c1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1793,
                        "end": 1808
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M3",
                        "rawText": "C1M3",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1809,
                        "end": 1813
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1808,
                    "end": 1813,
                    "period": {
                        "kind": 255,
                        "pos": 1808,
                        "end": 1809
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1814,
                            "end": 1815
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1815,
                    "end": 1816
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1813,
                "end": 1816
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1793,
            "end": 1817
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "i1o1",
                        "rawText": "i1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1817,
                        "end": 1822
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M3",
                        "rawText": "C1M3",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1823,
                        "end": 1827
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1822,
                    "end": 1827,
                    "period": {
                        "kind": 255,
                        "pos": 1822,
                        "end": 1823
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1828,
                            "end": 1829
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1829,
                    "end": 1830
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1827,
                "end": 1830
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1817,
            "end": 1831
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f3v2",
                            "rawText": "f3v2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1835,
                            "end": 1840
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "F3",
                                "rawText": "F3",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1841,
                                "end": 1843
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1844,
                                        "end": 1845
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1845,
                                "end": 1846
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1843,
                            "end": 1846
                        },
                        "flags": 1835,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1846
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1835,
                "end": 1846
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1831,
            "end": 1847
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "l3v2",
                            "rawText": "l3v2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1851,
                            "end": 1856
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "L3",
                                "rawText": "L3",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1857,
                                "end": 1859
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1860,
                                        "end": 1861
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1861,
                                "end": 1862
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1859,
                            "end": 1862
                        },
                        "flags": 1851,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1862
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1851,
                "end": 1862
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1847,
            "end": 1863
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c1o1",
                        "rawText": "c1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1863,
                        "end": 1878
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M3",
                        "rawText": "C1M3",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1879,
                        "end": 1883
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1878,
                    "end": 1883,
                    "period": {
                        "kind": 255,
                        "pos": 1878,
                        "end": 1879
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1885,
                    "end": 1885
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1883,
                "end": 1885
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1863,
            "end": 1886
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "i1o1",
                        "rawText": "i1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1886,
                        "end": 1891
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M3",
                        "rawText": "C1M3",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1892,
                        "end": 1896
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1891,
                    "end": 1896,
                    "period": {
                        "kind": 255,
                        "pos": 1891,
                        "end": 1892
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1898,
                    "end": 1898
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1896,
                "end": 1898
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1886,
            "end": 1899
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f3v3",
                            "rawText": "f3v3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1903,
                            "end": 1908
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "F3",
                                "rawText": "F3",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1909,
                                "end": 1911
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1913,
                                "end": 1913
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1911,
                            "end": 1913
                        },
                        "flags": 1903,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1913
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1903,
                "end": 1913
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1899,
            "end": 1914
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "l3v3",
                            "rawText": "l3v3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1918,
                            "end": 1923
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "L3",
                                "rawText": "L3",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1924,
                                "end": 1926
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1928,
                                "end": 1928
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1926,
                            "end": 1928
                        },
                        "flags": 1918,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1928
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1918,
                "end": 1928
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1914,
            "end": 1929
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c1o1",
                        "rawText": "c1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1929,
                        "end": 1944
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M4",
                        "rawText": "C1M4",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1945,
                        "end": 1949
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1944,
                    "end": 1949,
                    "period": {
                        "kind": 255,
                        "pos": 1944,
                        "end": 1945
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1950,
                            "end": 1951
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1951,
                    "end": 1952
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1949,
                "end": 1952
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1929,
            "end": 1953
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "i1o1",
                        "rawText": "i1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1953,
                        "end": 1958
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M4",
                        "rawText": "C1M4",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1959,
                        "end": 1963
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1958,
                    "end": 1963,
                    "period": {
                        "kind": 255,
                        "pos": 1958,
                        "end": 1959
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1964,
                            "end": 1965
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 1965,
                    "end": 1966
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1963,
                "end": 1966
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1953,
            "end": 1967
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f4v2",
                            "rawText": "f4v2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1971,
                            "end": 1976
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "F4",
                                "rawText": "F4",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1977,
                                "end": 1979
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1980,
                                        "end": 1981
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1981,
                                "end": 1982
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1979,
                            "end": 1982
                        },
                        "flags": 1971,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1982
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1971,
                "end": 1982
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1967,
            "end": 1983
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "l4v2",
                            "rawText": "l4v2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1987,
                            "end": 1992
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "L4",
                                "rawText": "L4",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1993,
                                "end": 1995
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1996,
                                        "end": 1997
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 1997,
                                "end": 1998
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1995,
                            "end": 1998
                        },
                        "flags": 1987,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1998
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1987,
                "end": 1998
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1983,
            "end": 1999
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c1o1",
                        "rawText": "c1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1999,
                        "end": 2055
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M1",
                        "rawText": "C1M1",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2056,
                        "end": 2060
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2055,
                    "end": 2060,
                    "period": {
                        "kind": 255,
                        "pos": 2055,
                        "end": 2056
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2061,
                            "end": 2062
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2062,
                    "end": 2063
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2060,
                "end": 2063
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1999,
            "end": 2064
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "i1o1",
                        "rawText": "i1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2064,
                        "end": 2069
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M1",
                        "rawText": "C1M1",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2070,
                        "end": 2074
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2069,
                    "end": 2074,
                    "period": {
                        "kind": 255,
                        "pos": 2069,
                        "end": 2070
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2075,
                            "end": 2076
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2076,
                    "end": 2077
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2074,
                "end": 2077
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2064,
            "end": 2078
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "F1",
                    "rawText": "F1",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2078,
                    "end": 2081
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2082,
                            "end": 2083
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2083,
                    "end": 2084
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2081,
                "end": 2084
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2078,
            "end": 2085
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "L1",
                    "rawText": "L1",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2085,
                    "end": 2088
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2089,
                            "end": 2090
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2090,
                    "end": 2091
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2088,
                "end": 2091
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2085,
            "end": 2092
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c1o1",
                        "rawText": "c1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2092,
                        "end": 2097
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M2",
                        "rawText": "C1M2",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2098,
                        "end": 2102
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2097,
                    "end": 2102,
                    "period": {
                        "kind": 255,
                        "pos": 2097,
                        "end": 2098
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2104,
                    "end": 2104
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2102,
                "end": 2104
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2092,
            "end": 2105
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "i1o1",
                        "rawText": "i1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2105,
                        "end": 2110
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M2",
                        "rawText": "C1M2",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2111,
                        "end": 2115
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2110,
                    "end": 2115,
                    "period": {
                        "kind": 255,
                        "pos": 2110,
                        "end": 2111
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2117,
                    "end": 2117
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2115,
                "end": 2117
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2105,
            "end": 2118
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "F2",
                    "rawText": "F2",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2118,
                    "end": 2121
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2123,
                    "end": 2123
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2121,
                "end": 2123
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2118,
            "end": 2124
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "L2",
                    "rawText": "L2",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2124,
                    "end": 2127
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2129,
                    "end": 2129
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2127,
                "end": 2129
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2124,
            "end": 2130
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c1o1",
                        "rawText": "c1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2130,
                        "end": 2135
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M2",
                        "rawText": "C1M2",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2136,
                        "end": 2140
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2135,
                    "end": 2140,
                    "period": {
                        "kind": 255,
                        "pos": 2135,
                        "end": 2136
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2141,
                            "end": 2142
                        },
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2143,
                            "end": 2144
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2142,
                    "end": 2145
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2140,
                "end": 2145
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2130,
            "end": 2146
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "i1o1",
                        "rawText": "i1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2146,
                        "end": 2151
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M2",
                        "rawText": "C1M2",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2152,
                        "end": 2156
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2151,
                    "end": 2156,
                    "period": {
                        "kind": 255,
                        "pos": 2151,
                        "end": 2152
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2157,
                            "end": 2158
                        },
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2159,
                            "end": 2160
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2158,
                    "end": 2161
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2156,
                "end": 2161
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2146,
            "end": 2162
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "F2",
                    "rawText": "F2",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2162,
                    "end": 2165
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2166,
                            "end": 2167
                        },
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2168,
                            "end": 2169
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2167,
                    "end": 2170
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2165,
                "end": 2170
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2162,
            "end": 2171
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "L2",
                    "rawText": "L2",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2171,
                    "end": 2174
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2175,
                            "end": 2176
                        },
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2177,
                            "end": 2178
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2176,
                    "end": 2179
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2174,
                "end": 2179
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2171,
            "end": 2180
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c1o1",
                        "rawText": "c1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2180,
                        "end": 2185
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M3",
                        "rawText": "C1M3",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2186,
                        "end": 2190
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2185,
                    "end": 2190,
                    "period": {
                        "kind": 255,
                        "pos": 2185,
                        "end": 2186
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2191,
                            "end": 2192
                        },
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2193,
                            "end": 2194
                        },
                        {
                            "kind": 4261540,
                            "text": 3,
                            "rawText": "3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2195,
                            "end": 2196
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2192,
                    "end": 2197
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2190,
                "end": 2197
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2180,
            "end": 2198
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "i1o1",
                        "rawText": "i1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2198,
                        "end": 2203
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M3",
                        "rawText": "C1M3",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2204,
                        "end": 2208
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2203,
                    "end": 2208,
                    "period": {
                        "kind": 255,
                        "pos": 2203,
                        "end": 2204
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2209,
                            "end": 2210
                        },
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2211,
                            "end": 2212
                        },
                        {
                            "kind": 4261540,
                            "text": 3,
                            "rawText": "3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2213,
                            "end": 2214
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2210,
                    "end": 2215
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2208,
                "end": 2215
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2198,
            "end": 2216
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "F3",
                    "rawText": "F3",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2216,
                    "end": 2219
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2220,
                            "end": 2221
                        },
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2222,
                            "end": 2223
                        },
                        {
                            "kind": 4261540,
                            "text": 3,
                            "rawText": "3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2224,
                            "end": 2225
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2221,
                    "end": 2226
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2219,
                "end": 2226
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2216,
            "end": 2227
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "L3",
                    "rawText": "L3",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2227,
                    "end": 2230
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2231,
                            "end": 2232
                        },
                        {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2233,
                            "end": 2234
                        },
                        {
                            "kind": 4261540,
                            "text": 3,
                            "rawText": "3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2235,
                            "end": 2236
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2232,
                    "end": 2237
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2230,
                "end": 2237
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2227,
            "end": 2238
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c1o1",
                        "rawText": "c1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2238,
                        "end": 2243
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M4",
                        "rawText": "C1M4",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2244,
                        "end": 2248
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2243,
                    "end": 2248,
                    "period": {
                        "kind": 255,
                        "pos": 2243,
                        "end": 2244
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2250,
                    "end": 2250
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2248,
                "end": 2250
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2238,
            "end": 2251
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "i1o1",
                        "rawText": "i1o1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2251,
                        "end": 2256
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "C1M4",
                        "rawText": "C1M4",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2257,
                        "end": 2261
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2256,
                    "end": 2261,
                    "period": {
                        "kind": 255,
                        "pos": 2256,
                        "end": 2257
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2263,
                    "end": 2263
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2261,
                "end": 2263
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2251,
            "end": 2264
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "F4",
                    "rawText": "F4",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2264,
                    "end": 2267
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2269,
                    "end": 2269
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2267,
                "end": 2269
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2264,
            "end": 2270
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "L4",
                    "rawText": "L4",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2270,
                    "end": 2273
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2275,
                    "end": 2275
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2273,
                "end": 2275
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2270,
            "end": 2276
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "fnOpt1",
                "rawText": "fnOpt1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 2286,
                "end": 2293
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "id",
                            "rawText": "id",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 2294,
                            "end": 2296
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 2297,
                            "end": 2304
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 2294,
                        "end": 2304
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "children",
                            "rawText": "children",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 2305,
                            "end": 2314
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 4202657,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 2315,
                                "end": 2322
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 2315,
                            "end": 2326
                        },
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2328,
                                "end": 2328
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2326,
                            "end": 2329
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 2305,
                        "end": 2329
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "expectedPath",
                            "rawText": "expectedPath",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 2330,
                            "end": 2343
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 4202657,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 2344,
                                "end": 2351
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 2344,
                            "end": 2355
                        },
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2357,
                                "end": 2357
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2355,
                            "end": 2358
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 2330,
                        "end": 2358
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "isRoot",
                            "rawText": "isRoot",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 2359,
                            "end": 2366
                        },
                        "isOptional": true,
                        "type": {
                            "kind": 4268070,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 2368,
                            "end": 2376
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 2359,
                        "end": 2376
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2294,
                "end": 2377
            },
            "type": {
                "kind": 4202742,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 2378,
                "end": 2383
            },
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2385,
                    "end": 2385
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 2383,
                "end": 2386
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 2276,
            "end": 2386
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "fnOpt2",
                "rawText": "fnOpt2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 2395,
                "end": 2402
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "id",
                            "rawText": "id",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 2403,
                            "end": 2405
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 2406,
                            "end": 2413
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 2403,
                        "end": 2413
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "children",
                            "rawText": "children",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 2414,
                            "end": 2423
                        },
                        "isOptional": true,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 4202657,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 2425,
                                "end": 2432
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 2425,
                            "end": 2435
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 2414,
                        "end": 2434
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "expectedPath",
                            "rawText": "expectedPath",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 2435,
                            "end": 2448
                        },
                        "isOptional": true,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 4202657,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 2450,
                                "end": 2457
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 2450,
                            "end": 2460
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 2435,
                        "end": 2459
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "isRoot",
                            "rawText": "isRoot",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 2460,
                            "end": 2467
                        },
                        "isOptional": true,
                        "type": {
                            "kind": 4268070,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 2469,
                            "end": 2477
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 2460,
                        "end": 2477
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2403,
                "end": 2478
            },
            "type": {
                "kind": 4202742,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 2479,
                "end": 2484
            },
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2486,
                    "end": 2486
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 2484,
                "end": 2487
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 2386,
            "end": 2487
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "fnOpt1",
                    "rawText": "fnOpt1",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2487,
                    "end": 2494
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2495,
                            "end": 2496
                        },
                        {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 2499,
                                        "end": 2500
                                    },
                                    {
                                        "kind": 4261540,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 2501,
                                        "end": 2503
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2499,
                                "end": 2503
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2497,
                            "end": 2504
                        },
                        {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 2507,
                                        "end": 2508
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2507,
                                "end": 2508
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2505,
                            "end": 2509
                        },
                        {
                            "kind": 4260391,
                            "text": true,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2510,
                            "end": 2515
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2496,
                    "end": 2516
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2494,
                "end": 2516
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2487,
            "end": 2517
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "fnOpt2",
                    "rawText": "fnOpt2",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2517,
                    "end": 2524
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2525,
                            "end": 2526
                        },
                        {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 2529,
                                        "end": 2530
                                    },
                                    {
                                        "kind": 4261540,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 2531,
                                        "end": 2533
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2529,
                                "end": 2533
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2527,
                            "end": 2534
                        },
                        {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 2537,
                                        "end": 2538
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2537,
                                "end": 2538
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2535,
                            "end": 2539
                        },
                        {
                            "kind": 4260391,
                            "text": true,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2540,
                            "end": 2545
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 2526,
                    "end": 2546
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2524,
                "end": 2546
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 2517,
            "end": 2547
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 2548
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

