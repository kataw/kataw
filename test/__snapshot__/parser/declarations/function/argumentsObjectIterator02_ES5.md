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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "doubleAndReturnAsArray",
                "rawText": "doubleAndReturnAsArray",
                "flags": 96,
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
                            "flags": 96,
                            "start": 32,
                            "end": 33
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 32,
                        "end": 33
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 31,
                "end": 34
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 33,
                    "end": 33
                },
                "flags": 32,
                "start": 33,
                "end": 33
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "start": 34,
                        "end": 41
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 42,
                        "end": 44
                    }
                ],
                "flags": 32,
                "start": 34,
                "end": 44
            },
            "flags": 16,
            "start": 34,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "start": 45,
                        "end": 52
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 53,
                        "end": 55
                    }
                ],
                "flags": 32,
                "start": 45,
                "end": 55
            },
            "flags": 16,
            "start": 45,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "number",
                "rawText": "number",
                "flags": 96,
                "start": 56,
                "end": 63
            },
            "flags": 16,
            "start": 56,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "number",
                            "rawText": "number",
                            "flags": 96,
                            "start": 67,
                            "end": 73
                        },
                        {
                            "kind": 134299649,
                            "text": "number",
                            "rawText": "number",
                            "flags": 96,
                            "start": 74,
                            "end": 81
                        },
                        {
                            "kind": 134299649,
                            "text": "number",
                            "rawText": "number",
                            "flags": 96,
                            "start": 82,
                            "end": 89
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 67,
                    "end": 89
                },
                "flags": 32,
                "start": 65,
                "end": 90
            },
            "flags": 16,
            "start": 65,
            "end": 90
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
                            "flags": 81,
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
                                        "flags": 96,
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
                                            "flags": 96,
                                            "start": 107,
                                            "end": 117
                                        },
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "Symbol",
                                                "rawText": "Symbol",
                                                "flags": 96,
                                                "start": 118,
                                                "end": 124
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "iterator",
                                                "rawText": "iterator",
                                                "flags": 96,
                                                "start": 125,
                                                "end": 133
                                            },
                                            "flags": 32,
                                            "start": 118,
                                            "end": 133
                                        },
                                        "flags": 32,
                                        "start": 107,
                                        "end": 134
                                    },
                                    "flags": 16,
                                    "start": 100,
                                    "end": 134
                                }
                            ],
                            "flags": 33554448,
                            "start": 100,
                            "end": 134
                        },
                        "flags": 33554448,
                        "start": 92,
                        "end": 135
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 81,
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
                                        "flags": 96,
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
                                            "flags": 32,
                                            "start": 155,
                                            "end": 155
                                        },
                                        "flags": 32,
                                        "start": 153,
                                        "end": 156
                                    },
                                    "flags": 16,
                                    "start": 144,
                                    "end": 156
                                }
                            ],
                            "flags": 33554448,
                            "start": 144,
                            "end": 156
                        },
                        "flags": 33554448,
                        "start": 135,
                        "end": 157
                    },
                    {
                        "kind": 167,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 1,
                            "start": 157,
                            "end": 165
                        },
                        "ofKeyword": {
                            "kind": 16793717,
                            "flags": 64,
                            "start": 174,
                            "end": 177
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
                                        "flags": 96,
                                        "start": 170,
                                        "end": 174
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 170,
                                    "end": 174
                                }
                            ],
                            "flags": 33554448,
                            "start": 170,
                            "end": 174
                        },
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "blah",
                                "rawText": "blah",
                                "flags": 96,
                                "start": 177,
                                "end": 182
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 183,
                                "end": 183
                            },
                            "flags": 32,
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
                                                    "flags": 96,
                                                    "start": 187,
                                                    "end": 202
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "push",
                                                    "rawText": "push",
                                                    "flags": 96,
                                                    "start": 203,
                                                    "end": 207
                                                },
                                                "flags": 32,
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
                                                            "flags": 96,
                                                            "start": 208,
                                                            "end": 211
                                                        },
                                                        "operatorToken": {
                                                            "kind": 34098,
                                                            "flags": 64,
                                                            "start": 211,
                                                            "end": 213
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "arg",
                                                            "rawText": "arg",
                                                            "flags": 96,
                                                            "start": 213,
                                                            "end": 217
                                                        },
                                                        "flags": 32,
                                                        "start": 208,
                                                        "end": 217
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 208,
                                                "end": 217
                                            },
                                            "flags": 32,
                                            "start": 187,
                                            "end": 218
                                        },
                                        "flags": 16,
                                        "start": 187,
                                        "end": 219
                                    }
                                ],
                                "flags": 17,
                                "start": 187,
                                "end": 219
                            },
                            "flags": 16,
                            "start": 185,
                            "end": 225
                        },
                        "awaitKeyword": null,
                        "flags": 16,
                        "start": 157,
                        "end": 225
                    },
                    {
                        "kind": 161,
                        "returnKeyword": {
                            "kind": 37757022,
                            "flags": 1,
                            "start": 225,
                            "end": 236
                        },
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 32,
                                "start": 236,
                                "end": 260
                            },
                            "flags": 32,
                            "start": 236,
                            "end": 260
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 225
                    }
                ],
                "flags": 17,
                "start": 92,
                "end": 261
            },
            "flags": 16,
            "start": 90,
            "end": 263
        }
    ],
    "isModule": false,
    "source": "function doubleAndReturnAsArray(x: number, y: number, z: number): [number, number, number] {\n    let blah = arguments[Symbol.iterator];\n\n    let result = [];\n    for (let arg of blah()) {\n        result.push(arg + arg);\n    }\n    return <[any, any, any]>result;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 263
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 33, end: 34
✖ Expected a ')' to match the '(' token here - start: 33, end: 34
✖ Unexpected token. - start: 33, end: 34
✖ Declaration or statement expected - start: 33, end: 34
✖ Expected a `;` - start: 44, end: 45
✖ Declaration or statement expected - start: 44, end: 45
✖ Expected a `;` - start: 55, end: 56
✖ Declaration or statement expected - start: 55, end: 56
✖ Expected a `;` - start: 63, end: 64
✖ Declaration or statement expected - start: 63, end: 64
✖ Declaration or statement expected - start: 64, end: 65
✖ Expected a `;` - start: 90, end: 92
✖ A return statement can only be used within a function_body - start: 225, end: 236
✖ Expected a ')' to match the '(' token here - start: 260, end: 261

```

