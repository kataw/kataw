# Kataw parser test case

## Input

`````js
declare var console: { log(msg?: string): void; };
var _i = "This is what I'd expect to see";
class Foo {
    constructor(...args: any[]) {
        console.log(_i); // This should result in error
    }
}
new Foo();
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "declare var console: { log(msg?: string): void; };\nvar _i = \"This is what I'd expect to see\";\nclass Foo {\n    constructor(...args: any[]) {\n        console.log(_i); // This should result in error\n    }\n}\nnew Foo();",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "console",
                            "rawText": "console",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 11,
                            "end": 19
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8339,
                                        "name": {
                                            "kind": 196711,
                                            "text": "log",
                                            "rawText": "log",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 26
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
                                                        "text": "msg",
                                                        "rawText": "msg",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 27,
                                                        "end": 30
                                                    },
                                                    "isOptional": true,
                                                    "type": {
                                                        "kind": 4202702,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 32,
                                                        "end": 39
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 27,
                                                    "end": 39
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 27,
                                            "end": 39
                                        },
                                        "returnType": {
                                            "kind": 4202742,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 41,
                                            "end": 46
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 22,
                                        "end": 47
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 22,
                                "end": 49
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 20,
                            "end": 49
                        },
                        "initializer": null,
                        "flags": 11,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 49
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 11,
                "end": 49
            },
            "flags": 402685952,
            "intersects": false,
            "transformFlags": 0,
            "start": 7,
            "end": 50
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
                            "text": "_i",
                            "rawText": "_i",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 54,
                            "end": 57
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261583,
                            "text": "This is what I'd expect to see",
                            "rawText": "This is what I'd expect to see",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 59,
                            "end": 92
                        },
                        "flags": 54,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 92
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 54,
                "end": 92
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 50,
            "end": 93
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 99,
                "end": 103
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
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 105,
                                "end": 121
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": true,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "args",
                                            "rawText": "args",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 125,
                                            "end": 129
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 4202498,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 130,
                                                "end": 134
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 130,
                                            "end": 137
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 4097,
                                        "start": 122,
                                        "end": 136
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 122,
                                "end": 137
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
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "console",
                                                        "rawText": "console",
                                                        "flags": 32768,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 139,
                                                        "end": 155
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "log",
                                                        "rawText": "log",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 156,
                                                        "end": 159
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 155,
                                                    "end": 159,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 155,
                                                        "end": 156
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 196712,
                                                            "text": "_i",
                                                            "rawText": "_i",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 160,
                                                            "end": 162
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "start": 162,
                                                    "end": 163
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 159,
                                                "end": 163
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 139,
                                            "end": 164
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 139,
                                    "end": 164
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 137,
                                "end": 201
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 121,
                            "end": 201
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 105,
                        "end": 201
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 105,
                "end": 203
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 93,
            "end": 203
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66204,
                "expression": {
                    "kind": 196712,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 207,
                    "end": 211
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "intersects": false,
                    "start": 212,
                    "end": 212
                },
                "flags": 203,
                "intersects": false,
                "transformFlags": 32,
                "start": 0,
                "end": 213
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 203,
            "end": 214
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 214
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

