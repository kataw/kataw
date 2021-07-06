# Kataw parser test case

## Input

`````js
let one: {x: 'a', y: false, z: null};

let two: {foo(): void};

let three: {['x']: number};

let five: {[key: string]: number};

let six: () => void = Foo;

let seven: <T>() => Foo<T>;

let eigth: A.B<X.Y>;

let nine: A.B<X.Y>=2;

let ten: A.B<X.Y<Z>>;

let eleven: A.B<X.Y<Z>>=2;

let thirteen: A.B<X.Y<Z<T>>>;

let fourteen: A.B<X.Y<Z<T>>>=2;

(): A<T>=> 0;

(): A<B<T>>=> 0;

(): A<B<C<T>>>=> 0;

`````

## Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "one",
                            "rawText": "one",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134217967,
                                                "text": "a",
                                                "rawText": "'a'",
                                                "flags": 6291520,
                                                "transformFlags": 1024,
                                                "start": 12,
                                                "end": 16
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 16
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 17
                                    },
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 205586437,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 26
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 26
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 27
                                    },
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 138477575,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 35
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 35
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 36
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 36
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 36
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 36
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 37
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 37,
                "end": 42
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "two",
                            "rawText": "two",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 46
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 49,
                                            "end": 52
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 148,
                                            "functionTypeParameterList": {
                                                "kind": 282,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 53
                                            },
                                            "returnType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 138477615,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 55,
                                                    "end": 60
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 55,
                                                "end": 60
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 52,
                                            "end": 60
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 49,
                                        "end": 60
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 61
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 61
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 42,
                        "end": 61
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 42,
                "end": 61
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 37,
            "end": 62
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 62,
                "end": 67
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "three",
                            "rawText": "three",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 73
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 195,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "name": null,
                                        "key": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134217967,
                                                "text": "x",
                                                "rawText": "'x'",
                                                "flags": 6291520,
                                                "transformFlags": 1024,
                                                "start": 77,
                                                "end": 80
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 77,
                                            "end": 80
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 82,
                                                "end": 89
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 82,
                                            "end": 89
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 76,
                                        "end": 89
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 74,
                                "end": 90
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 74,
                            "end": 90
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 67,
                        "end": 90
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 67,
                "end": 90
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 62,
            "end": 91
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 91,
                "end": 96
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "five",
                            "rawText": "five",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 96,
                            "end": 101
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 195,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "key",
                                            "rawText": "key",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 105,
                                            "end": 108
                                        },
                                        "key": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 109,
                                                "end": 116
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 109,
                                            "end": 116
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 118,
                                                "end": 125
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 118,
                                            "end": 125
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 104,
                                        "end": 125
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 102,
                                "end": 126
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 102,
                            "end": 126
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 96,
                        "end": 126
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 96,
                "end": 126
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 91,
            "end": 127
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 127,
                "end": 132
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "six",
                            "rawText": "six",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 132,
                            "end": 136
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 139,
                                    "end": 139
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 140,
                                    "end": 143
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 143,
                                        "end": 148
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 148
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 137,
                                "end": 148
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 137,
                            "end": 148
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "Foo",
                            "rawText": "Foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 150,
                            "end": 154
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 132,
                        "end": 154
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 132,
                "end": 154
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 127,
            "end": 155
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 155,
                "end": 160
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "seven",
                            "rawText": "seven",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 160,
                            "end": 166
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": {
                                    "kind": 307,
                                    "declarations": {
                                        "kind": 337,
                                        "parameters": [
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 169,
                                                    "end": 170
                                                },
                                                "type": null,
                                                "assignToken": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 169,
                                                "end": 170
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 169,
                                        "end": 170
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 167,
                                    "end": 171
                                },
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 172,
                                    "end": 172
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 173,
                                    "end": 176
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "Foo",
                                            "rawText": "Foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 176,
                                            "end": 180
                                        },
                                        "typeParameters": {
                                            "kind": 310,
                                            "typeInstantiations": {
                                                "kind": 309,
                                                "types": [
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 181,
                                                                "end": 182
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 181,
                                                            "end": 182
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 181,
                                                        "end": 182
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 181,
                                                "end": 182
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 512,
                                            "start": 180,
                                            "end": 183
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 176,
                                        "end": 183
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 176,
                                    "end": 183
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 167,
                                "end": 183
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 167,
                            "end": 183
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 160,
                        "end": 183
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 160,
                "end": 183
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 155,
            "end": 184
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 184,
                "end": 189
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "eigth",
                            "rawText": "eigth",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 189,
                            "end": 195
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 145,
                                    "qualification": {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 196,
                                        "end": 198
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 199,
                                        "end": 200
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 196,
                                    "end": 200
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 145,
                                                        "qualification": {
                                                            "kind": 134299649,
                                                            "text": "X",
                                                            "rawText": "X",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 201,
                                                            "end": 202
                                                        },
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "Y",
                                                            "rawText": "Y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 203,
                                                            "end": 204
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 201,
                                                        "end": 204
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 201,
                                                    "end": 204
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 201,
                                                "end": 204
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 201,
                                        "end": 204
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 200,
                                    "end": 205
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 196,
                                "end": 205
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 196,
                            "end": 205
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 189,
                        "end": 205
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 189,
                "end": 205
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 184,
            "end": 206
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 206,
                "end": 211
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "nine",
                            "rawText": "nine",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 211,
                            "end": 216
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 145,
                                    "qualification": {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 217,
                                        "end": 219
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 220,
                                        "end": 221
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 217,
                                    "end": 221
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 145,
                                                        "qualification": {
                                                            "kind": 134299649,
                                                            "text": "X",
                                                            "rawText": "X",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 222,
                                                            "end": 223
                                                        },
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "Y",
                                                            "rawText": "Y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 224,
                                                            "end": 225
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 222,
                                                        "end": 225
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 222,
                                                    "end": 225
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 222,
                                                "end": 225
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 222,
                                        "end": 225
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 221,
                                    "end": 226
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 217,
                                "end": 226
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 217,
                            "end": 226
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 227,
                            "end": 228
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 211,
                        "end": 228
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 211,
                "end": 228
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 206,
            "end": 229
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 229,
                "end": 234
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "ten",
                            "rawText": "ten",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 234,
                            "end": 238
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 145,
                                    "qualification": {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 239,
                                        "end": 241
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 242,
                                        "end": 243
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 239,
                                    "end": 243
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 145,
                                                        "qualification": {
                                                            "kind": 134299649,
                                                            "text": "X",
                                                            "rawText": "X",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 244,
                                                            "end": 245
                                                        },
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "Y",
                                                            "rawText": "Y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 246,
                                                            "end": 247
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 244,
                                                        "end": 247
                                                    },
                                                    "typeParameters": {
                                                        "kind": 310,
                                                        "typeInstantiations": {
                                                            "kind": 309,
                                                            "types": [
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "Z",
                                                                            "rawText": "Z",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 248,
                                                                            "end": 249
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 248,
                                                                        "end": 249
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 248,
                                                                    "end": 249
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 248,
                                                            "end": 249
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 512,
                                                        "start": 247,
                                                        "end": 250
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 244,
                                                    "end": 250
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 244,
                                                "end": 250
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 244,
                                        "end": 250
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 243,
                                    "end": 251
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 239,
                                "end": 251
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 239,
                            "end": 251
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 234,
                        "end": 251
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 234,
                "end": 251
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 229,
            "end": 252
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 252,
                "end": 257
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "eleven",
                            "rawText": "eleven",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 257,
                            "end": 264
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 145,
                                    "qualification": {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 265,
                                        "end": 267
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 268,
                                        "end": 269
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 265,
                                    "end": 269
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 145,
                                                        "qualification": {
                                                            "kind": 134299649,
                                                            "text": "X",
                                                            "rawText": "X",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 270,
                                                            "end": 271
                                                        },
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "Y",
                                                            "rawText": "Y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 272,
                                                            "end": 273
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 270,
                                                        "end": 273
                                                    },
                                                    "typeParameters": {
                                                        "kind": 310,
                                                        "typeInstantiations": {
                                                            "kind": 309,
                                                            "types": [
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "Z",
                                                                            "rawText": "Z",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 274,
                                                                            "end": 275
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 274,
                                                                        "end": 275
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 274,
                                                                    "end": 275
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 274,
                                                            "end": 275
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 512,
                                                        "start": 273,
                                                        "end": 276
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 270,
                                                    "end": 276
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 270,
                                                "end": 276
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 270,
                                        "end": 276
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 269,
                                    "end": 277
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 265,
                                "end": 277
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 265,
                            "end": 277
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 278,
                            "end": 279
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 257,
                        "end": 279
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 257,
                "end": 279
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 252,
            "end": 280
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 280,
                "end": 285
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "thirteen",
                            "rawText": "thirteen",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 285,
                            "end": 294
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 145,
                                    "qualification": {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 295,
                                        "end": 297
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 298,
                                        "end": 299
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 295,
                                    "end": 299
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 145,
                                                        "qualification": {
                                                            "kind": 134299649,
                                                            "text": "X",
                                                            "rawText": "X",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 300,
                                                            "end": 301
                                                        },
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "Y",
                                                            "rawText": "Y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 302,
                                                            "end": 303
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 300,
                                                        "end": 303
                                                    },
                                                    "typeParameters": {
                                                        "kind": 310,
                                                        "typeInstantiations": {
                                                            "kind": 309,
                                                            "types": [
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "Z",
                                                                            "rawText": "Z",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 304,
                                                                            "end": 305
                                                                        },
                                                                        "typeParameters": {
                                                                            "kind": 310,
                                                                            "typeInstantiations": {
                                                                                "kind": 309,
                                                                                "types": [
                                                                                    {
                                                                                        "kind": 139,
                                                                                        "bitwiseOrToken": null,
                                                                                        "bitwiseAndToken": null,
                                                                                        "type": {
                                                                                            "kind": 144,
                                                                                            "typeName": {
                                                                                                "kind": 134299649,
                                                                                                "text": "T",
                                                                                                "rawText": "T",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 306,
                                                                                                "end": 307
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 2097152,
                                                                                            "transformFlags": 0,
                                                                                            "start": 306,
                                                                                            "end": 307
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "transformFlags": 0,
                                                                                        "start": 306,
                                                                                        "end": 307
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 2097152,
                                                                                "transformFlags": 0,
                                                                                "start": 306,
                                                                                "end": 307
                                                                            },
                                                                            "flags": 2097152,
                                                                            "transformFlags": 512,
                                                                            "start": 305,
                                                                            "end": 308
                                                                        },
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 304,
                                                                        "end": 308
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 304,
                                                                    "end": 308
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 304,
                                                            "end": 308
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 512,
                                                        "start": 303,
                                                        "end": 309
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 300,
                                                    "end": 309
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 300,
                                                "end": 309
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 300,
                                        "end": 309
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 299,
                                    "end": 310
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 295,
                                "end": 310
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 295,
                            "end": 310
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 285,
                        "end": 310
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 285,
                "end": 310
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 280,
            "end": 311
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 311,
                "end": 316
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "fourteen",
                            "rawText": "fourteen",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 316,
                            "end": 325
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 145,
                                    "qualification": {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 326,
                                        "end": 328
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 329,
                                        "end": 330
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 326,
                                    "end": 330
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 145,
                                                        "qualification": {
                                                            "kind": 134299649,
                                                            "text": "X",
                                                            "rawText": "X",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 331,
                                                            "end": 332
                                                        },
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "Y",
                                                            "rawText": "Y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 333,
                                                            "end": 334
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 331,
                                                        "end": 334
                                                    },
                                                    "typeParameters": {
                                                        "kind": 310,
                                                        "typeInstantiations": {
                                                            "kind": 309,
                                                            "types": [
                                                                {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "Z",
                                                                            "rawText": "Z",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 335,
                                                                            "end": 336
                                                                        },
                                                                        "typeParameters": {
                                                                            "kind": 310,
                                                                            "typeInstantiations": {
                                                                                "kind": 309,
                                                                                "types": [
                                                                                    {
                                                                                        "kind": 139,
                                                                                        "bitwiseOrToken": null,
                                                                                        "bitwiseAndToken": null,
                                                                                        "type": {
                                                                                            "kind": 144,
                                                                                            "typeName": {
                                                                                                "kind": 134299649,
                                                                                                "text": "T",
                                                                                                "rawText": "T",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 337,
                                                                                                "end": 338
                                                                                            },
                                                                                            "typeParameters": null,
                                                                                            "flags": 2097152,
                                                                                            "transformFlags": 0,
                                                                                            "start": 337,
                                                                                            "end": 338
                                                                                        },
                                                                                        "flags": 2097152,
                                                                                        "transformFlags": 0,
                                                                                        "start": 337,
                                                                                        "end": 338
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 2097152,
                                                                                "transformFlags": 0,
                                                                                "start": 337,
                                                                                "end": 338
                                                                            },
                                                                            "flags": 2097152,
                                                                            "transformFlags": 512,
                                                                            "start": 336,
                                                                            "end": 339
                                                                        },
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 335,
                                                                        "end": 339
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 335,
                                                                    "end": 339
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 335,
                                                            "end": 339
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 512,
                                                        "start": 334,
                                                        "end": 340
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 331,
                                                    "end": 340
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 331,
                                                "end": 340
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 331,
                                        "end": 340
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 330,
                                    "end": 341
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 326,
                                "end": 341
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 326,
                            "end": 341
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 342,
                            "end": 343
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 316,
                        "end": 343
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 316,
                "end": 343
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 311,
            "end": 344
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 347,
                    "end": 347
                },
                "returnType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 144,
                        "typeName": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 349,
                            "end": 351
                        },
                        "typeParameters": {
                            "kind": 310,
                            "typeInstantiations": {
                                "kind": 309,
                                "types": [
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 352,
                                                "end": 353
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 352,
                                            "end": 353
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 352,
                                        "end": 353
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 352,
                                "end": 353
                            },
                            "flags": 2097152,
                            "transformFlags": 512,
                            "start": 351,
                            "end": 354
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 349,
                        "end": 354
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 349,
                    "end": 354
                },
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 354,
                    "end": 356
                },
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 356,
                    "end": 358
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 344,
                "end": 358
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 344,
            "end": 359
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 362,
                    "end": 362
                },
                "returnType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 144,
                        "typeName": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 364,
                            "end": 366
                        },
                        "typeParameters": {
                            "kind": 310,
                            "typeInstantiations": {
                                "kind": 309,
                                "types": [
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "B",
                                                "rawText": "B",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 367,
                                                "end": 368
                                            },
                                            "typeParameters": {
                                                "kind": 310,
                                                "typeInstantiations": {
                                                    "kind": 309,
                                                    "types": [
                                                        {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 144,
                                                                "typeName": {
                                                                    "kind": 134299649,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 369,
                                                                    "end": 370
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 369,
                                                                "end": 370
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 369,
                                                            "end": 370
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 369,
                                                    "end": 370
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 512,
                                                "start": 368,
                                                "end": 371
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 367,
                                            "end": 371
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 367,
                                        "end": 371
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 367,
                                "end": 371
                            },
                            "flags": 2097152,
                            "transformFlags": 512,
                            "start": 366,
                            "end": 372
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 364,
                        "end": 372
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 364,
                    "end": 372
                },
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 372,
                    "end": 374
                },
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 374,
                    "end": 376
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 359,
                "end": 376
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 359,
            "end": 377
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 380,
                    "end": 380
                },
                "returnType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 144,
                        "typeName": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 382,
                            "end": 384
                        },
                        "typeParameters": {
                            "kind": 310,
                            "typeInstantiations": {
                                "kind": 309,
                                "types": [
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "B",
                                                "rawText": "B",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 385,
                                                "end": 386
                                            },
                                            "typeParameters": {
                                                "kind": 310,
                                                "typeInstantiations": {
                                                    "kind": 309,
                                                    "types": [
                                                        {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 144,
                                                                "typeName": {
                                                                    "kind": 134299649,
                                                                    "text": "C",
                                                                    "rawText": "C",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 387,
                                                                    "end": 388
                                                                },
                                                                "typeParameters": {
                                                                    "kind": 310,
                                                                    "typeInstantiations": {
                                                                        "kind": 309,
                                                                        "types": [
                                                                            {
                                                                                "kind": 139,
                                                                                "bitwiseOrToken": null,
                                                                                "bitwiseAndToken": null,
                                                                                "type": {
                                                                                    "kind": 144,
                                                                                    "typeName": {
                                                                                        "kind": 134299649,
                                                                                        "text": "T",
                                                                                        "rawText": "T",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 389,
                                                                                        "end": 390
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "flags": 2097152,
                                                                                    "transformFlags": 0,
                                                                                    "start": 389,
                                                                                    "end": 390
                                                                                },
                                                                                "flags": 2097152,
                                                                                "transformFlags": 0,
                                                                                "start": 389,
                                                                                "end": 390
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 2097152,
                                                                        "transformFlags": 0,
                                                                        "start": 389,
                                                                        "end": 390
                                                                    },
                                                                    "flags": 2097152,
                                                                    "transformFlags": 512,
                                                                    "start": 388,
                                                                    "end": 391
                                                                },
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 387,
                                                                "end": 391
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 387,
                                                            "end": 391
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 387,
                                                    "end": 391
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 512,
                                                "start": 386,
                                                "end": 392
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 385,
                                            "end": 392
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 385,
                                        "end": 392
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 385,
                                "end": 392
                            },
                            "flags": 2097152,
                            "transformFlags": 512,
                            "start": 384,
                            "end": 393
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 382,
                        "end": 393
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 382,
                    "end": 393
                },
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 393,
                    "end": 395
                },
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 395,
                    "end": 397
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 377,
                "end": 397
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 377,
            "end": 398
        }
    ],
    "isModule": false,
    "source": "let one: {x: 'a', y: false, z: null};\n\nlet two: {foo(): void};\n\nlet three: {['x']: number};\n\nlet five: {[key: string]: number};\n\nlet six: () => void = Foo;\n\nlet seven: <T>() => Foo<T>;\n\nlet eigth: A.B<X.Y>;\n\nlet nine: A.B<X.Y>=2;\n\nlet ten: A.B<X.Y<Z>>;\n\nlet eleven: A.B<X.Y<Z>>=2;\n\nlet thirteen: A.B<X.Y<Z<T>>>;\n\nlet fourteen: A.B<X.Y<Z<T>>>=2;\n\n(): A<T>=> 0;\n\n(): A<B<T>>=> 0;\n\n(): A<B<C<T>>>=> 0;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 399
}
```

### Printed

```javascript

let one: { x: '\'a\'', y: false , z: null  };
let two: { foo(): void  };

let three: { ['\'x\'']: number  };

let five: { [string ]: number  };

let six: () =>  void  = Foo;

let seven: <T>() =>  Foo<T>;

let eigth: A.B<X.Y>;

let nine: A.B<X.Y> = 2;

let ten: A.B<X.Y<Z>>;

let eleven: A.B<X.Y<Z>> = 2;

let thirteen: A.B<X.Y<Z<T>>>;

let fourteen: A.B<X.Y<Z<T>>> = 2;

() => 0;

() => 0;

() => 0;

```

### Diagnostics

```javascript
✔ No errors
```

