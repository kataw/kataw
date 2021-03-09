# Kataw parser test case

## Input

`````js
module Test {

    export class Example {

        private someNumber: number;



        public doSomething() {

            var that = this;

            function innerFunction() {

                var num = that.someNumber;

            }

        }

    }

}



class C {

    private x: number;

    getX() { return this.x; }

    clone(other: C) {
        this.x = other.x;

    }
}

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "module Test {\n\n    export class Example {\n\n        private someNumber: number;\n\n\n\n        public doSomething() {\n\n            var that = this;\n\n            function innerFunction() {\n\n                var num = that.someNumber;\n\n            }\n\n        }\n\n    }\n\n}\n\n\n\nclass C {\n\n    private x: number;\n\n    getX() { return this.x; }\n\n    clone(other: C) {\n        this.x = other.x;\n\n    }\n}\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "module",
                    "rawText": "module",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "Test",
                    "rawText": "Test",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 11
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 11
            },
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 76,
                            "declaration": {
                                "kind": 48,
                                "name": {
                                    "kind": 131102,
                                    "text": "Example",
                                    "rawText": "Example",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 31,
                                    "end": 39
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
                                                "text": "someNumber",
                                                "rawText": "someNumber",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 58,
                                                "end": 69
                                            },
                                            "isAbstract": false,
                                            "isReadOnly": false,
                                            "isOptional": false,
                                            "exclamation": false,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 70,
                                                "end": 77
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": {
                                                "kind": 4194485,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 41,
                                                "end": 58
                                            },
                                            "isStatic": false,
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 524352,
                                            "start": 41,
                                            "end": 78
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
                                                    "text": "doSomething",
                                                    "rawText": "doSomething",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 96,
                                                    "end": 108
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 109,
                                                    "end": 110
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
                                                                                "text": "that",
                                                                                "rawText": "that",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 1025,
                                                                                "start": 129,
                                                                                "end": 134
                                                                            },
                                                                            "exclamation": false,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 4260571,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 136,
                                                                                "end": 141
                                                                            },
                                                                            "flags": 129,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 0,
                                                                            "end": 141
                                                                        }
                                                                    ],
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 129,
                                                                    "end": 141
                                                                },
                                                                "flags": 16384,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 112,
                                                                "end": 142
                                                            },
                                                            {
                                                                "kind": 264284,
                                                                "name": {
                                                                    "kind": 131102,
                                                                    "text": "innerFunction",
                                                                    "rawText": "innerFunction",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "start": 164,
                                                                    "end": 178
                                                                },
                                                                "formalParameters": {
                                                                    "kind": 90,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 179,
                                                                    "end": 180
                                                                },
                                                                "type": null,
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
                                                                                                "text": "num",
                                                                                                "rawText": "num",
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 1025,
                                                                                                "start": 203,
                                                                                                "end": 207
                                                                                            },
                                                                                            "exclamation": false,
                                                                                            "type": null,
                                                                                            "initializer": {
                                                                                                "kind": 66232,
                                                                                                "member": {
                                                                                                    "kind": 196712,
                                                                                                    "text": "that",
                                                                                                    "rawText": "that",
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 209,
                                                                                                    "end": 214
                                                                                                },
                                                                                                "expression": {
                                                                                                    "kind": 196711,
                                                                                                    "text": "someNumber",
                                                                                                    "rawText": "someNumber",
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 215,
                                                                                                    "end": 225
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "start": 214,
                                                                                                "end": 225,
                                                                                                "period": {
                                                                                                    "kind": 254,
                                                                                                    "pos": 214,
                                                                                                    "end": 215
                                                                                                }
                                                                                            },
                                                                                            "flags": 203,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 0,
                                                                                            "end": 225
                                                                                        }
                                                                                    ],
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 203,
                                                                                    "end": 225
                                                                                },
                                                                                "flags": 16384,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 182,
                                                                                "end": 226
                                                                            }
                                                                        ],
                                                                        "multiline": true,
                                                                        "flags": 16384,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 182,
                                                                        "end": 226
                                                                    },
                                                                    "flags": 16384,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 180,
                                                                    "end": 241
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 16384,
                                                                "intersects": false,
                                                                "transformFlags": 256,
                                                                "start": 142,
                                                                "end": 241
                                                            }
                                                        ],
                                                        "multiline": true,
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 112,
                                                        "end": 241
                                                    },
                                                    "flags": 16384,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 110,
                                                    "end": 252
                                                },
                                                "decorators": null,
                                                "type": null,
                                                "accessModifier": {
                                                    "kind": 4194494,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 78,
                                                    "end": 96
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 108,
                                                "end": 252
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 78,
                                            "end": 252
                                        }
                                    ],
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 41,
                                    "end": 259
                                },
                                "decorators": null,
                                "isAbstract": false,
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 25,
                                "end": 259
                            },
                            "namedExports": null,
                            "exportFromClause": null,
                            "fromClause": null,
                            "isTypeOnly": false,
                            "flags": 16386,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 259
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 259
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 11,
                "end": 262
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 271,
                    "end": 273
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
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 288,
                                "end": 290
                            },
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 291,
                                "end": 298
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 275,
                                "end": 288
                            },
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 275,
                            "end": 299
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
                                    "text": "getX",
                                    "rawText": "getX",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 299,
                                    "end": 309
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 310,
                                    "end": 311
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
                                                    "kind": 66232,
                                                    "member": {
                                                        "kind": 4260571,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 320,
                                                        "end": 325
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 326,
                                                        "end": 327
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 325,
                                                    "end": 327,
                                                    "period": {
                                                        "kind": 254,
                                                        "pos": 325,
                                                        "end": 326
                                                    }
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 313,
                                                "end": 328
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 313,
                                        "end": 328
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 311,
                                    "end": 330
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 309,
                                "end": 330
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 299,
                            "end": 330
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
                                    "text": "clone",
                                    "rawText": "clone",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 330,
                                    "end": 341
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "other",
                                                "rawText": "other",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 342,
                                                "end": 347
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 348,
                                                    "end": 350
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 348,
                                                "end": 351
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 342,
                                            "end": 350
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 342,
                                    "end": 351
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
                                                        "kind": 66232,
                                                        "member": {
                                                            "kind": 4260571,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 353,
                                                            "end": 366
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 367,
                                                            "end": 368
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 366,
                                                        "end": 368,
                                                        "period": {
                                                            "kind": 254,
                                                            "pos": 366,
                                                            "end": 367
                                                        }
                                                    },
                                                    "operator": "=",
                                                    "right": {
                                                        "kind": 66232,
                                                        "member": {
                                                            "kind": 196712,
                                                            "text": "other",
                                                            "rawText": "other",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 370,
                                                            "end": 376
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 377,
                                                            "end": 378
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 376,
                                                        "end": 378,
                                                        "period": {
                                                            "kind": 254,
                                                            "pos": 376,
                                                            "end": 377
                                                        }
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 353,
                                                    "end": 378
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 353,
                                                "end": 379
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 353,
                                        "end": 379
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 351,
                                    "end": 386
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 341,
                                "end": 386
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 330,
                            "end": 386
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 275,
                    "end": 388
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 262,
                "end": 388
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 388
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 19,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 389
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

