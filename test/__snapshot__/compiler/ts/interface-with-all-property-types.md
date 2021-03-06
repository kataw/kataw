# Kataw parser test case

## Input

`````js
interface Foo {
    baa: number;
    bar?: number;
    [bax]: string;
    [baz]?: string;
    [eee: number]: string;
    [fff?: number]: string;
    doo(): void;
    doo?(a, b, c): void;
    [loo]?(a, b, c): void;
    boo<J>(a, b, c): void;
    new (a, b?): string;
    new <F>(a, b?): string;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface Foo {\n    baa: number;\n    bar?: number;\n    [bax]: string;\n    [baz]?: string;\n    [eee: number]: string;\n    [fff?: number]: string;\n    doo(): void;\n    doo?(a, b, c): void;\n    [loo]?(a, b, c): void;\n    boo<J>(a, b, c): void;\n    new (a, b?): string;\n    new <F>(a, b?): string;\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 13
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8380,
                            "name": {
                                "kind": 196711,
                                "text": "baa",
                                "rawText": "baa",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 23
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 24,
                                "end": 31
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 15,
                            "end": 32
                        },
                        {
                            "kind": 8380,
                            "name": {
                                "kind": 196711,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 40
                            },
                            "isOptional": true,
                            "accessModifier": null,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 42,
                                "end": 49
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 32,
                            "end": 50
                        },
                        {
                            "kind": 8380,
                            "name": {
                                "kind": 65591,
                                "expression": {
                                    "kind": 196712,
                                    "text": "bax",
                                    "rawText": "bax",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 56,
                                    "end": 59
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 131073,
                                "start": 50,
                                "end": 60
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 61,
                                "end": 68
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 50,
                            "end": 69
                        },
                        {
                            "kind": 8380,
                            "name": {
                                "kind": 65591,
                                "expression": {
                                    "kind": 196712,
                                    "text": "baz",
                                    "rawText": "baz",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 75,
                                    "end": 78
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 131073,
                                "start": 69,
                                "end": 79
                            },
                            "isOptional": true,
                            "accessModifier": null,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 81,
                                "end": 88
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 69,
                            "end": 89
                        },
                        {
                            "kind": 73844,
                            "accessModifier": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "eee",
                                            "rawText": "eee",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 95,
                                            "end": 98
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 99,
                                            "end": 106
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 95,
                                        "end": 106
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 95,
                                "end": 106
                            },
                            "returnType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 108,
                                "end": 115
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 95,
                            "end": 116
                        },
                        {
                            "kind": 73844,
                            "accessModifier": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "fff",
                                            "rawText": "fff",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 122,
                                            "end": 125
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 127,
                                            "end": 134
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 122,
                                        "end": 134
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 122,
                                "end": 134
                            },
                            "returnType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 136,
                                "end": 143
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 122,
                            "end": 144
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "doo",
                                "rawText": "doo",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 144,
                                "end": 152
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 153,
                                "end": 153
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 155,
                                "end": 160
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 144,
                            "end": 161
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "doo",
                                "rawText": "doo",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 161,
                                "end": 169
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": true,
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 171,
                                            "end": 172
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 171,
                                        "end": 172
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 173,
                                            "end": 175
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 173,
                                        "end": 175
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 176,
                                            "end": 178
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 176,
                                        "end": 178
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 171,
                                "end": 178
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 180,
                                "end": 185
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 161,
                            "end": 186
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 65591,
                                "expression": {
                                    "kind": 196712,
                                    "text": "loo",
                                    "rawText": "loo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 192,
                                    "end": 195
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 131073,
                                "start": 186,
                                "end": 196
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": true,
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 198,
                                            "end": 199
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 198,
                                        "end": 199
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 200,
                                            "end": 202
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 200,
                                        "end": 202
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 203,
                                            "end": 205
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 203,
                                        "end": 205
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 198,
                                "end": 205
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 207,
                                "end": 212
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 186,
                            "end": 213
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "boo",
                                "rawText": "boo",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 213,
                                "end": 221
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
                                            "text": "J",
                                            "rawText": "J",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 222,
                                            "end": 223
                                        },
                                        "constraint": null,
                                        "defaultType": null,
                                        "expression": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 222,
                                        "end": 223
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 222,
                                "end": 223
                            },
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 225,
                                            "end": 226
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 225,
                                        "end": 226
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 227,
                                            "end": 229
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 227,
                                        "end": 229
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 230,
                                            "end": 232
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 230,
                                        "end": 232
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 225,
                                "end": 232
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 234,
                                "end": 239
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 213,
                            "end": 240
                        },
                        {
                            "kind": 8250,
                            "isReadOnly": false,
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 250,
                                            "end": 251
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 250,
                                        "end": 251
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 252,
                                            "end": 254
                                        },
                                        "isOptional": true,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 252,
                                        "end": 255
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 250,
                                "end": 255
                            },
                            "returnType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 257,
                                "end": 264
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 248,
                            "end": 265
                        },
                        {
                            "kind": 8250,
                            "isReadOnly": false,
                            "accessModifier": null,
                            "typeParameters": {
                                "kind": 8425,
                                "typeParameterList": [
                                    {
                                        "kind": 8424,
                                        "name": {
                                            "kind": 196711,
                                            "text": "F",
                                            "rawText": "F",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 275,
                                            "end": 276
                                        },
                                        "constraint": null,
                                        "defaultType": null,
                                        "expression": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 275,
                                        "end": 276
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 275,
                                "end": 276
                            },
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 278,
                                            "end": 279
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 278,
                                        "end": 279
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 280,
                                            "end": 282
                                        },
                                        "isOptional": true,
                                        "type": null,
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 280,
                                        "end": 283
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 278,
                                "end": 283
                            },
                            "returnType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 285,
                                "end": 292
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 273,
                            "end": 293
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 15,
                    "end": 293
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 295
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 295
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 295
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

