# Kataw parser test case

## Input

`````js
class a {
    //constructor ();
    constructor (n: number);
    constructor (s: string);
    constructor (ns: any) {

    }

    public pgF() { }

    public pv;
    public get d() {
        return 30;
    }
    public set d(a: number) {
    }

    public static get p2() {
        return { x: 30, y: 40 };
    }

    private static d2() {
    }
    private static get p3() {
        return "string";
    }
    private pv3;

    private foo(n: number): string;
    private foo(s: string): string;
    private foo(ns: any) {
        return ns.toString();
    }
}

declare class aAmbient {
    constructor (n: number);
    constructor (s: string);
    public pgF(): void;
    public pv;
    public d : number;
    static p2 : { x: number; y: number; };
    static d2();
    static p3;
    private pv3;
    private foo(s);
}

class d {
    private foo(n: number): string;
    private foo(s: string): string;
    private foo(ns: any) {
        return ns.toString();
    }
}

class e {
    private foo(s: string): string;
    private foo(n: number): string;
    private foo(ns: any) {
        return ns.toString();
    }
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class a {\n    //constructor ();\n    constructor (n: number);\n    constructor (s: string);\n    constructor (ns: any) {\n\n    }\n\n    public pgF() { }\n\n    public pv;\n    public get d() {\n        return 30;\n    }\n    public set d(a: number) {\n    }\n\n    public static get p2() {\n        return { x: 30, y: 40 };\n    }\n\n    private static d2() {\n    }\n    private static get p3() {\n        return \"string\";\n    }\n    private pv3;\n\n    private foo(n: number): string;\n    private foo(s: string): string;\n    private foo(ns: any) {\n        return ns.toString();\n    }\n}\n\ndeclare class aAmbient {\n    constructor (n: number);\n    constructor (s: string);\n    public pgF(): void;\n    public pv;\n    public d : number;\n    static p2 : { x: number; y: number; };\n    static d2();\n    static p3;\n    private pv3;\n    private foo(s);\n}\n\nclass d {\n    private foo(n: number): string;\n    private foo(s: string): string;\n    private foo(ns: any) {\n        return ns.toString();\n    }\n}\n\nclass e {\n    private foo(s: string): string;\n    private foo(n: number): string;\n    private foo(ns: any) {\n        return ns.toString();\n    }\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "a",
                    "rawText": "a",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 7
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
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 47
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "n",
                                                "rawText": "n",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 49,
                                                "end": 50
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 51,
                                                "end": 58
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 49,
                                            "end": 58
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 59
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 262144,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 60
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 60
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 76
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "s",
                                                "rawText": "s",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 78,
                                                "end": 79
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 80,
                                                "end": 87
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 78,
                                            "end": 87
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 88
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 262144,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 76,
                                "end": 89
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 60,
                            "end": 89
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 89,
                                    "end": 105
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "ns",
                                                "rawText": "ns",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 107,
                                                "end": 109
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202498,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 110,
                                                "end": 114
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 107,
                                            "end": 114
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 107,
                                    "end": 115
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 117,
                                        "end": 117
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 115,
                                    "end": 124
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 262144,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 105,
                                "end": 124
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 89,
                            "end": 124
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
                                    "text": "pgF",
                                    "rawText": "pgF",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 136,
                                    "end": 140
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 141,
                                    "end": 142
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
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 144,
                                        "end": 144
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 142,
                                    "end": 146
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194494,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 124,
                                    "end": 136
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 140,
                                "end": 146
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 124,
                            "end": 146
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "pv",
                                "rawText": "pv",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 158,
                                "end": 161
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
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 146,
                                "end": 158
                            },
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 146,
                            "end": 162
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
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 177,
                                    "end": 179
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 180,
                                    "end": 181
                                },
                                "isSetter": false,
                                "isGetter": true,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 4261540,
                                                    "text": 30,
                                                    "rawText": "30",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 198,
                                                    "end": 201
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 183,
                                                "end": 202
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 183,
                                        "end": 202
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 181,
                                    "end": 208
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194494,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 162,
                                    "end": 173
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 179,
                                "end": 208
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 162,
                            "end": 208
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
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 223,
                                    "end": 225
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 226,
                                                "end": 227
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 228,
                                                "end": 235
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 226,
                                            "end": 235
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 226,
                                    "end": 236
                                },
                                "isSetter": true,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 238,
                                        "end": 238
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 236,
                                    "end": 244
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194494,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 208,
                                    "end": 219
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 225,
                                "end": 244
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 208,
                            "end": 244
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
                                    "text": "p2",
                                    "rawText": "p2",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 267,
                                    "end": 270
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 271,
                                    "end": 272
                                },
                                "isSetter": false,
                                "isGetter": true,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 67224232,
                                                    "propertyList": {
                                                        "kind": 65722,
                                                        "properties": [
                                                            {
                                                                "kind": 65721,
                                                                "left": {
                                                                    "kind": 196711,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 291,
                                                                    "end": 293
                                                                },
                                                                "right": {
                                                                    "kind": 4261540,
                                                                    "text": 30,
                                                                    "rawText": "30",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 294,
                                                                    "end": 297
                                                                },
                                                                "accessModifier": null,
                                                                "decorators": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 291,
                                                                "end": 297
                                                            },
                                                            {
                                                                "kind": 65721,
                                                                "left": {
                                                                    "kind": 196711,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 298,
                                                                    "end": 300
                                                                },
                                                                "right": {
                                                                    "kind": 4261540,
                                                                    "text": 40,
                                                                    "rawText": "40",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 301,
                                                                    "end": 304
                                                                },
                                                                "accessModifier": null,
                                                                "decorators": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 298,
                                                                "end": 304
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 291,
                                                        "end": 304
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 289,
                                                    "end": 306
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 274,
                                                "end": 307
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 274,
                                        "end": 307
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 272,
                                    "end": 313
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194494,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 244,
                                    "end": 256
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 270,
                                "end": 313
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 244,
                            "end": 313
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
                                    "text": "d2",
                                    "rawText": "d2",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 333,
                                    "end": 336
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 337,
                                    "end": 338
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 340,
                                        "end": 340
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 338,
                                    "end": 346
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 313,
                                    "end": 326
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 336,
                                "end": 346
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 313,
                            "end": 346
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
                                    "text": "p3",
                                    "rawText": "p3",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 369,
                                    "end": 372
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 373,
                                    "end": 374
                                },
                                "isSetter": false,
                                "isGetter": true,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 4261583,
                                                    "text": "string",
                                                    "rawText": "string",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 391,
                                                    "end": 400
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 376,
                                                "end": 401
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 376,
                                        "end": 401
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 374,
                                    "end": 407
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 346,
                                    "end": 358
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 372,
                                "end": 407
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 346,
                            "end": 407
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "pv3",
                                "rawText": "pv3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 419,
                                "end": 423
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
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 407,
                                "end": 419
                            },
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 407,
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 437,
                                    "end": 441
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "n",
                                                "rawText": "n",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 442,
                                                "end": 443
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 444,
                                                "end": 451
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 442,
                                            "end": 451
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 442,
                                    "end": 452
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 453,
                                    "end": 460
                                },
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 424,
                                    "end": 437
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 441,
                                "end": 461
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 424,
                            "end": 461
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 473,
                                    "end": 477
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "s",
                                                "rawText": "s",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 478,
                                                "end": 479
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 480,
                                                "end": 487
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 478,
                                            "end": 487
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 478,
                                    "end": 488
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 489,
                                    "end": 496
                                },
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 461,
                                    "end": 473
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 477,
                                "end": 497
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 461,
                            "end": 497
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 509,
                                    "end": 513
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "ns",
                                                "rawText": "ns",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 514,
                                                "end": 516
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202498,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 517,
                                                "end": 521
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 514,
                                            "end": 521
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 514,
                                    "end": 522
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
                                                    "kind": 66091,
                                                    "expression": {
                                                        "kind": 66232,
                                                        "member": {
                                                            "kind": 196712,
                                                            "text": "ns",
                                                            "rawText": "ns",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 539,
                                                            "end": 542
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "toString",
                                                            "rawText": "toString",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 543,
                                                            "end": 551
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 542,
                                                        "end": 551,
                                                        "period": {
                                                            "kind": 254,
                                                            "pos": 542,
                                                            "end": 543
                                                        }
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "start": 553,
                                                        "end": 553
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 551,
                                                    "end": 553
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 524,
                                                "end": 554
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 524,
                                        "end": 554
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 522,
                                    "end": 560
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 497,
                                    "end": 509
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 513,
                                "end": 560
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 497,
                            "end": 560
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 562
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 562
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "aAmbient",
                    "rawText": "aAmbient",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 577,
                    "end": 586
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
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 588,
                                    "end": 604
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "n",
                                                "rawText": "n",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 606,
                                                "end": 607
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 608,
                                                "end": 615
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 606,
                                            "end": 615
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 606,
                                    "end": 616
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 262144,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 604,
                                "end": 617
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 588,
                            "end": 617
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 617,
                                    "end": 633
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "s",
                                                "rawText": "s",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 635,
                                                "end": 636
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 637,
                                                "end": 644
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 635,
                                            "end": 644
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 635,
                                    "end": 645
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 262144,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 633,
                                "end": 646
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 617,
                            "end": 646
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
                                    "text": "pgF",
                                    "rawText": "pgF",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 657,
                                    "end": 661
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 662,
                                    "end": 663
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 664,
                                    "end": 669
                                },
                                "accessModifier": {
                                    "kind": 4194494,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 646,
                                    "end": 657
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 661,
                                "end": 670
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 646,
                            "end": 670
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "pv",
                                "rawText": "pv",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 681,
                                "end": 684
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
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 670,
                                "end": 681
                            },
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 670,
                            "end": 685
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "d",
                                "rawText": "d",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 696,
                                "end": 698
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
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 700,
                                "end": 707
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 685,
                                "end": 696
                            },
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 685,
                            "end": 708
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "p2",
                                "rawText": "p2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 719,
                                "end": 722
                            },
                            "isInKeyword": false,
                            "expression": null,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": {
                                "kind": 8422,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [
                                        {
                                            "kind": 8380,
                                            "name": {
                                                "kind": 196711,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 726,
                                                "end": 728
                                            },
                                            "isOptional": false,
                                            "accessModifier": null,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 729,
                                                "end": 736
                                            },
                                            "isStatic": false,
                                            "isReadOnly": false,
                                            "initializer": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 726,
                                            "end": 737
                                        },
                                        {
                                            "kind": 8380,
                                            "name": {
                                                "kind": 196711,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 737,
                                                "end": 739
                                            },
                                            "isOptional": false,
                                            "accessModifier": null,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 740,
                                                "end": 747
                                            },
                                            "isStatic": false,
                                            "isReadOnly": false,
                                            "initializer": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 737,
                                            "end": 748
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 726,
                                    "end": 750
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 724,
                                "end": 750
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": true,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 708,
                            "end": 751
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
                                    "text": "d2",
                                    "rawText": "d2",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 762,
                                    "end": 765
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 766,
                                    "end": 767
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 765,
                                "end": 768
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 751,
                            "end": 768
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "p3",
                                "rawText": "p3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 779,
                                "end": 782
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
                            "isStatic": true,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 768,
                            "end": 783
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "pv3",
                                "rawText": "pv3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 795,
                                "end": 799
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
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 783,
                                "end": 795
                            },
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 783,
                            "end": 800
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 812,
                                    "end": 816
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "s",
                                                "rawText": "s",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 817,
                                                "end": 818
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 817,
                                            "end": 818
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 817,
                                    "end": 819
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 800,
                                    "end": 812
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 816,
                                "end": 820
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 800,
                            "end": 820
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 588,
                    "end": 822
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 201342976,
                "intersects": false,
                "transformFlags": 1,
                "start": 571,
                "end": 822
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "d",
                    "rawText": "d",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 829,
                    "end": 831
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 845,
                                    "end": 849
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "n",
                                                "rawText": "n",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 850,
                                                "end": 851
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 852,
                                                "end": 859
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 850,
                                            "end": 859
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 850,
                                    "end": 860
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 861,
                                    "end": 868
                                },
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 833,
                                    "end": 845
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 849,
                                "end": 869
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 833,
                            "end": 869
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 881,
                                    "end": 885
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "s",
                                                "rawText": "s",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 886,
                                                "end": 887
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 888,
                                                "end": 895
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 886,
                                            "end": 895
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 886,
                                    "end": 896
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 897,
                                    "end": 904
                                },
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 869,
                                    "end": 881
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 885,
                                "end": 905
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 869,
                            "end": 905
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 917,
                                    "end": 921
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "ns",
                                                "rawText": "ns",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 922,
                                                "end": 924
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202498,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 925,
                                                "end": 929
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 922,
                                            "end": 929
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 922,
                                    "end": 930
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
                                                    "kind": 66091,
                                                    "expression": {
                                                        "kind": 66232,
                                                        "member": {
                                                            "kind": 196712,
                                                            "text": "ns",
                                                            "rawText": "ns",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 947,
                                                            "end": 950
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "toString",
                                                            "rawText": "toString",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 951,
                                                            "end": 959
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 950,
                                                        "end": 959,
                                                        "period": {
                                                            "kind": 254,
                                                            "pos": 950,
                                                            "end": 951
                                                        }
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "start": 961,
                                                        "end": 961
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 959,
                                                    "end": 961
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 932,
                                                "end": 962
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 932,
                                        "end": 962
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 930,
                                    "end": 968
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 905,
                                    "end": 917
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 921,
                                "end": 968
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 905,
                            "end": 968
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 833,
                    "end": 970
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 822,
                "end": 970
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "e",
                    "rawText": "e",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 977,
                    "end": 979
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 993,
                                    "end": 997
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "s",
                                                "rawText": "s",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 998,
                                                "end": 999
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1000,
                                                "end": 1007
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 998,
                                            "end": 1007
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 998,
                                    "end": 1008
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 1009,
                                    "end": 1016
                                },
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 981,
                                    "end": 993
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 997,
                                "end": 1017
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 981,
                            "end": 1017
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1029,
                                    "end": 1033
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "n",
                                                "rawText": "n",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 1034,
                                                "end": 1035
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1036,
                                                "end": 1043
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 1034,
                                            "end": 1043
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1034,
                                    "end": 1044
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": null,
                                "decorators": null,
                                "type": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 1045,
                                    "end": 1052
                                },
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 1017,
                                    "end": 1029
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1033,
                                "end": 1053
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 1017,
                            "end": 1053
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1065,
                                    "end": 1069
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "ns",
                                                "rawText": "ns",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 1070,
                                                "end": 1072
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202498,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1073,
                                                "end": 1077
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 1070,
                                            "end": 1077
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1070,
                                    "end": 1078
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
                                                    "kind": 66091,
                                                    "expression": {
                                                        "kind": 66232,
                                                        "member": {
                                                            "kind": 196712,
                                                            "text": "ns",
                                                            "rawText": "ns",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 1095,
                                                            "end": 1098
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "toString",
                                                            "rawText": "toString",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 1099,
                                                            "end": 1107
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 1098,
                                                        "end": 1107,
                                                        "period": {
                                                            "kind": 254,
                                                            "pos": 1098,
                                                            "end": 1099
                                                        }
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "start": 1109,
                                                        "end": 1109
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 1107,
                                                    "end": 1109
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 1080,
                                                "end": 1110
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 1080,
                                        "end": 1110
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1078,
                                    "end": 1116
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 1053,
                                    "end": 1065
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1069,
                                "end": 1116
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 1053,
                            "end": 1116
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 981,
                    "end": 1118
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 970,
                "end": 1118
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 1118
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 1118
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

