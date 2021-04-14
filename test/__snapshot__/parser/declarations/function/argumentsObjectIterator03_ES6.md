# Kataw parser test case

## Input

`````js
function asReversedTuple(a: number, b: string, c: boolean): [boolean, string, number] {
    let [x, y, z] = arguments;

    return [z, y, x];
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "asReversedTuple",
                "rawText": "asReversedTuple",
                "flags": 768,
                "start": 8,
                "end": 24
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 25,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 27,
                                "end": 34
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 26,
                            "end": 34
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 25,
                        "end": 34
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 35,
                            "end": 37
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 768,
                                "start": 38,
                                "end": 45
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 37,
                            "end": 45
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 35,
                        "end": 45
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 46,
                            "end": 48
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234254,
                                "flags": 768,
                                "start": 49,
                                "end": 57
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 48,
                            "end": 57
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 46,
                        "end": 57
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 24,
                "end": 58
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 84,
                    "end": 84
                },
                "flags": 256,
                "start": 84,
                "end": 84
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 147,
                    "types": [
                        {
                            "kind": 134234254,
                            "flags": 768,
                            "start": 61,
                            "end": 68
                        },
                        {
                            "kind": 134234347,
                            "flags": 768,
                            "start": 69,
                            "end": 76
                        },
                        {
                            "kind": 134234345,
                            "flags": 768,
                            "start": 77,
                            "end": 84
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 0,
                    "start": 59,
                    "end": 84
                },
                "autofix": 0,
                "flags": 0,
                "start": 58,
                "end": 84
            },
            "flags": 256,
            "start": 0,
            "end": 84
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 768,
                            "start": 87,
                            "end": 95
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 202,
                                            "elements": [
                                                {
                                                    "kind": 244,
                                                    "ellipsisToken": null,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 97,
                                                        "end": 98
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 256,
                                                    "start": 97,
                                                    "end": 98
                                                },
                                                {
                                                    "kind": 244,
                                                    "ellipsisToken": null,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 99,
                                                        "end": 101
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 256,
                                                    "start": 99,
                                                    "end": 101
                                                },
                                                {
                                                    "kind": 244,
                                                    "ellipsisToken": null,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "z",
                                                        "rawText": "z",
                                                        "flags": 768,
                                                        "start": 102,
                                                        "end": 104
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 256,
                                                    "start": 102,
                                                    "end": 104
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 97,
                                            "end": 104
                                        },
                                        "flags": 256,
                                        "start": 95,
                                        "end": 105
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 134299649,
                                        "text": "arguments",
                                        "rawText": "arguments",
                                        "flags": 768,
                                        "start": 107,
                                        "end": 117
                                    },
                                    "flags": 128,
                                    "start": 95,
                                    "end": 117
                                }
                            ],
                            "flags": 128,
                            "start": 95,
                            "end": 117
                        },
                        "flags": 128,
                        "start": 87,
                        "end": 118
                    }
                ],
                "multiLine": true,
                "flags": 128,
                "start": 87,
                "end": 118
            },
            "flags": 128,
            "start": 85,
            "end": 118
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 768,
                "start": 118,
                "end": 130
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 768,
                            "start": 132,
                            "end": 133
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 134,
                            "end": 136
                        },
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 137,
                            "end": 139
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 132,
                    "end": 139
                },
                "flags": 256,
                "start": 130,
                "end": 140
            },
            "flags": 128,
            "start": 1,
            "end": 118
        }
    ],
    "isModule": false,
    "text": "function asReversedTuple(a: number, b: string, c: boolean): [boolean, string, number] {\n    let [x, y, z] = arguments;\n\n    return [z, y, x];\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 84,
            "end": 85
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 84,
            "end": 85
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 84,
            "end": 85
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 84,
            "end": 85
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 118,
            "end": 130
        },
        {
            "kind": 2,
            "source": 2,
            "code": 33,
            "error": "A return statement can only be used within a function_body",
            "start": 118,
            "end": 130
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 141,
            "end": 143
        }
    ],
    "start": 0,
    "end": 143
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

