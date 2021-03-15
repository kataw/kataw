# Kataw parser test case

## Input

`````js

function Foo():Foo; // error
function Foo(s:string):Foo; // error
class Foo { // error
    bar1() { /*WScript.Echo("bar1");*/ }
    constructor(s: string);
    constructor(x: any) {
        // WScript.Echo("Constructor function has executed");
    }
}

var f1 = new Foo("hey");


f1.bar1();
Foo();
Foo("s");

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "\nfunction Foo():Foo; // error\nfunction Foo(s:string):Foo; // error\nclass Foo { // error\n    bar1() { /*WScript.Echo(\"bar1\");*/ }\n    constructor(s: string);\n    constructor(x: any) {\n        // WScript.Echo(\"Constructor function has executed\");\n    }\n}\n\nvar f1 = new Foo(\"hey\");\n\n\nf1.bar1();\nFoo();\nFoo(\"s\");\n",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 9,
                "end": 13
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 15
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 19
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 16,
                "end": 20
            },
            "contents": null,
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 20
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 38,
                "end": 42
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "s",
                            "rawText": "s",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 43,
                            "end": 44
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 45,
                            "end": 51
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 43,
                        "end": 51
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 43,
                "end": 52
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 56
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 53,
                "end": 57
            },
            "contents": null,
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 20,
            "end": 57
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 72,
                "end": 76
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
                                "text": "bar1",
                                "rawText": "bar1",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 78,
                                "end": 96
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 97,
                                "end": 98
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
                                    "start": 100,
                                    "end": 100
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 98,
                                "end": 128
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 96,
                            "end": 128
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 78,
                        "end": 128
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
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 128,
                                "end": 144
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "s",
                                            "rawText": "s",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 145,
                                            "end": 146
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 147,
                                            "end": 154
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 145,
                                        "end": 154
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 145,
                                "end": 155
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": null,
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 144,
                            "end": 156
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 128,
                        "end": 156
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
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 156,
                                "end": 172
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 173,
                                            "end": 174
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 175,
                                            "end": 179
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 173,
                                        "end": 179
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 173,
                                "end": 180
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
                                    "start": 182,
                                    "end": 182
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 180,
                                "end": 250
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 172,
                            "end": 250
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 156,
                        "end": 250
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 78,
                "end": 252
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 57,
            "end": 252
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
                            "text": "f1",
                            "rawText": "f1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 257,
                            "end": 260
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "Foo",
                                "rawText": "Foo",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 266,
                                "end": 270
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261583,
                                        "text": "hey",
                                        "rawText": "hey",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 271,
                                        "end": 276
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 271,
                                "end": 276
                            },
                            "flags": 262,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 277
                        },
                        "flags": 257,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 277
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 257,
                "end": 277
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 252,
            "end": 278
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "f1",
                        "rawText": "f1",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 278,
                        "end": 283
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "bar1",
                        "rawText": "bar1",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 284,
                        "end": 288
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 283,
                    "end": 288,
                    "period": {
                        "kind": 255,
                        "pos": 283,
                        "end": 284
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
                    "start": 290,
                    "end": 290
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 288,
                "end": 290
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 278,
            "end": 291
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 291,
                    "end": 295
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 297,
                    "end": 297
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 295,
                "end": 297
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 291,
            "end": 298
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 298,
                    "end": 302
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 4261583,
                            "text": "s",
                            "rawText": "s",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 303,
                            "end": 306
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 306,
                    "end": 307
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 302,
                "end": 307
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 298,
            "end": 308
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
    "end": 309
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

