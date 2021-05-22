# Kataw parser test case

## Input

`````js
function asReversedTuple(a: number, b: string, c: boolean): [boolean, string, number] {
    let [x, y, z] = arguments;

    return [z, y, x];
}
`````

## Output

### CST

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
                "text": "asReversedTuple",
                "rawText": "asReversedTuple",
                "flags": 96,
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
                            "flags": 96,
                            "start": 25,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 25,
                        "end": 26
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 24,
                "end": 27
            },
            "contents": null,
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 134234345,
                    "flags": 64,
                    "start": 27,
                    "end": 34
                },
                "flags": 0,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 35,
                "end": 37
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "b",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 35,
                    "end": 37
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 37,
                "end": 38
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 96,
                            "start": 38,
                            "end": 45
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 46,
                            "end": 48
                        }
                    ],
                    "flags": 32,
                    "start": 38,
                    "end": 48
                },
                "flags": 16,
                "start": 38,
                "end": 48
            },
            "flags": 16,
            "start": 35,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "boolean",
                "rawText": "boolean",
                "flags": 96,
                "start": 49,
                "end": 57
            },
            "flags": 16,
            "start": 49,
            "end": 57
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
                            "text": "boolean",
                            "rawText": "boolean",
                            "flags": 96,
                            "start": 61,
                            "end": 68
                        },
                        {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 96,
                            "start": 69,
                            "end": 76
                        },
                        {
                            "kind": 134299649,
                            "text": "number",
                            "rawText": "number",
                            "flags": 96,
                            "start": 77,
                            "end": 84
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 61,
                    "end": 84
                },
                "flags": 32,
                "start": 59,
                "end": 85
            },
            "flags": 16,
            "start": 59,
            "end": 85
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 81,
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
                                                        "flags": 96,
                                                        "start": 97,
                                                        "end": 98
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
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
                                                        "flags": 96,
                                                        "start": 99,
                                                        "end": 101
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
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
                                                        "flags": 96,
                                                        "start": 102,
                                                        "end": 104
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 102,
                                                    "end": 104
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 97,
                                            "end": 104
                                        },
                                        "flags": 32,
                                        "start": 95,
                                        "end": 105
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 134299649,
                                        "text": "arguments",
                                        "rawText": "arguments",
                                        "flags": 96,
                                        "start": 107,
                                        "end": 117
                                    },
                                    "flags": 16,
                                    "start": 95,
                                    "end": 117
                                }
                            ],
                            "flags": 33554448,
                            "start": 95,
                            "end": 117
                        },
                        "flags": 33554448,
                        "start": 87,
                        "end": 118
                    },
                    {
                        "kind": 161,
                        "returnKeyword": {
                            "kind": 37757022,
                            "flags": 1,
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
                                        "flags": 96,
                                        "start": 132,
                                        "end": 133
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 134,
                                        "end": 136
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 137,
                                        "end": 139
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 132,
                                "end": 139
                            },
                            "flags": 32,
                            "start": 130,
                            "end": 140
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 118
                    }
                ],
                "flags": 17,
                "start": 87,
                "end": 141
            },
            "flags": 16,
            "start": 85,
            "end": 143
        }
    ],
    "isModule": false,
    "source": "function asReversedTuple(a: number, b: string, c: boolean): [boolean, string, number] {\n    let [x, y, z] = arguments;\n\n    return [z, y, x];\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 143
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 26, end: 27
✖ Expected a ')' to match the '(' token here - start: 26, end: 27
✖ Declaration or statement expected - start: 34, end: 35
✖ Expected a `;` - start: 48, end: 49
✖ Expected a `;` - start: 57, end: 58
✖ Declaration or statement expected - start: 58, end: 59
✖ Expected a `;` - start: 85, end: 87
✖ A return statement can only be used within a function_body - start: 118, end: 130

```

