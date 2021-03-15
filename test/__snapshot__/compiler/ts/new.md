# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
interface FooConstructor {
  new (
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    g: number,
    h: number
  ): Foo;
}

interface BarConstructor {
  new <A, B, C>(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    g: number,
    h: number
  ): Foo;
}

type BazConstructor = {
  new (
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    g: number,
    h: number
  ): Foo;
}


interface ConstructorBigGenerics {
  // comment
  new <AAAAAAAAAAAAAAAAAAAAAAAA, AAAAAAAAAAAAAAAAAAAAAAAA, AAAAAAAAAAAAAAAAAAAAAAAA>(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    g: number,
    h: number
  ): Foo;
}

interface ConstructorInline {
  // https://github.com/prettier/prettier/issues/2163
  (i): any;
}

interface TimerConstructor {
  // Line-splitting comment
  new (interval: number, callback: (handler: Timer) => void): Timer;
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface FooConstructor {\n  new (\n    a: number,\n    b: number,\n    c: number,\n    d: number,\n    e: number,\n    f: number,\n    g: number,\n    h: number\n  ): Foo;\n}\n\ninterface BarConstructor {\n  new <A, B, C>(\n    a: number,\n    b: number,\n    c: number,\n    d: number,\n    e: number,\n    f: number,\n    g: number,\n    h: number\n  ): Foo;\n}\n\ntype BazConstructor = {\n  new (\n    a: number,\n    b: number,\n    c: number,\n    d: number,\n    e: number,\n    f: number,\n    g: number,\n    h: number\n  ): Foo;\n}\n\n\ninterface ConstructorBigGenerics {\n  // comment\n  new <AAAAAAAAAAAAAAAAAAAAAAAA, AAAAAAAAAAAAAAAAAAAAAAAA, AAAAAAAAAAAAAAAAAAAAAAAA>(\n    a: number,\n    b: number,\n    c: number,\n    d: number,\n    e: number,\n    f: number,\n    g: number,\n    h: number\n  ): Foo;\n}\n\ninterface ConstructorInline {\n  // https://github.com/prettier/prettier/issues/2163\n  (i): any;\n}\n\ninterface TimerConstructor {\n  // Line-splitting comment\n  new (interval: number, callback: (handler: Timer) => void): Timer;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "FooConstructor",
                "rawText": "FooConstructor",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
                "end": 24
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8250,
                        "isReadOnly": false,
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
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 34,
                                        "end": 40
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 41,
                                        "end": 48
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 34,
                                    "end": 48
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 49,
                                        "end": 55
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 56,
                                        "end": 63
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 49,
                                    "end": 63
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 64,
                                        "end": 70
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 71,
                                        "end": 78
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 64,
                                    "end": 78
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 79,
                                        "end": 85
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 86,
                                        "end": 93
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 79,
                                    "end": 93
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 94,
                                        "end": 100
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 101,
                                        "end": 108
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 94,
                                    "end": 108
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 109,
                                        "end": 115
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 116,
                                        "end": 123
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 109,
                                    "end": 123
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 124,
                                        "end": 130
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 131,
                                        "end": 138
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 124,
                                    "end": 138
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "h",
                                        "rawText": "h",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 139,
                                        "end": 145
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 146,
                                        "end": 153
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 139,
                                    "end": 153
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 34,
                            "end": 153
                        },
                        "returnType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Foo",
                                "rawText": "Foo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 158,
                                "end": 162
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 158,
                            "end": 163
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 32,
                        "end": 163
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 26,
                "end": 163
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 165
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "BarConstructor",
                "rawText": "BarConstructor",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 176,
                "end": 191
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8250,
                        "isReadOnly": false,
                        "accessModifier": null,
                        "typeParameters": {
                            "kind": 134226153,
                            "typeParameterList": [
                                {
                                    "kind": 134226152,
                                    "name": {
                                        "kind": 196711,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 201,
                                        "end": 202
                                    },
                                    "constraint": null,
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 201,
                                    "end": 202
                                },
                                {
                                    "kind": 134226152,
                                    "name": {
                                        "kind": 196711,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 203,
                                        "end": 205
                                    },
                                    "constraint": null,
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 203,
                                    "end": 205
                                },
                                {
                                    "kind": 134226152,
                                    "name": {
                                        "kind": 196711,
                                        "text": "C",
                                        "rawText": "C",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 206,
                                        "end": 208
                                    },
                                    "constraint": null,
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 206,
                                    "end": 208
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 201,
                            "end": 208
                        },
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 210,
                                        "end": 216
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 217,
                                        "end": 224
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 210,
                                    "end": 224
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 225,
                                        "end": 231
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 232,
                                        "end": 239
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 225,
                                    "end": 239
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 240,
                                        "end": 246
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 247,
                                        "end": 254
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 240,
                                    "end": 254
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 255,
                                        "end": 261
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 262,
                                        "end": 269
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 255,
                                    "end": 269
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 270,
                                        "end": 276
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 277,
                                        "end": 284
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 270,
                                    "end": 284
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 285,
                                        "end": 291
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 292,
                                        "end": 299
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 285,
                                    "end": 299
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 300,
                                        "end": 306
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 307,
                                        "end": 314
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 300,
                                    "end": 314
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "h",
                                        "rawText": "h",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 315,
                                        "end": 321
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 322,
                                        "end": 329
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 315,
                                    "end": 329
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 210,
                            "end": 329
                        },
                        "returnType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Foo",
                                "rawText": "Foo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 334,
                                "end": 338
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 334,
                            "end": 339
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 199,
                        "end": 339
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 193,
                "end": 339
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 165,
            "end": 341
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "BazConstructor",
                "rawText": "BazConstructor",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 347,
                "end": 362
            },
            "type": {
                "kind": 536879334,
                "objectTypeMembers": {
                    "kind": 536871081,
                    "members": [
                        {
                            "kind": 8250,
                            "isReadOnly": false,
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 374,
                                            "end": 380
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 381,
                                            "end": 388
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 374,
                                        "end": 388
                                    },
                                    {
                                        "kind": 134226094,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 389,
                                            "end": 395
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 396,
                                            "end": 403
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 389,
                                        "end": 403
                                    },
                                    {
                                        "kind": 134226094,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 404,
                                            "end": 410
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 411,
                                            "end": 418
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 404,
                                        "end": 418
                                    },
                                    {
                                        "kind": 134226094,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 419,
                                            "end": 425
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 426,
                                            "end": 433
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 419,
                                        "end": 433
                                    },
                                    {
                                        "kind": 134226094,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 434,
                                            "end": 440
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 441,
                                            "end": 448
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 434,
                                        "end": 448
                                    },
                                    {
                                        "kind": 134226094,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 449,
                                            "end": 455
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 456,
                                            "end": 463
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 449,
                                        "end": 463
                                    },
                                    {
                                        "kind": 134226094,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "g",
                                            "rawText": "g",
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 464,
                                            "end": 470
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 471,
                                            "end": 478
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 464,
                                        "end": 478
                                    },
                                    {
                                        "kind": 134226094,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "h",
                                            "rawText": "h",
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 479,
                                            "end": 485
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 486,
                                            "end": 493
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 479,
                                        "end": 493
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 374,
                                "end": 493
                            },
                            "returnType": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Foo",
                                    "rawText": "Foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 498,
                                    "end": 502
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 498,
                                "end": 503
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 372,
                            "end": 503
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 366,
                    "end": 505
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 364,
                "end": 505
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 341,
            "end": 505
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "ConstructorBigGenerics",
                "rawText": "ConstructorBigGenerics",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 517,
                "end": 540
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8250,
                        "isReadOnly": false,
                        "accessModifier": null,
                        "typeParameters": {
                            "kind": 134226153,
                            "typeParameterList": [
                                {
                                    "kind": 134226152,
                                    "name": {
                                        "kind": 196711,
                                        "text": "AAAAAAAAAAAAAAAAAAAAAAAA",
                                        "rawText": "AAAAAAAAAAAAAAAAAAAAAAAA",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 563,
                                        "end": 587
                                    },
                                    "constraint": null,
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 563,
                                    "end": 587
                                },
                                {
                                    "kind": 134226152,
                                    "name": {
                                        "kind": 196711,
                                        "text": "AAAAAAAAAAAAAAAAAAAAAAAA",
                                        "rawText": "AAAAAAAAAAAAAAAAAAAAAAAA",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 588,
                                        "end": 613
                                    },
                                    "constraint": null,
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 588,
                                    "end": 613
                                },
                                {
                                    "kind": 134226152,
                                    "name": {
                                        "kind": 196711,
                                        "text": "AAAAAAAAAAAAAAAAAAAAAAAA",
                                        "rawText": "AAAAAAAAAAAAAAAAAAAAAAAA",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 614,
                                        "end": 639
                                    },
                                    "constraint": null,
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 614,
                                    "end": 639
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 563,
                            "end": 639
                        },
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 641,
                                        "end": 647
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 648,
                                        "end": 655
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 641,
                                    "end": 655
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 656,
                                        "end": 662
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 663,
                                        "end": 670
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 656,
                                    "end": 670
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 671,
                                        "end": 677
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 678,
                                        "end": 685
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 671,
                                    "end": 685
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 686,
                                        "end": 692
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 693,
                                        "end": 700
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 686,
                                    "end": 700
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 701,
                                        "end": 707
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 708,
                                        "end": 715
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 701,
                                    "end": 715
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 716,
                                        "end": 722
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 723,
                                        "end": 730
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 716,
                                    "end": 730
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 731,
                                        "end": 737
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 738,
                                        "end": 745
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 731,
                                    "end": 745
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "h",
                                        "rawText": "h",
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 746,
                                        "end": 752
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 753,
                                        "end": 760
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 746,
                                    "end": 760
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 641,
                            "end": 760
                        },
                        "returnType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Foo",
                                "rawText": "Foo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 765,
                                "end": 769
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 765,
                            "end": 770
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 561,
                        "end": 770
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 542,
                "end": 770
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 505,
            "end": 772
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "ConstructorInline",
                "rawText": "ConstructorInline",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 783,
                "end": 801
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8236,
                        "isReadOnly": false,
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
                                        "text": "i",
                                        "rawText": "i",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 861,
                                        "end": 862
                                    },
                                    "isOptional": false,
                                    "type": null,
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 861,
                                    "end": 862
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 861,
                            "end": 862
                        },
                        "returnType": {
                            "kind": 4202498,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 864,
                            "end": 868
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 803,
                        "end": 869
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 803,
                "end": 869
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 772,
            "end": 871
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "TimerConstructor",
                "rawText": "TimerConstructor",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 882,
                "end": 899
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8250,
                        "isReadOnly": false,
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
                                        "text": "interval",
                                        "rawText": "interval",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 937,
                                        "end": 945
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 946,
                                        "end": 953
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 937,
                                    "end": 953
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "callback",
                                        "rawText": "callback",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 954,
                                        "end": 963
                                    },
                                    "isOptional": false,
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
                                                        "text": "handler",
                                                        "rawText": "handler",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 966,
                                                        "end": 973
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 134226156,
                                                        "typeName": {
                                                            "kind": 196711,
                                                            "text": "Timer",
                                                            "rawText": "Timer",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 974,
                                                            "end": 980
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 974,
                                                        "end": 981
                                                    },
                                                    "initializer": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 966,
                                                    "end": 980
                                                }
                                            ],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 966,
                                            "end": 980
                                        },
                                        "returnType": {
                                            "kind": 4202742,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 984,
                                            "end": 989
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 964,
                                        "end": 989
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 954,
                                    "end": 989
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 937,
                            "end": 989
                        },
                        "returnType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Timer",
                                "rawText": "Timer",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 991,
                                "end": 997
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 991,
                            "end": 998
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 935,
                        "end": 998
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 901,
                "end": 998
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 871,
            "end": 1000
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 1000
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

