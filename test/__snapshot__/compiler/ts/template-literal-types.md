# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
let x: `foo-${infer bar}`;
type HelloWorld = `${Hello}, ${World}`
type SeussFish = `${Quantity | Color} fish`;
declare function setAlignment(value: `${VerticalAlignment}-${HorizontalAlignment}`): void;
type PropEventSource<T> = {
  on(eventName: `${string & keyof T}Changed`, callback: () => void): void;
};
type PropEventSource<T> = {
  on<K extends string & keyof T>
    (eventName: `${K}Changed`, callback: (newValue: T[K]) => void ): void;
};
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "let x: `foo-${infer bar}`;\ntype HelloWorld = `${Hello}, ${World}`\ntype SeussFish = `${Quantity | Color} fish`;\ndeclare function setAlignment(value: `${VerticalAlignment}-${HorizontalAlignment}`): void;\ntype PropEventSource<T> = {\n  on(eventName: `${string & keyof T}Changed`, callback: () => void): void;\n};\ntype PropEventSource<T> = {\n  on<K extends string & keyof T>\n    (eventName: `${K}Changed`, callback: (newValue: T[K]) => void ): void;\n};",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 5
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8409,
                                "spans": [
                                    {
                                        "kind": 8410,
                                        "type": {
                                            "kind": 8310,
                                            "typeParameter": {
                                                "kind": 8424,
                                                "name": {
                                                    "kind": 196712,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 19,
                                                    "end": 23
                                                },
                                                "constraint": null,
                                                "defaultType": null,
                                                "expression": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 19,
                                                "end": 23
                                            },
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 14,
                                            "end": 23
                                        },
                                        "rawText": "foo-",
                                        "text": "foo-",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 6,
                                        "end": 23
                                    }
                                ],
                                "tail": {
                                    "kind": 4260568,
                                    "rawText": "",
                                    "text": "",
                                    "literal": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 23,
                                    "end": 25
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 6,
                                "end": 25
                            },
                            "initializer": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 25
                        }
                    ],
                    "flags": 65552,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 25
                },
                "flags": 81936,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 26
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "HelloWorld",
                    "rawText": "HelloWorld",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 42
                },
                "type": {
                    "kind": 8409,
                    "spans": [
                        {
                            "kind": 8410,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Hello",
                                    "rawText": "Hello",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 53
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 48,
                                "end": 54
                            },
                            "rawText": "",
                            "text": "",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 44,
                            "end": 53
                        },
                        {
                            "kind": 8410,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "World",
                                    "rawText": "World",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 58,
                                    "end": 63
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 58,
                                "end": 64
                            },
                            "rawText": ", ",
                            "text": ", ",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 53,
                            "end": 63
                        }
                    ],
                    "tail": {
                        "kind": 4260568,
                        "rawText": "",
                        "text": "",
                        "literal": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 63,
                        "end": 65
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 44,
                    "end": 65
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 26,
                "end": 65
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "SeussFish",
                    "rawText": "SeussFish",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 70,
                    "end": 80
                },
                "type": {
                    "kind": 8409,
                    "spans": [
                        {
                            "kind": 8410,
                            "type": {
                                "kind": 8432,
                                "types": [
                                    {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "Quantity",
                                            "rawText": "Quantity",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 86,
                                            "end": 94
                                        },
                                        "typeArguments": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 86,
                                        "end": 96
                                    },
                                    {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "Color",
                                            "rawText": "Color",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 96,
                                            "end": 102
                                        },
                                        "typeArguments": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 96,
                                        "end": 103
                                    }
                                ],
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 94,
                                "end": 102
                            },
                            "rawText": "",
                            "text": "",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 82,
                            "end": 102
                        }
                    ],
                    "tail": {
                        "kind": 4260568,
                        "rawText": " fish",
                        "text": " fish",
                        "literal": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 102,
                        "end": 109
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 82,
                    "end": 109
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 65,
                "end": 110
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "setAlignment",
                    "rawText": "setAlignment",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 127,
                    "end": 140
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "value",
                                "rawText": "value",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 141,
                                "end": 146
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8409,
                                "spans": [
                                    {
                                        "kind": 8410,
                                        "type": {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "VerticalAlignment",
                                                "rawText": "VerticalAlignment",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 151,
                                                "end": 168
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 151,
                                            "end": 169
                                        },
                                        "rawText": "",
                                        "text": "",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 147,
                                        "end": 168
                                    },
                                    {
                                        "kind": 8410,
                                        "type": {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "HorizontalAlignment",
                                                "rawText": "HorizontalAlignment",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 172,
                                                "end": 191
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 172,
                                            "end": 192
                                        },
                                        "rawText": "-",
                                        "text": "-",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 168,
                                        "end": 191
                                    }
                                ],
                                "tail": {
                                    "kind": 4260568,
                                    "rawText": "",
                                    "text": "",
                                    "literal": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 191,
                                    "end": 193
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 147,
                                "end": 193
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 141,
                            "end": 193
                        }
                    ],
                    "trailingComma": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 141,
                    "end": 194
                },
                "type": {
                    "kind": 4202742,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 195,
                    "end": 200
                },
                "contents": null,
                "typeParameters": null,
                "flags": 201408512,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 118,
                "end": 201
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "PropEventSource",
                    "rawText": "PropEventSource",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 206,
                    "end": 222
                },
                "type": {
                    "kind": 8422,
                    "objectTypeMembers": {
                        "kind": 169,
                        "members": [
                            {
                                "kind": 8339,
                                "name": {
                                    "kind": 196711,
                                    "text": "on",
                                    "rawText": "on",
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 229,
                                    "end": 234
                                },
                                "isStatic": false,
                                "isReadOnly": false,
                                "isOptional": false,
                                "accessModifier": null,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 8367,
                                    "parameterList": [
                                        {
                                            "kind": 8366,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "eventName",
                                                "rawText": "eventName",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 235,
                                                "end": 244
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 8409,
                                                "spans": [
                                                    {
                                                        "kind": 8410,
                                                        "type": {
                                                            "kind": 8312,
                                                            "types": [
                                                                {
                                                                    "kind": 4202702,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 2097152,
                                                                    "start": 249,
                                                                    "end": 255
                                                                },
                                                                {
                                                                    "kind": 8423,
                                                                    "operator": "keyof",
                                                                    "type": {
                                                                        "kind": 8428,
                                                                        "typeName": {
                                                                            "kind": 196711,
                                                                            "text": "T",
                                                                            "rawText": "T",
                                                                            "flags": 65536,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 263,
                                                                            "end": 265
                                                                        },
                                                                        "typeArguments": null,
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 2097152,
                                                                        "start": 263,
                                                                        "end": 266
                                                                    },
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 2097152,
                                                                    "start": 257,
                                                                    "end": 265
                                                                }
                                                            ],
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 255,
                                                            "end": 265
                                                        },
                                                        "rawText": "",
                                                        "text": "",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 245,
                                                        "end": 265
                                                    }
                                                ],
                                                "tail": {
                                                    "kind": 4260568,
                                                    "rawText": "Changed",
                                                    "text": "Changed",
                                                    "literal": false,
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 265,
                                                    "end": 274
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 245,
                                                "end": 274
                                            },
                                            "initializer": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 235,
                                            "end": 274
                                        },
                                        {
                                            "kind": 8366,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "callback",
                                                "rawText": "callback",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 275,
                                                "end": 284
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 8287,
                                                "typeParameters": null,
                                                "parameters": {
                                                    "kind": 8367,
                                                    "parameterList": [],
                                                    "trailingcomma": false,
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 287,
                                                    "end": 287
                                                },
                                                "returnType": {
                                                    "kind": 4202742,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 291,
                                                    "end": 296
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 285,
                                                "end": 296
                                            },
                                            "initializer": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 275,
                                            "end": 296
                                        }
                                    ],
                                    "trailingcomma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 235,
                                    "end": 296
                                },
                                "returnType": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 298,
                                    "end": 303
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 229,
                                "end": 304
                            }
                        ],
                        "multiline": true,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 229,
                        "end": 306
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 227,
                    "end": 306
                },
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 223,
                                "end": 224
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 223,
                            "end": 224
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 223,
                    "end": 224
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 201,
                "end": 307
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "PropEventSource",
                    "rawText": "PropEventSource",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 312,
                    "end": 328
                },
                "type": {
                    "kind": 8422,
                    "objectTypeMembers": {
                        "kind": 169,
                        "members": [
                            {
                                "kind": 8339,
                                "name": {
                                    "kind": 196711,
                                    "text": "on",
                                    "rawText": "on",
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 335,
                                    "end": 340
                                },
                                "isStatic": false,
                                "isReadOnly": false,
                                "isOptional": false,
                                "accessModifier": null,
                                "typeParameters": {
                                    "kind": 8425,
                                    "typeParameterList": [
                                        {
                                            "kind": 8424,
                                            "name": {
                                                "kind": 196711,
                                                "text": "K",
                                                "rawText": "K",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 341,
                                                "end": 342
                                            },
                                            "constraint": {
                                                "kind": 8312,
                                                "types": [
                                                    {
                                                        "kind": 4202702,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 350,
                                                        "end": 357
                                                    },
                                                    {
                                                        "kind": 8423,
                                                        "operator": "keyof",
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 365,
                                                                "end": 367
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 365,
                                                            "end": 368
                                                        },
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 359,
                                                        "end": 367
                                                    }
                                                ],
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 357,
                                                "end": 367
                                            },
                                            "defaultType": null,
                                            "expression": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 341,
                                            "end": 367
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 341,
                                    "end": 367
                                },
                                "parameters": {
                                    "kind": 8367,
                                    "parameterList": [
                                        {
                                            "kind": 8366,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "eventName",
                                                "rawText": "eventName",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 374,
                                                "end": 383
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 8409,
                                                "spans": [
                                                    {
                                                        "kind": 8410,
                                                        "type": {
                                                            "kind": 8428,
                                                            "typeName": {
                                                                "kind": 196711,
                                                                "text": "K",
                                                                "rawText": "K",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 388,
                                                                "end": 389
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 388,
                                                            "end": 390
                                                        },
                                                        "rawText": "",
                                                        "text": "",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 384,
                                                        "end": 389
                                                    }
                                                ],
                                                "tail": {
                                                    "kind": 4260568,
                                                    "rawText": "Changed",
                                                    "text": "Changed",
                                                    "literal": false,
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 389,
                                                    "end": 398
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 384,
                                                "end": 398
                                            },
                                            "initializer": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 374,
                                            "end": 398
                                        },
                                        {
                                            "kind": 8366,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "callback",
                                                "rawText": "callback",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 399,
                                                "end": 408
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 8287,
                                                "typeParameters": null,
                                                "parameters": {
                                                    "kind": 8367,
                                                    "parameterList": [
                                                        {
                                                            "kind": 8366,
                                                            "ellipsis": false,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "newValue",
                                                                "rawText": "newValue",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "start": 411,
                                                                "end": 419
                                                            },
                                                            "isOptional": false,
                                                            "type": {
                                                                "kind": 8309,
                                                                "objectType": {
                                                                    "kind": 8428,
                                                                    "typeName": {
                                                                        "kind": 196711,
                                                                        "text": "T",
                                                                        "rawText": "T",
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 420,
                                                                        "end": 422
                                                                    },
                                                                    "typeArguments": null,
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 2097152,
                                                                    "start": 420,
                                                                    "end": 423
                                                                },
                                                                "indexType": {
                                                                    "kind": 8428,
                                                                    "typeName": {
                                                                        "kind": 196711,
                                                                        "text": "K",
                                                                        "rawText": "K",
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 423,
                                                                        "end": 424
                                                                    },
                                                                    "typeArguments": null,
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 2097152,
                                                                    "start": 423,
                                                                    "end": 425
                                                                },
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 420,
                                                                "end": 426
                                                            },
                                                            "initializer": null,
                                                            "accessModifier": null,
                                                            "isReadOnly": false,
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "start": 411,
                                                            "end": 425
                                                        }
                                                    ],
                                                    "trailingcomma": false,
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 411,
                                                    "end": 425
                                                },
                                                "returnType": {
                                                    "kind": 4202742,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 429,
                                                    "end": 434
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 409,
                                                "end": 434
                                            },
                                            "initializer": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 399,
                                            "end": 434
                                        }
                                    ],
                                    "trailingcomma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 374,
                                    "end": 434
                                },
                                "returnType": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 437,
                                    "end": 442
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 335,
                                "end": 443
                            }
                        ],
                        "multiline": true,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 335,
                        "end": 445
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 333,
                    "end": 445
                },
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 329,
                                "end": 330
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 329,
                            "end": 330
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 329,
                    "end": 330
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 307,
                "end": 446
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 446
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 446
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

