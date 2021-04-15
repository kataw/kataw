# Kataw parser test case

## Input

`````js
function doubleAndReturnAsArray(x: number, y: number, z: number): [number, number, number] {
    let blah = arguments[Symbol.iterator];

    let result = [];
    for (let arg of blah()) {
        result.push(arg + arg);
    }
    return <[any, any, any]>result;
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
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "doubleAndReturnAsArray",
                "rawText": "doubleAndReturnAsArray",
                "flags": 768,
                "start": 8,
                "end": 31
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 32,
                            "end": 33
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 34,
                                "end": 41
                            },
                            "flags": 0,
                            "start": 33,
                            "end": 41
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 32,
                        "end": 41
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 42,
                            "end": 44
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 45,
                                "end": 52
                            },
                            "flags": 0,
                            "start": 44,
                            "end": 52
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 42,
                        "end": 52
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 768,
                            "start": 53,
                            "end": 55
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 56,
                                "end": 63
                            },
                            "flags": 0,
                            "start": 55,
                            "end": 63
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 53,
                        "end": 63
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 31,
                "end": 64
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 768,
                                "start": 92,
                                "end": 100
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "blah",
                                            "rawText": "blah",
                                            "flags": 768,
                                            "start": 100,
                                            "end": 105
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "arguments",
                                                "rawText": "arguments",
                                                "flags": 768,
                                                "start": 107,
                                                "end": 117
                                            },
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "Symbol",
                                                    "rawText": "Symbol",
                                                    "flags": 768,
                                                    "start": 118,
                                                    "end": 124
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "iterator",
                                                    "rawText": "iterator",
                                                    "flags": 768,
                                                    "start": 125,
                                                    "end": 133
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 118,
                                                "end": 133
                                            },
                                            "flags": 256,
                                            "start": 107,
                                            "end": 134
                                        },
                                        "flags": 128,
                                        "start": 100,
                                        "end": 134
                                    }
                                ],
                                "flags": 128,
                                "start": 100,
                                "end": 134
                            },
                            "flags": 128,
                            "start": 92,
                            "end": 135
                        },
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 768,
                                "start": 135,
                                "end": 144
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "result",
                                            "rawText": "result",
                                            "flags": 768,
                                            "start": 144,
                                            "end": 151
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 155,
                                                "end": 155
                                            },
                                            "flags": 256,
                                            "start": 153,
                                            "end": 156
                                        },
                                        "flags": 128,
                                        "start": 144,
                                        "end": 156
                                    }
                                ],
                                "flags": 128,
                                "start": 144,
                                "end": 156
                            },
                            "flags": 128,
                            "start": 135,
                            "end": 157
                        },
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 768,
                                "start": 157,
                                "end": 165
                            },
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 768,
                                            "start": 170,
                                            "end": 174
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 128,
                                        "start": 170,
                                        "end": 174
                                    }
                                ],
                                "flags": 128,
                                "start": 170,
                                "end": 174
                            },
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "blah",
                                    "rawText": "blah",
                                    "flags": 768,
                                    "start": 177,
                                    "end": 182
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 183,
                                    "end": 183
                                },
                                "flags": 256,
                                "start": 177,
                                "end": 184
                            },
                            "statement": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "result",
                                                        "rawText": "result",
                                                        "flags": 768,
                                                        "start": 187,
                                                        "end": 202
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "push",
                                                        "rawText": "push",
                                                        "flags": 768,
                                                        "start": 203,
                                                        "end": 207
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 187,
                                                    "end": 207
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "arg",
                                                                "rawText": "arg",
                                                                "flags": 768,
                                                                "start": 208,
                                                                "end": 211
                                                            },
                                                            "operatorToken": {
                                                                "kind": 34098,
                                                                "flags": 768,
                                                                "start": 211,
                                                                "end": 213
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "arg",
                                                                "rawText": "arg",
                                                                "flags": 768,
                                                                "start": 213,
                                                                "end": 217
                                                            },
                                                            "flags": 256,
                                                            "start": 208,
                                                            "end": 217
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 208,
                                                    "end": 217
                                                },
                                                "flags": 256,
                                                "start": 187,
                                                "end": 218
                                            },
                                            "flags": 128,
                                            "start": 187,
                                            "end": 219
                                        }
                                    ],
                                    "multiLine": true,
                                    "flags": 128,
                                    "start": 187,
                                    "end": 219
                                },
                                "flags": 128,
                                "start": 185,
                                "end": 225
                            },
                            "awaitKeyword": null,
                            "flags": 128,
                            "start": 157,
                            "end": 225
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 768,
                                "start": 225,
                                "end": 236
                            },
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "flags": 256,
                                    "start": 236,
                                    "end": 260
                                },
                                "flags": 256,
                                "start": 236,
                                "end": 260
                            },
                            "flags": 128,
                            "start": 1,
                            "end": 225
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 92,
                    "end": 261
                },
                "flags": 256,
                "start": 90,
                "end": 263
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 147,
                    "types": [
                        {
                            "kind": 134234345,
                            "flags": 768,
                            "start": 67,
                            "end": 73
                        },
                        {
                            "kind": 134234345,
                            "flags": 768,
                            "start": 74,
                            "end": 81
                        },
                        {
                            "kind": 134234345,
                            "flags": 768,
                            "start": 82,
                            "end": 89
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 65,
                    "end": 90
                },
                "flags": 0,
                "start": 64,
                "end": 90
            },
            "flags": 256,
            "start": 0,
            "end": 263
        }
    ],
    "isModule": false,
    "text": "function doubleAndReturnAsArray(x: number, y: number, z: number): [number, number, number] {\n    let blah = arguments[Symbol.iterator];\n\n    let result = [];\n    for (let arg of blah()) {\n        result.push(arg + arg);\n    }\n    return <[any, any, any]>result;\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 254,
            "end": 260
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 260,
            "end": 261
        }
    ],
    "start": 0,
    "end": 263
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

