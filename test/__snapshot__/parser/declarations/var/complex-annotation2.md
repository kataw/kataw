# Kataw parser test case

## Input

`````js
var array_of_tuple: [number, string][] = [[0, "foo"], [1, "bar"]];

var array_of_tuple_parens: ([number, string])[] = array_of_tuple;

var nullable_array: ?number[] = null;

var nullable_array_parens: ?(number[]) = nullable_array;
`````

## Options

### Parser Options

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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "array_of_tuple",
                            "rawText": "array_of_tuple",
                            "flags": 96,
                            "start": 3,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 147,
                                    "elementTypes": [
                                        {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 21,
                                            "end": 27
                                        },
                                        {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 28,
                                            "end": 35
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 19,
                                    "end": 36
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 38
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 38
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 201392130,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 96,
                                                    "start": 43,
                                                    "end": 44
                                                },
                                                {
                                                    "kind": 201392131,
                                                    "text": "foo",
                                                    "rawText": "\"foo\"",
                                                    "flags": 96,
                                                    "start": 45,
                                                    "end": 51
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 43,
                                            "end": 51
                                        },
                                        "flags": 32,
                                        "start": 42,
                                        "end": 52
                                    },
                                    {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 55,
                                                    "end": 56
                                                },
                                                {
                                                    "kind": 201392131,
                                                    "text": "bar",
                                                    "rawText": "\"bar\"",
                                                    "flags": 96,
                                                    "start": 57,
                                                    "end": 63
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 55,
                                            "end": 63
                                        },
                                        "flags": 32,
                                        "start": 53,
                                        "end": 64
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 42,
                                "end": 64
                            },
                            "flags": 32,
                            "start": 40,
                            "end": 65
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 65
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 65
            },
            "flags": 16,
            "start": 0,
            "end": 66
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 66,
                "end": 71
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "array_of_tuple_parens",
                            "rawText": "array_of_tuple_parens",
                            "flags": 96,
                            "start": 71,
                            "end": 93
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 260,
                                    "type": {
                                        "kind": 147,
                                        "elementTypes": [
                                            {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 97,
                                                "end": 103
                                            },
                                            {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 104,
                                                "end": 111
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 96,
                                        "end": 112
                                    },
                                    "flags": 32,
                                    "start": 94,
                                    "end": 113
                                },
                                "flags": 32,
                                "start": 114,
                                "end": 115
                            },
                            "flags": 32,
                            "start": 93,
                            "end": 115
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "array_of_tuple",
                            "rawText": "array_of_tuple",
                            "flags": 96,
                            "start": 117,
                            "end": 132
                        },
                        "flags": 16,
                        "start": 71,
                        "end": 132
                    }
                ],
                "flags": 16,
                "start": 71,
                "end": 132
            },
            "flags": 16,
            "start": 66,
            "end": 133
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 133,
                "end": 138
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "nullable_array",
                            "rawText": "nullable_array",
                            "flags": 96,
                            "start": 138,
                            "end": 153
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 154,
                                    "end": 156
                                },
                                "type": {
                                    "kind": 136,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 156,
                                        "end": 162
                                    },
                                    "flags": 32,
                                    "start": 163,
                                    "end": 164
                                },
                                "flags": 32,
                                "start": 154,
                                "end": 164
                            },
                            "flags": 32,
                            "start": 153,
                            "end": 164
                        },
                        "initializer": {
                            "kind": 138477575,
                            "flags": 96,
                            "start": 166,
                            "end": 171
                        },
                        "flags": 16,
                        "start": 138,
                        "end": 171
                    }
                ],
                "flags": 16,
                "start": 138,
                "end": 171
            },
            "flags": 16,
            "start": 133,
            "end": 172
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 172,
                "end": 177
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "nullable_array_parens",
                            "rawText": "nullable_array_parens",
                            "flags": 96,
                            "start": 177,
                            "end": 199
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 200,
                                    "end": 202
                                },
                                "type": {
                                    "kind": 260,
                                    "type": {
                                        "kind": 136,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 203,
                                            "end": 209
                                        },
                                        "flags": 32,
                                        "start": 210,
                                        "end": 211
                                    },
                                    "flags": 32,
                                    "start": 202,
                                    "end": 212
                                },
                                "flags": 32,
                                "start": 200,
                                "end": 212
                            },
                            "flags": 32,
                            "start": 199,
                            "end": 212
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "nullable_array",
                            "rawText": "nullable_array",
                            "flags": 96,
                            "start": 214,
                            "end": 229
                        },
                        "flags": 16,
                        "start": 177,
                        "end": 229
                    }
                ],
                "flags": 16,
                "start": 177,
                "end": 229
            },
            "flags": 16,
            "start": 172,
            "end": 230
        }
    ],
    "isModule": false,
    "source": "var array_of_tuple: [number, string][] = [[0, \"foo\"], [1, \"bar\"]];\n\nvar array_of_tuple_parens: ([number, string])[] = array_of_tuple;\n\nvar nullable_array: ?number[] = null;\n\nvar nullable_array_parens: ?(number[]) = nullable_array;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 230
}
```

### Printed

```javascript

var array_of_tuple = [[0, "\"foo\""], [1, "\"bar\""]];
var array_of_tuple_parens = array_of_tuple;
var nullable_array = null;
var nullable_array_parens = nullable_array;
```

### Diagnostics

```javascript
✔ No errors
```

