# Kataw parser test case

## Input

`````js
// Class with protected members
class C1 {
    protected x: number;
    protected static sx: number;
    protected f() {
        return this.x;
    }
    protected static sf() {
        return this.sx;
    }
}

// Derived class accessing protected members
class C2 extends C1 {
    protected f() {
        return super.f() + this.x;
    }
    protected static sf() {
        return super.sf() + this.sx;
    }
}

// Derived class making protected members public
class C3 extends C2 {
    x: number;
    static sx: number;
    f() {
        return super.f();
    }
    static sf() {
        return super.sf();
    }
}

var c1: C1;
var c2: C2;
var c3: C3;

// All of these should be errors
c1.x;
c1.f();
C1.sx;
C1.sf();

// All of these should be errors
c2.x;
c2.f();
C2.sx;
C2.sf();

// All of these should be ok
c3.x;
c3.f();
C3.sx;
C3.sf();

class A {
    protected x;
}

class B extends A {
    y;
}

class C extends A {
    z;
    static foo(a: A, b: B, c: C, d: D, e: E) {
        a.x = 1;  // Error, access must be through C or type derived from C
        b.x = 1;  // Error, access must be through C or type derived from C
        c.x = 1;
        d.x = 1;
        e.x = 1;
    }
}

class D extends C {
    d;
}

interface E extends C {
    e;
}

class CC {
    protected constructor() {
    }
}

class A1 {
    protected x;
}
class B1 {
    x;
}
var a1: A1;
var b1: B1;
a1 = b1;  // Error, B1 doesn't derive from A1
b1 = a1;  // Error, x is protected in A1 but public in B1

class A2 {
    protected x;
}
class B2 extends A2 {
    x;
}

class A3 {
    x;
}
// Error x is protected in B3 but public in A3
class B3 extends A3 {
    protected x;
}


`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "// Class with protected members\nclass C1 {\n    protected x: number;\n    protected static sx: number;\n    protected f() {\n        return this.x;\n    }\n    protected static sf() {\n        return this.sx;\n    }\n}\n\n// Derived class accessing protected members\nclass C2 extends C1 {\n    protected f() {\n        return super.f() + this.x;\n    }\n    protected static sf() {\n        return super.sf() + this.sx;\n    }\n}\n\n// Derived class making protected members public\nclass C3 extends C2 {\n    x: number;\n    static sx: number;\n    f() {\n        return super.f();\n    }\n    static sf() {\n        return super.sf();\n    }\n}\n\nvar c1: C1;\nvar c2: C2;\nvar c3: C3;\n\n// All of these should be errors\nc1.x;\nc1.f();\nC1.sx;\nC1.sf();\n\n// All of these should be errors\nc2.x;\nc2.f();\nC2.sx;\nC2.sf();\n\n// All of these should be ok\nc3.x;\nc3.f();\nC3.sx;\nC3.sf();\n\nclass A {\n    protected x;\n}\n\nclass B extends A {\n    y;\n}\n\nclass C extends A {\n    z;\n    static foo(a: A, b: B, c: C, d: D, e: E) {\n        a.x = 1;  // Error, access must be through C or type derived from C\n        b.x = 1;  // Error, access must be through C or type derived from C\n        c.x = 1;\n        d.x = 1;\n        e.x = 1;\n    }\n}\n\nclass D extends C {\n    d;\n}\n\ninterface E extends C {\n    e;\n}\n\nclass CC {\n    protected constructor() {\n    }\n}\n\nclass A1 {\n    protected x;\n}\nclass B1 {\n    x;\n}\nvar a1: A1;\nvar b1: B1;\na1 = b1;  // Error, B1 doesn't derive from A1\nb1 = a1;  // Error, x is protected in A1 but public in B1\n\nclass A2 {\n    protected x;\n}\nclass B2 extends A2 {\n    x;\n}\n\nclass A3 {\n    x;\n}\n// Error x is protected in B3 but public in A3\nclass B3 extends A3 {\n    protected x;\n}\n\n",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C1",
                "rawText": "C1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 37,
                "end": 40
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 56,
                            "end": 58
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
                            "start": 59,
                            "end": 66
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194493,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 42,
                            "end": 56
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 42,
                        "end": 67
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "sx",
                            "rawText": "sx",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 88,
                            "end": 91
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
                            "start": 92,
                            "end": 99
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194493,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 67,
                            "end": 81
                        },
                        "isStatic": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 67,
                        "end": 100
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
                                "text": "f",
                                "rawText": "f",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 116
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 117,
                                "end": 118
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
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 4260571,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 135,
                                                    "end": 140
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 141,
                                                    "end": 142
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 140,
                                                "end": 142,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 140,
                                                    "end": 141
                                                }
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 120,
                                            "end": 143
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 120,
                                    "end": 143
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 118,
                                "end": 149
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194493,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 100,
                                "end": 114
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 116,
                            "end": 149
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 100,
                        "end": 149
                    },
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "sf",
                                "rawText": "sf",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 170,
                                "end": 173
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 174,
                                "end": 175
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
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 4260571,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 192,
                                                    "end": 197
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "sx",
                                                    "rawText": "sx",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 198,
                                                    "end": 200
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 197,
                                                "end": 200,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 197,
                                                    "end": 198
                                                }
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 177,
                                            "end": 201
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 177,
                                    "end": 201
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 175,
                                "end": 207
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194493,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 149,
                                "end": 163
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 173,
                            "end": 207
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 149,
                        "end": 207
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 42,
                "end": 209
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 209
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
                "start": 261,
                "end": 264
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
                    "start": 272,
                    "end": 275
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 272,
                "end": 275
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
                                "text": "f",
                                "rawText": "f",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 291,
                                "end": 293
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 294,
                                "end": 295
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
                                                    "kind": 1073807915,
                                                    "expression": {
                                                        "kind": 67175096,
                                                        "member": {
                                                            "kind": 4260561,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 312,
                                                            "end": 318
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "f",
                                                            "rawText": "f",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 319,
                                                            "end": 320
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 318,
                                                        "end": 320,
                                                        "period": {
                                                            "kind": 255,
                                                            "pos": 318,
                                                            "end": 319
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
                                                        "start": 322,
                                                        "end": 322
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 320,
                                                    "end": 322
                                                },
                                                "operator": "+",
                                                "right": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 4260571,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 324,
                                                        "end": 329
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 330,
                                                        "end": 331
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 329,
                                                    "end": 331,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 329,
                                                        "end": 330
                                                    }
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 312,
                                                "end": 331
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 297,
                                            "end": 332
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 297,
                                    "end": 332
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 295,
                                "end": 338
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194493,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 277,
                                "end": 291
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 293,
                            "end": 338
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 277,
                        "end": 338
                    },
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "sf",
                                "rawText": "sf",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 359,
                                "end": 362
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 363,
                                "end": 364
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
                                                    "kind": 1073807915,
                                                    "expression": {
                                                        "kind": 67175096,
                                                        "member": {
                                                            "kind": 4260561,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 381,
                                                            "end": 387
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "sf",
                                                            "rawText": "sf",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 388,
                                                            "end": 390
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 387,
                                                        "end": 390,
                                                        "period": {
                                                            "kind": 255,
                                                            "pos": 387,
                                                            "end": 388
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
                                                        "start": 392,
                                                        "end": 392
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 390,
                                                    "end": 392
                                                },
                                                "operator": "+",
                                                "right": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 4260571,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 394,
                                                        "end": 399
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "sx",
                                                        "rawText": "sx",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 400,
                                                        "end": 402
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 399,
                                                    "end": 402,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 399,
                                                        "end": 400
                                                    }
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 381,
                                                "end": 402
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 366,
                                            "end": 403
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 366,
                                    "end": 403
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 364,
                                "end": 409
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194493,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 338,
                                "end": 352
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 362,
                            "end": 409
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 338,
                        "end": 409
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 277,
                "end": 411
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 209,
            "end": 411
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C3",
                "rawText": "C3",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 467,
                "end": 470
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "C2",
                    "rawText": "C2",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 478,
                    "end": 481
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 478,
                "end": 481
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 483,
                            "end": 489
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
                            "start": 490,
                            "end": 497
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 483,
                        "end": 498
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "sx",
                            "rawText": "sx",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 509,
                            "end": 512
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
                            "start": 513,
                            "end": 520
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 498,
                        "end": 521
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
                                "text": "f",
                                "rawText": "f",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 521,
                                "end": 527
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 528,
                                "end": 529
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
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 4260561,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 546,
                                                        "end": 552
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 553,
                                                        "end": 554
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 552,
                                                    "end": 554,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 552,
                                                        "end": 553
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
                                                    "start": 556,
                                                    "end": 556
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 554,
                                                "end": 556
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 531,
                                            "end": 557
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 531,
                                    "end": 557
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 529,
                                "end": 563
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 527,
                            "end": 563
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 521,
                        "end": 563
                    },
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "sf",
                                "rawText": "sf",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 574,
                                "end": 577
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 578,
                                "end": 579
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
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 4260561,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 596,
                                                        "end": 602
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "sf",
                                                        "rawText": "sf",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 603,
                                                        "end": 605
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 602,
                                                    "end": 605,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 602,
                                                        "end": 603
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
                                                    "start": 607,
                                                    "end": 607
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 605,
                                                "end": 607
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 581,
                                            "end": 608
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 581,
                                    "end": 608
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 579,
                                "end": 614
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 577,
                            "end": 614
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 563,
                        "end": 614
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 483,
                "end": 616
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 411,
            "end": 616
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
                            "text": "c1",
                            "rawText": "c1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 621,
                            "end": 624
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
                                "start": 625,
                                "end": 628
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 625,
                            "end": 629
                        },
                        "initializer": null,
                        "flags": 621,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 628
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 621,
                "end": 628
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 616,
            "end": 629
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
                            "text": "c2",
                            "rawText": "c2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 633,
                            "end": 636
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "C2",
                                "rawText": "C2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 637,
                                "end": 640
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 637,
                            "end": 641
                        },
                        "initializer": null,
                        "flags": 633,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 640
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 633,
                "end": 640
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 629,
            "end": 641
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
                            "text": "c3",
                            "rawText": "c3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 645,
                            "end": 648
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "C3",
                                "rawText": "C3",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 649,
                                "end": 652
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 649,
                            "end": 653
                        },
                        "initializer": null,
                        "flags": 645,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 652
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 645,
                "end": 652
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 641,
            "end": 653
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 196712,
                    "text": "c1",
                    "rawText": "c1",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 653,
                    "end": 690
                },
                "expression": {
                    "kind": 196711,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 691,
                    "end": 692
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 690,
                "end": 692,
                "period": {
                    "kind": 255,
                    "pos": 690,
                    "end": 691
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 653,
            "end": 693
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c1",
                        "rawText": "c1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 693,
                        "end": 696
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "f",
                        "rawText": "f",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 697,
                        "end": 698
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 696,
                    "end": 698,
                    "period": {
                        "kind": 255,
                        "pos": 696,
                        "end": 697
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
                    "start": 700,
                    "end": 700
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 698,
                "end": 700
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 693,
            "end": 701
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 196712,
                    "text": "C1",
                    "rawText": "C1",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 701,
                    "end": 704
                },
                "expression": {
                    "kind": 196711,
                    "text": "sx",
                    "rawText": "sx",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 705,
                    "end": 707
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 704,
                "end": 707,
                "period": {
                    "kind": 255,
                    "pos": 704,
                    "end": 705
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 701,
            "end": 708
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "C1",
                        "rawText": "C1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 708,
                        "end": 711
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "sf",
                        "rawText": "sf",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 712,
                        "end": 714
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 711,
                    "end": 714,
                    "period": {
                        "kind": 255,
                        "pos": 711,
                        "end": 712
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
                    "start": 716,
                    "end": 716
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 714,
                "end": 716
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 708,
            "end": 717
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 196712,
                    "text": "c2",
                    "rawText": "c2",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 717,
                    "end": 754
                },
                "expression": {
                    "kind": 196711,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 755,
                    "end": 756
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 754,
                "end": 756,
                "period": {
                    "kind": 255,
                    "pos": 754,
                    "end": 755
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 717,
            "end": 757
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c2",
                        "rawText": "c2",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 757,
                        "end": 760
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "f",
                        "rawText": "f",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 761,
                        "end": 762
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 760,
                    "end": 762,
                    "period": {
                        "kind": 255,
                        "pos": 760,
                        "end": 761
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
                    "start": 764,
                    "end": 764
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 762,
                "end": 764
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 757,
            "end": 765
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 196712,
                    "text": "C2",
                    "rawText": "C2",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 765,
                    "end": 768
                },
                "expression": {
                    "kind": 196711,
                    "text": "sx",
                    "rawText": "sx",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 769,
                    "end": 771
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 768,
                "end": 771,
                "period": {
                    "kind": 255,
                    "pos": 768,
                    "end": 769
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 765,
            "end": 772
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "C2",
                        "rawText": "C2",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 772,
                        "end": 775
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "sf",
                        "rawText": "sf",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 776,
                        "end": 778
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 775,
                    "end": 778,
                    "period": {
                        "kind": 255,
                        "pos": 775,
                        "end": 776
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
                    "start": 780,
                    "end": 780
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 778,
                "end": 780
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 772,
            "end": 781
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 196712,
                    "text": "c3",
                    "rawText": "c3",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 781,
                    "end": 814
                },
                "expression": {
                    "kind": 196711,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 815,
                    "end": 816
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 814,
                "end": 816,
                "period": {
                    "kind": 255,
                    "pos": 814,
                    "end": 815
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 781,
            "end": 817
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "c3",
                        "rawText": "c3",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 817,
                        "end": 820
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "f",
                        "rawText": "f",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 821,
                        "end": 822
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 820,
                    "end": 822,
                    "period": {
                        "kind": 255,
                        "pos": 820,
                        "end": 821
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
                    "start": 824,
                    "end": 824
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 822,
                "end": 824
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 817,
            "end": 825
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 196712,
                    "text": "C3",
                    "rawText": "C3",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 825,
                    "end": 828
                },
                "expression": {
                    "kind": 196711,
                    "text": "sx",
                    "rawText": "sx",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 829,
                    "end": 831
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 828,
                "end": 831,
                "period": {
                    "kind": 255,
                    "pos": 828,
                    "end": 829
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 825,
            "end": 832
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "C3",
                        "rawText": "C3",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 832,
                        "end": 835
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "sf",
                        "rawText": "sf",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 836,
                        "end": 838
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 835,
                    "end": 838,
                    "period": {
                        "kind": 255,
                        "pos": 835,
                        "end": 836
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
                    "start": 840,
                    "end": 840
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 838,
                "end": 840
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 832,
            "end": 841
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 848,
                "end": 850
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 866,
                            "end": 868
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194493,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 852,
                            "end": 866
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 852,
                        "end": 869
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 852,
                "end": 871
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 841,
            "end": 871
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "B",
                "rawText": "B",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 878,
                "end": 880
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 888,
                    "end": 890
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 888,
                "end": 890
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "y",
                            "rawText": "y",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 892,
                            "end": 898
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 892,
                        "end": 899
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 892,
                "end": 901
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 871,
            "end": 901
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C",
                "rawText": "C",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 908,
                "end": 910
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 918,
                    "end": 920
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 918,
                "end": 920
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "z",
                            "rawText": "z",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 922,
                            "end": 928
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 922,
                        "end": 929
                    },
                    {
                        "kind": 49,
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 940,
                                "end": 944
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 945,
                                            "end": 946
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 947,
                                                "end": 949
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 947,
                                            "end": 950
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 945,
                                        "end": 949
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 950,
                                            "end": 952
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "B",
                                                "rawText": "B",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 953,
                                                "end": 955
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 953,
                                            "end": 956
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 950,
                                        "end": 955
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 956,
                                            "end": 958
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 959,
                                                "end": 961
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 959,
                                            "end": 962
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 956,
                                        "end": 961
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 962,
                                            "end": 964
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "D",
                                                "rawText": "D",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 965,
                                                "end": 967
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 965,
                                            "end": 968
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 962,
                                        "end": 967
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 968,
                                            "end": 970
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "E",
                                                "rawText": "E",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 971,
                                                "end": 973
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 971,
                                            "end": 974
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 968,
                                        "end": 973
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 945,
                                "end": 974
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
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 976,
                                                        "end": 986
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 987,
                                                        "end": 988
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 986,
                                                    "end": 988,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 986,
                                                        "end": 987
                                                    }
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 990,
                                                    "end": 992
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 976,
                                                "end": 992
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 976,
                                            "end": 993
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 993,
                                                        "end": 1062
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 1063,
                                                        "end": 1064
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1062,
                                                    "end": 1064,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 1062,
                                                        "end": 1063
                                                    }
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1066,
                                                    "end": 1068
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 993,
                                                "end": 1068
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 993,
                                            "end": 1069
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 1069,
                                                        "end": 1138
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 1139,
                                                        "end": 1140
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1138,
                                                    "end": 1140,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 1138,
                                                        "end": 1139
                                                    }
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1142,
                                                    "end": 1144
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1069,
                                                "end": 1144
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1069,
                                            "end": 1145
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "d",
                                                        "rawText": "d",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 1145,
                                                        "end": 1155
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 1156,
                                                        "end": 1157
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1155,
                                                    "end": 1157,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 1155,
                                                        "end": 1156
                                                    }
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1159,
                                                    "end": 1161
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1145,
                                                "end": 1161
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1145,
                                            "end": 1162
                                        },
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "e",
                                                        "rawText": "e",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 1162,
                                                        "end": 1172
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 1173,
                                                        "end": 1174
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1172,
                                                    "end": 1174,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 1172,
                                                        "end": 1173
                                                    }
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1176,
                                                    "end": 1178
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1162,
                                                "end": 1178
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1162,
                                            "end": 1179
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 976,
                                    "end": 1179
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 974,
                                "end": 1185
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 944,
                            "end": 1185
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 929,
                        "end": 1185
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 922,
                "end": 1187
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 901,
            "end": 1187
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "D",
                "rawText": "D",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1194,
                "end": 1196
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1204,
                    "end": 1206
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1204,
                "end": 1206
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "d",
                            "rawText": "d",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1208,
                            "end": 1214
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 1208,
                        "end": 1215
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 1208,
                "end": 1217
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 1187,
            "end": 1217
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "E",
                "rawText": "E",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1228,
                "end": 1230
            },
            "typeParameters": null,
            "heritageClauses": {
                "kind": 8294,
                "clauses": [
                    {
                        "kind": 8293,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "C",
                                "rawText": "C",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1238,
                                "end": 1240
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1238,
                            "end": 1242
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 1238,
                        "end": 1240
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 1238,
                "end": 1240
            },
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "e",
                            "rawText": "e",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1242,
                            "end": 1248
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": null,
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 1242,
                        "end": 1249
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 1242,
                "end": 1249
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 1217,
            "end": 1251
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "CC",
                "rawText": "CC",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1258,
                "end": 1261
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
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1277,
                                "end": 1289
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1290,
                                "end": 1291
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1293,
                                    "end": 1293
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1291,
                                "end": 1299
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194493,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 1263,
                                "end": 1277
                            },
                            "typeParameters": null,
                            "flags": 524288,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1289,
                            "end": 1299
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 1263,
                        "end": 1299
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 1263,
                "end": 1301
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 1251,
            "end": 1301
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A1",
                "rawText": "A1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1308,
                "end": 1311
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1327,
                            "end": 1329
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194493,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1313,
                            "end": 1327
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 1313,
                        "end": 1330
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 1313,
                "end": 1332
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 1301,
            "end": 1332
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "B1",
                "rawText": "B1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1338,
                "end": 1341
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1343,
                            "end": 1349
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 1343,
                        "end": 1350
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 1343,
                "end": 1352
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 1332,
            "end": 1352
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
                            "text": "a1",
                            "rawText": "a1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1356,
                            "end": 1359
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "A1",
                                "rawText": "A1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1360,
                                "end": 1363
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1360,
                            "end": 1364
                        },
                        "initializer": null,
                        "flags": 1356,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1363
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1356,
                "end": 1363
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1352,
            "end": 1364
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
                            "text": "b1",
                            "rawText": "b1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 1368,
                            "end": 1371
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "B1",
                                "rawText": "B1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1372,
                                "end": 1375
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1372,
                            "end": 1376
                        },
                        "initializer": null,
                        "flags": 1368,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1375
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1368,
                "end": 1375
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 1364,
            "end": 1376
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "a1",
                    "rawText": "a1",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1376,
                    "end": 1379
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "b1",
                    "rawText": "b1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1381,
                    "end": 1384
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1376,
                "end": 1384
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1376,
            "end": 1385
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "b1",
                    "rawText": "b1",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1385,
                    "end": 1425
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "a1",
                    "rawText": "a1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1427,
                    "end": 1430
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1385,
                "end": 1430
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1385,
            "end": 1431
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A2",
                "rawText": "A2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1487,
                "end": 1490
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1506,
                            "end": 1508
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194493,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1492,
                            "end": 1506
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 1492,
                        "end": 1509
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 1492,
                "end": 1511
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 1431,
            "end": 1511
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "B2",
                "rawText": "B2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1517,
                "end": 1520
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "A2",
                    "rawText": "A2",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1528,
                    "end": 1531
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1528,
                "end": 1531
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1533,
                            "end": 1539
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 1533,
                        "end": 1540
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 1533,
                "end": 1542
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 1511,
            "end": 1542
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A3",
                "rawText": "A3",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1549,
                "end": 1552
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1554,
                            "end": 1560
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 1554,
                        "end": 1561
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 1554,
                "end": 1563
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 1542,
            "end": 1563
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "B3",
                "rawText": "B3",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 1616,
                "end": 1619
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "A3",
                    "rawText": "A3",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1627,
                    "end": 1630
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1627,
                "end": 1630
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1646,
                            "end": 1648
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194493,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1632,
                            "end": 1646
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 1632,
                        "end": 1649
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 1632,
                "end": 1651
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 1563,
            "end": 1651
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
    "end": 1653
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

