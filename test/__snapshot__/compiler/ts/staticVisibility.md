# Kataw parser test case

## Input

`````js

class C1 {

    p: any;
    static s: any;

    constructor() {
        var v = 0;

        s = 1;

        b();
    }

    static b() {
        v = 1;
        this.p = 0;
        C1.s = 1;
    }
}

class C2 {

barback:string = "";

static get Bar() {return "bar";} // ok

static set Bar(bar:string) {barback = bar;} // not ok

}

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\nclass C1 {\n\n    p: any;\n    static s: any;\n\n    constructor() {\n        var v = 0;\n\n        s = 1;\n\n        b();\n    }\n\n    static b() {\n        v = 1;\n        this.p = 0;\n        C1.s = 1;\n    }\n}\n\nclass C2 {\n\nbarback:string = \"\";\n\nstatic get Bar() {return \"bar\";} // ok\n\nstatic set Bar(bar:string) {barback = bar;} // not ok\n\n}\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C1",
                    "rawText": "C1",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 6,
                    "end": 9
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "p",
                                "rawText": "p",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 18
                            },
                            "isInKeyword": false,
                            "expression": null,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 19,
                                "end": 23
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 11,
                            "end": 24
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "s",
                                "rawText": "s",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 37
                            },
                            "isInKeyword": false,
                            "expression": null,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 38,
                                "end": 42
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": true,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 24,
                            "end": 43
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
                                    "start": 43,
                                    "end": 60
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 61,
                                    "end": 62
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097397,
                                                "declarationList": {
                                                    "kind": 244,
                                                    "declarations": [
                                                        {
                                                            "kind": 243,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "v",
                                                                "rawText": "v",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "start": 76,
                                                                "end": 78
                                                            },
                                                            "exclamation": false,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 4261540,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 80,
                                                                "end": 82
                                                            },
                                                            "flags": 76,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 0,
                                                            "end": 82
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 76,
                                                    "end": 82
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 64,
                                                "end": 83
                                            },
                                            {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 65550,
                                                    "left": {
                                                        "kind": 196712,
                                                        "text": "s",
                                                        "rawText": "s",
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 83,
                                                        "end": 94
                                                    },
                                                    "operator": "=",
                                                    "right": {
                                                        "kind": 4261540,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 96,
                                                        "end": 98
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 83,
                                                    "end": 98
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 83,
                                                "end": 99
                                            },
                                            {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 66091,
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 99,
                                                        "end": 110
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "start": 112,
                                                        "end": 112
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 110,
                                                    "end": 112
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 99,
                                                "end": 113
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 64,
                                        "end": 113
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 62,
                                    "end": 119
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 262144,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 119
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 43,
                            "end": 119
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
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 131,
                                    "end": 133
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 134,
                                    "end": 135
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
                                                        "kind": 196712,
                                                        "text": "v",
                                                        "rawText": "v",
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 137,
                                                        "end": 147
                                                    },
                                                    "operator": "=",
                                                    "right": {
                                                        "kind": 4261540,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 149,
                                                        "end": 151
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 137,
                                                    "end": 151
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 137,
                                                "end": 152
                                            },
                                            {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 65550,
                                                    "left": {
                                                        "kind": 66232,
                                                        "member": {
                                                            "kind": 4260571,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 152,
                                                            "end": 165
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "p",
                                                            "rawText": "p",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 166,
                                                            "end": 167
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 165,
                                                        "end": 167,
                                                        "period": {
                                                            "kind": 254,
                                                            "pos": 165,
                                                            "end": 166
                                                        }
                                                    },
                                                    "operator": "=",
                                                    "right": {
                                                        "kind": 4261540,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 169,
                                                        "end": 171
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 152,
                                                    "end": 171
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 152,
                                                "end": 172
                                            },
                                            {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 65550,
                                                    "left": {
                                                        "kind": 66232,
                                                        "member": {
                                                            "kind": 196712,
                                                            "text": "C1",
                                                            "rawText": "C1",
                                                            "flags": 16384,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 172,
                                                            "end": 183
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "s",
                                                            "rawText": "s",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 184,
                                                            "end": 185
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 183,
                                                        "end": 185,
                                                        "period": {
                                                            "kind": 254,
                                                            "pos": 183,
                                                            "end": 184
                                                        }
                                                    },
                                                    "operator": "=",
                                                    "right": {
                                                        "kind": 4261540,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 187,
                                                        "end": 189
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 172,
                                                    "end": 189
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 172,
                                                "end": 190
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 137,
                                        "end": 190
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 135,
                                    "end": 196
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 133,
                                "end": 196
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 119,
                            "end": 196
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 11,
                    "end": 198
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 198
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C2",
                    "rawText": "C2",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 205,
                    "end": 208
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "barback",
                                "rawText": "barback",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 210,
                                "end": 219
                            },
                            "isInKeyword": false,
                            "expression": null,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 220,
                                "end": 226
                            },
                            "initializer": {
                                "kind": 4261583,
                                "text": "",
                                "rawText": "",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 228,
                                "end": 231
                            },
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 210,
                            "end": 232
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
                                    "text": "Bar",
                                    "rawText": "Bar",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 244,
                                    "end": 248
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 249,
                                    "end": 250
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
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 258,
                                                    "end": 264
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 252,
                                                "end": 265
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 252,
                                        "end": 265
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 250,
                                    "end": 266
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 248,
                                "end": 266
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 232,
                            "end": 266
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
                                    "text": "Bar",
                                    "rawText": "Bar",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 284,
                                    "end": 288
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 289,
                                                "end": 292
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 293,
                                                "end": 299
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 289,
                                            "end": 299
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 289,
                                    "end": 300
                                },
                                "isSetter": true,
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
                                                        "kind": 196712,
                                                        "text": "barback",
                                                        "rawText": "barback",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 302,
                                                        "end": 309
                                                    },
                                                    "operator": "=",
                                                    "right": {
                                                        "kind": 196712,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 311,
                                                        "end": 315
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 302,
                                                    "end": 315
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 302,
                                                "end": 316
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 302,
                                        "end": 316
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 300,
                                    "end": 317
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 288,
                                "end": 317
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 266,
                            "end": 317
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 210,
                    "end": 330
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 198,
                "end": 330
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 330
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 331
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

