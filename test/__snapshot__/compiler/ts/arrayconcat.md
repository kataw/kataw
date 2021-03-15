# Kataw parser test case

## Input

`````js
interface IOptions {
    name?: string;
    flag?: boolean;
    short?: string;
    usage?: string;
    set?: (s: string) => void;
    type?: string;
    experimental?: boolean;
}

class parser {
@{x9}@public options: IOptions[];

@{x9}@public m() {
@{x9}@@{x9}@this.options = this.options.sort(function(a, b) {
            var aName = a.name.toLowerCase();
            var bName = b.name.toLowerCase();

            if (aName > bName) {
                return 1;
            } else if (aName < bName) {
                return -1;
            } else {
                return 0;
            }
        });
@{x9}@}
}

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface IOptions {\n    name?: string;\n    flag?: boolean;\n    short?: string;\n    usage?: string;\n    set?: (s: string) => void;\n    type?: string;\n    experimental?: boolean;\n}\n\nclass parser {\n\tpublic options: IOptions[];\n\n\tpublic m() {\n\t\tthis.options = this.options.sort(function(a, b) {\n            var aName = a.name.toLowerCase();\n            var bName = b.name.toLowerCase();\n\n            if (aName > bName) {\n                return 1;\n            } else if (aName < bName) {\n                return -1;\n            } else {\n                return 0;\n            }\n        });\n\t}\n}\n",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "IOptions",
                "rawText": "IOptions",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 18
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "name",
                            "rawText": "name",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 29
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 31,
                            "end": 38
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 20,
                        "end": 39
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "flag",
                            "rawText": "flag",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 48
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 4268070,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 50,
                            "end": 58
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 39,
                        "end": 59
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "short",
                            "rawText": "short",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 59,
                            "end": 69
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 71,
                            "end": 78
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 59,
                        "end": 79
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "usage",
                            "rawText": "usage",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 79,
                            "end": 89
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 91,
                            "end": 98
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 79,
                        "end": 99
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "set",
                            "rawText": "set",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 99,
                            "end": 107
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 8287,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134226095,
                                "parameterList": [
                                    {
                                        "kind": 134226094,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "s",
                                            "rawText": "s",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 111,
                                            "end": 112
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 113,
                                            "end": 120
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 111,
                                        "end": 120
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 111,
                                "end": 120
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 124,
                                "end": 129
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 109,
                            "end": 129
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 99,
                        "end": 130
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "type",
                            "rawText": "type",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 130,
                            "end": 139
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 141,
                            "end": 148
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 130,
                        "end": 149
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "experimental",
                            "rawText": "experimental",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 149,
                            "end": 166
                        },
                        "isOptional": true,
                        "accessModifier": null,
                        "type": {
                            "kind": 4268070,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 168,
                            "end": 176
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 149,
                        "end": 177
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 20,
                "end": 177
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 179
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "parser",
                "rawText": "parser",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 186,
                "end": 193
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
                            "text": "options",
                            "rawText": "options",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 203,
                            "end": 211
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "IOptions",
                                    "rawText": "IOptions",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 212,
                                    "end": 221
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 212,
                                "end": 222
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 212,
                            "end": 224
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 195,
                            "end": 203
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 195,
                        "end": 224
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
                                "text": "m",
                                "rawText": "m",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 233,
                                "end": 235
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 236,
                                "end": 237
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
                                                        "kind": 4260571,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 239,
                                                        "end": 246
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "options",
                                                        "rawText": "options",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 247,
                                                        "end": 254
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 246,
                                                    "end": 254,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 246,
                                                        "end": 247
                                                    }
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 1073807915,
                                                    "expression": {
                                                        "kind": 67175096,
                                                        "member": {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 4260571,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 256,
                                                                "end": 261
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "options",
                                                                "rawText": "options",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 262,
                                                                "end": 269
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 261,
                                                            "end": 269,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 261,
                                                                "end": 262
                                                            }
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "sort",
                                                            "rawText": "sort",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 270,
                                                            "end": 274
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 269,
                                                        "end": 274,
                                                        "period": {
                                                            "kind": 255,
                                                            "pos": 269,
                                                            "end": 270
                                                        }
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [
                                                            {
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
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 1025,
                                                                                "start": 284,
                                                                                "end": 285
                                                                            },
                                                                            "isOptional": false,
                                                                            "type": null,
                                                                            "initializer": null,
                                                                            "decorators": null,
                                                                            "accessModifier": null,
                                                                            "isReadOnly": false,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 1,
                                                                            "start": 284,
                                                                            "end": 285
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
                                                                                "start": 286,
                                                                                "end": 288
                                                                            },
                                                                            "isOptional": false,
                                                                            "type": null,
                                                                            "initializer": null,
                                                                            "decorators": null,
                                                                            "accessModifier": null,
                                                                            "isReadOnly": false,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 1,
                                                                            "start": 286,
                                                                            "end": 288
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 284,
                                                                    "end": 289
                                                                },
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
                                                                                            "kind": 16627,
                                                                                            "binding": {
                                                                                                "kind": 131102,
                                                                                                "text": "aName",
                                                                                                "rawText": "aName",
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 1025,
                                                                                                "start": 307,
                                                                                                "end": 313
                                                                                            },
                                                                                            "exclamation": false,
                                                                                            "type": null,
                                                                                            "initializer": {
                                                                                                "kind": 1073807915,
                                                                                                "expression": {
                                                                                                    "kind": 67175096,
                                                                                                    "member": {
                                                                                                        "kind": 67175096,
                                                                                                        "member": {
                                                                                                            "kind": 196712,
                                                                                                            "text": "a",
                                                                                                            "rawText": "a",
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 315,
                                                                                                            "end": 317
                                                                                                        },
                                                                                                        "expression": {
                                                                                                            "kind": 196711,
                                                                                                            "text": "name",
                                                                                                            "rawText": "name",
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 318,
                                                                                                            "end": 322
                                                                                                        },
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 317,
                                                                                                        "end": 322,
                                                                                                        "period": {
                                                                                                            "kind": 255,
                                                                                                            "pos": 317,
                                                                                                            "end": 318
                                                                                                        }
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 196711,
                                                                                                        "text": "toLowerCase",
                                                                                                        "rawText": "toLowerCase",
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 323,
                                                                                                        "end": 334
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 322,
                                                                                                    "end": 334,
                                                                                                    "period": {
                                                                                                        "kind": 255,
                                                                                                        "pos": 322,
                                                                                                        "end": 323
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
                                                                                                    "start": 336,
                                                                                                    "end": 336
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 334,
                                                                                                "end": 336
                                                                                            },
                                                                                            "flags": 307,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 0,
                                                                                            "end": 336
                                                                                        }
                                                                                    ],
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 307,
                                                                                    "end": 336
                                                                                },
                                                                                "flags": 32768,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 291,
                                                                                "end": 337
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
                                                                                                "text": "bName",
                                                                                                "rawText": "bName",
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 1025,
                                                                                                "start": 353,
                                                                                                "end": 359
                                                                                            },
                                                                                            "exclamation": false,
                                                                                            "type": null,
                                                                                            "initializer": {
                                                                                                "kind": 1073807915,
                                                                                                "expression": {
                                                                                                    "kind": 67175096,
                                                                                                    "member": {
                                                                                                        "kind": 67175096,
                                                                                                        "member": {
                                                                                                            "kind": 196712,
                                                                                                            "text": "b",
                                                                                                            "rawText": "b",
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 361,
                                                                                                            "end": 363
                                                                                                        },
                                                                                                        "expression": {
                                                                                                            "kind": 196711,
                                                                                                            "text": "name",
                                                                                                            "rawText": "name",
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 364,
                                                                                                            "end": 368
                                                                                                        },
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 363,
                                                                                                        "end": 368,
                                                                                                        "period": {
                                                                                                            "kind": 255,
                                                                                                            "pos": 363,
                                                                                                            "end": 364
                                                                                                        }
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 196711,
                                                                                                        "text": "toLowerCase",
                                                                                                        "rawText": "toLowerCase",
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 369,
                                                                                                        "end": 380
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 368,
                                                                                                    "end": 380,
                                                                                                    "period": {
                                                                                                        "kind": 255,
                                                                                                        "pos": 368,
                                                                                                        "end": 369
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
                                                                                                    "start": 382,
                                                                                                    "end": 382
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 380,
                                                                                                "end": 382
                                                                                            },
                                                                                            "flags": 353,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 0,
                                                                                            "end": 382
                                                                                        }
                                                                                    ],
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 353,
                                                                                    "end": 382
                                                                                },
                                                                                "flags": 32768,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 337,
                                                                                "end": 383
                                                                            },
                                                                            {
                                                                                "kind": 2097257,
                                                                                "expression": {
                                                                                    "kind": 65563,
                                                                                    "left": {
                                                                                        "kind": 196712,
                                                                                        "text": "aName",
                                                                                        "rawText": "aName",
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 401,
                                                                                        "end": 406
                                                                                    },
                                                                                    "operator": ">",
                                                                                    "right": {
                                                                                        "kind": 196712,
                                                                                        "text": "bName",
                                                                                        "rawText": "bName",
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 408,
                                                                                        "end": 414
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 401,
                                                                                    "end": 414
                                                                                },
                                                                                "consequent": {
                                                                                    "kind": 2099237,
                                                                                    "block": {
                                                                                        "kind": 2084,
                                                                                        "statements": [
                                                                                            {
                                                                                                "kind": 2097346,
                                                                                                "expression": {
                                                                                                    "kind": 4261540,
                                                                                                    "text": 1,
                                                                                                    "rawText": "1",
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 440,
                                                                                                    "end": 442
                                                                                                },
                                                                                                "flags": 32768,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 417,
                                                                                                "end": 443
                                                                                            }
                                                                                        ],
                                                                                        "multiline": true,
                                                                                        "flags": 32768,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 417,
                                                                                        "end": 443
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 415,
                                                                                    "end": 457
                                                                                },
                                                                                "alternate": {
                                                                                    "kind": 2097257,
                                                                                    "expression": {
                                                                                        "kind": 65563,
                                                                                        "left": {
                                                                                            "kind": 196712,
                                                                                            "text": "aName",
                                                                                            "rawText": "aName",
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 467,
                                                                                            "end": 472
                                                                                        },
                                                                                        "operator": "<",
                                                                                        "right": {
                                                                                            "kind": 196712,
                                                                                            "text": "bName",
                                                                                            "rawText": "bName",
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 474,
                                                                                            "end": 480
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 467,
                                                                                        "end": 480
                                                                                    },
                                                                                    "consequent": {
                                                                                        "kind": 2099237,
                                                                                        "block": {
                                                                                            "kind": 2084,
                                                                                            "statements": [
                                                                                                {
                                                                                                    "kind": 2097346,
                                                                                                    "expression": {
                                                                                                        "kind": 65774,
                                                                                                        "operator": "-",
                                                                                                        "operand": {
                                                                                                            "kind": 4261540,
                                                                                                            "text": 1,
                                                                                                            "rawText": "1",
                                                                                                            "flags": 0,
                                                                                                            "symbol": null,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 508,
                                                                                                            "end": 509
                                                                                                        },
                                                                                                        "flags": 0,
                                                                                                        "symbol": null,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 506,
                                                                                                        "end": 509
                                                                                                    },
                                                                                                    "flags": 32768,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 483,
                                                                                                    "end": 510
                                                                                                }
                                                                                            ],
                                                                                            "multiline": true,
                                                                                            "flags": 32768,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 483,
                                                                                            "end": 510
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "symbol": null,
                                                                                        "transformFlags": 0,
                                                                                        "start": 481,
                                                                                        "end": 524
                                                                                    },
                                                                                    "alternate": {
                                                                                        "kind": 2099237,
                                                                                        "block": {
                                                                                            "kind": 2084,
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
                                                                                        "end": 571
                                                                                    },
                                                                                    "isWebCompat": true,
                                                                                    "flags": 32768,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 462,
                                                                                    "end": 571
                                                                                },
                                                                                "isWebCompat": true,
                                                                                "flags": 32768,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 383,
                                                                                "end": 571
                                                                            }
                                                                        ],
                                                                        "multiline": true,
                                                                        "flags": 32768,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 291,
                                                                        "end": 571
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 289,
                                                                    "end": 581
                                                                },
                                                                "typeParameters": null,
                                                                "type": null,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 275,
                                                                "end": 581
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "start": 283,
                                                        "end": 582
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 274,
                                                    "end": 582
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 239,
                                                "end": 582
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 239,
                                            "end": 583
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 239,
                                    "end": 583
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 237,
                                "end": 586
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 224,
                                "end": 233
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 235,
                            "end": 586
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 224,
                        "end": 586
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 195,
                "end": 588
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 179,
            "end": 588
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
    "end": 589
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

